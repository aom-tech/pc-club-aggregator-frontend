import Image from 'next/image'
import RatingClub from './RatingClub'
import AvailablePlaces from './AvailablePlaces'
import { Button } from './ui/button'

const ClubInfo: React.FC = () => {
  return (
    <main className="flex w-full gap-5">
      <div className="relative flex min-h-[420px] min-w-[640px] flex-col items-end justify-end">
        <Image
          className="object-cover"
          src={'/club-photo.webp'}
          alt="Club Photo"
          fill
          sizes="100%"
        />
        <RatingClub
          className="relative mb-6 mr-6 flex items-center justify-center gap-1 fill-yellow-400 font-bicubik text-[30px]/[28px] text-yellow-400"
          rating={4.95}
          fill={'yellow-400'}
        />
      </div>
      <section className="flex w-full flex-col justify-between">
        <h1 className="font-bicubik uppercase">Беляево</h1>
        <article className="flex flex-col gap-2">
          <h5>г. Москва, ул. Профсоюзная, 102а, этаж 2, ТЦ Белка</h5>
          <h5 className="font-bicubik">+7 (987) 654 3210</h5>
        </article>
        <div className="flex gap-5">
          <AvailablePlaces title="PC" text="15 из 20" />
          <AvailablePlaces title="Playstation" text="15 из 20" />
          <AvailablePlaces title="VIP" text="15 из 20" />
        </div>
        <Button
          size="none"
          className="rounded-none bg-indigo-600 px-5 py-5 font-bicubik text-[20px]/[48px] text-white hover:bg-indigo-600/90"
        >
          Забронировать
        </Button>
      </section>
    </main>
  )
}

export default ClubInfo
