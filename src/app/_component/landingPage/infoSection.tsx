"use client";
import { PrivacyLogo, VideoLogo, CodeLogo } from "../logo"
import Technology from "./technologies";
import { InfoSectionLottie } from "../lotties";
import jese from "../../../../public/jese-leos.png"
import joseph from "../../../../public/joseph-mcfall.png"
import karen from "../../../../public/karen-nelson.png"
import roberta from "../../../../public/roberta-casas.png"
import { useInView } from "react-intersection-observer";
import Image, { StaticImageData } from "next/image";

export default function InfoSection() {

  return (<>
    <header className="mx-auto max-w-[1440px] mt-[100px]">
      <div className="flex animate-fade-up animate-once animate-duration-1000 animate-normal">
        <div>
          <h1 className="text-8xl font-[500]">Enhance your <span className="text-[#ff495a] font-[600] text-[100px]">Meetings</span> with unlimited video calling advantages!</h1>
          <h2 className="text-3xl max-w-[1000px] font-medium pt-[45px] pl-[5px]">Connect seamlessly with loved ones or colleagues through crystal-clear video calls on our intuitive and reliable video calling platform.</h2>
        </div>
        <InfoSectionLottie />
      </div>
      <Technology />
    </header>
  </>)
}



export function Promises() {

  const [ref1, inView1] = useInView({
    triggerOnce: false,
    threshold: 0.0
  });

  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.0
  });

  const [ref3, inView3] = useInView({
    triggerOnce: false,
    threshold: 0.0
  });

  return (
    <>
      <div id="promise" className="flex flex-col max-w-[700px] mx-[14vw] mt-5">
        <div ref={ref1} className={`pt-10 pb-5 font-bold ${inView1 ? 'animate-fade-up animate-duration-4000 animate-ease-in-out' : 'opacity-0'}`}>P R O M I S E S</div>
        <div ref={ref2} className={`text-5xl ${inView2 ? 'animate-fade-up animate-duration-4000 animate-ease-in-out' : 'opacity-0'}`}>It’s not about limitations, but this is something about what we focus on.</div>
      </div>
      <div className={`flex gap-x-8 justify-center mt-10 ${inView3 ? 'animate-fade-up animate-duration-4000 animate-ease-in-out' : 'opacity-0'}`}>
        <a href="#" ref={ref3} className="block max-w-[23vw] h-min-[560px] p-10 mb-20 bg-[#dee3ff] rounded-3xl">
          <PrivacyLogo />
          <h5 className="mb-2 text-3xl font-medium tracking-tight">Privacy</h5>
          <p className="font-normal">Secure video calls with end-to-end encryption for your privacy and peace of mind. Your conversations stay confidential.</p>
          <ul className="list-disc p-5 mt-5 text-xl space-y-3">
            <li> Privacy Assurance</li>
            <li> Robust Encryption</li>
            <li> Data Security</li>
            <li> Confidentiality Commitment</li>
          </ul>
        </a>
        <a href="#" className="block max-w-[23vw] h-min-[560px] p-10 my-10 bg-[#feefd9] rounded-3xl">
          <VideoLogo />
          <h5 className="mb-2 text-3xl font-medium tracking-tight">Connectivity</h5>
          <p className="font-normal">Experience seamless connectivity on our video calling platform, ensuring smooth and reliable communication for uninterrupted conversations anytime, anywhere.</p>
          <ul className="list-disc p-5 mt-5 text-xl space-y-3">
            <li> Seamless Connectivity</li>
            <li> Real-time Interaction</li>
            <li> Cross-Platform Compatibility</li>
            <li> Reliable Performance</li>
          </ul>
        </a>
        <a href="#" className="block max-w-[23vw] h-min-[560px] p-10 mt-20  bg-[#feeaea] rounded-3xl">
          <CodeLogo />
          <h5 className="mb-2 text-3xl font-medium tracking-tight">Opensorce Codebase</h5>
          <p className="font-normal">Embrace transparency and innovation- Inviting collaboration and customization for a community-driven, cutting-edge communication experience.</p>
          <ul className="list-disc p-5 mt-5 text-xl space-y-3">
            <li> Innovation Hub</li>
            <li> Community Collaboration</li>
            <li> Transparent Development</li>
            <li> Customization Freedom</li>
          </ul>
        </a>
      </div>
    </>
  )
}

