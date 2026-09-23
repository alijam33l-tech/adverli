import Button from "@/components/Button";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTASection from "@/components/CTASection";
import LogoMarquee from "@/components/LogoMarquee";
import ProcessSteps from "@/components/ProcessSteps";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServicesGrowthSystem from "@/components/ServicesGrowthSystem";
import StatsBar from "@/components/StatsBar";
import { caseStudies } from "@/lib/case-studies";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";
import HeroVisual from "@/components/HeroVisual";
import strategySession from "@/public/images/strategy-session.jpg";
import analyticsLaptop from "@/public/images/analytics-laptop.jpg";
import openOffice from "@/public/images/open-office.jpg";
import styles from "./home.module.css";

export default function HomePage() {
  const featured = caseStudies.filter((c) => c.featured);

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.ambientGlow} aria-hidden="true" />
        <div className={`${styles.heroInner} mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-center px-6 py-20 sm:py-24 lg:px-8`}>
          <div className="grid min-w-0 items-center gap-16 lg:grid-cols-12 lg:gap-12 xl:gap-16">
            <div className="min-w-0 lg:col-span-7">
              <p className={`${styles.eyebrow} flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted`}>
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-lime shadow-[0_0_12px_rgba(200,245,66,0.5)]" />
                Integrated growth partner
              </p>
              <h1 className="mt-6 font-display text-6xl font-semibold leading-[0.92] tracking-[-0.055em] text-cream sm:text-7xl lg:text-8xl">
                <span className={styles.headlineLead}>
                  {site.taglineParts.lead}
                </span>
                <span className={`${styles.headlineAccent} text-lime`}>
                  {site.taglineParts.accent}
                </span>
              </h1>
              <p className={`${styles.positioning} mt-8 max-w-xl text-lg leading-relaxed text-muted`}>
                {site.positioning}
              </p>
              <div className={`${styles.actions} mt-10 flex flex-wrap items-center gap-4`}>
                <Button href="/contact" className={styles.heroPrimary}>
                  Book a strategy call
                </Button>
                <Button href="/work" variant="ghost" className={styles.heroSecondary}>
                  Explore our approach
                </Button>
              </div>
            </div>
            <div className="min-w-0 lg:col-span-5">
              <HeroVisual />
            </div>
          </div>
          <div className={`${styles.capabilities} mt-20 border-t border-line pt-7`}>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className={`${styles.capabilityLink} flex items-baseline gap-2 text-sm text-muted transition-colors hover:text-lime focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime`}
                >
                  <span className="font-display text-xs text-lime">
                    {s.index}
                  </span>
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.transitionLayer} aria-hidden="true" />
      </section>

      <LogoMarquee />

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <SectionHeading
          eyebrow={`Why ${site.name}`}
          title="Commercial clarity at every step."
          lede="Strategy, execution, and reporting stay tied to the business outcome, with clear ownership and fewer handoffs between channels."
        />
        <Reveal className="mt-14">
          <StatsBar />
        </Reveal>
      </section>

      {/* Services */}
      <section
        id="services-system"
        className="scroll-mt-16 border-t border-line bg-surface/40"
      >
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
          <Reveal className="mt-14">
            <ServicesGrowthSystem
              services={services.map(({ slug, index, title, tagline }) => ({
                slug,
                index,
                title,
                tagline,
              }))}
            />
          </Reveal>
        </div>
      </section>

      {/* Featured work */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Example approaches"
            title="How focused growth programs take shape."
            lede="Representative growth scenarios showing how strategy, execution, and measurement work together across common business challenges."
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
            lede="Engagements follow a clear sequence — diagnose, architect, execute, compound — so decisions stay focused and accountable."
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
              caption: "Performance reviews",
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
