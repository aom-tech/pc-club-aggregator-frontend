'use client'
import { BookingContext } from '@/shared/providers/BookingProvider'
import { Button } from '@/shared/ui/button'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { Check } from 'lucide-react'
import Link from 'next/link'
import { useContext } from 'react'

const SuccessfulBookingPage: React.FC = () => {
  const { bookingInfo } = useContext(BookingContext)
  const { seats, date, timeFrom, timeTo } = bookingInfo
  const formattedDate = format(date, 'd MMMM', { locale: ru })
  return (
    <>
      <div className="flex flex-col items-center gap-10 rounded-[4px] border border-white/10 bg-element/5 p-6">
        <Check size={100} />
        <h1 className="font-bicubik text-md lg:text-2xl">
          Успешное бронирование
        </h1>
        <div className="flex flex-col items-center gap-5">
          <h3 className="font-bicubik text-sm lg:text-lg">
            Ваши места - {seats.join(', ')}
          </h3>
          <h3 className="font-bicubik text-sm lg:text-lg">
            Дата - {formattedDate}
          </h3>
          <h3 className="font-bicubik text-sm lg:text-lg">
            Время - с {timeFrom} до {timeTo}
          </h3>
        </div>
        <h4>Контакты - 8 (800) 5555-3535</h4>
        <Button
          variant="purple"
          size="none"
          className="w-full lg:w-[80%]"
          asChild
        >
          <Link href="/">На главную</Link>
        </Button>
      </div>
    </>
  )
}

export default SuccessfulBookingPage