export function Work() {
  const [ref1, inView1] = useInView({
    triggerOnce: false,
    threshold: 0.0
  });

  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.0
  });

  const [ref3, inView3] = useInView({
    triggerOnce: false,
    threshold: 0.0
  });

  const [ref4, inView4] = useInView({
    triggerOnce: false,
    threshold: 0.0
  });

  return (
    <div id="work" className="max-w-[1100px] flex-col m-auto py-8" >
      <div className="px-40">
        <div ref={ref1} className={`pt-10 pb-5 font-bold ${inView1 ? 'animate-fade-up animate-duration-4000 animate-ease-in-out' : 'opacity-0'}`}>W O R K</div>
        <div ref={ref2} className={`text-7xl ${inView2 ? 'animate-fade-up animate-duration-4000 animate-ease-in-out' : 'opacity-0'}`}>We knew to be done is good, but sharing our experiences and it “works” is way better.</div>
        <p ref={ref3} className={`text-3xl py-10 ${inView3 ? 'animate-fade-up animate-duration-4000 animate-ease-in-out' : 'opacity-0'}`}>Our expert team of designers, developers, illustrators and project managers work with streamlined processes to <span className="bg-[#fdf0d8]">break through organizational roadblocks</span>. We translate research into solutions, crafting thoughtful and unified brands, apps, websites, interfaces and systems.</p>
        <p ref={ref4} className={`text-3xl py-10 ${inView4 ? 'animate-fade-up animate-duration-4000 animate-ease-in-out' : 'opacity-0'}`}>Through challenging core assumptions, we shape the products and services that <span className="bg-[#fdf0d8]">improve the lives of thousands every single day</span>.</p>
      </div>
    </div>
  )
}



export function Testimonials() {

  const [ref1, inView1] = useInView({
    triggerOnce: false,
    threshold: 0.0
  });

  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.0
  });

  const [ref3, inView3] = useInView({
    triggerOnce: false,
    threshold: 0.0
  });

  function card({ comment, name, designation, img }: { comment: string; name: string; designation: string; img: StaticImageData; }) {
    return (
      <div className="flex-col h-min-[470px] w-full max-w-sm bg-[#feefd9] border-gray-200 rounded-xl shadow">
        <p className="self-start text-xl p-10">&quot;{comment}&quot;</p>
        <div className="self-end flex flex-col items-center py-10">
          <Image className="w-24 h-24 mb-3 rounded-full shadow-lg" src={img} alt="" />
          <h5 className="mb-1 text-xl font-medium text-gray-900">{name}</h5>
          <span className="text-sm text-gray-500">{designation}</span>
          <div className="flex mt-4 md:mt">
          </div>
        </div >
      </div>
    );
  }

  const cards = {
    user1: {
      comment: "Impressive platform! The seamless video quality and user-friendly interface make communication a breeze. Kudos to the team!",
      name: "Jese Leos",
      designation: "Crypto Innovation Evangelist at Blockchain Dynamics",
      img: jese,
    },
    user2: {
      comment: "Love the privacy features! Knowing my conversations are secure adds a great sense of trust. A fantastic video calling experience.",
      name: "Joseph McFall",
      designation: "Virtual Reality Maestro at Virtuoso Systems Ltd.",
      img: joseph,
    },
    user3: {
      comment: "Superb connectivity! Never faced any disruptions, and the global accessibility makes it easy to stay connected with friends and colleagues worldwide.",
      name: "Karen Nelson",
      designation: "Cybernetic Visionary at FutureNet Dynamics",
      img: karen,
    },
    user4: {
      comment: "Highly impressed with the open-source approach. It's refreshing to see a platform that values transparency and community collaboration.",
      name: "Roberta Casas",
      designation: "Digital Experience Architect at TechnoVision Solutions",
      img: roberta,
    }
  };

  return (<>
    <div id="testimonials" className="max-w-[1400px] flex-col m-auto py-8">
      <div className="px-40">
        <div ref={ref1} className={`pt-10 pb-5 font-bold ${inView1 ? 'animate-fade-up animate-duration-4000 animate-ease-in-out' : 'opacity-0'}`}>T E S T I M O N I A L S</div>
        <div ref={ref2} className={`text-7xl ${inView2 ? 'animate-fade-up animate-duration-4000 animate-ease-in-out' : 'opacity-0'}`}>What they said about us from the people we shared experiences with.</div>
      </div>
    </div>
    <div ref={ref3} className={`flex justify-center gap-x-8 pt-5 ${inView3 ? 'animate-fade-up animate-duration-4000 animate-ease-in-out' : 'opacity-0'}`}>
      {card(cards.user1)}
      {card(cards.user2)}
      {card(cards.user3)}
      {card(cards.user4)}
    </div>
  </>
  );
}