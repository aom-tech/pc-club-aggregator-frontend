import { Button } from '@/shared/ui/button'
import FilterSelect from './FilterSelect'
import { filterSelectData } from '../model'

const Filter: React.FC = () => {
  return (
    <div className="flex w-[1080px] flex-row items-center gap-5">
      <div className="flex w-full flex-row">
        {filterSelectData.map((f) => (
          <FilterSelect key={`filterselect-${f.stateKey}`} {...f} />
        ))}
      </div>
      <Button
        variant="default"
        className="text-xxs h-[60px] rounded-none px-[50px] py-3 text-background"
      >
        Поиск
      </Button>
    </div>
  )
}

export default Filter
