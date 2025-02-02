import { PrismaClient } from '@prisma/client'
import { cookies } from 'next/headers'
import { decrypt } from '@/app/app/lib/session'
import { encryptCredentials } from '@/app/app/lib/session'

import { user } from '../../../app/layout'

interface sampleUser {
  id: number
  email: string | null | undefined
  phone: string | null | undefined
  password: string | null | undefined
}

interface sampleProfile {
  phone: string | null
  lastName: string | null
  firstName: string | null
  address: string | null
  city: string | null
  state: string | null
  country: string | null
  zipcode: string | null
  userID: number | null | undefined
}

const prisma = new PrismaClient()

export function OPTIONS (request: Request) {
  return new Response(JSON.stringify({ status: 'OK' }), {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    }
  })
}

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
          return new Response(JSON.stringify({ loggedIn: false }), {
            status: 200,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
              'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            }
          })
        }

        const user2: user = { loggedIn: false }

        const user3: sampleUser = { ...user }

        delete user3.password

        Object.assign(user2, user)

        user2.loggedIn = true

        const profile = await prisma.profile.findUnique({
          where: { userID: user.id }
        })

        if (!profile) {
          user2.profileCreated = false
          return new Response(JSON.stringify(user2), {
            status: 200,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
              'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            }
          })
        } else {
          const profile2: sampleProfile = { ...profile }
          delete profile2.userID
          user2.profileCreated = true
          Object.assign(user2, profile2)

          return new Response(JSON.stringify(user2), {
            status: 200,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
              'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            }
          })
        }
      }
    } catch (e) {
      console.log('Error is' + e)
      return new Response(JSON.stringify({ loggedIn: false }), {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
      })
    }
  } else {
    return new Response(JSON.stringify({ loggedIn: false }), {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    })
  }
}
