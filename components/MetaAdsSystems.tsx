"use client";

import { useState, type CSSProperties } from "react";
import styles from "./MetaAdsExperience.module.css";

const journeyStages = [
  {
    number: "01",
    title: "Test",
    signal: "A focused hypothesis",
    description:
      "Launch a controlled creative question with a clear angle, format, audience, and post-click destination.",
  },
  {
    number: "02",
    title: "Learn",
    signal: "A useful response pattern",
    description:
      "Read delivery, engagement, conversion quality, and landing-page behavior together—not as isolated platform metrics.",
  },
  {
    number: "03",
    title: "Signal",
    signal: "Cleaner decision inputs",
    description:
      "Strengthen the event path and feed back the actions that best represent meaningful business outcomes.",
  },
  {
    number: "04",
    title: "Consolidate",
    signal: "Concentrated evidence",
    description:
      "Move useful creative and audience learning into a simpler structure that gives the system enough signal to work with.",
  },
  {
    number: "05",
    title: "Scale",
    signal: "A guarded investment decision",
    description:
      "Increase investment only when creative durability, conversion signal, and unit economics support the next move.",
  },
] as const;

const operatingStages = [
  {
    number: "01",
    title: "Audit",
    work: "Review account structure, pixel and CAPI health, creative history, and the post-click experience.",
    signal: "A clear measurement baseline and a ranked constraint list.",
    next: "What needs to be repaired before more budget or creative enters the system.",
  },
  {
    number: "02",
    title: "Creative engine",
    work: "Build the angle map, testing calendar, production rhythm, and approval path.",
    signal: "A structured queue of hypotheses with a reason to exist.",
    next: "Which ideas deserve a controlled test and what each test must answer.",
  },
  {
    number: "03",
    title: "Test",
    work: "Run focused creative and audience tests with aligned landing experiences.",
    signal: "Evidence about hooks, formats, messages, and conversion quality.",
    next: "What to iterate, what to stop, and what is ready for a broader campaign structure.",
  },
  {
    number: "04",
    title: "Consolidate",
    work: "Graduate useful learning into a simpler account structure and remove unnecessary fragmentation.",
    signal: "Denser learning around the creative and journeys that matter.",
    next: "Whether the system has enough durable evidence to support more investment.",
  },
  {
    number: "05",
    title: "Scale",
    work: "Increase investment with agreed guardrails while refreshing creative before fatigue takes control.",
    signal: "A clearer view of durability, efficiency, and where the next constraint is forming.",
    next: "Where to reinvest, where to hold, and what the next creative cycle should explore.",
  },
] as const;

const testingOptions = {
  hook: ["Hook A", "Hook B", "Hook C"],
  format: ["Static", "UGC", "Motion"],
  audience: ["Cold", "Warm", "Retargeting"],
} as const;

type TestingDimension = keyof typeof testingOptions;

export function MetaAdsJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = journeyStages[activeIndex];
  const progressStyle = {
    "--journey-stage": activeIndex,
  } as CSSProperties;

  return (
    <div className={styles.journey} style={progressStyle}>
      <div className={styles.journeyLine} aria-hidden="true">
        <span />
      </div>
      <ol className={styles.journeyStages} aria-label="Test to scale system">
        {journeyStages.map((stage, index) => {
          const isActive = activeIndex === index;
          return (
            <li key={stage.number}>
              <button
                type="button"
                aria-pressed={isActive}
                aria-controls="meta-journey-detail"
                data-active={isActive ? "true" : "false"}
                onClick={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <span className={styles.journeyNode} aria-hidden="true" />
                <span className={styles.journeyNumber}>{stage.number}</span>
                <strong>{stage.title}</strong>
              </button>
            </li>
          );
        })}
      </ol>
      <div
        id="meta-journey-detail"
        className={styles.journeyDetail}
        aria-live="polite"
        aria-atomic="true"
      >
        <span className={styles.journeyDetailIndex}>{active.number}</span>
        <div>
          <p>Active stage / {active.title}</p>
          <h3>{active.signal}</h3>
          <span>{active.description}</span>
        </div>
        <div className={styles.journeyPulse} aria-hidden="true">
          <i /><i /><i /><i />
        </div>
      </div>
    </div>
  );
}

