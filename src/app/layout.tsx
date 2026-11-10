import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import {
  BASE_URL,
  pageMetadata,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

// Fonts are self-hosted (variable woff2, latin subset) instead of using
// next/font/google, so builds never download from Google. That download was
// flaky and caused "next/font/google queries have exactly one entry" errors.
const dmSans = localFont({
  src: "../assets/fonts/dm-sans-latin.woff2",
  variable: "--font-dm",
  weight: "400 800",
  display: "swap",
});

const plusJakarta = localFont({
  src: "../assets/fonts/plus-jakarta-sans-latin.woff2",
  variable: "--font-jakarta",
  weight: "400 600",
  display: "swap",
});

const HOME_TITLE = "Wayfinder - Local Delivery GPS for Shopify";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // Homepage defaults (canonical, Open Graph, Twitter, share image).
  // Every other page overrides these via pageMetadata()/docMetadata().
  ...pageMetadata({
    title: HOME_TITLE,
    description:
      "Add an interactive map to your Shopify store, define delivery zones, and capture precise customer GPS locations. Reduce local delivery errors and speed up fulfillment.",
    path: "/",
    ogSlug: "home",
    absoluteTitle: true,
  }),

  title: {
    default: HOME_TITLE,
    template: "%s | Wayfinder",
  },

  keywords: [
    "shopify local delivery",
    "GPS delivery app",
    "delivery zones shopify",
    "local delivery GPS",
    "shopify shipping rates",
    "carrier calculated shipping",
    "customer GPS coordinates",
    "shopify map app",
    "local delivery management",
    "shopify local pickup",
    "wayfinder shopify",
  ],

  authors: [{ name: "Wayfinder", url: BASE_URL }],
  creator: "Wayfinder",
  publisher: "Wayfinder",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${plusJakarta.variable}`}>
      <body className="antialiased">
        {children}
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
      </body>
    </html>
  );
}
