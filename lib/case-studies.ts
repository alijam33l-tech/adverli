export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  services: string[];
  headline: string;
  summary: string;
  metrics: { value: string; label: string }[];
  gradient: string; // tailwind classes for the card's abstract visual
  // 12-month engagement trend, indexed to month 1 = 100
  series: number[];
  seriesLabel: string;
  featured?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "bluepine-hotels",
    client: "Bluepine Hotels",
    industry: "Hospitality",
    services: ["Meta Ads", "Google Ads"],
    headline: "+312% direct booking revenue in two quarters",
    summary:
      "A 40-property hotel group bleeding margin to OTAs. We rebuilt their paid media around direct-booking economics — full-funnel Meta creative, value-based Search bidding, and message-matched landing pages per property tier.",
    metrics: [
      { value: "+312%", label: "Direct booking revenue" },
      { value: "5.4x", label: "Blended ROAS" },
      { value: "-38%", label: "Cost per booking" },
    ],
    gradient: "from-lime/30 via-emerald-500/10 to-transparent",
    series: [100, 96, 118, 141, 168, 214, 259, 287, 246, 298, 361, 412],
    seriesLabel: "Direct booking revenue — indexed, month 1 = 100",
    featured: true,
  },
  {
    slug: "trellis-systems",
    client: "Trellis Systems",
    industry: "B2B SaaS",
    services: ["Website Development", "SEO"],
    headline: "0.8s loads and 2.1x demo conversions after replatform",
    summary:
      "A Series-C data platform stuck on a slow legacy site. We rebuilt on Next.js with a headless CMS, preserved 100% of organic equity through migration, and re-architected every page around the demo request.",
    metrics: [
      { value: "2.1x", label: "Demo conversion rate" },
      { value: "0.8s", label: "Median page load" },
      { value: "+64%", label: "Organic traffic, 6 months post-launch" },
    ],
    gradient: "from-sky-400/25 via-lime/10 to-transparent",
    series: [100, 103, 98, 107, 141, 176, 189, 183, 196, 204, 199, 210],
    seriesLabel: "Demo conversions — indexed, month 1 = 100",
    featured: true,
  },
  {
    slug: "arcadia-health",
    client: "Arcadia Health",
    industry: "Healthcare",
    services: ["SEO", "Content Creation"],
    headline: "+248% organic patient acquisition in 12 months",
    summary:
      "A multi-state healthcare network invisible outside branded search. We fixed a crippled technical foundation, built condition-led topic clusters with clinician review, and earned coverage in national health media.",
    metrics: [
      { value: "+248%", label: "Organic patient acquisition" },
      { value: "1,900+", label: "New page-one keywords" },
      { value: "11:1", label: "Organic ROI by month 12" },
    ],
    gradient: "from-teal-400/25 via-sky-500/10 to-transparent",
    series: [100, 104, 111, 122, 138, 151, 177, 203, 241, 273, 312, 348],
    seriesLabel: "Organic patient acquisition — indexed, month 1 = 100",
    featured: true,
  },
  {
    slug: "meridian-freight",
    client: "Meridian Freight",
    industry: "Logistics",
    services: ["Google Ads"],
    headline: "-47% cost per qualified lead on $340k monthly spend",
    summary:
      "An enterprise logistics provider whose Google account had grown into 400 campaigns of sprawl. We restructured to an intent-led architecture, wired CRM stages back in as offline conversions, and let value-based bidding chase pipeline instead of form fills.",
    metrics: [
      { value: "-47%", label: "Cost per qualified lead" },
      { value: "+83%", label: "SQL volume at flat budget" },
      { value: "$1.1M", label: "Annual wasted spend eliminated" },
    ],
    gradient: "from-amber-300/20 via-lime/10 to-transparent",
    series: [100, 97, 99, 88, 79, 71, 66, 61, 58, 56, 54, 53],
    seriesLabel: "Cost per qualified lead — indexed, month 1 = 100",
  },
  {
    slug: "helixon",
    client: "Helixon",
    industry: "Fintech",
    services: ["Content Creation", "SEO"],
    headline: "From zero to category authority in nine months",
    summary:
      "A payments infrastructure scale-up with deep expertise and no voice. We built their content engine — a flagship industry report, weekly expert editorial, and full atomization across channels — turning founder knowledge into inbound pipeline.",
    metrics: [
      { value: "+178%", label: "Content-sourced pipeline" },
      { value: "45", label: "Assets shipped per month" },
      { value: "120+", label: "Earned media citations" },
    ],
    gradient: "from-violet-400/25 via-lime/10 to-transparent",
    series: [100, 100, 108, 124, 131, 158, 187, 216, 234, 251, 264, 278],
    seriesLabel: "Content-sourced pipeline — indexed, month 1 = 100",
  },
  {
    slug: "vaultline",
    client: "Vaultline",
    industry: "E-commerce",
    services: ["Meta Ads", "Website Development"],
    headline: "Scaled from $2M to $9M annual revenue at 4.1x MER",
    summary:
      "A premium DTC security-hardware brand hitting a ceiling at $2M. We rebuilt the store for speed and conversion, then scaled Meta with a 12-creatives-a-month testing engine and consolidated campaign structure.",
    metrics: [
      { value: "4.5x", label: "Revenue growth in 18 months" },
      { value: "4.1x", label: "Marketing efficiency ratio" },
      { value: "+71%", label: "Site conversion rate" },
    ],
    gradient: "from-rose-400/20 via-amber-300/10 to-transparent",
    series: [100, 109, 127, 122, 148, 173, 208, 246, 289, 344, 401, 452],
    seriesLabel: "Monthly revenue — indexed, month 1 = 100",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
