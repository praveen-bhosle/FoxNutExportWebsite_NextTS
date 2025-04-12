'use client'
import React from 'react'

import { useStore } from '../layout'

import { useRouter } from 'next/navigation'

import Image from 'next/image'

import Carousel from 'react-multi-carousel'

import 'react-multi-carousel/lib/styles.css'
import { Product } from '@/app/app/lib/Products'

const ProductCard = ({ element }: { element: Product }) => {
  const addToCart = useStore(set => set.addToCart)
  const cartOpen = useStore(set => set.cartOpen)

  const router = useRouter();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (

    <div className='flex flex-col gap-2  rounded-[8px] p-[4px] shadow-custom hover:shadow-hoverCustom  transition:shadow '>

      <div className='basis-3/4 '  >


        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className='carousel-container z-0'
        >
          {element.image.map((e, index) =>
            <div key={index}>   <Image src={e} alt='' width={0} height={0} sizes="100vw" className='w-full h-auto rounded-[5px]  ' quality={100} /></div>
          )
          }
        </Carousel>
      </div>

      <div className='basis-1/5 '>
        <a className='text-xl   font-bold text-black  hover:underline hover:cursor-pointer ' onClick={() => { router.push(`/app/product?productId=${element.productId}`) }} > {element.sizeStringA} </a> <br />
        <span className='text-sm  '> {element.sizeStringB} </span> <br />
        <span className='text-sm  font-semibold select-none'>
          {element.price}
        </span>
      </div>

      <div className='basis-1/20'>
        <button
          onClick={() => {
            addToCart(element.productId)
            cartOpen()
          }}
          className='bg-black text-white rounded-[12px] px-2 py-[1px]  w-[100%]'
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
