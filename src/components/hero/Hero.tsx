import logo from '../../assets/logo.png'
import house from '../../assets/house.png'

import Clouds from './Clounds'
import Mountains from './Montains'
import Dragons from './Dragon'
import Characters from './Characters'

import { useParallax } from '../../hooks/useParallax'

export default function Hero() {
  const housesRef = useParallax<HTMLDivElement>({
    speedY: 0.1,
  })

  return (
    <section className="min-h-screen w-full bg-rainbow relative overflow-hidden border-b-8 border-sky-950">

      <img
        src={logo}
        alt="logo"
        className="absolute object-contain left-1/2 -translate-x-1/2 top-[6%] z-50 h-[15%]"
      />

      <Clouds />

      <Mountains />

      <Dragons />

      <div
        ref={housesRef}
        className="w-11/12 xl:max-w-2/5 absolute bottom-1/8 left-1/2 -translate-x-1/2 z-20"
      >
        <img
          src={house}
          alt="house"
          className="w-full"
        />
      </div>

      <Characters />

    </section>
  )
}