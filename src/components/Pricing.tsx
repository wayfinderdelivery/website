import { PLAN, PRICE_LABEL } from "@/lib/pricing";
const SHOPIFY_URL = "https://apps.shopify.com/customer-gps-coordinates";

const planFeatures = [
  "Unlimited customer locations",
  "Current user location detection (GPS)",
  "Basic map settings and styling",
  "Unlimited delivery zones",
  "Set delivery rates per zone",
  "Boundaries for user location selection",
];

function CheckIcon() {
  return (
    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
      <svg
        width="10"
        height="10"
        fill="none"
        stroke="#2563EB"
        strokeWidth="2.5"
        viewBox="0 0 14 14"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 7l3.5 3.5L12 3" />
      </svg>
    </span>
  );
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 lg:py-32 bg-gradient-to-b from-white via-blue-50/40 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-blue-200 text-blue-600 text-xs font-semibold mb-5 tracking-wide uppercase">
            Pricing
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-md mx-auto">
            One plan with everything included. Start with a free trial - no
            credit card required.
          </p>
        </div>

        {/* Card */}
        <div className="max-w-sm mx-auto">
          <div className="relative rounded-3xl bg-white overflow-hidden ring-2 ring-blue-200 shadow-2xl shadow-blue-100">
            {/* Top gradient bar */}
            <div className="h-1.5 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600" />

            <div className="p-8 lg:p-10">
              {/* Plan name + trial badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">
                  {PLAN.name} Plan
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {PLAN.trialDays}-Day Free Trial
                </span>
              </div>

              {/* Price */}
              <div className="flex items-end gap-1 mb-1">
                <span className="text-6xl font-extrabold text-slate-900 tracking-tight leading-none">
                  {PRICE_LABEL}
                </span>
                <span className="text-slate-400 font-medium text-lg mb-1">
                  /month
                </span>
              </div>
              <p className="text-slate-400 text-sm mb-8">
                Billed monthly after your free trial ends
              </p>

              {/* Features list */}
              <ul className="space-y-3 mb-8">
                {planFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-slate-700 text-sm leading-relaxed">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={SHOPIFY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 rounded-xl bg-blue-600 text-white text-center font-bold text-base hover:bg-blue-700 transition-all duration-200 hover:shadow-xl hover:shadow-blue-200 active:scale-[0.98]"
              >
                Start Free Trial
              </a>
            </div>
          </div>

          {/* Footnote */}
          <p className="text-center text-xs text-slate-400 mt-5 px-2 leading-relaxed">
            Zone-based shipping rates require Shopify&apos;s Carrier Calculated
            Shipping API.
          </p>
        </div>
      </div>
    </section>
  );
}
