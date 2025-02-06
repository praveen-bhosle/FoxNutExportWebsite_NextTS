import axios from 'axios'
import { NextResponse } from 'next/server'

const clientId = process.env.GOOGLE_CLIENT_ID || ''
const clientSecret = process.env.GOOGLE_CLIENT_SECRET

const REDIRECT_URI =
  process.env.GOOGLE_REDIRECT_URI ||
  'http://localhost:3000/auth/google/callback'

export const GET = () => {
  const url =
    `https://accounts.google.com/o/oauth2/v2/auth?` +
    `client_id=${encodeURIComponent(
      clientId
    )}&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}&response_type=code&scope=${encodeURIComponent('profile email')}`
  return NextResponse.redirect(url)
}
