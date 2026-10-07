import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import {
  ContentJourneySystem,
  ContentOperatingModel,
  ContentProductionBoard,
} from "@/components/ContentCreationSystems";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import styles from "@/components/ContentCreationExperience.module.css";
import contentImage from "@/public/images/adverli/services/content-creation.jpg";
import { getService, services } from "@/lib/services";
import { createPageMetadata } from "@/lib/site";
import { createServiceStructuredData } from "@/lib/structured-data";

const service = getService("content-creation")!;

export const metadata: Metadata = createPageMetadata({
  title: service.title,
  description: service.tagline,
  path: "/services/content-creation",
});

const thesisInputs = [
  ["01", "Audience", "Who needs a useful reason to pay attention"],
  ["02", "Message", "What the work must communicate clearly"],
  ["03", "Angle", "Why this expression earns interest now"],
  ["04", "Format", "How the idea should be experienced"],
  ["05", "Channel", "Where the content has a relevant role"],
] as const;

const capabilityGroups = [
  {
    number: "01",
    title: "Narrative & editorial",
    signal: "Clarify the idea",
    description: "Positioning, messaging, written content, articles, editorial systems, and useful source material shaped around audience and commercial purpose.",
    formats: ["Positioning", "Written content", "Editorial"],
  },
  {
    number: "02",
    title: "Social production",
    signal: "Adapt the story",
    description: "Social content, short-form video, and UGC-style creative built for the way each channel and audience moment is actually used.",
    formats: ["Social content", "Short-form", "UGC-style"],
  },
  {
    number: "03",
    title: "Visual production",
    signal: "Make the message visible",
    description: "Static creative, motion, design, video, and campaign assets developed as related expressions rather than disconnected deliverables.",
    formats: ["Static creative", "Motion", "Campaign creative"],
  },
  {
    number: "04",
    title: "System extension",
    signal: "Move useful work further",
    description: "Strategic repurposing, format adaptation, content libraries, and distribution planning that extend strong ideas where it makes sense.",
    formats: ["Repurposing", "Asset systems", "Distribution planning"],
  },
] as const;

const scenarioStages = [
  {
    title: "Baseline",
    detail: "Review the audience, offer, current messages, assets, formats, channels, workflow, and production constraints.",
  },
  {
    title: "Message clarity",
    detail: "Define the useful point of view, message hierarchy, voice, proof, and role content should play in the wider growth system.",
  },
  {
    title: "Creative system",
    detail: "Build connected concepts, formats, briefs, visual rules, review points, and channel roles around that direction.",
  },
  {
    title: "Consistent production",
    detail: "Create and adapt approved ideas at a cadence the team can sustain without lowering the standard or losing purpose.",
  },
  {
    title: "Distribution & learning",
    detail: "Place assets in relevant contexts, review the response, and use evidence to refine themes, formats, reuse, and the next production cycle.",
  },
] as const;

const faqs = [
  {
    q: "What types of content do you create?",
    a: "Scope can include positioning and messaging, written and editorial content, social content, static creative, campaign assets, short-form video, motion, UGC-style content, repurposing, and distribution planning. The mix is defined by the audience, channel, commercial need, and production reality.",
  },
  {
    q: "Do you handle video and short-form content?",
    a: "Yes. We can plan concepts, scripts, shot structures, production, editing, motion, and channel adaptations for short-form and other video formats. The exact production model depends on the brief, location, talent, source material, and review requirements.",
  },
  {
    q: "Can you work with our existing brand team?",
    a: "Yes. We can work inside established brand guidance and approval processes, or help clarify the message and production system where those foundations are still developing. Ownership and review points are defined before production begins.",
  },
  {
    q: "How do you decide what content to produce?",
    a: "We start with the audience, offer, commercial goal, current channels, existing assets, and evidence available. Ideas are prioritized by usefulness, relevance, format fit, production effort, distribution role, and what the team can learn from publishing them.",
  },
] as const;

const relatedSlugs = ["website-development", "meta-ads", "google-ads", "seo"];

