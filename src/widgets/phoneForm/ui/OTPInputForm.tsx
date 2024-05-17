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
import { Check } from 'lucide-react'

interface OTPInputFormProps {
  form: UseFormReturn<OTPFormFields, any, undefined>
}

const OTPInputForm: React.FC<OTPInputFormProps> = ({ form }) => {
  const { onSubmitOTP } = useOTP(form)
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmitOTP)}
        className="flex flex-col items-center justify-center gap-5 sm:flex-row"
      >
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Код из СМС</FormLabel>
              <FormControl>
                <InputOTP
                  disabled={form.formState.isSubmitSuccessful}
                  maxLength={6}
                  pattern={REGEXP_ONLY_DIGITS}
                  {...field}
                >
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
        <div
          className={`flex items-center gap-5 ${form.formState.errors.otp ? 'sm:self-center' : 'sm:self-end'}`}
        >
          <Button
            variant="purple"
            size="none"
            className="h-12 bg-primary text-background hover:bg-primary/90"
            type="submit"
            disabled={form.formState.isSubmitSuccessful}
          >
            Подтвердить
          </Button>
          {form.formState.isSubmitSuccessful && <Check />}
        </div>
      </form>
    </Form>
  )
}

export default OTPInputForm
