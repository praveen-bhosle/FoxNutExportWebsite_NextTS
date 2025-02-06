import './globals.css'
import type { Metadata } from 'next'
import type { Viewport } from 'next'
import { GoogleOAuthProvider } from '@react-oauth/google'



export const metadata: Metadata = {
  title: 'YK Devout Exports',
  description: 'Order premium makhana',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='bg-[#FAFAFA] text-custom-text'>
        {process.env.GOOGLE_CLIENT_ID ?
          <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>
            <div className='' >
              {children}
            </div>
          </GoogleOAuthProvider> :
          <div className='' >
            {children}
          </div>
        }
      </body>
    </html>
  )
}