import { DiMeteorfull } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiWebrtc } from "react-icons/si";

export default function Logo() {
    return (<DiMeteorfull
        style={{ color: 'red', height: '80px', width: "220px" }}
        viewBox="8.5 12 10 10"
    />)
}

export function NextjsLogo() {
    return (<TbBrandNextjs
        style={{ color: 'grey', height: '150px', width: "130px" }}
    />)
}

export function ExpressLogo() {
    return (<SiExpress
        style={{ color: 'grey', height: '150px', width: "130px" }}
    />)
}

export function NodeLogo() {
    return (<FaNode
        style={{ color: 'grey', height: '150px', width: "130px" }}
    />)
}

export function MongoDBLogo() {
    return (<BiLogoMongodb
        style={{ color: 'grey', height: '150px', width: "130px" }}
    />)
}

export function WebRTCLogo() {
    return (<SiWebrtc
        style={{ color: 'grey', height: '150px', width: "130px" }}
    />)
}