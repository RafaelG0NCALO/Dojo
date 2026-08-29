import cloundsR from '../../assets/cloundsR.webp'
import cloundsL from '../../assets/cloundsL.webp'
import cloundsB from '../../assets/nuvensv2.webp'

import cloundsRM from '../../assets/cloundsRM.webp'
import cloundsLM from '../../assets/cloundsLM.webp'

import { useParallax } from '../../hooks/useParallax'

export default function Clouds() {
  const cloudsRef = useParallax<HTMLImageElement>({
    speedY: 0.4,
  })

  const cloudsRef2 = useParallax<HTMLImageElement>({
    speedY: 0.4,
  })

  const cloudsBirdsRef = useParallax<HTMLImageElement>({
    speedY: -0.2,
  })

  const cloudsBirdsRef2 = useParallax<HTMLImageElement>({
    speedY: -0.2,
  })

  return (
    <>
      <img
        src={cloundsR}
        ref={cloudsRef}
        alt="clouds"
        className="absolute object-contain right-0 top-0 h-full"
      />

      <img
        src={cloundsL}
        ref={cloudsRef2}
        alt="clouds"
        className="absolute object-contain left-0 top-0 h-full"
      />

      <div className="absolute w-full flex items-end h-1/2 bottom-0 left-1/2 -translate-x-1/2 z-30">
        <img
          src={cloundsB}
          alt="clouds"
          className="object-cover h-full object-top w-full"
        />
      </div>

      <img
        src={cloundsRM}
        ref={cloudsBirdsRef}
        alt="clouds"
        className="absolute object-contain right-0 top-1/6 h-1/3 z-40"
      />

      <img
        src={cloundsLM}
        ref={cloudsBirdsRef2}
        alt="clouds"
        className="absolute object-contain left-0 top-1/6 h-1/3 z-40"
      />
    </>
  )
}