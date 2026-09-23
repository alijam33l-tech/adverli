import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { caseStudies } from "@/lib/case-studies";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";
import skyline from "@/public/images/skyline.jpg";

export const metadata: Metadata = {
  title: "Work",
  description: `Selected ${site.name} projects and representative growth scenarios across paid media, SEO, website development, and content.`,
};

export default function WorkPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <Image
          src={skyline}
          alt=""
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          className="object-cover opacity-25"
          aria-hidden
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <Reveal>
            <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-lime" />
              Work and growth scenarios
            </p>
            <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-tight tracking-tight text-cream sm:text-6xl">
              See how the work and thinking
              <br />
              <span className="text-lime">comes together.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Explore selected {site.name} projects alongside representative
              growth challenges that show how we approach strategy,
              execution, and measurement.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <SectionHeading
          eyebrow="Selected projects"
          title="Businesses we have worked with."
          lede={`A selection of businesses ${site.name} has worked with.`}
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => (
            <Reveal key={project} delay={(i % 4) * 80}>
              <article className="flex h-full min-h-40 items-end rounded-2xl border border-line bg-surface p-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-lime">
                    Selected project
                  </p>
                  <h2 className="mt-3 font-display text-xl font-medium tracking-tight text-cream">
                    {project}
                  </h2>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-surface/40">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeading
            eyebrow="Growth scenarios"
            title="How we solve growth problems."
            lede={`Representative challenges that demonstrate ${site.name}'s strategic approach, methodology, and cross-channel capabilities.`}
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) * 100}>
                <CaseStudyCard study={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want an approach built around your goals?"
        lede="Start with a focused conversation about the outcome, the current constraint, and the evidence available."
        secondaryHref="/services"
        secondaryLabel="Explore services"
      />
    </>
  );
}
