'use client'
import { UseFormReturn } from 'react-hook-form'
import { OTPFormFields, useOTP } from '../lib/useOTP'
import { Button } from '@/shared/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/shared/ui/input-otp'
import { REGEXP_ONLY_DIGITS } from 'input-otp'

interface OTPInputFormProps {
  form: UseFormReturn<OTPFormFields, any, undefined>
}

const OTPInputForm: React.FC<OTPInputFormProps> = ({ form }) => {
  const { onSubmitOTP } = useOTP()
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmitOTP)}
        className="flex items-end gap-5"
      >
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Код из СМС</FormLabel>
              <FormControl>
                <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} className="first:rounded-none" />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} className="last:rounded-none" />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} className="first:rounded-none" />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} className="last:rounded-none" />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          variant="purple"
          size="none"
          className="h-12 bg-primary text-background hover:bg-primary/90"
          type="submit"
        >
          Отправить код
        </Button>
      </form>
    </Form>
  )
}

export default OTPInputForm
