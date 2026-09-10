'use client';

import { motion } from 'motion/react';
import { site } from '@/lib/site';
import s from './Team.module.css';

const SPRING = { type: 'spring', damping: 27, stiffness: 121, mass: 0.3 } as const;

export default function Team() {
  return (
    <div className={s.grid}>
      {site.people.map((p, i) => (
        <motion.article
          key={p.name}
          className={s.card}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...SPRING, delay: i * 0.08 }}
        >
          <div className={s.portrait}>
            {p.photo ? (
              <img
                className={s.photo}
                src={p.photo}
                alt={`Portrait of ${p.name}`}
                width={512}
                height={512}
                loading="lazy"
                decoding="async"
              />
            ) : (
              <span className={s.initial} aria-hidden="true">
                {p.name.charAt(0)}
              </span>
            )}
          </div>

          <div className={s.body}>
            <span className="micro">
              {p.at} · {p.role}
            </span>
            <h3 className={s.name}>{p.name}</h3>
            <p className={s.bio}>{p.bio}</p>
          </div>

          <div className={s.contact}>
            <span className="micro">Get in touch</span>
            <a href={`mailto:${p.email}`}>{p.email}</a>
            <a href={`tel:${p.phoneHref}`}>{p.phone}</a>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
