import Hero from '@/entity/ui/Hero'
import SubmitForm from './SubmitForm'
import PhoneForm from '@/widgets/phoneForm'

const PhonePage: React.FC = () => {
  return (
    <>
      <Hero
        title="Беляево"
        description="Компьютерный клуб для требовательных игроков"
        src="/club-photo.webp"
      />
      <PhoneForm />
      <SubmitForm />
    </>
  )
}

export default PhonePage
