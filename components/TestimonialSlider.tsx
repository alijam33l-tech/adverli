"use client";

import { useState } from "react";
import { testimonials } from "@/lib/testimonials";

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <div className="rounded-2xl border border-line bg-surface p-8 lg:p-14">
      <span aria-hidden className="font-display text-6xl leading-none text-lime">
        “
      </span>
      <blockquote className="mt-2 min-h-40 lg:min-h-32">
        <p className="max-w-3xl font-display text-2xl font-medium leading-snug tracking-tight text-cream lg:text-3xl">
          {t.quote}
        </p>
      </blockquote>
      <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-line-strong bg-surface-2 font-display text-sm font-medium text-lime">
            {t.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div>
            <p className="text-sm font-medium text-cream">{t.name}</p>
            <p className="text-sm text-muted">
              {t.role}, {t.company}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="mr-2 text-xs tabular-nums text-faint">
            {index + 1} / {testimonials.length}
          </span>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-cream transition-colors hover:border-lime hover:text-lime"
          >
            ←
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-cream transition-colors hover:border-lime hover:text-lime"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
