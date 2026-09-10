'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
import { site } from '@/lib/site';
import { caseStudies } from '@/lib/case-studies';
import s from './Nav.module.css';

const links = [
  { href: '/', label: 'Home' },
  { href: '/#services', label: 'Services' },
  { href: '/work', label: 'Work', count: caseStudies.length },
  { href: '/#about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.classList.toggle('is-locked', open);
    return () => document.body.classList.remove('is-locked');
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header className={`${s.header} ${scrolled ? s.scrolled : ''}`}>
        <div className={s.inner}>
          <Link href="/" className={s.logo} aria-label={`${site.name} — home`}>
            <img
              className={s.logoPhoto}
              src={site.people[0].photo}
              alt=""
              width={512}
              height={512}
              decoding="async"
            />
          </Link>

          <nav className={s.links} aria-label="Primary">
            {links.map((l) => (
              <Link key={l.label} href={l.href} className={s.link}>
                {l.label}
                {l.count ? <sup className={s.count}>{l.count}</sup> : null}
              </Link>
            ))}
          </nav>

          <div className={s.right}>
            <Link href="/contact" className={`btn btn--accent ${s.cta}`}>
              Let’s talk
            </Link>
            <button
              className={s.burger}
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              <span data-open={open} />
              <span data-open={open} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className={s.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.44, 0, 0.56, 1] }}
          >
            <div className={s.overlayInner}>
              <ul className={s.overlayLinks}>
                {links.map((l, i) => (
                  <motion.li
                    key={l.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{
                      type: 'spring',
                      damping: 27,
                      stiffness: 121,
                      mass: 0.3,
                      delay: 0.05 + i * 0.05,
                    }}
                  >
                    <Link href={l.href} onClick={() => setOpen(false)}>
                      {l.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className={s.overlayFoot}>
                {site.people.map((p) => (
                  <div key={p.name} className={s.overlayContact}>
                    <span className="micro">{p.name}</span>
                    <a href={`mailto:${p.email}`}>{p.email}</a>
                    <a href={`tel:${p.phoneHref}`}>{p.phone}</a>
                  </div>
                ))}
                <p className={s.overlayCopy}>
                  © {new Date().getFullYear()} {site.name}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
