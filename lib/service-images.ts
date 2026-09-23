import type { StaticImageData } from "next/image";
import websiteDevelopment from "@/public/images/adverli/services/website-development.jpg";
import metaAds from "@/public/images/adverli/services/meta-ads.jpg";
import googleAds from "@/public/images/adverli/services/google-ads.jpg";
import seo from "@/public/images/adverli/services/seo.jpg";
import contentCreation from "@/public/images/adverli/services/content-creation.jpg";

export type ServiceImage = {
  src: StaticImageData;
  alt: string;
  objectPosition: string;
};

export const serviceImages: Record<string, ServiceImage> = {
  "website-development": {
    src: websiteDevelopment,
    alt: "Developer working across multiple monitors displaying website code",
    objectPosition: "center 68%",
  },
  "meta-ads": {
    src: metaAds,
    alt: "Laptop displaying an analytics interface beside a smartphone",
    objectPosition: "center 52%",
  },
  "google-ads": {
    src: googleAds,
    alt: "Laptop showing search results for commercial queries",
    objectPosition: "center 48%",
  },
  seo: {
    src: seo,
    alt: "Website analytics interface displayed on a laptop",
    objectPosition: "center 38%",
  },
  "content-creation": {
    src: contentCreation,
    alt: "Professional camera in a digital content editing workspace",
    objectPosition: "center 62%",
  },
};
