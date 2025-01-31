import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='bg-white text-black flex justify-between w-full fixed top-0 left-0'>

      <Link href='/' >
        <Image src='/logp.jpeg' alt='' width={50} height={50} />
      </Link>

      <div className='flex gap-4 py-2 px-4'>
        <Link href='/auth/signup'> Sign up  </Link>
        <Link href='/auth/signin'> Log in   </Link>
      </div>
    </div>
  )
}

export default Header