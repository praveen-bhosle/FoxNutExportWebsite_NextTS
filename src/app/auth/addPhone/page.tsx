'use client'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'


import OTP from '../../app/components/otp'

const Page = () => {




    const [phone, setPhone] = useState<string>('+91');




    const [isError, setIsError] = useState('');

    setIsError('');




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



    return (<div className='flex flex-col justify-center  h-[70vh]   '>
        <div className='flex justify-center '>
            <div className='h-[398px]   w-[392px] rounded-xl p-[20px]  bg-[#E9EAF2] flex flex-col justify-between'>
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
                    <OTP setPhone={setPhone} />
                </div>
                <br />
                <button
                    onClick={() => {
                        sendVerificationCode();
                    }}
                    className=' text-white  px-4 py-2 rounded-md w-full  text-xs'
                    style={verficationButtonStyles}
                >
                    {' '}
                    Get Verification code {' '}
                </button>

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


export default Page; 
