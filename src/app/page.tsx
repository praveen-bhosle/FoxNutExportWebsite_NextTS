
import React from 'react'  
//import Image from 'next/image' 

//import Link from 'next/link' 
import Products from './Products' 
import ProductCard from './ProductCard'




const page = () => {
  return (
    <div className='my-4  mx-2' > 
       
    <span className='text-custom-heading text-4xl   w-[150px]   select-none'>  Order Makhana  </span> 
        
    
  
    <div className='text-2xl text-custom-subheading my-2'> Without Handpicked </div>  
   <div className='grid grid-cols-2 gap-2 '>  

   
     
 { 
  Products.map( ( element,index ) =>    
   element.quality == 'Without Handpicked' && 
   
  (  <ProductCard key={index}  element={element} /> 
  )
   )
 }

    
  
    </div>  
  
  <br/> 
    <hr/> 


    <div className='text-2xl text-custom-subheading my-2'> Semi Handpicked </div>  
   <div className='grid grid-cols-2 gap-2 '>  

   
     
 { 
  Products.map( ( element,index ) =>    
   
   element.quality == 'Semi Handpicked' && 
   
  (  <ProductCard  element={element} />  


  )

   )
 }

    
  
    </div>  

    <br/> 
    <hr/> 


    <div className='text-2xl text-custom-subheading my-2'>Handpicked </div>  
   <div className='grid grid-cols-2 gap-2  '>  

   
     
 { 
  Products.map( ( element,index ) =>     

     
   
   element.quality == 'Handpicked' &&    
    

    ( 
      <ProductCard  element={element} />  


  ) 

   )
 }

    
  
    </div>  
    </div>

    
  )
}

export default page