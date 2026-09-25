import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import LineChart from "@/components/charts/LineChart";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import ServiceHeroVisual from "@/components/ServiceHeroVisual";
import SectionHeading from "@/components/SectionHeading";
import { getCaseStudy } from "@/lib/case-studies";
import { getService, services } from "@/lib/services";
import { createPageMetadata } from "@/lib/site";
import { createServiceStructuredData } from "@/lib/structured-data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return createPageMetadata({
    title: service.title,
    description: service.tagline,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const study = getCaseStudy(service.caseStudySlug);
  const others = services.filter((s) => s.slug !== service.slug);
  const structuredData = createServiceStructuredData(service);

  return (
    <>
      <JsonLd data={structuredData} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="dot-grid absolute inset-0 opacity-30" aria-hidden />
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 h-80 w-80 translate-x-1/3 -translate-y-1/3 rounded-full bg-lime/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10 xl:gap-16">
            <Reveal initiallyVisible className="lg:col-span-7">
              <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted">
                <span className="font-display text-lime">{service.index}</span>
                <span aria-hidden>/</span>
                {service.title}
              </p>
              <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-tight tracking-tight text-cream sm:text-6xl">
                {service.heroHeadline}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                {service.heroLede}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/contact">Book a strategy call</Button>
                <Button href="/work" variant="ghost">
                  Explore our approach
                </Button>
              </div>
            </Reveal>
            <Reveal
              initiallyVisible
              delay={160}
              className="min-w-0 lg:col-span-5"
            >
              <ServiceHeroVisual
                slug={service.slug}
                index={service.index}
                title={service.title}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Outcomes strip */}
      <section className="border-b border-line bg-surface/40">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden px-6 py-0 sm:grid-cols-3 lg:px-8">
          {service.outcomes.map((o, i) => (
            <Reveal key={o.label} delay={i * 100}>
              <div className="border-line py-10 sm:border-l sm:px-8 sm:first:border-l-0 sm:first:pl-0">
                <p className="font-display text-4xl font-medium tracking-tight text-lime">
                  {o.value}
                </p>
                <p className="mt-2 text-sm leading-snug text-muted">
                  {o.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Deliverables */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <SectionHeading
          eyebrow="What you get"
          title="Scope with substance."
          lede="Every engagement is scoped to your situation — but these are the pillars the work is built on."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {service.deliverables.map((d, i) => (
            <Reveal key={d.title} delay={(i % 3) * 100}>
              <div className="h-full rounded-2xl border border-line bg-surface p-8">
                <span
                  aria-hidden
                  className="block h-1.5 w-1.5 rounded-full bg-lime"
                />
                <h3 className="mt-6 font-display text-lg font-medium tracking-tight text-cream">
                  {d.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {d.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="border-t border-line bg-surface/40">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeading
            eyebrow="Our approach"
            title={`How we run ${service.shortTitle.toLowerCase()} engagements.`}
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {service.approach.map((a, i) => (
              <Reveal key={a.step} delay={i * 100} className="bg-surface">
                <div className="flex h-full flex-col p-8">
                  <span className="font-display text-sm text-lime">
                    {a.step}
                  </span>
                  <h3 className="mt-14 font-display text-xl font-medium tracking-tight text-cream">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {a.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related growth scenario */}
      {study && (
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Growth Scenario"
                title="A representative engagement approach."
                lede={`${study.title} — ${study.industry.toLowerCase()}. ${study.headline}`}
              />
              <Reveal className="mt-8">
                <dl className="grid grid-cols-3 gap-6 border-t border-line pt-8">
                  {study.metrics.map((m) => (
                    <div key={m.label}>
                      <dd className="font-display text-2xl font-medium tracking-tight text-lime">
                        {m.value}
                      </dd>
                      <dt className="mt-1 text-xs leading-tight text-muted">
                        {m.label}
                      </dt>
                    </div>
                  ))}
                </dl>
              </Reveal>
              <Reveal className="mt-8">
                <Button href="/work" variant="ghost">
                  View all scenarios
                </Button>
              </Reveal>
            </div>
            <Reveal className="lg:col-span-7">
              <div className="rounded-2xl border border-line bg-surface p-6 lg:p-8">
                <LineChart
                  data={study.series}
                  labels={[
                    "M1", "M2", "M3", "M4", "M5", "M6",
                    "M7", "M8", "M9", "M10", "M11", "M12",
                  ]}
                  title={`${study.title} · ${study.seriesLabel}`}
                  format="progress"
                />
                <p className="mt-5 border-t border-line pt-5 text-sm leading-relaxed text-muted">
                  {study.summary}
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="border-t border-line bg-surface/40">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="FAQ"
                title={`${service.title}, answered.`}
              />
            </div>
            <Reveal className="lg:col-span-7">
              <FAQ items={service.faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="mx-auto max-w-7xl px-6 pt-24 lg:px-8 lg:pt-32">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-faint">
          Explore other services
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {others.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="inline-flex min-h-11 items-center rounded-full border border-line-strong px-5 py-2.5 text-sm text-muted transition-colors hover:border-lime hover:text-lime"
            >
              {s.title}
            </Link>
          ))}
        </div>
      </section>

      <div className="pt-24 lg:pt-32">
        <CTASection
          title={`Ready to fix your ${service.shortTitle.toLowerCase()}?`}
        />
      </div>
    </>
  );
}
