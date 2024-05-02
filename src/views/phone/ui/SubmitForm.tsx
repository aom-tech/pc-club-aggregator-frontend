import { Button } from '@/shared/ui/button'

const SubmitForm: React.FC = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <Button
        className="bg-red-500 hover:bg-red-500/90"
        variant="purple"
        size="none"
      >
        Назад
      </Button>
      <Button variant="purple" size="none">
        Далее
      </Button>
    </div>
  )
}

export default SubmitForm
