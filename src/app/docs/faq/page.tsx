import type { Metadata } from "next";
import Link from "next/link";
import { BASE_URL } from "@/lib/seo";

const TARGET = "/faq";

// The FAQ moved from /docs/faq to /faq. Static export has no server
// redirects, so this sends old links on with a meta refresh.
export const metadata: Metadata = {
  title: "FAQ",
  robots: { index: false, follow: true },
  alternates: { canonical: `${BASE_URL}${TARGET}` },
};

export default function FaqRedirect() {
  return (
    <>
      {/* React hoists this into <head>. */}
      <meta httpEquiv="refresh" content={`0; url=${TARGET}`} />
      <p className="text-slate-600">
        The FAQ has moved.{" "}
        <Link href={TARGET} className="text-blue-600 font-semibold hover:underline">
          Go to the FAQ
        </Link>
        &hellip;
      </p>
    </>
  );
}
