import ClubCard from './ClubCard'
import { clubsList } from '../model'

interface SearchPageProps {
  searchParams: { [K: string]: string }
}

const ClubList: React.FC<SearchPageProps> = ({ searchParams }) => {
  const queryParams = new URLSearchParams(searchParams)
  const cityParam = queryParams.get('city')
  const platformParam = queryParams.get('platform')
  const seatsParam = queryParams.get('seats')

  const filteredClubs = clubsList.filter((club) => {
    if (cityParam) {
      if (cityParam !== club.city) {
        return false
      }
    }

    switch (platformParam) {
      case 'плойка':
        if (!(club.psCurrent && club.psCurrent > 0)) {
          return false
        }
        if (seatsParam) {
          if (club.psCurrent < +seatsParam) {
            return false
          }
        }
        break
      case 'пк':
        if (!(club.pcCurrent && club.pcCurrent > 0)) {
          return false
        }
        if (seatsParam) {
          if (club.pcCurrent < +seatsParam) {
            return false
          }
        }
        break
      case 'вип':
        if (!(club.vipCurrent && club.vipCurrent > 0)) {
          return false
        }
        if (seatsParam) {
          if (club.vipCurrent < +seatsParam) {
            return false
          }
        }
        break
      default:
        break
    }
    return true
  })

  return (
    <main className="flex w-full flex-col gap-5 lg:max-w-[858px]">
      <h1 className="font-bicubik text-xl lg:text-2xl">Клубы</h1>
      <div className="flex flex-col gap-12">
        {filteredClubs.map((club, index) => (
          <ClubCard
            key={index}
            name={club.name}
            address={club.address}
            rating={club.rating}
            pcCurrent={club.pcCurrent}
            pcMax={club.pcMax}
            psMax={club.psMax}
            psCurrent={club.psCurrent}
            vipCurrent={club.vipCurrent}
            vipMax={club.vipMax}
            src={club.src}
          />
        ))}
      </div>
    </main>
  )
}

export default ClubList
