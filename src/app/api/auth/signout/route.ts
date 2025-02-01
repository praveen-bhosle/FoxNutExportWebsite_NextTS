import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
export async function PUT (request: NextRequest) {
  const cookieStore = await cookies()
  cookieStore.delete('session')
  return NextResponse.json({ msg: 'Logged out successfully' }, { status: 200 })
}
