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
      "Fast, maintainable websites built around clear customer journeys and commercial goals.",
    heroHeadline: "Websites built like revenue infrastructure.",
    heroLede:
      "Your website is the channel you control. We design and build around speed, search visibility, clear conversion paths, and a publishing system your team can maintain.",
    deliverables: [
      {
        title: "Conversion-first UX & design",
        description:
          "Pages are architected around a clear job: qualify, persuade, or convert. When analytics and session data are available, they inform the journey before visual design is finalized.",
      },
      {
        title: "Modern engineering",
        description:
          "Next.js and headless architectures with clean, documented codebases your internal team can own, without page-builder lock-in or unnecessary plugin debt.",
      },
      {
        title: "Core Web Vitals performance",
        description:
          "Performance budgets, image strategy, and front-end checks are built into delivery so speed is managed throughout the project.",
      },
      {
        title: "Headless CMS integration",
        description:
          "Marketing teams ship landing pages and content without engineering tickets. Structured content models built for reuse across channels.",
      },
      {
        title: "Analytics & tracking foundation",
        description:
          "Server-side tagging, clean event schemas, and consent-aware measurement create a stronger data foundation for later channel decisions.",
      },
      {
        title: "Security & compliance",
        description:
          "Accessibility, permissions, privacy, and security requirements are defined early and tested against the needs of the project.",
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
          "Component-driven development in a clear delivery cadence, with performance and accessibility checks built into QA.",
      },
      {
        step: "04",
        title: "Launch & optimize",
        description:
          "A planned migration with redirect, analytics, and search checks, followed by focused improvement on the pages that matter most.",
      },
    ],
    outcomes: [
      { value: "Fast", label: "Performance-minded builds" },
      { value: "Clear", label: "Conversion paths" },
      { value: "Owned", label: "Maintainable handoff" },
    ],
    caseStudySlug: "website-conversion",
    faqs: [
      {
        q: "What platforms do you build on?",
        a: "Primarily Next.js with a headless CMS (Sanity, Contentful, or Storyblok) for marketing sites, and Shopify Plus for commerce. We recommend based on your team's capabilities, not our preferences.",
      },
      {
        q: "How long does a website build take?",
        a: "Timing depends on page count, content readiness, integrations, and review cycles. We define the delivery plan during scoping and phase work when earlier releases create useful value.",
      },
      {
        q: "Will a rebuild hurt our SEO?",
        a: "A poorly managed migration can. We plan URL mapping and redirects, preserve relevant content signals, and compare crawls before and after launch so issues are found quickly.",
      },
      {
        q: "Can our internal team maintain the site afterward?",
        a: "That's the goal. You get documented code, a component library, CMS training, and optional ongoing support. No agency lock-in by design.",
      },
    ],
  },
  {
    slug: "meta-ads",
    index: "02",
    title: "Meta Ads",
    shortTitle: "Meta Ads",
    tagline:
      "Full-funnel Facebook and Instagram programs built around structured creative testing and clean signal.",
    heroHeadline: "Meta ads that scale on creative, not luck.",
    heroLede:
      "As Meta automates more targeting, creative quality and conversion signal matter even more. We connect testing, campaign structure, landing pages, and measurement so budget decisions rest on useful evidence.",
    deliverables: [
      {
        title: "Creative strategy & production",
        description:
          "Concept-led ad creative — UGC, motion, static — produced against a testing calendar, not ad-hoc. Every asset exists to answer a hypothesis.",
      },
      {
        title: "Structured creative testing",
        description:
          "A structured test-learn-scale cadence isolating hooks, formats, and angles, so winners are identified by evidence instead of opinion.",
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
          "Reporting that compares platform-claimed revenue with broader business evidence, giving scaling decisions a more complete measurement view.",
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
          "An angle map, testing calendar, and production workflow give each creative idea a clear reason to exist and a fair test.",
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
      { value: "Test", label: "Structured creative learning" },
      { value: "Signal", label: "Cleaner conversion data" },
      { value: "Scale", label: "Budget discipline" },
    ],
    caseStudySlug: "paid-social-demand",
    faqs: [
      {
        q: "What monthly ad spend do you manage?",
        a: "The useful budget depends on audience size, conversion volume, creative capacity, and the cost of a meaningful test. We review those inputs before recommending a scope.",
      },
      {
        q: "Do you produce the ad creative or just run media?",
        a: "Both. Media buying informs what to make next, while creative determines whether media can scale. Creative and media stay connected in one operating loop.",
      },
      {
        q: "How do you handle iOS-era measurement?",
        a: "Server-side Conversions API, first-party data enrichment, and triangulation between platform metrics, MER, and incrementality checks provide a more complete basis for optimization than platform reporting alone.",
      },
      {
        q: "How fast can Meta campaigns scale?",
        a: "There is no responsible fixed rate. We increase investment when conversion signal, creative durability, and unit economics support it, then watch for efficiency changes before moving again.",
      },
    ],
  },
  {
    slug: "google-ads",
    index: "03",
    title: "Google Ads",
    shortTitle: "Google Ads",
    tagline:
      "Search, Shopping, Performance Max, and YouTube programs built around intent, value, and spend control.",
    heroHeadline: "Own the moment of intent.",
    heroLede:
      "Google is where demand goes to convert. We build full-account architectures across Search, Performance Max, Shopping, and YouTube — aligned around value-based bidding and clean conversion data rather than click volume alone.",
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
          "Feed titles, attributes, and supplemental data are reviewed continuously because product data can be one of the most valuable inputs in retail accounts.",
      },
      {
        title: "YouTube & Demand Gen",
        description:
          "Upper-funnel programs measured on incremental search lift and brand demand, not last-click fictions.",
      },
      {
        title: "Query & waste elimination",
        description:
          "Systematic negative-keyword, placement, and query review keeps spend focused on demand the business can serve.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Forensic account audit",
        description:
          "A structured review of account setup, bidding, query paths, creative, landing pages, and measurement establishes the baseline before changes begin.",
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
          "Regular optimization cycles, then expansion into new campaign types, markets, and audiences as efficiency targets hold.",
      },
    ],
    outcomes: [
      { value: "Intent", label: "Account structure" },
      { value: "Signal", label: "Conversion quality" },
      { value: "Control", label: "Spend discipline" },
    ],
    caseStudySlug: "paid-search-efficiency",
    faqs: [
      {
        q: "We already run Google Ads. Why bring in an agency?",
        a: "An outside review can expose query mismatch, weak conversion definitions, fragmented structure, or reporting gaps. We start by identifying whether the account has a material problem worth solving.",
      },
      {
        q: "What's your position on Performance Max?",
        a: "Powerful, but only with guardrails. We run PMax alongside exact-intent Search with brand exclusions, strong asset groups, and channel-level reporting — never as an unaccountable catch-all.",
      },
      {
        q: "Do you work with B2B lead-gen accounts?",
        a: "Yes. We can import CRM stages back into Google as offline conversions, so bidding can optimize toward qualified pipeline and closed revenue instead of raw form fills.",
      },
      {
        q: "Will performance dip during a restructure?",
        a: "Any restructure can affect learning and delivery. We phase changes, preserve useful history where possible, and agree on monitoring and rollback points before migration.",
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
    heroHeadline: "Organic growth built to compound over time.",
    heroLede:
      "Paid media stops when investment stops; useful search visibility can keep working. We connect technical foundations, content, and authority for traditional search and AI-assisted discovery.",
    deliverables: [
      {
        title: "Technical SEO foundations",
        description:
          "Crawl efficiency, index management, rendering, site speed, and structured data sized to the complexity of the site.",
      },
      {
        title: "Search-led content strategy",
        description:
          "Entity-based topic architecture mapped to revenue intent — not keyword lists. Every brief specifies what winning the query requires.",
      },
      {
        title: "On-page SEO & authority",
        description:
          "Internal linking, expert input, and well-sourced content strengthen topical authority and make important pages easier to understand and discover.",
      },
      {
        title: "AI search optimization",
        description:
          "AEO and GEO practices, structured content, and clear entity signals that support visibility across traditional search and AI-assisted discovery.",
      },
      {
        title: "Migration & platform support",
        description:
          "SEO ownership through replatforms, redesigns, migrations, and multi-market expansion — the moments where organic visibility is most exposed.",
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
          "A publishing and optimization cadence focused on the topic clusters with the clearest commercial relevance.",
      },
      {
        step: "04",
        title: "Compound & defend",
        description:
          "Refresh cycles, decay monitoring, and SERP-feature capture that protect rankings as competitors and algorithms move.",
      },
    ],
    outcomes: [
      { value: "Find", label: "Technical discoverability" },
      { value: "Earn", label: "Useful search visibility" },
      { value: "Measure", label: "Pipeline contribution" },
    ],
    caseStudySlug: "organic-authority",
    faqs: [
      {
        q: "How long until SEO shows results?",
        a: "Timing depends on the technical starting point, competition, authority, and publishing pace. We define leading indicators early, but do not promise a ranking or revenue date the evidence cannot support.",
      },
      {
        q: "Is SEO still worth it with AI answers taking clicks?",
        a: "Search behavior is changing, but people still need reliable information before they choose. Technical access, clear entities, useful content, and credible sourcing support visibility in both traditional and AI-assisted search.",
      },
      {
        q: "Do you write the content or just the strategy?",
        a: "Both. Briefs, production, expert review, and optimization can run as one connected workflow, keeping strategy close to execution.",
      },
      {
        q: "Can you work alongside our in-house SEO team?",
        a: "Yes. Responsibilities can be divided around your team's strengths, with clear ownership for the roadmap, technical work, content, authority, and reporting.",
      },
    ],
  },
  {
    slug: "content-creation",
    index: "05",
    title: "Content Creation",
    shortTitle: "Content",
    tagline:
      "Editorial, video, and design systems that turn expertise into useful work for every channel.",
    heroHeadline: "Content as a system, not a scramble.",
    heroLede:
      "Content supports paid media, search, sales, and social. We build editorial and production systems that turn your expertise into useful work at the quality your brand demands and a cadence the growth plan can sustain.",
    deliverables: [
      {
        title: "Content strategy & messaging",
        description:
          "Positioning-anchored narrative, audience messaging maps, and an editorial calendar tied to pipeline goals — the system every asset hangs from.",
      },
      {
        title: "Long-form editorial",
        description:
          "Research reports, thought leadership, and expert-driven articles designed to support discovery, authority, and citations — developed with your subject-matter experts, not scraped from page one.",
      },
      {
        title: "Video & motion production",
        description:
          "Brand films, product explainers, and short-form social content planned for the way each channel is actually used.",
      },
      {
        title: "Performance creative",
        description:
          "Ad-ready statics, UGC-style video, and landing page assets produced against the paid team's testing calendar.",
      },
      {
        title: "Design & brand systems",
        description:
          "Templates, guidelines, and asset libraries that keep output on-brand at a consistent standard — whether it ships from our team or yours.",
      },
      {
        title: "Distribution & atomization",
        description:
          "Flagship assets can be adapted into channel-native derivatives across social, email, and sales enablement, extending the value of the original work.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Message architecture",
        description:
          "We extract what your subject-matter experts know and shape it into a narrative grounded in the business's distinct perspective.",
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
          "Editorial and creative specialists work to an agreed calendar, with senior review at the stages that matter most.",
      },
      {
        step: "04",
        title: "Measure & double down",
        description:
          "Content performance tracked to influenced pipeline; formats and topics that convert get more investment, the rest gets cut.",
      },
    ],
    outcomes: [
      { value: "Plan", label: "Clear editorial priorities" },
      { value: "Create", label: "Consistent production" },
      { value: "Learn", label: "Measured performance" },
    ],
    caseStudySlug: "content-system",
    faqs: [
      {
        q: "How do you keep content in our brand voice?",
        a: "We document voice and messaging up front, use approved examples, and keep a clear review loop with the people responsible for the brand.",
      },
      {
        q: "Do you use AI in your content production?",
        a: "AI can be a production aid for research, variants, and repurposing. Strategy, source judgment, subject-matter input, and final editorial accountability remain human.",
      },
      {
        q: "Can you handle regulated industries?",
        a: "The workflow can include legal, compliance, and subject-matter review. Scope and approval paths are defined before production begins.",
      },
      {
        q: "What volume can you sustain?",
        a: "Volume depends on format, research depth, review capacity, and distribution needs. We start with a cadence the team can sustain, then expand only when the workflow and evidence support it.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
