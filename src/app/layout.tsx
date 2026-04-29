import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const BASE_URL = "https://wayfinder.delivery";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Wayfinder - Local Delivery GPS for Shopify",
    template: "%s | Wayfinder",
  },

  description:
    "Add an interactive map to your Shopify store, define delivery zones, and capture precise customer GPS locations. Reduce local delivery errors and speed up fulfillment.",

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

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    title: "Wayfinder - Local Delivery GPS for Shopify",
    description:
      "Pinpoint local delivery powered by GPS. Define zones, set shipping rates, and capture precise customer coordinates - all in one Shopify app.",
    url: BASE_URL,
    siteName: "Wayfinder",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/screenshots/screenshot1.webp",
        width: 1456,
        height: 816,
        alt: "Wayfinder - Create delivery zones on an interactive map in Shopify",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Wayfinder - Local Delivery GPS for Shopify",
    description:
      "Pinpoint local delivery powered by GPS. Define zones, set shipping rates, and capture precise customer coordinates - all in one Shopify app.",
    images: ["/screenshots/screenshot1.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Wayfinder ‑ Local Delivery GPS",
  description:
    "Capture precise local delivery location with an interactive map on your Shopify storefront. Define local delivery zones, set location-based shipping rates, and collect GPS coordinates.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: BASE_URL,
  offers: {
    "@type": "Offer",
    price: "15.00",
    priceCurrency: "USD",
    description: "Basic Plan - 7-day free trial",
  },
  featureList: [
    "Unlimited customer locations",
    "GPS user location detection",
    "Customizable map styling",
    "Unlimited delivery zones",
    "Per-zone shipping rates",
    "Location boundary enforcement",
  ],
  screenshot: `${BASE_URL}/screenshots/screenshot1.webp`,
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
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </body>
    </html>
  );
}
