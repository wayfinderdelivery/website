import type { Metadata } from "next";
import Link from "next/link";
import { BASE_URL } from "@/lib/seo";

const TARGET = "/docs/getting-started";

// The site is a static export, so there are no server redirects. This page
// sends anyone who visits /docs straight to Getting Started with a
// meta refresh, and shows a link in case that's blocked.
export const metadata: Metadata = {
  title: "Documentation",
  robots: { index: false, follow: true },
  alternates: { canonical: `${BASE_URL}${TARGET}` },
};

export default function DocsRedirect() {
  return (
    <>
      {/* React hoists this into <head>. */}
      <meta httpEquiv="refresh" content={`0; url=${TARGET}`} />
      <p className="text-slate-600">
        Redirecting to{" "}
        <Link href={TARGET} className="text-blue-600 font-semibold hover:underline">
          Getting Started
        </Link>
        &hellip;
      </p>
    </>
  );
}
