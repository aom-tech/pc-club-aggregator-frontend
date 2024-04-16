import Image from 'next/image'
import RatingClub from '@/components/RatingClub'
import AvailablePlaces from '@/components/AvailablePlaces'
import { Button } from '@/shared/ui/button'

const ClubInfo: React.FC = () => {
  return (
    <main className="grid w-full gap-5 lg:grid-cols-2">
      <div className="relative flex min-h-[320px] w-full flex-col items-end justify-end lg:min-h-[420px]">
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
      <section className="flex w-full flex-col gap-5 lg:justify-between">
        <h1 className="font-bicubik text-h2 lg:text-h1">Беляево</h1>
        <article className="flex flex-col gap-2">
          <h5 className="text-small lg:text-h5">
            г. Москва, ул. Профсоюзная, 102а, этаж 2, ТЦ Белка
          </h5>
          <h5 className="font-bicubik text-small lg:text-h5">
            +7 (987) 654 3210
          </h5>
        </article>
        <div className="flex gap-5">
          <AvailablePlaces title="PC" text="15 из 20" />
          <AvailablePlaces title="PS" text="15 из 20" />
          <AvailablePlaces title="VIP" text="15 из 20" />
        </div>
        <Button
          size="none"
          className="rounded-none bg-indigo-600 px-5 py-5 font-bicubik text-[14px]/[32px] text-white hover:bg-indigo-600/90 lg:text-[20px]/[48px]"
        >
          Забронировать
        </Button>
      </section>
    </main>
  )
}

export default ClubInfo
