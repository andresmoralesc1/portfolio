import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg px-6 py-2.5 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50',
          variant === 'primary' &&
            'bg-neutral-100 text-neutral-900 hover:bg-neutral-200',
          variant === 'secondary' &&
            'border border-neutral-700 text-neutral-300 hover:bg-neutral-800/50',
          variant === 'ghost' &&
            'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/30',
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
