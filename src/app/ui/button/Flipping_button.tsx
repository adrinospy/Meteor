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
      <h1 className={`font-extrabold justify-center flex transition-all duration-200 ${isHovered ? 'mt-[55px] scale-[80%]' : 'mt-[-12px]'}`}>{BfrTxt}</h1>
      <h1 className="font-extrabold justify-center mt-[-82px]">{AftTxt}</h1>
    </button>
  );
  fs
  df
  s
  fs
  fs
  df
  sd
  fs
  f
  sf
  s
  fs
  f
  dsf

  sdf
  sd
  fasd
  f
  sdf
  asd
  fsd
  fa
  as
  f
  das
  fsdaf
}

export default FlippableButton;
