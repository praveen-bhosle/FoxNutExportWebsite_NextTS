import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export async function POST (req: NextRequest) {
  const { email, password } = await req.json()

  try {
    await prisma.$connect()

    const user = await prisma.user.findUnique({ where: { email } })

    const salt = await bcrypt.genSalt(10)

    const hashedPassword = await bcrypt.hash(password, salt)

    if (!user) {
      return NextResponse.json(
        { success: 'false', msg: 'The email does not exist.' },
        { status: 200 }
      )
    }
    await prisma.user.update({
      where: {
        email
      },
      data: { password: hashedPassword }
    })

    return NextResponse.json({ success: 'true' }, { status: 201 })
  } catch (e) {
    console.log('Error is' + e)
    return NextResponse.json(
      { success: 'false', msg: 'Internal server error' },
      { status: 500 }
    )
  }
}
