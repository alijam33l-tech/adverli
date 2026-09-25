import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-2xl font-semibold tracking-tight text-cream">
              {site.name}<span className="text-lime">.</span>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              {site.positioning}
            </p>
            <div className="mt-6 flex flex-col items-start text-sm text-muted">
              <a
                href={site.emailHref}
                className="inline-flex min-h-11 items-center text-cream transition-colors hover:text-lime"
              >
                {site.email}
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex min-h-11 items-center text-cream transition-colors hover:text-lime"
              >
                {site.phone}
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-faint">
              Services
            </p>
            <ul className="mt-4 space-y-1">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-flex min-h-11 min-w-11 items-center text-sm text-muted transition-colors hover:text-lime"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-faint">
              Company
            </p>
            <ul className="mt-4 space-y-1">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-flex min-h-11 min-w-11 items-center text-sm text-muted transition-colors hover:text-lime"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-faint">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-faint">
            <nav aria-label="Legal">
              <Link
                href="/privacy"
                className="inline-flex min-h-11 items-center outline-none transition-colors hover:text-lime focus-visible:rounded-sm focus-visible:text-lime focus-visible:ring-2 focus-visible:ring-lime/60"
              >
                Privacy Policy
              </Link>
            </nav>
            <p>{site.tagline}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
