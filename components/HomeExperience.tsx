import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import workspaceImage from "@/public/images/adverli/services/website-development.jpg";
import styles from "./HomeExperience.module.css";

const growthNodes = [
  {
    number: "01",
    title: "Website",
    detail: "Foundation",
    links: [{ label: "Website Development", href: "/services/website-development" }],
  },
  {
    number: "02",
    title: "Demand",
    detail: "Intent & attention",
    links: [
      { label: "Meta Ads", href: "/services/meta-ads" },
      { label: "Google Ads", href: "/services/google-ads" },
    ],
  },
  {
    number: "03",
    title: "Visibility",
    detail: "Discovery",
    links: [{ label: "SEO", href: "/services/seo" }],
  },
  {
    number: "04",
    title: "Content",
    detail: "Message & format",
    links: [{ label: "Content Creation", href: "/services/content-creation" }],
  },
  {
    number: "05",
    title: "Growth signal",
    detail: "Measurement & learning",
    links: [],
  },
] as const;

const proofPoints = [
  {
    number: "01",
    title: "Senior-led",
    signal: "Commercial context stays close",
    detail: "Strategy and key decisions stay close to experienced direction throughout delivery.",
  },
  {
    number: "02",
    title: "Direct communication",
    signal: "Fewer layers between question and action",
    detail: "Clients have direct access to the people making recommendations and doing the work.",
  },
  {
    number: "03",
    title: "Client-owned foundations",
    signal: "Accounts, data, code, and assets remain yours",
    detail: "The operating setup is built for clarity and ownership rather than agency lock-in.",
  },
  {
    number: "04",
    title: "Flexible delivery",
    signal: "Structure follows the problem",
    detail: "Engagements adapt to scope, goals, market, growth stage, complexity, and channel mix.",
  },
] as const;

const markets = [
  "United States",
  "United Kingdom & Europe",
  "GCC & Middle East",
  "Australia",
  "Other global markets",
] as const;

export function HomeGrowthBridge() {
  return (
    <section className={styles.bridgeSection} aria-labelledby="growth-system-title">
      <div className={styles.container}>
        <Reveal className={styles.bridgeIntro}>
          <p className={styles.sectionLabel}>The connected growth system</p>
          <div>
            <h2 id="growth-system-title">The disciplines work harder when the system is connected.</h2>
            <p>Adverli connects the foundation, demand, visibility, content, and measurement loop around one commercial direction.</p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className={styles.bridgeSystem}>
            <div className={styles.bridgeTop} aria-hidden="true"><span>Operating architecture / Shared brief</span><i /><small>System / Connected</small></div>
            <ol className={styles.growthPath}>
              {growthNodes.map((node) => (
                <li key={node.number} className={styles.growthNode}>
                  <div className={styles.nodeMarker} aria-hidden="true"><span>{node.number}</span><i /></div>
                  <div className={styles.nodeCopy}>
                    <small>{node.detail}</small>
                    <h3>{node.title}</h3>
                    {node.links.length > 0 ? (
                      <div className={styles.nodeLinks}>
                        {node.links.map((link) => (
                          <Link key={link.href} href={link.href}>{link.label}<span aria-hidden="true">↗</span></Link>
                        ))}
                      </div>
                    ) : (
                      <p>Evidence informs the next decision.</p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
            <div className={styles.bridgeLoop} aria-hidden="true"><span>Build</span><i /><span>Reach</span><i /><span>Learn</span><i /><span>Improve</span></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function HomeMediaMoment() {
  return (
    <section className={styles.mediaSection} aria-labelledby="connected-execution-title">
      <div className={styles.container}>
        <Reveal>
          <figure className={styles.mediaMoment}>
            <div className={styles.mediaImage}>
              <Image
                src={workspaceImage}
                alt="Developer working across multiple code displays in a digital production workspace"
                fill
                placeholder="blur"
                sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(100vw - 3rem), 1216px"
                className={styles.mediaPhoto}
              />
              <div className={styles.mediaWash} aria-hidden="true" />
            </div>

            <figcaption className={styles.mediaCaption}>
              <p className={styles.sectionLabel}>Connected execution</p>
              <h2 id="connected-execution-title">One brief. Connected execution.</h2>
              <p>Website, media, search, content, and measurement stay close enough to inform one another.</p>
            </figcaption>

            <div className={styles.mediaSystem} aria-hidden="true">
              <div className={styles.mediaSystemTop}><span>Working system / Live context</span><i /></div>
              <div className={styles.mediaBrief}><span>Shared brief</span><strong>Commercial priority</strong><small>Context / Visible</small></div>
              <div className={styles.mediaRoutes}>
                <div><span>Build</span><i /><strong>Foundation</strong></div>
                <div><span>Reach</span><i /><strong>Demand</strong></div>
                <div><span>Learn</span><i /><strong>Signal</strong></div>
              </div>
              <div className={styles.mediaSystemFoot}><span>Decision loop</span><span>Evidence → Next action</span></div>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

export function HomeCredibilitySystem() {
  return (
    <section className={styles.credibilitySection} aria-labelledby="credibility-title">
      <div className={styles.container}>
        <Reveal className={styles.credibilityHeader}>
          <div>
            <p className={styles.sectionLabel}>How the partnership works</p>
            <h2 id="credibility-title">Capability is easier to trust when ownership is clear.</h2>
          </div>
          <div className={styles.credibilityAside}>
            <p>Clear responsibilities, direct access, and adaptable delivery keep the operating model practical across channels and markets.</p>
            <Link href="/about">Explore how Adverli operates <span aria-hidden="true">→</span></Link>
          </div>
        </Reveal>

        <div className={styles.proofRows}>
          {proofPoints.map((point, index) => (
            <Reveal key={point.number} delay={(index % 2) * 50}>
              <article className={styles.proofRow} tabIndex={0}>
                <span>{point.number}</span>
                <div><h3>{point.title}</h3><small>{point.signal}</small></div>
                <div className={styles.proofSignal} aria-hidden="true"><i /><i /><i /></div>
                <p>{point.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.marketSystem}>
          <div className={styles.marketLead}>
            <span>Global market capability</span>
            <strong>Built to work across market contexts—not tied to one geography.</strong>
            <small>Global delivery / Remote collaboration</small>
          </div>
          <ul aria-label="Markets Adverli can support">
            {markets.map((market, index) => <li key={market}><span>0{index + 1}</span>{market}<i aria-hidden="true" /></li>)}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
