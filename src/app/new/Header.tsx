'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios';
import url from '../url';

const Header = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const res = await axios.get(`${url}/api/auth/checkLogged`).then(res => res.data);
        if (res.loggedIn) {
          setLoggedIn(true);
        }
      }
      catch (e) {
        console.log(e);
      }
      console.log(loggedIn);
    };


    checkLoggedIn();
  }, [loggedIn])
  return (
    <div className='bg-white  flex justify-between w-full fixed top-0 left-0'>
      <Link href='/' >
        <Image src='/logp.jpeg' alt='' width={50} height={50} />
      </Link>
      <div className='flex gap-4 py-2 px-4'>
        {
          loggedIn ?

            <>
              <Link href='/app/profile'> <Image src='/profile.svg' alt='' width={40} height={40} />  </Link>
              <button onClick={async () => {
                await axios.put(`${url}/api/auth/signout`);
                setLoggedIn(false);
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