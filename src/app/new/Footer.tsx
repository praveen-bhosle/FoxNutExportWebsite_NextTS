import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Footer = () => {
  return (

    <div className='bg-black  text-white px-4 py-4'>
      <div className=' grid grid-cols-2 gap-2 text-lg py-4'>
        <div>
          <div className='text-xl font-bold'> Resources  </div>
          <Link href='' className='hover:underline block'> Blog   </Link>
          <Link href='' className='hover:underline block'> Customer stories  </Link>
        </div>
        <div>
          <div className='text-xl font-bold'> Company  </div>
          <Link href='/about' className='hover:underline block cursor'> About us </Link>
          <Link href='' className='hover:underline block'> Jobs </Link>
        </div>
        <div className='col-span-2'>
          <div className='text-xl font-bold'> Contact Us </div>
          <div ><Image src='/call.svg' alt='image' width={20} height={20} className='inline' /> +917899255947   </div>
          <div className='' > <Image src='/mail.svg' alt='image' width={20} height={20} className='inline' /> ykdevoutexports2024@gmail.com  </div>
          <div > <Image src='/location.svg' alt='image' width={20} height={20} className='inline' />  Rajendra Nagar, Madhubani Purnea, Purnea,  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Purnea,  Purnia- 854301, Bihar, India  </div>
        </div>
      </div>

      <div className='flex  gap-4 px-4 pb-4 '>
        <div className='w-[60px] h-[60px] hover:bg-[#292929] flex justify-center items-center' ><Image src='/instagram.svg' alt='image' width={40} height={40} /> </div>
        <div className='w-[60px] h-[60px] hover:bg-[#292929] flex justify-center items-center'><Image src='/yt.svg' alt='image' width={44} height={44} /></div>
        <div className='w-[60px] h-[60px] hover:bg-[#292929] flex justify-center items-center'><Image src='/facebook.svg' alt='image' width={45} height={45} /></div>
        <div className='w-[60px] h-[60px] hover:bg-[#292929] flex justify-center items-center'><Image src='/x.svg' alt='image' width={50} height={50} /></div>
        <div className='w-[60px] h-[60px] hover:bg-[#292929] flex justify-center items-center'><Link href={'mailto:ykdevoutexports2024@gmail.com?subject=MakhanaOrderQueries'}> <Image src='/mail.svg' alt='mail' width={40} height={40} />  </Link> </div>
      </div>


    </div>
  )
}

export default Footer

/* 

*/

