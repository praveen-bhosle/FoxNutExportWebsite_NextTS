"use client"

import React, { useEffect, useState } from 'react'
import { useStore } from '../layout'
//import CartItem from '../CartItem'
import Image from 'next/image'

import Link from 'next/link'

const Page = () => {
  const products = useStore(state => state.products)
  const cartClose = useStore(state => state.cartClose)

  const user = useStore(state => state.user);
  const removeFromCart = useStore(state => state.removeFromCart)
  const removeOneFromCart = useStore(state => state.removeOneFromCart)
  const addToCart = useStore(state => state.addToCart)
  const total = products.reduce((accumulator, product) => {
    if (product.quantityAdded > 0) {
      accumulator += product.quantityAdded
    }
    return accumulator
  }, 0)
  const totalPriceInINR = products.reduce((accumulator, product) => {
    const p1 = product.price.slice(4)

    const p2 = parseFloat(
      p1 ? product.price.slice(1, 5) : product.price.slice(1, 4)
    )

    if (product.quantityAdded > 0) {
      accumulator += product.quantityAdded * p2
    }
    return accumulator
  }, 0)
  function convertToUSD(totalPriceInINR: number): number {
    const y = totalPriceInINR * 0.012
    const ans = y.toFixed(2)
    return parseFloat(ans)
  }
  const [isOpen1, setIsOpen1] = useState(false)

  const totalPriceInUSD = convertToUSD(totalPriceInINR)

  useEffect(() => { cartClose() },);


  const [addressObject, setAddressObject] = useState({ address: user.address, city: user.city, state: user.state, country: user.country, zipcode: user.zipcode })

  const [gateway, setGateway] = useState('');
  console.log(gateway);

  return (
    <div className='text-black'>
      <div

        className='border-2 rounded-md'
      >
        <div className='flex justify-between bg-[#F5F5F5] px-2 ' onClick={() => {
          console.log("hi");
          setIsOpen1(!isOpen1)
        }}>
          <div className='font-bold select-none'>Order Summary</div>
          <div className='font-bold select-none'>
            Product Cost:   ₹{totalPriceInINR} || ${totalPriceInUSD}
          </div>
        </div>

        {isOpen1 && (
          <div className='p-2'>
            {products.map((product, index) => {
              const p1 = product.price.slice(4)

              const p2 = parseFloat(
                p1 ? product.price.slice(1, 5) : product.price.slice(1, 4)
              )

              const p3 = p2 * 0.012
              if (product.quantityAdded > 0) {
                return (
                  <div className=' flex  my-2 rounded-md  border-grey-500  border-2 px-2 py-[2px] text-black font-bold ' key={index}>
                    <div className='w-[35%] flex gap-2'>



                      <div className=' text-[10px] text-black  font-bold'>
                        <div className=''> {product.quality} </div>
                        <div className=''>
                          {product.sizeStringA}  </div>
                        <div>
                          {product.sizeStringB}
                        </div>
                      </div>
                    </div>


                    <div className='w-[45%]'>

                      <div className='flex justify-between h-full items-center  '>
                        <div className='flex gap-2 border-[1px] rounded-md border-black text-black font-bold  text-lg p-[2px] '>
                          <button className='bg-blue-100  border-2 rounded-md '>
                            <Image
                              src='/minus.svg'
                              width={20}
                              height={20}
                              alt='image'
                              className=''
                              onClick={() => removeOneFromCart(product.productId)}
                            />
                          </button>
                          {product.quantityAdded}
                          <button className='bg-blue-100  border-2 rounded-md' onClick={() => addToCart(product.productId)} >
                            <Image
                              src='/plus.svg'
                              width={20}
                              height={20}
                              alt='image'
                            />
                          </button>
                        </div>
                        <div className='cursor-pointer' onClick={() => removeFromCart(product.productId)}>
                          <Image
                            src='/delete.svg'
                            width={35}
                            height={35}
                            alt='image'
                          />
                        </div>
                      </div>
                    </div>


                    <div className='w-[20%]  text-right text-xs  items-center '>

                      <div className=' flex h-full items-center justify-end'>

                        <div>₹{p2 * product.quantityAdded} <br /> $
                          {(p3 * product.quantityAdded).toFixed(2)} </div>
                      </div>
                    </div>
                  </div>)
              }
              return null
            })}
          </div>
        )}
      </div>


      {user.loggedIn ?
        <>  <div>
          <div>
            <div className='flex justify-between my-2'><label> Email </label>  {user.email ? <input type='text' required className='text-sm px-2 outline-none  border-2 border-black' disabled /> : <Link href='/auth/signup'> Add email </Link>}  </div>
            <div className='flex justify-between my-2'><label > Phone</label>  {user.phone ? <input type='text' className='text-sm px-2 outline-none  border-2 border-black ' value={user.phone} /> : <Link href='/autn/signup'> Add Phome   </Link>}</div>
            <div className='flex justify-between my-2'><label htmlFor='address'> Address </label>   <input type='text' required id='address' name='address' className='text-sm px-2 outline-none  border-2 border-black' value={addressObject.address} onChange={(e) => {
              setAddressObject({ ...addressObject, address: e.target.value })
            }} /></div>
            <div className='flex justify-between my-2'><label htmlFor='city'> City  </label>        <input type='text' required id='city' name='city' className='text-sm px-2 outline-none border-2 border-black' value={addressObject.city} onChange={(e) => {
              setAddressObject({ ...addressObject, city: e.target.value })
            }}
            /> </div>
            <div className='flex justify-between my-2'><label htmlFor='state'> State    </label>    <input type='text' required id='state' name='state' className='text-sm px-2 outline-none border-2 border-black' value={addressObject.state} onChange={(e) => {
              setAddressObject({ ...addressObject, state: e.target.value })
            }} /> </div>
            <div className='flex justify-between my-2'><label htmlFor='country'> Country  </label>  <input type='text' required id='country' name='country' className='text-sm px-2 outline-none border-2 border-black' value={addressObject.country} onChange={(e) => {
              setAddressObject({ ...addressObject, country: e.target.value })
            }} /> </div>
            <div className='flex justify-between my-2'><label htmlFor='pin'> ZIP/PIN Code  </label>  <input type='text' required id='pin' name='pin' className='text-sm px-2 outline-none border-2 border-black' value={addressObject.zipcode} onChange={(e) => {
              setAddressObject({ ...addressObject, zipcode: e.target.value })
            }} /> </div>
          </div>
        </div>
          <div className='p-2 border-2 border-gray-200' >
            <div className='font-bold text-black'> Payment Method </div>
            <div className='text-xs'>
              All transactions are secure and encrypted.
            </div>
            <div>
              <form>
                <label className='block w-full'>
                  <input type='radio' name='gateway' value='razorpay' onClick={() => setGateway('Razorpay')} />
                  <span> Razorpay  </span>
                </label>
                <label className='block w-full'>
                  <input type='radio' name='gateway' value='paypal' onClick={() => setGateway('Paypal')} />
                  <span> Paypal </span>
                </label>
              </form>
            </div>
          </div>
          <div>
            <div className='flex justify-between'>
              <div className='text-xs'> Subtotal {total} items </div>
              <div className='text-xs'>
                {' '}
                ₹{totalPriceInINR} || ${totalPriceInUSD}{' '}
              </div>
            </div>
            <div className='flex justify-between'>
              <div className='tex-xs'> Shipping </div>
              <div className='text-xs'> 0 </div>
            </div>
            <div className='flex justify-between'>
              <div className='text-lg font-bold'> Total </div>
              <div className='text-lg font-bold'>
                {' '}
                ₹{totalPriceInINR} || ${totalPriceInUSD}{' '}
              </div>
            </div>
          </div>
          <div className='flex justify-center w-full py-2'>
            <div className='text-2xl font-bold bg-black text-white p-2  cursor-pointer' > Pay Now </div>
          </div>
        </>
        :
        <div className='border-2 my-2'>
          <Link href="/auth/signup"> Sign up to order   </Link>
        </div>
      }


    </div>
  )
}

