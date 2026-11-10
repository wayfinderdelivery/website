import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { PLAN, PRICE_LABEL, TRIAL_LABEL } from "@/lib/pricing";
import { SHOPIFY_URL, SUPPORT_EMAIL } from "@/lib/docs";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "Terms of Service for the Wayfinder Shopify app: subscriptions, billing, acceptable use, and liability.",
  path: "/terms",
  ogSlug: "terms",
});

const LAST_UPDATED = "November 9, 2026";

const GOVERNING_LAW = "the State of Illinois, United States";
const VENUE = "the state or federal courts located in Illinois";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-semibold text-slate-900 mb-3">{children}</h2>;
}

export default function TermsPage() {
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
          <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>
          <p className="text-slate-400 mt-2 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-14 text-slate-700 text-[15px] leading-relaxed space-y-10">
        <section>
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the Wayfinder Shopify
            app (the &ldquo;App&rdquo;) and the wayfinder.delivery website, provided by Wayfinder
            (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). By installing or using the App, you
            (&ldquo;you&rdquo; or the &ldquo;Merchant&rdquo;) agree to these Terms. If you are using the
            App on behalf of a business, you confirm you have authority to bind that business.
          </p>
        </section>

        <section>
          <H2>1. The App</H2>
          <p>
            Wayfinder lets Shopify merchants add an interactive map to their storefront, define
            local delivery zones and pickup locations, calculate delivery rates, and attach
            customer-selected delivery locations to Shopify orders. Features are described in our{" "}
            <Link href="/docs/getting-started" className="text-blue-600 hover:underline">
              documentation
            </Link>{" "}
            and may change over time.
          </p>
        </section>

        <section>
          <H2>2. Eligibility and your Shopify account</H2>
          <p>
            You must have an active Shopify store and comply with{" "}
            <a
              href="https://www.shopify.com/legal/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Shopify&rsquo;s Terms of Service
            </a>{" "}
            to use the App. You are responsible for your Shopify account and for all activity in
            the App under it. Some features depend on your Shopify plan, such as rates at checkout,
            which require Shopify&rsquo;s Carrier Calculated Shipping, and the checkout location
            picker, which requires checkout extensibility.
          </p>
        </section>

        <section>
          <H2>3. Subscription, trial, and billing</H2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              The App is offered on the {PLAN.name} plan at {PRICE_LABEL} {PLAN.currency} per month,
              with a {TRIAL_LABEL} for new installs. Current pricing is shown on our website and{" "}
              <a href={SHOPIFY_URL} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Shopify App Store listing
              </a>
              .
            </li>
            <li>
              All charges are billed through Shopify, on your Shopify invoice, and are subject to
              Shopify&rsquo;s billing terms. Fees are exclusive of applicable taxes.
            </li>
            <li>
              Your subscription renews each billing cycle until you cancel. You can cancel at any
              time by uninstalling the App. Uninstalling during the trial means you won&rsquo;t be
              charged.
            </li>
            <li>
              Except where required by law or Shopify&rsquo;s policies, fees already paid are not
              refundable, including for partial billing periods. We may consider refunds case by case.
            </li>
            <li>
              We may change our prices. We&rsquo;ll give you at least 30 days&rsquo; notice, and changes
              apply from your next billing cycle after that notice.
            </li>
          </ul>
        </section>

        <section>
          <H2>4. Your responsibilities</H2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Your settings are yours to check.</strong> You are responsible for the delivery
              zones, rates, product rules, pickup locations, and other settings you configure, and
              for reviewing that your checkout shows the rates you intend.
            </li>
            <li>
              <strong>Your customers.</strong> You are responsible for your relationship with your
              customers, including delivery, pricing, refunds, and telling them how you collect and
              use location data in your own privacy policy.
            </li>
            <li>
              <strong>Laws.</strong> You must use the App in compliance with all laws that apply to
              you, including consumer protection, privacy, and data protection laws.
            </li>
            <li>
              <strong>Third-party keys and costs.</strong> If you choose to use your own Google Maps
              API key or other third-party services, you are responsible for that account, its
              usage, and any charges from that provider.
            </li>
          </ul>
        </section>

        <section>
          <H2>5. Acceptable use</H2>
          <p>You agree not to:</p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>use the App for anything unlawful, fraudulent, or harmful;</li>
            <li>attempt to access the App&rsquo;s systems, data, or other merchants&rsquo; data without authorization;</li>
            <li>interfere with or disrupt the App, including through excessive automated requests;</li>
            <li>reverse engineer, copy, resell, or create competing products from the App, except where the law allows it.</li>
          </ul>
          <p className="mt-3">We may suspend access if we reasonably believe these rules are being broken.</p>
        </section>

        <section>
          <H2>6. Location accuracy</H2>
          <p>
            Locations, addresses, postal code boundaries, and map data come from customers&rsquo;
            input and third-party providers. They may be incomplete or inaccurate. Wayfinder helps
            capture and check locations but does not guarantee their accuracy, and is not
            responsible for missed, late, or misdirected deliveries.
          </p>
        </section>

        <section>
          <H2>7. Third-party services</H2>
          <p>
            The App relies on third-party services such as Shopify, map and geocoding providers,
            and hosting providers, listed in our{" "}
            <Link href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
            . Your use of those services is subject to their terms. We are not responsible for
            their availability or for changes they make that affect the App.
          </p>
        </section>

        <section>
          <H2>8. Data and privacy</H2>
          <p>
            Our{" "}
            <Link href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>{" "}
            explains what data we collect and how we use it. Your store data remains yours. You
            grant us a limited license to process it only as needed to provide and support the App.
          </p>
        </section>

        <section>
          <H2>9. Intellectual property</H2>
          <p>
            We own the App, the website, and all related software, designs, and content. These
            Terms give you a limited, non-exclusive, non-transferable right to use the App for your
            store while your subscription is active. If you send us feedback or suggestions, we may
            use them without obligation to you.
          </p>
        </section>

        <section>
          <H2>10. Availability and changes</H2>
          <p>
            We work to keep the App available and reliable but don&rsquo;t guarantee uninterrupted or
            error-free operation. We may add, change, or remove features. If we discontinue the App
            entirely, we&rsquo;ll give reasonable notice where possible.
          </p>
        </section>

        <section>
          <H2>11. Disclaimer</H2>
          <p className="uppercase text-[13px] tracking-wide">
            To the fullest extent permitted by law, the App is provided &ldquo;as is&rdquo; and
            &ldquo;as available&rdquo;, without warranties of any kind, express or implied, including
            warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </p>
        </section>

        <section>
          <H2>12. Limitation of liability</H2>
          <p className="uppercase text-[13px] tracking-wide">
            To the fullest extent permitted by law, Wayfinder will not be liable for any indirect,
            incidental, special, consequential, or punitive damages, or for lost profits, revenue,
            data, or goodwill. Our total liability for any claim relating to the App is limited to
            the fees you paid us for the App in the 12 months before the claim arose.
          </p>
        </section>

        <section>
          <H2>13. Indemnification</H2>
          <p>
            You agree to defend and indemnify Wayfinder against claims, damages, and costs
            (including reasonable legal fees) arising from your store, your products and
            deliveries, your settings in the App, or your breach of these Terms or applicable law.
          </p>
        </section>

        <section>
          <H2>14. Termination</H2>
          <p>
            You can stop using the App at any time by uninstalling it. We may suspend or end your
            access if you materially breach these Terms or if required by Shopify or by law. When
            access ends, your App data is deleted as described in our Privacy Policy. Sections that
            by their nature should survive (such as 9, 11, 12, 13, and 16) continue to apply.
          </p>
        </section>

        <section>
          <H2>15. Changes to these Terms</H2>
          <p>
            We may update these Terms. The &ldquo;Last updated&rdquo; date shows the latest version.
            For material changes we&rsquo;ll give notice, for example in the App or by email.
            Continued use after changes take effect means you accept the updated Terms.
          </p>
        </section>

        <section>
          <H2>16. Governing law</H2>
          <p>
            These Terms are governed by the laws of {GOVERNING_LAW}, without regard to
            conflict-of-law rules. Any disputes will be handled in {VENUE}, unless the law where you
            live requires otherwise.
          </p>
        </section>

        <section>
          <H2>17. Contact</H2>
          <p>
            Questions about these Terms can be sent to{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-blue-600 hover:underline">
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
