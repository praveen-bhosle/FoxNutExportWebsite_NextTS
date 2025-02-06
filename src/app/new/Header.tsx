'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios';
import { useStore } from '../app/layout';
import { useGoogleLogin } from '@react-oauth/google';

const Header = () => {

  const user = useStore((state) => state.user);

  const setUser = useStore((state) => state.setUser);


  useEffect(() => { if (user) { axios.get } }, [user])


  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const res = await axios.get('/api/auth/checkLogged').then(res => res.data);
        if (res.loggedIn) {
          setUser({ loggedIn: true });
        }
      }
      catch (e) {
        console.log(e);
      }
    };
    checkLoggedIn();
  }, [user])

  return (
    <div className='bg-white  flex justify-between w-full fixed top-0 left-0'>
      <Link href='/' >
        <Image src='/logp.jpeg' alt='' width={50} height={50} />
      </Link>
      <div className='flex gap-4 py-2 px-4'>
        {
          user.loggedIn ?

            <>
              <Link href='/app/profile'> <Image src='/profile.svg' alt='' width={40} height={40} />  </Link>
              <button onClick={async () => {
                await axios.put(`/api/auth/signout`);
                setUser({ loggedIn: false });
              }} > Log out </button> </>
            :
            <>
              <Link href='/auth/signup'> Sign up  </Link>
              <Link href='/auth/signin'> Log in   </Link>
            </>
        }
      </div>
    </div>
  )
}



export default Header