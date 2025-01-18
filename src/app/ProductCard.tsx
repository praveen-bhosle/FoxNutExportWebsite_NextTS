'use client'
import React from 'react'
import Products, { Product } from './Products'
import Image from 'next/image'

import { useStore } from './layout'

const ProductCard = ({ element }: { element: Product }) => {
  const addToCart = useStore(set => set.addToCart)
  const cartOpen = useStore(set => set.cartOpen)

  return (
    <div className='bg-[#2A2A2A] hover:bg-black rounded-lg  text-white '>
      <div className=' p-2 flex flex-col justify-between'>
        <div className='mb-4 font-bold'>
          <span className='text-md  block'> {element.sizeStringA} </span>

          <span className='text-md  block'> {element.sizeStringB} </span>
        </div>

        <div className=''>
          <Image
            src={element.image}
            alt='small sized'
            width={300}
            height={300}
            layout='responsive'
            className='block'
          />
        </div>

        <div className='mt-2'>
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
      </div>{' '}
    </div>
  )
}

export default ProductCard
