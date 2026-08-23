// Decorative sparkline for card headers — aria-hidden, animates via the
// ancestor Reveal's .is-visible (see .chart-line in globals.css).
type SparklineProps = {
  data: number[];
  className?: string;
};

export default function Sparkline({ data, className = "" }: SparklineProps) {
  const W = 200;
  const H = 48;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const span = max - min || 1;

  const x = (i: number) => (i / (data.length - 1)) * W;
  const y = (v: number) => 4 + (1 - (v - min) / span) * (H - 8);

  const line = data
    .map((v, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(v).toFixed(1)}`)
    .join(" ");
  const area = `${line} L${W},${H} L0,${H} Z`;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={className}
      aria-hidden
      preserveAspectRatio="none"
    >
      <path d={area} fill="rgba(245,245,242,0.1)" className="chart-area" />
      <path
        d={line}
        fill="none"
        stroke="rgba(245,245,242,0.85)"
        strokeWidth="1.5"
        strokeLinecap="round"
        pathLength={1}
        className="chart-line"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
