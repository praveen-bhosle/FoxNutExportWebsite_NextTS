
'use client'

import '../globals.css'
import Footer from '../new/Footer'
import Header from './components/Header'
import Products from './lib/Products'
import { Product } from './lib/Products'


/*
export const metadata: Metadata = {
  title: 'YK DEVOUT EXPORTS',
  description: 'We export Fox Nuts/ Makhana'
}*/
import { create } from 'zustand'


export interface user {
  loggedIn: boolean,
  id?: number | null,
  email?: string | null,
  phone?: string | null
  profileCreated?: boolean | null
  firstName?: string | null
  lastName?: string | null
  address?: string | null
  city?: string | null
  state?: string | null
  country?: string | null
  zipcode?: string | null
  profileImageString?: string | null
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




  return (
    <>

      <Header />

      <div className='mt-[50px]'>{children}</div>
      <hr />
      <Footer />

    </>
  )
}