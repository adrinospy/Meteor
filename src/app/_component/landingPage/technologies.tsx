import { NextjsLogo, MongoDBLogo, ExpressLogo, WebRTCLogo } from "../logo"

export default function Technology() {

    return (
        <div className="pt-[100px] mt-10 text-[50px] text-[#808080] font-semibold flex items-center animate-fade-up animate-once animate-duration-1000 animate-delay-100 animate-ease-in-out">
            <WebRTCLogo /><span className="pl-[30px]">WebRTC</span>
            <MongoDBLogo /><span className="pr-[30px]">MongoDB</span>
            <ExpressLogo /><span className="px-[30px]">Express</span>
            <NextjsLogo /><span className="px-[30px]">NextJS</span>
        </div>

    )
}