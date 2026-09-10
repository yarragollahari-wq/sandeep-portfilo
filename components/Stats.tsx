'use client';

import { motion } from 'motion/react';
import { stats } from '@/lib/site';
import Counter from './Counter';
import s from './Stats.module.css';

const SPRING = { type: 'spring', damping: 27, stiffness: 121, mass: 0.3 } as const;

export default function Stats() {
  return (
    <div className={s.grid}>
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          className={s.cell}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...SPRING, delay: i * 0.08 }}
        >
          <span className={s.idx}>{String(i + 1).padStart(2, '0')}</span>
          <span className={s.value}>
            <Counter
              value={stat.value}
              decimals={stat.decimals ?? 0}
              prefix={stat.prefix}
              suffix={stat.suffix}
            />
          </span>
          <span className={s.label}>{stat.label}</span>
          <span className={s.note}>{stat.note}</span>
        </motion.div>
      ))}
    </div>
  );
}
