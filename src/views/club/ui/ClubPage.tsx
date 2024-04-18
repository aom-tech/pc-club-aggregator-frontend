import ClubInfo from '@/widgets/clubInfo'
import Hero from './Hero'
import ClubDescription from './ClubDescription'

const ClubPage: React.FC = () => {
  return (
    <div className="mt-4 flex max-w-[630px] flex-col items-center justify-center gap-20 self-center px-5 lg:max-w-full">
      <Hero />
      <ClubInfo />
      <ClubDescription />
    </div>
  )
}

export default ClubPage
