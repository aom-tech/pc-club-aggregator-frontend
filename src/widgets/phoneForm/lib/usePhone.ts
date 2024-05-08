import { toast } from '@/shared/ui/use-toast'
import { UseFormReturn } from 'react-hook-form'

export interface PhoneFormFields {
  phoneNumber: string
}

export const usePhone = (
  form: UseFormReturn<PhoneFormFields, any, undefined>
) => {
  const normalizePhoneInput = (value: string) => {
    if (!value) return value
    const curval = value.replace(/[^\d]/g, '')

    if (curval.length === 0) return `+`

    if (curval.length === 1) return `+${curval[0]}`

    if (curval.length < 5) return `+${curval[0]} (${curval.slice(1)}`

    if (curval.length < 8)
      return `+${curval[0]} (${curval.slice(1, 4)}) ${curval.slice(4)}`

    return `+${curval[0]} (${curval.slice(1, 4)}) ${curval.slice(4, 7)}-${curval.slice(7)}`
  }

  const phoneInputRegister = form.register('phoneNumber', {
    required: 'Обязательное поле',
    pattern: {
      value: /\+\d \(\d{3}\) \d{3}-\d{4}/,
      message: 'Неверный формат телефона',
    },
    maxLength: {
      value: 17,
      message: 'Превышена длина ввода',
    },
  })

  const onSubmitPhone = ({ phoneNumber }: PhoneFormFields) => {
    toast({
      title: `Код отправлен на номер телефона ${phoneNumber}!`,
      description: 'Ожидайте код в течении 2 минут',
    })
  }

  return { normalizePhoneInput, phoneInputRegister, onSubmitPhone }
}
