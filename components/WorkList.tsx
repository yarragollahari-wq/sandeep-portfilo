'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'motion/react';
import type { CaseStudy } from '@/lib/case-studies';
import s from './WorkList.module.css';

const SPRING = { type: 'spring', damping: 27, stiffness: 121, mass: 0.3 } as const;

/**
 * Hover-reveal project rows. The reference theme floats a client screenshot
 * under the cursor; ours are under NDA, so the float carries the headline
 * metric instead — which reads better for outbound anyway.
 */
export default function WorkList({ items }: { items: CaseStudy[] }) {
  const [active, setActive] = useState<number | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { damping: 24, stiffness: 180, mass: 0.4 });
  const y = useSpring(my, { damping: 24, stiffness: 180, mass: 0.4 });

  const onMove = (e: React.MouseEvent) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  return (
    <div ref={wrapRef} className={s.root} onMouseMove={onMove}>
      <ul className={s.list}>
        {items.map((item, i) => (
          <motion.li
            key={item.slug}
            className={s.item}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...SPRING, delay: i * 0.06 }}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            data-dim={active !== null && active !== i}
          >
            <Link href={`/work/${item.slug}`} className={s.row}>
              <span className={s.index}>{item.index}</span>

              <span className={s.main}>
                <span className={s.title}>{item.title}.</span>
                <span className={s.meta}>
                  <span>{item.industry}</span>
                  <span className={s.metaDot} aria-hidden="true" />
                  <span>{item.market}</span>
                </span>
              </span>

              <span className={s.metric}>
                <span className={s.metricValue}>{item.cardMetric.value}</span>
                <span className={s.metricLabel}>{item.cardMetric.label}</span>
              </span>

              <span className={s.year}>{item.year}</span>

              <span className={s.go} aria-hidden="true">
                <svg viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3.5 12.5L12.5 3.5M12.5 3.5H5.5M12.5 3.5V10.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </motion.li>
        ))}
      </ul>

      <motion.div className={s.float} style={{ x, y }} aria-hidden="true">
        <AnimatePresence>
          {active !== null && (
            <motion.div
              key={active}
              className={s.floatCard}
              initial={{ opacity: 0, scale: 0.92, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ ...SPRING, delay: 0 }}
            >
              <span className={s.floatKicker}>{items[active].niche}</span>
              <span className={s.floatValue}>{items[active].cardMetric.value}</span>
              <span className={s.floatLabel}>{items[active].cardMetric.label}</span>
              <span className={s.floatServices}>
                {items[active].services.slice(0, 3).join(' · ')}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
