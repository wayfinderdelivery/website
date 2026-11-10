import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { SUPPORT_EMAIL } from "@/lib/docs";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for the Wayfinder Shopify app and the wayfinder.delivery website.",
  path: "/privacy",
  ogSlug: "privacy",
});

const LAST_UPDATED = "November 9, 2026";

function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      {children}
    </a>
  );
}

const PROVIDERS: { name: string; purpose: string; data: string; policy: string }[] = [
  {
    name: "Shopify",
    purpose: "App platform, checkout, and order storage.",
    data: "Order attributes (delivery coordinates, address, pickup store, requested date) are stored on the merchant's Shopify orders.",
    policy: "https://www.shopify.com/legal/privacy",
  },
  {
    name: "Stadia Maps",
    purpose: "Map tiles and address search for the default Wayfinder Map.",
    data: "Address search text and the visitor's IP address (as with any map tile request).",
    policy: "https://stadiamaps.com/privacy-policy/",
  },
  {
    name: "Google Maps Platform",
    purpose: "Map display, address search, and geocoding — only for merchants who choose Google Maps or use the checkout location picker.",
    data: "Address search text, selected coordinates, and the visitor's IP address.",
    policy: "https://policies.google.com/privacy",
  },
  {
    name: "OpenStreetMap Nominatim",
    purpose: "Converting coordinates into a postal code or address to match postal-code delivery zones and fill in checkout addresses; locating merchant-entered postal codes.",
    data: "Latitude/longitude or address/postal-code text. No names or contact details.",
    policy: "https://osmfoundation.org/wiki/Privacy_Policy",
  },
  {
    name: "U.S. Census Bureau, Australian Bureau of Statistics, Statistics Canada",
    purpose: "Postal code boundary outlines for delivery zones.",
    data: "Only the postal codes a merchant enters when creating a zone. No customer data.",
    policy: "",
  },
  {
    name: "Heroku (Salesforce)",
    purpose: "Hosting for the Wayfinder app backend and its PostgreSQL database.",
    data: "Merchant configuration data (see “Merchant data” above).",
    policy: "https://www.salesforce.com/company/privacy/",
  },
  {
    name: "Fly.io",
    purpose: "Network proxy that gives the app a fixed outbound IP address for requests to Shopify's API.",
    data: "Encrypted (HTTPS) API traffic passes through; nothing is stored.",
    policy: "https://fly.io/legal/privacy-policy/",
  },
  {
    name: "tawk.to",
    purpose: "Live support chat inside the Wayfinder admin.",
    data: "Messages and contact details a merchant chooses to send in the chat.",
    policy: "https://www.tawk.to/privacy-policy/",
  },
  {
    name: "Static Forms",
    purpose: "Delivers messages sent through the contact form on wayfinder.delivery.",
    data: "The name, email, store URL, and message you submit.",
    policy: "https://www.staticforms.dev/privacy-policy",
  },
  {
    name: "GitHub Pages",
    purpose: "Hosting for the wayfinder.delivery website.",
    data: "Standard web server logs, including visitor IP addresses.",
    policy: "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="text-slate-400 text-sm hover:text-white transition-colors mb-6 inline-block"
          >
            ← Back to Wayfinder
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-slate-400 mt-2 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-14 text-slate-700 text-[15px] leading-relaxed space-y-10">

        <section>
          <p>
            Wayfinder (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is a Shopify app that helps
            merchants offer local delivery and in-store pickup, and capture precise customer delivery
            locations using an interactive map. This policy explains what data the app and the
            wayfinder.delivery website collect, why, and who we share it with.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">What we collect</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Merchant data</h3>
              <p>
                When a merchant installs Wayfinder, we store what&rsquo;s needed to run the app:
                the shop&rsquo;s domain and Shopify access session, delivery zones (including
                drawn boundaries and postal codes), per-zone rates and product rules, pickup
                store names, addresses and rates, and app settings such as map provider, text
                labels, and any Google Maps API key the merchant provides. This data belongs to the
                merchant and is used only to operate the app.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Customer location data</h3>
              <p>
                When a shopper uses the Wayfinder map on a merchant&rsquo;s store, they search for an
                address or drop a pin. The search text is sent to the map provider the merchant has
                chosen (Stadia Maps by default, or Google Maps) to find matching places. The
                confirmed location, address, a map link, and, if used, the chosen pickup store and
                requested delivery or pickup date are saved as attributes on the Shopify cart and
                order, within Shopify&rsquo;s systems, not in Wayfinder&rsquo;s database.
              </p>
              <p className="mt-3">
                <strong>
                  We do not store shoppers&rsquo; names, email addresses, phone numbers, or other
                  personally identifiable information.
                </strong>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Shipping rate requests</h3>
              <p>
                To show delivery rates at checkout, Shopify sends Wayfinder the cart&rsquo;s items
                and delivery address. We use it only to work out which delivery zone applies and
                return a rate. It is not saved to our database, and any operational logs remove
                names, contact details, and street addresses.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Checkout autofill</h3>
              <p>
                When autofill or the Wayfinder checkout extension is enabled, the address details of
                the confirmed location (street, city, region, postal code, country) are used to
                pre-fill the shopper&rsquo;s Shopify shipping address. This happens within
                Shopify&rsquo;s checkout and is not stored by Wayfinder.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Website visitors</h3>
              <p>
                The wayfinder.delivery website does not use cookies, analytics, or advertising
                trackers. If you send us a message through the contact form, we receive the name,
                email address, store URL, and message you provide, and use them only to reply to
                you.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">How we use data</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>To check whether a shopper&rsquo;s location is inside one of a merchant&rsquo;s delivery zones</li>
            <li>To calculate and return the right delivery or pickup rate at checkout</li>
            <li>To show delivery zones and pickup stores on the merchant&rsquo;s map</li>
            <li>To pre-fill shipping address fields at checkout, when enabled</li>
            <li>To attach a precise delivery location to a Shopify order for fulfillment</li>
            <li>To respond to support requests</li>
          </ul>
          <p className="mt-4">
            We do not sell or rent data, and we don&rsquo;t share it with third parties except the
            service providers below, as needed to provide these features.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Service providers</h2>
          <p className="mb-4">
            Wayfinder relies on the following services. Each receives only the data needed for its
            purpose.
          </p>
          <div className="space-y-4">
            {PROVIDERS.map((p) => (
              <div key={p.name} className="rounded-xl border border-slate-200 p-4">
                <p className="font-semibold text-slate-900">
                  {p.policy ? <Ext href={p.policy}>{p.name}</Ext> : p.name}
                </p>
                <p className="mt-1 text-sm">{p.purpose}</p>
                <p className="mt-1 text-sm text-slate-500">
                  <span className="font-medium text-slate-600">Data: </span>
                  {p.data}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Data retention</h2>
          <p>
            Merchant data (zones, rates, stores, settings) is kept while the app is installed. When
            a merchant uninstalls Wayfinder, their data is deleted, and in any case within 48
            hours, including in response to Shopify&rsquo;s data-deletion requests. Customer location
            data is not retained by Wayfinder; it stays in the merchant&rsquo;s Shopify order
            records, under the merchant&rsquo;s control. Contact form messages are kept only as long
            as needed to handle your request.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Security</h2>
          <p>
            All data is encrypted in transit using HTTPS. Merchant data in our database is
            encrypted at rest. Requests from Shopify are verified, and access to merchant data is
            limited to what&rsquo;s needed to operate and support the app.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Your rights</h2>
          <p>
            Depending on where you live, you may have the right to access, correct, or delete
            personal data about you. Shoppers should contact the merchant they ordered from, since
            delivery details are stored in that merchant&rsquo;s Shopify store. Merchants and
            website visitors can contact us at the address below and we&rsquo;ll respond promptly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Merchants&rsquo; responsibilities</h2>
          <p>
            Merchants are responsible for telling their customers about the collection of location
            data in their own privacy policies, and for making sure their use of Wayfinder complies
            with privacy laws where they operate.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the top
            reflects the latest revision. Continued use of the app after changes means you accept
            the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Contact</h2>
          <p>
            Questions about this policy or how we handle data can be sent to{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-blue-600 hover:underline"
            >
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
        </section>

      </div>

      {/* Footer strip */}
      <div className="border-t border-slate-100 py-8 px-6 text-center text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} Wayfinder. All rights reserved. &mdash;{" "}
        <Link href="/" className="hover:text-slate-600 transition-colors">
          wayfinder.delivery
        </Link>
      </div>
    </div>
  );
}
