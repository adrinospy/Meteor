import LOADING from '../../../../meteor/public/Loader.json'
import { Player } from '@lottiefiles/react-lottie-player';

export default function loading() {
  return (
    <>
      <Player
        className=""
        autoplay
        loop
        src={LOADING}
        style={{ height: '300px', width: '300px', transform: 'scale(1.8) translateY(75px)' }}
      />
    </>
  )
}