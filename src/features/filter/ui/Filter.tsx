import { Button } from '@/shared/ui/button'
import FilterSelect from './FilterSelect'
import { filterSelectData } from '../model'
import FilterInput from './FilterInput'

const Filter: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center gap-5 lg:w-[1024px] lg:flex-row">
      <div className="flex w-full flex-col lg:flex-row">
        {filterSelectData.map((f) => (
          <FilterSelect key={`filterselect-${f.queryParam}`} {...f} />
        ))}
        <FilterInput placeholder={'Кол-во мест'} queryParam={'seats'} />
      </div>
      <Button
        variant="default"
        className="text-xxs h-[60px] w-full rounded-none px-[50px] py-3 text-background lg:w-auto"
      >
        Поиск
      </Button>
    </div>
  )
}

export default Filter
