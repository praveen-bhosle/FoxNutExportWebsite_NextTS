'use client'
//import React from 'react'

import axios from "axios";
import { useState } from "react";
import url from "@/app/url";
import Image from "next/image";
import { useRouter, } from "next/navigation";

const Page = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [mode, setMode] = useState('email')
  const [phone, setPhone] = useState('');
  const [stage, setStage] = useState(1);
  const [type_, setType_] = useState('password');
  const [otpPhoneState, setOtpPhoneState] = useState('initial');
  const [otpEmailState, setOtpEmailState] = useState('initial');
  const [passwordEmailState, setPasswordEmailState] = useState('initial');
  const [passwordPhoneState, setPasswordPhoneState] = useState('initial');
  const [isError, setIsError] = useState('');
  const [otp, setOtp] = useState('');


  const router = useRouter();


  const checkPasswordWithEmail = async () => {
    setPasswordEmailState('loading');
    const res = await axios.post('/api/auth/signin', { email, password }).then(res => res.data);
    if (!res.success) {
      setIsError(res.msg);
      setPasswordEmailState('initial');
      return;
    }
    setPasswordEmailState('success');
    router.replace('/new');
  }


  const checkPasswordWithPhone = async () => {

    setPasswordPhoneState('loading');
    const res = await axios.post(`${url}/api/auth/signin`, { email, password }).then(res => res.data);
    if (!res.success) {
      setIsError(res.msg);
    }
  }
  const sendOtpToEmail = async () => {
    setOtpEmailState('loading');
    try {
      const res = await axios.post('/api/auth/sendOTP/', { email }).then(res => res.data);
      if (!res.success) {
        setIsError(res.msg);
        setOtpEmailState('initial');
        return;
      }
      setOtpEmailState('success');
      router.replace('/new');
    }
    catch (e) {
      console.log(e);
      setIsError(JSON.stringify(e));
    }
  }

  const sendOtpToPhone = () => {
  }

  return (
    <div className=''>
      <div className='flex flex-col justify-center items-center  h-[90vh]  gap-8'>
        <div className=' rounded-xl p-2   bg-white border-[1px] flex flex-col gap-16 justify-between  '>
          <div className=''>
            <div className='text-2xl font-semibold text-black text-center cursor-pointer' onClick={() => router.replace('/new')}>
              Welcome to YKDevoutExports
            </div>
            <div className='text-xs font-bold text-center '>
              Login to get exclusive products and services!
            </div>
          </div>

          {mode === 'email' ? <>
            <div className='flex flex-col gap-2'>
              <label className='block  text-xs text-black mb-[2px]' htmlFor='email'>Email </label>
              <input
                type='text'
                placeholder='name@email.com'
                value={email}
                onChange={e => {
                  setEmail(e.target.value)
                }}
                className='p-2 outline-none text-xs rounded-md bg-[#E9EAF2] text-black w-full'
                id='password'
              />
              <label className='block  text-black text-xs ' htmlFor='password'>Password</label>
              <div>
                <input
                  value={password}
                  onChange={e => {
                    setPassword(e.target.value)
                  }}
                  className='outline-none text-xs  rounded-sm bg-[#E9EAF2] text-black w-[90%] p-2'
                  id='password'
                  type={passwordHidden ? 'password' : 'text'}
                />

                <span className="w-max  " onClick={() => setPasswordHidden(!passwordHidden)}>  {passwordHidden ? <Image className="inline" src='/eye.svg' alt="" width={20} height={20} /> : <Image alt="" className="inline" src='/eyeclose.svg' width={20} height={20} />}  </span>
              </div>
              <div className=' text-white  px-4 py-2 rounded-md w-full bg-black  text-lg text-center font-bold cursor-pointer' onClick={async () => { if (!email || !password) { setIsError('Fill out the credentials first') } else if (passwordEmailState === 'initial') { await checkPasswordWithEmail(); } }} >
                {passwordEmailState === 'initial' ? 'Log in' : passwordEmailState === 'loading' ? 'Loading...' : 'Logged in successfully'}
              </div>
              <div className="text-center text-lg font-bold"> OR </div>
              <div className=' text-white  px-4 py-2 rounded-md w-full bg-black  text-lg text-center font-bold cursor-pointer' onClick={async () => { if (!email) { setIsError('Enter the email first') } else if (otpEmailState === 'initial') { await sendOtpToEmail(); } }}>
                {otpEmailState === 'initial' ? 'Send OTP for verfication' : otpEmailState === 'loading' ? 'Loading...' : otpEmailState === 'success' ?
                  <div className="flex flex-col  gap-2  ">  <input type='text' value={otp} onChange={(e) => setOtp(e.target.value)} className="block   outline-none  text-xl  text-black text-center rounded-md  " /> <button
                    onClick={
                      async () => {
                        setOtpEmailState('loading'); const res = await axios.post('/api/auth/checkOTP', { otp }).then(res => res.data);
                        if (!res.success) {
                          setIsError(res.msg);
                          setOtpEmailState('success');
                          return;
                        }
                        setOtpEmailState('done');
                        router.push('/new');
                      }} className="bg-white text-black font-bold   text-xl rounded-2xl mx-[100px] " > Submit   </button>  </div> : 'Logged in successfuly'}
              </div>
            </div>

            <div className=' text-white  px-4 py-2 rounded-md w-full bg-black  text-sm text-center font-bold cursor-pointer' onClick={() => setMode('email')}  >  Login using phone number    </div>
          </>
            :
            <>   <div className='flex flex-col gap-2'>
              <label className='block  text-xs text-black mb-[2px]' htmlFor='phone'>Phone</label>
              <input
                type='text'
                placeholder=''
                value={phone}
                onChange={e => {
                  setEmail(e.target.value)
                }}
                className='p-2 outline-none text-xs rounded-md bg-[#DDDEE7] text-black w-full'
                id='password'
              />
              <label className='block  text-black text-xs ' htmlFor='password'>Password</label>
              <div>
                <input
                  value={password}
                  onChange={e => {
                    setPassword(e.target.value)
                  }}
                  className=' outline-none text-xs  rounded-sm bg-[#DDDEE7] text-black w-[90%] p-2'
                  id='password'
                  type={passwordHidden ? 'password' : 'text'}
                />

                <span className="w-max  " onClick={() => setPasswordHidden(!passwordHidden)}>  {passwordHidden ? <Image className="inline" src='/eye.svg' alt="" width={20} height={20} /> : <Image alt="" className="inline" src='/eyeclose.svg' width={20} height={20} />}  </span>
              </div>
              <div className=' text-white  px-4 py-2 rounded-md w-full bg-[#5826EB] hover:bg-[#6581EC] text-sm text-center font-bold cursor-pointer' onClick={() => checkPasswordWithPhone} >
                Log in
              </div>
              <div className="text-center text-lg"> OR </div>
              <div className=' text-white  px-4 py-2 rounded-md w-full bg-[#5826EB] hover:bg-[#6581EC] text-sm text-center font-bold cursor-pointer' onClick={() => sendOtpToPhone}   >  Login using   OTP </div>
            </div>
              <div className=' text-white  px-4 py-2 rounded-md w-full bg-[#5826EB]  text-sm text-center font-bold cursor-pointer ' onClick={() => { setMode('email') }} >  Login using email    </div>

            </>
          }
        </div>

        {
          isError &&
          <div className='flex justify-center w-full'>
            <div className='w-[50%]  text-center  font-bold  rounded-md  text-white text-xl bg-red-500 p-2'>
              {isError}

            </div>
            <button onClick={() => setIsError('')} className="bg-blue-400  rounded-md">
              <Image className="" src='/close.svg' alt="" width={20} height={20} />
            </button>
          </div>
        }
      </div>
    </div>
  )
}

export default Page;