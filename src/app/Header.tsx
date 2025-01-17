"use client"
import React, { useState } from 'react'

import Link from 'next/link' 
import Image from 'next/image'

const Header = () => { 
  
  const [isOpen,setIsOpen] = useState(false) ;  

  return ( 
    <div>
    <div className='flex justify-between mb-4'>   
    <div className='relative bottom-[4px]'>    
    <Link href={"/"}> ...  </Link>   
    <Link href={'/'} className='text-sm '  > YK DEVOUT EXPORTS </Link>
    </div> 

   <div className='flex gap-2'>
   <Link href={"/"} className='' > <Image src="/home.svg" alt="home" width={15} height={15} /> </Link >  
   <Link href={"/"} > <Image src="/cart.svg" alt="cart"  width={15} height={15}/>  </Link >  
    <Link href={"./auth/signup"} className='px-2  rounded-[12px]  text-white bg-black py-[3px] mr-[5px]  hidden sm:inline'> Sign up </Link> 
    <Link href={"./auth/signin"} className='px-2 rounded-[12px]  text-white bg-black py-[3px]  hidden sm:inline '> Log in  </Link>   

    <Link onClick={()=> { setIsOpen( (prev) => !prev   )  }} href="" className='sm:opacity-0' >         
         { isOpen? <Image src="/close.svg" width={15} height={15}   alt="image" /> : <Image alt="image" src="/menu.svg" width={15 } height ={15 } />   
          }
   </Link >  
    </div>    
    </div>  
 {  isOpen && 
    (<div className=''>   
    <Link className='block w-[90vw] px-2 py-1  hover:bg-custom-hover text-custom-subheading my-2 rounded-md' href={'./auth/sigup'}  > Sign Up </Link>
    <Link className='block w-[90vw] px-2 py-1 hover:bg-custom-hover text-custom-subheading my-2  rounded-md'  href={'./auth/signin'}> Sign In  </Link> 
   </div>)  } 
    </div> 
  )
}

export default Header 