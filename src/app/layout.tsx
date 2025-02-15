import './globals.css'
import type { Metadata } from 'next'
import type { Viewport } from 'next'


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
        <div className='' >
          {children}
        </div>
      </body>
    </html>
  )
}