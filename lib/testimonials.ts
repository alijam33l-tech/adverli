export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Adverli is the first agency that reported to our board's numbers instead of their own. They found $1.1M of wasted spend in the audit — before we'd signed anything.",
    name: "Daniel Okafor",
    role: "VP of Marketing",
    company: "Meridian Freight",
  },
  {
    quote:
      "We'd been through three agencies in four years. The difference here is seniority — the people in the room on day one are the people doing the work in month six.",
    name: "Sarah Lindqvist",
    role: "Chief Marketing Officer",
    company: "Bluepine Hotels",
  },
  {
    quote:
      "The site rebuild paid for itself in a quarter. Demo conversions doubled, and for the first time our marketing team ships landing pages without waiting on engineering.",
    name: "Priya Raman",
    role: "Head of Growth",
    company: "Trellis Systems",
  },
  {
    quote:
      "They turned our clinicians' expertise into the most-cited content in our category. Organic is now our largest acquisition channel — ahead of paid.",
    name: "Marcus Bell",
    role: "Chief Digital Officer",
    company: "Arcadia Health",
  },
];
