
import React from 'react'  
import Link from 'next/link'

const Footer  = () => {
  return (
    <div className='bg-white text-black mt-4'>
     
     <Link href="./about" > About </Link>   

     <br/> 

    <Link href={'mailto:ykdevoutexports2024@gmail.com?subject=MakhanaOrderQueries'}> Mail Us </Link>
     
    

    </div> 

  
  )
}

export default Footer