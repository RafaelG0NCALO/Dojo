import skeleton from '../../assets/skeleton.webp'
import frog from '../../assets/frog.webp'
import butterflys from '../../assets/butterflys.gif'

export default function Characters() {
  return (
    <>
      <div className="shadow2 max-md:w-3/5 w-2/7 absolute bottom-0 left-0 z-40">
        <img
          src={skeleton}
          alt="skeleton"
          className="w-full"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="max-md:w-1/5 w-1/7 absolute bottom-0 left-0 z-40">
        <img
          src={butterflys}
          alt="butterflies"
          className="w-full"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="shadow2 max-md:w-3/5 w-2/7 absolute bottom-0 right-0 z-40">
        <img
          src={frog}
          alt="frog"
          className="w-full"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="max-md:w-1/5 w-1/7 absolute bottom-0 right-0 z-40">
        <img
          src={butterflys}
          alt="butterflies"
          className="w-full"
          loading="lazy"
          decoding="async"
        />
      </div>
    </>
  )
}