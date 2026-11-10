import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { CONTACT_EMAIL } from "@/lib/docs";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Get help with Wayfinder: setup questions, delivery zones, shipping rates, billing, or feature requests.",
  path: "/contact",
  ogSlug: "contact",
});

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="relative pt-16 min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-blue-50/40 to-white" />
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none [mask-image:linear-gradient(to_bottom,black,transparent_60%)]" />

        <div className="relative max-w-6xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs font-semibold mb-5 tracking-wide uppercase">
              Contact
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Get in touch
            </h1>
            <p className="mt-4 text-lg text-slate-500 leading-relaxed">
              Questions about setup, delivery zones, or billing? Send us a
              message and we&rsquo;ll get back to you, usually within one
              business day.
            </p>

            <div className="mt-10 space-y-4">
              <InfoCard title="Email us directly">
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 hover:underline">
                  {CONTACT_EMAIL}
                </a>
              </InfoCard>
              <InfoCard title="Browse the docs">
                Quick answers in{" "}
                <Link href="/docs/getting-started" className="text-blue-600 hover:underline">
                  Getting Started
                </Link>
                ,{" "}
                <Link href="/docs/delivery-zones" className="text-blue-600 hover:underline">
                  Delivery Zones
                </Link>{" "}
                and{" "}
                <Link href="/docs/shipping-rates" className="text-blue-600 hover:underline">
                  Shipping Rates
                </Link>
                .
              </InfoCard>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-blue-100 shadow-xl shadow-blue-100/50 p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-5 rounded-xl bg-white/70 backdrop-blur border border-blue-100">
      <p className="text-sm font-semibold text-slate-900">{title}</p>
      <p className="mt-1 text-sm text-slate-500">{children}</p>
    </div>
  );
}
