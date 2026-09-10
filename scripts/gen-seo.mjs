/**
 * Generates public/robots.txt and public/sitemap.xml from lib/*.
 *
 * These are normally app/robots.ts + app/sitemap.ts, but Next's
 * metadata-route loader interpolates the project path into a single-quoted
 * JS string without escaping — which breaks on any path containing an
 * apostrophe (this project sits under "Personal Project's"). Generating the
 * files at build time avoids the loader entirely and is equivalent output.
 */
import { writeFileSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => readFileSync(resolve(root, p), 'utf8');

const url = read('lib/site.ts').match(/url:\s*'([^']+)'/)[1];
const slugs = [...read('lib/case-studies.ts').matchAll(/^\s*slug:\s*'([^']+)'/gm)].map((m) => m[1]);

const today = new Date().toISOString().slice(0, 10);
const pages = [
  { loc: url, priority: '1.0', freq: 'monthly' },
  { loc: `${url}/work`, priority: '0.9', freq: 'monthly' },
  { loc: `${url}/contact`, priority: '0.7', freq: 'yearly' },
  ...slugs.map((s) => ({ loc: `${url}/work/${s}`, priority: '0.8', freq: 'yearly' })),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) =>
      `  <url>\n    <loc>${p.loc}</loc>\n    <lastmod>${today}</lastmod>\n` +
      `    <changefreq>${p.freq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`
  )
  .join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${url}/sitemap.xml
`;

mkdirSync(resolve(root, 'public'), { recursive: true });
writeFileSync(resolve(root, 'public/sitemap.xml'), sitemap);
writeFileSync(resolve(root, 'public/robots.txt'), robots);
console.log(`✓ sitemap.xml (${pages.length} urls) + robots.txt`);
