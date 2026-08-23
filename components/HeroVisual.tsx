"use client";

import { useEffect, useRef, useState } from "react";
import LineChart from "./charts/LineChart";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// Blended client revenue, indexed to month 1 = 100
const SERIES = [100, 114, 109, 132, 151, 178, 171, 206, 243, 288, 327, 384];

function useCountUp(target: number, decimals = 0, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setValue(target * (1 - Math.pow(1 - t, 3)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return value.toFixed(decimals);
}

export default function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const roas = useCountUp(4.7, 1);
  const cac = useCountUp(34);
  const organic = useCountUp(212);

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
            Client growth report
          </p>
          <span className="flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-muted">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lime" />
            </span>
            Live
          </span>
        </div>

        <dl className="mt-5 grid grid-cols-3 gap-4 border-b border-line pb-5">
          <div>
            <dd className="font-display text-2xl font-semibold tracking-tight text-cream tabular-nums">
              {roas}x
            </dd>
            <dt className="mt-1 text-[11px] leading-tight text-faint">
              Blended ROAS
            </dt>
          </div>
          <div>
            <dd className="font-display text-2xl font-semibold tracking-tight text-cream tabular-nums">
              −{cac}%
            </dd>
            <dt className="mt-1 text-[11px] leading-tight text-faint">
              CAC, year over year
            </dt>
          </div>
          <div>
            <dd className="font-display text-2xl font-semibold tracking-tight text-cream tabular-nums">
              +{organic}%
            </dd>
            <dt className="mt-1 text-[11px] leading-tight text-faint">
              Organic revenue
            </dt>
          </div>
        </dl>

        <div className="mt-5">
          <LineChart
            data={SERIES}
            labels={MONTHS}
            title="Blended revenue — indexed, month 1 = 100"
            format="index"
          />
        </div>
      </div>

      {/* Floating result chips */}
      <div className="animate-float absolute -right-4 -top-6 hidden rounded-xl border border-line bg-surface-2/90 px-4 py-3 shadow-xl shadow-black/40 backdrop-blur-sm sm:block">
        <p className="font-display text-lg font-semibold text-lime">+312%</p>
        <p className="text-[11px] text-muted">Direct bookings · Bluepine</p>
      </div>
      <div
        className="animate-float absolute -bottom-6 -left-4 hidden rounded-xl border border-line bg-surface-2/90 px-4 py-3 shadow-xl shadow-black/40 backdrop-blur-sm sm:block"
        style={{ animationDelay: "-3s" }}
      >
        <p className="font-display text-lg font-semibold text-lime">$1.1M</p>
        <p className="text-[11px] text-muted">Waste eliminated · Meridian</p>
      </div>
    </div>
  );
}
