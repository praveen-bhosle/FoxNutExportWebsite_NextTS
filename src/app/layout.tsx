'use client'
import { useRouter, usePathname } from 'next/navigation'
import './globals.css'

import { useEffect } from 'react'




export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {

  const router = useRouter();
  const url = usePathname();
  console.log(url);

  const a = () => {
    if (url === '/') {
      router.push('/new');
    }
  }

  useEffect(
    a, []
  )

  return (
    <html lang='en'>
      <body className='bg-[#FAFAFA] text-black'>
        <div className='' >
          {children}
        </div>
      </body>
    </html>
  )
}