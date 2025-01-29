import { cookies } from 'next/headers'

import { decrypt } from '../app/lib/session'
import { encryptCredentials } from '../app/lib/session'

export async function GET (req: Request) {
  const cookieStore = await cookies()
  const value = cookieStore.get('x')
  const session = cookieStore.get('session')

  if (session) {
    const decrypted = decrypt(
      session.toString(),
      encryptCredentials.key,
      encryptCredentials.iv
    )
    console.log(cookieStore)
    return Response.json({ msg: 'hi there  ', value, session, decrypted })
  }
}
