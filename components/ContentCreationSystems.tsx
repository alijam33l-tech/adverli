"use client";

import { useState, type CSSProperties } from "react";
import styles from "./ContentCreationExperience.module.css";

const productionFormats = [
  {
    name: "Written",
    ratio: "Editorial",
    angle: "Explain the decision",
    channel: "Article / Email",
    frame: "Long-form source",
  },
  {
    name: "Static",
    ratio: "1:1",
    angle: "Make the message visible",
    channel: "Social / Campaign",
    frame: "Single-frame idea",
  },
  {
    name: "Motion",
    ratio: "16:9",
    angle: "Show how the system moves",
    channel: "Web / Campaign",
    frame: "Motion sequence",
  },
  {
    name: "Short-form",
    ratio: "9:16",
    angle: "Lead with the useful tension",
    channel: "Social / Paid",
    frame: "Vertical story",
  },
] as const;

const contentStages = [
  {
    number: "01",
    title: "Position",
    happens: "Clarify the audience, commercial goal, message, voice, and useful role of the content.",
    output: "Creative direction",
    decision: "What the content needs to communicate.",
  },
  {
    number: "02",
    title: "Concept",
    happens: "Develop angles, hooks, story structures, formats, and campaign ideas around the message.",
    output: "Content concepts",
    decision: "Which ideas deserve production.",
  },
  {
    number: "03",
    title: "Produce",
    happens: "Create written, static, motion, short-form, editorial, and UGC-style assets for their intended context.",
    output: "Channel-ready creative",
    decision: "What gets published and reviewed.",
  },
  {
    number: "04",
    title: "Distribute",
    happens: "Adapt formats for the relevant channel, audience moment, publishing context, and campaign role.",
    output: "Connected distribution plan",
    decision: "Where each asset should live.",
  },
  {
    number: "05",
    title: "Learn",
    happens: "Review qualitative feedback, platform signals, commercial context, and how the work supports the wider system.",
    output: "Creative learning",
    decision: "What to refine, reuse, expand, or stop.",
  },
] as const;

const operatingStages = [
  {
    number: "01",
    title: "Audit",
    happens: "Review the audience, offer, channels, current assets, brand guidance, workflow, and commercial priorities.",
    signal: "A practical baseline separating useful material from gaps and duplication.",
    decision: "What the content system must solve first.",
  },
  {
    number: "02",
    title: "Position",
    happens: "Define message hierarchy, audience relevance, voice, proof, and the role content should play in the growth plan.",
    signal: "A shared creative direction with clearer boundaries.",
    decision: "Which messages should lead and which should support.",
  },
  {
    number: "03",
    title: "Plan",
    happens: "Shape concepts, formats, channel roles, briefs, dependencies, review points, and a sustainable production cadence.",
    signal: "A sequenced production plan with ownership and purpose.",
    decision: "What enters production and in what order.",
  },
  {
    number: "04",
    title: "Produce",
    happens: "Write, design, film, edit, animate, and adapt approved concepts into channel-ready assets.",
    signal: "A coherent set of publishable creative with version control.",
    decision: "What is ready to ship and what needs another pass.",
  },
  {
    number: "05",
    title: "Distribute",
    happens: "Prepare assets for the channels and contexts where they can serve the audience and wider commercial system.",
    signal: "Clear publishing roles, variants, and handoffs.",
    decision: "Where, when, and how each asset should be used.",
  },
  {
    number: "06",
    title: "Learn",
    happens: "Review audience response, creative quality, channel signals, reuse potential, and business context.",
    signal: "Evidence about useful themes, formats, friction, and gaps.",
    decision: "What to protect, refine, expand, repurpose, or stop.",
  },
] as const;

