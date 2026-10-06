import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import { GoogleIntentSystem, GoogleOperatingModel } from "@/components/GoogleAdsSystems";
import styles from "@/components/GoogleAdsExperience.module.css";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import googleAdsImage from "@/public/images/adverli/services/google-ads.jpg";
import { getService, services } from "@/lib/services";
import { createPageMetadata } from "@/lib/site";
import { createServiceStructuredData } from "@/lib/structured-data";

const service = getService("google-ads")!;

export const metadata: Metadata = createPageMetadata({
  title: service.title,
  description: service.tagline,
  path: "/services/google-ads",
});

const capabilityBands = [
  {
    number: "01",
    label: "Capture demand",
    description: "Choose the right channel and campaign job for the demand already present.",
    items: ["Search campaigns", "Performance Max", "Shopping", "YouTube Ads"],
  },
  {
    number: "02",
    label: "Route relevance",
    description: "Keep query, message, campaign structure, and destination aligned.",
    items: ["Landing-page alignment", "Feed / campaign structure", "Search-term and query analysis"],
  },
  {
    number: "03",
    label: "Control signal",
    description: "Give bidding and budget decisions a clearer measurement foundation.",
    items: ["Conversion tracking", "Enhanced conversions", "Budget / bidding discipline", "Measurement and attribution context"],
  },
] as const;

const scenarioStages = [
  {
    title: "Baseline",
    detail: "Map branded, non-branded, Performance Max, landing-page, and conversion activity as one account system.",
  },
  {
    title: "Intent Cleanup",
    detail: "Separate useful commercial demand from overlap, weak routing, and queries the business does not need.",
  },
  {
    title: "Campaign Consolidation",
    detail: "Give each campaign a clear role and concentrate evidence around the most useful intent paths.",
  },
  {
    title: "Measurement Clarity",
    detail: "Align conversion definitions and reporting context so bidding inputs and business review are more useful.",
  },
  {
    title: "Controlled Scale",
    detail: "Expand only where demand quality, conversion evidence, and commercial economics support more investment.",
  },
] as const;

const googleFaqs = [
  {
    q: "What Google Ads channels do you manage?",
    a: "Scope can include Search, Shopping, Performance Max, YouTube, and Demand Gen where those channels fit the goal, available assets, measurement setup, and market demand.",
  },
  {
    q: "Do you manage Search and Performance Max together?",
    a: "Yes, when they have distinct roles. Search can protect precise intent while Performance Max supports broader inventory and product discovery. Structure, exclusions, feeds, and reporting need to make those roles clear.",
  },
  {
    q: "How do you approach conversion tracking and attribution?",
    a: "We review conversion definitions, enhanced conversions, event quality, and server-side options where appropriate. Platform reporting is read alongside landing-page and business evidence rather than treated as the complete answer.",
  },
  {
    q: "How do you decide when to increase budget?",
    a: "Investment increases when query quality, conversion signal, landing experience, and business economics support it. There is no responsible fixed scaling rate independent of that context.",
  },
] as const;

const relatedSlugs = ["website-development", "meta-ads", "seo", "content-creation"];

