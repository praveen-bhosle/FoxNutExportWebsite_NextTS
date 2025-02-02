import { PrismaClient } from '@prisma/client'
import { NextApiRequest } from 'next'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST (req: NextRequest) {
  const body = await req.json()
  try {
    await prisma.$connect()
    await prisma.profile.create({
      data: body
    })
    return NextResponse.json({ success: 'true' }, { status: 200 })
  } catch (e) {
    console.log(e)
    return NextResponse.json(
      { success: 'false', msg: 'Internal server error' },
      { status: 500 }
    )
  }
}
