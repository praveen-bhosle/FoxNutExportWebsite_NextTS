'use client'
import { useRouter, usePathname } from 'next/navigation'
import './globals.css'
import Footer from './new/Footer'
import Image from 'next/image'
import { useState, useEffect } from 'react'




export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {

  const router = useRouter();
  const url = usePathname();
  console.log(url);

  useEffect(
    url === '/' ?
      () => { router.push('/new') } : () => { }, []
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