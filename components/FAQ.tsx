"use client";

import { useId, useState } from "react";

type FAQProps = {
  items: { q: string; a: string }[];
};

export default function FAQ({ items }: FAQProps) {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();

  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-surface">
      {items.map((item, i) => {
        const isOpen = open === i;
        const buttonId = `${id}-question-${i}`;
        const panelId = `${id}-answer-${i}`;
        return (
          <div key={item.q}>
            <button
              id={buttonId}
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left lg:px-8"
            >
              <span className="font-display text-base font-medium tracking-tight text-cream lg:text-lg">
                {item.q}
              </span>
              <span
                aria-hidden
                className={`text-lime transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm leading-relaxed text-muted lg:px-8 lg:text-base">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
