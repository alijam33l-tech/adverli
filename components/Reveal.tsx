"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number; // ms, staggers siblings
  initiallyVisible?: boolean;
};

let sharedObserver: IntersectionObserver | null = null;

function getRevealObserver() {
  if (typeof IntersectionObserver === "undefined") return null;

  sharedObserver ??= new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
  );

  return sharedObserver;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  initiallyVisible = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initiallyVisible) return;

    const el = ref.current;
    if (!el) return;

    const observer = getRevealObserver();
    if (!observer) {
      el.classList.add("is-visible");
      return;
    }

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [initiallyVisible]);

  return (
    <div
      ref={ref}
      className={`reveal ${initiallyVisible ? "reveal-immediate is-visible" : ""} ${className}`}
      style={delay ? { ["--reveal-delay" as string]: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
