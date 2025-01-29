'use client'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'

import url from '@/app/url'

const Page = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [mode, setMode] = useState('email')
  const [phone, setPhone] = useState('');
  setPasswordHidden(true);

  const [stage, setStage] = useState(1);
  const [type_, setType_] = useState('password');

  const [otpPhoneState, setOtpPhoneState] = useState('initial');
  const [otpEmailState, setOtpEmailState] = useState('initial');

  const [passwordEmailState, setPasswordEmailState] = useState('initial');
  const [passwordPhoneState, setPasswordPhoneState] = useState('initial');


  const [otpPhone, setOtpPhone] = useState('');
  const [otpEmail, setOtpEmail] = useState('');

  setOtpPhoneState('');
  console.log(otpPhoneState);
  console.log(otpEmailState + passwordEmailState + passwordPhoneState + otpPhone + otpEmail);

  setOtpPhone('');
  setOtpEmail('');



  const [isError, setIsError] = useState('');




  const checkPasswordWithEmail = async () => {

    setPasswordEmailState('loading');
    const res = await axios.post(`${url}/api/auth/signin`, { email, password }).then(res => res.data);
    if (!res.success) {
      setIsError(res.msg);
    }

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
      const res = await axios.post('/api/brevoEmail/sendOTP', { email }).then(res => res.data);
      if (!res.success) {
        setIsError(res.msg);
      }
      setOtpEmailState('success');
    }
    catch (e) {
      console.log(e);
      setIsError(JSON.stringify(e));
    }
  }
  const sendOtpToPhone = () => {
  }


  return (
    <>
      <div className='flex flex-col justify-center  h-[70vh]  gap-2 '>
        <div className='flex justify-center   '>
          <div className=' rounded-xl p-8   bg-[#E9EAF2] flex flex-col  gap-8 justify-between'>
            <div className=''>
              <div className='text-2xl font-semibold text-black text-center'>
                Welcome to <span className='text-[#3F6EEA]'>YKDevoutExports</span>
              </div>
              <div className='text-xs font-bold text-center '>
                Login to get exclusive products and services!
              </div>
            </div>

            {stage === 1 ?
              <div className='flex flex-col gap-2'>
                <div className=' text-white  px-4 py-2 rounded-md w-full bg-[#5826EB]  text-sm text-center font-bold cursor-pointer ' onClick={() => { setMode('email'); setStage(2) }}> Log in with email </div>
                <div className=' text-white  px-4 py-2 rounded-md w-full bg-[#5826EB]  text-sm text-center font-bold cursor-pointer ' onClick={() => { setMode('phone'); setStage(2) }}> Log in with phone  </div>
              </div>
              : stage === 2 ?
                <div className='flex flex-col gap-2'>
                  <div className=' text-white  px-4 py-2 rounded-md w-full bg-[#5826EB]  text-sm text-center font-bold cursor-pointer ' onClick={() => { setType_('password'); setStage(3) }}> Log in using password </div>
                  <div className=' text-white  px-4 py-2 rounded-md w-full bg-[#5826EB]  text-sm text-center font-bold cursor-pointer ' onClick={() => { setType_('otp'); setStage(3); }}> Log in with  OTP      </div>
                  <div className=' text-white  px-4 py-2 rounded-md w-full bg-[#5826EB]  text-sm text-center font-bold cursor-pointer ' onClick={() => { setStage(1); }}> Go back      </div>
                </div>
                : type_ === 'password' && mode === 'email' ? <div className='flex flex-col gap-2'>
                  <label className='block  text-xs text-black mb-[2px]' htmlFor='email'>Email </label>
                  <input
                    type='text'
                    placeholder='name@email.com'
                    value={email}
                    onChange={e => {
                      setEmail(e.target.value)
                    }}
                    className='p-2 outline-none text-xs rounded-md bg-[#DDDEE7] text-black w-full'
                    id='password'
                  />

                  <label className='block  text-black text-xs ' htmlFor='password'>Password</label>
                  <input
                    value={password}
                    onChange={e => {
                      setPassword(e.target.value)
                    }}
                    className='outline-none text-xs  rounded-sm bg-[#DDDEE7] text-black w-full p-2'
                    id='password'
                    type={passwordHidden ? 'password' : 'text'}
                  />

                  <div className=' text-white  px-4 py-2 rounded-md w-full bg-[#5826EB] hover:bg-[#6581EC] text-sm text-center font-bold cursor-pointer' onClick={() => checkPasswordWithEmail} >
                    Log in
                  </div>
                  <div className=' text-white  px-4 py-2 rounded-md w-full bg-[#5826EB]  text-sm text-center font-bold cursor-pointer ' onClick={() => { setStage(2); }}> Go back      </div>

                </div>

                  : type_ === 'password' && mode === 'phone' ? <div className='flex flex-col gap-2'>
                    <label className='block  text-xs text-black mb-[2px]' htmlFor='phone'>Phone  </label>
                    <input
                      type='text'
                      placeholder=''
                      value={phone}
                      onChange={e => {
                        setPhone(e.target.value)
                      }}
                      className='p-2 outline-none text-xs rounded-md bg-[#DDDEE7] text-black w-full'
                      id='phone'
                    />

                    <label className='block  text-black text-xs ' htmlFor='password'>Password</label>
                    <input
                      value={password}
                      onChange={e => {
                        setPassword(e.target.value)
                      }}
                      className='outline-none text-xs  rounded-sm bg-[#DDDEE7] text-black w-full p-2'
                      id='password'
                      type={passwordHidden ? 'password' : 'text'}
                    />

                    <div className=' text-white  px-4 py-2 rounded-md w-full bg-[#5826EB] hover:bg-[#6581EC] text-sm text-center font-bold cursor-pointer' onClick={() => checkPasswordWithPhone} >
                      Log in
                    </div>
                    <div className=' text-white  px-4 py-2 rounded-md w-full bg-[#5826EB]  text-sm text-center font-bold cursor-pointer ' onClick={() => { setStage(2); }}> Go back      </div>

                  </div> :

                    type_ === 'otp' && mode === 'email' ?

                      <div className='flex flex-col gap-2'>
                        <label className='block  text-xs text-black mb-[2px]' htmlFor='email'> Email   </label>
                        <input
                          type='text'
                          placeholder=''
                          value={email}
                          onChange={e => {
                            setEmail(e.target.value)
                          }}
                          className='p-2 outline-none text-xs rounded-md bg-[#DDDEE7] text-black w-full'
                          id='email'
                        />

                        <div className=' text-white  px-4 py-2 rounded-md w-full bg-[#5826EB] hover:bg-[#6581EC] text-sm text-center font-bold cursor-pointer' onClick={() => sendOtpToEmail}   > Send OTP </div>
                        <div className=' text-white  px-4 py-2 rounded-md w-full bg-[#5826EB]  text-sm text-center font-bold cursor-pointer ' onClick={() => { setStage(2); }}> Go back      </div>
                      </div> :

                      <div className='flex flex-col gap-2'>
                        <label className='block  text-xs text-black mb-[2px]' htmlFor='phone'>Phone  </label>
                        <input
                          type='text'
                          placeholder=''
                          value={phone}
                          onChange={e => {
                            setPhone(e.target.value)
                          }}
                          className='p-2 outline-none text-xs rounded-md bg-[#DDDEE7] text-black w-full'
                          id='phone'
                        />
                        <div className=' text-white  px-4 py-2 rounded-md w-full bg-[#5826EB] hover:bg-[#6581EC] text-sm text-center font-bold cursor-pointer' onClick={() => sendOtpToPhone}  > Send OTP </div>
                        <div className=' text-white  px-4 py-2 rounded-md w-full bg-[#5826EB]  text-sm text-center font-bold cursor-pointer ' onClick={() => { setStage(2); }}> Go back      </div>
                      </div>
            }
          </div>
        </div>
        {
          isError &&
          <div className='flex justify-center w-full'>
            <div className='w-[50%]  text-center  font-bold  rounded-md  text-white text-xl bg-red-500 p-2'>
              {isError}
            </div>
          </div>
        }
      </div>
    </>
  )
}









export default Page; 