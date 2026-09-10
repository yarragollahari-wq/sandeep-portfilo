import type { Metadata } from 'next';
import WorkList from '@/components/WorkList';
import Reveal from '@/components/Reveal';
import Stats from '@/components/Stats';
import ContactSection from '@/components/ContactSection';
import { caseStudies } from '@/lib/case-studies';
import s from './work.module.css';

export const metadata: Metadata = {
  title: 'Case studies',
  description:
    'Four performance marketing and search engagements under NDA — e-commerce, multi-location services and solo practice. Industry, market, the work and the real numbers.',
};

export default function WorkIndex() {
  return (
    <>
      <section className={`section ${s.head}`}>
        <div className="wrap">
          <div className="eyebrow-row">
            <span className="micro">Selected work</span>
            <span className="micro">
              ({String(caseStudies.length).padStart(2, '0')}) · Under NDA
            </span>
          </div>

          <Reveal>
            <h1 className="display">Case studies.</h1>
          </Reveal>

          <Reveal delay={0.08} className={s.intro}>
            <p className="lede">
              Every engagement here is under NDA, so no client is named and no site is linked. What
              is published is the industry, the niche, the market, the decisions I made and the
              numbers the accounts actually produced — including the ones that are not flattering.
            </p>
            <div className={s.introMeta}>
              <span>
                <strong>4</strong> engagements
              </span>
              <span>
                <strong>3</strong> markets
              </span>
              <span>
                <strong>2</strong> continents
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <WorkList items={caseStudies} />
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <div className="eyebrow-row">
            <span className="micro">Across the book</span>
            <span className="micro">Live dashboard figures</span>
          </div>
          <Stats />
        </div>
      </section>

      <ContactSection heading={'Want the same\nfor your account?'} />
    </>
  );
}
