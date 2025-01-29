import { type NextRequest } from 'next/server'

export async function GET (req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  console.log(searchParams)

  return Response.json(searchParams)
}
