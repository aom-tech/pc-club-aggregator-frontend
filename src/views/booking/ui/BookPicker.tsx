'use client'

import React, { useState } from 'react'
import { Calendar } from '@/shared/ui/calendar'
import { Button } from '@/shared/ui/button'
import TimeSelector from './TimeSelector'
import { format, isBefore, isAfter, addDays } from 'date-fns'
import { ru } from 'date-fns/locale'
import Link from 'next/link'

const disabledDate = (date: Date) => {
  const today = new Date()
  today.setDate(today.getDate() - 1)
  return isBefore(date, today) || isAfter(date, addDays(today, 30))
}

const BookPicker: React.FC = () => {
  const [chosenDate, setChosenDate] = useState<Date | undefined>(new Date())
  return (
    <div className="flex w-full flex-col items-center gap-5 sm:flex-row sm:items-stretch">
      <Calendar
        className="border"
        mode="single"
        selected={chosenDate}
        onSelect={setChosenDate}
        disabled={disabledDate}
      />
      <div className="flex w-full flex-col gap-5">
        <div className="text-l gap-5 font-bicubik lg:text-xl">
          <p>
            Дата -{' '}
            {chosenDate ? format(chosenDate, 'd MMMM', { locale: ru }) : ''}
          </p>
          <p>Ваши Места - 205, 206, 207</p>
        </div>
        <TimeSelector />
        <Button size="none" variant="purple" asChild>
          <Link href="/club/booking/phone">Забронировать</Link>
        </Button>
      </div>
    </div>
  )
}

export default BookPicker
