import bg2 from '../../assets/bg2.webp'

export default function CollectionContent() {
  return (
    <div className="relative flex justify-center items-center p-4 max-lg:min-h-[70vh]">

      <img
        src={bg2}
        alt=""
        className="w-full h-full absolute object-cover"
      />

      <div className="
        text-center
        absolute
        max-w-2xl
        rounded-3xl
        p-8
        max-md:p-4
        mx-auto
        bg-gray-900/20
        backdrop-blur-sm
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
          COLEÇÃO
        </h1>

        <p className="text-[clamp(0.9rem,2.3vw,1.5rem)] text-white">
          Eu sei o que você tá pensando: “mais uma coleção de PFP?”
          Mas a Pizza Frog chegou para fazer diferente.
          Cada sapo é especial nesse universo.
        </p>

        <p className="text-[clamp(0.9rem,2.3vw,1.5rem)] mt-2 mb-4 text-white">
          Fazer parte da coleção é só o começo da jornada.
          Desbloqueie vantagens exclusivas e acompanhe
          tudo que ainda está por vir
          e faça parte do universo Pizza Frog. 🐸🍕
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
            Purchase on OpenSea
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
            Pool on Sudoswap
          </button>

        </div>
      </div>
    </div>
  )
}