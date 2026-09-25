import type { CSSProperties } from "react";
import { stats } from "@/lib/site";
import styles from "./AboutLowerSystems.module.css";

type OperatingPrinciple = {
  title: string;
  description: string;
};

type DeliveryPrinciple = {
  name: string;
  role: string;
};

const connectedDisciplines = [
  "Website",
  "Media",
  "Search",
  "Content",
] as const;

export function ValueSpine() {
  return (
    <div className={styles.valueSystem}>
      <div className={styles.systemLabel}>
        <span>Operating philosophy</span>
        <span>One connected standard</span>
      </div>
      <ol aria-label="Adverli operating philosophy">
        {stats.map((principle, index) => (
          <li key={principle.value}>
            <article tabIndex={0}>
              <span className={styles.valuePoint} aria-hidden="true" />
              <span className={styles.valueIndex}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{principle.value}</h3>
              <p>{principle.label}</p>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function OperatingPrinciples({
  principles,
}: {
  principles: readonly OperatingPrinciple[];
}) {
  return (
    <ol className={styles.principles} aria-label="Adverli operating principles">
      {principles.map((principle, index) => (
        <li key={principle.title}>
          <article tabIndex={0}>
            <span className={styles.principleIndex}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </div>
          </article>
        </li>
      ))}
    </ol>
  );
}

export function ConnectedOperatingSystem() {
  return (
    <figure
      className={styles.connectedSystem}
      tabIndex={0}
      aria-labelledby="connected-system-title connected-system-description"
    >
      <figcaption className={styles.connectedIntro}>
        <p>Connected delivery</p>
        <h2 id="connected-system-title">One team. One operating system.</h2>
        <p id="connected-system-description">
          Engagements use a clear cadence, reporting standard, and decision
          process shaped around the work.
        </p>
      </figcaption>

      <div className={styles.connectedCanvas}>
        <div className={styles.technicalGrid} aria-hidden="true" />
        <svg
          className={styles.connectedPaths}
          viewBox="0 0 860 430"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M150 215 H236 L300 95" pathLength="1" />
          <path d="M150 215 H252 L300 175" pathLength="1" />
          <path d="M150 215 H252 L300 255" pathLength="1" />
          <path d="M150 215 H236 L300 335" pathLength="1" />
          <path d="M430 95 L494 215 H572" pathLength="1" />
          <path d="M430 175 L482 215 H572" pathLength="1" />
          <path d="M430 255 L482 215 H572" pathLength="1" />
          <path d="M430 335 L494 215 H572" pathLength="1" />
          <path d="M682 215 H724" pathLength="1" />
        </svg>

        <div className={styles.briefNode}>
          <span>Center</span>
          <strong>One brief</strong>
        </div>

        <ol className={styles.disciplineRail} aria-label="Connected capabilities">
          {connectedDisciplines.map((discipline, index) => (
            <li
              key={discipline}
              style={{ "--discipline-order": index } as CSSProperties}
            >
              <span aria-hidden="true" />
              {discipline}
            </li>
          ))}
        </ol>

        <div className={styles.measurementNode}>
          <span>Shared signal</span>
          <strong>Measurement</strong>
        </div>

        <div className={styles.nextMoveNode}>
          <span>Decision</span>
          <strong>Next move</strong>
          <small>Learn / refine / reinvest</small>
        </div>
      </div>
    </figure>
  );
}

export function DeliverySystem({
  principles,
}: {
  principles: readonly DeliveryPrinciple[];
}) {
  return (
    <div className={styles.deliverySystem}>
      <div className={styles.deliveryGrid} aria-hidden="true" />
      <div className={styles.deliveryLines} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className={styles.deliveryCore}>
        <span>Shared context</span>
        <strong>One brief</strong>
        <small>One accountable engagement</small>
      </div>

      <ol aria-label="Connected delivery model">
        {principles.map((principle, index) => (
          <li
            key={principle.name}
            className={styles[`deliveryPosition${index + 1}`]}
          >
            <article tabIndex={0}>
              <span className={styles.deliveryIndex}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{principle.name}</h3>
                <p>{principle.role}</p>
              </div>
              <i aria-hidden="true" />
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}