export function ContentProductionBoard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = productionFormats[activeIndex];

  return (
    <div className={styles.productionBoard} data-format={active.name.toLowerCase()}>
      <div className={styles.boardTop}>
        <span>Content production system</span>
        <i aria-hidden="true" />
        <small>Brief / Active</small>
      </div>
      <div className={styles.formatRail} aria-label="Content format preview">
        {productionFormats.map((format, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={format.name}
              type="button"
              aria-pressed={isActive}
              data-active={isActive ? "true" : "false"}
              onClick={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <span>0{index + 1}</span>
              <strong>{format.name}</strong>
            </button>
          );
        })}
      </div>
      <div className={styles.boardWorkspace} aria-live="polite" aria-atomic="true">
        <div className={styles.boardCanvas}>
          <div className={styles.boardCanvasTop}><span>Frame / {active.ratio}</span><i /></div>
          <div className={styles.boardFrame}>
            <small>{active.frame}</small>
            <div className={styles.boardArtwork} aria-hidden="true"><i /><i /><i /></div>
            <strong>Content should have a job.</strong>
            <span>Message / Clear</span>
          </div>
          <div className={styles.boardStoryboard} aria-hidden="true">
            <i data-active="true" /><i /><i /><i />
          </div>
        </div>
        <div className={styles.boardSide}>
          <div className={styles.boardPanel}><span>Message / Angle</span><strong>{active.angle}</strong><small>Version 01 / Direction</small></div>
          <div className={styles.boardChannel}><span>Channel context</span><strong>{active.channel}</strong><div aria-hidden="true"><i /><i /><i /></div></div>
          <div className={styles.boardVersions}><span>Production state</span><div><b>V1</b><b>V2</b><b>Final</b></div><small>Direction → Craft → Ready</small></div>
        </div>
      </div>
      <div className={styles.boardTimeline} aria-hidden="true"><span>Position</span><i /><span>Idea</span><i /><span>Production</span><i /><span>Distribution</span></div>
    </div>
  );
}

export function ContentJourneySystem() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = contentStages[activeIndex];
  const systemStyle = { "--content-stage": activeIndex } as CSSProperties;

  return (
    <div className={styles.contentJourney} style={systemStyle}>
      <ol className={styles.journeyRail} aria-label="Content system stages">
        {contentStages.map((stage, index) => {
          const isActive = index === activeIndex;
          return (
            <li key={stage.number}>
              <button
                type="button"
                aria-pressed={isActive}
                aria-controls="content-journey-detail"
                data-active={isActive ? "true" : "false"}
                onClick={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <i aria-hidden="true" />
                <span>{stage.number}</span>
                <strong>{stage.title}</strong>
              </button>
            </li>
          );
        })}
      </ol>
      <div className={styles.journeyProgress} aria-hidden="true"><span /></div>
      <div id="content-journey-detail" className={styles.journeyDetail} aria-live="polite" aria-atomic="true">
        <div className={styles.journeyIdentity}><span>{active.number}</span><small>Active stage</small><strong>{active.title}</strong></div>
        <div><span>What happens</span><p>{active.happens}</p></div>
        <div><span>What is produced</span><p>{active.output}</p></div>
        <div><span>Next decision</span><p>{active.decision}</p></div>
      </div>
    </div>
  );
}

export function ContentOperatingModel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = operatingStages[activeIndex];
  const modelStyle = { "--operating-stage": activeIndex } as CSSProperties;

  return (
    <div className={styles.operatingModel} style={modelStyle}>
      <ol className={styles.operatingStages} aria-label="Content engagement model">
        {operatingStages.map((stage, index) => {
          const isActive = index === activeIndex;
          return (
            <li key={stage.number}>
              <button
                type="button"
                aria-pressed={isActive}
                aria-controls="content-operating-detail"
                data-active={isActive ? "true" : "false"}
                onClick={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <span>{stage.number}</span><strong>{stage.title}</strong><i aria-hidden="true" />
              </button>
            </li>
          );
        })}
      </ol>
      <div className={styles.operatingSignal} aria-hidden="true"><span /></div>
      <div id="content-operating-detail" className={styles.operatingDetail} aria-live="polite" aria-atomic="true">
        <div><span>What happens</span><p>{active.happens}</p></div>
        <div><span>Signal produced</span><p>{active.signal}</p></div>
        <div><span>Decision informed</span><p>{active.decision}</p></div>
      </div>
    </div>
  );
}
