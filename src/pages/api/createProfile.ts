import { PrismaClient } from '@prisma/client'
import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export default async function createProfile (req: NextApiRequest) {
  if (process.env.NODE_ENV === 'production') {
    return Response.json({ loggedIn: false }, { status: 200 })
  }
  const body = req.body
  try {
    await prisma.$connect()
    await prisma.profile.create({
      data: body
    })
    return NextResponse.json({ success: 'true' })
  } catch (e) {
    console.log(e)
    return NextResponse.json({ success: 'false', msg: 'Internal server error' })
  }
}
