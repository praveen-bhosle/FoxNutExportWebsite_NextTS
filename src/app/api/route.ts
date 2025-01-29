import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET () {
  if (process.env.NODE_ENV === 'production') {
    return Response.json({ loggedIn: false }, { status: 200 })
  }
  console.log('reached here ')

  try {
    await prisma.$connect()

    return Response.json({ msg: 'hi' })
  } catch (e) {
    console.log('Error is' + e)
    return Response.json({ msg: 'error' })
  }
}
