import Button from "./Button";
import Reveal from "./Reveal";

type CTASectionProps = {
  title?: string;
  lede?: string;
};

export default function CTASection({
  title = "Ready to engineer your growth?",
  lede = "Book a strategy call. We'll audit your funnel, show you where the revenue is leaking, and tell you honestly whether we're the right partner to fix it.",
}: CTASectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-8 py-16 text-center lg:px-16 lg:py-24">
          <div className="dot-grid absolute inset-0 opacity-40" aria-hidden />
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/10 blur-3xl"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-4xl font-medium tracking-tight text-cream sm:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
              {lede}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact">Book a strategy call</Button>
              <Button href="/work" variant="ghost">
                See our results
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
