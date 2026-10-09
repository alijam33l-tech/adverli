import type { Metadata } from "next";
import ContactExperience from "@/components/ContactExperience";
import { createPageMetadata, site } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description: `Start a conversation with ${site.name} about your growth goal, current setup, market, and most important constraint.`,
  path: "/contact",
});

export default function ContactPage() {
  return <ContactExperience />;
}
