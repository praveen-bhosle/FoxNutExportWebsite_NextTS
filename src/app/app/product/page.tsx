'use client'

import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

import { useSearchParams } from 'next/navigation'

import Products from '../lib/Products'

import ProductCard from '../components/ProductCard'

import { useStore } from '../layout'
import { useRouter } from 'next/navigation'




const page = () => {
    const productId = useSearchParams()?.get('productId');
    const [index, setIndex] = useState(0);

    const addToCart = useStore(state => state.addToCart);

    const cartOpen = useStore(state => state.cartOpen)

    const imageArray = ['/m1.jpg', '/m2.jpg', '/m3.jpg', '/m4.jpg', '/m5.jpg',
        '/m6.jpg',
        '/m7.jpg',
        '/m8.jpg',
        '/m9.jpg',
        '/m10.jpg',
        '/m11.jpg',
        '/m12.jpg',
        '/m13.jpg',
        '/m14.jpg',
        '/m1.jpg', '/m2.jpg', '/m3.jpg', '/m4.jpg', '/m5.jpg',
        '/m6.jpg',
        '/m7.jpg',
        '/m8.jpg',
        '/m9.jpg',
        '/m10.jpg',
        '/m11.jpg',
        '/m12.jpg',
        '/m13.jpg',
        '/m14.jpg',
        '/m1.jpg', '/m2.jpg', '/m3.jpg', '/m4.jpg', '/m5.jpg',
        '/m6.jpg',
        '/m7.jpg',
        '/m8.jpg',
        '/m9.jpg',
        '/m10.jpg',
        '/m11.jpg',
        '/m12.jpg',
        '/m13.jpg',
        '/m14.jpg',
        '/m1.jpg', '/m2.jpg', '/m3.jpg', '/m4.jpg', '/m5.jpg',
        '/m6.jpg',
        '/m7.jpg',
        '/m8.jpg',
        '/m9.jpg',
        '/m10.jpg',
        '/m11.jpg',
        '/m12.jpg',
        '/m13.jpg',
        '/m14.jpg',
        '/m1.jpg', '/m2.jpg', '/m3.jpg', '/m4.jpg', '/m5.jpg',
        '/m6.jpg',
        '/m7.jpg',
        '/m8.jpg',
        '/m9.jpg',
        '/m10.jpg',
        '/m11.jpg',
        '/m12.jpg',
        '/m13.jpg',
        '/m14.jpg',
        '/m1.jpg', '/m2.jpg', '/m3.jpg', '/m4.jpg', '/m5.jpg',
        '/m6.jpg',
        '/m7.jpg',
        '/m8.jpg',
        '/m9.jpg',
        '/m10.jpg',
        '/m11.jpg',
        '/m12.jpg',
        '/m13.jpg',
        '/m14.jpg',
        '/m1.jpg', '/m2.jpg', '/m3.jpg', '/m4.jpg', '/m5.jpg',
        '/m6.jpg',
        '/m7.jpg',
        '/m8.jpg',
        '/m9.jpg',
        '/m10.jpg',
        '/m11.jpg',
        '/m12.jpg',
        '/m13.jpg',
        '/m14.jpg',
    ]



    const router = useRouter();




    if (productId && typeof (parseInt(productId)) === 'number') {
        const productObject = Products[parseInt(productId) - 1];

        const quality = productObject.quality;

        return (
            <div className='p-2'>



                <div className='text-xl font-bold '> {productObject.quality}  Makahana </div>

                <div className='text-lg'> Size: {productObject.sizeStringA}  || {productObject.sizeStringB} </div>

                <div className='p-2 flex border-black '>
                    <div onClick={() => setIndex(index => (index - 1) % 4)} className=' flex justify-center w-[15%] ' >
                        <Image src='/back.svg' alt='' width={20} height={20} />
                    </div>
                    <div className=' border flex justify-between p-4 w-[70%]'>
                        <img src={imageArray[parseInt(productId) * 4 + index]} alt='' className='w-full aspect-video' />
                    </div>
                    <div className='flex justify-center w-[15%]' onClick={() => setIndex(index => (index + 1) % 4)}>
                        <Image src='/next.svg' alt='' width={20} height={20} />
                    </div>
                </div>

                <div className='font-bold py-2 flex '>
                    <div className='w-[20%]'>  Color: </div>   <div>   <button className='bg-gray-300 rounded-md px-2'>  Red  </button>  <button className='bg-gray-300 rounded-md px-2'> White  </button>  <button className='bg-gray-300 rounded-md px-2'> Green </button> </div>
                </div>
                <div className='font-bold py-2 flex '>
                    <div className='w-[20%]'>  Texture : </div> <div>    <button className='bg-gray-300 rounded-md px-2'>  xyz  </button>  <button className='bg-gray-300 rounded-md px-2'> abc  </button>  <button className='bg-gray-300 rounded-md px-2'> def </button> </div>
                </div>

                <div className='font-bold py-2 flex '>
                    <div className='w-[20%]'>  Price : </div> <div>  {productObject.price}  </div>
                </div>

                <div className='py-2 flex justify-center gap-4'>




                    <button className='px-4 py-2 bg-black text-white mr-2 rounded-2xl' onClick={() => { addToCart(productObject.productId); cartOpen(); }}>
                        Add to cart
                    </button>


                    <button className='px-4 py-2  bg-black text-white mr-2 rounded-2xl' onClick={() => { addToCart(productObject.productId); router.replace('/app/checkout') }}     >
                        Buy now
                    </button>


                </div>



                <hr />


                <div className='py-4'>

                    <div className='font-bold text-2xl'> {quality} Makhana other products </div>

                    <div className='grid grid-cols-2 gap-2'>

                        {Products.map(element => {
                            if (element.quality === quality && element.productId !== productObject.productId) {
                                return (<ProductCard element={element} />)
                            }
                            return null;
                        }
                        )}
                    </div>

                </div>

            </div>
        )
    }

    else {

        return <div>
            Invalid query parameters.
        </div>

    }
}



export default page  