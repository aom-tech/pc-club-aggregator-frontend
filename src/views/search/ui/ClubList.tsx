import ClubCard from './ClubCard'
import {clubsList} from '../model'


const ClubList: React.FC = () => {
  return (
    <main className="flex w-full flex-col gap-5 lg:max-w-[858px]">
      <h1 className="font-bicubik text-xl lg:text-2xl">Клубы</h1>
      <div className="flex flex-col gap-12">
        {clubsList.map((club, index) => (
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
