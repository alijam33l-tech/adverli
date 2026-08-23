import Link from "next/link";
import type { Service } from "@/lib/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface p-8 transition-colors duration-300 hover:border-lime/40"
    >
      <div>
        <div className="flex items-start justify-between">
          <span className="font-display text-sm text-lime">
            {service.index}
          </span>
          <span
            aria-hidden
            className="text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-lime"
          >
            →
          </span>
        </div>
        <h3 className="mt-16 font-display text-2xl font-medium tracking-tight text-cream transition-colors group-hover:text-lime">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {service.tagline}
        </p>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-lime/5 blur-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
      />
    </Link>
  );
}
