"use client";

import { useRef, useState } from "react";

type Format = "index" | "currency" | "multiple" | "percent";

type LineChartProps = {
  data: number[];
  labels: string[];
  title: string;
  format?: Format;
};

const W = 560;
const H = 230;
const PAD = { top: 14, right: 16, bottom: 26, left: 44 };

function fmt(v: number, format: Format): string {
  switch (format) {
    case "currency":
      if (v >= 1_000_000) return `$${(v / 1_000_000).toFixed(1)}M`;
      if (v >= 1_000) return `$${Math.round(v / 1_000)}k`;
      return `$${Math.round(v)}`;
    case "multiple":
      return `${v.toFixed(1)}x`;
    case "percent":
      return `${Math.round(v)}%`;
    default:
      return `${Math.round(v)}`;
  }
}

export default function LineChart({
  data,
  labels,
  title,
  format = "index",
}: LineChartProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<number | null>(null);

  const min = Math.min(...data);
  const max = Math.max(...data);
  const span = max - min || 1;
  const yMin = min - span * 0.08;
  const yMax = max + span * 0.08;

  const x = (i: number) =>
    PAD.left + (i / (data.length - 1)) * (W - PAD.left - PAD.right);
  const y = (v: number) =>
    PAD.top + (1 - (v - yMin) / (yMax - yMin)) * (H - PAD.top - PAD.bottom);

  const linePath = data
    .map((v, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(v).toFixed(1)}`)
    .join(" ");
  const areaPath = `${linePath} L${x(data.length - 1).toFixed(1)},${
    H - PAD.bottom
  } L${x(0).toFixed(1)},${H - PAD.bottom} Z`;

  const gridValues = [min, (min + max) / 2, max];
  const gradientId = `area-${title.replace(/[^a-z0-9]/gi, "").slice(0, 16)}`;

  function onMove(e: React.MouseEvent) {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = ((e.clientX - rect.left) / rect.width) * W;
    const i = Math.round(
      ((px - PAD.left) / (W - PAD.left - PAD.right)) * (data.length - 1)
    );
    setHover(Math.max(0, Math.min(data.length - 1, i)));
  }

  return (
    <figure>
      <figcaption className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-muted">
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-chart" />
        {title}
      </figcaption>
      <div
        ref={wrapRef}
        className="relative"
        onMouseMove={onMove}
        onMouseLeave={() => setHover(null)}
      >
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full"
          role="img"
          aria-label={title}
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-chart)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--color-chart)" stopOpacity="0" />
            </linearGradient>
          </defs>

          {gridValues.map((v) => (
            <g key={v}>
              <line
                x1={PAD.left}
                x2={W - PAD.right}
                y1={y(v)}
                y2={y(v)}
                stroke="rgba(255,255,255,0.07)"
                strokeWidth="1"
              />
              <text
                x={PAD.left - 8}
                y={y(v) + 3.5}
                textAnchor="end"
                className="fill-faint"
                fontSize="10"
              >
                {fmt(v, format)}
              </text>
            </g>
          ))}

          {labels.map((label, i) =>
            i % 3 === 0 || i === labels.length - 1 ? (
              <text
                key={`${label}-${i}`}
                x={x(i)}
                y={H - 8}
                textAnchor="middle"
                className="fill-faint"
                fontSize="10"
              >
                {label}
              </text>
            ) : null
          )}

          <path d={areaPath} fill={`url(#${gradientId})`} className="chart-area" />
          <path
            d={linePath}
            fill="none"
            stroke="var(--color-chart)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength={1}
            className="chart-line"
          />

          {/* Selective direct label: the end value only */}
          <text
            x={x(data.length - 1) - 4}
            y={y(data[data.length - 1]) - 10}
            textAnchor="end"
            className="fill-cream"
            fontSize="12"
            fontWeight="600"
          >
            {fmt(data[data.length - 1], format)}
          </text>

          {hover !== null && (
            <g>
              <line
                x1={x(hover)}
                x2={x(hover)}
                y1={PAD.top}
                y2={H - PAD.bottom}
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="1"
              />
              <circle
                cx={x(hover)}
                cy={y(data[hover])}
                r="4.5"
                fill="var(--color-chart)"
                stroke="#111113"
                strokeWidth="2"
              />
            </g>
          )}
        </svg>

        {hover !== null && (
          <div
            className="pointer-events-none absolute -translate-x-1/2 rounded-lg border border-line-strong bg-ink px-3 py-2 text-xs shadow-xl shadow-black/40"
            style={{
              left: `${(x(hover) / W) * 100}%`,
              top: `${(y(data[hover]) / H) * 100 - 22}%`,
            }}
          >
            <span className="text-muted">{labels[hover]}</span>{" "}
            <span className="font-medium text-cream">
              {fmt(data[hover], format)}
            </span>
          </div>
        )}
      </div>

      {/* Accessible data table */}
      <table className="sr-only">
        <caption>{title}</caption>
        <thead>
          <tr>
            <th scope="col">Period</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => (
            <tr key={`${labels[i]}-${i}`}>
              <td>{labels[i]}</td>
              <td>{fmt(v, format)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}
