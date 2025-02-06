import React from 'react'
import { Product } from '../lib//Products'
import Image from 'next/image'
import { useStore } from '../layout'

const CartItem = ({
  product,
  p2,
  p3
}: {
  product: Product
  p2: number
  p3: number
}) => {
  const addToCart = useStore(state => state.addToCart)
  const removeFromCart = useStore(state => state.removeFromCart)
  const removeOneFromCart = useStore(state => state.removeOneFromCart)

  const p3_ = p3 * product.quantityAdded
  const p4 = p3_.toFixed(2)

  return (
    <>
      <div className='flex my-2 '>
        <div className=''>
          <Image src={product.image} width={150} height={150} alt='image' />
        </div>

        <div className=' p-2 w-[300px] '>
          <div className='text-gray-800 font-bold text-sm '>
            ${p4} || ₹{p2 * product.quantityAdded}
          </div>

          <div className='text-black font-bold text-sm  '>
            Quality: {product.quality}
          </div>

          <div className='text-black  font-semibold text-xs     '>
            Size: {product.sizeStringB} || {product.sizeStringA}
          </div>

          <div className='flex  justify-between '>
            <div className='flex align-center'>
              <button
                onClick={() => {
                  addToCart(product.productId)
                }}
                className='bg-gray-200 rounded-md mr-2'
              >
                <Image src='/plus.svg' width={25} height={25} alt='image' />
              </button>
              <span className='text-black text-2xl font-bold select-none '>
                {product.quantityAdded}
              </span>
              <button
                onClick={() => {
                  removeOneFromCart(product.productId)
                }}
                className='bg-gray-200 rounded-md ml-2'
              >
                <Image src='/minus.svg' width={25} height={25} alt='image' />
              </button>
            </div>

            <button onClick={() => { removeFromCart(product.productId) }} className='block'>
              <Image src='/delete.svg' width={25} height={25} alt='image' />

            </button>
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default CartItem
