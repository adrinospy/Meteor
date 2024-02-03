import Logo from "./logo"
import Link from "next/link"

import FlippableButton from "../ui/button/Flipping_button"

const NavLinks = () => {

    return (
        <>
        <Link className="px-[35px] font-semibold" href="/">Home</Link>
        <Link className="px-[35px] font-semibold" href="/features">Features</Link>
        <Link className="px-[35px] font-semibold" href="/about">About</Link>
        <Link className="pl-[35px] pr-[80px] font-semibold" href="/projects">Projects</Link>
        </>
    )
    }
    
    export default function NavBar() {
        
        return (
        <header className="pt-[20px] mx-auto max-w-[1440px] flex justify-between">
            <div className="justify-self-start"><Logo/></div>
                <div className="flex items-center"><NavLinks />
            <FlippableButton BfrTxt="Start a Meet?" AftTxt="Login/Signin" />  
                </div>
        </header>
    )
}