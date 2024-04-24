'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

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
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )
  return (
    <Select
      onValueChange={(v) =>
        router.push(pathname + '?' + createQueryString(stateKey, v))
      }
      defaultValue={searchParams.get(stateKey) || ''}
    >
      <SelectTrigger className="text-xxs bg-element h-[60px] rounded-none px-3 py-3 data-[placeholder]:text-white/40">
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
