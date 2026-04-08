import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export const Badge = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium bg-neutral-800 text-neutral-400',
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';
