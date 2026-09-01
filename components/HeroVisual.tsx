"use client";

import { useEffect, useRef } from "react";
import LineChart from "./charts/LineChart";

const STAGES = ["Audit", "Plan", "Build", "Test", "Refine", "Scale"];
const SERIES = [1, 1.35, 1.8, 2.25, 3, 3.7];

export default function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);

  // Above the fold — trigger the chart draw on mount instead of on scroll
  useEffect(() => {
    const id = setTimeout(() => ref.current?.classList.add("chart-drawn"), 150);
    return () => clearTimeout(id);
  }, []);

  return (
    <div ref={ref} className="relative">
      <div
        aria-hidden
        className="animate-aurora pointer-events-none absolute -inset-8 rounded-full bg-lime/10 blur-3xl"
      />

      {/* Main dashboard card */}
      <div className="relative rounded-2xl border border-line bg-surface/80 p-6 shadow-2xl shadow-black/50 backdrop-blur-sm lg:p-7">
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
            Growth operating view
          </p>
          <span className="flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-muted">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lime" />
            </span>
            Sample
          </span>
        </div>

        <dl className="mt-5 grid grid-cols-3 gap-4 border-b border-line pb-5">
          <div>
            <dd className="font-display text-xl font-semibold tracking-tight text-cream sm:text-2xl">
              Revenue
            </dd>
            <dt className="mt-1 text-[11px] leading-tight text-faint">
              Primary KPI
            </dt>
          </div>
          <div>
            <dd className="font-display text-xl font-semibold tracking-tight text-cream sm:text-2xl">
              Qualified
            </dd>
            <dt className="mt-1 text-[11px] leading-tight text-faint">
              Demand focus
            </dt>
          </div>
          <div>
            <dd className="font-display text-xl font-semibold tracking-tight text-cream sm:text-2xl">
              Weekly
            </dd>
            <dt className="mt-1 text-[11px] leading-tight text-faint">
              Decision cadence
            </dt>
          </div>
        </dl>

        <div className="mt-5">
          <LineChart
            data={SERIES}
            labels={STAGES}
            title="Illustrative growth plan — not client data"
            format="progress"
          />
        </div>
      </div>

      {/* Floating result chips */}
      <div className="animate-float absolute -right-4 -top-6 hidden rounded-xl border border-line bg-surface-2/90 px-4 py-3 shadow-xl shadow-black/40 backdrop-blur-sm sm:block">
        <p className="font-display text-lg font-semibold text-lime">Clear signal</p>
        <p className="text-[11px] text-muted">Revenue-aligned reporting</p>
      </div>
      <div
        className="animate-float absolute -bottom-6 -left-4 hidden rounded-xl border border-line bg-surface-2/90 px-4 py-3 shadow-xl shadow-black/40 backdrop-blur-sm sm:block"
        style={{ animationDelay: "-3s" }}
      >
        <p className="font-display text-lg font-semibold text-lime">Next action</p>
        <p className="text-[11px] text-muted">Priorities stay visible</p>
      </div>
    </div>
  );
}
