import { PrismaClient } from '@prisma/client'
import { encrypt } from '@/app/app/lib/session'
import { cookies } from 'next/headers'
import { NextResponse, NextRequest } from 'next/server'

const prisma = new PrismaClient()

import { encryptCredentials } from '@/app/app/lib/session'

export async function POST (req: NextRequest) {
  const { OTP, otpId, email } = await req.json()
  try {
    await prisma.$connect()
    console.log('database connected')
    const verified = await prisma.oTPStore.findUnique({
      where: { id: otpId }
    })

    if (!verified || verified?.otp != OTP) {
      return NextResponse.json(
        { success: 'false', msg: 'invalid otp' },
        { status: 400 }
      )
    }

    const user = await prisma.user.create({
      data: { email: email }
    })

    const id = user.id

    const expiresAt = 24 * 60 * 60 * 1000

    const sessionObject = encrypt(
      { id },
      encryptCredentials.key,
      encryptCredentials.iv
    )

    console.log(sessionObject)
    const cookieStore = await cookies()

    cookieStore.set('session', sessionObject, {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: false,
      path: '/'
    })

    return NextResponse.json(
      { success: 'true', msg: 'user signed up successfully' },
      { status: 200 }
    )
  } catch (e) {
    console.log(e)
    return NextResponse.json({ success: 'false', msg: 'internal server error' })
  }
}
