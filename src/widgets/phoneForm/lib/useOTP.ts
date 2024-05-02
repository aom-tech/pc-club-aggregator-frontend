import { toast } from '@/shared/ui/use-toast'

export interface OTPFormFields {
  otp: string
}

export const useOTP = () => {
  const onSubmitOTP = ({ otp }: OTPFormFields) => {
    if (otp == '123456') {
      toast({
        title: 'Код подтвержения',
        description: 'Все верно',
      })
    } else {
      toast({
        title: 'Код подтвержения',
        description: 'Ошибка! Код введен не верно!',
      })
    }
  }

  return { onSubmitOTP }
}
