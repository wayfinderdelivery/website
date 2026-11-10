import {
  DOC_PAGES,
  docHref,
  SHOPIFY_URL,
  CONTACT_EMAIL,
  SUPPORT_EMAIL,
} from "@/lib/docs";
import { BASE_URL } from "@/lib/seo";
import { PLAN, PRICE_LABEL, TRIAL_LABEL } from "@/lib/pricing";

// Generated once at build time (required for `output: "export"`).
// Format follows the llms.txt proposal: https://llmstxt.org
export const dynamic = "force-static";

export function GET() {
  const docs = DOC_PAGES.map(
    (doc) => `- [${doc.title}](${BASE_URL}${docHref(doc.slug)}): ${doc.description}`
  ).join("\n");

  const body = `# Wayfinder

> Wayfinder is a Shopify app for local delivery and in-store pickup. Merchants add an interactive map to their storefront, define delivery zones with their own rates, and capture each customer's exact GPS delivery location on the order.

Key facts:

- Platform: Shopify app, installed from the Shopify App Store (${SHOPIFY_URL}). Works with Online Store 2.0 themes via an app block on the cart or product page.
- Pricing: ${PLAN.name} plan, ${PRICE_LABEL} ${PLAN.currency} per month, with a ${TRIAL_LABEL}. Includes unlimited customer locations, unlimited delivery zones, per-zone rates, and pickup stores.
- Maps: the default "Wayfinder Map" is free and needs no API key. Google Maps is optional and requires the merchant's own Google Cloud API key (Maps JavaScript, Places, and Geocoding APIs).
- Delivery zones: created by searching a region, drawing a polygon on the map, or entering postal codes (any country; map outlines for the US, Canada, and Australia). Each zone has a name and a flat delivery price.
- Product rules: per zone, a product can be "Excluded" (not deliverable there) or "Free" (free delivery there). Per-product custom prices are not supported.
- Shipping rates: shown at checkout through Shopify's Carrier Calculated Shipping, which must be available on the merchant's Shopify plan. Wayfinder must also be added to the merchant's Shopify shipping profile.
- Pickup: merchants add store locations as map pins; customers switch to pickup and choose a store, and checkout shows "Store name — Pickup".
- Order data: the customer's address, latitude/longitude, and a Google Maps link are saved on the Shopify order under "Additional details". Wayfinder does not store customer names, emails, or phone numbers.
- Support: ${SUPPORT_EMAIL}
- General contact: ${CONTACT_EMAIL} or ${BASE_URL}/contact

## Docs

${docs}

## Optional

- [Homepage](${BASE_URL}/): Features, how it works, and pricing.
- [Contact](${BASE_URL}/contact): Contact form and general contact email.
- [Privacy Policy](${BASE_URL}/privacy): What data Wayfinder collects and how it is used.
- [Terms of Service](${BASE_URL}/terms): Subscription, billing, and usage terms.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
