"use client";

import { useState, type CSSProperties } from "react";
import styles from "./GoogleAdsExperience.module.css";

const intentStages = [
  {
    number: "01",
    title: "Intent",
    signal: "Commercial demand identified",
    description:
      "Separate meaningful buying intent from informational or mismatched demand before campaign structure and spend decisions are made.",
    source: "Search demand",
    route: "Intent cluster",
    destination: "Useful query set",
    note: "Relevance before reach",
  },
  {
    number: "02",
    title: "Structure",
    signal: "Clear jobs for every campaign",
    description:
      "Organize Search, Shopping, Performance Max, and YouTube around distinct roles instead of allowing fragmented campaigns to compete for the same signal.",
    source: "Query groups",
    route: "Campaign role",
    destination: "Controlled routing",
    note: "One job per layer",
  },
  {
    number: "03",
    title: "Experience",
    signal: "Query and promise stay aligned",
    description:
      "Carry the language and intent of the search into an appropriate landing experience with a clear offer and next action.",
    source: "Ad promise",
    route: "Page match",
    destination: "Relevant experience",
    note: "Continuity after the click",
  },
  {
    number: "04",
    title: "Signal",
    signal: "Actions become decision inputs",
    description:
      "Connect useful conversion definitions, enhanced conversions, and server-side measurement where appropriate so bidding and reporting have cleaner evidence.",
    source: "Qualified action",
    route: "Event definition",
    destination: "Conversion signal",
    note: "Measure what matters",
  },
  {
    number: "05",
    title: "Scale",
    signal: "Spend follows useful evidence",
    description:
      "Increase investment only where conversion quality, search demand, and business economics support the next move.",
    source: "Account evidence",
    route: "Budget guardrail",
    destination: "Controlled scale",
    note: "Evidence before expansion",
  },
] as const;

const operatingStages = [
  {
    number: "01",
    title: "Audit",
    work: "Review account structure, query paths, campaign overlap, bidding, landing pages, and current conversion definitions.",
    signal: "A baseline showing where intent, spend, and measurement are misaligned.",
    decision: "What must be repaired before new structure or budget is introduced.",
  },
  {
    number: "02",
    title: "Intent Map",
    work: "Group commercially meaningful demand by intent, offer, market, and the experience each query should reach.",
    signal: "A demand map with clear exclusions, priorities, and routing logic.",
    decision: "Which campaign jobs and landing experiences the account actually needs.",
  },
  {
    number: "03",
    title: "Build",
    work: "Create the campaign, feed, message, audience, and landing-page structure around the agreed intent map.",
    signal: "A controlled account architecture with fewer ambiguous roles.",
    decision: "What can launch together and what should remain isolated for learning.",
  },
  {
    number: "04",
    title: "Measure",
    work: "Validate conversion actions, enhanced conversions, event quality, attribution context, and reporting inputs.",
    signal: "A clearer view of which actions are useful enough to guide bidding and review.",
    decision: "Which evidence should influence optimization and which signals need more work.",
  },
  {
    number: "05",
    title: "Optimize",
    work: "Review search terms, routing, exclusions, creative, feeds, landing behavior, and bidding against the account’s purpose.",
    signal: "Patterns in relevance, conversion quality, waste, and delivery constraints.",
    decision: "What to refine, consolidate, pause, or test next.",
  },
  {
    number: "06",
    title: "Scale",
    work: "Expand budgets, queries, products, formats, or markets only when the evidence and operating capacity support it.",
    signal: "A guarded expansion path rather than an automatic increase in spend.",
    decision: "Where additional investment is justified and where control should be maintained.",
  },
] as const;

export function GoogleIntentSystem() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = intentStages[activeIndex];
  const systemStyle = {
    "--intent-stage": activeIndex,
  } as CSSProperties;

  return (
    <div className={styles.intentSystem} style={systemStyle}>
      <ol className={styles.intentStageRail} aria-label="Intent to scale system">
        {intentStages.map((stage, index) => {
          const isActive = activeIndex === index;
          return (
            <li key={stage.number}>
              <button
                type="button"
                aria-pressed={isActive}
                aria-controls="google-intent-detail"
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

      <div className={styles.intentProgress} aria-hidden="true"><span /></div>

      <div className={styles.intentWorkspace}>
        <div className={styles.intentCanvas} aria-hidden="true">
          <div className={styles.intentCanvasTop}>
            <span>Demand routing / Active 0{activeIndex + 1}</span>
            <i />
          </div>
          <div className={styles.intentQuery}>
            <i />
            <span>enterprise website redesign agency</span>
            <small>Conceptual query</small>
          </div>
          <div className={styles.intentRoute}>
            <div><span>Input</span><strong>{active.source}</strong></div>
            <i>→</i>
            <div><span>Routing</span><strong>{active.route}</strong></div>
            <i>→</i>
            <div><span>Output</span><strong>{active.destination}</strong></div>
          </div>
          <div className={styles.intentSignal}>
            <span>{active.note}</span>
            <div><i /><i /><i /><i /><i /></div>
          </div>
        </div>

        <div
          id="google-intent-detail"
          className={styles.intentDetail}
          aria-live="polite"
          aria-atomic="true"
        >
          <span>{active.number}</span>
          <p>Active layer / {active.title}</p>
          <h3>{active.signal}</h3>
          <div>{active.description}</div>
        </div>
      </div>
    </div>
  );
}

export function GoogleOperatingModel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = operatingStages[activeIndex];

  return (
    <div className={styles.operatingModel}>
      <ol className={styles.operatingStages} aria-label="Google Ads operating model">
        {operatingStages.map((stage, index) => {
          const isActive = activeIndex === index;
          return (
            <li key={stage.number}>
              <button
                type="button"
                aria-pressed={isActive}
                aria-controls="google-operating-detail"
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

      <div id="google-operating-detail" className={styles.operatingWorkspace}>
        <div className={styles.operatingTop} aria-hidden="true">
          <span>Operating sequence</span>
          <div>
            {operatingStages.map((stage, index) => (
              <i key={stage.number} data-active={index <= activeIndex ? "true" : "false"} />
            ))}
          </div>
          <span>0{activeIndex + 1} / 06</span>
        </div>
        <div className={styles.operatingDetail} aria-live="polite" aria-atomic="true">
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
    </div>
  );
}
