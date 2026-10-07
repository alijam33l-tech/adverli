import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { SeoOperatingModel, SeoVisibilitySystem } from "@/components/SeoSystems";
import styles from "@/components/SeoExperience.module.css";
import seoImage from "@/public/images/adverli/services/seo.jpg";
import { getService, services } from "@/lib/services";
import { createPageMetadata } from "@/lib/site";
import { createServiceStructuredData } from "@/lib/structured-data";

const service = getService("seo")!;

export const metadata: Metadata = createPageMetadata({
  title: service.title,
  description: service.tagline,
  path: "/services/seo",
});

const technicalLanes = [
  {
    number: "01",
    title: "Access & index",
    signal: "Can systems retrieve and select the right pages?",
    items: ["Crawlability", "Indexation", "Canonicalization", "Redirects"],
  },
  {
    number: "02",
    title: "Architecture & quality",
    signal: "Does the site make meaning, hierarchy, and quality clear?",
    items: ["Site architecture", "Internal linking", "Core Web Vitals", "Structured data"],
  },
  {
    number: "03",
    title: "Change control",
    signal: "Can the search foundation survive platform change?",
    items: ["Technical audits", "Migrations", "Release QA", "Issue monitoring"],
  },
] as const;

const capabilities = [
  {
    number: "01",
    title: "Technical SEO",
    signal: "Accessible foundations",
    description: "Technical audits, rendering, crawl and index management, canonicalization, structured data, performance, and migration support.",
  },
  {
    number: "02",
    title: "Search architecture",
    signal: "Clear relationships",
    description: "Information architecture, page purpose, topic systems, templates, and internal links shaped around relevant demand and business priorities.",
  },
  {
    number: "03",
    title: "Content strategy & on-page SEO",
    signal: "Useful sources",
    description: "Research, briefs, expert-led content, on-page optimization, consolidation, and refresh cycles designed to improve clarity and usefulness.",
  },
  {
    number: "04",
    title: "Authority building",
    signal: "Credible context",
    description: "Expert input, useful references, distribution, and authority programs that strengthen trust without manufacturing proof or shortcuts.",
  },
  {
    number: "05",
    title: "AEO, GEO & AI search",
    signal: "Broader discovery",
    description: "Clear entities, extractable answers, source quality, structured content, and machine-readable context for traditional and AI-assisted discovery.",
  },
  {
    number: "06",
    title: "Forecasting & measurement",
    signal: "Decision context",
    description: "Opportunity models where appropriate, followed by reporting that connects technical health, visibility, content, qualified actions, and business context.",
  },
] as const;

const scenarioStages = [
  {
    title: "Baseline",
    detail: "Map technical health, indexation, search architecture, content coverage, internal links, authority, and measurement as one system.",
  },
  {
    title: "Foundation Repair",
    detail: "Resolve the access, duplication, canonical, performance, and migration issues that weaken everything built above them.",
  },
  {
    title: "Architecture",
    detail: "Clarify page roles, topic relationships, commercial paths, templates, and internal links around useful demand.",
  },
  {
    title: "Content & Authority",
    detail: "Improve or create credible sources, strengthen topical context, and support them with expert input and distribution.",
  },
  {
    title: "Discovery & Learning",
    detail: "Review how the system is retrieved, surfaced, used, and converted across search and AI-assisted discovery, then prioritize the next constraint.",
  },
] as const;

const relatedSlugs = ["website-development", "meta-ads", "google-ads", "content-creation"];

