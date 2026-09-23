import { process } from "@/lib/site";
import Reveal from "./Reveal";
import styles from "./ProcessSteps.module.css";

const processSignals = [
  "Find the constraint",
  "Define the system",
  "Ship the work",
  "Learn and reinvest",
] as const;

export default function ProcessSteps() {
  return (
    <Reveal>
      <div className={styles.system}>
        <div className={styles.grid} aria-hidden="true" />
        <ol className={styles.stages} aria-label="Adverli engagement process">
          {process.map((stage, index) => (
            <li key={stage.step} className={styles.stageItem}>
              <article className={styles.stage} tabIndex={0}>
                <div className={styles.marker} aria-hidden="true">
                  <span className={styles.number}>{stage.step}</span>
                  <span className={styles.point}>
                    <span />
                  </span>
                </div>

                <div className={styles.copy}>
                  <div className={styles.lead}>
                    <h3>{stage.title}</h3>
                    <p className={styles.signal}>
                      <span>Signal</span>
                      {processSignals[index]}
                    </p>
                  </div>
                  <p className={styles.description}>{stage.description}</p>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </Reveal>
  );
}
