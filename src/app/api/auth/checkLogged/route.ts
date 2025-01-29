import { PrismaClient } from '@prisma/client'
import { cookies } from 'next/headers'
import { decrypt } from '@/app/app/lib/session'
import { encryptCredentials } from '@/app/app/lib/session'

import { user } from '../../../app/layout'

const prisma = new PrismaClient()

export async function GET () {
  const cookieStore = await cookies()
  const sessionCookie = cookieStore.get('session')
  console.log(sessionCookie)

  console.log(encryptCredentials.iv.length)
  console.log(encryptCredentials.key.length)

  if (sessionCookie) {
    console.log(sessionCookie.value)
    const decrypted = decrypt(
      sessionCookie.value,
      encryptCredentials.key,
      encryptCredentials.iv
    )

    console.log(decrypted)

    const decryptedParsed = JSON.parse(decrypted)

    try {
      if (decryptedParsed.id) {
        await prisma.$connect()

        const user = await prisma.user.findUnique({
          where: {
            id: decryptedParsed.id
          }
        })

        if (!user) {
          return Response.json({ loggedIn: false })
        }

        const user2: user = { loggedIn: false }

        delete user.password

        Object.assign(user2, user)

        user2.loggedIn = true

        const profile = await prisma.profile.findUnique({
          where: { userID: user.id }
        })

        if (!profile) {
          user2.profileCreated = false
          return Response.json(user2)
        } else {
          const profile2 = profile
          delete profile2.userID
          user2.profileCreated = true
          Object.assign(user2, profile2)

          return Response.json(user2)
        }
      }
    } catch (e) {
      console.log('Error is' + e)
      return Response.json({ loggedIn: false })
    }
  } else {
    return Response.json({ loggedIn: false })
  }
}
