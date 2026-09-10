import type { Metadata } from 'next';
import { Inter, Geist } from 'next/font/google';
import { site, services } from '@/lib/site';
import SmoothScroll from '@/components/SmoothScroll';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const geist = Geist({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-geist',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    'Sandeep Halemani',
    'performance marketing specialist',
    'freelance Google Ads specialist',
    'freelance Meta Ads specialist',
    'SEO and AEO',
    'answer engine optimisation',
    'generative engine optimisation',
    'independent growth consultant',
    'PPC and SEO freelancer',
  ],
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
  // Declared here rather than via app/icon.svg: Next's metadata-route loader
  // breaks on project paths containing an apostrophe. See scripts/gen-seo.mjs.
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/icon.svg' }],
  },
};

const person = site.people[0];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: person.name,
  url: site.url,
  description: site.description,
  jobTitle: site.tagline,
  email: person.email,
  telephone: person.phone,
  knowsAbout: [
    'Performance marketing',
    'Google Ads',
    'Meta Ads',
    'Performance Max',
    'Search engine optimisation',
    'Answer engine optimisation',
    'Generative engine optimisation',
    'Conversion tracking and attribution',
  ],
  makesOffer: services.map((s) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name: s.title, description: s.blurb },
  })),
  areaServed: ['United States', 'United Arab Emirates', 'India'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${geist.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
