import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import WebsiteBuildSystem from "@/components/WebsiteBuildSystem";
import styles from "@/components/WebsiteDevelopmentExperience.module.css";
import websiteDevelopmentImage from "@/public/images/adverli/services/website-development.jpg";
import { getService, services } from "@/lib/services";
import { createPageMetadata } from "@/lib/site";
import { createServiceStructuredData } from "@/lib/structured-data";

const service = getService("website-development")!;

export const metadata: Metadata = createPageMetadata({
  title: service.title,
  description: service.tagline,
  path: "/services/website-development",
});

const capabilityLayers = [
  {
    label: "Build layer",
    items: ["Next.js", "Shopify Plus", "Component systems"],
  },
  {
    label: "Content layer",
    items: ["Sanity", "Contentful", "Storyblok"],
  },
  {
    label: "Signal layer",
    items: ["Analytics", "Conversion tracking", "Event schemas"],
  },
  {
    label: "Quality layer",
    items: ["Performance optimization", "Accessibility", "Security"],
  },
] as const;

const outcomePrinciples = [
  {
    number: "01",
    title: "Communicate clearly",
    description:
      "Make the offer, audience, and next step easy to understand without making visitors work for the answer.",
  },
  {
    number: "02",
    title: "Convert qualified visitors",
    description:
      "Give every important page a clear job: qualify, persuade, or move the right visitor forward.",
  },
  {
    number: "03",
    title: "Load quickly",
    description:
      "Treat performance as part of delivery through image strategy, front-end checks, and practical performance budgets.",
  },
  {
    number: "04",
    title: "Support search visibility",
    description:
      "Build a technically sound foundation that makes useful content easier to access, understand, and discover.",
  },
  {
    number: "05",
    title: "Measure what matters",
    description:
      "Connect meaningful events and conversion paths so the website contributes useful evidence to future decisions.",
  },
] as const;

const deliveryStages = [
  {
    number: "01",
    title: "Discovery / Strategy",
    description:
      "Map customer journeys, available analytics, commercial priorities, and the constraints the project needs to solve.",
  },
  {
    number: "02",
    title: "Structure",
    description:
      "Define the information architecture, page hierarchy, content model, and conversion paths before visual design begins.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Turn the structure into a coherent interface system and page-level prototypes that can be reviewed before build.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Develop reusable components and the right publishing system in a clear, documented delivery cadence.",
  },
  {
    number: "05",
    title: "QA",
    description:
      "Check responsive behavior, accessibility, performance, tracking, content, and migration requirements before release.",
  },
  {
    number: "06",
    title: "Launch / Optimization",
    description:
      "Launch with redirects, analytics, and search checks in place, then focus improvement on the pages that matter most.",
  },
] as const;

