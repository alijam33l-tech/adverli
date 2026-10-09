import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Reveal from "./Reveal";
import planningImage from "@/public/images/adverli/inside-work/planning.jpg";
import { site } from "@/lib/site";
import styles from "./AboutExperience.module.css";

const disciplines = [
  { number: "01", title: "Website", detail: "Foundation", links: [{ label: "Website Development", href: "/services/website-development" }] },
  { number: "02", title: "Demand", detail: "Intent and attention", links: [{ label: "Meta Ads", href: "/services/meta-ads" }, { label: "Google Ads", href: "/services/google-ads" }] },
  { number: "03", title: "Visibility", detail: "Organic discovery", links: [{ label: "SEO", href: "/services/seo" }] },
  { number: "04", title: "Content", detail: "Message and format", links: [{ label: "Content Creation", href: "/services/content-creation" }] },
  { number: "05", title: "Measurement", detail: "Evidence and learning", links: [] },
] as const;

const principles = [
  { number: "01", title: "Commercial context first", description: "Begin with the business goal, constraint, audience, and market before choosing channels or tactics.", signal: "Goal / Constraint / Market" },
  { number: "02", title: "Strategy stays close to execution", description: "The people setting the direction stay involved in the work, feedback, and trade-offs.", signal: "Direction / Work / Feedback" },
  { number: "03", title: "Evidence before expansion", description: "Budget, scope, and complexity should increase only when the available signal supports the next move.", signal: "Signal / Decision / Next move" },
  { number: "04", title: "Disciplines should reinforce each other", description: "Web, media, search, content, and measurement should share learning instead of becoming separate workstreams.", signal: "Share / Learn / Reinforce" },
] as const;

const engagementFactors = ["Business stage", "Existing setup", "Business priorities", "Market", "Channel mix", "Technical complexity", "Internal team capability"] as const;

const engagementModes = [
  { number: "01", title: "Focused capability", description: "One primary discipline where a specific capability or problem needs support.", signal: "One defined constraint" },
  { number: "02", title: "Connected engagement", description: "Several disciplines aligned around one business priority.", signal: "Shared priorities across channels" },
  { number: "03", title: "Embedded growth support", description: "Ongoing strategic and execution support integrated with the client’s team, tools, and workflow.", signal: "Ongoing strategic continuity" },
] as const;

const regions = ["United States", "United Kingdom & Europe", "GCC & Middle East", "Australia", "Other global markets"] as const;

const expectations = [
  { number: "01", title: "Senior-led direction", description: "Priorities and key recommendations stay close to experienced guidance." },
  { number: "02", title: "Direct communication", description: "Clients speak with the people responsible for recommendations and delivery." },
  { number: "03", title: "Flexible scope", description: "Support can expand, narrow, or change as the work and business needs evolve." },
  { number: "04", title: "Client-owned foundations", description: "Accounts, data, code, and assets remain under the client’s ownership and control." },
] as const;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className={styles.sectionLabel}>{children}</p>;
}

function AboutHeroVisual() {
  return (
    <figure className={styles.heroVisual} tabIndex={0} aria-labelledby="about-operating-view-title about-operating-view-description">
      <div className={styles.visualTop}>
        <span id="about-operating-view-title">Growth working view</span>
        <small><i aria-hidden="true" /> One shared brief</small>
      </div>
      <div className={styles.visualCanvas} aria-hidden="true">
        <div className={styles.visualGrid} />
        <div className={`${styles.visualNode} ${styles.goalNode}`}><span>Starting point</span><strong>Business goal</strong><small>Priority made visible</small></div>
        <div className={styles.capabilityOrbit}><span>Website</span><span>Media</span><span>Search</span><span>Content</span><i /></div>
        <div className={`${styles.visualNode} ${styles.signalNode}`}><span>Shared evidence</span><strong>Measurement</strong><small>Learning in view</small></div>
        <div className={`${styles.visualNode} ${styles.decisionNode}`}><span>Next move</span><strong>Clearer decision</strong><small>Refine / Reinvest / Build</small></div>
        <div className={styles.systemPath}><i /><i /><i /></div>
      </div>
      <figcaption id="about-operating-view-description" className={styles.srOnly}>
        A conceptual view of how a business goal moves through website, media, search, content, measurement, and the next move.
      </figcaption>
    </figure>
  );
}

