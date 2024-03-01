"use client";

import { Player } from '@lottiefiles/react-lottie-player';

import INFOSECTION_LOTTEI from "../../../../meteor/public/INFOSECTION_LOTTEI.json"

export function InfoSectionLottie() {
  return (
    <Player
      autoplay
      loop
      renderer="svg"
      src={INFOSECTION_LOTTEI}
      style={{ height: '300px', width: '300px', transform: 'scale(1.8) translateY(65px)' }}
    />
  )
}
