import Button from "@/components/Button";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTASection from "@/components/CTASection";
import LogoMarquee from "@/components/LogoMarquee";
import ProcessSteps from "@/components/ProcessSteps";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import StatsBar from "@/components/StatsBar";
import { caseStudies } from "@/lib/case-studies";
import { services } from "@/lib/services";
import Image from "next/image";
import Link from "next/link";
import HeroVisual from "@/components/HeroVisual";
import strategySession from "@/public/images/strategy-session.jpg";
import analyticsLaptop from "@/public/images/analytics-laptop.jpg";
import openOffice from "@/public/images/open-office.jpg";

export default function HomePage() {
  const featured = caseStudies.filter((c) => c.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-40" aria-hidden />
        <div
          aria-hidden
          className="animate-aurora pointer-events-none absolute left-1/3 top-1/3 h-[30rem] w-[50rem] -translate-x-1/2 rounded-full bg-lime/8 blur-3xl"
        />
        <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-center px-6 py-24 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted">
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full bg-lime"
                  />
                  Integrated growth partner
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="mt-6 font-display text-6xl font-semibold leading-[0.95] tracking-tight text-cream sm:text-7xl lg:text-8xl">
                  Growth,
                  <br />
                  <span className="text-lime">engineered.</span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
                  We connect website development, Meta and Google ads, SEO,
                  and content around one commercial goal: turning attention
                  into qualified demand.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Button href="/contact">Book a strategy call</Button>
                  <Button href="/work" variant="ghost">
                    Explore our approach
                  </Button>
                </div>
              </Reveal>
            </div>
            <Reveal delay={350} className="lg:col-span-5">
              <HeroVisual />
            </Reveal>
          </div>
          <Reveal delay={450} className="mt-20">
            <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-8">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="flex items-baseline gap-2 text-sm text-muted transition-colors hover:text-lime"
                >
                  <span className="font-display text-xs text-lime">
                    {s.index}
                  </span>
                  {s.title}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <LogoMarquee />

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <SectionHeading
          eyebrow="Why Adverli"
          title="Commercial clarity at every step."
          lede="Strategy, execution, and reporting stay tied to the business outcome, with clear ownership and fewer handoffs between channels."
        />
        <Reveal className="mt-14">
          <StatsBar />
        </Reveal>
      </section>

      {/* Services */}
      <section className="border-t border-line bg-surface/40">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="What we do"
              title="Five disciplines. One growth engine."
              lede="Each service performs alone. Together, they compound — the site converts what media captures, content feeds what search ranks."
            />
            <Reveal>
              <Button href="/services" variant="ghost" className="mb-1">
                All services
              </Button>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 100}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
            <Reveal delay={200}>
              <Link
                href="/contact"
                className="group flex h-full min-h-56 flex-col justify-between rounded-2xl border border-lime/40 bg-lime/5 p-8 transition-colors hover:bg-lime/10"
              >
                <span aria-hidden className="font-display text-sm text-lime">
                  ↗
                </span>
                <div>
                  <h3 className="font-display text-2xl font-medium tracking-tight text-lime">
                    Not sure where to start?
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    Book a strategy call. We&apos;ll audit your funnel and tell
                    you exactly which lever moves first.
                  </p>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Example approaches"
            title="How focused growth programs take shape."
            lede="Illustrative scenarios showing how strategy, execution, and measurement work together. These are not client case studies."
          />
          <Reveal>
            <Button href="/work" variant="ghost" className="mb-1">
              View all scenarios
            </Button>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {featured.map((c, i) => (
            <Reveal key={c.slug} delay={i * 100}>
              <CaseStudyCard study={c} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-line bg-surface/40">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeading
            eyebrow="How we work"
            title="A method, not a mood board."
            lede="Every engagement follows the same clear sequence — diagnose, architect, execute, compound — so decisions stay focused and accountable."
          />
          <div className="mt-14">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* Inside the work */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <SectionHeading
          eyebrow="Inside the work"
          title="Where the numbers get made."
          lede="Focused working sessions, build cycles, and reporting reviews keep priorities visible and turn learning into the next decision."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            {
              img: strategySession,
              alt: "Team mapping campaign strategy on a wall of sticky notes",
              caption: "Focused planning sessions",
            },
            {
              img: analyticsLaptop,
              alt: "Analytics dashboard with performance charts on a laptop",
              caption: "Weekly performance reviews",
            },
            {
              img: openOffice,
              alt: "Modern open-plan office with teams at work",
              caption: "Connected delivery workflows",
            },
          ].map((item, i) => (
            <Reveal key={item.caption} delay={i * 100}>
              <figure className="group overflow-hidden rounded-2xl border border-line">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    placeholder="blur"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent"
                  />
                  <figcaption className="absolute bottom-4 left-5 text-sm font-medium text-cream">
                    {item.caption}
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
