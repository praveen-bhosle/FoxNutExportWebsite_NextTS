import bcrypt from 'bcrypt'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST (request: Request) {
  try {
    const res = await request.json()

    const { email, password } = res

    const user = await prisma.user.findUnique({
      where: {
        email: email
      }
    })

    if (user) {
      return Response.json({ success: 'false', msg: 'user already exists' })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    await prisma.user.create({
      email: email,
      password: hashedPassword
    })
    return Response.json(
      { success: 'true', msg: 'User created successfully' },
      { status: 100 }
    )
  } catch (e) {
    console.log(e)
    Response.json(
      { success: 'false', message: `internal server error. ${e}` },
      { status: 500 }
    )
  }
}
