import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select'

const TimeSelector: React.FC = () => {
  const hoursInDay = Array.from({ length: 24 }, (_, i) => `${i}:00`)
  return (
    <>
      <Select>
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
      <Select>
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
