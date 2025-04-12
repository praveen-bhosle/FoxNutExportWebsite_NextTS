'use client'
import React from 'react'
import Products, { Product } from '../lib/Products'

import { useStore } from '../layout'

import { useRouter } from 'next/navigation'

import Image from 'next/image'

import Carousel from 'react-multi-carousel'

import 'react-multi-carousel/lib/styles.css'

const ProductCard2 = ({ element }: { element: Product }) => {
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

        <div className='rounded-[8px] p-[4px] shadow-custom hover:shadow-hoverCustom  transition:shadow '>




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
                className='carousel-container'
            >
                {element.image.map((e, index) =>
                    <div key={index}>   <Image src={e} alt='' width={0} height={0} sizes="100vw" className='w-full h-auto rounded-[5px]  ' quality={100} /></div>
                )
                }
            </Carousel>



        </div>





    )
}

export default ProductCard2

