import * as React from 'react'

import { cn } from '@/shared/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'

const inputVariants = cva(
  'flex w-full border border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: '',
        styled: 'bg-element/30 placeholder:text-white/40',
      },
      styleSize: {
        default: 'h-10 rounded-md px-3 py-2 text-sm',
        styled: 'h-[60px] rounded-none px-3 py-3 text-xxs',
        none: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      styleSize: 'default',
    },
  }
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
  VariantProps<typeof inputVariants> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, styleSize, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, styleSize, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
