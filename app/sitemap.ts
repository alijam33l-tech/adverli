import type { MetadataRoute } from "next";
import { insights } from "@/lib/insights";
import { services } from "@/lib/services";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/work",
    "/insights",
    "/about",
    "/contact",
    "/privacy",
  ].map((path) => ({
    url: absoluteUrl(path || "/"),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : path === "/privacy" ? 0.3 : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: absoluteUrl(`/services/${s.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const insightRoutes = insights.map((article) => ({
    url: absoluteUrl(`/insights/${article.slug}`),
    lastModified: new Date(`${article.updatedAt}T00:00:00Z`),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...insightRoutes];
}
