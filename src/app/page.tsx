
import React from 'react'  
import Image from 'next/image' 

//import Link from 'next/link' 
import Products from './Products'




const page = () => {
  return (
    <div className='my-4  mx-2' > 
       
    <span className='text-custom-heading text-4xl   w-[150px]   select-none'>  Order Makhana  </span> 
        

     

    <div > Products  </div> 
   <div className='grid grid-cols-2 gap-2 '> 
     
 { 
  Products.map( ( element,index ) =>   ( <div key={index} >   

    <span className='text-md text-custom-subheading'>  {element.size} Size Fox Nuts {" "} {element.quality}  </span>  <br/>
    <span className='text-sm'> {element.sizeString}  </span> 
    <Image src={element.image} alt='small sized' width={300} height={300}  /> 
     
   </div>  


  )

   )
 }

    
  
    </div>  
    </div>

    
  )
}

export default page