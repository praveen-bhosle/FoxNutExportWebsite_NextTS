import { PrismaClient } from '@prisma/client'
import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'
import { decrypt } from '@/app/app/lib/session'
import { encryptCredentials } from '@/app/app/lib/session'

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

        const user2: { [key: string]: any } = { ...user }

        user2.loggedIn = true

        delete user2.password

        const profile = await prisma.profile.findUnique({
          where: { userID: user.id }
        })

        if (!profile) {
          user2.profileCreated = false
          return Response.json(user2)
        } else {
          const profile2 = profile
          user2.profileCreated = true
          Object.assign(user2, profile2)
          delete user2.userID
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
