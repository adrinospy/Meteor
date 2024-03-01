
"use client";
import { useState } from "react";
import Image from 'next/image'

import LoginForm from "../_component/account/login"
import SignupForm from "../_component/account/signup"
import { Back, SLogo } from "../_component/logo";
import login from "../../../public/video.png"
import Link from "next/link";

export default function Account() {

    const [register, setRegister] = useState(false)

    const toggleRegister = () => {
        setRegister(!register);
    }

    return (
        <div className="overflow-hidden md:w-auto bg-gray-200 flex items-center justify-center h-screen">
            <div className="absolute z-0 bg-[#ff495a] custom-border-radius" />
            <div className="bg-white w-[75vw] p-[80px] z-10 rounded-xl shadow-md">
                <div className="flex justify-between">
                    <div className="flex">
                        <Link href={'/'}><Back /></Link>
                        <SLogo />
                    </div>
                    <div className="h-[20px] text-xl mt-8 mr-16">{register ? 'Already a user? ' : 'New User? '}
                        <button className="text-[#6534d9]"
                            onClick={toggleRegister}
                        >{register ? 'Login' : 'Sign Up'}</button>
                    </div>
                </div>
                <div className="flex mt-12 justify-between px-5">
                    {register ? <SignupForm /> : <LoginForm />}
                    <Image alt="login image" src={login} style={{ height: '500px', width: '600px', scale: '1.2' }} />
                </div>
            </div>
        </div>
    )
}
