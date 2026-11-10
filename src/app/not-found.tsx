import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocIcon from "@/components/DocIcon";
import { DOC_PAGES, docHref } from "@/lib/docs";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="relative pt-16 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-blue-50/40 to-white" />
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />

        <div className="relative max-w-3xl mx-auto px-6 py-20 text-center w-full">
          {/* Dropped pin */}
          <div className="mx-auto mb-8 w-20 h-20 rounded-2xl bg-white border border-blue-100 shadow-lg shadow-blue-100 flex items-center justify-center text-blue-600 animate-float">
            <svg width="36" height="36" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            404
          </p>
          <h1 className="mt-2 text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            This location is outside our delivery zone
          </h1>
          <p className="mt-4 text-lg text-slate-500">
            We couldn&rsquo;t find the page you were looking for. It may have
            moved, or the link might be wrong.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-all duration-200 hover:shadow-lg hover:shadow-blue-200 active:scale-95"
            >
              Back to homepage
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white border border-blue-200 text-slate-700 font-semibold text-sm hover:border-blue-400 hover:text-blue-600 transition-all duration-200"
            >
              Contact support
            </Link>
          </div>

          <div className="mt-14 text-left">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-3 text-center">
              Or jump into the docs
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {DOC_PAGES.map((doc) => (
                <Link
                  key={doc.slug}
                  href={docHref(doc.slug)}
                  className="group flex items-center gap-3 p-4 rounded-xl bg-white border border-blue-100 hover:border-blue-300 hover:shadow-md hover:shadow-blue-50 transition-all"
                >
                  <span className="w-9 h-9 shrink-0 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                    <DocIcon icon={doc.icon} size={18} />
                  </span>
                  <span className="font-semibold text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
                    {doc.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
