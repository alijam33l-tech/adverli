import { clients } from "@/lib/site";

export default function LogoMarquee() {
  return (
    <div className="border-y border-line bg-surface py-10">
      <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-faint">
        Trusted by category leaders
      </p>
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee gap-16 pr-16">
          {[...clients, ...clients].map((name, i) => (
            <span
              key={`${name}-${i}`}
              aria-hidden={i >= clients.length}
              className="whitespace-nowrap font-display text-lg font-medium tracking-tight text-faint"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
