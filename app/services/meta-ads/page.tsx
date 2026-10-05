import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import {
  CreativeTestingMatrix,
  MetaAdsJourney,
  MetaCampaignModel,
} from "@/components/MetaAdsSystems";
import Reveal from "@/components/Reveal";
import styles from "@/components/MetaAdsExperience.module.css";
import metaAdsImage from "@/public/images/adverli/services/meta-ads.jpg";
import { getService, services } from "@/lib/services";
import { createPageMetadata } from "@/lib/site";
import { createServiceStructuredData } from "@/lib/structured-data";

const service = getService("meta-ads")!;

export const metadata: Metadata = createPageMetadata({
  title: service.title,
  description: service.tagline,
  path: "/services/meta-ads",
});

const creativeInputs = [
  { label: "Creative angle", value: "What the idea makes relevant" },
  { label: "Hook", value: "Why attention should begin" },
  { label: "Format", value: "How the idea is experienced" },
  { label: "Offer", value: "What moves the decision forward" },
  { label: "Landing experience", value: "Where the promise continues" },
] as const;

const capabilities = [
  {
    number: "01",
    title: "Creative strategy & production",
    signal: "Ideas with a reason",
    description: service.deliverables[0].description,
  },
  {
    number: "02",
    title: "Structured creative testing",
    signal: "Questions the account can answer",
    description: service.deliverables[1].description,
  },
  {
    number: "03",
    title: "Conversions API & signal quality",
    signal: "Stronger event inputs",
    description: service.deliverables[2].description,
  },
  {
    number: "04",
    title: "Full-funnel architecture",
    signal: "Clear campaign roles",
    description: service.deliverables[3].description,
  },
  {
    number: "05",
    title: "Landing-page alignment",
    signal: "A continuous message",
    description: service.deliverables[4].description,
  },
  {
    number: "06",
    title: "Measurement & reporting",
    signal: "More complete decisions",
    description: service.deliverables[5].description,
  },
] as const;

const signalNodes = [
  { number: "01", title: "User action", detail: "A meaningful site behavior" },
  { number: "02", title: "Pixel / event", detail: "A consistent event definition" },
  { number: "03", title: "CAPI", detail: "A server-side event path" },
  { number: "04", title: "Deduplication", detail: "One action, one usable event" },
  { number: "05", title: "Meta", detail: "A cleaner optimization input" },
  { number: "06", title: "Measurement", detail: "Evidence read in context" },
] as const;

const scenarioStages = [
  { title: "Baseline", detail: "Map structure, creative history, signal health, and the post-click journey." },
  { title: "Signal cleanup", detail: "Repair event definitions, CAPI, deduplication, and the measurement baseline." },
  { title: "Creative learning", detail: "Test focused angles, hooks, formats, audiences, and landing experiences." },
  { title: "Consolidation", detail: "Move useful learning into a simpler structure with denser evidence." },
  { title: "Controlled scale", detail: "Increase investment when signal, creative durability, and economics support it." },
] as const;