export function CreativeTestingMatrix() {
  const [selection, setSelection] = useState({
    hook: 0,
    format: 1,
    audience: 0,
  });

  function choose(dimension: TestingDimension, index: number) {
    setSelection((current) => ({ ...current, [dimension]: index }));
  }

  const combination = `${testingOptions.hook[selection.hook]} × ${testingOptions.format[selection.format]} × ${testingOptions.audience[selection.audience]}`;

  return (
    <div className={styles.testingMatrix}>
      <div className={styles.testingControls}>
        {(Object.keys(testingOptions) as TestingDimension[]).map(
          (dimension, dimensionIndex) => (
            <div
              key={dimension}
              className={styles.testingDimension}
              role="group"
              aria-label={`Select creative ${dimension}`}
            >
              <p>
                <span>0{dimensionIndex + 1}</span>
                {dimension}
              </p>
              <div>
                {testingOptions[dimension].map((option, index) => {
                  const isActive = selection[dimension] === index;
                  return (
                    <button
                      key={option}
                      type="button"
                      aria-pressed={isActive}
                      data-active={isActive ? "true" : "false"}
                      onClick={() => choose(dimension, index)}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          ),
        )}
      </div>

      <div className={styles.testingOutput} aria-live="polite" aria-atomic="true">
        <div className={styles.testingOutputTop}>
          <p>Active hypothesis</p>
          <span>Combination / 0{selection.hook + 1}</span>
        </div>
        <h3>{combination}</h3>
        <div className={styles.testingCreative} aria-hidden="true">
          <div className={styles.testingCreativeFrame}>
            <span>Hook / {String.fromCharCode(65 + selection.hook)}</span>
            <div className={styles.testingFrameMedia}>
              <i /><i /><i />
              <small>Opening frame</small>
            </div>
            <strong>{testingOptions.format[selection.format]}</strong>
            <i />
            <small>{testingOptions.audience[selection.audience]}</small>
          </div>
          <div className={styles.testingSignalSystem}>
            <div className={styles.testingCreativeSignal}>
              <span /><span /><span /><span />
            </div>
            <div className={styles.testingSignalLabels}>
              <span>Creative</span><span>Landing</span><span>Event</span><span>Learning</span>
            </div>
            <div className={styles.testingBriefRows}>
              <p><span>Question</span><strong>Does the opening idea create relevance?</strong></p>
              <p><span>Constant</span><strong>Offer and landing experience</strong></p>
              <p><span>Read with</span><strong>Conversion quality and event signal</strong></p>
            </div>
          </div>
        </div>
        <p className={styles.testingOutputCopy}>
          One combination becomes one readable question. The landing experience
          and measurement path stay connected so the response can inform the
          next iteration.
        </p>
      </div>
    </div>
  );
}

export function MetaCampaignModel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = operatingStages[activeIndex];
  const modelStyle = {
    "--operating-stage": activeIndex,
  } as CSSProperties;

  return (
    <div className={styles.operatingModel} style={modelStyle}>
      <ol className={styles.operatingRail} aria-label="Meta Ads campaign operating model">
        {operatingStages.map((stage, index) => {
          const isActive = activeIndex === index;
          return (
            <li key={stage.number}>
              <button
                type="button"
                aria-pressed={isActive}
                aria-controls="meta-operating-detail"
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
      <div className={styles.operatingProgress} aria-hidden="true"><span /></div>
      <div className={styles.operatingSignalBar} aria-hidden="true">
        <span>Engagement system</span>
        <div>
          {operatingStages.map((stage, index) => (
            <i key={stage.number} data-active={index <= activeIndex ? "true" : "false"} />
          ))}
        </div>
        <span>Active loop / 0{activeIndex + 1}</span>
      </div>
      <div
        id="meta-operating-detail"
        className={styles.operatingDetail}
        aria-live="polite"
        aria-atomic="true"
      >
        <div>
          <span>What happens</span>
          <p>{active.work}</p>
        </div>
        <div>
          <span>Signal produced</span>
          <p>{active.signal}</p>
        </div>
        <div>
          <span>What it informs</span>
          <p>{active.next}</p>
        </div>
      </div>
    </div>
  );
}
