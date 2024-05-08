import { Button } from '@/shared/ui/button'

const SubmitForm: React.FC = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <Button variant="red" size="none">
        Назад
      </Button>
      <Button variant="purple" size="none">
        Далее
      </Button>
    </div>
  )
}

export default SubmitForm
