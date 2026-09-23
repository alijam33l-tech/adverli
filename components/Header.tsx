"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { services } from "@/lib/services";

function Wordmark() {
  return (
    <Link
      href="/"
      className="font-display text-xl font-semibold tracking-tight text-cream"
    >
      {site.name}<span className="text-lime">.</span>
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [openForPath, setOpenForPath] = useState<string | null>(null);
  const mobileOpen = openForPath === pathname;

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Wordmark />

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            item.label === "Services" ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm transition-colors ${
                    pathname.startsWith("/services")
                      ? "text-lime"
                      : "text-muted hover:text-cream"
                  }`}
                >
                  Services
                  <span
                    aria-hidden
                    className="text-[10px] transition-transform group-hover:rotate-180"
                  >
                    ▾
                  </span>
                </Link>
                {/* Dropdown — hover/focus-within keeps it open */}
                <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-line bg-surface p-2 shadow-2xl shadow-black/50">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="flex items-baseline gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-surface-2"
                      >
                        <span className="font-display text-xs text-lime">
                          {s.index}
                        </span>
                        <span className="text-sm text-cream">{s.title}</span>
                      </Link>
                    ))}
                    <div className="mt-1 border-t border-line px-4 py-3">
                      <Link
                        href="/services"
                        className="text-xs font-medium uppercase tracking-widest text-muted transition-colors hover:text-lime"
                      >
                        All services →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  pathname === item.href
                    ? "text-lime"
                    : "text-muted hover:text-cream"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="rounded-full bg-lime px-5 py-2.5 font-display text-sm font-medium text-ink transition-colors hover:bg-lime-dim"
          >
            Book a strategy call
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpenForPath(mobileOpen ? null : pathname)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-px w-6 bg-cream transition-transform ${
              mobileOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-cream transition-transform ${
              mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>
    </header>

      {/* Mobile drawer — sibling of the header: backdrop-blur up there creates a
         containing block that would trap this fixed element inside the 64px bar */}
      {mobileOpen && (
        <div className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-ink lg:hidden">
          <nav aria-label="Mobile" className="px-6 py-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-faint">
              Services
            </p>
            <div className="mt-3 space-y-1">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  onClick={() => setOpenForPath(null)}
                  className="flex items-baseline gap-3 py-2"
                >
                  <span className="font-display text-xs text-lime">
                    {s.index}
                  </span>
                  <span className="font-display text-2xl text-cream">
                    {s.title}
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-8 space-y-1 border-t border-line pt-8">
              {nav
                .filter((i) => i.label !== "Services")
                .map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpenForPath(null)}
                    className="block py-2 font-display text-2xl text-cream"
                  >
                    {item.label}
                  </Link>
                ))}
            </div>
            <Link
              href="/contact"
              onClick={() => setOpenForPath(null)}
              className="mt-10 inline-flex rounded-full bg-lime px-6 py-3 font-display text-sm font-medium text-ink"
            >
              Book a strategy call →
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
