'use client';

import { motion } from 'motion/react';
import { process } from '@/lib/site';
import s from './Process.module.css';

const SPRING = { type: 'spring', damping: 27, stiffness: 121, mass: 0.3 } as const;

export default function Process() {
  return (
    <ol className={s.root}>
      {process.map((step, i) => (
        <motion.li
          key={step.n}
          className={s.item}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ ...SPRING, delay: i * 0.07 }}
        >
          <span className={s.n}>{step.n}</span>
          <div className={s.body}>
            <h3 className={s.title}>{step.title}</h3>
            <p className={s.text}>{step.text}</p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
