import type { CaseStudy } from "@/lib/case-studies";
import styles from "./GrowthScenarioCard.module.css";

type GrowthScenarioCardProps = {
  study: CaseStudy;
  position: number;
};

const scenarioConfig = {
  "paid-social-demand": {
    variant: "direct",
    steps: ["Creative / Ad", "Landing Page", "Booking"],
  },
  "website-conversion": {
    variant: "fast",
    steps: ["Architecture", "UX", "Performance", "Conversion"],
  },
  "organic-authority": {
    variant: "find",
    steps: ["Search Intent", "Content", "Authority", "Discovery"],
  },
  "paid-search-efficiency": {
    variant: "intent",
    steps: [
      "Search Intent",
      "Campaign Structure",
      "Qualified Signal",
      "Spend Control",
    ],
  },
  "content-system": {
    variant: "message",
    steps: [
      "Expertise",
      "Editorial Focus",
      "Production",
      "Distribution",
      "Reuse",
    ],
  },
} as const;

function DirectVisual({ steps }: { steps: readonly string[] }) {
  return (
    <div className={`${styles.diagram} ${styles.directDiagram}`} aria-hidden="true">
      <svg className={styles.pathLayer} viewBox="0 0 360 112" preserveAspectRatio="none">
        <path className={styles.basePath} d="M55 47 C96 47 99 65 139 65 H215 C250 65 260 47 305 47" />
        <path className={styles.signalPath} pathLength="1" d="M55 47 C96 47 99 65 139 65 H215 C250 65 260 47 305 47" />
      </svg>

      <div className={`${styles.flowSteps} ${styles.threeSteps}`}>
        <div className={styles.flowStep} style={{ "--step": 0 } as React.CSSProperties}>
          <div className={`${styles.nodeFrame} ${styles.creativeNode}`}>
            <span className={styles.creativeImage} />
            <span className={styles.creativeLine} />
            <span className={styles.creativeAction} />
          </div>
          <span className={styles.stepLabel}>{steps[0]}</span>
        </div>

        <div className={styles.flowStep} style={{ "--step": 1 } as React.CSSProperties}>
          <div className={`${styles.nodeFrame} ${styles.browserNode}`}>
            <span className={styles.browserBar} />
            <span className={styles.browserHero} />
            <span className={styles.browserCopy} />
            <span className={styles.browserAction} />
          </div>
          <span className={styles.stepLabel}>{steps[1]}</span>
        </div>

        <div className={styles.flowStep} style={{ "--step": 2 } as React.CSSProperties}>
          <div className={`${styles.nodeFrame} ${styles.bookingNode}`}>
            <span className={styles.bookingRing}>
              <span />
            </span>
          </div>
          <span className={styles.stepLabel}>{steps[2]}</span>
        </div>
      </div>
    </div>
  );
}

function FastVisual({ steps }: { steps: readonly string[] }) {
  return (
    <div className={`${styles.diagram} ${styles.fastDiagram}`} aria-hidden="true">
      <div className={styles.architecturePlane}>
        <span />
        <span />
        <span />
        <span />
      </div>

      <svg className={styles.pathLayer} viewBox="0 0 360 112" preserveAspectRatio="none">
        <path className={styles.basePath} d="M40 61 H105 L126 43 H210 L232 61 H320" />
        <path className={styles.signalPath} pathLength="1" d="M40 61 H105 L126 43 H210 L232 61 H320" />
      </svg>

      <div className={`${styles.flowSteps} ${styles.fourSteps}`}>
        <div className={styles.flowStep} style={{ "--step": 0 } as React.CSSProperties}>
          <div className={`${styles.systemNode} ${styles.architectureNode}`}>
            <span />
            <span />
            <span />
          </div>
          <span className={styles.stepLabel}>{steps[0]}</span>
        </div>

        <div className={styles.flowStep} style={{ "--step": 1 } as React.CSSProperties}>
          <div className={`${styles.systemNode} ${styles.uxNode}`}>
            <span />
            <span />
            <span />
          </div>
          <span className={styles.stepLabel}>{steps[1]}</span>
        </div>

        <div className={styles.flowStep} style={{ "--step": 2 } as React.CSSProperties}>
          <div className={`${styles.systemNode} ${styles.performanceNode}`}>
            <span />
            <span />
            <span />
          </div>
          <span className={styles.stepLabel}>{steps[2]}</span>
        </div>

        <div className={styles.flowStep} style={{ "--step": 3 } as React.CSSProperties}>
          <div className={`${styles.systemNode} ${styles.conversionNode}`}>
            <span />
          </div>
          <span className={styles.stepLabel}>{steps[3]}</span>
        </div>
      </div>
    </div>
  );
}

