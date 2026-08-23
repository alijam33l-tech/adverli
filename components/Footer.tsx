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
              Adverli<span className="text-lime">.</span>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              {site.tagline} An enterprise growth agency building revenue
              engines across web, paid media, search, and content.
            </p>
            <p className="mt-6 text-sm text-muted">
              <a
                href={`mailto:${site.email}`}
                className="text-cream transition-colors hover:text-lime"
              >
                {site.email}
              </a>
              <br />
              {site.phone}
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-faint">
              Services
            </p>
            <ul className="mt-4 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-muted transition-colors hover:text-lime"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-faint">
              Company
            </p>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted transition-colors hover:text-lime"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-faint">
              Offices
            </p>
            <ul className="mt-4 space-y-3">
              {site.locations.map((city) => (
                <li key={city} className="text-sm text-muted">
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-faint">
            © {new Date().getFullYear()} Adverli. All rights reserved.
          </p>
          <p className="text-xs text-faint">
            Growth, engineered — New York · London · Singapore
          </p>
        </div>
      </div>
    </footer>
  );
}
