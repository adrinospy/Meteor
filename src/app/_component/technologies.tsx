import { NextjsLogo, NodeLogo, MongoDBLogo, ExpressLogo, WebRTCLogo } from "./logo"

export default function Technology(){

    return (
    <div className="pt-10 text-[40px] text-[#808080] font-semibold flex items-center">
        <WebRTCLogo /><span className="pl-[20px]">WebRTC</span>
        <MongoDBLogo/><span className="pr-[25px]">MongoDB</span>
        <ExpressLogo/><span className="px-[20px]">Express</span>
        <NextjsLogo/><span className="px-[20px]">NextJS</span>
        <NodeLogo /><span className="pl-[20px]">NodeJS</span>
    </div>
)
}