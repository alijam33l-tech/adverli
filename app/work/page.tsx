import type { Metadata } from "next";
import WorkExperience from "@/components/WorkExperience";
import { createPageMetadata, site } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Work",
  description: `Explore representative ${site.name} growth scenarios and see how website, media, search, content, and measurement connect around commercial problems.`,
  path: "/work",
});

export default function WorkPage() {
  return <WorkExperience />;
}
