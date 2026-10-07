"use client";

import { useState, type CSSProperties } from "react";
import styles from "./SeoExperience.module.css";

const visibilityStages = [
  {
    number: "01",
    title: "Discovery",
    signal: "The right surfaces can find the work",
    description:
      "Sitemaps, links, references, and accessible architecture create routes through which search and AI systems can encounter useful pages.",
    input: "Known URLs",
    action: "Findable paths",
    output: "Discovery surface",
  },
  {
    number: "02",
    title: "Crawl",
    signal: "Important pages are technically accessible",
    description:
      "Rendering, robots directives, status codes, internal links, and crawl efficiency determine whether systems can reliably retrieve the content that matters.",
    input: "Accessible route",
    action: "Retrieve content",
    output: "Crawlable page",
  },
  {
    number: "03",
    title: "Index",
    signal: "Canonical pages become eligible for retrieval",
    description:
      "Canonicalization, duplication control, index directives, and content quality help clarify which pages should represent each subject.",
    input: "Crawled page",
    action: "Select canonical",
    output: "Indexed source",
  },
  {
    number: "04",
    title: "Relevance",
    signal: "Content answers a meaningful demand",
    description:
      "Page purpose, entities, headings, evidence, and search architecture connect a useful source to the questions and needs it can genuinely answer.",
    input: "Search demand",
    action: "Match meaning",
    output: "Relevant source",
  },
  {
    number: "05",
    title: "Authority",
    signal: "Expertise becomes easier to trust",
    description:
      "Useful content, expert input, internal context, external references, and a coherent topic system strengthen credibility without manufacturing proof.",
    input: "Useful source",
    action: "Build context",
    output: "Trusted evidence",
  },
  {
    number: "06",
    title: "Visibility",
    signal: "The system earns opportunities to be surfaced",
    description:
      "Technical access, relevance, authority, and demand come together across traditional search, answer engines, and AI-assisted discovery—without guaranteeing placement.",
    input: "Connected system",
    action: "Retrieve and assess",
    output: "Visibility opportunity",
  },
] as const;

const operatingStages = [
  {
    number: "01",
    title: "Audit",
    work: "Review technical access, indexation, templates, internal links, content, authority signals, analytics, and business priorities.",
    signal: "A documented baseline with constraints separated from lower-impact noise.",
    decision: "What needs attention first and what can wait.",
  },
  {
    number: "02",
    title: "Prioritize",
    work: "Rank technical, architectural, content, and authority opportunities by commercial relevance, dependency, effort, and confidence.",
    signal: "A sequenced roadmap with clear ownership and decision points.",
    decision: "Which work creates the strongest foundation for everything after it.",
  },
  {
    number: "03",
    title: "Build",
    work: "Implement technical fixes, templates, structured data, redirects, content models, navigation, and internal-link architecture.",
    signal: "A more accessible and coherent search foundation.",
    decision: "Which pages and topic systems are ready to support publishing.",
  },
  {
    number: "04",
    title: "Publish",
    work: "Create or improve useful pages with expert input, clear purpose, credible sourcing, and an intentional place in the wider architecture.",
    signal: "New and improved sources aligned to relevant demand.",
    decision: "What the next content and optimization cycle should address.",
  },
  {
    number: "05",
    title: "Strengthen",
    work: "Improve internal context, consolidate overlap, refresh decaying content, and support authority with credible references and distribution.",
    signal: "A denser network of useful relationships around priority topics.",
    decision: "Where the system needs reinforcement rather than more volume.",
  },
  {
    number: "06",
    title: "Measure",
    work: "Review crawl and index health, visibility, engagement, qualified actions, assisted journeys, and platform changes in context.",
    signal: "Evidence about progress, remaining constraints, and changes in discovery behavior.",
    decision: "What to protect, refine, expand, or stop next.",
  },
] as const;

export function SeoVisibilitySystem() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = visibilityStages[activeIndex];
  const systemStyle = { "--visibility-stage": activeIndex } as CSSProperties;

  return (
    <div className={styles.visibilitySystem} style={systemStyle}>
      <div className={styles.visibilityConstellation}>
        <div className={styles.visibilityOrbit} aria-hidden="true"><i /><i /><i /></div>
        <div className={styles.visibilityCore} aria-hidden="true">
          <span>Visibility</span>
          <small>Connected system</small>
        </div>
        <ol aria-label="Visibility system stages">
          {visibilityStages.map((stage, index) => {
            const isActive = index === activeIndex;
            return (
              <li key={stage.number}>
                <button
                  type="button"
                  aria-pressed={isActive}
                  aria-controls="seo-visibility-detail"
                  data-active={isActive ? "true" : "false"}
                  onClick={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <span>{stage.number}</span>
                  <strong>{stage.title}</strong>
                  <i aria-hidden="true" />
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <div id="seo-visibility-detail" className={styles.visibilityDetail} aria-live="polite" aria-atomic="true">
        <div className={styles.visibilityDetailTop}>
          <span>Active system / {active.number}</span>
          <i />
        </div>
        <p>{active.title}</p>
        <h3>{active.signal}</h3>
        <div className={styles.visibilityRoute} aria-hidden="true">
          <div><span>Input</span><strong>{active.input}</strong></div>
          <i>→</i>
          <div><span>System role</span><strong>{active.action}</strong></div>
          <i>→</i>
          <div><span>Output</span><strong>{active.output}</strong></div>
        </div>
        <div className={styles.visibilityCopy}>{active.description}</div>
      </div>
    </div>
  );
}

export function SeoOperatingModel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = operatingStages[activeIndex];
  const modelStyle = { "--seo-operating-stage": activeIndex } as CSSProperties;

  return (
    <div className={styles.operatingModel} style={modelStyle}>
      <ol className={styles.operatingRail} aria-label="SEO operating model">
        {operatingStages.map((stage, index) => {
          const isActive = index === activeIndex;
          return (
            <li key={stage.number}>
              <button
                type="button"
                aria-pressed={isActive}
                aria-controls="seo-operating-detail"
                data-active={isActive ? "true" : "false"}
                onClick={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <span>{stage.number}</span>
                <i aria-hidden="true" />
                <strong>{stage.title}</strong>
              </button>
            </li>
          );
        })}
      </ol>
      <div className={styles.operatingProgress} aria-hidden="true"><span /></div>
      <div id="seo-operating-detail" className={styles.operatingDetail} aria-live="polite" aria-atomic="true">
        <div>
          <span>What happens</span>
          <p>{active.work}</p>
        </div>
        <div>
          <span>Signal produced</span>
          <p>{active.signal}</p>
        </div>
        <div>
          <span>Decision informed</span>
          <p>{active.decision}</p>
        </div>
      </div>
    </div>
  );
}
