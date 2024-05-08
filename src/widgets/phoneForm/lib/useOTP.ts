import { UseFormReturn } from 'react-hook-form'

export interface OTPFormFields {
  otp: string
}

export const useOTP = (form: UseFormReturn<OTPFormFields, any, undefined>) => {
  const onSubmitOTP = ({ otp }: OTPFormFields) => {
    if (otp != '123456') {
      form.setError('otp', {
        type: 'server',
        message: 'Неправильный код подтверждения',
      })
    }
  }

  return { onSubmitOTP }
}
