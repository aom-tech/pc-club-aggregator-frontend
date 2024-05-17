'use client'

import {
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from 'react'

interface BookingInfo {
  date: Date
  seats: number[]
  timeFrom: string
  timeTo: string
}

type BookingContextValue = {
  bookingInfo: BookingInfo
  setBookingInfo: React.Dispatch<SetStateAction<BookingInfo>>
}

const BookingContext = createContext<BookingContextValue>(
  {} as BookingContextValue
)

const BookingProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [bookingInfo, setBookingInfo] = useState<BookingInfo>({
    date: new Date(),
    seats: [205, 206, 207],
    timeTo: '',
    timeFrom: '',
  })
  return (
    <BookingContext.Provider value={{ bookingInfo, setBookingInfo }}>
      {children}
    </BookingContext.Provider>
  )
}

export { BookingContext, BookingProvider }
