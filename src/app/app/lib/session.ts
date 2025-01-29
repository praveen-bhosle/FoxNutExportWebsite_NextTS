import 'server-only'
import { cookies } from 'next/headers'
import crypto from 'crypto'

if (!process.env.AES_KEY) {
  throw new Error('AES_KEY is undefined')
}

if (!process.env.AES_IV) {
  throw new Error('AES_IV is undefined')
}

const key = Buffer.from(process.env.AES_KEY, 'base64')
const iv = Buffer.from(process.env.AES_IV, 'base64')

export const encryptCredentials = {
  key,
  iv
}

export const encrypt = (
  data: string | object,
  key: Buffer,
  iv: Buffer
): string => {
  if (typeof data === 'object') {
    data = JSON.stringify(data)
  }
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv)
  let encrypted = cipher.update(data, 'utf8', 'hex')
  encrypted += cipher.final('hex')
  return encrypted
}

export const decrypt = (data: string, key: Buffer, iv: Buffer): string => {
  const cipher = crypto.createDecipheriv('aes-256-cbc', key, iv)
  let decrypted = cipher.update(data, 'hex', 'utf8')
  decrypted += cipher.final('utf8')
  return decrypted
}

export async function createSession (userId: number) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

  const sessionObject = { userId, expiresAt }

  const sessionValue = encrypt(sessionObject, key, iv)

  const cookieStore = await cookies()

  cookieStore.set('session', sessionValue, {
    httpOnly: true,
    secure: false,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/'
  })
}

export async function updateSession () {
  const cookies_ = await cookies()
  const session = cookies_.get('session')?.value
  if (!session) return
  const payload = decrypt(session, key, iv)
  if (!payload) return
  const expires = 24 * 60 * 60 * 1000
  cookies_.set('session', session, {
    expires: expires,
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    path: '/'
  })
}

export const deleteSession = async () => {
  const cookieStore = await cookies()
  cookieStore.delete('session')
}

export const verifySession = async () => {
  const sessionValue = (await cookies()).get('session')?.value
  if (!sessionValue) return { isAuth: false }
  const payload = decrypt(sessionValue, key, iv)
  const payloadParsed = JSON.parse(payload)
  if (!payloadParsed.userId) {
    return { isAuth: false }
  }
  return { isAuth: true, userId: payloadParsed.userId }
}
