import type { CaseStudy } from "@/lib/case-studies";
import Sparkline from "./charts/Sparkline";

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-lime/40">
      {/* Abstract visual header for the illustrative scenario */}
      <div
        className={`relative flex h-52 items-end bg-gradient-to-br ${study.gradient} p-6`}
      >
        <div className="dot-grid absolute inset-0 opacity-30" aria-hidden />
        <Sparkline
          data={study.series}
          className="absolute inset-x-0 bottom-0 h-24 w-full opacity-70"
        />
        <p className="relative font-display text-5xl font-semibold tracking-tight text-cream">
          {study.metrics[0].value}
        </p>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-lime">
          Example Growth Scenario
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full border border-line px-3 py-1 text-muted">
            {study.industry}
          </span>
          {study.services.map((s) => (
            <span
              key={s}
              className="rounded-full border border-line px-3 py-1 text-muted"
            >
              {s}
            </span>
          ))}
        </div>
        <h3 className="mt-4 font-display text-lg font-medium tracking-tight text-cream">
          {study.title}
        </h3>
        <p className="mt-1 text-sm text-lime">{study.headline}</p>
        <p className="mb-5 mt-3 text-sm leading-relaxed text-muted">
          {study.summary}
        </p>
        <dl className="mt-auto grid grid-cols-3 gap-4 border-t border-line pt-5">
          {study.metrics.map((m) => (
            <div key={m.label}>
              <dt className="sr-only">{m.label}</dt>
              <dd className="font-display text-base font-medium text-cream">
                {m.value}
              </dd>
              <dd className="mt-1 text-[11px] leading-tight text-faint">
                {m.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
