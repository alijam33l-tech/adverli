"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";
import styles from "./HeroVisual.module.css";

const STAGES = ["Audit", "Plan", "Build", "Test", "Refine", "Scale"];
const POINTS = [
  { x: 28, y: 177 },
  { x: 119, y: 158 },
  { x: 210, y: 127 },
  { x: 301, y: 110 },
  { x: 392, y: 72 },
  { x: 483, y: 43 },
] as const;

type KpiId = "revenue" | "qualified" | "regular";

const KPIS: Array<{
  id: KpiId;
  label: string;
  descriptor: string;
  insight: string;
}> = [
  {
    id: "revenue",
    label: "Revenue",
    descriptor: "Primary KPI",
    insight: "Commercial outcomes stay at the center of every channel decision.",
  },
  {
    id: "qualified",
    label: "Qualified",
    descriptor: "Demand focus",
    insight: "Demand is evaluated by quality and intent, not activity alone.",
  },
  {
    id: "regular",
    label: "Regular",
    descriptor: "Decision cadence",
    insight: "A steady review rhythm turns current signal into the next action.",
  },
];

const ACTIVE_POINTS: Record<KpiId, readonly number[]> = {
  revenue: [4, 5],
  qualified: [1, 2, 3],
  regular: [0, 1, 2, 3, 4, 5],
};

const LINE_PATH = POINTS.map(
  ({ x, y }, index) => `${index === 0 ? "M" : "L"}${x} ${y}`,
).join(" ");
const AREA_PATH = `${LINE_PATH} L483 198 L28 198 Z`;

