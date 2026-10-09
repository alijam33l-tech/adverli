"use client";

import { useState } from "react";
import styles from "./WorkExperience.module.css";

const heroStages = [
  { label: "Problem", note: "Define the commercial constraint" },
  { label: "Signal", note: "Find the evidence that matters" },
  { label: "System", note: "Connect the required capabilities" },
  { label: "Execution", note: "Ship against a clear sequence" },
  { label: "Learning", note: "Use evidence to choose again" },
] as const;

const scenarios = [
  {
    key: "direct",
    index: "01",
    label: "Direct",
    title: "Create a clearer path from demand to action.",
    situation:
      "Demand is being generated, but the message, landing experience, and conversion path are not working as one journey.",
    disciplines: ["Meta Ads", "Website Development", "Content Creation"],
    flow: ["Creative angle", "Media intent", "Landing experience", "Conversion signal"],
    execution: ["Align the message", "Build the path", "Run structured tests", "Read signal quality"],
    measured: ["Qualified actions", "Path completion", "Signal quality"],
    decision:
      "Strengthen the message or path producing the clearest qualified signal before expanding activity.",
  },
  {
    key: "fast",
    index: "02",
    label: "Fast",
    title: "Turn a website into clearer growth infrastructure.",
    situation:
      "The offer is credible, but site structure, experience, and performance make it harder for people to understand and act.",
    disciplines: ["Website Development", "SEO", "Content Creation"],
    flow: ["Architecture", "User journey", "Performance", "Conversion path"],
    execution: ["Map priority journeys", "Prototype the system", "Build and validate", "Measure the path"],
    measured: ["Journey clarity", "Technical quality", "Qualified conversion"],
    decision:
      "Refine the page, journey, or technical constraint that most limits the next meaningful action.",
  },
  {
    key: "find",
    index: "03",
    label: "Find",
    title: "Make expertise easier to discover and trust.",
    situation:
      "Useful expertise exists, but technical access, topic coverage, and authority signals are too fragmented to support discovery.",
    disciplines: ["SEO", "Content Creation", "Website Development"],
    flow: ["Search intent", "Content system", "Authority", "AI-assisted discovery"],
    execution: ["Resolve access issues", "Map useful topics", "Publish with evidence", "Strengthen connections"],
    measured: ["Discoverable coverage", "Qualified visibility", "Demand quality"],
    decision:
      "Invest next in the technical, editorial, or authority gap that limits credible visibility.",
  },
] as const;

const executionNodes = [
  { label: "Commercial priority", detail: "The business outcome and constraint define the brief." },
  { label: "Website", detail: "The owned experience clarifies the offer and the next action." },
  { label: "Demand", detail: "Paid media creates and captures relevant attention." },
  { label: "Visibility", detail: "Search makes useful expertise easier to discover." },
  { label: "Content", detail: "Messages and assets support each point in the journey." },
  { label: "Measurement", detail: "Shared signals reveal what is helping or limiting progress." },
  { label: "Next action", detail: "Evidence determines what to refine, stop, or expand." },
] as const;

const operatingStages = [
  {
    title: "Diagnose",
    description: "Review the goal, customer journey, channels, data, and constraints before prescribing work.",
    signal: "Constraint identified",
  },
  {
    title: "Architect",
    description: "Turn the diagnosis into priorities, ownership, measurement, and a practical delivery sequence.",
    signal: "Direction defined",
  },
  {
    title: "Execute",
    description: "Build, launch, and coordinate the work with strategy close to the decisions being made.",
    signal: "Work in market",
  },
  {
    title: "Measure",
    description: "Read the agreed signals across the journey instead of judging isolated channel activity.",
    signal: "Evidence available",
  },
  {
    title: "Compound",
    description: "Use what the work reveals to choose the next improvement and concentrate effort where it matters.",
    signal: "Next decision",
  },
] as const;

export function WorkHeroSystem() {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.heroSystem}>
      <div className={styles.systemHeader}>
        <span>Growth problem / Working sequence</span>
        <span className={styles.systemState}><i aria-hidden="true" /> Active brief</span>
      </div>
      <ol className={styles.heroSequence} aria-label="Problem-solving sequence">
        {heroStages.map((stage, index) => (
          <li key={stage.label} className={index <= active ? styles.heroStageActive : ""}>
            <button
              type="button"
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
              aria-pressed={active === index}
            >
              <span>0{index + 1}</span>
              <i aria-hidden="true" />
              <strong>{stage.label}</strong>
            </button>
          </li>
        ))}
      </ol>
      <div className={styles.heroReadout} aria-live="polite">
        <span>Current signal / 0{active + 1}</span>
        <p>{heroStages[active].note}</p>
      </div>
    </div>
  );
}

