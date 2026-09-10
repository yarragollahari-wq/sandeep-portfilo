'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react';
import s from './WordReveal.module.css';

/**
 * Scroll-linked word-by-word brightening — the reference theme's manifesto
 * block. Each word interpolates its own opacity across the scroll range.
 */
export default function WordReveal({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.82', 'end 0.45'],
  });

  const words = text.split(' ');

  return (
    <p ref={ref} className={s.root}>
      {words.map((word, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {word}
        </Word>
      ))}
    </p>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.16, 1]);

  return (
    <span className={s.word}>
      <span className={s.ghost} aria-hidden="true">
        {children}
      </span>
      <motion.span className={s.live} style={{ opacity }}>
        {children}
      </motion.span>
    </span>
  );
}
