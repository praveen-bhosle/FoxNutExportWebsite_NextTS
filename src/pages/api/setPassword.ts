import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { hasSubscribers } from 'diagnostics_channel'

const prisma = new PrismaClient()

export default async function setPassword (
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.body

  try {
    await prisma.$connect()

    const user = await prisma.user.findUnique({ where: { email } })

    const salt = await bcrypt.genSalt(10)

    const hashedPassword = await bcrypt.hash(password, salt)

    if (!user) {
      return res
        .status(400)
        .json({ success: 'false', msg: 'The email does not exist.' })
    }
    await prisma.user.update({
      where: {
        email
      },
      data: { password: hashedPassword }
    })

    return res.status(201).json({ success: 'true' })
  } catch (e) {
    return res
      .status(400)
      .json({ success: 'false', msg: 'Internal server error' })
  }
}
