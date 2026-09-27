import Link from "next/link";
import EditorialCallout from "@/components/EditorialCallout";
import KeyTakeaway from "@/components/KeyTakeaway";
import type {
  InsightArticle,
  InsightBlock,
  InsightRichText,
} from "@/lib/insights";
import styles from "./Insights.module.css";

function RichText({ content }: { content: InsightRichText }) {
  if (typeof content === "string") return content;

  return content.map((segment, index) => {
    if (typeof segment === "string") return segment;
    if (segment.type === "strong") {
      return <strong key={`${segment.text}-${index}`}>{segment.text}</strong>;
    }

    const className = styles.inlineLink;
    return segment.href.startsWith("/") ? (
      <Link key={`${segment.href}-${index}`} href={segment.href} className={className}>
        {segment.text}
      </Link>
    ) : (
      <a key={`${segment.href}-${index}`} href={segment.href} className={className}>
        {segment.text}
      </a>
    );
  });
}

function ArticleBlock({ block }: { block: InsightBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p>
          <RichText content={block.content} />
        </p>
      );
    case "subheading":
      return (
        <h3 id={block.id} className={styles.subheading}>
          {block.title}
        </h3>
      );
    case "list": {
      const List = block.ordered ? "ol" : "ul";
      return (
        <List className={block.ordered ? styles.orderedList : styles.list}>
          {block.items.map((item, index) => (
            <li key={index}>
              <RichText content={item} />
            </li>
          ))}
        </List>
      );
    }
    case "table":
      return (
        <div className={styles.tableGroup}>
          <p className={styles.tableHint} aria-hidden="true">
            Swipe horizontally to compare
          </p>
          <div
            className={styles.tableFrame}
            tabIndex={0}
            role="region"
            aria-label={block.caption}
          >
            <table>
              <caption>{block.caption}</caption>
              <thead>
                <tr>
                  {block.columns.map((column) => (
                    <th key={column} scope="col">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, index) =>
                      index === 0 ? (
                        <th key={cell} scope="row">
                          {cell}
                        </th>
                      ) : (
                        <td key={`${row[0]}-${index}`}>{cell}</td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    case "keyTakeaway":
      return (
        <KeyTakeaway title={block.title}>
          <RichText content={block.content} />
        </KeyTakeaway>
      );
    case "editorialCallout":
      return (
        <EditorialCallout label={block.label} title={block.title}>
          <RichText content={block.content} />
        </EditorialCallout>
      );
  }
}

export default function InsightArticleContent({
  article,
}: {
  article: InsightArticle;
}) {
  return (
    <div className={styles.prose}>
      {article.sections.map((section) => (
        <section key={section.id} aria-labelledby={section.id}>
          <h2 id={section.id}>{section.title}</h2>
          {section.blocks.map((block, index) => (
            <ArticleBlock key={`${section.id}-${index}`} block={block} />
          ))}
          {section.id === "frequently-asked-questions" && (
            <div className={styles.faqList}>
              {article.faqs.map((faq) => (
                <details key={faq.question} className={styles.faqItem}>
                  <summary>{faq.question}</summary>
                  <p>
                    <RichText content={faq.answer} />
                  </p>
                </details>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