export default function WebsiteDevelopmentPage() {
  const relatedServices = services.filter(
    (item) => item.slug !== "website-development",
  );

  return (
    <>
      <JsonLd data={createServiceStructuredData(service)} />

      <section className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.container}>
          <div className={styles.heroLayout}>
            <Reveal initiallyVisible className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                <span>{service.index}</span>
                <span aria-hidden="true">/</span>
                {service.title}
              </p>
              <h1>{service.heroHeadline}</h1>
              <p className={styles.heroLede}>{service.heroLede}</p>
              <div className={styles.heroActions}>
                <Button href="/contact">Book a strategy call</Button>
                <Button href="#build-system" variant="ghost">
                  Explore the build system
                </Button>
              </div>
            </Reveal>

            <Reveal initiallyVisible delay={140} className={styles.heroVisualWrap}>
              <figure className={styles.heroVisual} aria-labelledby="build-visual-caption">
                <figcaption id="build-visual-caption" className="sr-only">
                  A layered website build system progressing from strategy and
                  structure through interface, development, and measurement.
                </figcaption>
                <div className={styles.heroAxis} aria-hidden="true">
                  <span>Strategy</span>
                  <span>Structure</span>
                  <span>Interface</span>
                  <span>Build</span>
                  <span>Measurement</span>
                </div>
                <div className={styles.heroBrowser} aria-hidden="true">
                  <div className={styles.browserBar}>
                    <div><span /><span /><span /></div>
                    <p>adverli / build-system</p>
                    <span>01</span>
                  </div>
                  <div className={styles.browserCanvas}>
                    <div className={styles.canvasNav}>
                      <span />
                      <div><i /><i /><i /></div>
                    </div>
                    <div className={styles.canvasHero}>
                      <div>
                        <span />
                        <strong />
                        <strong />
                        <small />
                      </div>
                      <div className={styles.canvasModule}>
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                    <div className={styles.canvasCards}>
                      <span /><span /><span />
                    </div>
                  </div>
                </div>
                <div className={styles.heroCode} aria-hidden="true">
                  <p>COMPONENT / 03</p>
                  <span><i>01</i> grid-template</span>
                  <span><i>02</i> content-model</span>
                  <span><i>03</i> event-schema</span>
                  <span><i>04</i> performance</span>
                </div>
                <div className={styles.heroSignal} aria-hidden="true">
                  <p>Signal connected</p>
                  <div><span /><span /><span /><span /><span /></div>
                </div>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={styles.positioning}>
        <div className={styles.container}>
          <Reveal className={styles.positioningLayout}>
            <p className={styles.sectionLabel}>Built for the work after launch</p>
            <div>
              <h2>
                Your website should operate as <em>growth infrastructure.</em>
              </h2>
              <p>
                Not just a digital brochure. A clear, maintainable system that
                connects customer journeys, publishing, search, measurement,
                and conversion.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="build-system" className={styles.buildSection}>
        <div className={styles.container}>
          <Reveal className={styles.sectionIntro}>
            <p className={styles.sectionLabel}>The build system</p>
            <div>
              <h2>One connected path from strategy to signal.</h2>
              <p>
                Each layer informs the next. Select a stage to see how the
                system moves from commercial intent to a measurable website.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <WebsiteBuildSystem />
          </Reveal>
        </div>
      </section>

      <section className={styles.capabilitySection}>
        <div className={styles.container}>
          <Reveal className={styles.capabilityHeader}>
            <p className={styles.sectionLabel}>Capability / technology</p>
            <h2>Choose the right layer for the operating reality.</h2>
            <p>
              Architecture follows the customer journey, content needs,
              internal capability, and measurement requirements—not a default
              platform preference.
            </p>
          </Reveal>
          <div className={styles.capabilityMatrix}>
            {capabilityLayers.map((layer, index) => (
              <Reveal key={layer.label} delay={index * 70}>
                <div className={styles.capabilityRow}>
                  <p><span>{String(index + 1).padStart(2, "0")}</span>{layer.label}</p>
                  <ul>
                    {layer.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.showcaseSection}>
        <div className={styles.container}>
          <Reveal>
            <div className={styles.showcase}>
              <div className={styles.showcaseImage}>
                <Image
                  src={websiteDevelopmentImage}
                  alt="Developer working across multiple monitors displaying website code"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1279px) calc(100vw - 4rem), 1216px"
                  className={styles.showcasePhoto}
                />
                <div className={styles.showcaseWash} aria-hidden="true" />
              </div>
              <div className={styles.showcaseFrame} aria-hidden="true">
                <div className={styles.showcaseFrameBar}>
                  <span />
                  <p>Responsive system</p>
                  <small>DESKTOP / MOBILE</small>
                </div>
                <div className={styles.showcaseFrameBody}>
                  <span />
                  <span />
                  <div><i /><i /><i /></div>
                </div>
              </div>
              <div className={styles.showcaseMobile} aria-hidden="true">
                <span />
                <strong />
                <strong />
                <div><i /><i /></div>
              </div>
              <div className={styles.showcaseCaption}>
                <p>From component logic to customer experience.</p>
                <span>Designed to hold together at every breakpoint.</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.outcomesSection}>
        <div className={styles.container}>
          <Reveal className={styles.outcomesHeading}>
            <p className={styles.sectionLabel}>Website principles</p>
            <h2>What a strong website should do.</h2>
          </Reveal>
          <div className={styles.outcomeList}>
            {outcomePrinciples.map((principle, index) => (
              <Reveal key={principle.number} delay={(index % 2) * 70}>
                <article className={styles.outcomeItem}>
                  <span>{principle.number}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.deliverySection}>
        <div className={styles.container}>
          <Reveal className={styles.sectionIntro}>
            <p className={styles.sectionLabel}>Delivery model</p>
            <div>
              <h2>Decisions stay connected to execution.</h2>
              <p>
                The process moves in a clear sequence, while strategy, design,
                engineering, and measurement stay close enough to inform one
                another.
              </p>
            </div>
          </Reveal>
          <ol className={styles.deliveryTimeline}>
            {deliveryStages.map((stage, index) => (
              <Reveal key={stage.number} delay={(index % 3) * 70}>
                <li className={styles.deliveryStage}>
                  <span className={styles.deliveryNumber}>{stage.number}</span>
                  <div className={styles.deliveryNode} aria-hidden="true" />
                  <div>
                    <h3>{stage.title}</h3>
                    <p>{stage.description}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.faqLayout}>
            <Reveal>
              <p className={styles.sectionLabel}>FAQ</p>
              <h2>Website development, answered.</h2>
            </Reveal>
            <Reveal delay={80}>
              <FAQ items={service.faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className={styles.relatedSection}>
        <div className={styles.container}>
          <Reveal className={styles.relatedHeader}>
            <p className={styles.sectionLabel}>Related services</p>
            <h2>A stronger site connects to the rest of the growth system.</h2>
          </Reveal>
          <div className={styles.relatedLinks}>
            {relatedServices.map((related, index) => (
              <Reveal key={related.slug} delay={index * 55}>
                <Link href={`/services/${related.slug}`} className={styles.relatedLink}>
                  <span>{related.index}</span>
                  <strong>{related.title}</strong>
                  <i aria-hidden="true">→</i>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.finalCta}>
        <CTASection
          title="Ready to build your growth infrastructure?"
          lede="Bring the goal, the current constraint, and the context. We’ll define the most useful next step."
          secondaryHref="/work"
          secondaryLabel="Explore our approach"
        />
      </div>
    </>
  );
}
