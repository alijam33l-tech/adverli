import Reveal from "./Reveal";
import { process } from "@/lib/site";

export default function ProcessSteps() {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
      {process.map((p, i) => (
        <Reveal key={p.step} delay={i * 100} className="bg-surface">
          <div className="flex h-full flex-col p-8">
            <span className="font-display text-sm text-lime">{p.step}</span>
            <h3 className="mt-14 font-display text-xl font-medium tracking-tight text-cream">
              {p.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {p.description}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
