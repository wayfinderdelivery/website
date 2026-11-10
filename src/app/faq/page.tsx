import type { Metadata } from "next";
import { PLAN, PRICE_LABEL, TRIAL_LABEL } from "@/lib/pricing";
import { docMetadata } from "@/lib/seo";
import Link from "next/link";
import { DocArticle, Callout } from "@/components/docs/Prose";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = docMetadata(
  "faq",
  "Answers to common questions about Wayfinder: theme compatibility, Google Maps API keys, Shopify plan requirements, pricing, and delivery zones."
);

interface Faq {
  q: string;
  a: string;
  link?: { href: string; label: string };
}

const GROUPS: { title: string; items: Faq[] }[] = [
  {
    title: "Before you install",
    items: [
      {
        q: "Does Wayfinder work with my theme?",
        a: "Wayfinder works with any Online Store 2.0 theme, which includes Dawn and every theme currently in the Shopify Theme Store. You add the map as an app block on your cart or product page, with no code changes. Older “vintage” themes don't support app blocks. If you're on one, get in touch and we'll help.",
        link: { href: "/docs/getting-started#add-block", label: "How to add the Map block" },
      },
      {
        q: "Do I need a Google Maps API key?",
        a: "No. The default Wayfinder Map is free and needs no API key. Google Maps is optional. If you prefer it, you'll need your own Google Cloud API key with the Maps JavaScript, Places, and Geocoding APIs turned on.",
        link: { href: "/docs/getting-started#google-api-key", label: "How to set up a Google Maps API key" },
      },
      {
        q: "Which Shopify plan do I need?",
        a: "The map, delivery zones, and location capture work on any Shopify plan. To show zone-based delivery prices at checkout, your store needs Carrier Calculated Shipping. It's included on Advanced and Plus, and on other plans it can be added through Shopify. The optional checkout location picker uses checkout UI extensions, which Shopify limits to Plus stores.",
        link: { href: "/docs/shipping-rates#enable", label: "About Carrier Calculated Shipping" },
      },
      {
        q: "How much does Wayfinder cost?",
        a: `The ${PLAN.name} plan is ${PRICE_LABEL} ${PLAN.currency} per month and includes everything: unlimited customer locations, unlimited delivery zones, per-zone rates, and pickup stores. Every install starts with a ${TRIAL_LABEL}.`,
        link: { href: "/#pricing", label: "See pricing" },
      },
      {
        q: "Which countries does Wayfinder support?",
        a: "Wayfinder works anywhere: customers can drop a pin and you can draw delivery zones in any country. Postal code zones also work in any country. Detailed postal code outlines on the map are available for the United States, Canada, and Australia.",
        link: { href: "/docs/delivery-zones#methods", label: "Postal code zones" },
      },
    ],
  },
  {
    title: "Using Wayfinder",
    items: [
      {
        q: "Can I use Wayfinder without delivery zones?",
        a: "Yes. With no zones set up, every location is accepted, and Wayfinder simply captures the customer's exact delivery spot for your drivers. Add zones whenever you want to limit where you deliver or charge different prices by area.",
      },
      {
        q: "Where do I see the customer's location?",
        a: "Open the order in Shopify admin and look under Additional details. You'll find the address, latitude and longitude, and a Link to Map that opens the exact pin in Google Maps, ready for your driver.",
        link: { href: "/docs/getting-started#orders", label: "Order fields explained" },
      },
      {
        q: "Can customers choose in-store pickup instead?",
        a: "Yes. Add your store locations on the Pickup Zones & Stores page and turn on the Delivery / Pickup switcher in the Map block. Customers tap a store pin to choose it, and checkout shows that store's pickup option.",
        link: { href: "/docs/pickup-zones", label: "Set up pickup" },
      },
      {
        q: "Can I make choosing a location required?",
        a: "Yes. Turn on “Make location selection mandatory” in Map Settings, and customers must confirm a location before they can check out. You can also require a delivery or pickup date.",
      },
      {
        q: "Can I charge a different delivery price for certain products?",
        a: "Product rules let you exclude a product from a zone or make it free to deliver there, but not set a separate price per product. For different prices, create extra zones, each with its own rate.",
        link: { href: "/docs/delivery-zones#product-rules", label: "Product rules" },
      },
      {
        q: "What happens if a customer is outside my delivery area?",
        a: "The map shows your “location unavailable” message, and Wayfinder doesn't offer its delivery rates at checkout. Your other Shopify shipping methods, if you have any, still appear.",
        link: { href: "/docs/shipping-rates#outside", label: "Addresses outside your zones" },
      },
    ],
  },
  {
    title: "Data & account",
    items: [
      {
        q: "Does Wayfinder store my customers' personal data?",
        a: "No. Coordinates are saved on the Shopify order itself, not in Wayfinder's database. We never store customer names, emails, or phone numbers.",
        link: { href: "/privacy", label: "Privacy policy" },
      },
      {
        q: "What happens if I uninstall?",
        a: "The Map block disappears from your theme automatically, with no leftover code to clean up. Your zones and settings are deleted within 48 hours. Locations already saved on past orders stay in Shopify.",
      },
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GROUPS.flatMap((g) =>
    g.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    }))
  ),
};

export default function FaqPage() {
  return (
    <DocArticle slug="faq">
      {GROUPS.map((group) => (
        <section key={group.title}>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-4">
            {group.title}
          </h2>
          <div className="divide-y divide-slate-100 rounded-2xl border border-blue-100 overflow-hidden">
            {group.items.map((item) => (
              <details key={item.q} className="group bg-white open:bg-blue-50/40">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 py-4 font-semibold text-slate-900 hover:text-blue-600 transition-colors [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 -mt-1 text-slate-600 space-y-2">
                  <p>{item.a}</p>
                  {item.link && (
                    <Link
                      href={item.link.href}
                      className="inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
                    >
                      {item.link.label} &rarr;
                    </Link>
                  )}
                </div>
              </details>
            ))}
          </div>
        </section>
      ))}

      <Callout type="info" title="Didn't find your answer?">
        <p>
          <Link href="/contact" className="font-semibold underline">
            Send us a message
          </Link>{" "}
          and we&rsquo;ll get back to you.
        </p>
      </Callout>

      <JsonLd data={jsonLd} />
    </DocArticle>
  );
}
