import type { Metadata } from "next";
import AboutExperience from "@/components/AboutExperience";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "About Adverli | Digital Growth Agency",
  description:
    "Adverli is a senior-led digital growth agency connecting website development, Meta Ads, Google Ads, SEO, content creation, and measurement across global markets.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutExperience />;
}
