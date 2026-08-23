import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  return (
    <Reveal className={`max-w-3xl ${alignment}`}>
      <p
        className={`flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-lime" />
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-cream sm:text-5xl">
        {title}
      </h2>
      {lede && <p className="mt-5 text-lg leading-relaxed text-muted">{lede}</p>}
    </Reveal>
  );
}
