import montainR from '../../assets/montainR.webp'
import montainL from '../../assets/montainL.webp'

export default function Mountains() {
  return (
    <>
      <img
        src={montainR}
        alt="mountain"
        loading="lazy"
        decoding="async"
        className="absolute object-contain h-3/4 bottom-0 right-0 z-20"
      />

      <img
        src={montainL}
        alt="mountain"
        loading="lazy"
        decoding="async"
        className="absolute object-contain h-3/4 bottom-0 left-0 z-20"
      />
    </>
  )
}