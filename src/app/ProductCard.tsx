import React from 'react' 
import Image from 'next/image';

const ProductCard = ({ size ,  imageArray  } :  { size:String   ,   imageArray: String[]   }) => {
     
    let sizeIntString:string   ; 
    if(size === 'Small'  ) { 
        sizeIntString = ' 5-9 mm || 2-3 Suta'  
    } 
    else  if (size === 'Medium') {  
        sizeIntString = ' 9-12 mm || 3.5-4 Suta'

    }
    else if(size==='Large') { 
     sizeIntString = ' 12-16mm || 4-5 Suta'
    } 
    else { 
       sizeIntString  =  ' More than 16mm ||  5 Suta' 

    }
  
    return ( 
    <div className='my-2 ' >  
     <span className='text-md text-custom-subheading'> {size} Size Fox Nuts  </span>  
     <span className='text-sm'> {sizeIntString} </span> 
    <div className='grid grid-cols-2'>   
  { 
    imageArray.map((element) => ( <div> <Image src= {`${element}`} width={300} height={300} alt="Loading.."  />  
       

     </div> ) )
  }
        

    </div>
    </div> 
  )
}

export default ProductCard