"use client";

import { useState, type CSSProperties } from "react";
import styles from "./WebsiteDevelopmentExperience.module.css";

const stages = [
  {
    number: "01",
    title: "Strategy",
    signal: "Define the commercial job",
    description:
      "Map customer journeys, business priorities, and available evidence before deciding what the site needs to become.",
  },
  {
    number: "02",
    title: "Architecture",
    signal: "Organize the journey",
    description:
      "Shape the information architecture, page system, and conversion paths around how qualified visitors make decisions.",
  },
  {
    number: "03",
    title: "UX / Interface",
    signal: "Make the path clear",
    description:
      "Translate the structure into a focused interface system with clear hierarchy, purposeful interactions, and reusable patterns.",
  },
  {
    number: "04",
    title: "Development",
    signal: "Build for ownership",
    description:
      "Develop a fast, maintainable component system and a publishing setup the internal team can operate with confidence.",
  },
  {
    number: "05",
    title: "Tracking & Conversion",
    signal: "Measure the response",
    description:
      "Connect analytics, conversion events, and quality checks so the website can inform the next growth decision.",
  },
] as const;

export default function WebsiteBuildSystem() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStage = stages[activeIndex];
  const progressStyle = {
    "--active-stage": activeIndex,
  } as CSSProperties;

  return (
    <div className={styles.buildSystem} style={progressStyle}>
      <div className={styles.buildRail} aria-hidden="true">
        <span className={styles.buildRailProgress} />
      </div>

      <ol className={styles.buildStages} aria-label="Website development build system">
        {stages.map((stage, index) => {
          const isActive = index === activeIndex;

          return (
            <li key={stage.number} className={styles.buildStage}>
              <button
                type="button"
                aria-pressed={isActive}
                aria-controls="website-build-stage-detail"
                className={styles.buildStageButton}
                data-active={isActive ? "true" : "false"}
                onClick={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <span className={styles.buildStageMarker} aria-hidden="true">
                  <span />
                </span>
                <span className={styles.buildStageNumber}>{stage.number}</span>
                <span className={styles.buildStageTitle}>{stage.title}</span>
                <span className={styles.buildStageSignal}>{stage.signal}</span>
              </button>
            </li>
          );
        })}
      </ol>

      <div
        id="website-build-stage-detail"
        className={styles.buildDetail}
        aria-live="polite"
        aria-atomic="true"
      >
        <span className={styles.buildDetailIndex}>{activeStage.number}</span>
        <div>
          <p className={styles.buildDetailEyebrow}>Active layer</p>
          <h3>{activeStage.title}</h3>
          <p>{activeStage.description}</p>
        </div>
        <div className={styles.buildDetailSignal} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}
