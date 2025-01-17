import React from 'react'
import { Product } from './Products'
import Image from 'next/image'

const ProductCard = ( { index  , element } : { index:number  ,element:Product}) => {
  return (
    <div className='bg-red-100 rounded-lg '>
        <div key={index} className=' p-2 flex flex-col justify-between'  >  

 
    <div className='mb-4 font-bold'> 
    <span className='text-md text-custom-subheading block' >  {element.sizeStringA}  </span>  
    
    <span className='text-md text-custom-subheading block' >  {element.sizeStringB}  </span>   
    </div> 
   
    <div className=' '> 
    <Image src={element.image} alt='small sized' width={300} height={300} layout='responsive' className='block'  />  
    </div> 

    <div className='mt-2'> 
    <span className='text-sm block font-semibold select-none' > {element.price}  </span>  
    <button className='bg-black text-white rounded-[12px] px-2 py-[1px]  w-[100%]'> Add to cart </button>
    </div>
   </div>  </div>
  )
}

export default ProductCard