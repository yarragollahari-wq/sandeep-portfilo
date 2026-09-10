'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { site, capabilities } from '@/lib/site';
import s from './ContactSection.module.css';

const SPRING = { type: 'spring', damping: 27, stiffness: 121, mass: 0.3 } as const;

const POINTS = [
  {
    title: 'Quick response.',
    text: 'You will hear back from me — not an account manager reading a script.',
  },
  {
    title: 'A look at your numbers.',
    text: 'I will tell you where I think the constraint actually is, before you commit to anything.',
  },
  {
    title: 'Clear next steps.',
    text: 'A plan, an order of work, and an honest view of what it is worth — including if the answer is not yet.',
  },
];

export default function ContactSection({ heading = 'Have a growth problem\nin mind?' }) {
  const [sent, setSent] = useState(false);

  /**
   * No backend on this site, so the form composes a real email instead.
   * A `mailto` form action with method="post" is silently dropped by most
   * browsers — building the URL by hand is the reliable route.
   */
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    const subject = `New enquiry from ${name || 'the website'}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      message || '(no message)',
      '',
      '— Sent from sandeephalemani.com',
    ].join('\n');

    window.location.href =
      `mailto:${site.people[0].email}` +
      `?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSent(true);
    window.setTimeout(() => setSent(false), 6000);
  };

  return (
    <section className={`section ${s.root}`} id="contact">
      <div className="wrap">
        <div className={s.grid}>
          {/* ---- form ---- */}
          <motion.div
            className={s.formCard}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={SPRING}
          >
            <span className="micro">{site.name}</span>
            <h2 className={s.formHeading}>
              {heading.split('\n').map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </h2>

            <form className={s.form} onSubmit={onSubmit}>
              <label className={s.field}>
                <span className="sr-only">Your name</span>
                <input type="text" name="name" placeholder="Your name*" required />
              </label>

              <label className={s.field}>
                <span className="sr-only">Email</span>
                <input type="email" name="email" placeholder="E-mail*" required />
              </label>

              <label className={`${s.field} ${s.fieldWide}`}>
                <span className="sr-only">Message</span>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="What is not working? The ads, the tracking, or the search presence."
                />
              </label>

              <button type="submit" className={`btn btn--accent ${s.submit}`}>
                {sent ? 'Opening your mail app…' : 'Send message'}
                <svg className="btn__arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M3.5 12.5L12.5 3.5M12.5 3.5H5.5M12.5 3.5V10.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <p className={s.formNote}>
                Prefer email? Write to{' '}
                <a href={`mailto:${site.people[0].email}`}>{site.people[0].email}</a> directly.
              </p>
            </form>
          </motion.div>

          {/* ---- right rail ---- */}
          <div className={s.rail}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...SPRING, delay: 0.08 }}
            >
              <h2 className={`h2 ${s.railHeading}`}>Let’s talk.</h2>
              <p className={s.railLede}>
                Tell me what is not working — the ads, the tracking behind them, or the search
                presence that never arrived. I will tell you which one I would fix first.
              </p>
            </motion.div>

            <ul className={s.points}>
              {POINTS.map((p, i) => (
                <motion.li
                  key={p.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ ...SPRING, delay: 0.12 + i * 0.06 }}
                >
                  <strong>{p.title}</strong>
                  <span>{p.text}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className={s.people}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ ...SPRING, delay: 0.28 }}
            >
              {site.people.map((p) => (
                <div key={p.name} className={s.person}>
                  <span className={s.personAvatar} aria-hidden="true">
                    {p.photo ? (
                      <img
                        className={s.personPhoto}
                        src={p.photo}
                        alt=""
                        width={512}
                        height={512}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      p.name.charAt(0)
                    )}
                  </span>
                  <span className={s.personBody}>
                    <span className={s.personName}>{p.name}</span>
                    <a href={`mailto:${p.email}`}>{p.email}</a>
                    <a href={`tel:${p.phoneHref}`}>{p.phone}</a>
                  </span>
                </div>
              ))}
            </motion.div>

            <div className={s.tags}>
              {capabilities.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
