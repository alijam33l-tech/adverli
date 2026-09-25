import type { Metadata } from "next";
import {
  ConnectedOperatingSystem,
  DeliverySystem,
  OperatingPrinciples,
  ValueSpine,
} from "@/components/AboutLowerSystems";
import {
  AboutOperatingView,
  StrategyExecutionView,
} from "@/components/AboutSystems";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { createPageMetadata, site } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description: `${site.name} connects strategy and execution across website development, paid media, SEO, and content.`,
  path: "/about",
});

const values = [
  {
    title: "Revenue is the brief",
    description:
      "Impressions, likes, and traffic are inputs. We plan, execute, and report against pipeline and revenue — the numbers that survive a board meeting.",
  },
  {
    title: "Senior involvement",
    description:
      "Senior direction stays close to delivery, keeping decisions faster and commercial context intact.",
  },
  {
    title: "Evidence over opinion",
    description:
      "Recommendations are grounded in the best available data. When the evidence changes, the work changes with it.",
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

const deliveryModel = [
  {
    name: "Senior involvement",
    role: "Strategy and key decisions stay close to experienced direction.",
  },
  {
    name: "Connected expertise",
    role: "Web, media, SEO, content, and measurement share one brief.",
  },
  {
    name: "Market context",
    role: "Plans adapt to the audience, competition, and buying environment.",
  },
  {
    name: "Flexible structure",
    role: "Delivery is shaped around scope, goals, growth stage, and channel mix.",
  },
  {
    name: "Clear ownership",
    role: "Priorities, responsibilities, and decision points stay visible.",
  },
  {
    name: "Practical execution",
    role: "Strategy stays connected to the work required to move it forward.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="dot-grid absolute inset-0 opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid min-w-0 items-center gap-14 lg:grid-cols-12 lg:gap-12 xl:gap-16">
            <Reveal initiallyVisible className="min-w-0 lg:col-span-6">
              <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-lime" />
                About {site.name}
              </p>
              <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-tight tracking-tight text-cream sm:text-6xl">
                Marketing should be
                <span className="text-lime"> accountable.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                {site.positioning}
              </p>
            </Reveal>
            <Reveal
              initiallyVisible
              delay={120}
              className="min-w-0 lg:col-span-6"
            >
              <AboutOperatingView />
            </Reveal>
          </div>
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
            <Reveal delay={150} className="mt-10">
              <StrategyExecutionView />
            </Reveal>
          </div>
          <Reveal className="space-y-6 text-base leading-relaxed text-muted lg:col-span-7 lg:text-lg">
            <p>
              {site.name} was built around a simple operating idea: the people
              setting strategy should stay close to execution, budgets, and
              results.
            </p>
            <p>
              A multidisciplinary team plans website development, paid media,
              search, content, and measurement together. That reduces
              handoffs, keeps channel decisions in context, and makes ownership
              clear across markets.
            </p>
            <p>
              The work starts with the business goal and the available data.
              From there, we build a practical plan, define how progress will
              be judged, and focus effort on the constraint that matters most.
            </p>
          </Reveal>
        </div>
        <Reveal className="mt-20">
          <ValueSpine />
        </Reveal>
      </section>

      {/* Values */}
      <section className="border-t border-line bg-surface/40">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeading
            eyebrow="Operating principles"
            title="How we operate."
          />
          <Reveal>
            <OperatingPrinciples principles={values} />
          </Reveal>
        </div>
      </section>

      {/* Delivery model */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <Reveal className="mb-20">
          <ConnectedOperatingSystem />
        </Reveal>
        <SectionHeading
          eyebrow="Delivery model"
          title="Multidisciplinary expertise around one brief."
          lede="The team and workflow adapt to scope, goals, market, growth stage, complexity, and channel mix while senior direction stays close to the work."
        />
        <Reveal>
          <DeliverySystem principles={deliveryModel} />
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
