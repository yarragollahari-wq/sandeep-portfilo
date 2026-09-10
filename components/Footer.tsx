import Link from 'next/link';
import { site, capabilities } from '@/lib/site';
import { caseStudies } from '@/lib/case-studies';
import Marquee from './Marquee';
import s from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={s.root}>
      {/* Big scrolling wordmark, as in the reference theme's footer */}
      <div className={s.band}>
        <Marquee duration={38} gap={0} edgeToEdge pauseOnHover>
          <span className={s.bandItem}>
            Performance marketing
            <span className={s.bandDot} aria-hidden="true" />
            SEO &amp; AEO
            <span className={s.bandDot} aria-hidden="true" />
          </span>
        </Marquee>
      </div>

      <div className="wrap">
        <div className={s.top}>
          <div className={s.brandCol}>
            <Link href="/" className={s.logo}>
              <span>{site.name}</span>
            </Link>
            <p className={s.blurb}>
              An independent performance marketing and search specialist for founder-led
              businesses. I take the demand engine — and I own the result.
            </p>
            <div className={s.markets}>
              <span>United States</span>
              <span>United Arab Emirates</span>
              <span>India</span>
            </div>
          </div>

          <nav className={s.col} aria-label="Footer navigation">
            <span className="micro">Navigation</span>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/work">Work</Link>
              </li>
              <li>
                <Link href="/#services">Services</Link>
              </li>
              <li>
                <Link href="/#about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <nav className={s.col} aria-label="Case studies">
            <span className="micro">Case studies</span>
            <ul>
              {caseStudies.map((c) => (
                <li key={c.slug}>
                  <Link href={`/work/${c.slug}`}>{c.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={s.col}>
            <span className="micro">Get in touch</span>
            <ul>
              {site.people.map((p) => (
                <li key={p.name} className={s.contactItem}>
                  <span className={s.contactName}>{p.name}</span>
                  <a href={`mailto:${p.email}`}>{p.email}</a>
                  <a href={`tel:${p.phoneHref}`}>{p.phone}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={s.tags}>
          {capabilities.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>

        <div className={s.bottom}>
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className={s.nda}>
            All client work shown is published under NDA — industry and results only, no names.
          </p>
        </div>
      </div>
    </footer>
  );
}
