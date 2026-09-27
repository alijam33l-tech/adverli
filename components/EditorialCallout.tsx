import type { ReactNode } from "react";
import styles from "./Insights.module.css";

type EditorialCalloutProps = {
  label: string;
  title: string;
  children: ReactNode;
};

export default function EditorialCallout({
  label,
  title,
  children,
}: EditorialCalloutProps) {
  return (
    <aside
      className={styles.editorialCallout}
      aria-label={`${label}: ${title}`}
    >
      <span>{label}</span>
      <h3>{title}</h3>
      <p>{children}</p>
    </aside>
  );
}
