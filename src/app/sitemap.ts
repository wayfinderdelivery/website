import type { MetadataRoute } from "next";
import { DOC_PAGES, docHref } from "@/lib/docs";

const BASE_URL = "https://wayfinder.delivery";

// Required for `output: "export"`: generate sitemap.xml once at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: BASE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    ...DOC_PAGES.map((doc) => ({
      url: `${BASE_URL}${docHref(doc.slug)}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${BASE_URL}/contact`, lastModified, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
