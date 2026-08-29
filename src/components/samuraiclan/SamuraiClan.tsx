import samurais from '../../assets/samurais.mp4'

export default function SamuraiClan() {
  return (
    <section className="w-full h-full relative flex items-center justify-center overflow-hidden">

      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/poster.webp"
         className="w-screen h-screen max-md:h-[50vh] object-cover object-center"
      >
        <source src="/samurais.webm" type="video/webm" />
        <source src={samurais} type="video/mp4" />
      </video>

      <div className="
        text-center
        absolute
        max-w-2xl
        rounded-3xl
        p-8
        max-md:p-4
        mx-auto
        bg-gray-900/20
        backdrop-blur-xs
        left-4
        right-4
        z-40
        border-2
        border-amber-300
      ">
        <h1 className="
          my-2
          text-[clamp(2rem,5vw,3rem)]
          tracking-wider
          text-yellow-400
          font-bold
          collection-title
        ">
          O CLÃ³
        </h1>

        <p className="text-[clamp(0.9rem,2.3vw,1.5rem)] text-white mb-4">
          Entre em um mundo onde tradição, caos e aventura caminham lado a lado,
          conheça os guerreiros e faça parte de uma comunidade criada para quem
          gosta de arte, personagens e experiências fora do comum.
        </p>

        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-5 max-lg:gap-2">
          <button className="
            bg-yellow-400
            max-md:text-sm
            px-4
            py-2
            rounded-md
            text-gray-700
            font-semibold
            border-b-4
            border-yellow-200
            uppercase
          ">
            Comprar na OpenSea
          </button>

          <button className="
            border-2
            border-yellow-400
            rounded-md
            max-md:text-sm
            px-4
            py-2
            text-yellow-400
            font-semibold
            uppercase
          ">
            Ver pool na Sudoswap
          </button>
        </div>
      </div>
    </section>
  )
}