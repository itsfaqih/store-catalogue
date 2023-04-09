import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/libs/cn';

export const buttonVariant = cva(
  'px-3 py-1.5 text-sm font-medium border rounded-lg transition-colors',
  {
    variants: {
      intent: {
        default:
          'bg-white text-slate-800 border-slate-200 hover:bg-slate-50 shadow-slate-200 shadow-sm',
        cta: 'text-white bg-blue-600 border-blue-700 hover:bg-blue-700 shadow-blue-200 shadow-sm',
        ghost: 'text-slate-800 border-transparent hover:bg-slate-100',
      },
    },
    defaultVariants: {
      intent: 'default',
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariant>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ intent, className, ...props }, ref) => {
    return (
      <button ref={ref} className={cn(buttonVariant({ intent }), className)} {...props}></button>
    );
  },
);

Button.displayName = 'Button';
