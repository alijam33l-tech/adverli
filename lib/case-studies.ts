export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  services: string[];
  headline: string;
  summary: string;
  metrics: { value: string; label: string }[];
  gradient: string;
  series: number[];
  seriesLabel: string;
  featured?: boolean;
};

// These are explicitly illustrative engagement scenarios, not client work or
// performance claims. The chart series represents workflow progression only.
export const caseStudies: CaseStudy[] = [
  {
    slug: "paid-social-demand",
    title: "Build a clearer path to direct demand",
    industry: "Hospitality",
    services: ["Meta Ads", "Google Ads"],
    headline: "Align creative, media, and landing pages around direct bookings.",
    summary:
      "A sample approach for a multi-location brand that wants to rely less on third-party demand. The work connects campaign intent, offer framing, landing pages, and measurement before budgets expand.",
    metrics: [
      { value: "Direct", label: "Booking path" },
      { value: "Intent", label: "Campaign structure" },
      { value: "Signal", label: "Measurement" },
    ],
    gradient: "from-lime/30 via-emerald-500/10 to-transparent",
    series: [1, 1.15, 1.35, 1.55, 1.8, 2.05, 2.3, 2.55, 2.8, 3.1, 3.4, 3.7],
    seriesLabel: "Illustrative workflow progression — not client data",
    featured: true,
  },
  {
    slug: "website-conversion",
    title: "Turn product interest into a clearer next step",
    industry: "B2B",
    services: ["Website Development", "SEO"],
    headline: "Rebuild the website around speed, clarity, and qualified conversion.",
    summary:
      "A sample replatforming approach for a complex offer. The work starts with user journeys and measurement, then connects information architecture, performance, search continuity, and a maintainable publishing system.",
    metrics: [
      { value: "Fast", label: "Performance" },
      { value: "Clear", label: "Conversion paths" },
      { value: "Owned", label: "Maintainable handoff" },
    ],
    gradient: "from-sky-400/25 via-lime/10 to-transparent",
    series: [1, 1.1, 1.25, 1.45, 1.7, 1.95, 2.2, 2.45, 2.7, 3, 3.35, 3.7],
    seriesLabel: "Illustrative workflow progression — not client data",
    featured: true,
  },
  {
    slug: "organic-authority",
    title: "Make expert information easier to find and trust",
    industry: "Regulated services",
    services: ["SEO", "Content Creation"],
    headline: "Connect technical SEO with expert-reviewed content and clear measurement.",
    summary:
      "A sample approach for an organization with deep expertise but limited non-brand visibility. Technical foundations come first, followed by useful topic coverage, review workflows, and reporting tied to qualified demand.",
    metrics: [
      { value: "Find", label: "Discoverability" },
      { value: "Trust", label: "Expert review" },
      { value: "Measure", label: "Demand quality" },
    ],
    gradient: "from-teal-400/25 via-sky-500/10 to-transparent",
    series: [1, 1.12, 1.28, 1.48, 1.72, 1.98, 2.25, 2.5, 2.78, 3.08, 3.38, 3.7],
    seriesLabel: "Illustrative workflow progression — not client data",
    featured: true,
  },
  {
    slug: "paid-search-efficiency",
    title: "Make paid search easier to control",
    industry: "B2B services",
    services: ["Google Ads"],
    headline: "Structure campaigns around intent, qualified demand, and spend discipline.",
    summary:
      "A sample approach for an account with fragmented campaigns and weak conversion feedback. The work connects search intent, account structure, CRM signals, and a practical optimization cadence.",
    metrics: [
      { value: "Intent", label: "Account structure" },
      { value: "Signal", label: "Lead quality" },
      { value: "Control", label: "Spend discipline" },
    ],
    gradient: "from-amber-300/20 via-lime/10 to-transparent",
    series: [1, 1.18, 1.38, 1.62, 1.88, 2.12, 2.38, 2.65, 2.9, 3.18, 3.45, 3.7],
    seriesLabel: "Illustrative workflow progression — not client data",
  },
  {
    slug: "content-system",
    title: "Turn expertise into a usable content system",
    industry: "Expert-led business",
    services: ["Content Creation", "SEO"],
    headline: "Create a repeatable path from subject-matter insight to useful content.",
    summary:
      "A sample approach for a team with strong expertise and inconsistent output. Messaging, review, production, distribution, and measurement are designed as one practical workflow.",
    metrics: [
      { value: "Message", label: "Editorial focus" },
      { value: "Cadence", label: "Production flow" },
      { value: "Reuse", label: "Distribution" },
    ],
    gradient: "from-violet-400/25 via-lime/10 to-transparent",
    series: [1, 1.08, 1.24, 1.45, 1.68, 1.95, 2.22, 2.5, 2.78, 3.08, 3.4, 3.7],
    seriesLabel: "Illustrative workflow progression — not client data",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((scenario) => scenario.slug === slug);
}
