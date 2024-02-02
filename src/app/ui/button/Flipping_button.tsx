"use client";

import { useState } from "react"

interface FlippableButtonProps {
    BfrTxt: string;
    AftTxt: string;
  }

  const FlippableButton: React.FC<FlippableButtonProps> = ({ BfrTxt, AftTxt }) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
      <button className={`text-[#041827] bg-[#ffffff] h-[50px] w-[187px] rounded-[32px] overflow-hidden ransition-all duration-300 ${isHovered ? 'scale-110' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
      <h1 className={`font-extrabold justify-center mt-[-10px] flex transition-all duration-300 ${isHovered ? 'mt-[55px]' : ''}`}>{BfrTxt}</h1>
      <h1 className="font-extrabold justify-center mt-[-80px]">{AftTxt}</h1>
      </button>
      );
  }

export default FlippableButton;
