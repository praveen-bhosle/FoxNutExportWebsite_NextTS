import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <div className="h-[100vh] w-[100vw] flex justify-center items-center border-black border-2 ">

            <div className="border">
                <Image src='/logo.jpg' alt='image' width={400} height={400} />
            </div>
        </div>
    )
}

export default page