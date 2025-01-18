import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-white text-black mt-4'>
      <Link href='./about'> About </Link>

      <br />

      <Link
        href={
          'mailto:ykdevoutexports2024@gmail.com?subject=MakhanaOrderQueries'
        }
      >
        {' '}
        Mail Us{' '}
      </Link>

      <div className='text-sm text-custom-text '>
        Email: ykdevoutexports2024@gmail.com
        <br />
        Contact: +91 7899255947
        <br />
        Rajendra Nagar ,Madhubani Purnea, Purnea, Purnea, Purnia- 854301, Bihar
        India
      </div>
    </div>
  )
}

export default Footer
