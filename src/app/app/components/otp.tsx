import React, { useState } from 'react'
import { countryCodes } from '../lib/countryCodes'
import Image from 'next/image';


const OTP = ({ setPhone }: { setPhone: React.Dispatch<React.SetStateAction<string>> }) => {

  const [filter, setFilter] = useState('');
  const [countryObject, setCountryObject] = useState({ country: 'India', code: '91' });
  const [container, setContainer] = useState(false);


  return (
    <>
      <div className=' px-2 py-1 text-black'>

        <div className=' text-center cursor-pointer  border-2  border-black  rounded-md' onClick={() => setContainer(!container)}>
          {countryObject.country.trim()}
        </div>



        <div className='mt-[30px] flex justify-center '>
          <span className='mr-2 bg-white p-2 rounded-md select-none'>
            +{countryObject.code.trim()}
          </span>
          <input type='text' className='outline-none bg-white text-black rounded-md px-2' onKeyDown={(e) => {
            if (isNaN(parseInt(e.key))) {
              if (e.key !== 'Backspace')
                e.preventDefault();
            }
          }}
            onChange={(e) => { setPhone('+' + countryObject.code.trim() + e.target.value); }}
          />
        </div>

      </div>

      {container &&
        <div className='bg-white absolute  p-[2px]  rounded-md bg-blue-50  w-[280px]  '>
          <div className='flex gap-1 mt-[3px] mb-2'>
            <Image width={10} height={10} src='/search.svg' alt='search' />
            <input type='text' className='bg-[#F0F2F5] px-2 py-[2px] text-sm rounded-md  focus:outline-none' value={filter} onChange={(e) => { setFilter(e.target.value) }} />
            {filter ? <Image width={10} height={10} alt='close' src='/close.svg' onClick={() => { setFilter('') }} /> : <Image width={10} height={10} alt='close' src='/close.svg' className='opacity-0' />}
          </div>

          <div className='h-[150px] overflow-y-scroll px-2'>
            {countryCodes.map((element, index) => {
              if (element[0].toLowerCase().includes(filter.toLowerCase())) {
                return (
                  <div key={index} className='flex justify-between py-2 hover:bg-[#F0F2F5] rounded-md px-2  text-sm select-none' onClick={
                    () => {
                      setCountryObject({ country: element[0], code: element[1] });
                      setContainer(false);
                      setPhone('+' + element[1].trim());
                    }
                  }  >
                    <div className='text-black'> {element[0]} </div>
                    <div> {element[1]} </div>
                  </div>)
              }
              return null;
            }

            )

            }
          </div>

        </div>


      }

    </>

  )

}

export default OTP;

// add for phone 