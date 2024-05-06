import Hero from '@/entity/ui/Hero'
import ClubLayout from './ClubLayout'
import BookPicker from './BookPicker'

const BookingPage: React.FC = () => {
  return (
    <>
      <Hero
        title="Беляево"
        text="Киберхаус"
      />
      <ClubLayout/>
      <BookPicker/>
    </>
  )
}

export default BookingPage
