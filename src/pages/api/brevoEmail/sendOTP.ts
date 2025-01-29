import axios from 'axios'
import { z } from 'zod'
import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const zodEmail = z
  .string({
    required_error: 'Email is required',
    invalid_type_error: 'Invalid type for email'
  })
  .email('Inalidemail format')

export default async function sendOTP (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (process.env.NODE_ENV === 'production') {
    return Response.json({ loggedIn: false }, { status: 200 })
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: 'false', msg: 'Method not allowed' })
  }

  const email = await req.body.email

  console.log(email)

  const emailZodVerified = zodEmail.safeParse(email)

  if (!emailZodVerified.success) {
    return res
      .status(400)
      .json({ success: 'false', msg: emailZodVerified.error })
  }

  console.log('zod parsed email', emailZodVerified.data)

  const BREVO_API_KEY = process.env.BREVO_API_KEY

  if (!BREVO_API_KEY) {
    return res
      .status(500)
      .json({ success: 'false', msg: 'internal server error' })
  }

  try {
    await prisma.$connect()

    const user = await prisma.user.findUnique({ where: { email: email } })

    if (user) {
      return res
        .status(400)
        .json({ success: 'false', msg: 'Email is already registered.' })
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

        return res.status(200).json({ success: 'true', id: otp_.id })
      } else {
        console.error(response.data)
        return res
          .status(500)
          .json({ success: 'false', msg: 'internal server error' })
      }
    } else {
      console.error('Brave API Error:', response.status, response.data)
      return res
        .status(response.status || 500)
        .json({ error: 'An error occured during registering the email.' })
    }
  } catch (e) {
    console.error(e)
    return res
      .status(500)
      .json({ success: 'false', msg: 'internal server error' })
  }
}