export default function AboutExperience() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="about-page-title">
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.container}>
          <div className={styles.heroLayout}>
            <Reveal initiallyVisible className={styles.heroCopy}>
              <SectionLabel>About Adverli</SectionLabel>
              <h1 id="about-page-title">Growth works better when the disciplines stay connected.</h1>
              <p className={styles.heroLead}>Adverli brings website, media, search, content, and measurement together around the work the business needs to move forward.</p>
              <p className={styles.heroSupport}>Strategy stays close to delivery, giving each discipline a clear purpose from brief through execution.</p>
              <div className={styles.heroActions}>
                <Button href="/contact">Book a strategy call</Button>
                <Button href="/services" variant="ghost">Explore our services</Button>
              </div>
            </Reveal>
            <Reveal initiallyVisible delay={100} className={styles.heroVisualWrap}><AboutHeroVisual /></Reveal>
          </div>
        </div>
      </section>

      <section className={styles.identitySection} aria-labelledby="what-we-are-title">
        <div className={styles.container}>
          <Reveal className={styles.editorialIntro}>
            <SectionLabel>What we are</SectionLabel>
            <div>
              <h2 id="what-we-are-title">A digital growth agency shaped around the problem.</h2>
              <p>Adverli works across website development, paid media, SEO and organic discovery, content, and measurement. Clients can engage one capability or bring several together; the scope follows the business rather than a preset package.</p>
            </div>
          </Reveal>
          <Reveal className={styles.whyStatement}>
            <span>Why Adverli exists</span>
            <div>
              <blockquote>Growth work often becomes fragmented across separate partners, teams, tools, and priorities.</blockquote>
              <p>Adverli was built on a different premise: keep the relevant capabilities close to the same business objective, so execution stays focused and the next move is easier to see.</p>
            </div>
          </Reveal>
          <Reveal className={styles.disciplineSystem}>
            <div className={styles.disciplineHeader} aria-hidden="true"><span>Five connected disciplines</span><i /><small>One shared objective</small></div>
            <ol aria-label="Adverli disciplines">
              {disciplines.map((discipline) => (
                <li key={discipline.number}>
                  <span className={styles.disciplineNumber}>{discipline.number}</span>
                  <i className={styles.disciplinePoint} aria-hidden="true" />
                  <div>
                    <small>{discipline.detail}</small><h3>{discipline.title}</h3>
                    {discipline.links.length > 0 ? (
                      <div className={styles.disciplineLinks}>{discipline.links.map((link) => <Link key={link.href} href={link.href}>{link.label}<span aria-hidden="true">↗</span></Link>)}</div>
                    ) : <p>Evidence helps set the next move.</p>}
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className={styles.principlesSection} aria-labelledby="principles-title">
        <div className={styles.container}>
          <Reveal className={styles.principlesHeading}>
            <div><SectionLabel>Operating principles</SectionLabel><h2 id="principles-title">Clear responsibility creates better decisions.</h2></div>
            <p>The standard is practical: understand the business first, make ownership clear, and let evidence guide when to expand.</p>
          </Reveal>
          <div className={styles.principlesBoard}>
            <div className={styles.principlesCore} aria-hidden="true"><span>Working standard</span><strong>Purpose<br />before<br />activity</strong><div><i /><i /><i /></div></div>
            <ol>
              {principles.map((principle, index) => (
                <li key={principle.number}><Reveal delay={(index % 2) * 70}><article tabIndex={0}><span>{principle.number}</span><div><h3>{principle.title}</h3><p>{principle.description}</p><small>{principle.signal}</small></div><i aria-hidden="true" /></article></Reveal></li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className={styles.mediaSection} aria-labelledby="close-to-work-title">
        <div className={styles.container}>
          <Reveal>
            <figure className={styles.mediaMoment}>
              <Image src={planningImage} alt="People collaborating around a planning board in a workshop setting" fill placeholder="blur" sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(100vw - 3rem), 1216px" className={styles.mediaImage} />
              <div className={styles.mediaWash} aria-hidden="true" />
              <figcaption><SectionLabel>Close to the work</SectionLabel><h2 id="close-to-work-title">Senior direction. Direct communication. Practical execution.</h2><p>Clients work directly with the people shaping recommendations and moving delivery forward, reducing the distance between question, choice, and action.</p></figcaption>
              <div className={styles.mediaSignal} aria-hidden="true"><span>Question</span><i /><span>Choice</span><i /><span>Action</span></div>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className={styles.engagementSection} aria-labelledby="engagement-title">
        <div className={styles.container}>
          <Reveal className={styles.engagementIntro}>
            <div><SectionLabel>Working model</SectionLabel><h2 id="engagement-title">The structure adapts to the problem.</h2></div>
            <p>No two businesses arrive with the same team, tools, market, or constraint. Scope is tailored around the stage, channel mix, technical complexity, and support already available in-house.</p>
          </Reveal>
          <Reveal className={styles.factorRail}><span>Scope inputs</span><ul aria-label="Factors that shape an Adverli engagement">{engagementFactors.map((factor, index) => <li key={factor}><small>{String(index + 1).padStart(2, "0")}</small>{factor}</li>)}</ul></Reveal>
          <div className={styles.engagementModes}>
            {engagementModes.map((mode, index) => <Reveal key={mode.number} delay={index * 70}><article tabIndex={0}><div className={styles.modeTop}><span>{mode.number}</span><i aria-hidden="true" /></div><h3>{mode.title}</h3><p>{mode.description}</p><small>{mode.signal}</small></article></Reveal>)}
          </div>
        </div>
      </section>

      <section className={styles.globalSection} aria-labelledby="global-title">
        <div className={styles.globalGrid} aria-hidden="true" />
        <div className={styles.container}>
          <div className={styles.globalLayout}>
            <Reveal className={styles.globalCopy}><SectionLabel>Global delivery</SectionLabel><h2 id="global-title">Built for different markets—not a single-market playbook.</h2><p>Adverli supports businesses across multiple regions through remote collaboration, flexible delivery, and an approach informed by each market.</p><div className={styles.globalSignal} aria-hidden="true"><span>Remote collaboration</span><i /><span>Market-aware execution</span></div></Reveal>
            <Reveal className={styles.regionSystem}><div className={styles.regionTop} aria-hidden="true"><span>Markets supported</span><i /><small>Global capability</small></div><ul>{regions.map((region, index) => <li key={region}><span>{String(index + 1).padStart(2, "0")}</span><strong>{region}</strong><i aria-hidden="true" /></li>)}</ul></Reveal>
          </div>
        </div>
      </section>

      <section className={styles.expectationsSection} aria-labelledby="expectations-title">
        <div className={styles.container}>
          <Reveal className={styles.expectationsIntro}><SectionLabel>Working together</SectionLabel><h2 id="expectations-title">Clear ownership. Direct access. Fewer unnecessary layers.</h2></Reveal>
          <div className={styles.expectationRows}>{expectations.map((expectation, index) => <Reveal key={expectation.number} delay={(index % 2) * 50}><article tabIndex={0}><span>{expectation.number}</span><h3>{expectation.title}</h3><div aria-hidden="true"><i /><i /></div><p>{expectation.description}</p></article></Reveal>)}</div>
        </div>
      </section>

      <section className={styles.ctaSection} aria-labelledby="about-cta-title">
        <div className={styles.ctaGrid} aria-hidden="true" />
        <div className={styles.container}>
          <Reveal className={styles.ctaLayout}>
            <div><SectionLabel>Start a conversation</SectionLabel><h2 id="about-cta-title">Bring us the growth problem.</h2><p>Share the goal, current setup, market, and constraint. We’ll help define the most useful next step.</p><div className={styles.ctaActions}><Button href="/contact">Book a strategy call</Button><Button href="/work" variant="ghost">Explore our work</Button></div></div>
            <address className={styles.contactBlock}><span>Direct contact</span><Link href={site.emailHref}>{site.email}<i aria-hidden="true">↗</i></Link><Link href={site.phoneHref}>{site.phone}<i aria-hidden="true">↗</i></Link><small>Global delivery / Remote collaboration</small></address>
          </Reveal>
        </div>
      </section>
    </>
  );
}
