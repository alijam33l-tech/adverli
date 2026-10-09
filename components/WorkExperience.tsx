import Image from "next/image";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";
import planning from "@/public/images/adverli/inside-work/planning.jpg";
import performance from "@/public/images/adverli/inside-work/performance.jpg";
import delivery from "@/public/images/adverli/inside-work/delivery.jpg";
import {
  ConnectedExecutionSystem,
  WorkHeroSystem,
  WorkOperatingSequence,
  WorkScenarios,
} from "./WorkSystems";
import styles from "./WorkExperience.module.css";

const engagements = [
  {
    index: "01",
    title: "Focused capability",
    description:
      "A defined problem led by one core discipline, with clear interfaces to the rest of the customer journey.",
    signal: "Specific constraint / Defined scope",
  },
  {
    index: "02",
    title: "Connected engagement",
    description:
      "Multiple disciplines coordinated around one commercial priority, shared measurement, and a common sequence of work.",
    signal: "One brief / Several capabilities",
  },
  {
    index: "03",
    title: "Ongoing growth support",
    description:
      "A continuing operating cadence that uses evidence from delivery to set priorities and guide the next cycle.",
    signal: "Continuous learning / Next action",
  },
] as const;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className={styles.sectionLabel}>{children}</p>;
}

export default function WorkExperience() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="work-title">
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.shell}>
          <div className={styles.heroLayout}>
            <Reveal initiallyVisible className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                <span aria-hidden="true">01</span>
                Work / Problem solving
              </p>
              <h1 id="work-title">Work shaped around the problem.</h1>
              <p>
                Adverli connects website, media, search, content, and measurement
                around the commercial problem instead of forcing every client
                into the same channel plan.
              </p>
              <div className={styles.heroActions}>
                <Button href="/contact">Start a conversation</Button>
                <Button href="#scenarios" variant="ghost">Explore the scenarios</Button>
              </div>
            </Reveal>
            <Reveal initiallyVisible delay={120} className={styles.heroVisual}>
              <WorkHeroSystem />
            </Reveal>
          </div>
        </div>
      </section>

      <section id="scenarios" className={styles.scenarioSection} aria-labelledby="scenarios-title">
        <div className={styles.shell}>
          <Reveal className={styles.sectionIntro}>
            <div>
              <SectionLabel>Representative growth scenarios</SectionLabel>
              <h2 id="scenarios-title">Three problems. Three connected responses.</h2>
            </div>
            <p>
              These scenarios show how Adverli might structure a problem—not
              historical client work or promised outcomes. Each begins with the
              business situation and ends with the next decision.
            </p>
          </Reveal>
          <WorkScenarios />
        </div>
      </section>

      <section className={styles.connectedSection} aria-labelledby="connected-title">
        <div className={styles.connectedGrid} aria-hidden="true" />
        <div className={styles.shell}>
          <Reveal className={styles.connectedHeader}>
            <SectionLabel>Connected execution</SectionLabel>
            <h2 id="connected-title">One brief should connect the work.</h2>
            <p>
              The capabilities are not forced into every engagement. They are
              connected where the commercial priority requires them, with one
              measurement layer informing the next action.
            </p>
          </Reveal>
          <Reveal delay={100} className={styles.connectedVisual}>
            <ConnectedExecutionSystem />
          </Reveal>
        </div>
      </section>

      <section className={styles.processSection} aria-labelledby="process-title">
        <div className={styles.shell}>
          <Reveal className={styles.processHeader}>
            <div>
              <SectionLabel>How the work moves</SectionLabel>
              <h2 id="process-title">Direction becomes delivery. Delivery creates evidence.</h2>
            </div>
            <p>
              The operating sequence keeps diagnosis, planning, execution, and
              learning close enough to influence one another.
            </p>
          </Reveal>
          <Reveal delay={100} className={styles.processVisual}>
            <WorkOperatingSequence />
          </Reveal>
        </div>
      </section>

      <section className={styles.insideSection} aria-labelledby="inside-title">
        <div className={styles.shell}>
          <Reveal className={styles.insideHeader}>
            <div>
              <SectionLabel>Inside the work</SectionLabel>
              <h2 id="inside-title">Planning, building, measuring, refining.</h2>
            </div>
            <p>
              Strategy becomes useful when it stays close to the decisions,
              production, review, and feedback that move the work forward.
            </p>
          </Reveal>

          <div className={styles.mediaBoard}>
            <Reveal className={`${styles.mediaReveal} ${styles.planningWrap}`}>
              <figure className={`${styles.mediaItem} ${styles.planningMedia}`} tabIndex={0}>
                <Image
                  src={planning}
                  alt="People arranging notes on a workshop board during a planning exercise"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 819px) calc(100vw - 2rem), (max-width: 1100px) 58vw, 44rem"
                  className={styles.mediaImage}
                  style={{ objectPosition: "68% center" }}
                />
                <div className={styles.mediaWash} aria-hidden="true" />
                <figcaption><span>01</span><strong>Planning</strong><small>Frame the priority</small></figcaption>
              </figure>
            </Reveal>

            <Reveal delay={80} className={`${styles.mediaReveal} ${styles.buildingWrap}`}>
              <figure className={`${styles.mediaItem} ${styles.buildingMedia}`} tabIndex={0}>
                <Image
                  src={delivery}
                  alt="People collaborating around a laptop and printed working documents"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 819px) 50vw, (max-width: 1100px) 42vw, 32rem"
                  className={styles.mediaImage}
                  style={{ objectPosition: "center 48%" }}
                />
                <div className={styles.mediaWash} aria-hidden="true" />
                <figcaption><span>02</span><strong>Building</strong><small>Move the work</small></figcaption>
              </figure>
            </Reveal>

            <Reveal delay={140} className={`${styles.mediaReveal} ${styles.measuringWrap}`}>
              <figure className={`${styles.mediaItem} ${styles.measuringMedia}`} tabIndex={0}>
                <Image
                  src={performance}
                  alt="Close view of an analytics interface displayed on a laptop"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 819px) 50vw, (max-width: 1100px) 42vw, 32rem"
                  className={styles.mediaImage}
                  style={{ objectPosition: "58% 42%" }}
                />
                <div className={styles.mediaWash} aria-hidden="true" />
                <figcaption><span>03</span><strong>Measuring</strong><small>Read the signal</small></figcaption>
              </figure>
            </Reveal>

            <Reveal delay={180} className={styles.refiningSignal}>
              <span>04</span>
              <div><strong>Refining</strong><small>Evidence informs the next decision.</small></div>
              <i aria-hidden="true" />
              <b aria-hidden="true">Next action →</b>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={styles.engagementSection} aria-labelledby="engagement-title">
        <div className={styles.shell}>
          <Reveal className={styles.engagementHeader}>
            <SectionLabel>Engagement structure</SectionLabel>
            <h2 id="engagement-title">The scope follows the problem.</h2>
            <p>
              Engagements are customized around the goal, market, business stage,
              complexity, channel mix, and operating capacity.
            </p>
          </Reveal>

          <div className={styles.engagementRail}>
            {engagements.map((engagement, index) => (
              <Reveal key={engagement.title} delay={index * 80} className={styles.engagementItem}>
                <div className={styles.engagementTopline}>
                  <span>{engagement.index}</span><i aria-hidden="true" />
                </div>
                <h3>{engagement.title}</h3>
                <p>{engagement.description}</p>
                <small>{engagement.signal}</small>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalSection} aria-labelledby="work-final-title">
        <div className={styles.finalGrid} aria-hidden="true" />
        <div className={styles.shell}>
          <Reveal className={styles.finalInner}>
            <SectionLabel>Start with context</SectionLabel>
            <h2 id="work-final-title">Bring us the problem.</h2>
            <p>
              Share the goal, current system, market, and constraint. Adverli
              will help identify the most useful next step.
            </p>
            <div className={styles.finalActions}>
              <Button href="/contact#contact-intake">Start the brief</Button>
              <Button href={site.emailHref} variant="ghost">Email Adverli</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
