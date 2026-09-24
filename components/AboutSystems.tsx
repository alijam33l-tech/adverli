import styles from "./AboutSystems.module.css";
import type { CSSProperties } from "react";

const disciplines = ["Website", "Media", "Search", "Content"] as const;

const executionSteps = [
  { index: "01", label: "Strategy" },
  { index: "02", label: "Priorities" },
  { index: "03", label: "Owners" },
  { index: "04", label: "Execution" },
  { index: "05", label: "Measurement" },
] as const;

export function AboutOperatingView() {
  return (
    <figure
      className={styles.operatingView}
      tabIndex={0}
      aria-labelledby="operating-view-title operating-view-description"
    >
      <div className={styles.frameHeader}>
        <p id="operating-view-title">Adverli operating view</p>
        <span>
          <i aria-hidden="true" /> Accountable system
        </span>
      </div>

      <div className={styles.operatingCanvas}>
        <div className={styles.technicalGrid} aria-hidden="true" />
        <svg
          className={styles.operatingPath}
          viewBox="0 0 640 460"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M250 92 H390" pathLength="1" />
          <path d="M490 130 V150 H110 V175" pathLength="1" />
          <path
            d="M210 150 V175 M330 150 V175 M450 150 V175 M550 150 V175"
            pathLength="1"
          />
          <path d="M110 261 V290 H470 V320" pathLength="1" />
          <path d="M470 396 V420 H153 V406" pathLength="1" />
          <path
            d="M58 368 H24 V92 H40"
            pathLength="1"
            className={styles.returnPath}
          />
        </svg>

        <div className={`${styles.systemNode} ${styles.goalNode}`}>
          <span>Starting point</span>
          <strong>Business goal</strong>
          <small>Commercial intent</small>
        </div>

        <div className={`${styles.systemNode} ${styles.strategyNode}`}>
          <span>System design</span>
          <strong>Strategy</strong>
          <small>One connected brief</small>
        </div>

        <div className={styles.channelMatrix}>
          <p>Connected disciplines</p>
          <div>
            {disciplines.map((discipline, index) => (
              <span key={discipline} style={{ "--node-order": index } as CSSProperties}>
                <i aria-hidden="true" />
                {discipline}
              </span>
            ))}
          </div>
        </div>

        <div className={`${styles.systemNode} ${styles.measureNode}`}>
          <span>Signal</span>
          <strong>Measurement</strong>
          <small>Evidence in context</small>
        </div>

        <div className={`${styles.systemNode} ${styles.decisionNode}`}>
          <span>Next move</span>
          <strong>Decision</strong>
          <small>Reinvest / refine</small>
        </div>
      </div>

      <figcaption id="operating-view-description" className={styles.srOnly}>
        A conceptual operating model connects the business goal to strategy,
        website, media, search, content, measurement, and the next decision.
      </figcaption>
    </figure>
  );
}

export function StrategyExecutionView() {
  return (
    <figure
      className={styles.executionView}
      tabIndex={0}
      aria-labelledby="execution-view-title execution-view-description"
    >
      <div className={styles.frameHeader}>
        <p id="execution-view-title">One continuous operating line</p>
        <span>
          <i aria-hidden="true" /> Shared context
        </span>
      </div>

      <div className={styles.executionCanvas}>
        <div className={styles.technicalGrid} aria-hidden="true" />
        <div className={styles.executionTrack} aria-hidden="true">
          <span />
        </div>
        <ol>
          {executionSteps.map((step, index) => (
            <li
              key={step.label}
              style={{ "--step-order": index } as CSSProperties}
            >
              <span className={styles.stepPoint} aria-hidden="true" />
              <span className={styles.stepIndex}>{step.index}</span>
              <strong>{step.label}</strong>
            </li>
          ))}
        </ol>
        <p className={styles.feedbackLoop}>
          <span aria-hidden="true">↗</span>
          Measurement returns to strategy
        </p>
      </div>

      <figcaption id="execution-view-description" className={styles.srOnly}>
        Strategy moves through priorities, owners, execution, and measurement
        without losing the context of the original brief.
      </figcaption>
    </figure>
  );
}
