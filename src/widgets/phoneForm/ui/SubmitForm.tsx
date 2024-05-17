import { Button } from '@/shared/ui/button'
import Link from 'next/link'

interface SubmitFormProps {
  ableNext: boolean
}

const SubmitForm: React.FC<SubmitFormProps> = ({ ableNext }) => {
  return (
    <div className="flex w-full flex-col items-center gap-5">
      <Button variant="red" size="none" className="w-full sm:w-[60%]" asChild>
        <Link href="/club/booking">Назад</Link>
      </Button>
      <Button
        variant="purple"
        size="none"
        className="w-full sm:w-[60%]"
        disabled={!ableNext}
      >
        Далее
      </Button>
    </div>
  )
}

export default SubmitForm
