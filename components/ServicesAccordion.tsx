'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { services } from '@/lib/site';
import s from './ServicesAccordion.module.css';

const SPRING = { type: 'spring', damping: 27, stiffness: 121, mass: 0.3 } as const;

export default function ServicesAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className={s.root}>
      {services.map((service, i) => {
        const isOpen = open === i;
        return (
          <motion.div
            key={service.index}
            className={s.item}
            data-open={isOpen}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...SPRING, delay: i * 0.06 }}
          >
            <h3 className={s.headingWrap}>
              <button
                className={s.head}
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                aria-controls={`svc-${service.index}`}
              >
                <span className={s.idx}>({service.index})</span>
                <span className={s.title}>{service.title}</span>
                <span className={s.plus} aria-hidden="true">
                  <span />
                  <span data-open={isOpen} />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`svc-${service.index}`}
                  className={s.panelOuter}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.44, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className={s.panel}>
                    <p className={s.blurb}>{service.blurb}</p>

                    <div className={s.cats}>
                      <span className="micro">Includes</span>
                      <ul>
                        {service.categories.map((c, ci) => (
                          <motion.li
                            key={c}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ...SPRING, delay: 0.08 + ci * 0.035 }}
                          >
                            {c}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
