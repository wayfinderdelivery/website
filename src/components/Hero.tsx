import Image from "next/image";
import { TRIAL_LABEL } from "@/lib/pricing";

const SHOPIFY_URL = "https://apps.shopify.com/customer-gps-coordinates";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-blue-50/60 to-white" />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />

      {/* Decorative glow orbs */}
      <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-blue-300/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-400/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - headline + CTAs */}
          <div>
            <div className="animate-fade-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs font-semibold mb-6 tracking-wide uppercase">
              <svg
                width="12"
                height="12"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              GPS-Powered Local Delivery for Shopify
            </div>

            <h1 className="animate-fade-up-delay text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-6">
              Pinpoint Local{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
                Delivery.
              </span>
              <br />
              Powered by GPS.
            </h1>

            <p className="animate-fade-up-delay-2 text-lg text-slate-500 leading-relaxed mb-8 max-w-xl">
              Add an interactive map to your Shopify store, define delivery
              zones, and capture precise customer locations - all in one app.
            </p>

            <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row gap-3">
              <a
                href={SHOPIFY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-base hover:bg-blue-700 transition-all duration-200 hover:shadow-xl hover:shadow-blue-200 active:scale-95"
              >
                Start Free Trial
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              <a
                href="#video"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white border border-blue-200 text-slate-700 font-semibold text-base hover:border-blue-400 hover:text-blue-600 transition-all duration-200 hover:shadow-md active:scale-95"
              >
                <svg
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Watch Demo
              </a>
            </div>

            <p className="animate-fade-up-delay-2 mt-5 text-xs text-slate-400 flex items-center gap-1.5">
              <svg
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 20 20"
                className="text-emerald-400 flex-shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {TRIAL_LABEL} &middot; No credit card required to start
            </p>
          </div>

          {/* Right - floating screenshot */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Glow behind card */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[90%] h-[60%] bg-blue-300/20 blur-3xl rounded-full" />
            </div>

            <div className="relative animate-float max-w-[580px] w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-200/60 ring-1 ring-blue-100">
                <Image
                  src="/screenshots/screenshot1.webp"
                  alt="Wayfinder delivery zone map in Shopify admin"
                  width={1456}
                  height={816}
                  className="w-full h-auto"
                  unoptimized
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
