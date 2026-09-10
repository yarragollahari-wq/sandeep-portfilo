'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import s from './Preloader.module.css';

const LETTERS = [
  ...'Sandeep Halemani'.split(''),
  '*',
];

/**
 * Letter-by-letter mark, then the curtain lifts. Mirrors the reference
 * theme's opening: staggered characters on a spring, ~1.8s total.
 */
export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDone(true);
      return;
    }
    document.body.classList.add('is-locked');
    const t = setTimeout(() => setDone(true), 1750);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (done) document.body.classList.remove('is-locked');
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className={s.root}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className={s.mark} aria-label="Sandeep Halemani">
            {LETTERS.map((ch, i) => (
              <motion.span
                key={i}
                className={ch === '*' ? s.reg : undefined}
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  damping: 27,
                  stiffness: 121,
                  mass: 0.3,
                  delay: 0.1 + i * 0.055,
                }}
              >
                {ch === ' ' ? '\u00A0' : ch}
              </motion.span>
            ))}
          </div>

          <motion.div
            className={s.bar}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: [0.56, 0.22, 0.05, 0.99] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
