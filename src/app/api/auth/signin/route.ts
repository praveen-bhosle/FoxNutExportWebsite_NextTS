import bcrypt from 'bcrypt'

import { cookies } from 'next/headers'

import { encrypt } from '@/app/app/lib/session'
import { encryptCredentials } from '@/app/app/lib/session'

import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST (request: Request) {
  console.log('request came')
  try {
    const parsedRequest = await request.json()

    if (parsedRequest.email) {
      await prisma.$connect()
      const user = await prisma.user.findUnique({
        where: {
          email: parsedRequest.email
        }
      })

      if (!user) {
        return NextResponse.json(
          {
            success: false,
            msg: 'email not registered.'
          },
          { status: 200 }
        )
      }

      if (!user.password) {
        return NextResponse.json(
          {
            success: false,
            msg: 'Password is not set for the email id.'
          },
          { status: 200 }
        )
      }

      const compare = await bcrypt.compare(
        parsedRequest.password,
        user.password
      ) // returns true or false.

      if (!compare) {
        return NextResponse.json(
          {
            success: false,
            msg: 'incorrect password'
          },
          { status: 200 }
        )
      }

      const sessionObject = encrypt(
        { id: user.id },
        encryptCredentials.key,
        encryptCredentials.iv
      )
      const cookieStore = await cookies()
      cookieStore.set('session', sessionObject, {
        httpOnly: true,
        secure: false,
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        sameSite: 'lax'
      })
      return NextResponse.json({ success: true }, { status: 200 })
    } else {
      const user = await prisma.user.findUnique({
        where: {
          phone: parsedRequest.phone
        }
      })

      if (!user) {
        return NextResponse.json(
          {
            success: false,
            msg: 'Phone not registered.'
          },
          { status: 200 }
        )
      }

      if (!user.password) {
        return NextResponse.json(
          {
            success: false,
            msg: 'Password is not set for the contact number.'
          },
          { status: 200 }
        )
      }

      const compare = await bcrypt.compare(
        parsedRequest.password,
        user.password
      ) // returns true or false.

      if (!compare) {
        return NextResponse.json(
          {
            success: false,
            msg: 'incorrect password'
          },
          { status: 200 }
        )
      }

      const sessionObject = encrypt(
        { id: user.id },
        encryptCredentials.key,
        encryptCredentials.iv
      )
      const cookieStore = await cookies()

      cookieStore.set('session', sessionObject, {
        httpOnly: true,
        secure: false,
        expires: new Date(Date.now() + 7 * 24 * 60 * 60)
      })
      return NextResponse.redirect('/')
    }
  } catch (e) {
    console.log(`error is ${e}`)
    return NextResponse.json(
      { success: false, message: `internal server error. ${e}` },
      { status: 500 }
    )
  }
}