export default Page



/* 
          <form className='px-2'>
            <div className='flex justify-between my-2'><label htmlFor='firstName' >  First  Name</label>  <input placeholder='praveen' type='text' id='firstName' name='firstName' required className='text-sm px-2 outline-none border-2 border-black' /></div>
            <div className='flex justify-between my-2'><label htmlFor='lastName'>  Last Name</label>   <input type='text' id='lastName' name='lastName' required className='border-2 border-black text-sm px-2 outline-none ' /></div>
            <div className='flex justify-between my-2'><label> Email </label>  <input type='text' required className='text-sm px-2 outline-none  border-2 border-black' />  </div>
            <div className='flex justify-between my-2'><label > Phone</label> <input type='text' disabled className='text-sm px-2 outline-none  border-2 border-black ' /> </div>
            <div className='flex justify-between my-2'><label htmlFor='address'> Address </label>   <input type='text' required id='address' name='address' className='text-sm px-2 outline-none  border-2 border-black' /></div>
            <div className='flex justify-between my-2'><label htmlFor='city'> City  </label>        <input type='text' required id='city' name='city' className='text-sm px-2 outline-none border-2 border-black' /> </div>
            <div className='flex justify-between my-2'><label htmlFor='state'> State    </label>    <input type='text' required id='state' name='state' className='text-sm px-2 outline-none border-2 border-black' /> </div>
            <div className='flex justify-between my-2'><label htmlFor='country'> Country  </label>  <input type='text' required id='country' name='country' className='text-sm px-2 outline-none border-2 border-black' /> </div>
            <div className='flex justify-between my-2'><label htmlFor='pin'> ZIP/PIN Code  </label>  <input type='text' required id='pin' name='pin' className='text-sm px-2 outline-none border-2 border-black' /> </div>
          </form>
*/
