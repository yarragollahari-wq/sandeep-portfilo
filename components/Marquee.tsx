'use client';

import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  duration?: number;
  gap?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
  edgeToEdge?: boolean;
  className?: string;
};

/** Seamless CSS marquee — two identical tracks, translated -100%. */
export default function Marquee({
  children,
  duration = 32,
  gap = 48,
  reverse = false,
  pauseOnHover = false,
  edgeToEdge = false,
  className = '',
}: Props) {
  const style = {
    '--marquee-duration': `${duration}s`,
    '--marquee-gap': `${gap}px`,
    '--marquee-hover': pauseOnHover ? 'paused' : 'running',
  } as React.CSSProperties;

  return (
    <div
      className={`marquee ${edgeToEdge ? 'marquee--edge' : ''} ${className}`}
      data-reverse={reverse}
      style={style}
      aria-hidden={false}
    >
      <div className="marquee__track">{children}</div>
      <div className="marquee__track" aria-hidden="true">
        {children}
      </div>
    </div>
  );
}
