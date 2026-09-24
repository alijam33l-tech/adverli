import type { Service } from "@/lib/services";
import { absoluteUrl, site } from "@/lib/site";

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
