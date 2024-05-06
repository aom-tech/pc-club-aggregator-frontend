import ClubInfo from '@/widgets/clubInfo'
import Hero from '@/entity/ui/Hero'
import ClubDescription from './ClubDescription'

const ClubPage: React.FC = () => {
  return (
    <>
      <Hero
        title="Киберхаус"
        text="Сеть компьютерных клубов для требовательных игроков"
      />
      <ClubInfo />
      <ClubDescription />
    </>
  )
}

export default ClubPage
