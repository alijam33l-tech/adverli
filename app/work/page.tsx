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
    "Case studies from Adverli engagements — paid media, SEO, web development, and content programs measured in revenue, not impressions.",
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
              Numbers our clients take
              <br />
              to <span className="text-lime">the board.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Every engagement below is measured the same way we run it —
              against revenue, efficiency, and payback. Representative results
              from recent partnerships.
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
        title="Want numbers like these?"
        lede="Every engagement starts the same way — a strategy call and an honest audit of where your funnel is leaking revenue."
      />
    </>
  );
}
