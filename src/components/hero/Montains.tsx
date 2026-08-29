import montainR from '../../assets/montainR.png'
import montainL from '../../assets/montainL.png'

export default function Mountains() {
  return (
    <>
      <img
        src={montainR}
        alt="mountain"
        className="absolute object-contain h-3/4 bottom-0 right-0 z-20"
      />

      <img
        src={montainL}
        alt="mountain"
        className="absolute object-contain h-3/4 bottom-0 left-0 z-20"
      />
    </>
  )
}