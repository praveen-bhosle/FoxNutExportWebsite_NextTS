'use client'
import React from 'react'
import Products, { Product } from '../lib/Products'

import { useStore } from '../layout'

import { useRouter } from 'next/navigation'

import Image from 'next/image'

const ProductCard = ({ element }: { element: Product }) => {
  const addToCart = useStore(set => set.addToCart)
  const cartOpen = useStore(set => set.cartOpen)

  const router = useRouter();

  return (
    <div className='bg-white  p-[1px]   rounded-sm    text-black cursor-pointer  h-[30vh] border-[1px]' onClick={() => router.replace(`/app/product?productId=${element.productId}`)}>
      <div className=' flex flex-col  h-[100%] p-2'>
        <div className='font-bold text-sm h-[20%]'>
          <span className='text-md  block'> {element.sizeStringA} </span>

          <span className='text-md  block'> {element.sizeStringB} </span>
        </div>

        <div className=' flex justify-center h-[55%] w-[100%]'>
          <Image src={element.image} alt='' height={20} width={100} quality={100} />
        </div>

        <div className=' h-[25%]'>
          <span className='text-sm block font-semibold select-none'>
            {' '}
            {element.price}{' '}
          </span>
          <button
            onClick={() => {
              addToCart(element.productId)
              cartOpen()
              console.log(Products)
            }}
            className='bg-black text-white rounded-[12px] px-2 py-[1px]  w-[100%]'
          >
            {' '}
            Add to cart{' '}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
