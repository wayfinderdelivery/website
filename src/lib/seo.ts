import type { Metadata } from "next";
import {
  DOC_PAGES,
  docHref,
  CONTACT_EMAIL,
  SUPPORT_EMAIL,
  SHOPIFY_URL,
} from "@/lib/docs";
import { PLAN, TRIAL_LABEL } from "@/lib/pricing";

export const BASE_URL = "https://wayfinder.delivery";
export const SITE_NAME = "Wayfinder";

/** One generated share image per page, served at /og/<slug>.png. */
export interface OgPage {
  slug: string;
  eyebrow: string;
  title: string;
  subtitle: string;
}

export const OG_PAGES: OgPage[] = [
  {
    slug: "home",
    eyebrow: "Shopify App",
    title: "Pinpoint local delivery. Powered by GPS.",
    subtitle:
      "Interactive maps, delivery zones, and exact customer locations for your Shopify store.",
  },
  ...DOC_PAGES.map((doc) => ({
    slug: doc.slug,
    eyebrow: "Docs",
    title: doc.title,
    subtitle: doc.description,
  })),
  {
    slug: "contact",
    eyebrow: "Support",
    title: "Get in touch",
    subtitle: "Questions about setup, delivery zones, or billing? We're here to help.",
  },
  {
    slug: "privacy",
    eyebrow: "Legal",
    title: "Privacy Policy",
    subtitle: "What data Wayfinder collects, and how it's used.",
  },
  {
    slug: "terms",
    eyebrow: "Legal",
    title: "Terms of Service",
    subtitle: "Subscriptions, billing, acceptable use, and liability.",
  },
];

export const ogImageUrl = (slug: string) => `/og/${slug}.png`;

/**
 * Full per-page metadata. Next.js replaces (not merges) the parent's
 * openGraph/twitter objects, so every page must set them completely or it
 * inherits the homepage's title and URL.
 */
export function pageMetadata({
  title,
  description,
  path,
  ogSlug,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  ogSlug: string;
  absoluteTitle?: boolean;
}): Metadata {
  const url = path === "/" ? BASE_URL : `${BASE_URL}${path}`;
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  const image = {
    url: ogImageUrl(ogSlug),
    width: 1200,
    height: 630,
    alt: fullTitle,
  };

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
    },
  };
}

export function docMetadata(slug: string, description: string): Metadata {
  const doc = DOC_PAGES.find((d) => d.slug === slug);
  if (!doc) throw new Error(`Unknown doc page: ${slug}`);
  return pageMetadata({
    title: doc.title,
    description,
    path: docHref(slug),
    ogSlug: slug,
  });
}

/* ---------- JSON-LD ---------- */

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: SITE_NAME,
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  email: CONTACT_EMAIL,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: SUPPORT_EMAIL,
    url: `${BASE_URL}/contact`,
  },
  sameAs: [SHOPIFY_URL],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: SITE_NAME,
  url: BASE_URL,
  publisher: { "@id": `${BASE_URL}/#organization` },
};

export const softwareAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Wayfinder - Local Delivery GPS",
  description:
    "Capture precise local delivery location with an interactive map on your Shopify storefront. Define local delivery zones, set location-based shipping rates, and collect GPS coordinates.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: BASE_URL,
  installUrl: SHOPIFY_URL,
  publisher: { "@id": `${BASE_URL}/#organization` },
  offers: {
    "@type": "Offer",
    price: PLAN.price.toFixed(2),
    priceCurrency: PLAN.currency,
    description: `${PLAN.name} Plan - ${TRIAL_LABEL}`,
  },
  featureList: [
    "Unlimited customer locations",
    "GPS user location detection",
    "Customizable map styling",
    "Unlimited delivery zones",
    "Per-zone shipping rates",
    "In-store pickup locations",
    "Location boundary enforcement",
  ],
  screenshot: `${BASE_URL}/screenshots/screenshot1.webp`,
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.path === "/" ? BASE_URL : `${BASE_URL}${item.path}`,
    })),
  };
}
