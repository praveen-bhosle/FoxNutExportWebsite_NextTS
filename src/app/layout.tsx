import type { Metadata } from 'next'
//import { Geist, Geist_Mono } from "next/font/google";
import './globals.css'
import Footer from './Footer'
import Header from './Header'
import Products from './Products'
import { Product } from './Products'

/*
export const metadata: Metadata = {
  title: "YK DEVOUT EXPORTS",
  description: "We export Fox Nuts/ Makhana",
}; */
import { create } from 'zustand'

type Store = {
  products: Product[]
  addToCart: (productId: number) => void
  removeFromCart: (productId: number) => void
  removeOneFromCart: (productId: number) => void
  isCartOpen: boolean
  cartOpen: () => void
  cartClose: () => void
}
export const useStore = create<Store>()(set => ({
  products: Products,
  addToCart: (productId: number) =>
    set(state => ({
      products: state.products.map(product =>
        product.productId === productId
          ? {
              ...product,
              addedToCard: true,
              quantityAdded: product.quantityAdded + 1
            }
          : product
      )
    })),
  removeOneFromCart: (productId: number) =>
    set(state => ({
      products: state.products.map(product =>
        product.productId === productId
          ? { ...product, quantityAdded: product.quantityAdded - 1 }
          : product
      )
    })),
  removeFromCart: (productId: number) =>
    set(state => ({
      products: state.products.map(product =>
        productId === product.productId
          ? { ...product, addedToCard: false, quantityAdded: 0 }
          : product
      )
    })),
  isCartOpen: false,
  cartOpen: () => set(state => ({ isCartOpen: true })),
  cartClose: () => set(state => ({ isCartOpen: false }))
}))

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='bg-custom-bg text-custom-text m-4'>
        <Header />
        <hr />
        <div className='mt-[60px]'>{children}</div>
        <hr />
        <Footer />
      </body>
    </html>
  )
}
