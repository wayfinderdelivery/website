import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for the Wayfinder Shopify app.",
  path: "/privacy",
  ogSlug: "privacy",
});

const LAST_UPDATED = "May 31, 2026";
const CONTACT_EMAIL = "ryan@deploypulse.io";

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
            merchants capture precise customer delivery locations using an interactive map. This policy
            explains what data we collect, why we collect it, and how we use it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">What we collect</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Merchant data</h3>
              <p>
                When a merchant installs Wayfinder, we store the information needed to operate the app:
                delivery zone configurations, per-zone shipping rates, pickup store locations, and app
                settings such as map preferences and API keys. This data belongs to the merchant and is
                used solely to power the app&rsquo;s functionality.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Customer location data</h3>
              <p>
                When a customer uses the map widget on a merchant&rsquo;s storefront, they select or
                search for a delivery location. The address text they enter is sent to a geocoding
                service (Google Maps) to resolve it to GPS coordinates. <strong>We do not store
                customer names, email addresses, phone numbers, or any personally identifiable
                information.</strong> The resulting coordinates are saved as Shopify order attributes
                within Shopify&rsquo;s own infrastructure — not in our database.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Checkout autofill</h3>
              <p>
                When the Wayfinder checkout extension is enabled, geocoded address components (street,
                city, state, zip, country) may be used to autofill the customer&rsquo;s Shopify checkout
                shipping address fields. This data is passed directly to Shopify&rsquo;s checkout API
                and is never stored or logged by Wayfinder.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">How we use data</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>To determine whether a customer&rsquo;s location falls within a merchant&rsquo;s delivery zone</li>
            <li>To calculate and return the appropriate shipping rate for that zone</li>
            <li>To display delivery zone boundaries on the merchant&rsquo;s map widget</li>
            <li>To autofill shipping address fields in Shopify checkout (when the checkout extension is enabled)</li>
            <li>To associate a precise GPS coordinate with a Shopify order for merchant fulfillment purposes</li>
          </ul>
          <p className="mt-4">
            We do not sell, rent, or share customer data with third parties beyond what is necessary
            to provide the above functionality.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Third-party services</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Google Maps / Geocoding API</strong> — used to convert address text to GPS
              coordinates. Address queries are sent to Google&rsquo;s servers in accordance with
              Google&rsquo;s{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Privacy Policy
              </a>
              .
            </li>
            <li>
              <strong>Shopify</strong> — order attributes and checkout data are stored and managed
              within Shopify&rsquo;s infrastructure under Shopify&rsquo;s{" "}
              <a
                href="https://www.shopify.com/legal/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Privacy Policy
              </a>
              .
            </li>
            <li>
              <strong>Heroku</strong> — our app backend is hosted on Heroku. Merchant configuration
              data is stored in a Heroku-managed Postgres database with encryption at rest and in
              transit.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Data retention</h2>
          <p>
            Merchant data (zones, settings, rates) is retained for as long as the app is installed.
            Upon uninstallation, merchant data is deleted within 48 hours. Customer location data
            is not retained by Wayfinder — it exists only within Shopify&rsquo;s order records as
            controlled by the merchant.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Security</h2>
          <p>
            All data is encrypted in transit via HTTPS. Merchant data stored in our database is
            encrypted at rest. We limit internal access to merchant data to what is necessary
            to operate and support the app.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Merchants&rsquo; responsibilities</h2>
          <p>
            Merchants are responsible for informing their customers about the collection of location
            data through their own privacy policies and for ensuring their use of Wayfinder complies
            with applicable privacy laws in their jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the top of
            this page reflects the most recent revision. Continued use of the app after changes
            constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Contact</h2>
          <p>
            Questions about this privacy policy or how we handle data can be directed to:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-blue-600 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
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
