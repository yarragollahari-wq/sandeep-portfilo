'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { faqs } from '@/lib/site';
import s from './FAQ.module.css';

const SPRING = { type: 'spring', damping: 27, stiffness: 121, mass: 0.3 } as const;

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={s.root}>
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <motion.div
            key={faq.q}
            className={s.item}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ ...SPRING, delay: i * 0.05 }}
          >
            <h3 className={s.headWrap}>
              <button
                className={s.head}
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
              >
                <span className={s.q}>{faq.q}</span>
                <span className={s.plus} aria-hidden="true">
                  <span />
                  <span data-open={isOpen} />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-${i}`}
                  className={s.panelOuter}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className={s.a}>{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
