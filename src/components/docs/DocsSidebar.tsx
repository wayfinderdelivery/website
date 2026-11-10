"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DocIcon from "@/components/DocIcon";
import { DOC_PAGES, docHref } from "@/lib/docs";

export default function DocsSidebar() {
  const pathname = usePathname();

  return (
    <nav aria-label="Documentation">
      <p className="px-3 mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
        Guides
      </p>
      <ul className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible -mx-1 px-1 pb-1 lg:pb-0">
        {DOC_PAGES.map((doc) => {
          const href = docHref(doc.slug);
          const active = pathname === href;
          return (
            <li key={doc.slug} className="shrink-0">
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span className={active ? "text-blue-600" : "text-slate-400"}>
                  <DocIcon icon={doc.icon} size={16} />
                </span>
                {doc.title}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="hidden lg:block mt-8 mx-3 p-4 rounded-xl bg-blue-50 border border-blue-100">
        <p className="text-sm font-semibold text-slate-900">Need a hand?</p>
        <p className="mt-1 text-xs text-slate-500 leading-relaxed">
          Can&rsquo;t find what you&rsquo;re looking for? We usually reply
          within a business day.
        </p>
        <Link
          href="/contact"
          className="mt-3 inline-flex text-xs font-semibold text-blue-600 hover:text-blue-700"
        >
          Contact support &rarr;
        </Link>
      </div>
    </nav>
  );
}