export default function HeroVisual() {
  const rootRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const [activeKpi, setActiveKpi] = useState<KpiId>("revenue");

  useEffect(
    () => () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    },
    [],
  );

  function updateDepth(event: ReactPointerEvent<HTMLDivElement>) {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const element = rootRef.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));

    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      element.style.setProperty("--pointer-x", `${x * 100}%`);
      element.style.setProperty("--pointer-y", `${y * 100}%`);
      element.style.setProperty("--tilt-x", `${(0.5 - y) * 3.5}deg`);
      element.style.setProperty("--tilt-y", `${(x - 0.5) * 4.5}deg`);
      element.style.setProperty("--shift-x", `${(x - 0.5) * 9}px`);
      element.style.setProperty("--shift-y", `${(y - 0.5) * 7}px`);
      element.style.setProperty("--shift-x-inverse", `${(0.5 - x) * 7}px`);
      element.style.setProperty("--shift-y-inverse", `${(0.5 - y) * 5}px`);
    });
  }

  function resetDepth() {
    const element = rootRef.current;
    if (!element) return;
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    frameRef.current = null;
    element.style.setProperty("--pointer-x", "50%");
    element.style.setProperty("--pointer-y", "42%");
    element.style.setProperty("--tilt-x", "0deg");
    element.style.setProperty("--tilt-y", "0deg");
    element.style.setProperty("--shift-x", "0px");
    element.style.setProperty("--shift-y", "0px");
    element.style.setProperty("--shift-x-inverse", "0px");
    element.style.setProperty("--shift-y-inverse", "0px");
  }

  const active = KPIS.find((kpi) => kpi.id === activeKpi) ?? KPIS[0];

  return (
    <div
      ref={rootRef}
      className={styles.root}
      data-active={activeKpi}
      onPointerMove={updateDepth}
      onPointerLeave={resetDepth}
    >
      <div className={styles.cursorGlow} aria-hidden="true" />
      <div className={styles.orbit} aria-hidden="true" />

      <div className={styles.panel}>
        <div className={styles.panelSheen} aria-hidden="true" />
        <div className={styles.header}>
          <p className={styles.eyebrow}>Growth operating view</p>
        </div>

        <div className={styles.kpiGrid} aria-label="Growth priorities">
          {KPIS.map((kpi) => {
            const isActive = activeKpi === kpi.id;
            return (
              <button
                key={kpi.id}
                type="button"
                aria-pressed={isActive}
                className={styles.kpi}
                onClick={() => setActiveKpi(kpi.id)}
                onFocus={() => setActiveKpi(kpi.id)}
                onPointerEnter={() => setActiveKpi(kpi.id)}
              >
                <span className={styles.kpiTrack} aria-hidden="true" />
                <span className={styles.kpiValue}>{kpi.label}</span>
                <span className={styles.kpiLabel}>{kpi.descriptor}</span>
              </button>
            );
          })}
        </div>

        <figure className={styles.chart}>
          <figcaption className={styles.chartHeader}>
            <span className={styles.chartTitle}>
              <span className={styles.chartKey} aria-hidden="true" />
              Representative growth plan
            </span>
            <span className={styles.chartMode}>Direction, not projection</span>
          </figcaption>

          <svg
            className={styles.chartSvg}
            viewBox="0 0 512 226"
            role="img"
            aria-labelledby="growth-chart-title growth-chart-description"
          >
            <title id="growth-chart-title">Representative growth plan</title>
            <desc id="growth-chart-description">
              A conceptual line moves upward through Audit, Plan, Build, Test,
              Refine, and Scale. It does not represent numerical results.
            </desc>
            <defs>
              <linearGradient id="hero-chart-area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c8f542" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#c8f542" stopOpacity="0" />
              </linearGradient>
              <filter id="hero-chart-glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <g className={styles.grid} aria-hidden="true">
              {[43, 95, 146, 198].map((y) => (
                <line key={y} x1="28" x2="483" y1={y} y2={y} />
              ))}
              {POINTS.map(({ x }) => (
                <line key={x} x1={x} x2={x} y1="25" y2="198" />
              ))}
            </g>

            <rect className={`${styles.focusBand} ${styles.revenueBand}`} x="346" y="25" width="153" height="173" rx="10" />
            <rect className={`${styles.focusBand} ${styles.qualifiedBand}`} x="88" y="25" width="244" height="173" rx="10" />
            <path className={styles.area} d={AREA_PATH} fill="url(#hero-chart-area)" />
            <path className={styles.lineGhost} d={LINE_PATH} pathLength="1" />
            <path className={styles.line} d={LINE_PATH} pathLength="1" />
            <path className={`${styles.segment} ${styles.qualifiedSegment}`} d="M119 158 L210 127 L301 110" />
            <path className={`${styles.segment} ${styles.revenueSegment}`} d="M301 110 L392 72 L483 43" />

            {POINTS.map(({ x, y }, index) => (
              <g
                key={`${x}-${y}`}
                className={`${styles.point} ${
                  ACTIVE_POINTS[activeKpi].includes(index) ? styles.pointActive : ""
                }`}
                style={{ "--point-delay": `${760 + index * 90}ms` } as CSSProperties}
              >
                <circle className={styles.pointHalo} cx={x} cy={y} r="8" />
                <circle className={styles.pointCore} cx={x} cy={y} r="3.5" />
              </g>
            ))}

            {STAGES.map((stage, index) => (
              <text
                key={stage}
                x={POINTS[index].x}
                y="218"
                textAnchor={index === 0 ? "start" : index === STAGES.length - 1 ? "end" : "middle"}
                className={styles.stageLabel}
              >
                {stage}
              </text>
            ))}
          </svg>

          <div className={styles.insightRow} aria-live="polite">
            <span className={styles.insightIndex}>0{KPIS.indexOf(active) + 1}</span>
            <p>{active.insight}</p>
          </div>
        </figure>

      </div>

      <div className={`${styles.floatingWrap} ${styles.floatTop}`}>
        <button
          type="button"
          className={styles.insightCard}
          onClick={() => setActiveKpi("revenue")}
          onFocus={() => setActiveKpi("revenue")}
          onPointerEnter={() => setActiveKpi("revenue")}
          aria-label="Show revenue signal insight"
        >
          <span className={styles.cardIcon} aria-hidden="true">↗</span>
          <span>
            <strong>Clear signal</strong>
            <small>Revenue-aligned reporting</small>
          </span>
        </button>
      </div>

      <div className={`${styles.floatingWrap} ${styles.floatBottom}`}>
        <button
          type="button"
          className={styles.insightCard}
          onClick={() => setActiveKpi("regular")}
          onFocus={() => setActiveKpi("regular")}
          onPointerEnter={() => setActiveKpi("regular")}
          aria-label="Show decision cadence insight"
        >
          <span className={styles.cardIcon} aria-hidden="true">→</span>
          <span>
            <strong>Next action</strong>
            <small>Priorities stay visible</small>
          </span>
        </button>
      </div>

      <div className={styles.mobileInsights}>
        <button type="button" onClick={() => setActiveKpi("revenue")}>
          <span>Clear signal</span>
          <small>Revenue-aligned reporting</small>
        </button>
        <button type="button" onClick={() => setActiveKpi("regular")}>
          <span>Next action</span>
          <small>Priorities stay visible</small>
        </button>
      </div>
    </div>
  );
}
