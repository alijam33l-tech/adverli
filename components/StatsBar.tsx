"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/site";

function Counter({
  value,
  prefix,
  suffix,
}: {
  value: number;
  prefix: string;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const isDecimal = !Number.isInteger(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        if (reduced) {
          setDisplay(value);
          return;
        }
        const duration = 1400;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(value * eased);
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {isDecimal ? display.toFixed(1) : Math.round(display)}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-surface px-8 py-10">
          <p className="font-display text-4xl font-medium tracking-tight text-lime lg:text-5xl">
            <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
          </p>
          <p className="mt-3 text-sm leading-snug text-muted">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
