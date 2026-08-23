export type Service = {
  slug: string;
  index: string;
  title: string;
  shortTitle: string;
  tagline: string;
  heroHeadline: string;
  heroLede: string;
  deliverables: { title: string; description: string }[];
  approach: { step: string; title: string; description: string }[];
  outcomes: { value: string; label: string }[];
  caseStudySlug: string;
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "website-development",
    index: "01",
    title: "Website Development",
    shortTitle: "Web Development",
    tagline:
      "Conversion-engineered websites built to enterprise standards — fast, secure, and designed to sell.",
    heroHeadline: "Websites built like revenue infrastructure.",
    heroLede:
      "Your website is the one channel you own outright. We design and build sites that load in under a second, rank, convert, and scale with your organization — not brochures that need rebuilding in 18 months.",
    deliverables: [
      {
        title: "Conversion-first UX & design",
        description:
          "Every page architected around a job: qualify, persuade, convert. Wireframes are validated against analytics and session data before a pixel is polished.",
      },
      {
        title: "Modern engineering",
        description:
          "Next.js and headless architectures with clean, documented codebases your internal team can own. No page-builder lock-in, no plugin debt.",
      },
      {
        title: "Core Web Vitals performance",
        description:
          "Sub-second loads and green Vitals as an acceptance criterion, not an afterthought — because speed is a ranking factor and a conversion factor.",
      },
      {
        title: "Headless CMS integration",
        description:
          "Marketing teams ship landing pages and content without engineering tickets. Structured content models built for reuse across channels.",
      },
      {
        title: "Analytics & tracking foundation",
        description:
          "Server-side tagging, clean event schemas, and consent-compliant measurement wired in from day one, so every later channel decision runs on real data.",
      },
      {
        title: "Security & compliance",
        description:
          "SSO, role-based access, WCAG 2.2 AA accessibility, and infrastructure that passes enterprise procurement and security review.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Discovery & conversion audit",
        description:
          "We map user journeys, analytics, and revenue data to define what the new site must do — with numbers attached.",
      },
      {
        step: "02",
        title: "Architecture & design",
        description:
          "Information architecture, design system, and page-level prototypes tested with stakeholders before build begins.",
      },
      {
        step: "03",
        title: "Build & QA",
        description:
          "Component-driven development in weekly sprints, with performance budgets and accessibility checks enforced in CI.",
      },
      {
        step: "04",
        title: "Launch & optimize",
        description:
          "Zero-downtime migration with SEO preserved, then a structured experimentation program on the pages that drive pipeline.",
      },
    ],
    outcomes: [
      { value: "<1s", label: "Median page load across launched sites" },
      { value: "+68%", label: "Average lift in demo/lead conversion" },
      { value: "100", label: "Lighthouse performance scores at handover" },
    ],
    caseStudySlug: "trellis-systems",
    faqs: [
      {
        q: "What platforms do you build on?",
        a: "Primarily Next.js with a headless CMS (Sanity, Contentful, or Storyblok) for marketing sites, and Shopify Plus for commerce. We recommend based on your team's capabilities, not our preferences.",
      },
      {
        q: "How long does an enterprise site build take?",
        a: "A typical engagement runs 10–16 weeks from kickoff to launch, depending on page count and integrations. We phase launches so high-impact pages ship early rather than waiting on the full site.",
      },
      {
        q: "Will a rebuild hurt our SEO?",
        a: "Handled correctly, a rebuild improves it. We run full URL mapping, redirect strategy, and pre/post-launch crawl comparisons — preserving equity is a launch gate, not a hope.",
      },
      {
        q: "Can our internal team maintain the site afterward?",
        a: "That's the goal. You get documented code, a component library, CMS training, and an optional support retainer. No agency lock-in by design.",
      },
    ],
  },
  {
    slug: "meta-ads",
    index: "02",
    title: "Meta Ads",
    shortTitle: "Meta Ads",
    tagline:
      "Full-funnel Facebook and Instagram programs powered by creative testing at volume and clean signal.",
    heroHeadline: "Meta ads that scale on creative, not luck.",
    heroLede:
      "Since targeting collapsed into the algorithm, creative is the targeting. We run structured creative testing at volume, feed Meta clean conversion signal, and scale winners with discipline — so growth doesn't stall at the first budget increase.",
    deliverables: [
      {
        title: "Creative strategy & production",
        description:
          "Concept-led ad creative — UGC, motion, static — produced against a testing calendar, not ad-hoc. Every asset exists to answer a hypothesis.",
      },
      {
        title: "Structured creative testing",
        description:
          "A weekly test-learn-scale cadence isolating hooks, formats, and angles, so winners are identified by evidence instead of opinion.",
      },
      {
        title: "Conversions API & signal quality",
        description:
          "Server-side CAPI implementation with event deduplication and enhanced match quality — because the algorithm is only as good as the data you feed it.",
      },
      {
        title: "Full-funnel architecture",
        description:
          "Prospecting, remarketing, and retention structured around incremental revenue — with budget consolidation that keeps the account out of learning limbo.",
      },
      {
        title: "Landing page alignment",
        description:
          "Message-matched landing experiences per angle, built and tested alongside the ads. The click is half the job.",
      },
      {
        title: "Incrementality & MMM-aware reporting",
        description:
          "Reporting that separates platform-claimed revenue from actual lift, so scaling decisions are made on truth.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Account & signal audit",
        description:
          "We audit structure, pixel/CAPI health, creative history, and post-click experience, then rebuild the measurement baseline.",
      },
      {
        step: "02",
        title: "Creative engine setup",
        description:
          "Angle map, testing calendar, and production pipeline established — typically 8–15 new assets entering testing per month.",
      },
      {
        step: "03",
        title: "Test & consolidate",
        description:
          "Rapid iteration in structured test campaigns; proven winners graduate into consolidated scaling campaigns.",
      },
      {
        step: "04",
        title: "Scale with guardrails",
        description:
          "Budget scales against MER and incremental CAC targets, with creative refresh cycles that stay ahead of fatigue.",
      },
    ],
    outcomes: [
      { value: "3.8x", label: "Average ROAS across managed accounts" },
      { value: "-34%", label: "Average CAC reduction in first 2 quarters" },
      { value: "12+", label: "New creatives tested per account per month" },
    ],
    caseStudySlug: "bluepine-hotels",
    faqs: [
      {
        q: "What monthly ad spend do you manage?",
        a: "Most accounts spend between $50k and $1M+ per month on Meta. Below roughly $30k/month, our testing methodology can't run at full velocity, and we'll tell you honestly if you're not ready for it.",
      },
      {
        q: "Do you produce the ad creative or just run media?",
        a: "Both, and we believe splitting them is a mistake. Media buying tells us what to make next; creative determines whether media can scale. One pod owns the whole loop.",
      },
      {
        q: "How do you handle iOS-era measurement?",
        a: "Server-side Conversions API, first-party data enrichment, and triangulation between platform metrics, MER, and incrementality checks. We optimize to blended truth, not to what Ads Manager claims.",
      },
      {
        q: "How fast can Meta campaigns scale?",
        a: "With signal and creative in place, accounts typically scale 20–40% month over month without efficiency collapse. Faster is possible — but we scale on evidence, not enthusiasm.",
      },
    ],
  },
  {
    slug: "google-ads",
    index: "03",
    title: "Google Ads",
    shortTitle: "Google Ads",
    tagline:
      "Search, Shopping, PMax, and YouTube programs that capture demand at the moment of intent — profitably.",
    heroHeadline: "Own the moment of intent.",
    heroLede:
      "Google is where demand goes to convert. We build full-account architectures across Search, Performance Max, Shopping, and YouTube — engineered around value-based bidding and clean conversion data, so every dollar chases profit rather than clicks.",
    deliverables: [
      {
        title: "Account architecture & restructure",
        description:
          "Consolidated, intent-led structures that give Smart Bidding the data density it needs — replacing legacy sprawl that fragments signal.",
      },
      {
        title: "Value-based bidding",
        description:
          "Offline conversion imports and revenue/LTV signals wired into the account, so Google optimizes toward margin and pipeline, not raw conversions.",
      },
      {
        title: "Performance Max, controlled",
        description:
          "PMax run with asset-group discipline, brand exclusions, and search-term visibility — capturing its upside without surrendering the account to a black box.",
      },
      {
        title: "Shopping & feed optimization",
        description:
          "Feed titles, attributes, and supplemental data optimized continuously — often the highest-leverage work in retail accounts.",
      },
      {
        title: "YouTube & Demand Gen",
        description:
          "Upper-funnel programs measured on incremental search lift and brand demand, not last-click fictions.",
      },
      {
        title: "Query & waste elimination",
        description:
          "Systematic negative-keyword and placement hygiene. On enterprise accounts, cutting waste routinely funds the entire engagement.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Forensic account audit",
        description:
          "Ninety-point audit across structure, bidding, query paths, and measurement. We quantify wasted spend before we touch anything.",
      },
      {
        step: "02",
        title: "Measurement rebuild",
        description:
          "Conversion actions, offline imports, and value rules rebuilt so bidding algorithms optimize toward business outcomes.",
      },
      {
        step: "03",
        title: "Restructure & migrate",
        description:
          "Phased migration to the target architecture, protecting performance history while learning periods reset.",
      },
      {
        step: "04",
        title: "Optimize & expand",
        description:
          "Weekly optimization cycles, then expansion into new campaign types, markets, and audiences as efficiency targets hold.",
      },
    ],
    outcomes: [
      { value: "-41%", label: "Average CPA reduction after restructure" },
      { value: "+2.6x", label: "Average return on ad spend at target CPA" },
      { value: "$18M", label: "Wasted spend eliminated for clients to date" },
    ],
    caseStudySlug: "meridian-freight",
    faqs: [
      {
        q: "We already run Google Ads. Why bring in an agency?",
        a: "Most enterprise accounts we audit waste 15–30% of spend on query mismatch, conversion misconfiguration, and legacy structure. An audit pays for itself quickly — and we'll show you the number before asking for the engagement.",
      },
      {
        q: "What's your position on Performance Max?",
        a: "Powerful, but only with guardrails. We run PMax alongside exact-intent Search with brand exclusions, strong asset groups, and channel-level reporting — never as an unaccountable catch-all.",
      },
      {
        q: "Do you work with B2B lead-gen accounts?",
        a: "Yes — it's a specialty. We import CRM stages back into Google as offline conversions, so bidding optimizes toward qualified pipeline and closed revenue instead of raw form fills.",
      },
      {
        q: "Will performance dip during a restructure?",
        a: "We migrate in phases to keep learning-period turbulence contained, typically holding performance within ±10% during transition, with gains landing in weeks 4–8.",
      },
    ],
  },
  {
    slug: "seo",
    index: "04",
    title: "SEO",
    shortTitle: "SEO",
    tagline:
      "Technical, content, and authority programs that compound into durable organic revenue — including AI search.",
    heroHeadline: "Organic growth that compounds while you sleep.",
    heroLede:
      "Paid media stops the day you stop paying. SEO compounds. We run enterprise search programs across technical foundations, content, and authority — built for how people actually search today, including AI answers and LLM-driven discovery.",
    deliverables: [
      {
        title: "Technical SEO at scale",
        description:
          "Crawl efficiency, index management, rendering, site speed, and structured data across sites with thousands to millions of URLs.",
      },
      {
        title: "Search-led content strategy",
        description:
          "Entity-based topic architecture mapped to revenue intent — not keyword lists. Every brief specifies what winning the query requires.",
      },
      {
        title: "Digital PR & authority",
        description:
          "Earned links and citations from publications that matter, built on data stories and expert commentary — never bought placements.",
      },
      {
        title: "AI search optimization",
        description:
          "Visibility in AI Overviews, ChatGPT, and Perplexity: structured content, entity clarity, and citation-worthiness for the answers layer replacing ten blue links.",
      },
      {
        title: "Migration & platform support",
        description:
          "SEO ownership through replatforms, redesigns, and internationalization — the moments where organic revenue is usually lost.",
      },
      {
        title: "Revenue-tied reporting",
        description:
          "Organic performance reported as pipeline and revenue by page and topic cluster, so SEO defends its budget with the same rigor as paid.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Opportunity model",
        description:
          "We size the realistic organic opportunity by topic and market, and forecast traffic-to-revenue so you know what you're investing toward.",
      },
      {
        step: "02",
        title: "Foundation sprint",
        description:
          "The technical issues that suppress everything else — crawlability, indexation, speed, internal linking — fixed first, fast.",
      },
      {
        step: "03",
        title: "Content & authority engine",
        description:
          "A publishing and digital-PR cadence targeting the topic clusters with the shortest path to revenue.",
      },
      {
        step: "04",
        title: "Compound & defend",
        description:
          "Refresh cycles, decay monitoring, and SERP-feature capture that protect rankings as competitors and algorithms move.",
      },
    ],
    outcomes: [
      { value: "+212%", label: "Average organic revenue growth by month 12" },
      { value: "68%", label: "Average increase in page-one keywords, year one" },
      { value: "9:1", label: "Typical organic ROI by end of year two" },
    ],
    caseStudySlug: "arcadia-health",
    faqs: [
      {
        q: "How long until SEO shows results?",
        a: "Technical fixes often move metrics within 4–8 weeks. Content and authority programs compound over 3–9 months. We forecast the curve up front and report leading indicators weekly, so progress is visible long before the hockey stick.",
      },
      {
        q: "Is SEO still worth it with AI answers taking clicks?",
        a: "The channel is changing, not dying. Brands cited by AI answers win disproportionate share, and the inputs — authority, structure, entity clarity — are SEO disciplines. We optimize for both classic SERPs and the answers layer.",
      },
      {
        q: "Do you write the content or just the strategy?",
        a: "Both, together with our content team. Briefs, production, expert review, and optimization run as one pipeline — strategy without execution is a PDF, and we don't sell PDFs.",
      },
      {
        q: "Can you work alongside our in-house SEO team?",
        a: "Yes. We frequently act as the strategy-and-firepower layer for in-house teams: they own the roadmap governance, we bring specialist depth, digital PR, and production capacity.",
      },
    ],
  },
  {
    slug: "content-creation",
    index: "05",
    title: "Content Creation",
    shortTitle: "Content",
    tagline:
      "Editorial, video, and design production systems that feed every channel — at enterprise quality and volume.",
    heroHeadline: "Content as a system, not a scramble.",
    heroLede:
      "Every channel you run is fed by content — ads need creative, SEO needs authority, sales needs assets. We build editorial and production systems that turn your expertise into a compounding content engine, at the quality your brand demands and the volume growth requires.",
    deliverables: [
      {
        title: "Content strategy & messaging",
        description:
          "Positioning-anchored narrative, audience messaging maps, and an editorial calendar tied to pipeline goals — the system every asset hangs from.",
      },
      {
        title: "Long-form editorial",
        description:
          "Research reports, thought leadership, and expert-driven articles that earn links, rankings, and citations — written with your subject-matter experts, not scraped from page one.",
      },
      {
        title: "Video & motion production",
        description:
          "Brand films, product explainers, and short-form social cut for each platform's native behavior — one shoot, a quarter of assets.",
      },
      {
        title: "Performance creative",
        description:
          "Ad-ready statics, UGC-style video, and landing page assets produced against the paid team's testing calendar.",
      },
      {
        title: "Design & brand systems",
        description:
          "Templates, guidelines, and asset libraries that keep output on-brand at volume — whether it ships from our team or yours.",
      },
      {
        title: "Distribution & atomization",
        description:
          "Every flagship asset atomized into channel-native derivatives — social, email, sales enablement — so nothing is published once and forgotten.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Message architecture",
        description:
          "We extract what your smartest people know and shape it into a narrative competitors can't copy.",
      },
      {
        step: "02",
        title: "Engine design",
        description:
          "Formats, cadence, workflows, and approval paths designed around your team's real capacity — so the system survives contact with reality.",
      },
      {
        step: "03",
        title: "Production at cadence",
        description:
          "Dedicated editorial and creative pods ship against the calendar, with senior review on every asset before it reaches you.",
      },
      {
        step: "04",
        title: "Measure & double down",
        description:
          "Content performance tracked to influenced pipeline; formats and topics that convert get more investment, the rest gets cut.",
      },
    ],
    outcomes: [
      { value: "40+", label: "Assets shipped per client per month" },
      { value: "+178%", label: "Average growth in content-sourced pipeline" },
      { value: "3.2x", label: "Engagement lift vs. clients' prior benchmarks" },
    ],
    caseStudySlug: "helixon",
    faqs: [
      {
        q: "How do you keep content in our brand voice?",
        a: "We build a voice and messaging system up front, train our editorial team on it, and run senior editorial review on every asset. Most clients stop making revisions within the first month.",
      },
      {
        q: "Do you use AI in your content production?",
        a: "As leverage, never as the author. AI accelerates research, variant generation, and atomization; strategy, expertise, and final craft are human. Everything ships through senior editors accountable for accuracy and originality.",
      },
      {
        q: "Can you handle regulated industries?",
        a: "Yes — healthcare, finance, and legal are a significant share of our editorial work. We build compliance review into the workflow and work comfortably with your legal and MLR processes.",
      },
      {
        q: "What volume can you sustain?",
        a: "Pods scale from roughly 15 to 60+ assets per month per client across formats. We'd rather start focused and scale with results than flood your channels with mediocrity.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
