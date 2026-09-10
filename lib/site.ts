export const site = {
  name: 'Sandeep Halemani',
  short: 'Sandeep',
  first: 'Sandeep',
  tagline: 'Performance Marketing, SEO & AEO',
  url: 'https://sandeephalemani.com',
  description:
    'Sandeep Halemani is an independent performance marketing and search specialist for founder-led businesses — Google and Meta advertising, SEO, and answer engine optimisation. One operator who owns the number, not an agency that owns a channel.',
  people: [
    {
      name: 'Sandeep Halemani',
      role: 'Performance marketing · SEO · AEO · GEO',
      at: 'Full-stack growth marketer',
      photo: '/sandeep.jpg',
      bio: 'Runs the media, the measurement and the maths. Rebuilds tracking before rebuilding campaigns, so every dollar in the account is accountable to a number rather than an opinion — then builds the search presence that keeps returning after the ads are switched off.',
      email: 'me.sandeephalemani@gmail.com',
      phone: '+91 97431 91276',
      phoneHref: '+919743191276',
    },
  ],
};

/** Aggregate figures. Every one is sourced from the case studies in this repo. */
export const stats = [
  {
    value: 675,
    prefix: '$',
    suffix: 'K+',
    label: 'Client revenue generated',
    note: 'Tracked across live client dashboards',
  },
  {
    value: 12.15,
    prefix: '',
    suffix: 'x',
    decimals: 2,
    label: 'Peak return on ad spend',
    note: 'Paid social, single month',
  },
  {
    value: 1119,
    prefix: '',
    suffix: '',
    label: 'Leads and conversations delivered',
    note: 'Calls, callbacks and qualified threads',
  },
  {
    value: 52,
    prefix: '−',
    suffix: '%',
    label: 'Cost per purchase reduced',
    note: 'On a single e-commerce account',
  },
];

export type Service = {
  index: string;
  title: string;
  blurb: string;
  categories: string[];
};

export const services: Service[] = [
  {
    index: '001',
    title: 'Performance marketing',
    blurb:
      'Google and Meta rebuilt around purchase intent, not impressions. I start with the measurement layer so every dollar is accountable, then cut what looks busy and fund what actually returns.',
    categories: [
      'Google Ads',
      'Meta Ads',
      'Performance Max',
      'Catalogue & shopping feeds',
      'Call and lead campaigns',
      'Tracking & attribution',
      'Account recovery',
    ],
  },
  {
    index: '002',
    title: 'SEO & AEO',
    blurb:
      'Rankings are an asset you own; ads are traffic you rent. I build search presence on the competitive non-branded terms where new customers actually come from — and for the answer engines buyers now ask first.',
    categories: [
      'Technical SEO',
      'Answer engine optimisation',
      'Generative engine optimisation',
      'Product & category pages',
      'Content strategy',
      'Local search',
    ],
  },
];

export const capabilities = [
  'Performance marketing',
  'Google Ads',
  'Meta Ads',
  'Performance Max',
  'Shopping feeds',
  'Tracking & attribution',
  'SEO',
  'AEO',
  'GEO',
  'Technical SEO',
  'Content strategy',
  'Local search',
];

export const process = [
  {
    n: '01',
    title: 'I rebuild the measurement before I rebuild the campaign',
    text: 'Every engagement starts by making the numbers trustworthy. Until spend is accountable to a result, every decision after it is a guess with a budget attached.',
  },
  {
    n: '02',
    title: 'I read paid and organic as one demand engine',
    text: 'What converts in the ad account tells me what to rank for. What ranks tells me what I no longer need to rent. Run separately, they duplicate spend; run together, they compound.',
  },
  {
    n: '03',
    title: 'I report the leak as loudly as the win',
    text: 'The flattering number goes on the cover of a vendor report. The uncomfortable one is usually the number that actually grows the business, so I lead with it.',
  },
  {
    n: '04',
    title: 'I bring the next decision, not the problem',
    text: 'When something is not working I say so before I am asked — and I arrive with the replacement already designed and costed.',
  },
];

export const faqs = [
  {
    q: 'What kind of businesses do you work with?',
    a: 'Founder-led businesses where one person still feels every wasted dollar — e-commerce brands, multi-location service operators, and single-practitioner practices. I work across the United States, the UAE and India. If you have a real product and a growth ceiling you cannot explain, that is the shape of client I do my best work for.',
  },
  {
    q: 'Do you run ads or do SEO? Or both?',
    a: 'Both, and that is deliberate. Paid tells you what people actually buy; organic makes that demand cheaper to serve every month after. Most clients start with whichever one is bleeding and end up with both, because the search terms worth ranking for are almost always the ones already converting in the ad account.',
  },
  {
    q: 'Am I working with you, or with a team?',
    a: 'Me. There is no account manager, no junior running your budget, and no hand-off after the pitch. You get one person who is accountable for the number — which also means I take on a small number of clients at a time and will tell you if I am full.',
  },
  {
    q: 'Why is there no pricing on this site?',
    a: 'Because the right engagement depends on where the constraint actually is. Sometimes it is the ad account. Sometimes it is a page that has never ranked for the term that matters. I would rather look at your numbers first and propose the work that moves the needle than sell you a package.',
  },
  {
    q: 'Why are your case studies anonymised?',
    a: 'Every engagement on this site is under NDA. I publish the industry, the niche, the market, the work and the real numbers — and I leave out anything that identifies the client. If you are evaluating me, I would rather show you my reasoning and my results than trade on a logo.',
  },
  {
    q: 'How quickly will we see results?',
    a: 'It depends entirely on what is broken. Efficiency gains inside a live ad account can show within weeks. Organic and answer-engine visibility compound over months and then keep paying. Infrastructure work — a suspended account, a rebuilt tracking layer — produces nothing at all while it happens and then everything downstream of it. I will tell you which one you are buying before you buy it.',
  },
  {
    q: 'How do we start?',
    a: 'A conversation and a look at your accounts. I will tell you what I would do, in what order, and what I think it is worth — including if the honest answer is that you do not need me yet.',
  },
];
