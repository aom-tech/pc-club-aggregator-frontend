import { Button } from '@/shared/ui/button'

interface SubmitFormProps {
  ableNext: boolean
}

const SubmitForm: React.FC<SubmitFormProps> = ({ ableNext }) => {
  return (
    <div className="flex w-full flex-col gap-5">
      <Button variant="red" size="none">
        Назад
      </Button>
      <Button variant="purple" size="none" disabled={!ableNext}>
        Далее
      </Button>
    </div>
  )
}

export default SubmitForm
