'use client';

import { cn } from '@/lib/utils';

interface MarqueeProps {
  className?: string;
  children: React.ReactNode;
  pauseOnHover?: boolean;
  direction?: 'left' | 'right' | 'up' | 'down';
  speed?: 'slow' | 'normal' | 'fast';
}

export function Marquee({
  className,
  children,
  pauseOnHover = true,
  direction = 'left',
  speed = 'normal',
}: MarqueeProps) {
  const speedMap = {
    slow: '40s',
    normal: '20s',
    fast: '10s',
  };

  return (
    <div
      className={cn(
        'group flex overflow-hidden [--gap:1rem] [--duration:20s]',
        className
      )}
      style={{
        '--duration': speedMap[speed],
      } as React.CSSProperties}
    >
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className={cn(
            'flex shrink-0 justify-around [gap:var(--gap)]',
            {
              'animate-marquee': direction === 'left',
              'animate-marquee-reverse': direction === 'right',
              'animate-marquee-vertical': direction === 'up',
              'animate-marquee-vertical-reverse': direction === 'down',
            },
            pauseOnHover && 'group-hover:[animation-play-state:paused]'
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
