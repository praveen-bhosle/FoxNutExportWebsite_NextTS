'use client'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'

import Image from 'next/image'


import Link from 'next/link'


import OTP from '@/app/app/components/otp'


const Page = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState<string>('+91');
  const [mode, setMode] = useState('email');
  const [globalState, setGlobalState] = useState('initial');
  const [isError, setIsError] = useState('');
  const [finalState, setFinalState] = useState('initial');
  const [OTP_, setOTP] = useState('');
  const [otpId, setOtpId] = useState(0);

  let verficationButtonStyles = { backgroundColor: "#95A2ED", cursor: 'not-allowed' };

  if (phone.substring(0, 3) === '+91') {
    console.log(phone.length)
    if (phone.length >= 13) {
      verficationButtonStyles = { backgroundColor: "#5826EB", cursor: 'pointer' }
    }
  }
  else if (phone.substring(0, 2) === '+1') {
    console.log(phone.length)
    if (phone.length >= 12)
      verficationButtonStyles = { backgroundColor: "#5826EB", cursor: 'pointer' }
  }
  else {
    console.log(phone);
    verficationButtonStyles = { backgroundColor: "#5826EB", cursor: 'pointer' }
  }

  const sendVerificationCode = async () => {
    const response = await axios.post('/api/authOTP/', { phoneNumber: phone });
    console.log(response);
  };


  const hasLowerCase = (str: string) => /[a-z]/.test(str);
  const hasUpperCase = (str: string) => /[A-Z]/.test(str);
  const hasNumber = (str: string) => /[0-9]/.test(str);
  const hasSpecialCharacter = (str: string) => /[^a-zA-Z0-9\s]/.test(str);


  if (mode === 'email' && globalState !== 'signedUp') {
    return (
      <div className=''>
        <div className='flex justify-center items-center  h-[90vh] mx-[5%] '>

          <div className=' rounded-xl p-2  bg-[#E9EAF2] flex flex-col gap-16 justify-between  '>
            <div className=''>
              <div className='text-2xl font-semibold text-black text-center'>
                Welcome to <span className='text-[#3F6EEA]'>YKDevoutExports</span>
              </div>

              <div className='text-xs font-bold text-center '>
                Signup to get exclusive products and services!
              </div>
            </div>

            {globalState === 'initial' ? <>
              <div className='mx-4 mb-4 text-black '>
                <div> Enter your email address </div>
                <input
                  type='text'
                  placeholder='name@email.com'
                  value={email}
                  onChange={e => {
                    setEmail(e.target.value)
                  }}
                  className='p-2 outline-none text-xs rounded-md bg-[#DDDEE7] text-black w-full mb-2'
                />
                <br />

                <button
                  onClick={async () => {
                    setGlobalState('loading');
                    const body = { email }
                    try {
                      console.log('flow reached here')
                      const res = await axios.post('/api/auth/sendOTP/', body);
                      console.log(res);
                      const resBody = res.data;
                      console.log(resBody);
                      console.log(res);
                      if (resBody.success === 'true') {
                        setOtpId(resBody.id);
                        setGlobalState('success');
                        setIsError('');
                      }
                      else {
                        console.log('flow reached here');
                        setGlobalState('initial');
                        setIsError(resBody.msg);
                      }
                    }
                    catch (e) {
                      console.log(e);
                      setGlobalState('initial');
                      setIsError('Internal server error.');
                    }
                  }}

                  style={{ backgroundColor: email.includes('@') ? '#5826EB' : '#95A2ED' }}

                  className='   text-white  px-4 py-2 rounded-md w-full  text-xs'
                >
                  {' '}
                  Get verification code{' '}
                </button>
              </div>


              <Link className='  bg-[#5826EB] w-full text-white py-2 px-4 text-sm rounded-md text-center font-bold  cursor-pointer opacity-0' href={'/'}   >    Sign up with phone instead     </Link>
            </>


              : globalState === 'loading' ?
                <>
                  <div className='text-center'>  <div className='text-2xl font-bold'> Loading...  </div> </div>
                  <div className='text-[#E9EAF2] select-none'> sampletext  </div>
                </>
                :
                <>
                  <div>

                    <div className='mb-2 mx-2 text-lg font-bold text-black'> Enter the six digit  OTP  </div>
                    <div className='flex justify-center'>
                      <div>
                        <input type='text' value={OTP_} onChange={(e) => {
                          setOTP(e.target.value);
                        }}
                          className='px-2 py-2 outline-none rounded-md text-xl font-bold text-black w-[100px] '
                        />
                      </div>

                    </div>
                    <div className='flex justify-center'>
                      <div className=' text-center mt-4 bg-black  w-[40%] text-white font-bold  rounded-[20px] border-2 cursor-pointer py-[4px] select-none '
                        onClick={async () => {
                          setGlobalState('loading')
                          const response = await axios.post('/api/auth/checkOTP/', { OTP: OTP_, otpId, email }).then(res => res.data);
                          if (response.success === 'true') {
                            setGlobalState('signedUp');
                            setIsError('');
                          }
                          else {
                            setIsError(response.msg);
                          }
                        }}
                      >
                        Submit
                      </div>
                    </div>
                  </div>
                  <div>

                  </div>
                </>
            }
          </div>
        </div>
        {
          isError &&
          (<div className='w-[50%] p-2 rounded-md bg-red-500 my-2  text-white mx-[25%]'>
            {
              isError
            }
          </div>
          )
        }
      </div>

    )
  }
  else if (mode === 'phone' && globalState !== 'signedUp') {
    return (<div className=''>
      <div className='flex justify-center items-center  h-[90vh] mx-[5%] '>

        <div className=' rounded-xl p-2  bg-[#E9EAF2] flex flex-col gap-16 justify-between '>
          <div className=''>
            <div className='text-2xl font-semibold text-black text-center'>
              Welcome to <span className='text-[#3F6EEA]'>YKDevoutExports</span>
            </div>
            <div className='text-xs font-bold text-center '>
              Signup to get exclusive products and services!
            </div>
          </div>
          <div className='text-lg  text-black text-center'> Enter Phone Number </div>
          <div className=''>
            < OTP setPhone={setPhone} />
          </div>
          <br />
          <button
            onClick={() => {
              sendVerificationCode();
            }}
            className=' text-white  px-4 py-2 rounded-md w-full  text-xs'
            style={verficationButtonStyles}
          >
            Get Verification code
          </button>
          <div className='mx-[19%] '>
            <button className='bg-[#5826EB] w-full text-white py-2 px-4 text-sm rounded-md' onClick={() => setMode('email')}> Sign up with Email    </button>
          </div>
        </div>
      </div>
      {
        isError &&
        (<div className='w-[50%] p-2 rounded-md bg-red-500 my-2  text-white mx-[25%]'>
          {
            isError
          }
        </div>

        )
      }
    </div >
    )
  }

  else {

    return (


      <div className=''>
        <div className='flex justify-center items-center  h-[90vh] mx-[5%] '>

          <div className=' rounded-xl p-2  bg-[#E9EAF2] flex flex-col gap-16 justify-between '>
            <div>
              <div className='text-2xl font-semibold text-black text-center'>
                Welcome to <span className='text-[#3F6EEA]'>YKDevoutExports</span>
              </div>
              <div className='text-black'>
                Signed up and logged in successfully.
              </div>
            </div>

            {finalState === 'initial' ?
              <>
                <div>
                  <div className='my-2 text-black'> Enter password </div>
                  <input type='text' className='focus:outline-none px-2 rounded-md' value={password} onChange={(e) => setPassword(e.target.value)} />
                  <div className='text-xs'> Password should follow this pattern:
                    <li className=''>   Atleast 8 characters long.   {password.length >= 8 && <Image src='/tick4.svg' alt='image' width={10} height={10} className='inline' />}  </li>
                    <li> Atleast one lowercase letter.   {hasLowerCase(password) && <Image src='/tick4.svg' alt='image' width={10} height={10} className='inline' />}   </li>
                    <li> Atleast one uppercase letter.   {hasUpperCase(password) && <Image src='/tick4.svg' alt='image' width={10} height={10} className='inline' />}  </li>
                    <li>      Atleast one number.  {hasNumber(password) && <Image src='/tick4.svg' alt='image' width={10} height={10} className='inline' />}  </li>
                    <li> Atleast one special character. {"{@,#,!,<,etc}"}  {hasSpecialCharacter(password) && <Image src='/tick4.svg' alt='image' width={10} height={10} className='inline' />}  </li>
                  </div>
                  {password.length >= 8 && hasLowerCase(password) && hasUpperCase(password) && hasNumber(password) && hasSpecialCharacter(password) &&
                    <button className='my-2 text-black bg-[#3E6EEA] text-white  px-2 rounded-xl'
                      onClick={async () => {
                        setFinalState('loading');
                        const res = await axios.post("/api/auth/setPassword", { email, password }).then(response => response.data);
                        if (res.success) {
                          setFinalState('final');
                        }

                        else {
                          setIsError(res.msg);
                          setFinalState('initial');
                        }
                      }}>
                      Set up password
                    </button>
                  }
                  <span className='text-xs block text-black font-bold mt-2' >  * Setting password is optional.You can also login by getting a verification  code to your email/phone.  </span>
                </div> </> :
              finalState === 'loading' ? <div className='text-center text-xl font-bold text-black '>
                Loading... </div> :
                <div className='text-center text-xl font-bold text-black'>
                  Password set successfully.
                </div>}
            <Link href="/" className='w-full text-center bg-[#3E6EEA] text-white rounded-md py-[2px]  '>
              Go to home page
            </Link >
          </div>
        </div>
        {
          isError &&
          (<div className='w-[50%] p-2 rounded-md bg-red-500 my-2  text-white mx-[25%]'>
            {
              JSON.stringify(isError)
            }
          </div>
          )
        }

      </div >
    )
  }
}

export default Page


/* 

 {useRefArray.map((element, index) =>


                          <input type='text' className='w-8 h-8 py-2  px-[10px] mx-[1px]  rounded-md text-xl text-black font-bold'

                            onChange={(e) => {
                              const value = e.target.value;

                              if (!/^\d$/.test(value)) {
                                e.target.value = '';
                              }
                            }}

                            ref={element}
                            onKeyUp={(e) => {
                              console.log('I am getting inputs.');
                              if (index < useRefArray.length - 1 && e.key !== 'Backspace') {

                                if (element.current?.value) {
                                  setOTP((prev) => prev + element.current?.value);
                                  console.log(OTP);
                                };
                                useRefArray[index + 1].current?.focus();
                              }
                              else if (index >= 1 && e.key === 'Backspace') {
                                setOTP((prev) => prev.slice(0, prev.length - 1));
                                console.log(OTP);
                                useRefArray[index - 1].current?.focus();
                              }
                              else if (index === 5 && e.key !== 'Backspace') {
                                if (element.current?.value) {
                                  setOTP((prev) => prev + element.current?.value);
                                }
                              }
                            }}
                          />
                        )}
                          */