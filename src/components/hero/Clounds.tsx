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
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
        src={cloundsR}
        ref={cloudsRef}
        alt="clouds"
        loading="lazy"
        decoding="async"
        className="absolute object-contain right-0 top-0 h-full"
      />

      <img  
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
        src={cloundsL}
        ref={cloudsRef2}
        alt="clouds"
        loading="lazy"
        decoding="async"
        className="absolute object-contain left-0 top-0 h-full"
      />

      <div className="absolute w-full flex items-end h-1/2 bottom-0 left-1/2 -translate-x-1/2 z-30">
        <img  
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
          src={cloundsB}
          alt="clouds"
          loading="lazy"
          decoding="async"
          className="object-cover h-full object-top w-full"
        />
      </div>

      <img  
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
        src={cloundsRM}
        ref={cloudsBirdsRef}
        alt="clouds"
        loading="lazy"
        decoding="async"
        className="absolute object-contain right-0 top-1/6 h-1/3 z-40"
      />

      <img  
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
        src={cloundsLM}
        ref={cloudsBirdsRef2}
        alt="clouds"
        loading="lazy"
        decoding="async"
        className="absolute object-contain left-0 top-1/6 h-1/3 z-40"
      />
    </>
  )
}