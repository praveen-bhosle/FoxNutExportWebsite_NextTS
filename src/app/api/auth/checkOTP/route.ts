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
        { status: 200 }
      )
    }

    const user = await prisma.user.create({
      data: { email: email }
    })

    const id = user.id

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

    console.log(cookieStore)

    return Response.json(
      { success: 'true', msg: 'user signed up successfully' },
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
      }
    )
  } catch (e) {
    console.log(e)
    return Response.json(
      { success: 'false', msg: 'internal server error' },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
      }
    )
  }
}