function FindVisual({ steps }: { steps: readonly string[] }) {
  return (
    <div className={`${styles.diagram} ${styles.findDiagram}`} aria-hidden="true">
      <div className={styles.searchField}>
        <span className={styles.searchIcon} />
        <span className={styles.queryLine} />
        <span className={styles.searchCursor} />
      </div>

      <svg className={styles.pathLayer} viewBox="0 0 360 112" preserveAspectRatio="none">
        <path className={styles.basePath} d="M39 72 C76 72 77 52 115 52 S168 72 204 72 S258 50 321 50" />
        <path className={styles.signalPath} pathLength="1" d="M39 72 C76 72 77 52 115 52 S168 72 204 72 S258 50 321 50" />
      </svg>

      <div className={`${styles.flowSteps} ${styles.fourSteps}`}>
        <div className={styles.flowStep} style={{ "--step": 0 } as React.CSSProperties}>
          <div className={`${styles.systemNode} ${styles.intentNode}`}>
            <span />
          </div>
          <span className={styles.stepLabel}>{steps[0]}</span>
        </div>

        <div className={styles.flowStep} style={{ "--step": 1 } as React.CSSProperties}>
          <div className={`${styles.systemNode} ${styles.contentNode}`}>
            <span />
            <span />
            <span />
          </div>
          <span className={styles.stepLabel}>{steps[1]}</span>
        </div>

        <div className={styles.flowStep} style={{ "--step": 2 } as React.CSSProperties}>
          <div className={`${styles.systemNode} ${styles.authorityNode}`}>
            <span />
            <span />
            <span />
            <span />
          </div>
          <span className={styles.stepLabel}>{steps[2]}</span>
        </div>

        <div className={styles.flowStep} style={{ "--step": 3 } as React.CSSProperties}>
          <div className={`${styles.systemNode} ${styles.discoveryNode}`}>
            <span />
          </div>
          <span className={styles.stepLabel}>{steps[3]}</span>
        </div>
      </div>
    </div>
  );
}

function IntentVisual({ steps }: { steps: readonly string[] }) {
  return (
    <div className={`${styles.diagram} ${styles.intentDiagram}`} aria-hidden="true">
      <div className={styles.controlRail}>
        <span />
        <span />
        <span />
      </div>

      <svg className={styles.pathLayer} viewBox="0 0 360 112" preserveAspectRatio="none">
        <path className={styles.basePath} d="M38 57 H105 L126 44 H211 L235 60 H321" />
        <path
          className={styles.signalPath}
          pathLength="1"
          d="M38 57 H105 L126 44 H211 L235 60 H321"
        />
      </svg>

      <div className={`${styles.flowSteps} ${styles.fourSteps}`}>
        <div className={styles.flowStep} style={{ "--step": 0 } as React.CSSProperties}>
          <div className={`${styles.systemNode} ${styles.searchIntentNode}`}>
            <span />
          </div>
          <span className={styles.stepLabel}>{steps[0]}</span>
        </div>

        <div className={styles.flowStep} style={{ "--step": 1 } as React.CSSProperties}>
          <div className={`${styles.systemNode} ${styles.campaignNode}`}>
            <span />
            <span />
            <span />
          </div>
          <span className={styles.stepLabel}>{steps[1]}</span>
        </div>

        <div className={styles.flowStep} style={{ "--step": 2 } as React.CSSProperties}>
          <div className={`${styles.systemNode} ${styles.qualifiedNode}`}>
            <span />
          </div>
          <span className={styles.stepLabel}>{steps[2]}</span>
        </div>

        <div className={styles.flowStep} style={{ "--step": 3 } as React.CSSProperties}>
          <div className={`${styles.systemNode} ${styles.controlNode}`}>
            <span />
            <span />
            <span />
          </div>
          <span className={styles.stepLabel}>{steps[3]}</span>
        </div>
      </div>
    </div>
  );
}

