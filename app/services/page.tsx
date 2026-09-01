import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import darkDashboard from "@/public/images/dark-dashboard.jpg";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/lib/services";
import { generalFaqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website development, Meta ads, Google ads, SEO, and content creation connected around clear commercial goals.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="dot-grid absolute inset-0 opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted">
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-lime"
                />
                Services
              </p>
              <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-tight tracking-tight text-cream sm:text-6xl">
                Five disciplines.
                <br />
                One <span className="text-lime">growth engine.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                Most agencies sell channels. We engineer systems — where the
                site converts what media captures, content feeds what search
                ranks, and every discipline compounds the others.
              </p>
            </Reveal>
            <Reveal delay={150} className="hidden lg:col-span-5 lg:block">
              <figure className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line shadow-2xl shadow-black/40">
                <Image
                  src={darkDashboard}
                  alt="Performance dashboards tracking load time, sessions, and conversion metrics"
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 40vw, 0px"
                  className="scale-[1.3] object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent"
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Service rows */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="space-y-5">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 80}>
              <Link
                href={`/services/${s.slug}`}
                className="group grid gap-6 rounded-2xl border border-line bg-surface p-8 transition-colors hover:border-lime/40 lg:grid-cols-12 lg:items-center lg:gap-10 lg:p-10"
              >
                <div className="lg:col-span-1">
                  <span className="font-display text-sm text-lime">
                    {s.index}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <h2 className="font-display text-3xl font-medium tracking-tight text-cream transition-colors group-hover:text-lime">
                    {s.title}
                  </h2>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-sm leading-relaxed text-muted lg:text-base">
                    {s.tagline}
                  </p>
                </div>
                <div className="lg:col-span-1 lg:text-right">
                  <span
                    aria-hidden
                    className="text-xl text-muted transition-all group-hover:translate-x-1 group-hover:text-lime lg:inline-block"
                  >
                    →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-surface/40">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="FAQ"
                title="The questions every serious buyer asks."
              />
              <Reveal className="mt-8">
                <Button href="/contact" variant="ghost">
                  Ask us something else
                </Button>
              </Reveal>
            </div>
            <Reveal className="lg:col-span-7">
              <FAQ items={generalFaqs} />
            </Reveal>
          </div>
        </div>
      </section>

      <div className="pt-24 lg:pt-32">
        <CTASection />
      </div>
    </>
  );
}
