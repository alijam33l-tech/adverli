import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import StatsBar from "@/components/StatsBar";
import officeHalls from "@/public/images/office-halls.jpg";
import boardroom from "@/public/images/boardroom.jpg";

export const metadata: Metadata = {
  title: "About",
  description:
    "Adverli connects strategy and execution across website development, paid media, SEO, and content.",
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
      "The people who scope the work stay close to delivery, keeping decisions faster and context intact.",
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
    title: "Clear reporting",
    description:
      "Reporting should show what changed, what the evidence says, and which decision comes next — including what did not work.",
  },
  {
    title: "No lock-in, ever",
    description:
      "You retain control of your accounts, data, and code. Our job is to strengthen your operating setup, not lock you in.",
  },
];

const engagementTeam = [
  { name: "Growth Strategy", role: "Priorities, commercial model, and decisions" },
  { name: "Paid Media", role: "Meta and Google campaign execution" },
  { name: "Web Development", role: "Experience, engineering, and conversion paths" },
  { name: "SEO", role: "Technical foundations and search demand" },
  { name: "Content Creation", role: "Messaging, creative, and production" },
  { name: "Measurement", role: "Signal quality, reporting, and learning" },
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
              Marketing should be
              <span className="text-lime"> accountable.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Adverli connects strategy and execution around qualified demand,
              efficient acquisition, and sustainable revenue.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Our approach"
              title="Strategy stays close to execution."
            />
            <Reveal delay={150} className="mt-10 hidden lg:block">
              <figure className="overflow-hidden rounded-2xl border border-line">
                <Image
                  src={officeHalls}
                  alt="Modern office corridor"
                  placeholder="blur"
                  sizes="(min-width: 1024px) 38vw, 0px"
                  className="object-cover"
                />
              </figure>
            </Reveal>
          </div>
          <Reveal className="space-y-6 text-base leading-relaxed text-muted lg:col-span-7 lg:text-lg">
            <p>
              Adverli was built around a simple operating idea: the people
              setting strategy should stay close to execution, budgets, and
              results.
            </p>
            <p>
              Website development, paid media, search, and content are planned
              together. That reduces handoffs, keeps channel decisions in
              context, and makes ownership clear.
            </p>
            <p>
              The work starts with the business goal and the available data.
              From there, we build a practical plan, define how progress will
              be judged, and focus effort on the constraint that matters most.
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
                One team. One operating system.
              </p>
              <p className="mt-2 text-sm text-muted">
                Every engagement follows a clear cadence, reporting standard,
                and decision process.
              </p>
            </figcaption>
          </figure>
        </Reveal>
        <SectionHeading
          eyebrow="Engagement team"
          title="The right disciplines around one brief."
          lede="Scope determines which specialists are involved. Strategy, execution, and measurement stay connected throughout the work."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {engagementTeam.map((discipline, i) => (
            <Reveal key={discipline.name} delay={(i % 3) * 100}>
              <div className="flex items-center gap-5 rounded-2xl border border-line bg-surface p-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line-strong bg-surface-2 font-display text-base font-medium text-lime">
                  {discipline.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-display text-base font-medium tracking-tight text-cream">
                    {discipline.name}
                  </p>
                  <p className="mt-1 text-sm text-muted">{discipline.role}</p>
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
