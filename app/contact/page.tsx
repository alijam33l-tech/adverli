import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { createPageMetadata, site } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description: `Contact ${site.name} to discuss website development, paid media, SEO, or content priorities.`,
  path: "/contact",
});

const nextSteps = [
  {
    step: "01",
    title: "Introductory conversation",
    description:
      "We start with your goals, current channels, constraints, and the commercial outcome that matters.",
  },
  {
    step: "02",
    title: "Focused review",
    description:
      "If there is a fit, we review the relevant accounts, website, and measurement setup before recommending work.",
  },
  {
    step: "03",
    title: "Clear recommendation",
    description:
      "You get a plain-English recommendation on priorities, scope, ownership, and the next decision to make.",
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
                Tell us where you are, what needs to change, and which business
                outcome matters most. We&apos;ll review the details and respond
                with a useful next step.
              </p>

              <div className="mt-10 space-y-2 text-sm">
                <p>
                  <a
                    href={site.emailHref}
                    className="text-cream transition-colors hover:text-lime"
                  >
                    {site.email}
                  </a>
                </p>
                <p>
                  <a
                    href={site.phoneHref}
                    className="text-cream transition-colors hover:text-lime"
                  >
                    {site.phone}
                  </a>
                </p>
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
