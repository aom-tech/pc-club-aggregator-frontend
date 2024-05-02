'use client'
import { OTPFormFields } from '@/widgets/phoneForm/lib/useOTP'
import { PhoneFormFields } from '@/widgets/phoneForm/lib/usePhone'
import OTPInputForm from '@/widgets/phoneForm/ui/OTPInputForm'
import PhoneInputForm from '@/widgets/phoneForm/ui/PhoneInputForm'
import { useForm } from 'react-hook-form'

const PhoneForm: React.FC = () => {
  const phoneForm = useForm<PhoneFormFields>({
    defaultValues: { phoneNumber: '' },
  })

  const otpForm = useForm<OTPFormFields>({
    defaultValues: { otp: '' },
  })

  return phoneForm.formState.isSubmitSuccessful ? (
    <OTPInputForm form={otpForm} />
  ) : (
    <PhoneInputForm form={phoneForm} />
  )
}

export default PhoneForm
