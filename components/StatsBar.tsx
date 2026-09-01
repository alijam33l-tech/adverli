import { stats } from "@/lib/site";

export default function StatsBar() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-surface px-8 py-10">
          <p className="font-display text-2xl font-medium tracking-tight text-lime sm:text-3xl">
            {s.value}
          </p>
          <p className="mt-3 text-sm leading-snug text-muted">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