export default function MetaAdsPage() {
  const relatedServices = services.filter((item) => item.slug !== "meta-ads");

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
                Meta Ads
              </p>
              <h1>{service.heroHeadline}</h1>
              <p className={styles.heroLede}>{service.heroLede}</p>
              <div className={styles.heroActions}>
                <Button href="/contact">Book a strategy call</Button>
                <Button href="#test-signal-scale" variant="ghost">
                  Explore the system
                </Button>
              </div>
            </Reveal>

            <Reveal initiallyVisible delay={140} className={styles.heroVisualWrap}>
              <figure className={styles.heroSystem} aria-labelledby="meta-system-caption">
                <figcaption id="meta-system-caption" className="sr-only">
                  A conceptual paid social operating system connecting creative,
                  testing, signal quality, and controlled scale.
                </figcaption>
                <div className={styles.heroStageRail} aria-hidden="true">
                  <span>Creative</span><span>Test</span><span>Signal</span><span>Scale</span>
                </div>
                <div className={styles.heroCreativeMain} aria-hidden="true">
                  <div className={styles.heroCreativeTop}>
                    <span>9:16 / Creative 01</span><i />
                  </div>
                  <div className={styles.heroCreativeScene}>
                    <div className={styles.heroCreativeArtwork}>
                      <div className={styles.heroStoryProgress}><i /><i /><i /></div>
                      <span>Opening frame / 00:03</span>
                      <div className={styles.heroArtworkSubject}>
                        <i /><i /><i />
                      </div>
                      <p>One clear idea<br />before the scroll.</p>
                    </div>
                    <span>Angle / Clarity</span>
                    <strong>Make the first idea matter.</strong>
                    <small>Hook → message → next step</small>
                  </div>
                  <div className={styles.heroCreativeFooter}>
                    <span>Version / A</span><i>→</i>
                  </div>
                </div>
                <div className={styles.heroVariants} aria-hidden="true">
                  <div data-variant="static">
                    <span>Static / 1:1</span><strong>Hook A</strong>
                    <div className={styles.heroVariantPreview}><b>Clarity</b><small>One promise</small><i /></div>
                  </div>
                  <div data-variant="motion">
                    <span>Motion / 4:5</span><strong>Hook B</strong>
                    <div className={styles.heroVariantPreview}><b>Sequence</b><small>Three frames</small><i /></div>
                  </div>
                  <div data-variant="ugc">
                    <span>UGC / 9:16</span><strong>Hook C</strong>
                    <div className={styles.heroVariantPreview}><b>Voice</b><small>Direct opening</small><i /></div>
                  </div>
                </div>
                <div className={styles.heroAudience} aria-hidden="true">
                  <p>Audience / signal layer</p>
                  <div><span>Cold</span><span>Warm</span><span>Return</span></div>
                  <i /><i /><i />
                </div>
                <div className={styles.heroSignalCard} aria-hidden="true">
                  <span>Signal connected</span>
                  <div><i /><i /><i /><i /></div>
                  <small>Event path / ready</small>
                </div>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={styles.creativeInputSection}>
        <div className={styles.container}>
          <div className={styles.creativeInputLayout}>
            <Reveal className={styles.creativeStatement}>
              <p className={styles.sectionLabel}>Creative is the input</p>
              <h2>Creative is not decoration.<br /><em>It is the input.</em></h2>
              <p>
                As targeting becomes more automated, the account depends more
                heavily on the quality, clarity, and range of the creative it receives.
              </p>
            </Reveal>
            <Reveal delay={100} className={styles.creativeCollageWrap}>
              <div className={styles.creativeCollage} aria-hidden="true">
                <div className={styles.collagePortrait}>
                  <div className={styles.collageStoryUi}>
                    <div><i /><i /><i /></div>
                    <span>Opening frame</span>
                    <strong>01</strong>
                    <p>Attention begins with relevance.</p>
                  </div>
                  <span>9:16 / Hook</span><strong>One idea.<br />Immediate relevance.</strong><i />
                </div>
                <div className={styles.collageSquare}>
                  <div className={styles.collageSquareUi}>
                    <span>Angle / 01</span>
                    <strong>One promise.</strong>
                    <small>Made unmistakable.</small>
                  </div>
                  <span>1:1 / Static</span><strong>Clarity holds attention.</strong><i />
                </div>
                <div className={styles.collageProduct}>
                  <span>4:5 / Motion</span>
                  <div>
                    <i><b>01</b><small>Hook</small></i>
                    <i><b>02</b><small>Proof</small></i>
                    <i><b>03</b><small>Action</small></i>
                  </div>
                  <small>Angle / 02 · Three-frame sequence</small>
                </div>
              </div>
            </Reveal>
          </div>
          <div className={styles.creativeInputs}>
            {creativeInputs.map((input, index) => (
              <Reveal key={input.label} delay={index * 55}>
                <div>
                  <span>0{index + 1}</span>
                  <strong>{input.label}</strong>
                  <p>{input.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="test-signal-scale" className={styles.journeySection}>
        <div className={styles.container}>
          <Reveal className={styles.sectionIntro}>
            <p className={styles.sectionLabel}>Test → signal → scale</p>
            <div>
              <h2>Learning needs a system.</h2>
              <p>
                Each stage creates the evidence required for the next. Select a
                stage to see how a controlled program moves forward.
              </p>
            </div>
          </Reveal>
          <Reveal delay={90}><MetaAdsJourney /></Reveal>
        </div>
      </section>

      <section className={styles.testingSection}>
        <div className={styles.container}>
          <Reveal className={styles.testingHeading}>
            <p className={styles.sectionLabel}>Creative testing system</p>
            <h2>Combinations, not random launches.</h2>
            <p>
              A useful test connects the hypothesis, creative, audience,
              landing page, and measurement path—then turns the response into learning.
            </p>
          </Reveal>
          <Reveal delay={90}><CreativeTestingMatrix /></Reveal>
        </div>
      </section>

      <section className={styles.signalSection}>
        <div className={styles.container}>
          <Reveal className={styles.signalHeading}>
            <p className={styles.sectionLabel}>Signal / CAPI</p>
            <h2>The algorithm is only as useful as the signal it receives.</h2>
            <p>
              Server-side signal, consistent event definitions, deduplication,
              and enhanced matching can create cleaner measurement inputs. They
              do not remove the need to read attribution in context.
            </p>
          </Reveal>
          <Reveal delay={90}>
            <div className={styles.signalSystem}>
              <div className={styles.signalLanes} aria-hidden="true">
                <span>Browser</span><span>Server</span><span>Platform</span><span>Business view</span>
              </div>
              <ol className={styles.signalFlow} aria-label="Conversion signal flow">
                {signalNodes.map((node, index) => (
                  <li key={node.number}>
                    <span>{node.number}</span>
                    <div><strong>{node.title}</strong><p>{node.detail}</p></div>
                    {index < signalNodes.length - 1 && <i aria-hidden="true">↓</i>}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.mediaSection}>
        <div className={styles.container}>
          <Reveal>
            <div className={styles.mediaMoment}>
              <div className={styles.mediaImage}>
                <Image
                  src={metaAdsImage}
                  alt="Laptop displaying an analytics interface beside a smartphone"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(100vw - 3rem), 1216px"
                  className={styles.mediaPhoto}
                />
                <div className={styles.mediaWash} aria-hidden="true" />
              </div>
              <div className={styles.mediaFormatRail} aria-hidden="true">
                <span data-active="true">9:16</span><span>1:1</span><span>4:5</span>
              </div>
              <div className={styles.mediaCapture} aria-hidden="true">
                <div>
                  <span>Creative signal / input 01</span>
                  <i /><i /><i /><i />
                </div>
                <small>Observe / isolate / iterate</small>
              </div>
              <div className={styles.mediaLab} aria-hidden="true">
                <div className={styles.mediaLabTop}><span>Creative lab / Iteration 03</span><i /></div>
                <div className={styles.mediaLabCanvas}>
                  <div>
                    <span>Hook</span>
                    <div><strong>The opening question</strong><small>First frame / immediate relevance</small></div>
                    <div className={styles.mediaLabPreview} data-preview="hook"><i /><i /><i /></div>
                  </div>
                  <div>
                    <span>Angle</span>
                    <div><strong>The reason to care</strong><small>Message / proof / continuation</small></div>
                    <div className={styles.mediaLabPreview} data-preview="angle"><i /><i /><i /></div>
                  </div>
                  <div>
                    <span>Version</span>
                    <div><strong>The next variation</strong><small>Preserve learning / change one input</small></div>
                    <div className={styles.mediaLabPreview} data-preview="version"><i /><i /><i /></div>
                  </div>
                </div>
                <div className={styles.mediaLabFooter}>
                  <span>Format / 9:16</span>
                  <div><i /> Hook <i /> Body <i /> Action</div>
                  <span>Iteration / Ready</span>
                </div>
              </div>
              <div className={styles.mediaCaption}>
                <p className={styles.sectionLabel}>Creative production</p>
                <h2>Creative that is built to learn.</h2>
                <span>
                  Every version should answer a question and make the next
                  creative decision more informed.
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.capabilitySection}>
        <div className={styles.container}>
          <Reveal className={styles.capabilityHeading}>
            <p className={styles.sectionLabel}>What we actually handle</p>
            <h2>Connected capability, from idea to evidence.</h2>
          </Reveal>
          <div className={styles.capabilityRows}>
            {capabilities.map((capability, index) => (
              <Reveal key={capability.number} delay={(index % 2) * 55}>
                <article>
                  <span>{capability.number}</span>
                  <div>
                    <h3>{capability.title}</h3>
                    <small>{capability.signal}</small>
                    <div className={styles.capabilityTrace} aria-hidden="true">
                      <i /><i /><i /><i />
                    </div>
                  </div>
                  <p>{capability.description}</p>
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
              <h2>How we run Meta Ads engagements.</h2>
              <p>
                Work, signal, and the next decision remain connected throughout
                the engagement—not separated into reporting after the fact.
              </p>
            </div>
          </Reveal>
          <Reveal delay={90}><MetaCampaignModel /></Reveal>
        </div>
      </section>

      <section className={styles.scenarioSection}>
        <div className={styles.container}>
          <Reveal className={styles.scenarioHeader}>
            <div>
              <p className={styles.sectionLabel}>Representative growth scenario</p>
              <h2>A decision path, not a performance projection.</h2>
            </div>
            <p>
              This conceptual operating model shows how a Meta Ads program can
              mature. It is not a client result, forecast, or guarantee.
            </p>
          </Reveal>
          <ol className={styles.scenarioPath}>
            {scenarioStages.map((stage, index) => (
              <Reveal key={stage.title} delay={index * 55}>
                <li>
                  <span>0{index + 1}</span>
                  <div className={styles.scenarioSignal} aria-hidden="true">
                    <i /><i /><i />
                  </div>
                  <div><h3>{stage.title}</h3><p>{stage.detail}</p></div>
                  {index < scenarioStages.length - 1 && <i aria-hidden="true">→</i>}
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
              <h2>Meta Ads, answered.</h2>
              <p>Budget, creative production, measurement, and responsible scaling.</p>
            </Reveal>
            <Reveal delay={80}><FAQ items={service.faqs} /></Reveal>
          </div>
        </div>
      </section>

      <section className={styles.relatedSection}>
        <div className={styles.container}>
          <Reveal className={styles.relatedHeader}>
            <p className={styles.sectionLabel}>Related services</p>
            <h2>Paid social works inside a wider growth system.</h2>
          </Reveal>
          <div className={styles.relatedLinks}>
            {relatedServices.map((related, index) => (
              <Reveal key={related.slug} delay={index * 55}>
                <Link href={`/services/${related.slug}`}>
                  <span>{related.index}</span>
                  <strong>{related.title}</strong>
                  <p>{related.tagline}</p>
                  <span className={styles.relatedSignal} aria-hidden="true"><i /><i /><i /></span>
                  <i aria-hidden="true">→</i>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.finalCta}>
        <CTASection
          title="Build a Meta Ads system that can actually learn."
          lede="Bring the goal, the current constraint and the available signal. We’ll define the most useful next step."
          secondaryHref="/work"
          secondaryLabel="Explore our approach"
        />
      </div>
    </>
  );
}
