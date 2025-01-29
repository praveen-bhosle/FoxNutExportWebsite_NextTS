'use client'
import React from 'react'
import { useStore } from '../layout'
import Link from 'next/link'
import axios from 'axios'
import url from '@/app/url'


const page = () => {

    const user = useStore(state => state.user);

    console.log(user);

    console.log(user.id + " " + user.email);


    const submitForm = async (formData: FormData) => {
        const firstName = formData.get('firstName')?.toString()
        const lastName = formData.get('lastName')?.toString()
        const address = formData.get('address')?.toString()
        const city = formData.get('city')?.toString()
        const state = formData.get('state')?.toString()
        const country = formData.get('country')?.toString()
        const zipcode = formData.get('zipcode')?.toString()

        console.log(user.id);

        const profileObject = {
            firstName,
            lastName,
            address,
            city,
            state,
            country,
            zipcode,
            userID: user.id
        }

        if (user.id) {
            const res = await axios.post('/api/createProfile', profileObject).then(res => res.data);

            if (res.success) {
                await axios.get(`${url}/api/checkLogged`);
            }

        }
    }

    if (!user.profileCreated) {

        return (

            <div className='p-2 bg-[#E9EAF2] m-2 rounded-md text-black' >
                <form action={submitForm
                }   >
                    <div className='flex justify-between my-2'><label htmlFor='firstName' >  First  Name</label>  <input type='text' id='firstName' name='firstName' required className='text-sm px-2 outline-none text-right' /></div>
                    <div className='flex justify-between my-2'><label htmlFor='lastName'>  Last Name</label>   <input type='text' id='lastName' name='lastName' required className='text-sm px-2 outline-none text-right' /></div>
                    <div className='flex justify-between my-2'><label> Email </label> {user.email ? <input type='text' placeholder={user.email} disabled required className='text-sm px-2 outline-none text-right' /> : <button className=''> Add email</button>} </div>
                    <div className='flex justify-between my-2'><label > Phone</label> {user.phone ? <input type='text' placeholder={user.phone} disabled className='text-right' /> : <Link className='bg-blue-500 text-white font-bold px-2 rounded-sm' href='/addPhone'  > Add phone </Link>}</div>
                    <div className='flex justify-between my-2'><label htmlFor='address'> Address </label>   <input type='text' required id='address' name='address' className='text-sm px-2 outline-none text-right' /></div>
                    <div className='flex justify-between my-2'><label htmlFor='city'> City  </label>        <input type='text' required id='city' name='city' className='text-sm px-2 outline-none text-right' /> </div>
                    <div className='flex justify-between my-2'><label htmlFor='state'> State    </label>    <input type='text' required id='state' name='state' className='text-sm px-2 outline-none text-right' /> </div>
                    <div className='flex justify-between my-2'><label htmlFor='country'> Country  </label>  <input type='text' required id='country' name='country' className='text-sm px-2 outline-none text-right' /> </div>
                    <div className='flex justify-between my-2'><label htmlFor='pin'> ZIP/PIN Code  </label>  <input type='text' required id='pin' name='pin' className='text-sm px-2 outline-none text-right' /> </div>
                    <button className='w-[50%] align-center  bg-blue-500 text-white mx-[25%]' type='submit' > Update data </button>
                </form>
            </div>
        )
    }

    else {

        return (

            <div className='p-2 bg-[#E9EAF2] m-2 rounded-md text-black' >
                <form action={submitForm
                }   >
                    <div className='flex justify-between my-2'><label htmlFor='firstName' >  First  Name</label>  <input type='text' id='firstName' placeholder={user.firstName} name='firstName' required className='text-sm px-2 outline-none text-right' disabled /></div>
                    <div className='flex justify-between my-2'><label htmlFor='lastName'>  Last Name</label>   <input type='text' id='lastName' name='lastName' required className='text-sm px-2 outline-none text-right' placeholder={user.lastName} disabled /></div>
                    <div className='flex justify-between my-2'><label> Email </label> {user.email ? <input type='text' placeholder={user.email} disabled required className='text-sm px-2 outline-none text-right' /> : <button className=''> Add email</button>} </div>
                    <div className='flex justify-between my-2'><label > Phone</label> {user.phone ? <input type='text' placeholder={user.phone} disabled className='text-right' /> : <Link className='bg-blue-500 text-white font-bold px-2 rounded-sm' href='/addPhone'  > Add phone </Link>}</div>
                    <div className='flex justify-between my-2'><label htmlFor='address'> Address </label>   <input type='text' required id='address' name='address' className='text-sm px-2 outline-none text-right' placeholder={user.address} disabled /></div>
                    <div className='flex justify-between my-2'><label htmlFor='city'> City  </label>        <input type='text' required id='city' name='city' className='text-sm px-2 outline-none text-right' placeholder={user.city} disabled /> </div>
                    <div className='flex justify-between my-2'><label htmlFor='state'> State    </label>    <input type='text' required id='state' name='state' className='text-sm px-2 outline-none text-right' placeholder={user.state} disabled /> </div>
                    <div className='flex justify-between my-2'><label htmlFor='country'> Country  </label>  <input type='text' required id='country' name='country' className='text-sm px-2 outline-none text-right' placeholder={user.country} disabled /> </div>
                    <div className='flex justify-between my-2'><label htmlFor='pin'> ZIP/PIN Code  </label>  <input type='text' required id='pin' name='pin' className='text-sm px-2 outline-none text-right' placeholder={user.zipcode} disabled /> </div>
                </form>
            </div>
        )

    }

}


export default page 