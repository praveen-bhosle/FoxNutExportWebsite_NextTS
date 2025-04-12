'use client'

import React, { Suspense } from 'react'
import Image from 'next/image'
import { useState } from 'react'

import { useSearchParams } from 'next/navigation'

import Products from '../lib/Products'

import ProductCard from '../components/ProductCard'

import { useStore } from '../layout'
import { useRouter } from 'next/navigation'


import ProductCard2 from '../components/ProductCard2'








const PageBar = () => {


    const productId = useSearchParams()?.get('productId');

    const [index, setIndex] = useState(0);

    const addToCart = useStore(state => state.addToCart);

    const cartOpen = useStore(state => state.cartOpen)


    const router = useRouter();

    const [quantity, setQuantity] = useState(1);


    if (productId && typeof (parseInt(productId)) === 'number') {
        const productObject = Products[parseInt(productId) - 1];


        const quality = productObject.quality;




        return (
            <div className='p-2'>


                <div className='p-2  md:flex md:gap-4 lg:opacity -0' >


                    <div className='w-full  max-w-md  '>
                        <ProductCard2 element={productObject} />
                    </div>


                    <div className=' mt-[10px] md:mt-0  flex flex-col gap-2  '>

                        <span className='text-4xl font-bold'> {productObject.sizeStringA}  Makhana   </span>
                        <span className='flex '>
                            <Image src='/star.svg' width={30} height={20} alt='img' />
                            <Image src='/star.svg' width={30} height={20} alt='img' />
                            <Image src='/star.svg' width={30} height={20} alt='img' />
                            <Image src='/star.svg' width={30} height={20} alt='img' />
                            <Image src='/star.svg' width={30} height={20} alt='img' />
                            <span className='relative top-[1px] mx-2 text-xl'> 1234 Reviews  </span>
                        </span>
                        <span className='text-xl' >  Size :    {productObject.sizeStringB}  </span>

                        <span className='lg:text-lg'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quae reprehenderit fugiat quo voluptas possimus vero laborum ex, aspernatur iusto ratione veritatis dolore, iste aliquid culpa! Eligendi voluptates esse, assumenda amet placeat earum nihil ab voluptatibus error iusto mollitia in nulla enim. Possimus, soluta illo voluptate, quasi, atque expedita qui dolores dicta consectetur veniam consequatur tenetur nesciunt iste corrupti aspernatur laudantium. Hic, nihil iste adipisci, modi dolorum praesentium blanditiis repellat id molestiae recusandae vero esse, corporis soluta? Beatae dignissimos corrupti hic possimus nihil natus sit ipsam, vero rem reprehenderit quae odit molestias, dolores est, ratione porro commodi exercitationem modi! Necessitatibus. </span>

                        <div className='border-2 rounded-sm '>
                            <span className='text-lg'>  Price  </span> <br />
                            <span className='text-2xl font-bold text-black'>  {productObject.price} </span>
                        </div>

                        <div className='flex justify-between '>
                            <div className='opacity-0 basis-1/3 flex border-2 justify-around font-bold text-2xl  ' >

                                <div onClick={() => { quantity > 1 && setQuantity(prev => prev - 1) }} className='cursor-pointer select-none '    >   <Image src='/minus.svg' width={30} height={30} alt='image' />  </div>
                                <div> {quantity} </div>
                                <div onClick={() => { setQuantity(prev => prev + 1) }} className='cursor-pointer select-none'>   <Image src='/plus.svg' width={30} height={30} alt='img' />  </div>

                            </div>
                            <button className='basis-1/2 text-lg bg-black text-white  font-bold' onClick={() => { addToCart(productObject.productId); cartOpen() }}  >   ADD TO CART  </button>
                        </div>



                    </div>
                </div>

                <hr />

                <div className='py-4 '>
                    <div className='font-bold text-2xl text-black'> {quality} Makhana other products </div>

                    <div className='grid grid-cols-2 gap-2 mt-2 md:grid-cols-3 lg:grid-cols-4'>

                        {Products.map((element, index) => {
                            if (element.quality === quality && element.productId !== productObject.productId) {
                                return (<ProductCard key={index} element={element} />)
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

export default function Page() {
    return (
        <Suspense fallback={<div> Loading... </div>}>
            <PageBar />
        </Suspense>
    )
} 