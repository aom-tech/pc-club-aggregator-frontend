const Hero: React.FC = () => {
  return (
    <section className="relative hidden h-[468px] w-[99vw] items-end overflow-hidden stroke-black pb-10 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-hero before:blur-sm before:content-[''] lg:flex">
      <div className="relative mx-auto flex w-[1280px] flex-col gap-4 pl-5">
        <span className="w-[409px] text-lg">
          Сеть компьютерных клубов для требовательных игроков
        </span>
        <span className="font-bicubik text-3xl uppercase">Киберхаус</span>
      </div>
    </section>
  )
}

export default Hero
