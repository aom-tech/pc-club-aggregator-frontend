import { BookingContext } from '@/shared/providers/BookingProvider'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select'
import { useContext } from 'react'

const TimeSelector: React.FC = () => {
  const hoursInDay = Array.from({ length: 24 }, (_, i) => `${i}:00`)
  const { bookingInfo, setBookingInfo } = useContext(BookingContext)
  return (
    <>
      <Select
        onValueChange={(v) =>
          setBookingInfo((prev) => ({ ...prev, timeFrom: v }))
        }
        defaultValue={bookingInfo.timeFrom}
      >
        <SelectTrigger className="h-[60px] rounded-none bg-element/30 px-3 py-3 text-xxs data-[placeholder]:text-white/40">
          <SelectValue placeholder={'От'} />
        </SelectTrigger>
        <SelectContent className="h-48">
          {hoursInDay.map((hour) => (
            <SelectItem key={hour} value={hour}>
              {hour}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        onValueChange={(v) =>
          setBookingInfo((prev) => ({ ...prev, timeTo: v }))
        }
        defaultValue={bookingInfo.timeTo}
      >
        <SelectTrigger className="h-[60px] rounded-none bg-element/30 px-3 py-3 text-xxs data-[placeholder]:text-white/40">
          <SelectValue placeholder={'До'} />
        </SelectTrigger>
        <SelectContent className="h-48">
          {hoursInDay.map((hour) => (
            <SelectItem key={hour} value={hour}>
              {hour}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  )
}

export default TimeSelector
