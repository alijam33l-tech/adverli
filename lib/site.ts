import type { Metadata } from "next";

const tagline = {
  lead: "Growth,",
  accent: "engineered.",
} as const;

const domain = "www.adverli.com";
const email = "hello@adverli.com";
const phone = "816-793-8577";

export const site = {
  name: "Adverli",
  tagline: `${tagline.lead} ${tagline.accent}`,
  taglineParts: tagline,
  positioning:
    "A digital growth agency helping ambitious businesses build, market, and scale across global markets.",
  description:
    "Adverli helps ambitious businesses build, market, and scale across global markets through website development, paid media, SEO, and content.",
  domain,
  url: `https://${domain}`,
  email,
  emailHref: `mailto:${email}`,
  phone,
  phoneHref: "tel:+18167938577",
};

export function absoluteUrl(path = "/") {
  return new URL(path, `${site.url}/`).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonical = absoluteUrl(path);
  const socialTitle = `${title} — ${site.name}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: socialTitle,
      description,
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  {
    value: "Revenue-led",
    label: "Strategy and reporting tied to business outcomes",
  },
  {
    value: "Senior-led",
    label: "Direct access to the people responsible for the work",
  },
  {
    value: "Integrated",
    label: "Web, media, search, and content working together",
  },
  {
    value: "Transparent",
    label: "Clear priorities, ownership, and reporting",
  },
];

export const capabilities = [
  "Website Development",
  "Meta Ads",
  "Google Ads",
  "SEO",
  "Content Creation",
];

export const process = [
  {
    step: "01",
    title: "Diagnose",
    description:
      "We review the funnel, analytics, media, site performance, and market context to find the most important constraint.",
  },
  {
    step: "02",
    title: "Architect",
    description:
      "We turn the diagnosis into a practical plan with priorities, owners, measurement, and a clear sequence of work.",
  },
  {
    step: "03",
    title: "Execute",
    description:
      "The people responsible for strategy stay close to the build, campaigns, content, and decisions that move the work forward.",
  },
  {
    step: "04",
    title: "Compound",
    description:
      "Results inform the next decision. Investment moves toward what works, weak ideas are cut, and reporting stays focused on the business.",
  },
];

export const generalFaqs = [
  {
    q: "What size of company do you work with?",
    a: "We work best with teams that have a clear growth goal, decision-maker access, and enough operating capacity to act on the work. The right scope depends on the problem, not a company-size label.",
  },
  {
    q: "Do you work on retainers or projects?",
    a: "Engagements are tailored to scope, goals, market, growth stage, complexity, and channel mix. Work may be structured as a focused project or an ongoing engagement based on what the situation requires.",
  },
  {
    q: "How quickly will we see results?",
    a: "Timing depends on the channel, starting point, and quality of the data. We define leading indicators and decision points up front, then report progress without promising a result before the evidence supports it.",
  },
  {
    q: "Who will actually work on our account?",
    a: "Your scope identifies the responsible lead and the specialists involved. You have direct access to the people making recommendations and doing the work.",
  },
];
