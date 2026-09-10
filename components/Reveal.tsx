'use client';

import { motion, type HTMLMotionProps } from 'motion/react';
import type { ElementType } from 'react';

/**
 * The reference theme's entrance: opacity 0 + translateY(10px), released on a
 * spring (damping 27 / stiffness 121 / mass 0.3), staggered by index.
 */
export const SPRING = { type: 'spring', damping: 27, stiffness: 121, mass: 0.3 } as const;

type RevealProps = HTMLMotionProps<'div'> & {
  as?: ElementType;
  delay?: number;
  y?: number;
  once?: boolean;
  amount?: number;
};

export default function Reveal({
  as = 'div',
  delay = 0,
  y = 10,
  once = true,
  amount = 0.25,
  children,
  ...rest
}: RevealProps) {
  const Comp = motion[as as 'div'] ?? motion.div;

  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ ...SPRING, delay }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