export default function GoogleAdsPage() {
  const relatedServices = relatedSlugs
    .map((slug) => services.find((item) => item.slug === slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

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
              <h1>Google Ads built around intent, not wasted spend.</h1>
              <p className={styles.heroLede}>
                Connect search demand, campaign structure, landing pages,
                conversion tracking, and budget decisions so spend follows
                useful commercial evidence.
              </p>
              <div className={styles.heroActions}>
                <Button href="/contact">Book a strategy call</Button>
                <Button href="#intent-system" variant="ghost">Explore the system</Button>
              </div>
            </Reveal>

            <Reveal initiallyVisible delay={130} className={styles.heroVisualWrap}>
              <figure className={styles.heroSystem} aria-labelledby="google-system-caption">
                <figcaption id="google-system-caption" className="sr-only">
                  A conceptual search demand operating system connecting a
                  query to intent, campaign structure, a landing page, and a
                  qualified action.
                </figcaption>
                <div className={styles.heroSystemTop} aria-hidden="true">
                  <span>Search demand operating system</span>
                  <i />
                  <small>Route / Ready</small>
                </div>
                <div className={styles.heroSearch} aria-hidden="true">
                  <i />
                  <span>enterprise website redesign agency</span>
                  <small>Conceptual query</small>
                </div>
                <div className={styles.heroRoute} aria-hidden="true">
                  {[
                    ["01", "Intent", "Commercial relevance"],
                    ["02", "Campaign", "Clear role"],
                    ["03", "Landing page", "Message match"],
                    ["04", "Qualified action", "Useful signal"],
                  ].map(([number, title, detail]) => (
                    <div key={number}>
                      <span>{number}</span>
                      <i />
                      <strong>{title}</strong>
                      <small>{detail}</small>
                    </div>
                  ))}
                </div>
                <div className={styles.heroControl} aria-hidden="true">
                  <div>
                    <span>Spend control</span>
                    <strong>Evidence before expansion</strong>
                  </div>
                  <div className={styles.heroControlSignal}><i /><i /><i /><i /><i /></div>
                </div>
                <div className={styles.heroQueryMap} aria-hidden="true">
                  <span>Demand map</span>
                  <div><i /><i /><i /></div>
                  <small>Intent / Route / Signal</small>
                </div>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={styles.thesisSection}>
        <div className={styles.container}>
          <Reveal className={styles.thesisLayout}>
            <p className={styles.sectionLabel}>Service thesis</p>
            <div>
              <h2>Demand already exists. The job is to capture it cleanly.</h2>
              <p>
                Useful paid search connects intent, architecture, message,
                landing experience, measurement, and budget discipline. When
                those layers drift apart, more traffic does not create more control.
              </p>
              <div className={styles.thesisFactors} aria-label="Google Ads alignment factors">
                {[
                  "Search intent",
                  "Campaign architecture",
                  "Offer / message",
                  "Landing experience",
                  "Measurement",
                  "Budget discipline",
                ].map((factor, index) => (
                  <span key={factor}><i>{String(index + 1).padStart(2, "0")}</i>{factor}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="intent-system" className={styles.intentSection}>
        <div className={styles.container}>
          <Reveal className={styles.sectionIntro}>
            <p className={styles.sectionLabel}>Intent control system</p>
            <div>
              <h2>One connected route from query to qualified action.</h2>
              <p>
                Select a layer to see how demand becomes structure, experience,
                signal, and a controlled investment decision.
              </p>
            </div>
          </Reveal>
          <Reveal delay={90}><GoogleIntentSystem /></Reveal>
        </div>
      </section>

      <section className={styles.capabilitySection}>
        <div className={styles.container}>
          <Reveal className={styles.capabilityHeading}>
            <p className={styles.sectionLabel}>Connected capability</p>
            <h2>The account works as a system, not a list of campaign types.</h2>
          </Reveal>
          <div className={styles.capabilityBands}>
            {capabilityBands.map((band, index) => (
              <Reveal key={band.number} delay={index * 60}>
                <article className={styles.capabilityBand}>
                  <div className={styles.capabilityIdentity}>
                    <span>{band.number}</span>
                    <div><h3>{band.label}</h3><p>{band.description}</p></div>
                  </div>
                  <div className={styles.capabilityRoute} aria-hidden="true"><i /><i /><i /><i /></div>
                  <ul>
                    {band.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.operatingSection}>
        <div className={styles.container}>
          <Reveal className={styles.sectionIntro}>
            <p className={styles.sectionLabel}>Campaign operating model</p>
            <div>
              <h2>How we run Google Ads engagements.</h2>
              <p>
                Each phase produces a signal and a decision. The account evolves
                through a controlled operating sequence rather than disconnected optimizations.
              </p>
            </div>
          </Reveal>
          <Reveal delay={90}><GoogleOperatingModel /></Reveal>
        </div>
      </section>

      <section className={styles.mediaSection}>
        <div className={styles.container}>
          <Reveal>
            <figure className={styles.mediaMoment}>
              <div className={styles.mediaImage}>
                <Image
                  src={googleAdsImage}
                  alt="Laptop displaying a search results page"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(100vw - 3rem), 1216px"
                  className={styles.mediaPhoto}
                />
                <div className={styles.mediaWash} aria-hidden="true" />
              </div>
              <div className={styles.mediaRouting} aria-hidden="true">
                <div className={styles.mediaRoutingTop}><span>Demand routing / Query cluster 01</span><i /></div>
                <div className={styles.mediaQuery}><i /><span>commercial service intent</span><small>Conceptual input</small></div>
                <div className={styles.mediaRoutes}>
                  <div><span>Search query</span><i /><strong>Intent cluster</strong></div>
                  <div><span>Campaign role</span><i /><strong>Landing experience</strong></div>
                  <div><span>Qualified action</span><i /><strong>Conversion signal</strong></div>
                </div>
                <div className={styles.mediaRoutingFoot}><span>Message matched</span><span>Signal connected</span></div>
              </div>
              <figcaption className={styles.mediaCaption}>
                <p className={styles.sectionLabel}>Search demand in motion</p>
                <h2>From search demand to measurable action.</h2>
                <span>
                  Search traffic becomes useful when query, message, experience,
                  and measurement stay connected.
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className={styles.scenarioSection}>
        <div className={styles.container}>
          <Reveal className={styles.scenarioHeader}>
            <div>
              <p className={styles.sectionLabel}>Representative growth scenario</p>
              <h2>A maturity path, not a performance forecast.</h2>
            </div>
            <p>
              This conceptual operating model shows how a fragmented Google Ads
              program can become more controlled. It is not a client result,
              forecast, or guarantee.
            </p>
          </Reveal>
          <ol className={styles.scenarioPath}>
            {scenarioStages.map((stage, index) => (
              <li key={stage.title}>
                <Reveal delay={index * 55}>
                  <div className={styles.scenarioStage}>
                    <span>0{index + 1}</span>
                    <div className={styles.scenarioSignal} aria-hidden="true"><i /><i /><i /></div>
                    <h3>{stage.title}</h3>
                    <p>{stage.detail}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.faqLayout}>
            <Reveal>
              <p className={styles.sectionLabel}>FAQ</p>
              <h2>Google Ads, answered.</h2>
              <p>Channels, account structure, conversion signal, and responsible budget decisions.</p>
            </Reveal>
            <Reveal delay={80}><FAQ items={[...googleFaqs]} /></Reveal>
          </div>
        </div>
      </section>

      <section className={styles.relatedSection}>
        <div className={styles.container}>
          <Reveal className={styles.relatedHeader}>
            <p className={styles.sectionLabel}>Related services</p>
            <h2>Search demand performs inside a wider growth system.</h2>
          </Reveal>
          <div className={styles.relatedLinks}>
            {relatedServices.map((related, index) => (
              <Reveal key={related.slug} delay={index * 55}>
                <Link href={`/services/${related.slug}`}>
                  <span>{related.index}</span>
                  <strong>{related.title}</strong>
                  <p>{related.tagline}</p>
                  <div aria-hidden="true"><i /><i /><i /></div>
                  <b aria-hidden="true">→</b>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.finalCta}>
        <CTASection
          title="Build a Google Ads system that can capture demand cleanly."
          lede="Bring the goal, current account structure, conversion setup, and current constraint. We’ll define the most useful next step."
          secondaryHref="/work"
          secondaryLabel="Explore our approach"
        />
      </div>
    </>
  );
}
