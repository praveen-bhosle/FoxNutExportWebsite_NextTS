import axios from 'axios'
import { z } from 'zod'
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const zodEmail = z
  .string({
    required_error: 'Email is required',
    invalid_type_error: 'Invalid type for email'
  })
  .email('Inalidemail format')

export async function POST (req: Request) {
  const { email } = await req.json()

  console.log(email)

  const emailZodVerified = zodEmail.safeParse(email)

  if (!emailZodVerified.success) {
    return NextResponse.json(
      { success: 'false', msg: emailZodVerified.error },
      { status: 200 }
    )
  }

  console.log('zod parsed email', emailZodVerified.data)

  const BREVO_API_KEY = process.env.BREVO_API_KEY

  if (!BREVO_API_KEY) {
    return NextResponse.json(
      { success: 'false', msg: 'internal server error' },
      { status: 500 }
    )
  }

  try {
    await prisma.$connect()

    const user = await prisma.user.findUnique({ where: { email: email } })

    if (user) {
      return NextResponse.json(
        { success: 'false', msg: 'Email is already registered.' },
        { status: 200 }
      )
    }

    const url = 'https://api.bravo.com/v3/contacts'
    const data = {
      email: emailZodVerified.data,
      listIds: [2]
    }
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      }
    }
    const response = await axios.post(url, data, options)

    console.log('create contact response:' + response)

    if (response.status === 201 || response.status === 200) {
      const url = 'https://api.brevo.com/v3/smtp/email'

      const otp = Math.floor(100000 + Math.random() * 900000)

      const data = {
        to: [{ email }],
        templateId: 1,
        params: {
          otp
        }
      }

      const response_ = await axios.post(url, data, options)
      console.log(
        'verfication email response' + response_.data + response_.status
      )

      if (response_.status === 201 || response_.status === 200) {
        console.log('flow reached here')
        await prisma.$connect()
        console.log('connected to database')
        console.log(otp)
        const otp_ = await prisma.oTPStore.create({
          data: { otp: otp }
        })
        console.log('otp_ added to database')

        return NextResponse.json(
          { success: 'true', id: otp_.id },
          { status: 200 }
        )
      } else {
        console.error(response.data)
        return NextResponse.json(
          { success: 'false', msg: 'internal server error' },
          { status: 500 }
        )
      }
    } else {
      console.error('Brave API Error:', response.status, response.data)
      return NextResponse.json(
        { error: 'An error occured during registering the email.' },
        { status: 500 }
      )
    }
  } catch (e) {
    console.error(e)
    return NextResponse.json(
      { success: 'false', msg: 'internal server error' },
      { status: 500 }
    )
  }
}
