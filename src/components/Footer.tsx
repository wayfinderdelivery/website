import Image from "next/image";

const SHOPIFY_URL = "https://apps.shopify.com/customer-gps-coordinates";

const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-10 items-center">
          {/* Left - Logo + copyright */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <Image
                src="/logo.png"
                alt="Wayfinder logo"
                width={36}
                height={36}
                className="rounded-xl"
                unoptimized
              />
              <span className="font-bold text-xl tracking-tight">
                Wayfinder
              </span>
            </div>
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Wayfinder. All rights reserved.
            </p>
            <p className="text-slate-500 text-xs mt-1">wayfinder.delivery</p>
          </div>

          {/* Center - Nav links */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 lg:justify-center">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-400 text-sm hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right - CTA */}
          <div className="lg:flex lg:justify-end">
            <a
              href={SHOPIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-500 transition-all duration-200 hover:shadow-lg hover:shadow-blue-900/50 active:scale-95"
            >
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
              Install on Shopify
            </a>
          </div>
        </div>

        {/* Bottom divider + built with */}
        <div className="mt-10 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            Built for Shopify merchants who deliver locally.
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-xs">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Shopify App Store verified
          </div>
        </div>
      </div>
    </footer>
  );
}
