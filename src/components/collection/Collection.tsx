import bg from '../../assets/bg.webp'
import cano from '../../assets/cano2.webp'
import card from '../../assets/card.webp'
import card2 from '../../assets/card2.webp'
import card4 from '../../assets/card4.webp'

import CollectionVisual from './CollectionVisual'
import CollectionContent from './CollectionContent'

export default function Collection() {
  return (
    <section className="w-full h-full lg:min-h-screen relative overflow-hidden grid grid-cols-2 max-md:grid-cols-1 border-b-8 border-sky-950">
      
      <img
        src={bg}
        alt=""
        loading="lazy"
        decoding="async"
        className="w-full h-full absolute object-cover"
      />

      <img
        src={cano}
        alt=""
        loading="lazy"
        decoding="async"
        className="z-30 block w-full top-10 max-md:top-[55%] absolute"
      />

      <img
        src={card}
        alt=""
        loading="lazy"
        decoding="async"
        className="z-30 block h-2/3 top-10 max-md:h-2/5 max-md:top-[55%] absolute card-slide-1"
      />

      <img
        src={card2}
        alt=""
        loading="lazy"
        decoding="async"
        className="z-30 block h-2/3 top-10 max-md:h-2/5 max-md:top-[55%] absolute card-slide-2"
      />

      <img
        src={card4}
        alt=""
        loading="lazy"
        decoding="async"
        className="z-30 block h-2/3 top-10 max-md:h-2/5 max-md:top-[55%] absolute card-slide-3"
      />

      <CollectionVisual />
      <CollectionContent />
    </section>
  )
}