function MessageVisual({ steps }: { steps: readonly string[] }) {
  return (
    <div className={`${styles.diagram} ${styles.messageDiagram}`} aria-hidden="true">
      <div className={styles.editorialGuide}>
        <span />
        <span />
      </div>

      <svg className={styles.pathLayer} viewBox="0 0 360 112" preserveAspectRatio="none">
        <path className={styles.basePath} d="M26 55 H88 L111 43 H180 L205 61 H273 L297 48 H335" />
        <path
          className={styles.signalPath}
          pathLength="1"
          d="M26 55 H88 L111 43 H180 L205 61 H273 L297 48 H335"
        />
      </svg>

      <div className={`${styles.flowSteps} ${styles.fiveSteps}`}>
        <div className={styles.flowStep} style={{ "--step": 0 } as React.CSSProperties}>
          <div className={`${styles.systemNode} ${styles.expertiseNode}`}>
            <span />
          </div>
          <span className={styles.stepLabel}>{steps[0]}</span>
        </div>

        <div className={styles.flowStep} style={{ "--step": 1 } as React.CSSProperties}>
          <div className={`${styles.systemNode} ${styles.editorialNode}`}>
            <span />
            <span />
            <span />
          </div>
          <span className={styles.stepLabel}>{steps[1]}</span>
        </div>

        <div className={styles.flowStep} style={{ "--step": 2 } as React.CSSProperties}>
          <div className={`${styles.systemNode} ${styles.productionNode}`}>
            <span />
            <span />
          </div>
          <span className={styles.stepLabel}>{steps[2]}</span>
        </div>

        <div className={styles.flowStep} style={{ "--step": 3 } as React.CSSProperties}>
          <div className={`${styles.systemNode} ${styles.distributionNode}`}>
            <span />
            <span />
            <span />
          </div>
          <span className={styles.stepLabel}>{steps[3]}</span>
        </div>

        <div className={styles.flowStep} style={{ "--step": 4 } as React.CSSProperties}>
          <div className={`${styles.systemNode} ${styles.reuseNode}`}>
            <span />
          </div>
          <span className={styles.stepLabel}>{steps[4]}</span>
        </div>
      </div>
    </div>
  );
}

export default function GrowthScenarioCard({
  study,
  position,
}: GrowthScenarioCardProps) {
  const config =
    scenarioConfig[study.slug as keyof typeof scenarioConfig] ??
    scenarioConfig["paid-social-demand"];
  const titleId = `growth-scenario-${study.slug}`;
  const summaryId = `${titleId}-summary`;
  const flowId = `${titleId}-flow`;

  return (
    <article
      className={`${styles.card} ${styles[config.variant]}`}
      tabIndex={0}
      aria-labelledby={titleId}
      aria-describedby={`${flowId} ${summaryId}`}
    >
      <p id={flowId} className="sr-only">
        Strategy flow: {config.steps.join(" to ")}.
      </p>
      <div className={styles.visual}>
        <div className={styles.visualGrid} aria-hidden="true" />
        <div className={styles.visualHeader}>
          <div className={styles.scenarioLabel}>
            <span>{String(position).padStart(2, "0")}</span>
            <p>Growth Scenario</p>
          </div>
          <p className={styles.scenarioWord}>{study.metrics[0].value}</p>
        </div>

        {config.variant === "direct" && <DirectVisual steps={config.steps} />}
        {config.variant === "fast" && <FastVisual steps={config.steps} />}
        {config.variant === "find" && <FindVisual steps={config.steps} />}
        {config.variant === "intent" && <IntentVisual steps={config.steps} />}
        {config.variant === "message" && <MessageVisual steps={config.steps} />}
      </div>

      <div className={styles.content}>
        <div className={styles.tags} aria-label="Scenario context">
          <span>{study.industry}</span>
          {study.services.map((service) => (
            <span key={service}>{service}</span>
          ))}
        </div>

        <h3 id={titleId} className={styles.title}>
          {study.title}
        </h3>
        <p className={styles.headline}>{study.headline}</p>
        <p id={summaryId} className={styles.summary}>
          {study.summary}
        </p>

        <dl className={styles.metrics}>
          {study.metrics.map((metric) => (
            <div key={metric.label}>
              <dt>{metric.label}</dt>
              <dd>{metric.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
