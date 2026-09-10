import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Reveal from '@/components/Reveal';
import ContactSection from '@/components/ContactSection';
import { caseStudies, getCaseStudy } from '@/lib/case-studies';
import s from './case.module.css';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: 'Case study not found' };

  return {
    title: `${study.title} — ${study.industry}`,
    description: study.summary,
    openGraph: { title: study.title, description: study.summary },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const idx = caseStudies.findIndex((c) => c.slug === slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <>
      {/* ================= HERO ================= */}
      <section className={`section ${s.hero}`}>
        <div className="wrap">
          <Reveal className={s.breadcrumb}>
            <Link href="/work">← All case studies</Link>
            <span className="micro">{study.index}</span>
          </Reveal>

          <div className={s.heroMeta}>
            <span className="micro micro--accent">{study.industry}</span>
            <span className="micro">{study.niche}</span>
            <span className="micro">{study.market}</span>
          </div>

          <Reveal delay={0.05}>
            <h1 className="h1">{study.title}</h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className={s.subtitle}>{study.subtitle}</p>
          </Reveal>

          <Reveal delay={0.16} className={s.metrics}>
            {study.metrics.map((m) => (
              <div key={m.label} className={s.metric}>
                <span className={s.metricValue}>{m.value}</span>
                <span className={s.metricLabel}>{m.label}</span>
                {m.note && <span className={s.metricNote}>{m.note}</span>}
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.2} className={s.facts}>
            <Fact label="Engagement" value={study.duration} />
            <Fact label="Period" value={study.year} />
            <Fact
              label="Scope"
              value={study.services.join(' · ')}
              wide
            />
          </Reveal>
        </div>
      </section>

      {/* ================= SUMMARY ================= */}
      <section className={`section section--tight ${s.summaryBand}`}>
        <div className="wrap">
          <div className={s.summaryGrid}>
            <span className="micro">The short version</span>
            <Reveal>
              <p className={s.summary}>{study.summary}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= CHAPTERS ================= */}
      <article className="section">
        <div className="wrap">
          {study.chapters.map((ch, i) => (
            <section key={ch.title} className={s.chapter}>
              <div className={s.chapterHead}>
                <span className="micro micro--accent">{ch.kicker}</span>
                <span className={s.chapterNum}>
                  {String(i + 1).padStart(2, '0')} / {String(study.chapters.length).padStart(2, '0')}
                </span>
              </div>

              <div className={s.chapterBody}>
                <Reveal>
                  <h2 className="h3">{ch.title}</h2>
                </Reveal>

                <div className={s.prose}>
                  {ch.body.map((p, pi) => (
                    <Reveal key={pi} delay={0.04 * pi}>
                      <p>{p}</p>
                    </Reveal>
                  ))}
                </div>

                {ch.points && (
                  <ul className={s.points}>
                    {ch.points.map((pt, pi) => (
                      <Reveal as="li" key={pt.label} delay={0.05 * pi}>
                        <strong>{pt.label}</strong>
                        <span>{pt.text}</span>
                      </Reveal>
                    ))}
                  </ul>
                )}

                {ch.table && (
                  <Reveal delay={0.06} className={s.tableBlock}>
                    <h3 className={s.tableTitle}>{ch.table.title}</h3>
                    <div className={s.tableScroll}>
                      <table className={s.table}>
                        <thead>
                          <tr>
                            {ch.table.head.map((h) => (
                              <th key={h} scope="col">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {ch.table.rows.map((row, ri) => (
                            <tr
                              key={ri}
                              data-total={
                                row[0].startsWith('All') || row[0] === 'Combined' ? 'true' : undefined
                              }
                            >
                              {row.map((cell, ci) => (
                                <td key={ci} data-num={ci > 0 ? 'true' : undefined}>
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {ch.table.note && <p className={s.tableNote}>{ch.table.note}</p>}
                  </Reveal>
                )}

                {ch.pull && (
                  <Reveal delay={0.06}>
                    <blockquote className={s.pull}>{ch.pull}</blockquote>
                  </Reveal>
                )}
              </div>
            </section>
          ))}
        </div>
      </article>

      {/* ================= WHAT IT PROVES ================= */}
      <section className="section section--light">
        <div className="wrap">
          <div className="eyebrow-row">
            <span className="micro">What this engagement proves</span>
            <span className="micro">({String(study.proves.length).padStart(2, '0')})</span>
          </div>

          <ol className={s.proves}>
            {study.proves.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.07}>
                <span className={s.provesNum}>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className={s.provesTitle}>{p.title}</h3>
                  <p className={s.provesText}>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.2}>
            <p className={s.closing}>{study.closing}</p>
          </Reveal>
        </div>
      </section>

      {/* ================= NEXT ================= */}
      <section className={`section section--tight ${s.nextBand}`}>
        <div className="wrap">
          <span className="micro">Next case study</span>
          <Link href={`/work/${next.slug}`} className={s.next}>
            <span className={s.nextTitle}>{next.title}.</span>
            <span className={s.nextMeta}>
              {next.industry} · {next.market}
            </span>
            <span className={s.nextArrow} aria-hidden="true">
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
        </div>
      </section>

      <ContactSection heading={'Recognise any\nof this?'} />
    </>
  );
}

function Fact({ label, value, wide }: { label: string; value: string; wide?: boolean }) {
  return (
    <div className={s.fact} data-wide={wide}>
      <span className="micro">{label}</span>
      <span className={s.factValue}>{value}</span>
    </div>
  );
}
