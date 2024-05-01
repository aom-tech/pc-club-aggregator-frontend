import ClubInfo from '@/widgets/clubInfo'
import Hero from '@/entity/ui/Hero'
import ClubDescription from './ClubDescription'

const ClubPage: React.FC = () => {
  return (
    <>
      <Hero
        title="Киберхаус"
        description="Сеть компьютерных клубов для требовательных игроков"
        src="/hero.jpg"
      />
      <ClubInfo />
      <ClubDescription />
    </>
  )
}

export default ClubPage
