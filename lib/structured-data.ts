import type { Service } from "@/lib/services";
import type { InsightArticle } from "@/lib/insights";
import { absoluteUrl, defaultSocialImage, site } from "@/lib/site";

const organizationId = `${site.url}/#organization`;
const websiteId = `${site.url}/#website`;

const organizationReference = {
  "@type": "Organization",
  "@id": organizationId,
  name: site.name,
  url: site.url,
};

export const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      ...organizationReference,
      description: site.positioning,
      email: site.email,
      telephone: site.phoneHref.replace("tel:", ""),
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "business enquiries",
        email: site.email,
        telephone: site.phoneHref.replace("tel:", ""),
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: site.name,
      url: site.url,
      description: site.description,
      inLanguage: "en",
      publisher: {
        "@id": organizationId,
      },
    },
  ],
};

export function createServiceStructuredData(service: Service) {
  const serviceUrl = absoluteUrl(`/services/${service.slug}`);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${serviceUrl}#service`,
        name: service.title,
        serviceType: service.title,
        description: service.tagline,
        url: serviceUrl,
        provider: organizationReference,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${serviceUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Services",
            item: absoluteUrl("/services"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: service.title,
            item: serviceUrl,
          },
        ],
      },
    ],
  };
}

export function createArticleStructuredData(
  article: InsightArticle,
  wordCount: number,
) {
  const articleUrl = absoluteUrl(`/insights/${article.slug}`);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${articleUrl}#article`,
        headline: article.title,
        description: article.description,
        articleSection: article.category,
        datePublished: article.publishedAt,
        dateModified: article.updatedAt,
        inLanguage: "en",
        url: articleUrl,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": articleUrl,
        },
        image: defaultSocialImage.url,
        wordCount,
        author: organizationReference,
        publisher: organizationReference,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${articleUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Insights",
            item: absoluteUrl("/insights"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.title,
            item: articleUrl,
          },
        ],
      },
    ],
  };
}