export default function SeoPage() {
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
                <span>{service.index}</span><span aria-hidden="true">/</span>{service.title}
              </p>
              <h1>Visibility is a system, not a ranking shortcut.</h1>
              <p className={styles.heroLede}>
                We connect technical foundations, search architecture, useful
                content, authority, and machine-readable context so businesses
                can be discovered across traditional and AI-assisted search.
              </p>
              <div className={styles.heroActions}>
                <Button href="/contact">Book a strategy call</Button>
                <Button href="#visibility-system" variant="ghost">Explore the system</Button>
              </div>
            </Reveal>

            <Reveal initiallyVisible delay={130} className={styles.heroVisualWrap}>
              <figure className={styles.heroSystem} aria-labelledby="seo-system-caption">
                <figcaption id="seo-system-caption" className="sr-only">
                  A conceptual visibility system connecting discovery, technical
                  access, content architecture, authority, and search surfaces.
                </figcaption>
                <div className={styles.heroSystemTop} aria-hidden="true">
                  <span>Visibility architecture</span><i /><small>System / Connected</small>
                </div>
                <div className={styles.heroSource} aria-hidden="true">
                  <span>Source / Priority page</span>
                  <strong>A clear answer with credible context.</strong>
                  <div><i /><i /><i /></div>
                </div>
                <div className={styles.heroGraph} aria-hidden="true">
                  <div className={styles.heroGraphCore}><span>Core topic</span><i /></div>
                  <div className={styles.heroGraphNode} data-node="technical"><span>Technical</span><i /></div>
                  <div className={styles.heroGraphNode} data-node="content"><span>Content</span><i /></div>
                  <div className={styles.heroGraphNode} data-node="authority"><span>Authority</span><i /></div>
                  <div className={styles.heroGraphNode} data-node="discovery"><span>Discovery</span><i /></div>
                  <div className={styles.heroGraphLines}><i /><i /><i /><i /></div>
                </div>
                <div className={styles.heroSurfaces} aria-hidden="true">
                  <span>Retrieval surfaces</span>
                  <div><i />Search</div><div><i />Answers</div><div><i />AI discovery</div>
                </div>
                <div className={styles.heroStatus} aria-hidden="true">
                  <span>Source → Context → Retrieval</span>
                  <div><i /><i /><i /><i /><i /></div>
                </div>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={styles.thesisSection}>
        <div className={styles.container}>
          <Reveal className={styles.thesisLayout}>
            <p className={styles.sectionLabel}>SEO thesis</p>
            <div>
              <h2>Useful visibility comes from connected systems.</h2>
              <p>
                Technical access creates eligibility. Architecture creates
                context. Content answers the need. Authority supports trust.
                Discovery systems decide what to retrieve and surface. SEO works
                when those responsibilities reinforce one another.
              </p>
              <div className={styles.thesisSignal} aria-hidden="true">
                {[
                  ["01", "Technical"],
                  ["02", "Architecture"],
                  ["03", "Content"],
                  ["04", "Authority"],
                  ["05", "Discovery"],
                ].map(([number, label]) => <span key={number}><i>{number}</i>{label}</span>)}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="visibility-system" className={styles.visibilitySection}>
        <div className={styles.container}>
          <Reveal className={styles.sectionIntro}>
            <p className={styles.sectionLabel}>Interactive visibility system</p>
            <div>
              <h2>Every visibility opportunity has dependencies.</h2>
              <p>Select a stage to see the role it plays between initial discovery and an opportunity to be surfaced.</p>
            </div>
          </Reveal>
          <Reveal delay={90}><SeoVisibilitySystem /></Reveal>
        </div>
      </section>

      <section className={styles.topicalSection}>
        <div className={styles.container}>
          <Reveal className={styles.topicalHeading}>
            <div><p className={styles.sectionLabel}>Search architecture</p><h2>A topic becomes stronger when its relationships are clear.</h2></div>
            <p>Pages should have distinct jobs, useful context, and intentional routes between supporting knowledge and commercial decisions.</p>
          </Reveal>
          <Reveal delay={80}>
            <figure className={styles.topicMap} aria-labelledby="topic-map-caption">
              <figcaption id="topic-map-caption" className="sr-only">
                A conceptual content architecture connecting a core topic to
                supporting topics, commercial pages, internal links, and authority signals.
              </figcaption>
              <div className={styles.topicMapTop} aria-hidden="true"><span>Topical architecture / Conceptual view</span><i /></div>
              <div className={styles.topicCluster} aria-hidden="true">
                <div className={styles.topicCore}><span>Core topic</span><strong>Subject foundation</strong></div>
                <div className={styles.topicNode} data-topic="one"><span>Supporting topic</span><strong>Question cluster</strong></div>
                <div className={styles.topicNode} data-topic="two"><span>Supporting topic</span><strong>Evidence layer</strong></div>
                <div className={styles.topicNode} data-topic="three"><span>Commercial page</span><strong>Decision path</strong></div>
                <div className={styles.topicNode} data-topic="four"><span>Authority signal</span><strong>External context</strong></div>
                <div className={styles.topicLinks}><i /><i /><i /><i /><i /><i /></div>
              </div>
              <div className={styles.topicLegend} aria-hidden="true"><span><i /> Internal link</span><span><i /> Supporting context</span><span><i /> Commercial route</span></div>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className={styles.technicalSection}>
        <div className={styles.container}>
          <Reveal className={styles.technicalHeading}>
            <p className={styles.sectionLabel}>Technical SEO system</p>
            <h2>Technical health is infrastructure, not a scorecard.</h2>
          </Reveal>
          <div className={styles.technicalLanes}>
            {technicalLanes.map((lane, index) => (
              <Reveal key={lane.number} delay={index * 60}>
                <article className={styles.technicalLane}>
                  <div><span>{lane.number}</span><h3>{lane.title}</h3><p>{lane.signal}</p></div>
                  <div className={styles.technicalRoute} aria-hidden="true"><i /><i /><i /><i /></div>
                  <ul>{lane.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.discoverySection}>
        <div className={styles.container}>
          <Reveal className={styles.discoveryHeader}>
            <p className={styles.sectionLabel}>SEO + AEO + GEO</p>
            <div><h2>Modern discovery extends beyond blue links.</h2><p>The same credible source can support several retrieval experiences, but each platform decides what to surface in its own way. No placement is guaranteed.</p></div>
          </Reveal>
          <div className={styles.discoverySystem}>
            <Reveal className={styles.discoveryFoundation}>
              <span>Shared source foundation</span>
              <strong>Accessible, clear, structured, credible content</strong>
              <div aria-hidden="true"><i /><i /><i /></div>
            </Reveal>
            <div className={styles.discoveryChannels}>
              <Reveal><article><span>01 / SEO</span><h3>Traditional Search</h3><p>Technical access, relevance, links, authority, and search demand support eligibility across Google and other search engines.</p><i aria-hidden="true" /></article></Reveal>
              <Reveal delay={60}><article><span>02 / AEO</span><h3>Answer Engines</h3><p>Clear definitions, direct answers, supporting evidence, and structured context make information easier to extract and understand.</p><i aria-hidden="true" /></article></Reveal>
              <Reveal delay={120}><article><span>03 / GEO</span><h3>Generative Discovery</h3><p>Entity clarity, source credibility, useful context, and citation-ready content can support discovery in ChatGPT, Gemini, Perplexity, and similar environments.</p><i aria-hidden="true" /></article></Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mediaSection}>
        <div className={styles.container}>
          <Reveal>
            <figure className={styles.mediaMoment}>
              <div className={styles.mediaImage}>
                <Image src={seoImage} alt="Laptop displaying an analytics interface" fill placeholder="blur" sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(100vw - 3rem), 1216px" className={styles.mediaPhoto} />
                <div className={styles.mediaWash} aria-hidden="true" />
              </div>
              <div className={styles.mediaInterface} aria-hidden="true">
                <div className={styles.mediaInterfaceTop}><span>Discovery review / Source system</span><i /></div>
                <div className={styles.mediaSource}><span>Priority source</span><strong>Clear page purpose</strong><small>Conceptual view</small></div>
                <div className={styles.mediaChecks}>
                  <div><span>Access</span><i /><strong>Retrievable</strong></div>
                  <div><span>Context</span><i /><strong>Connected</strong></div>
                  <div><span>Evidence</span><i /><strong>Supported</strong></div>
                  <div><span>Discovery</span><i /><strong>Eligible</strong></div>
                </div>
                <div className={styles.mediaInterfaceFoot}><span>Review / Qualitative</span><span>No ranking projection</span></div>
              </div>
              <figcaption className={styles.mediaCaption}>
                <p className={styles.sectionLabel}>Evidence in context</p>
                <h2>Measure the system, not a vanity snapshot.</h2>
                <span>Technical health, visibility, engagement, qualified actions, and business context belong in the same review.</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className={styles.capabilitySection}>
        <div className={styles.container}>
          <Reveal className={styles.capabilityHeading}><p className={styles.sectionLabel}>What we handle</p><h2>Connected capability from foundation to discovery.</h2></Reveal>
          <div className={styles.capabilityRows}>
            {capabilities.map((capability, index) => (
              <Reveal key={capability.number} delay={(index % 2) * 50}>
                <article><span>{capability.number}</span><div><h3>{capability.title}</h3><small>{capability.signal}</small></div><div className={styles.capabilitySignal} aria-hidden="true"><i /><i /><i /></div><p>{capability.description}</p></article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.operatingSection}>
        <div className={styles.container}>
          <Reveal className={styles.sectionIntro}><p className={styles.sectionLabel}>SEO operating model</p><div><h2>How we build compounding visibility systems.</h2><p>Each phase connects implementation, publishing, authority, and measurement to the next decision.</p></div></Reveal>
          <Reveal delay={90}><SeoOperatingModel /></Reveal>
        </div>
      </section>

      <section className={styles.scenarioSection}>
        <div className={styles.container}>
          <Reveal className={styles.scenarioHeader}><div><p className={styles.sectionLabel}>Representative growth scenario</p><h2>A maturity path, not a ranking forecast.</h2></div><p>This conceptual operating model shows how an organic program can become more coherent. It is not a client result, traffic forecast, ranking promise, or guarantee.</p></Reveal>
          <ol className={styles.scenarioPath}>
            {scenarioStages.map((stage, index) => (
              <li key={stage.title}><Reveal delay={index * 50}><div className={styles.scenarioStage}><span>0{index + 1}</span><div aria-hidden="true"><i /><i /><i /></div><h3>{stage.title}</h3><p>{stage.detail}</p></div></Reveal></li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.container}><div className={styles.faqLayout}><Reveal><p className={styles.sectionLabel}>FAQ</p><h2>SEO, answered.</h2><p>Timelines, AI search, content, and collaboration.</p></Reveal><Reveal delay={80}><FAQ items={service.faqs} /></Reveal></div></div>
      </section>

      <section className={styles.relatedSection}>
        <div className={styles.container}>
          <Reveal className={styles.relatedHeader}><p className={styles.sectionLabel}>Related services</p><h2>Organic visibility compounds inside a wider growth system.</h2></Reveal>
          <div className={styles.relatedLinks}>
            {relatedServices.map((related, index) => (
              <Reveal key={related.slug} delay={index * 50}><Link href={`/services/${related.slug}`}><span>{related.index}</span><strong>{related.title}</strong><p>{related.tagline}</p><div aria-hidden="true"><i /><i /><i /></div><b aria-hidden="true">→</b></Link></Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.finalCta}>
        <CTASection title="Build a visibility system that can compound." lede="Bring the current site, priority markets, technical context, content estate, and growth goal. We’ll define the most useful next step." secondaryHref="/work" secondaryLabel="Explore our approach" />
      </div>
    </>
  );
}
