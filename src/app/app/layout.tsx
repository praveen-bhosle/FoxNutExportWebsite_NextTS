
'use client'

import '../globals.css'
import Footer from '../new/Footer'
import Header from './components/Header'
import Products from './lib/Products'
import { Product } from './lib/Products'
import Image from 'next/image'

/*
export const metadata: Metadata = {
  title: 'YK DEVOUT EXPORTS',
  description: 'We export Fox Nuts/ Makhana'
}*/
import { create } from 'zustand'
import { useState } from 'react'

interface user {
  loggedIn: boolean,
  id?: number,
  email?: string,
  phone?: string | undefined,
  profileCreated?: boolean,
  firstName?: string
  lastName?: string
  address?: string
  city?: string
  state?: string
  country?: string
  zipcode?: string
}

type Store = {
  user: user,
  setUser: (user: user) => void
  products: Product[]
  addToCart: (productId: number) => void
  removeFromCart: (productId: number) => void
  removeOneFromCart: (productId: number) => void
  isCartOpen: boolean
  cartOpen: () => void
  cartClose: () => void
}

export const useStore = create<Store>()(set => ({
  user:
  {
    loggedIn: false,
  },
  setUser: (user: user) => { set(() => ({ user: user })) },
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
  cartOpen: () => set(() => ({ isCartOpen: true })),
  cartClose: () => set(() => ({ isCartOpen: false }))
}))

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {

  const [i, setI] = useState(0);

  const interval = setInterval(() => {
    if (i < 1) setI(i => i + 1);
    clearInterval(interval);
  }, 200);

  return (
    <>

      <Header />

      <div className='mt-[50px]'>{children}</div>
      <hr />
      <Footer />

    </>
  )
}