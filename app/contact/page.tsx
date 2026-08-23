import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a strategy call with Adverli. We'll audit your funnel, show you where revenue is leaking, and map the fastest path to growth.",
};

const nextSteps = [
  {
    step: "01",
    title: "Discovery call",
    description:
      "A 30-minute call with a growth lead — your goals, your channels, your numbers. No pitch deck.",
  },
  {
    step: "02",
    title: "Funnel audit",
    description:
      "We audit your accounts, site, and analytics, and quantify the opportunity — including wasted spend we find.",
  },
  {
    step: "03",
    title: "Growth architecture",
    description:
      "You receive a roadmap with channel mix, forecasts, and targets. Work with us or run it in-house — it's yours.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-12">
            {/* Left: pitch + details */}
            <Reveal className="lg:col-span-5">
              <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted">
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-lime"
                />
                Contact
              </p>
              <h1 className="mt-6 font-display text-5xl font-semibold leading-tight tracking-tight text-cream sm:text-6xl">
                Let&apos;s talk
                <br />
                <span className="text-lime">numbers.</span>
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
                Tell us where you are and where you need to be. A growth lead —
                not a salesperson — replies within one business day.
              </p>

              <div className="mt-10 space-y-2 text-sm">
                <p>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-cream transition-colors hover:text-lime"
                  >
                    {site.email}
                  </a>
                </p>
                <p className="text-muted">{site.phone}</p>
                <p className="text-muted">{site.locations.join(" · ")}</p>
              </div>

              <div className="mt-12 space-y-6 border-t border-line pt-10">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-faint">
                  What happens next
                </p>
                {nextSteps.map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <span className="font-display text-sm text-lime">
                      {s.step}
                    </span>
                    <div>
                      <p className="font-display text-base font-medium tracking-tight text-cream">
                        {s.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {s.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Right: form */}
            <Reveal delay={150} className="lg:col-span-7">
              <div className="rounded-3xl border border-line bg-surface/60 p-8 backdrop-blur lg:p-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
