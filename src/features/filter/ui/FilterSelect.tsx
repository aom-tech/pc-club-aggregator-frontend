'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select'
import { useContext } from 'react'
import { FilterSelectContext } from './FilterSelectBlock'

interface FilterSelectProps {
  placeholder: string
  values: string[]
  stateKey: string
}

const FilterSelect: React.FC<FilterSelectProps> = ({
  placeholder,
  values,
  stateKey,
}) => {
  const { setFilterData } = useContext(FilterSelectContext)
  return (
    <Select
      onValueChange={(v) =>
        setFilterData((prev) => ({ ...prev, [stateKey]: v }))
      }
    >
      <SelectTrigger className="text-xxs h-[60px] rounded-none bg-[#3f3f3f]/30 px-3 py-3 data-[placeholder]:text-white/40">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {values.map((v) => (
          <SelectItem
            key={`select-${placeholder}-${v}`}
            value={v.toLowerCase()}
          >
            {v}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default FilterSelect
