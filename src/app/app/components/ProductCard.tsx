'use client'
import React from 'react'
import Products, { Product } from '../lib/Products'
import Image from 'next/image'

import { useStore } from '../layout'

import { useRouter } from 'next/navigation'

const ProductCard = ({ element }: { element: Product }) => {
  const addToCart = useStore(set => set.addToCart)
  const cartOpen = useStore(set => set.cartOpen)

  const router = useRouter();

  return (
    <div className='bg-[#2A2A2A]  hover:bg-black rounded-lg   text-white cursor-pointer  h-[30vh] border-white border-2' onClick={() => router.replace(`/app/product?productId=${element.productId}`)}>
      <div className=' p-2 flex flex-col justify-between h-[100%] gap-2 '>
        <div className=' font-bold'>
          <span className='text-md  block'> {element.sizeStringA} </span>

          <span className='text-md  block'> {element.sizeStringB} </span>
        </div>

        <div className=' flex justify-center h-[60%] w-[100%]'>
          <img src={element.image} />
        </div>

        <div className=''>
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
            className='bg-white text-black rounded-[12px] px-2 py-[1px]  w-[100%]'
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
