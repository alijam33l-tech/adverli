import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { caseStudies } from "@/lib/case-studies";
import skyline from "@/public/images/skyline.jpg";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Illustrative growth scenarios across paid media, SEO, website development, and content.",
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
              Selected work
            </p>
            <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-tight tracking-tight text-cream sm:text-6xl">
              See how the work
              <br />
              <span className="text-lime">comes together.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              These scenarios show how we approach common growth problems.
              They are illustrative, not client case studies or performance
              claims.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 3) * 100}>
              <CaseStudyCard study={c} />
            </Reveal>
          ))}
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
