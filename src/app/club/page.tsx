import ClubDescription from '@/components/ClubDescription'
import ClubInfo from '@/components/ClubInfo'
import Hero from '@/components/Hero'

const ClubPage: React.FC = () => {
  return (
    <div className="mt-4 flex flex-col items-center justify-center gap-20">
      <Hero />
      <ClubInfo />
      <ClubDescription />
    </div>
  )
}

export default ClubPage
