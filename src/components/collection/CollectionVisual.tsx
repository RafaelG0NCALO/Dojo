import frogSamurai from '../../assets/frogSamurai.png'

export default function CollectionVisual() {
  return (
    <div className="relative max-md:order-2 max-lg:min-h-[60vh]">

      <img
        src={frogSamurai}
        alt="Frog Samurai"
        className="
          z-40
          h-3/4
          max-md:hidden
          block
          bottom-0
          absolute
          object-contain
          left-0
        "
      />

      <img
        src={frogSamurai}
        alt="Frog Samurai"
        className="
          z-40
          h-3/4
          max-md:h-2/3
          max-md:block
          hidden
          bottom-0
          absolute
          object-contain
          left-0
        "
      />

    </div>
  )
}