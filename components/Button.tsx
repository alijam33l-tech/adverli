import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 font-display text-sm font-medium tracking-tight transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime";
  const styles =
    variant === "primary"
      ? "bg-lime text-ink hover:bg-lime-dim"
      : "border border-line-strong text-cream hover:border-lime hover:text-lime";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
      <span
        aria-hidden
        className="transition-transform duration-200 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
