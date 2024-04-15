import ClubDescription from '@/components/ClubDescription'
import ClubInfo from '@/components/ClubInfo'
import Hero from '@/components/Hero'

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
