'use client'
import React, { useState } from 'react'
import { Calendar } from '@/shared/ui/calendar'
import { Button } from '@/shared/ui/button'
import TimeSelector from './TimeSelector'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

const BookPicker: React.FC = () => {
  const [chosenDate, setChosenDate] = useState<Date | undefined>(new Date())
  return (
    <div className="flex w-full flex-col items-center gap-5 sm:flex-row sm:items-stretch">
      <Calendar
        className="border "
        mode="single"
        selected={chosenDate}
        onSelect={setChosenDate}
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
        <Button
          size="none"
          className="h-[60px] rounded-none bg-indigo-600 px-5 py-2 font-bicubik text-3xs text-white hover:bg-indigo-600/90 lg:text-md/[48px]"
        >
          Забронировать
        </Button>
      </div>
    </div>
  )
}

export default BookPicker