export default function ContentCreationPage() {
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
              <p className={styles.eyebrow}><span>{service.index}</span><span aria-hidden="true">/</span>{service.title}</p>
              <h1>Content built to do a job, not fill a feed.</h1>
              <p className={styles.heroLede}>
                We connect positioning, creative direction, production, format,
                distribution, and learning so every piece of content has a
                clearer commercial purpose.
              </p>
              <div className={styles.heroActions}>
                <Button href="/contact">Book a strategy call</Button>
                <Button href="#content-system" variant="ghost">Explore the system</Button>
              </div>
            </Reveal>
            <Reveal initiallyVisible delay={130} className={styles.heroVisualWrap}>
              <ContentProductionBoard />
            </Reveal>
          </div>
        </div>
      </section>

      <section className={styles.thesisSection}>
        <div className={styles.container}>
          <Reveal className={styles.thesisLayout}>
            <div><p className={styles.sectionLabel}>Content thesis</p><h2>Attention is earned before distribution begins.</h2></div>
            <div className={styles.thesisCopy}>
              <p>Strong content starts with a clear audience, message, angle, and useful reason to exist. Format and channel come after the job is understood.</p>
              <div className={styles.thesisRoute} aria-hidden="true"><i /><i /><i /><i /><i /></div>
            </div>
          </Reveal>
          <div className={styles.thesisInputs}>
            {thesisInputs.map(([number, title, detail], index) => (
              <Reveal key={number} delay={index * 45}><article><span>{number}</span><h3>{title}</h3><p>{detail}</p></article></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="content-system" className={styles.journeySection}>
        <div className={styles.container}>
          <Reveal className={styles.sectionIntro}>
            <p className={styles.sectionLabel}>Interactive content system</p>
            <div><h2>A useful idea needs a path from position to learning.</h2><p>Explore how a content brief moves through creative direction, production, distribution, and the next decision.</p></div>
          </Reveal>
          <Reveal delay={80}><ContentJourneySystem /></Reveal>
        </div>
      </section>

      <section className={styles.mediaSection}>
        <div className={styles.container}>
          <Reveal>
            <figure className={styles.mediaMoment}>
              <div className={styles.mediaImage}>
                <Image
                  src={contentImage}
                  alt="Camera and editing screens in a content production workspace"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(100vw - 3rem), 1216px"
                  className={styles.mediaPhoto}
                />
                <div className={styles.mediaWash} aria-hidden="true" />
              </div>
              <div className={styles.mediaInterface} aria-hidden="true">
                <div className={styles.mediaInterfaceTop}><span>Production board / Sequence 01</span><i /></div>
                <div className={styles.mediaBrief}><span>Creative brief</span><strong>One message / multiple expressions</strong><small>Status / Direction set</small></div>
                <div className={styles.mediaStoryboard}>
                  <div><span>01</span><i /><small>Hook</small></div>
                  <div data-active="true"><span>02</span><i /><small>Build</small></div>
                  <div><span>03</span><i /><small>Payoff</small></div>
                  <div><span>04</span><i /><small>Action</small></div>
                </div>
                <div className={styles.mediaTimeline}><span>00:00</span><div><i /><i /><i /><i /></div><span>00:24</span></div>
                <div className={styles.mediaInterfaceFoot}><span>Version 02 / Review</span><span>Next / Refine</span></div>
              </div>
              <figcaption className={styles.mediaCaption}>
                <p className={styles.sectionLabel}>Creative production</p>
                <h2>From idea to publishable asset.</h2>
                <span>Direction, craft, version control, and channel context stay connected throughout production.</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className={styles.capabilitySection}>
        <div className={styles.container}>
          <Reveal className={styles.capabilityHeading}><p className={styles.sectionLabel}>Connected capability</p><h2>One creative system. Multiple formats.</h2></Reveal>
          <div className={styles.capabilityGroups}>
            {capabilityGroups.map((group, index) => (
              <Reveal key={group.number} delay={(index % 2) * 60}>
                <article className={styles.capabilityGroup}>
                  <div className={styles.capabilityIdentity}><span>{group.number}</span><div><h3>{group.title}</h3><small>{group.signal}</small></div></div>
                  <div className={styles.capabilityFrames} aria-hidden="true"><i /><i /><i /></div>
                  <p>{group.description}</p>
                  <ul>{group.formats.map((format) => <li key={format}>{format}</li>)}</ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.architectureSection}>
        <div className={styles.container}>
          <Reveal className={styles.architectureHeader}>
            <div><p className={styles.sectionLabel}>Content architecture</p><h2>One idea can travel further when the system is connected.</h2></div>
            <p>A strong source idea can support several useful expressions when the audience and channel justify them. Strategic reuse is a choice, not a volume rule.</p>
          </Reveal>
          <Reveal delay={80}>
            <figure className={styles.repurposeMap} aria-labelledby="repurpose-caption">
              <figcaption id="repurpose-caption" className="sr-only">A conceptual content network showing how one core idea can support several channel-specific outputs.</figcaption>
              <div className={styles.repurposeTop} aria-hidden="true"><span>Source system / Selective reuse</span><i /></div>
              <div className={styles.repurposeCore} aria-hidden="true"><span>Core idea</span><strong>Useful source</strong><small>Message / Evidence / Point of view</small></div>
              <div className={styles.repurposeOutputs} aria-hidden="true">
                <div data-output="article"><span>01</span><strong>Article</strong><small>Depth</small></div>
                <div data-output="social"><span>02</span><strong>Social post</strong><small>Single idea</small></div>
                <div data-output="video"><span>03</span><strong>Short-form video</strong><small>Story</small></div>
                <div data-output="email"><span>04</span><strong>Email</strong><small>Context</small></div>
                <div data-output="sales"><span>05</span><strong>Sales / Landing support</strong><small>Decision</small></div>
              </div>
              <div className={styles.repurposeLines} aria-hidden="true"><i /><i /><i /><i /><i /></div>
              <div className={styles.repurposeFoot} aria-hidden="true"><span><i /> Adapt where useful</span><span><i /> Preserve the message</span><span><i /> Learn by context</span></div>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className={styles.operatingSection}>
        <div className={styles.container}>
          <Reveal className={styles.sectionIntro}><p className={styles.sectionLabel}>Content operating model</p><div><h2>How we run connected content engagements.</h2><p>Each stage turns creative work into a clearer signal for the next production and distribution decision.</p></div></Reveal>
          <Reveal delay={80}><ContentOperatingModel /></Reveal>
        </div>
      </section>

      <section className={styles.scenarioSection}>
        <div className={styles.container}>
          <Reveal className={styles.scenarioHeader}><div><p className={styles.sectionLabel}>Representative growth scenario</p><h2>A maturity path, not a content-volume promise.</h2></div><p>This is a conceptual operating model, not a client result, forecast, engagement guarantee, or performance projection.</p></Reveal>
          <ol className={styles.scenarioPath}>
            {scenarioStages.map((stage, index) => (
              <li key={stage.title}><Reveal delay={index * 50}><div className={styles.scenarioStage}><span>0{index + 1}</span><div aria-hidden="true"><i /><i /><i /></div><h3>{stage.title}</h3><p>{stage.detail}</p></div></Reveal></li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.container}><div className={styles.faqLayout}><Reveal><p className={styles.sectionLabel}>FAQ</p><h2>Content creation, answered.</h2><p>Formats, video, collaboration, and production priorities.</p></Reveal><Reveal delay={80}><FAQ items={[...faqs]} /></Reveal></div></div>
      </section>

      <section className={styles.relatedSection}>
        <div className={styles.container}>
          <Reveal className={styles.relatedHeader}><p className={styles.sectionLabel}>Related services</p><h2>Content works harder inside a connected growth system.</h2></Reveal>
          <div className={styles.relatedLinks}>
            {relatedServices.map((related, index) => (
              <Reveal key={related.slug} delay={index * 50}><Link href={`/services/${related.slug}`}><span>{related.index}</span><strong>{related.title}</strong><p>{related.tagline}</p><div aria-hidden="true"><i /><i /><i /></div><b aria-hidden="true">→</b></Link></Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.finalCta}>
        <CTASection title="Build a content system with a clearer purpose." lede="Bring the audience, offer, current channels, existing assets, and growth goal. We’ll define the most useful next step." secondaryHref="/work" secondaryLabel="Explore our approach" />
      </div>
    </>
  );
}
