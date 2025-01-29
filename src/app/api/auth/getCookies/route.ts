import { cookies } from 'next/headers'

export async function GET (req: Request) {
  const cookieStore = await cookies()
  cookieStore.set('x', '12')

  console.log(cookieStore)
  return Response.json({ msg: 'hi there' })
}
