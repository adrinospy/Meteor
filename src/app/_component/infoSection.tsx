import { VideoCall_lottie } from "./Lottie"
import Technology from "./technologies"

export default function InfoSection() {
    return (<>
      <header className="mx-auto max-w-[1440px] pt-[120px]">
        <h1 className="text-8xl font-[450] max-w-[1200px]">Enhance your Meetings with unlimited video conferencing advantages!</h1>
        <h2 className="text-3xl font-medium pt-[45px] pl-[5px]">Enjoy crystal-clear communication and unparalleled ease of use.</h2>
        <Technology/>
      </header>
    </>)
}
