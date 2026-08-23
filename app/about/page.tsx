import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import StatsBar from "@/components/StatsBar";
import { site } from "@/lib/site";
import officeHalls from "@/public/images/office-halls.jpg";
import boardroom from "@/public/images/boardroom.jpg";

export const metadata: Metadata = {
  title: "About",
  description:
    "Adverli is an enterprise growth agency built on a simple conviction: marketing should be engineered, measured, and accountable to revenue.",
};

const values = [
  {
    title: "Revenue is the brief",
    description:
      "Impressions, likes, and traffic are inputs. We plan, execute, and report against pipeline and revenue — the numbers that survive a board meeting.",
  },
  {
    title: "Seniority, not headcount",
    description:
      "The people who pitch you are the people who do the work. Small senior pods outperform large junior teams — and cost less in mistakes.",
  },
  {
    title: "Evidence over opinion",
    description:
      "Every recommendation comes with the data behind it. When we're wrong, the numbers say so fast — and we change course faster.",
  },
  {
    title: "Compounding by design",
    description:
      "Channels are engineered to feed each other. Creative learnings inform SEO. Search data informs ads. One engine, not five silos.",
  },
  {
    title: "Radical transparency",
    description:
      "You see what we see: live dashboards, full account access, and honest weekly reporting — including what didn't work.",
  },
  {
    title: "No lock-in, ever",
    description:
      "You own your accounts, your data, and your code. We keep clients by performing, not by holding infrastructure hostage.",
  },
];

const leadership = [
  { name: "Adrian Vance", role: "Founder & CEO" },
  { name: "Maya Castellanos", role: "Chief Strategy Officer" },
  { name: "James Okonkwo", role: "Head of Paid Media" },
  { name: "Elin Sørensen", role: "Head of Engineering" },
  { name: "Rachel Tan", role: "Head of Search" },
  { name: "Tomas Werner", role: "Executive Creative Director" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="dot-grid absolute inset-0 opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <Reveal>
            <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-lime" />
              About Adverli
            </p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-tight tracking-tight text-cream sm:text-6xl">
              We started Adverli because marketing had stopped being
              <span className="text-lime"> accountable.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Too many agencies sell activity — decks, dashboards, and
              deliverables — while revenue stays flat. We built the agency
              we&apos;d want to hire: senior operators, engineering rigor, and a
              single obsession with the metrics that fund payroll.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Our story" title="Built by operators, not account managers." />
            <Reveal delay={150} className="mt-10 hidden lg:block">
              <figure className="overflow-hidden rounded-2xl border border-line">
                <Image
                  src={officeHalls}
                  alt="Adverli's dark, modern office corridor"
                  placeholder="blur"
                  sizes="(min-width: 1024px) 38vw, 0px"
                  className="object-cover"
                />
              </figure>
            </Reveal>
          </div>
          <Reveal className="space-y-6 text-base leading-relaxed text-muted lg:col-span-7 lg:text-lg">
            <p>
              Adverli was founded by a team that spent a decade inside
              high-growth companies — running the budgets, owning the targets,
              and hiring the agencies. We saw the same pattern everywhere:
              great pitches, junior execution, and reporting engineered to hide
              the truth.
            </p>
            <p>
              So we built the inverse. Small senior pods with full-stack
              capability — engineering, media, search, and content under one
              roof — operating on weekly cycles and reporting against the
              client&apos;s revenue model, not the agency&apos;s slide
              template.
            </p>
            <p>
              Today we run growth programs for mid-market and enterprise
              organizations from {site.locations.join(", ")} — across SaaS,
              e-commerce, healthcare, financial services, and hospitality.
            </p>
          </Reveal>
        </div>
        <Reveal className="mt-20">
          <StatsBar />
        </Reveal>
      </section>

      {/* Values */}
      <section className="border-t border-line bg-surface/40">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeading
            eyebrow="Operating principles"
            title="The rules we don't break."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 100}>
                <div className="h-full rounded-2xl border border-line bg-surface p-8">
                  <span
                    aria-hidden
                    className="block h-1.5 w-1.5 rounded-full bg-lime"
                  />
                  <h3 className="mt-6 font-display text-lg font-medium tracking-tight text-cream">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {v.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <Reveal className="mb-20">
          <figure className="relative overflow-hidden rounded-3xl border border-line">
            <Image
              src={boardroom}
              alt="Glass-walled boardroom at golden hour"
              placeholder="blur"
              sizes="(min-width: 1280px) 1280px, 100vw"
              className="max-h-[26rem] w-full object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent"
            />
            <figcaption className="absolute bottom-6 left-8 max-w-md">
              <p className="font-display text-2xl font-medium tracking-tight text-cream">
                Three offices. One operating system.
              </p>
              <p className="mt-2 text-sm text-muted">
                {site.locations.join(" · ")} — every pod runs the same weekly
                cadence, the same reporting standard, the same bar.
              </p>
            </figcaption>
          </figure>
        </Reveal>
        <SectionHeading
          eyebrow="Leadership"
          title="Senior on day one. Senior in month twelve."
          lede="The team that scopes your engagement is the team that runs it — a principle, not a slogan."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.map((person, i) => (
            <Reveal key={person.name} delay={(i % 3) * 100}>
              <div className="flex items-center gap-5 rounded-2xl border border-line bg-surface p-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line-strong bg-surface-2 font-display text-base font-medium text-lime">
                  {person.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-display text-base font-medium tracking-tight text-cream">
                    {person.name}
                  </p>
                  <p className="mt-1 text-sm text-muted">{person.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
