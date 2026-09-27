import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import InsightArticleContent from "@/components/InsightArticleContent";
import styles from "@/components/Insights.module.css";
import JsonLd from "@/components/JsonLd";
import {
  formatInsightDate,
  getInsight,
  getInsightReadingTime,
  getInsightWordCount,
  getRelatedInsights,
  insights,
} from "@/lib/insights";
import { createArticleStructuredData } from "@/lib/structured-data";
import { absoluteUrl, defaultSocialImage, site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return insights.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata(
  props: PageProps<"/insights/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getInsight(slug);
  if (!article) return {};

  const canonical = absoluteUrl(`/insights/${article.slug}`);
  const socialTitle = `${article.title} — ${site.name}`;

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      siteName: site.name,
      title: socialTitle,
      description: article.description,
      url: canonical,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      section: article.category,
      images: [defaultSocialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: article.description,
      images: [defaultSocialImage],
    },
  };
}

export default async function InsightArticlePage(
  props: PageProps<"/insights/[slug]">,
) {
  const { slug } = await props.params;
  const article = getInsight(slug);
  if (!article) notFound();

  const wordCount = getInsightWordCount(article);
  const readingTime = getInsightReadingTime(article);
  const relatedInsights = getRelatedInsights(article);
  const dateWasUpdated = article.updatedAt !== article.publishedAt;

  return (
    <>
      <JsonLd data={createArticleStructuredData(article, wordCount)} />

      <article>
        <header className={styles.articleHero}>
          <div className={styles.heroInner}>
            <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden>/</span>
              <Link href="/insights">Insights</Link>
              <span aria-hidden>/</span>
              <span aria-current="page">{article.shortTitle}</span>
            </nav>
            <p className={styles.eyebrow}>{article.category}</p>
            <h1 className={styles.articleTitle}>{article.title}</h1>
            <p className={styles.articleIntro}>{article.intro}</p>
            <div className={styles.articleMeta}>
              <span>By Adverli</span>
              <span>Published {formatInsightDate(article.publishedAt)}</span>
              {dateWasUpdated && (
                <span>Updated {formatInsightDate(article.updatedAt)}</span>
              )}
              <span>{readingTime} min read</span>
            </div>
          </div>
        </header>

        <div className={styles.articleShell}>
          <div className={styles.articleLayout}>
            <nav className={styles.toc} aria-label="Table of contents">
              <p className={styles.metaLabel}>In this article</p>
              <ol>
                {article.sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>{section.title}</a>
                  </li>
                ))}
              </ol>
            </nav>
            <InsightArticleContent article={article} />
          </div>
        </div>
      </article>

      <div className={styles.afterArticle}>
        <section
          className={styles.serviceCallout}
          aria-labelledby="related-services"
        >
          <div>
            <p className={styles.sectionLabel}>Related services</p>
            <h2 id="related-services">Build the system behind the answer.</h2>
          </div>
          <div className={styles.serviceLinks}>
            {article.relatedServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className={styles.serviceLink}
              >
                <strong>{service.title}</strong>
                <span>{service.description}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.articleCta} aria-labelledby="article-cta">
          <h2 id="article-cta">
            Turn search and AI discovery into a clearer growth system.
          </h2>
          <Link href="/contact">Discuss your search strategy →</Link>
        </section>

        <section
          className={styles.relatedInsights}
          aria-labelledby="related-insights"
        >
          <p className={styles.sectionLabel}>Continue reading</p>
          <h2 id="related-insights">Related insights</h2>
          {relatedInsights.length > 0 ? (
            <div>
              {relatedInsights.map((related) => (
                <Link key={related.slug} href={`/insights/${related.slug}`}>
                  {related.title}
                </Link>
              ))}
            </div>
          ) : (
            <div className={styles.relatedEmpty}>
              <Link href="/insights">Return to Insights →</Link>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
