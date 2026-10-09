import Link from "next/link";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import styles from "./ContactExperience.module.css";

const intakeSignals = ["Goal", "Context", "Constraint", "Next step"] as const;

const nextSteps = [
  {
    step: "01",
    title: "Review",
    description:
      "We review the business goal, current setup, and constraint.",
  },
  {
    step: "02",
    title: "Align",
    description:
      "We identify the most useful starting point and clarify scope.",
  },
  {
    step: "03",
    title: "Next step",
    description:
      "If there is a fit, we define the engagement and working cadence.",
  },
] as const;

const regions = [
  "United States",
  "United Kingdom & Europe",
  "GCC & Middle East",
  "Australia",
  "Other global markets",
] as const;

export default function ContactExperience() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="contact-title">
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.shell}>
          <div className={styles.heroLayout}>
            <Reveal initiallyVisible className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                <span aria-hidden="true">01</span>
                Start a conversation
              </p>
              <h1 id="contact-title">Bring us the growth problem.</h1>
              <p className={styles.heroLede}>
                Share the goal, current setup, market, and constraint. We&apos;ll
                help define the most useful next step.
              </p>
              <div className={styles.heroActions}>
                <Button href="#contact-intake">Start the brief</Button>
                <a className={styles.textLink} href={site.emailHref}>
                  Email Adverli <span aria-hidden="true">↗</span>
                </a>
              </div>
            </Reveal>

            <Reveal initiallyVisible delay={120} className={styles.intakeMap}>
              <div className={styles.mapHeader}>
                <span>Enquiry routing</span>
                <span className={styles.liveState}>
                  <i aria-hidden="true" /> Direct intake
                </span>
              </div>
              <ol className={styles.signalPath} aria-label="Our enquiry review sequence">
                {intakeSignals.map((signal, index) => (
                  <li key={signal}>
                    <span className={styles.signalIndex}>0{index + 1}</span>
                    <span className={styles.signalNode} aria-hidden="true" />
                    <strong>{signal}</strong>
                  </li>
                ))}
              </ol>
              <div className={styles.mapFooter} aria-hidden="true">
                <span>Useful context in</span>
                <i />
                <span>Clear direction out</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="contact-intake"
        className={styles.intakeSection}
        aria-labelledby="intake-title"
      >
        <div className={styles.shell}>
          <div className={styles.intakeLayout}>
            <Reveal className={styles.intakeCopy}>
              <p className={styles.sectionLabel}>Contact / Direct</p>
              <h2 id="intake-title">Start with context.</h2>
              <p>
                You do not need a perfect brief. Tell us what the business is
                trying to change, what is already in place, and where progress
                is getting stuck.
              </p>

              <address className={styles.contactDetails}>
                <span>Direct contact</span>
                <a href={site.emailHref}>{site.email}</a>
                <a href={site.phoneHref}>{site.phone}</a>
              </address>

              <div className={styles.deliveryNote}>
                <span className={styles.deliveryMarker} aria-hidden="true" />
                <div>
                  <strong>Global delivery / Remote collaboration</strong>
                  <p>
                    Structured around the market, team, and problem—not a
                    physical office location.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100} className={styles.formPanel}>
              <div className={styles.formHeader}>
                <div>
                  <span>Secure enquiry</span>
                  <strong>Growth brief</strong>
                </div>
                <span className={styles.formStatus}>
                  <i aria-hidden="true" /> Ready
                </span>
              </div>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className={styles.nextSection} aria-labelledby="next-title">
        <div className={styles.shell}>
          <Reveal className={styles.sectionIntro}>
            <p className={styles.sectionLabel}>What happens next</p>
            <h2 id="next-title">A useful response, not a sales sequence.</h2>
          </Reveal>

          <div className={styles.nextGrid}>
            {nextSteps.map((item, index) => (
              <Reveal key={item.step} delay={index * 80} className={styles.nextStep}>
                <div className={styles.stepTopline}>
                  <span>{item.step}</span>
                  <i aria-hidden="true" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.routingSection} aria-labelledby="routing-title">
        <div className={styles.routingGrid} aria-hidden="true" />
        <div className={styles.shell}>
          <div className={styles.routingLayout}>
            <Reveal className={styles.routingCopy}>
              <p className={styles.sectionLabel}>Capability routing</p>
              <h2 id="routing-title">
                One problem may involve more than one discipline.
              </h2>
              <p>
                We shape the engagement around the constraint, then bring in
                only the capabilities the situation requires.
              </p>
              <Link className={styles.inlineLink} href="/services">
                Explore all services <span aria-hidden="true">→</span>
              </Link>
            </Reveal>

            <Reveal delay={100} className={styles.capabilityList}>
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className={styles.capabilityRow}
                >
                  <span>{service.index}</span>
                  <strong>{service.title}</strong>
                  <i aria-hidden="true" />
                  <span aria-hidden="true">↗</span>
                </Link>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className={styles.globalSection} aria-labelledby="global-title">
        <div className={styles.shell}>
          <div className={styles.globalLayout}>
            <Reveal className={styles.globalCopy}>
              <p className={styles.sectionLabel}>Global working model</p>
              <h2 id="global-title">Market-aware work, delivered remotely.</h2>
              <p>
                Adverli works with businesses across global markets through a
                direct, flexible collaboration model shaped around the market
                and the team involved.
              </p>
              <div className={styles.globalSignal} aria-hidden="true">
                <span>Remote collaboration</span>
                <i />
                <span>Market context</span>
              </div>
            </Reveal>

            <Reveal delay={100} className={styles.regionPanel}>
              <div className={styles.regionHeader}>
                <span>Delivery coverage</span>
                <span>05 market groups</span>
              </div>
              <ul>
                {regions.map((region, index) => (
                  <li key={region}>
                    <span>0{index + 1}</span>
                    <strong>{region}</strong>
                    <i aria-hidden="true" />
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={styles.finalSection} aria-labelledby="final-title">
        <div className={styles.finalGrid} aria-hidden="true" />
        <div className={styles.shell}>
          <Reveal className={styles.finalInner}>
            <p className={styles.sectionLabel}>The next useful move</p>
            <h2 id="final-title">Start with the problem.</h2>
            <p>
              You do not need a finished brief. Share the goal, the current
              situation, and what is getting in the way.
            </p>
            <div className={styles.finalActions}>
              <Button href="#contact-intake">Book a strategy call</Button>
              <Button href={site.emailHref} variant="ghost">
                Email Adverli
              </Button>
            </div>
            <a className={styles.phoneLink} href={site.phoneHref}>
              Or call {site.phone}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
