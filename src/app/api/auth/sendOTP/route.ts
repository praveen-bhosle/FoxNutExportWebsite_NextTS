import axios from 'axios'
import { makeIssue, z } from 'zod'
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { transporter } from '../../nodeMailer/transporter'

const prisma = new PrismaClient()

const zodEmail = z
  .string({
    required_error: 'Email is required',
    invalid_type_error: 'Invalid type for email'
  })
  .email('Invalid email format')

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

  try {
    console.log('Connecting to prisma.')
    await prisma.$connect()

    console.log('checking for user.')

    console.log(email)

    const user = await prisma.user.findFirst({ where: { email: email } })

    console.log('user' + user)

    if (user) {
      return NextResponse.json(
        { success: 'false', msg: 'Email is already registered.' },
        { status: 200 }
      )
    }

    const otp = Math.floor(100000 + Math.random() * 900000)

    console.log('sending otp')

    const mailOptions = {
      from: 'praveenbhosle1622@gmail.com',
      to: email,
      subject: 'Welcome from YKDEVOUT EXPORTS',
      text: `Your otp for authentication is ${otp}`
    }

    await transporter.sendMail(mailOptions)

    const otp_ = await prisma.oTPStore.create({ data: { otp } })

    return NextResponse.json({ success: 'true', id: otp_.id }, { status: 200 })
  } catch (e) {
    console.log(JSON.stringify(e))
    return NextResponse.json(
      { success: 'false', msg: 'internal server error' },
      { status: 500 }
    )
  } finally {
    ;async () => {
      await prisma.$disconnect()
    }
  }
}