export function WorkScenarios() {
  return (
    <div className={styles.scenarioStack}>
      {scenarios.map((scenario) => (
        <article
          key={scenario.key}
          className={`${styles.scenario} ${styles[scenario.key]}`}
          tabIndex={0}
          aria-labelledby={`scenario-${scenario.key}`}
        >
          <p className="sr-only">
            Strategy flow: {scenario.flow.join(" to ")}.
          </p>
          <div className={styles.scenarioLead}>
            <div className={styles.scenarioMarker}>
              <span>{scenario.index}</span>
              <i aria-hidden="true" />
              <strong>{scenario.label}</strong>
            </div>
            <h3 id={`scenario-${scenario.key}`}>{scenario.title}</h3>
            <p>{scenario.situation}</p>
            <ul aria-label="Relevant disciplines">
              {scenario.disciplines.map((discipline) => <li key={discipline}>{discipline}</li>)}
            </ul>
          </div>

          <div className={styles.scenarioSystem}>
            <div className={styles.scenarioSystemHeader}>
              <span>Connected execution path</span>
              <span>Conceptual system</span>
            </div>
            <ol className={styles.scenarioFlow}>
              {scenario.flow.map((stage, index) => (
                <li key={stage} style={{ "--flow-index": index } as React.CSSProperties}>
                  <span>0{index + 1}</span>
                  <i aria-hidden="true" />
                  <strong>{stage}</strong>
                </li>
              ))}
            </ol>
            <div className={styles.executionStrip}>
              <span>Execution sequence</span>
              <ol>
                {scenario.execution.map((step, index) => (
                  <li key={step}><span>{index + 1}</span>{step}</li>
                ))}
              </ol>
            </div>
          </div>

          <div className={styles.scenarioDecision}>
            <div>
              <span>What would be measured</span>
              <ul>{scenario.measured.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div>
              <span>Next-decision logic</span>
              <p>{scenario.decision}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function ConnectedExecutionSystem() {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.executionSystem}>
      <div className={styles.executionTopbar}>
        <span>One brief / Connected capabilities</span>
        <span>0{active + 1} / 07</span>
      </div>
      <div className={styles.executionWorkspace}>
        <ol className={styles.executionRail} aria-label="Connected execution flow">
          {executionNodes.map((node, index) => (
            <li key={node.label} className={index <= active ? styles.executionNodeActive : ""}>
              <button
                type="button"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                aria-pressed={active === index}
                aria-controls="execution-detail"
              >
                <span>0{index + 1}</span>
                <i aria-hidden="true" />
                <strong>{node.label}</strong>
              </button>
            </li>
          ))}
        </ol>
        <div id="execution-detail" className={styles.executionDetail} aria-live="polite">
          <span>Active layer</span>
          <strong>{executionNodes[active].label}</strong>
          <p>{executionNodes[active].detail}</p>
          <div aria-hidden="true"><i /><i /><i /><i /></div>
        </div>
      </div>
    </div>
  );
}

export function WorkOperatingSequence() {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.operatingSystem}>
      <div className={styles.operatingRail} role="tablist" aria-label="Engagement phases">
        {operatingStages.map((stage, index) => (
          <button
            key={stage.title}
            id={`work-phase-${index}`}
            type="button"
            role="tab"
            aria-selected={active === index}
            aria-controls="work-phase-detail"
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
          >
            <span>0{index + 1}</span>
            <i aria-hidden="true" />
            <strong>{stage.title}</strong>
          </button>
        ))}
      </div>
      <div
        id="work-phase-detail"
        className={styles.operatingDetail}
        role="tabpanel"
        aria-labelledby={`work-phase-${active}`}
        aria-live="polite"
      >
        <div className={styles.operatingReadout}>
          <span>Phase / 0{active + 1}</span>
          <strong>{operatingStages[active].title}</strong>
          <p>{operatingStages[active].description}</p>
        </div>
        <div className={styles.operatingSignal}>
          <span>Signal produced</span>
          <div aria-hidden="true"><i /><i /><i /></div>
          <strong>{operatingStages[active].signal}</strong>
        </div>
      </div>
    </div>
  );
}
