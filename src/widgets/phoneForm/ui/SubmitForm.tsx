import { Button } from '@/shared/ui/button'
import Link from 'next/link'

interface SubmitFormProps {
  ableNext: boolean
}

const SubmitForm: React.FC<SubmitFormProps> = ({ ableNext }) => {
  return (
    <div className="flex w-full flex-col gap-5">
      <Button variant="red" size="none" asChild>
        <Link href="/club/booking">Назад</Link>
      </Button>
      <Button variant="purple" size="none" disabled={!ableNext}>
        Далее
      </Button>
    </div>
  )
}

export default SubmitForm
