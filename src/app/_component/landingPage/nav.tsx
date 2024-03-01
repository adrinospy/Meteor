"use client"
import Logo from "../logo"
import Link from "next/link"

import useLogin from "../../../store/store"
import FlippableButton from "../../ui/buttons/flipButton"

const NavLinks = ({ LogIn }: { LogIn: boolean }) => {

    return (
        <>
            <Link className="mx-[35px] font-semibold" href="#work">WORK</Link>
            <Link className="mx-[35px] font-semibold" href="#promise">PROMISES</Link>
            <Link className="mx-[35px] font-semibold" href="#testimonials">TESTIMONIALS</Link>
            <Link className="ml-[35px] mr-[80px] font-semibold" href={LogIn ? "/profile" : "/projects"}>{LogIn ? "PROFILE" : "PROJECTS"}</Link>
        </>
    )
}

export default function NavBar() {

    const Login = useLogin((state) => state.Login);
    return (
        <header className="snap-start pt-[20px] mx-auto max-w-[1440px] flex justify-between animate-fade-down">
            <div className="justify-self-start"><Logo /></div>
            <div className="flex items-center"><NavLinks LogIn={Login} />
                <FlippableButton BfrTxt={Login! ? "Create Meeting" : "Start a Meet?"}
                    AftTxt={Login! ? "Quick Meet" : "LogIn/SignUp"}
                    href={Login! ? "/" : "/account"} />
            </div>
        </header>
    )
}