import { toast } from '@/shared/ui/use-toast'
import { UseFormReturn } from 'react-hook-form'

export interface OTPFormFields {
  otp: string
}

export const useOTP = (form: UseFormReturn<OTPFormFields, any, undefined>) => {
  const onSubmitOTP = ({ otp }: OTPFormFields) => {
    if (otp == '123456') {
      toast({
        title: 'Код подтвержения',
        description: 'Все верно',
      })
    } else {
      form.setError('otp', {
        type: 'server',
        message: 'Неправильный код подтверждения',
      })
    }
  }

  return { onSubmitOTP }
}
