import type { ReactNode } from "react";
import styles from "./Insights.module.css";

type KeyTakeawayProps = {
  title: string;
  children: ReactNode;
};

export default function KeyTakeaway({ title, children }: KeyTakeawayProps) {
  return (
    <aside className={styles.keyTakeaway} aria-label={`Key takeaway: ${title}`}>
      <span>Key takeaway</span>
      <h3>{title}</h3>
      <p>{children}</p>
    </aside>
  );
}
