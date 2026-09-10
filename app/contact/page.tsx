import type { Metadata } from 'next';
import ContactSection from '@/components/ContactSection';
import Reveal from '@/components/Reveal';
import FAQ from '@/components/FAQ';
import s from './contact.module.css';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Tell me what is not working — the ads, the tracking behind them, or the search presence that never arrived. I will tell you which one I would fix first.',
};

export default function ContactPage() {
  return (
    <>
      <section className={`section ${s.head}`}>
        <div className="wrap">
          <div className="eyebrow-row">
            <span className="micro">Get in touch</span>
            <span className="micro">US · UAE · India</span>
          </div>

          <Reveal>
            <h1 className="display">Let’s talk.</h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className={s.lede}>
              You will get me, not a sales team. Bring your account, your numbers, or just the
              thing that has been stuck — and I will tell you honestly whether I am the right
              person to fix it.
            </p>
          </Reveal>
        </div>
      </section>

      <ContactSection heading={'Have a growth problem\nin mind?'} />

      <section className="section section--tight">
        <div className="wrap">
          <div className="eyebrow-row">
            <span className="micro">Before you write</span>
            <span className="micro">FAQ</span>
          </div>
          <FAQ />
        </div>
      </section>
    </>
  );
}
