import { Button } from '@/shared/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
import { UseFormReturn } from 'react-hook-form'
import { PhoneFormFields, usePhone } from '../lib/usePhone'

interface PhoneInputFormProps {
  form: UseFormReturn<PhoneFormFields, any, undefined>
}

const PhoneInputForm: React.FC<PhoneInputFormProps> = ({ form }) => {
  const { normalizePhoneInput, phoneInputRegister, onSubmitPhone } =
    usePhone(form)

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmitPhone)}
        className="flex flex-row items-center gap-5"
      >
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Номер телефона</FormLabel>
              <FormControl>
                <Input
                  {...phoneInputRegister}
                  variant="styled"
                  styleSize="styled"
                  placeholder="+7 (943) 433-2323"
                  value={field.value}
                  onChange={(e) =>
                    field.onChange(normalizePhoneInput(e.target.value))
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          variant="purple"
          size="none"
          className={`h-12 bg-primary text-background hover:bg-primary/90 ${form.formState.errors.phoneNumber ? 'self-center' : 'self-end'} `}
          type="submit"
        >
          Отправить код
        </Button>
      </form>
    </Form>
  )
}

export default PhoneInputForm
