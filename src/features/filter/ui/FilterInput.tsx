'use client'

import { Input } from '@/shared/ui/input'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

interface FilterInputProps {
  placeholder: string
  queryParam: string
}

const FilterInput: React.FC<FilterInputProps> = ({
  placeholder,
  queryParam,
}) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (value !== '') {
        params.set(name, value)
      } else params.delete(name)

      return params.toString()
    },
    [searchParams]
  )
  return (
    <Input
      onChange={(v) =>
        router.push(
          pathname + '?' + createQueryString(queryParam, v.target.value)
        )
      }
      defaultValue={searchParams.get(queryParam) || ''}
      type="number"
      inputMode="numeric"
      pattern="\d*"
      min={0}
      placeholder={placeholder}
      variant="styled"
      styleSize="styled"
    />
  )
}

export default FilterInput
