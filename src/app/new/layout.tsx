'use client'
import Header from "./Header";
import Footer from "./Footer";
import React, { useState } from "react";
import Image from "next/image";

export default function layout({ children }: { children: React.ReactNode }) {

    const [i, setI] = useState(0);

    const interval = setInterval(() => { if (i < 1) setI(i => i + 1); clearInterval(interval); }, 500);

    return (
        <>
            {i < 1 ? <div className="h-[100vh] w-[100vw] flex justify-center items-center border-black border-2 ">

                <div className="border">
                    <Image src='/logo.jpg' alt='image' width={400} height={400} />
                </div>
            </div>
                :
                <div>
                    <Header />
                    <div className=" mt-[50px]   px-4">
                        {children}
                    </div>
                    <Footer />
                </div>
            }
        </>
    )
}