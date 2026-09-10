import Link from 'next/link';
import Preloader from '@/components/Preloader';
import Hero from '@/components/Hero';
import WorkList from '@/components/WorkList';
import Stats from '@/components/Stats';
import ServicesAccordion from '@/components/ServicesAccordion';
import Process from '@/components/Process';
import WordReveal from '@/components/WordReveal';
import Team from '@/components/Team';
import FAQ from '@/components/FAQ';
import ContactSection from '@/components/ContactSection';
import Reveal from '@/components/Reveal';
import Marquee from '@/components/Marquee';
import { caseStudies } from '@/lib/case-studies';
import { site } from '@/lib/site';
import s from './page.module.css';

export default function Home() {
  return (
    <>
      <Preloader />
      <Hero />

      {/* ================= WORK ================= */}
      <section className="section" id="work">
        <div className="wrap">
          <div className="eyebrow-row">
            <span className="micro">Selected work</span>
            <span className="micro">({String(caseStudies.length).padStart(2, '0')})</span>
          </div>

          <Reveal className={s.sectionHead}>
            <h2 className="h1">
              Case studies.
              <span className={s.headSup}>©{new Date().getFullYear()}</span>
            </h2>
            <p className="lede">
              Four engagements, all under NDA. I publish the industry, the market, the work and the
              real numbers — and I leave out anything that identifies the client.
            </p>
          </Reveal>

          <WorkList items={caseStudies} />

          <Reveal delay={0.1} className={s.workFoot}>
            <Link href="/work" className="btn btn--ghost">
              All case studies
              <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ================= MARQUEE CTA ================= */}
      <div className={s.ctaBand}>
        <Marquee duration={30} gap={0} edgeToEdge pauseOnHover>
          <Link href="/contact" className={s.ctaItem}>
            Your growth starts with a conversation
            <span className={s.ctaDot} aria-hidden="true" />
            Let’s talk
            <span className={s.ctaDot} aria-hidden="true" />
          </Link>
        </Marquee>
      </div>

      {/* ================= STATS ================= */}
      <section className="section" id="results">
        <div className="wrap">
          <div className="eyebrow-row">
            <span className="micro">Why work with me</span>
            <span className="micro">Results, not reporting</span>
          </div>

          <Reveal className={s.sectionHead}>
            <h2 className="h2" style={{ maxWidth: '18ch' }}>
              No fluff. Just the numbers the account actually produced.
            </h2>
            <p className="lede">
              Every figure below is taken from a live client dashboard. Nothing is modelled,
              rounded up, or borrowed from a case study I did not run.
            </p>
          </Reveal>

          <Stats />
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="section" id="services">
        <div className="wrap">
          <div className="eyebrow-row">
            <span className="micro">What I do</span>
            <span className="micro">(02)</span>
          </div>

          <Reveal className={s.sectionHead}>
            <h2 className="h1">Services.</h2>
            <p className="lede">
              Two disciplines, one operator. Most clients arrive for one and end up with both —
              because the terms worth ranking for are usually the ones already converting in the
              ad account.
            </p>
          </Reveal>

          <ServicesAccordion />
        </div>
      </section>

      {/* ================= APPROACH (light) ================= */}
      <section className="section section--light" id="approach">
        <div className="wrap">
          <div className="eyebrow-row">
            <span className="micro">How I work</span>
            <span className="micro">{site.name}®</span>
          </div>

          <div className={s.approachGrid}>
            <Reveal>
              <h2 className="h2" style={{ maxWidth: '14ch' }}>
                Not an agency. One operator who owns the number.
              </h2>
            </Reveal>

            <Reveal delay={0.08} className={s.approachBody}>
              <p className={s.approachLede}>
                Most agencies are hired to run one channel. They optimise it, send a report, and
                stay in their lane. I take ownership of the business result, the same way someone
                with skin in the game would.
              </p>
              <p className={s.approachLede}>
                In the work on this site, the highest-value thing I did was often outside a media
                scope entirely — recovering a suspended ad account, rebuilding a merchant feed,
                running a seventeen-day platform dispute, or moving a transaction that could never
                exist on a website into a conversation instead.
              </p>
            </Reveal>
          </div>

          <div className={s.processWrap}>
            <Process />
          </div>
        </div>
      </section>

      {/* ================= MANIFESTO ================= */}
      <section className={`section ${s.manifesto}`}>
        <div className="wrap">
          <div className={s.manifestoGrid}>
            <div className={s.manifestoLeft}>
              <span className="micro micro--accent">My approach is simple</span>
            </div>
            <WordReveal text="A specialist does not just optimise your ads. A specialist is the direct reason your business grows." />
          </div>

          <Reveal delay={0.1} className={s.manifestoFoot}>
            <p className="body" style={{ maxWidth: '58ch' }}>
              I do not overpromise or hide behind flashy language. Every decision in every account
              on this site came from a number telling me what to do next — and when the number said
              I was wrong, I said so first.
            </p>
            <Link href="/contact" className="btn">
              Start a conversation
              <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="section" id="about">
        <div className="wrap">
          <div className="eyebrow-row">
            <span className="micro">About</span>
            <span className="micro">(01)</span>
          </div>

          <Reveal className={s.sectionHead}>
            <h2 className="h1">
              Who you actually
              <br />
              work with.
            </h2>
            <p className="lede">
              No account managers, no hand-offs, no junior running your budget. You talk to the
              person doing the work, every time.
            </p>
          </Reveal>

          <Team />
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="section section--tight" id="faq">
        <div className="wrap">
          <div className="eyebrow-row">
            <span className="micro">FAQ</span>
            <span className="micro">Straight answers</span>
          </div>

          <div className={s.faqGrid}>
            <Reveal>
              <h2 className="h2">FAQ.</h2>
              <p className="lede" style={{ marginTop: 14, maxWidth: '32ch' }}>
                Everything worth knowing before you get in touch.
              </p>
            </Reveal>
            <div>
              <FAQ />
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}

function Arrow() {
  return (
    <svg className="btn__arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3.5 12.5L12.5 3.5M12.5 3.5H5.5M12.5 3.5V10.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
