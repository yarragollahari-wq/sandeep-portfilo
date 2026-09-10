/**
 * CASE STUDY CONTENT — NDA-SAFE
 * ---------------------------------------------------------------------------
 * Every engagement below is under NDA. This file is the single place client
 * content lives, so it can be audited in one pass.
 *
 * PERMITTED:  industry, niche, market/city, our work, our decisions, metrics.
 * FORBIDDEN:  client company names, trade names, brand names, practitioner or
 *             staff names, domains, URLs, individual location/branch names,
 *             exact keyword lists, third-party vendor names, review platforms.
 *
 * If you add a case study, keep to that rule.
 */

export type Metric = { value: string; label: string; note?: string };
export type TableBlock = { title: string; note?: string; head: string[]; rows: string[][] };
export type Chapter = {
  kicker: string;
  title: string;
  body: string[];
  points?: { label: string; text: string }[];
  table?: TableBlock;
  pull?: string;
};

export type CaseStudy = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  industry: string;
  niche: string;
  market: string;
  year: string;
  duration: string;
  services: string[];
  summary: string;
  cardMetric: Metric;
  metrics: Metric[];
  chapters: Chapter[];
  proves: { title: string; text: string }[];
  closing: string;
  accent: string;
};

export const caseStudies: CaseStudy[] = [
  /* ======================================================================
     01 — AFTERMARKET MOTORCYCLE PARTS · E-COMMERCE · UNITED STATES
     ====================================================================== */
  {
    slug: 'motorcycle-parts-ecommerce',
    index: '001',
    title: 'From invisible to sales machine',
    subtitle:
      'A full year of revenue in six months — on the same ad budget the brand started with.',
    industry: 'Aftermarket Motorcycle Parts',
    niche: 'Direct-to-consumer e-commerce',
    market: 'United States',
    year: '2024—2026',
    duration: '20 months, ongoing',
    services: [
      'Google Ads',
      'Meta Ads',
      'SEO & AEO',
      'Custom Shopify development',
      'Retention marketing',
      'Tracking & data',
    ],
    summary:
      'A premium parts manufacturer stuck at $50K a month with a cult following and no visibility. We rebuilt the advertising, the organic search presence and the storefront itself — and the business generated a full year of revenue in half the time, without raising ad spend.',
    cardMetric: { value: '$628K', label: 'Revenue in 20 months' },
    metrics: [
      { value: '$628K', label: 'Revenue generated', note: 'across the engagement to date' },
      { value: '12.15x', label: 'Peak return on ad spend', note: 'paid social' },
      { value: '6 months', label: 'To match a full year', note: 'of prior revenue' },
      { value: '$0.53', label: 'Average cost per click', note: 'on competitive terms' },
    ],
    chapters: [
      {
        kicker: 'The situation',
        title: 'Stuck at $50K a month — and invisible to the people ready to buy',
        body: [
          'The brand builds premium aftermarket components for a major American motorcycle platform, with serious engineering behind every part and an almost cult-like following among riders. Revenue had been flat around $50,000 a month for a long time. The product was not the problem.',
          'Thousands of riders were searching for exactly what this brand sold every single day, and the brand was invisible to nearly all of them. When we audited the account, three things were quietly holding everything back.',
        ],
        points: [
          {
            label: 'Scattered advertising',
            text: 'Budget was spread thin across campaigns, with a large share of spend reaching people who were never going to buy.',
          },
          {
            label: 'A heavy, slow storefront',
            text: 'The store was not built to handle real traffic or make buying effortless — and four out of five visitors were on phones.',
          },
          {
            label: 'No lasting free traffic',
            text: 'Almost every sale had to be rented through ads. The moment spend paused, sales would stop.',
          },
        ],
        pull: 'We did not just run ads. We rebuilt the entire way this brand makes money online — the advertising, the free traffic, and the storefront itself.',
      },
      {
        kicker: 'The approach',
        title: 'We rebuilt the whole revenue engine, not one channel',
        body: [
          'Instead of putting more money through a leaking system, we treated the business as one connected engine. Ads bring the right people in. Organic search keeps them coming for years. A fast, custom-built storefront turns visitors into buyers. Clean data tells us exactly what to scale.',
          'Every decision came from a number rather than an opinion. We rebuilt the measurement stack first so that every dollar became accountable. When one channel returned 12x and a campaign returned 1.4x, there was nothing to debate — we moved the budget.',
        ],
        points: [
          {
            label: 'Performance marketing',
            text: 'Google and paid social rebuilt from the ground up, focused only on purchase-ready intent and only on campaigns that actually made money.',
          },
          {
            label: 'SEO, AEO and GEO',
            text: 'Product and category pages optimised so the brand ranks at the top of search for free when riders look for specific parts.',
          },
          {
            label: 'Custom store development',
            text: 'A hand-coded storefront built in Liquid rather than a generic theme, then migrated onto Shopify for speed and scale.',
          },
          {
            label: 'Retention and data',
            text: 'Email and lifecycle sequences to turn one-time buyers into repeat revenue, on top of a rebuilt tracking layer.',
          },
        ],
      },
      {
        kicker: 'Result — part one',
        title: 'Same budget. Far bigger returns.',
        body: [
          'This business was scaled on roughly the same ad budget it started with. We did not win by spending more. We won by cutting the traffic that never converted and pouring budget into the campaigns that were printing returns.',
          'In plain terms: for roughly every $1 spent on paid social, the brand earned about $12 back. On search, about $7.50 for every $1. That is what happens when the right people land on a store built to sell.',
        ],
        table: {
          title: 'A peak month, broken down',
          note: 'From a combined ad spend of roughly $7,400, the brand generated $63,793 in a single month across 214 orders — an 8.63x blended return.',
          head: ['Channel', 'Ad spend', 'Revenue', 'Return'],
          rows: [
            ['Search', '$5,663', '$42,808', '7.56x'],
            ['Paid social', '$1,727', '$20,985', '12.15x'],
            ['Combined', '$7,390', '$63,793', '8.63x'],
          ],
        },
        pull: 'The 12x return was not luck. The data told us which creatives and catalogue ads were winning — so we doubled down on those and cut the rest.',
      },
      {
        kicker: 'Result — part two',
        title: 'Free traffic that does not switch off',
        body: [
          'Ads cost money every time someone clicks. So we built something that keeps working when the ads are paused: a search presence the brand owns outright. With proper SEO, AEO and GEO work, we got their pages ranking for the terms real buyers type — and crucially for the competitive non-branded terms where new customers actually come from.',
          'Anyone can rank for their own brand name. These were the contested category searches where the real buyers and the real competition live. Nearly every tracked term climbed, and several made very large leaps — one category term moved from position 32, on page four where nobody looks, to the top of page one.',
        ],
        table: {
          title: 'Movement on competitive non-branded terms',
          note: 'Term wording is generalised to protect the client. Positions are average rank, before and after.',
          head: ['Term type', 'Rank now', 'Improved from'],
          rows: [
            ['Model-specific exhaust', '#1.7', '#3.3'],
            ['Category exhaust', '#4.8', '#7.6'],
            ['Platform + product', '#5.8', '#12.5'],
            ['Model-specific handlebars', '#3.7', '#6.7'],
            ['Generic custom handlebars', '#7.3', '#23.8'],
            ['Broad category term', '#10.9', '#32.2'],
          ],
        },
        points: [
          {
            label: 'Why it matters more than any single ad',
            text: 'Ads are rented traffic — stop paying and it stops. Rankings are an asset you own. At its peak this organic traffic contributed over $26,000 in monthly sales on its own. Even if every ad were switched off tomorrow, the brand would keep generating meaningful revenue from traffic it does not pay for.',
          },
        ],
      },
      {
        kicker: 'Result — part three',
        title: 'A storefront built to sell, not just to look good',
        body: [
          'None of the traffic matters if the store loses people at the finish line. A slow, clunky site is a silent sales killer, especially when four out of five visitors are on a phone. So we built a custom, hand-coded store rather than dropping the brand onto an off-the-shelf theme.',
          'Every part of it was coded pixel by pixel in Liquid for speed and for the way riders actually shop. We migrated the brand onto Shopify so the store stays fast under heavy traffic, makes checkout effortless, and will not buckle as the business grows toward $100K months and beyond.',
        ],
        table: {
          title: 'The headline: a full year of revenue in half the time',
          note: "Taken directly from the client's own store analytics.",
          head: ['Period', 'Revenue'],
          rows: [
            ['All of the prior year', '$296,441'],
            ['Following year, first 6 months only', '$277,302'],
            ['Full engagement to date', '$628,200'],
          ],
        },
      },
    ],
    proves: [
      {
        title: 'We owned the whole picture, not one channel',
        text: 'Migrating the store, cutting spend that looked busy but did not convert, and building organic traffic that pays off for years are not ad tweaks. They are business decisions, and a single-channel agency is not positioned to make them.',
      },
      {
        title: 'Efficiency beats budget',
        text: 'The same ad spend produced multiples of the revenue. Scaling was a consequence of removing waste, not of asking the client for more money.',
      },
      {
        title: 'We built an asset, not a rental',
        text: 'The organic search presence keeps producing revenue whether or not the ad account is live. That is permanent growth rather than a monthly rental bill.',
      },
    ],
    closing:
      'Same budget. A full year of revenue in six months. And a search presence the brand keeps whether the ads run or not.',
    accent: '#c7ff97',
  },

  /* ======================================================================
     02 — PERFUME & FRAGRANCE · E-COMMERCE · DUBAI, UAE
     ====================================================================== */
  {
    slug: 'fragrance-ecommerce',
    index: '002',
    title: 'The turnaround',
    subtitle:
      'A suspended ad account rebuilt into a 3.51 blended ROAS engine — and a client who now forwards us his competitors’ proposals to check.',
    industry: 'Perfume & Fragrance',
    niche: 'Multi-SKU e-commerce retail',
    market: 'Dubai, United Arab Emirates',
    year: '2025—2026',
    duration: '18 months, ongoing',
    services: [
      'Google Ads',
      'Meta Ads',
      'Account reinstatement',
      'Merchant feed rebuild',
      'CRO & website redesign',
      'Tracking & data',
    ],
    summary:
      'A year of paid media had returned roughly one dirham for every dirham spent — then both the ads and merchant accounts were suspended and media stopped entirely. We diagnosed the real cause, got the accounts reinstated, rebuilt from zero, and took blended return from 1.02 to 3.51.',
    cardMetric: { value: '3.51x', label: 'Blended ROAS, up from 1.02' },
    metrics: [
      { value: '3.51x', label: 'Blended return on ad spend', note: 'up from 1.02' },
      { value: '5.28x', label: 'Best single month', note: 'peak monthly ROAS' },
      { value: '4.2x', label: 'Revenue multiple', note: 'vs. the full preceding year' },
      { value: '−52%', label: 'Cost per purchase', note: '138.82 → 66.09 dh' },
    ],
    chapters: [
      {
        kicker: 'The baseline',
        title: 'A full year of spend that came back as itself',
        body: [
          'Before anything could be improved it had to be measured honestly. Across the preceding full year the account spent 41,368 dh and produced 42,126 dh in revenue — a blended return of 1.02 and a return on investment of 1.83%.',
          'At 1.02 the advertising is not a growth channel. It is a break-even treadmill: money goes in, roughly the same money comes out, and none of it funds inventory, salaries or expansion. Worse, it hides the problem, because revenue is technically being generated so it looks like something is working.',
        ],
        table: {
          title: 'The starting year, exactly as the data reported it',
          head: ['Channel', 'Spend', 'Purchases', 'Revenue', 'CPA', 'ROAS'],
          rows: [
            ['Search', '11,722 dh', '105', '19,617 dh', '111.64 dh', '1.67'],
            ['Paid social', '29,646 dh', '193', '22,509 dh', '153.61 dh', '0.76'],
            ['Combined', '41,368 dh', '298', '42,126 dh', '138.82 dh', '1.02'],
          ],
        },
        points: [
          {
            label: 'The allocation was backwards',
            text: 'Paid social absorbed 72% of total spend and returned 0.76 — every 100 dh sent to it came back as 76 dh. Meanwhile search was the better platform at 1.67 and was being under-funded.',
          },
          {
            label: 'Nobody owned the account day to day',
            text: 'Within search, a single campaign spent 981 dh to produce one conversion, a 0.16 return. That is what an unmonitored campaign looks like when responsibility is split.',
          },
        ],
      },
      {
        kicker: 'The blocker',
        title: 'Both the ads and merchant accounts were suspended',
        body: [
          'This was the hardest part of the engagement and it had nothing to do with advertising skill. Both accounts were suspended under a circumventing-systems policy violation — one of the harder violations to recover from, because the platform treats it as deliberate rather than accidental. Shopping and Performance Max both depend on the merchant feed, so for a retailer whose catalogue is the product, the entire acquisition engine went down at once.',
          'Rather than treating it as a support ticket, we audited the full account estate. The client had worked with several agencies over time and each one, on arrival, had created fresh ads and merchant accounts for the same business instead of requesting access to the existing ones. Several live accounts promoting one domain looks exactly like an advertiser rebuilding to escape prior enforcement. The system was working correctly. The account structure was not.',
        ],
        points: [
          {
            label: 'We consolidated before we appealed',
            text: 'We inventoried every account tied to the business, identified which carried the legitimate history, made it the master and closed every duplicate. Most reinstatement attempts fail because they appeal first and clean up later — an appeal filed while duplicates are still live argues against a violation that is still true.',
          },
          {
            label: 'Then we fixed the source',
            text: 'The merchant account was consolidated the same way, and we brought the website into compliance so product data and policy pages met requirements. Feeds and landing pages are re-reviewed continuously, so a site that scrapes past the first check gets caught on a later one.',
          },
          {
            label: 'Both accounts were reinstated — and have stayed reinstated',
            text: 'One consolidated master account, a compliant site behind it, and no repeat suspension since.',
          },
        ],
        pull: 'This work generated no impressions, no clicks and no revenue while it was happening. It was also, measurably, the single highest-return work of the entire engagement — because every result that followed is downstream of it.',
      },
      {
        kicker: 'The restart',
        title: 'We rebuilt rather than resuming',
        body: [
          'When access was restored we deliberately did not switch the old campaigns back on. The previous setup had produced a 1.02 return; restarting it would only have reproduced 1.02 more reliably.',
          'Search spend was consolidated into a single, properly fed Performance Max campaign instead of being split across fragmented search and shopping campaigns. Splitting a modest budget starves each campaign of the conversion signal it needs to learn — one well-fed campaign learns, four hungry ones do not. That single campaign went on to deliver 636 conversions and 147,489 dh of revenue at a 3.28 return.',
          'Paid social was restructured away from broad interest-theme targeting and onto catalogue-driven campaigns with dynamic product retargeting. For a retailer with a large SKU count the catalogue itself is the targeting signal — showing a specific bottle to someone who has already looked at that bottle beats guessing at interest categories.',
        ],
        table: {
          title: 'Before and after, side by side',
          note: 'Four times the revenue of the entire preceding year, in half the time, on 21% more spend.',
          head: ['Metric', 'Prior full year', 'Six months after rebuild', 'Movement'],
          rows: [
            ['Ad spend', '41,368 dh', '50,099 dh', '+21%'],
            ['Revenue', '42,126 dh', '176,063 dh', '4.2x'],
            ['Purchases', '298', '758', '2.5x'],
            ['Cost per purchase', '138.82 dh', '66.09 dh', '−52%'],
            ['Blended ROAS', '1.02', '3.51', '+244%'],
          ],
        },
      },
      {
        kicker: 'The trust',
        title: 'Performance earned the budget, not the other way round',
        body: [
          'As results became visible, other agencies began approaching the client with pitches and audit reports of his own account. Rather than evaluating them privately or using them as leverage, he forwards them to us and asks whether their findings are accurate.',
          'A competitor’s audit is designed to make the incumbent look negligent. Handing those documents to the incumbent and asking for an honest assessment is something a client does only when he is confident the answer will be straight even where it is unflattering.',
          'On the strength of that performance the client approved close to a doubling of daily search investment — an increase of about 88%. Budget is the clearest expression of confidence a client has available, and it was earned by the efficiency work rather than requested ahead of it.',
        ],
        pull: 'I don’t want to go with any other agency. All your data-driven strategies are working for me.',
      },
      {
        kicker: 'Where it goes next',
        title: 'The bottleneck moved off the ad account',
        body: [
          'The account is now in a position most performance engagements never reach: the campaigns are no longer the constraint. Click-through rate has risen and cost per purchase has halved, but on-site conversion rate still sits below 1%, and the largest remaining loss of revenue now happens after the click.',
          'So we have recommended and begun a redesign of the website, focused specifically on the stages where users drop out of the purchase journey rather than on a general visual refresh. It is being decided the same way every other decision in this engagement has been — from behaviour, not preference — and it will be measured against on-site conversion rate and blended ROAS, not against whether it looks more modern.',
        ],
        points: [
          {
            label: 'The honest caveat',
            text: 'We are stating an expectation, not a guarantee. Scaling spend usually costs some efficiency as campaigns move beyond the highest-intent audiences, and a redesign takes time to prove out. The correct measure of this next phase is whether blended return holds at a materially higher spend level — not whether it sets a new single-month record.',
          },
        ],
      },
    ],
    proves: [
      {
        title: 'The cause of the failure and the cause of the growth were the same thing',
        text: 'The accounts were suspended because several parties each owned a piece and nobody owned the whole. Performance recovered because one partner took ownership of all of it. The variable that changed was not skill or spend. It was who was accountable for the entire picture.',
      },
      {
        title: 'We do not stop at the edge of the scope',
        text: 'The two highest-value pieces of work here — the reinstatement and the website redesign — sit outside anything a performance-marketing contract would describe. An external vendor is incentivised to flag them and wait.',
      },
      {
        title: 'Trust is the asset that compounds fastest',
        text: 'A five-star verified review, competitors’ audits forwarded to us for an honest opinion, and an 88% budget increase are not soft outcomes. They are what made the scale-up possible and what makes the website rebuild possible now.',
      },
    ],
    closing:
      'From 1.02 to 3.51 blended return. From a suspended account to 176,063 dh of revenue in six months — and a client who asks us to audit the people trying to replace us.',
    accent: '#c7ff97',
  },

  /* ======================================================================
     03 — LASH & BEAUTY FRANCHISE · FIVE STUDIOS · HOUSTON, TEXAS
     ====================================================================== */
  {
    slug: 'beauty-franchise-lead-gen',
    index: '003',
    title: 'The night shift',
    subtitle:
      'Reading the audience’s clock instead of the platform’s playbook — and finding the cheapest leads in the account hiding in the hours the studios were closed.',
    industry: 'Lash & Beauty Franchise',
    niche: 'Membership-based studios, five locations',
    market: 'Houston, Texas, United States',
    year: '2024—2026',
    duration: '2 years, ongoing',
    services: [
      'Meta Ads',
      'Google Ads',
      'Multi-location strategy',
      'Call-intent campaigns',
      'Voice AI agent',
    ],
    summary:
      'Five franchise studios under one operator, selling booked appointments that turn into recurring memberships — with no access to the website our ads pointed at. We ran anyway, changed channel when the platform stopped cooperating, and produced 451 booked-intent lead events at $28.22 each.',
    cardMetric: { value: '451', label: 'Booked-intent lead events' },
    metrics: [
      { value: '415', label: 'Phone calls placed', note: 'across five studios' },
      { value: '451', label: 'Total lead events', note: 'calls plus callback requests' },
      { value: '$30.67', label: 'Cost per call', note: '$28.22 per lead event' },
      { value: '41.5%', label: 'Calls after hours', note: 'on studios running 24/7' },
    ],
    chapters: [
      {
        kicker: 'The constraint',
        title: 'A campaign we could not instrument',
        body: [
          'Most performance engagements begin by installing tracking. This one could not. The website, the booking system and the domain belong to the franchisor rather than to our client, so as the franchisee’s marketing partner we could not place a pixel, fire conversion events, or build a retargeting audience from site visitors.',
          'No pixel means no website custom audiences, no lookalikes built from real customers, no retargeting of people who browsed and left, and no server-side confirmation that a click became a booking. Effectively every optimisation tool modern paid social depends on was unavailable to us.',
          'Rather than stalling the launch until access was negotiated with the franchisor, we started without the standard setup and treated the studios themselves as the measurement layer. That only works if everyone understands their part, so we set out plainly what we were running, what signal we could and could not see, and what the studio teams needed to do at their end. The first campaigns generated qualified lead flow without any of the tracking infrastructure normally treated as a precondition.',
        ],
        pull: 'A vendor waits for access and bills for the delay. Being accountable for the outcome means finding a way to run inside the constraint — and being honest about the trade-off that comes with it.',
      },
      {
        kicker: 'The blocker',
        title: 'The platform stopped cooperating with the objective',
        body: [
          'The client then narrowed the goal from leads in general to phone-call leads exclusively, and paused paid social. We rebuilt the strategy around search accordingly.',
          'After several months, cost per phone-call lead was running very high. Then the platform paused call-only ads, and within the remaining formats we could not remove the directions action or run a clean call-only objective. The campaign could no longer be pointed at the one outcome the client wanted.',
          'This is a platform-capability failure rather than a media-buying one. No amount of bid, budget or creative work fixes an objective the platform will not let you isolate. We raised it immediately — before a review meeting, before a quarterly report, before the client noticed the numbers themselves — and we arrived with the replacement already designed rather than with a problem for the client to solve.',
        ],
        pull: 'The instruction was one channel, phone calls only. Following it faithfully would have meant continuing to spend the client’s money on a channel we already knew could not deliver the objective.',
      },
      {
        kicker: 'The pivot',
        title: 'One campaign per studio, one action, no dilution',
        body: [
          'Five separate campaigns, one per location, each pointed at its own studio’s phone line. Every studio has its own catchment, its own competitive pressure and its own cost per call, so each is funded and judged on its own numbers rather than averaged into a group total. A single pooled campaign optimises toward whichever studio converts most cheaply and quietly starves the rest — which for a franchise operator whose revenue is per studio means one location subsidising the group average while its own phone stays quiet.',
          'With no pixel and no website audiences available, targeting had to be reasoned out from who the customer actually is rather than inherited from site behaviour. Each campaign was aimed at working women inside the realistic travel radius of that specific studio, and creative was built to produce a phone call rather than a click — leading with the studio, the service and a reason to ring now.',
        ],
        table: {
          title: 'What the five studios produced',
          note: '65 days. Studios anonymised. “20s+” and “60s+” are calls that connected and stayed connected for at least that long. Callbacks are requests submitted through the ad.',
          head: ['Studio', 'Spend', 'Calls', 'Cost / call', '20s+', '60s+', 'Callbacks'],
          rows: [
            ['Studio A', '$2,806.71', '149', '$18.84', '29', '12', '11'],
            ['Studio B', '$4,171.35', '106', '$39.35', '33', '21', '13'],
            ['Studio C', '$2,964.41', '94', '$31.54', '29', '16', '6'],
            ['Studio D', '$2,176.90', '44', '$49.48', '17', '10', '3'],
            ['Studio E', '$609.45', '22', '$27.70', '9', '7', '3'],
            ['All studios', '$12,728.82', '415', '$30.67', '117', '66', '36'],
          ],
        },
        points: [
          {
            label: 'Why we report seconds, not just calls',
            text: 'A call placed is intent. A call still live at 60 seconds is a conversation — long enough to have covered a service, a price and a date. Counting only the top-line number would flatter the report; counting the seconds is what lets us tell the client which studios are converting the demand we send them and which are dropping it at the desk.',
          },
          {
            label: 'The honest reading',
            text: 'These are lead-quality signals, not bookings. We can prove a conversation happened; we cannot see the appointment book. That boundary is set by the tracking constraint, and we state it rather than imply a booking rate we cannot evidence.',
          },
        ],
      },
      {
        kicker: 'The discovery',
        title: 'The audience’s clock, not the platform’s playbook',
        body: [
          'Every studio in the group opens at 9am and closes at 7pm. The default instinct is to run ads during business hours so calls arrive when someone can answer them. We did the opposite, deliberately.',
          'The audience for lash extensions in these catchments is overwhelmingly working women. Someone in an office from nine to five does not research a beauty appointment at 11am and does not phone a studio from her desk. She looks in the evening, at night, and early in the morning before the day starts. If that is true, running ads only during studio hours means advertising to the audience precisely when it is least able to respond — and paying peak auction prices for the privilege.',
          'There was a platform reason pointing the same way. Restricting delivery windows on paid social repeatedly pushes campaigns back into the learning phase, so scheduling costs efficiency across the whole campaign in exchange for tidier timing. You pay more per lead to receive fewer of them. We kept delivery continuous and solved the timing problem on the business side instead.',
        ],
        table: {
          title: 'What the clock actually showed',
          note: 'On the three studios running 24/7.',
          head: ['Time block', 'Calls', 'Cost / call', '60s+ connects', 'Connect rate'],
          rows: [
            ['Studio hours (09:00–18:59)', '204', '$40.44', '43', '21.1%'],
            ['After hours', '145', '$11.68', '6', '4.1%'],
          ],
        },
      },
      {
        kicker: 'The uncomfortable part',
        title: 'The cheapest leads in the account were the ones nobody answered',
        body: [
          'After-hours calls cost $11.68 against $40.44 during the working day — a seventh of the budget producing two-fifths of the calls. Then we looked at what happened to those calls.',
          'During studio hours, 21.1% of calls became a conversation lasting a minute or more. After hours, 4.1% did. Same ads, same audience, same intent — five times less likely to be answered, for the simple reason that the studio is closed and nobody is at the desk. Of 145 after-hours calls, 139 never became a 60-second conversation. At the daytime rate roughly 31 would have. And because the platform stores no phone numbers, not one can be called back.',
          'So our best discovery was also creating the group’s biggest leak. Reporting the first half alone would have been a more flattering case study and a worse piece of work.',
        ],
        points: [
          {
            label: 'What we are doing about it',
            text: 'We designed a plan to route after-hours calls to a voice AI agent that answers live, handles the enquiry and converts it into a booking — so calls arriving at 9pm or 6am are captured at the moment of intent rather than ringing into an empty studio.',
          },
          {
            label: 'Why this and not more budget',
            text: 'The demand is already bought and paid for. Raising spend to generate more calls into an unanswered line multiplies the leak; answering the calls already arriving converts spend that is currently being wasted. The cheaper fix is almost always the one downstream of the ad account.',
          },
          {
            label: 'Why it is our job',
            text: 'Call handling is not performance marketing. It sits outside any media scope of work, in the same way the tracking constraint did at the start. It is simply the highest-value work available to this business right now, so it is the work we brought to them.',
          },
        ],
      },
    ],
    proves: [
      {
        title: 'We understood the customer before we optimised the campaign',
        text: 'The single most valuable decision here — running 24/7 — came from thinking about who buys lash extensions and when she is free to phone, not from a platform recommendation. The data then confirmed it. Audience understanding is the strategy; the ad account is where it gets expressed.',
      },
      {
        title: 'We changed channel when the channel stopped working',
        text: 'The platform could not isolate the objective the client had asked for, so we said so and brought the alternative with us. Following the original instruction would have been obedient, defensible, and wrong.',
      },
      {
        title: 'We report the leak as loudly as the win',
        text: '415 calls at $30.67 is the number a vendor puts on the cover. That 139 of them rang out unanswered is the number that actually grows this business.',
      },
    ],
    closing:
      '451 lead events in 65 days across five studios at $28.22 each — and the cheapest leads in the account arriving in the hours the doors are locked, with a plan on the table to answer them.',
    accent: '#c7ff97',
  },

  /* ======================================================================
     04 — HYPNOTHERAPY & WELLNESS · ABU DHABI, UAE
     ====================================================================== */
  {
    slug: 'wellness-practice-whatsapp',
    index: '004',
    title: 'The workaround',
    subtitle:
      'A regulated category, a payment gateway that would not approve, and a website that could never take a payment. So we moved the entire funnel into WhatsApp.',
    industry: 'Hypnotherapy & Wellness',
    niche: 'Solo practitioner, online one-to-one programmes',
    market: 'Abu Dhabi, United Arab Emirates',
    year: '2026',
    duration: '195 days, ongoing',
    services: [
      'Meta Ads',
      'Click-to-WhatsApp funnels',
      'Website audit & fixes',
      'CRM automation',
      'Booking automation',
    ],
    summary:
      'We were hired to run ads to a website checkout. Regulatory classification meant that checkout could never exist. Rather than waiting on an uncertain licensing outcome, we moved the transaction into a conversation — 668 qualified leads at AED 9.53 each.',
    cardMetric: { value: 'AED 9.53', label: 'Cost per qualified conversation' },
    metrics: [
      { value: '668', label: 'Conversations started', note: 'qualified WhatsApp leads' },
      { value: 'AED 9.53', label: 'Cost per conversation', note: 'about USD 2.59' },
      { value: 'AED 6,365', label: 'Total invested', note: 'at AED 33 per day' },
      { value: '52.4%', label: 'Tap → conversation', note: 'of link clicks converted' },
    ],
    chapters: [
      {
        kicker: 'The original plan',
        title: 'Build the foundation, then buy the traffic',
        body: [
          'Onboarding followed the usual sequence. We took access to the practice’s accounts and website, audited the site end to end, and fixed what the audit surfaced — structural issues, alignment and layout problems, and content that needed tightening. Then we created and configured the ad accounts from scratch so performance could actually be attributed rather than guessed at.',
          'The plan was straightforward: paid media drives people to the service pages, they book a programme and pay on the website, and the practitioner runs the sessions online. Clean, self-service, and scalable for a solo practice. It depended on exactly one thing — the ability to take a card payment on the website.',
        ],
        points: [
          {
            label: 'Why holding the whole stack mattered later',
            text: 'Because we held the site, the accounts, the tracking and the payment setup together, we could see the blocker coming from the payment side rather than discovering it as a media problem. A media-only vendor would have been told about it weeks later.',
          },
        ],
      },
      {
        kicker: 'The blocker',
        title: 'A regulated category, and a licence that did not exist',
        body: [
          'Health and wellness is among the most heavily policed categories in paid media — and in the UAE, in payments as well. We applied for a merchant account with a widely used regional payment gateway. The application did not fail on paperwork. It failed on business classification.',
          'The practice holds a professional licence covering lifestyle consultancy and complementary wellness services. The reviewers’ position was that the website presented its therapeutic modalities in a clinical context, which sits outside that licensed activity. The requirement settled on a different licence class entirely, obtained from a different authority, against a different definition of the practice. We investigated the route thoroughly and it was neither quick nor certain — and the business could not wait on an uncertain licensing outcome to start earning.',
        ],
        table: {
          title: 'Seventeen days, and who did the work',
          note: 'Reconstructed from the merchant application correspondence. Third-party names omitted.',
          head: ['Day', 'What happened', 'Driven by'],
          rows: [
            ['2–5', 'Website review requirements issued; application submitted, payouts to be suspended until met', 'Gateway'],
            ['8', 'Updated terms, privacy and cookie policies, consent documentation and pricing pages submitted', 'Us'],
            ['8', 'Application placed on hold — services presented in a clinical context, outside licensed activity', 'Bank'],
            ['9', 'Licence submitted with three proposed remedies, and a direct request for the exact requirement', 'Us'],
            ['9', 'Requirement confirmed: a different professional licence class', 'Gateway'],
            ['9', 'Regulatory clarification submitted arguing complementary-therapy classification', 'Client'],
            ['13–17', 'Three further follow-ups chasing status and confirming whether wording changes would suffice', 'Us'],
            ['19', 'Escalated to an internal call. No approval granted.', '—'],
          ],
        },
        points: [
          {
            label: 'We ran the regulatory correspondence, not the client',
            text: 'Across those seventeen days the majority of the outbound emails came from our side — submitting revised policies and consent documentation, supplying the licence, proposing three concrete remedies rather than waiting to be told one, and chasing status four separate times as the review moved between the gateway and the bank.',
          },
          {
            label: 'And when it did not work',
            text: 'It is worth being plain: we did not win this one. The approval never came. What we did do was establish that quickly and definitively enough to stop spending time on it — which turned out to be the valuable outcome.',
          },
        ],
      },
      {
        kicker: 'The decision',
        title: 'Change the funnel, not the paperwork',
        body: [
          'Every version of the original plan ended at a payment page that could not be built. So we stopped treating that as a problem to solve and started treating it as a fixed constraint, then asked a different question: where else can this transaction happen?',
          'On a phone call, in a conversation. The practitioner already spoke to every client before their first session; the payment could simply be arranged there. That single change removed the gateway from the critical path entirely — the business no longer needed merchant approval in order to trade. It meant conceding that the plan the client had been sold on was not achievable in this category, at this licence class, at this time. Saying that early is uncomfortable. Saying it late is far more expensive.',
          'We also set search aside and moved the entire budget to one channel running click-to-WhatsApp campaigns. Search policy handling of health-adjacent advertising is restrictive, and its strengths depended on the website doing work it could no longer do. At AED 33 a day, splitting across two platforms would have starved both of the conversion signal needed to optimise.',
        ],
      },
      {
        kicker: 'The strategy',
        title: 'Target the problem, not the demographic',
        body: [
          'Click-to-WhatsApp is a format, not a strategy. What made it work was matching the ad to the specific problem a person was already carrying, then qualifying them before the practitioner ever spent time on the conversation.',
          'Rather than advertising the modality to a broad wellness audience, we researched and built interest-based targeting around the specific conditions the practice treats, then ran ads mapped to distinct service lines — alongside a general programme for everyone who did not fit neatly into one of them. Someone who has not slept properly in months does not identify as a person seeking hypnotherapy. She identifies as a person who cannot sleep. An ad that names the problem gets recognised; an ad that names the modality has to be decoded first.',
          'We then built qualifying questions into the WhatsApp flow, so people answered a short set of questions the moment the thread opened. A single practitioner cannot triage hundreds of enquiries — volume without filtering is not a benefit to her, it is a second full-time job.',
        ],
        table: {
          title: 'The funnel, stage by stage',
          note: '195 days, one campaign, one channel, AED 33 per day.',
          head: ['Stage', 'Result', 'Conversion from previous'],
          rows: [
            ['People reached', '53,494', '—'],
            ['Impressions served', '254,659', '4.76 per person'],
            ['Clicks (all)', '4,614', '1.81% of impressions'],
            ['Tapped through to WhatsApp', '1,275', '27.6% of all clicks'],
            ['Started a conversation', '668', '52.4% of link clicks'],
          ],
        },
        points: [
          {
            label: 'The number that matters is the last one',
            text: 'More than half of everyone who tapped the ad opened a real conversation. A website funnel here would have lost most of that traffic before booking — and all of it, since the payment step did not exist.',
          },
          {
            label: 'The honest boundary',
            text: 'These are qualified conversations, not bookings. Payment and scheduling happen off-platform.',
          },
        ],
      },
      {
        kicker: 'Beyond the brief',
        title: 'What we built after the ads',
        body: [
          'Generating 668 conversations for a one-person practice creates a problem as well as an opportunity. Handing over the leads and calling the job done would have been defensible, and useless.',
          'So we set up a CRM and an automated booking system, so enquiries are captured, tracked and scheduled without manual administration. The practitioner does not maintain booking records, chase her own calendar, or rebuild the same information across tools. What is left for her to do is take the payment and issue the intake form. Everything else runs without her.',
          'Lead generation that overwhelms the person receiving it is not a result. For a solo practitioner the constraint on growth is her time, so the highest-value work available was giving her more of it.',
        ],
        pull: 'We were engaged to run ads. What actually moved the business was a website audit, a seventeen-day merchant dispute, a redesigned sales model, and a CRM build. Not one of those was in the scope of work.',
      },
    ],
    proves: [
      {
        title: 'We changed the business model when the business model was blocked',
        text: 'The plan required online payments; online payments required a licence that could not be obtained in a workable timeframe. Rather than waiting, appealing indefinitely, or quietly under-delivering, we moved the transaction into a conversation — and the practice started earning from paid media without ever getting the gateway approved.',
      },
      {
        title: 'We did the unglamorous work because it was the work that mattered',
        text: 'A website audit, a merchant onboarding fight, and a CRM build are not what a performance marketing agency is hired to do. They were the three things standing between this client and revenue.',
      },
      {
        title: 'We built for the business that exists, not the one in the deck',
        text: 'One practitioner with an AED 33 daily budget. The answer was not more channels or a bigger plan — it was one campaign, aimed precisely, qualified before it reached her, and supported by automation so she could actually serve the people it brought.',
      },
    ],
    closing:
      '668 qualified conversations at AED 9.53, from AED 6,365 and a channel we were not originally planning to rely on — in a category where the intended sales route was never available to us at all.',
    accent: '#c7ff97',
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
