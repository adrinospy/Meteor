"use client";

import { useState } from "react"
import { useRouter } from 'next/navigation';

interface FlippableButtonProps {
  BfrTxt: string;
  AftTxt: string;
  href: string;
}

const FlippableButton: React.FC<FlippableButtonProps> = ({ BfrTxt, AftTxt, href }) => {

  const [isHovered, setIsHovered] = useState(false);

  const router = useRouter();
  const handleClick = () => {
    router.push(href);
  };

  return (
    <button className={`text-[#ffffff] text-xl bg-[#ff495a] h-[50px] w-[187px] rounded-[32px] overflow-hidden ransition-all duration-300 ${isHovered ? 'scale-110' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <h1 className={`font-extrabold justify-center flex transition-all duration-200 ${isHovered ? 'mt-[55px] scale-[80%]' : 'mt-[-12px]'}`}>{BfrTxt}</h1>
      <h1 className="font-extrabold justify-center mt-[-82px]">{AftTxt}</h1>
    </button>
  );
}

export default FlippableButton;
