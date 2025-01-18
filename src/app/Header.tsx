'use client'
import React, { useState, useEffect, memo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useStore } from './layout'
import ProductCard from './ProductCard'
import CartItem from './CartItem'

const Header = () => {
  const products = useStore(state => state.products)

  const isCartOpen = useStore(state => state.isCartOpen)

  const cartOpen = useStore(state => state.cartOpen)

  const cartClose = useStore(state => state.cartClose)

  const total = products
    .reduce((accumulator, product) => {
      if (product.addedToCard) {
        accumulator += product.quantityAdded
      }
      return accumulator
    }, 0)
    .toString()

  let total_ = total

  if (parseInt(total) < 10) {
    total_ = '0' + total
  }

  const totalPriceInINR = products.reduce((accumulator, product) => {
    let p1 = product.price.slice(4)

    let p2 = parseFloat(
      p1 ? product.price.slice(1, 5) : product.price.slice(1, 4)
    )

    if (product.quantityAdded > 0) {
      accumulator += product.quantityAdded * p2
    }
    return accumulator
  }, 0)

  function convertToUSD (totalPriceInINR: number): number {
    let y = totalPriceInINR * 0.012

    let ans = y.toFixed(2)

    return parseFloat(ans)
  }

  const totalPriceInUSD = convertToUSD(totalPriceInINR)

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='border  w-full fixed  bg-white  top-[0px] left-[0px] '>
      <div className='flex justify-between mb-2  align-center mx-4 mt-[9px] h-[30px]     '>
        <div className=''>
          <button
            onClick={() => {
              setIsOpen(prev => !prev)
            }}
            className=''
          >
            {isOpen ? (
              <Image src='/close.svg' width={25} height={25} alt='image' />
            ) : (
              <Image alt='image' src='/menu.svg' width={25} height={25} />
            )}
          </button>
        </div>

        <div className='relative bottom-[4px]'>
          <Link href={'/'}> ... </Link>
          <Link href={'/'} className='text-sm '>
            YK DEVOUT EXPORTS
          </Link>
        </div>

        <div>
          <button
            onClick={() => {
              cartOpen()
            }}
          >
            <Image src='/cart.svg' alt='cart' width={25} height={25} />
          </button>
          {parseInt(total_) > 0 ? (
            <div className='w-[20px] h-[20px] bg-black  text-white  text-[11px] rounded-[10px] relative bottom-[40px] left-[15px] '>
              <span className='relative left-[3px] top-[2px] '>{total_}</span>
            </div>
          ) : (
            <div className='w-[20px] h-[20px] bg-black  text-white  text-[11px] rounded-[10px] relative bottom-[30px] left-[15px] opacity-0 '>
              <span className='relative left-[3px] top-[2px]  '> 00 </span>
            </div>
          )}
        </div>
      </div>

      {isOpen && (
        <div className='m-2'>
          <Link
            className='block w-[90vw] px-2 py-1  hover:bg-custom-hover text-custom-subheading my-2 rounded-md'
            href={'./auth/sigup'}
          >
            Sign Up
          </Link>
          <Link
            className='block w-[90vw] px-2 py-1 hover:bg-custom-hover text-custom-subheading my-2  rounded-md'
            href={'./auth/signin'}
          >
            Sign In
          </Link>
        </div>
      )}

      {isCartOpen && (
        <div className='px-4 py-2  rounded-md'>
          <div className='mb-2  align-center flex'>
            <span className='text-black font-bold mr-2'>
              Shopping Cart {`(${total_})`}
            </span>
            <button
              onClick={() => cartClose()}
              className='hover:bg-gray-100 rounded-md'
            >
              <Image src='/close.svg' width={25} height={25} alt='close' />
            </button>
          </div>

          <div>
            {products.map((product, index) => {
              if (product.quantityAdded > 0) {
                let p1 = product.price.slice(4)

                let p2 = parseFloat(
                  p1 ? product.price.slice(1, 5) : product.price.slice(1, 4)
                )

                let p3 = p2 * 0.012

                return (
                  <CartItem product={product} p2={p2} p3={p3} key={index} />
                )
              }
              return null
            })}
          </div>

          <div className='mt-2 flex bg-black justify-between p-2 align-center'>
            <div className=' font-extrabold text-white border-white   align-center  '>
              <span className='block  relative top-[6px] '>
                Total Price: ${totalPriceInUSD} || ₹{totalPriceInINR}
              </span>
            </div>

            <button className='bg-white text-black text-lg py-1  px-2 rounded-md font-bold'>
              CheckOut
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
