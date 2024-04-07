const Hero: React.FC = () => {
  return (
    <section className="before:bg-hero relative flex h-[468px] w-[1440px] items-end stroke-black pb-10 pl-10 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:blur-sm before:content-['']">
      <div className="relative flex flex-col gap-4">
        <span className="text-logo w-[409px]">
          Сеть компьютерных клубов для требовательных игроков
        </span>
        <span className="text-display font-bicubik uppercase">
          Киберхаус
        </span>
      </div>
    </section>
  )
}

export default Hero
