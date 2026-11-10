import Link from "next/link";
import DocIcon from "@/components/DocIcon";
import { DOC_PAGES, docHref } from "@/lib/docs";

// Same guides as the docs sidebar (FAQ is linked from the docs pages instead).
const docs = DOC_PAGES.filter((doc) => doc.slug !== "faq");

export default function Docs() {
  return (
    <section id="docs" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold mb-5 tracking-wide uppercase">
            Documentation
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Documentation
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Everything you need to get up and running fast.
          </p>
        </div>

        {/* Doc cards */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {docs.map((doc) => (
            <Link
              key={doc.slug}
              href={docHref(doc.slug)}
              className="group w-full md:w-[calc((100%-3rem)/3)] lg:w-[calc((100%-4rem)/3)] flex flex-col p-8 rounded-2xl bg-white border border-blue-100 shadow-sm hover:shadow-lg hover:shadow-blue-50 hover:border-blue-300 hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                <DocIcon icon={doc.icon} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                {doc.title}
              </h3>

              <p className="text-slate-500 leading-relaxed text-sm flex-1">
                {doc.description}
              </p>

              <div className="mt-6 flex items-center gap-1.5 text-blue-600 text-sm font-semibold">
                Read
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
