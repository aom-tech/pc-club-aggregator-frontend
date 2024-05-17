import Image, { ImageProps } from 'next/image'
import RatingClub from '@/entities/ui/RatingClub'
import AvailablePlaces from '@/entities/ui/AvailablePlaces'
import Link from 'next/link'

interface ClubCardProps extends Omit<ImageProps, 'alt'> {
  name: string
  address: string
  rating: number
  pcCurrent?: number
  pcMax?: number
  psMax?: number
  psCurrent?: number
  vipCurrent?: number
  vipMax?: number
}

const ClubCard: React.FC<ClubCardProps> = ({
  name,
  address,
  rating,
  pcCurrent,
  pcMax,
  psMax,
  psCurrent,
  vipCurrent,
  vipMax,
  ...props
}) => {
  const platforms = [
    { title: 'PC', current: pcCurrent, max: pcMax },
    { title: 'PS', current: psCurrent, max: psMax },
    { title: 'VIP', current: vipCurrent, max: vipMax },
  ]

  return (
    <Link href="/club">
      <div className="flex w-full max-w-sm flex-col items-center bg-element/30 md:max-w-full lg:flex-row lg:gap-14">
        <div className="relative flex h-[182px] w-full max-w-full flex-col items-end justify-end lg:w-[333px]">
          <Image
            {...props}
            alt={name}
            fill
            sizes="100%"
            className="object-cover"
          />
          <RatingClub
            className="relative mb-2.5 mr-2.5 flex items-center justify-center gap-0.5 fill-yellow-400 font-bicubik text-xl text-yellow-400"
            rating={rating}
            fill={'yellow-400'}
            size={24}
          />
        </div>
        <div className="flex flex-col items-start justify-between px-4 py-3 lg:mr-8 lg:px-0">
          <div className="flex flex-col gap-1">
            <h1 className="line-clamp-1 font-bicubik text-xl">{name}</h1>
            <p className="line-clamp-1 max-w-[33rem] text-xs">{address}</p>
          </div>
          <div className="flex w-full gap-4">
            {platforms.map(({ title, current, max }) => (
              <AvailablePlaces
                key={title}
                title={title}
                text={
                  current !== null && current !== undefined
                    ? `${current} из ${max}`
                    : '-'
                }
                className="flex w-0 grow flex-col items-end gap-4 rounded bg-element/25 p-2 font-bicubik text-xxs md:w-40"
              />
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ClubCard
