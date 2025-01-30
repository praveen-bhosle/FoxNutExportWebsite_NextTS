import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET () {
  try {
    await prisma.$connect()
    const user = await prisma.user.findUnique({
      where: {
        email: 'praveen'
      }
    })

    return Response.json({ msg: 'hi', x: user?.id })
  } catch (e) {
    console.log('Error is' + e)
    return Response.json({ msg: 'error' })
  }
}
