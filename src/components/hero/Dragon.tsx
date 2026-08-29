import dragon from '../../assets/dragon.webp'

interface DragonProps {
  className: string
}

function Dragon({ className }: DragonProps) {
  return (
    <div className={className}>
      <img
        src={dragon}
        alt="dragon"
        className="w-full h-full object-contain"
      />
    </div>
  )
}

export default function Dragons() {
  return (
    <>
      <Dragon
        className="
          aspect-square
          h-2/8
          xl:h-3/9
          spin-slow
          absolute
          z-20
          xl:right-40
          bottom-10
        "
      />

      <Dragon
        className="
          aspect-square
          h-2/6
          xl:h-3/7
          spin-slow
          absolute
          z-20
          left-0
          bottom-0
        "
      />

      <Dragon
        className="
          w-11/12
          xl:max-w-2/5
          spin-slow
          translate-y-[70%]
          absolute
          z-30
          left-1/2
          -translate-x-1/2
          bottom-0
        "
      />
    </>
  )
}