import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/Insights.module.css";
import {
  formatInsightDate,
  getInsightReadingTime,
  insights,
  insightTopics,
} from "@/lib/insights";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Insights",
  description:
    "Practical thinking from Adverli on websites, paid acquisition, SEO, AI search, and content systems built around modern business growth.",
  path: "/insights",
});

export default function InsightsPage() {
  const [article, ...earlierArticles] = insights;
  const readingTime = getInsightReadingTime(article);

  return (
    <>
      <section className={styles.hubHero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Adverli Insights</p>
          <h1 className={styles.hubTitle}>
            Ideas for building, acquiring and compounding{" "}
            <span className={styles.accent}>digital growth.</span>
          </h1>
          <p className={styles.heroCopy}>
            Practical thinking on websites, paid acquisition, SEO, AI search
            and content systems — built around how modern businesses actually
            grow.
          </p>
          <ul className={styles.topicRail} aria-label="Insight topics">
            {insightTopics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.landingContent} aria-labelledby="latest-insight">
        <div className={styles.landingHeader}>
          <div>
            <p className={styles.sectionLabel}>Published thinking</p>
            <h2 id="latest-insight">Latest insight</h2>
          </div>
          <p className={styles.landingCount}>
            {String(insights.length).padStart(2, "0")} articles
          </p>
        </div>

        <Link href={`/insights/${article.slug}`} className={styles.feature}>
          <div className={styles.featureContent}>
            <div className={styles.featureMeta}>
              <span>{article.category}</span>
              <span>{formatInsightDate(article.publishedAt)}</span>
              <span>{readingTime} min read</span>
            </div>
            <h3>{article.title}</h3>
            <p className={styles.featureDescription}>{article.description}</p>
            <span className={styles.featureAction}>
              Read the article <span aria-hidden>→</span>
            </span>
          </div>
          <div className={styles.featureVisual} aria-hidden="true">
            <div className={styles.visualFrame}>
              <div className={styles.visualPrompt}>
                <span>01 / Question</span>
                <strong>{article.shortTitle}</strong>
              </div>
              <div className={styles.visualPath}>
                <i />
                <i />
                <i />
              </div>
              <div className={styles.visualResponse}>
                <span>03 / Answer signal</span>
                <b />
                <b />
                <b />
              </div>
              <div className={styles.visualStages}>
                <span>Question</span>
                <span>Context</span>
                <span>Answer</span>
              </div>
            </div>
          </div>
        </Link>

        {earlierArticles.length > 0 && (
          <div className={styles.articleList}>
            {earlierArticles.map((earlierArticle, index) => (
              <Link
                key={earlierArticle.slug}
                href={`/insights/${earlierArticle.slug}`}
                className={styles.articleRow}
              >
                <span className={styles.articleIndex} aria-hidden="true">
                  {String(index + 2).padStart(2, "0")}
                </span>
                <div>
                  <div className={styles.featureMeta}>
                    <span>{earlierArticle.category}</span>
                    <span>{formatInsightDate(earlierArticle.publishedAt)}</span>
                    <span>
                      {getInsightReadingTime(earlierArticle)} min read
                    </span>
                  </div>
                  <h3>{earlierArticle.title}</h3>
                  <p>{earlierArticle.description}</p>
                </div>
                <span className={styles.articleRowAction}>
                  Read <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
