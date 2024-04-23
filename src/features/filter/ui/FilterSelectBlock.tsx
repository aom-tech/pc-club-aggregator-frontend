'use client'
import {
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from 'react'

interface FilterData {
  city: string
  time: string
  platform: string
  places: string
}

interface FilterSelectContextData {
  filterData: FilterData
  setFilterData: React.Dispatch<SetStateAction<FilterData>>
}

const FilterSelectContext = createContext<FilterSelectContextData>(
  {} as FilterSelectContextData
)

const FilterSelectBlock: React.FC<PropsWithChildren> = ({ children }) => {
  const [filterData, setFilterData] = useState<FilterData>({
    city: '',
    time: '',
    platform: '',
    places: '',
  })
  return (
    <div className="flex w-full flex-row">
      <FilterSelectContext.Provider value={{ filterData, setFilterData }}>
        {children}
      </FilterSelectContext.Provider>
    </div>
  )
}

export { FilterSelectContext, FilterSelectBlock }
