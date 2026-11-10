import Link from "next/link";
import DocIcon from "@/components/DocIcon";
import { DOC_PAGES, docHref } from "@/lib/docs";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

/** Page header + body wrapper for a single doc article. */
export function DocArticle({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  const index = DOC_PAGES.findIndex((d) => d.slug === slug);
  const doc = DOC_PAGES[index];
  const prev = DOC_PAGES[index - 1];
  const next = DOC_PAGES[index + 1];

  return (
    <article className="max-w-3xl">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: doc.title, path: docHref(doc.slug) },
        ])}
      />
      <nav className="text-sm text-slate-400 mb-6" aria-label="Breadcrumb">
        <Link href="/docs/getting-started" className="hover:text-blue-600 transition-colors">
          Docs
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-600">{doc.title}</span>
      </nav>

      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
          <DocIcon icon={doc.icon} />
        </div>
        <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          {doc.title}
        </h1>
      </div>
      <p className="text-lg text-slate-500 leading-relaxed mb-10">
        {doc.description}
      </p>

      <div className="space-y-12 text-slate-700 text-[15px] leading-relaxed">
        {children}
      </div>

      <div className="mt-16 pt-8 border-t border-slate-100 grid sm:grid-cols-2 gap-4">
        {prev ? (
          <PagerLink href={docHref(prev.slug)} label="Previous" title={prev.title} />
        ) : (
          <span />
        )}
        {next && (
          <PagerLink
            href={docHref(next.slug)}
            label="Next"
            title={next.title}
            align="right"
          />
        )}
      </div>
    </article>
  );
}

function PagerLink({
  href,
  label,
  title,
  align = "left",
}: {
  href: string;
  label: string;
  title: string;
  align?: "left" | "right";
}) {
  return (
    <Link
      href={href}
      className={`group block p-5 rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-md hover:shadow-blue-50 transition-all ${
        align === "right" ? "sm:text-right" : ""
      }`}
    >
      <span className="block text-xs font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </span>
      <span className="block mt-1 font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
        {align === "left" && "← "}
        {title}
        {align === "right" && " →"}
      </span>
    </Link>
  );
}

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-4">
        <a href={`#${id}`} className="hover:text-blue-600 transition-colors">
          {title}
        </a>
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

export function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-semibold text-slate-900 pt-2">{children}</h3>
  );
}

/** Numbered step list. */
export function Steps({ children }: { children: React.ReactNode }) {
  return <ol className="space-y-5 [counter-reset:step]">{children}</ol>;
}

export function Step({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <li className="relative pl-12 [counter-increment:step] before:content-[counter(step)] before:absolute before:left-0 before:top-0 before:w-8 before:h-8 before:rounded-full before:bg-blue-600 before:text-white before:text-sm before:font-semibold before:flex before:items-center before:justify-center">
      <p className="font-semibold text-slate-900 pt-1">{title}</p>
      {children && <div className="mt-1.5 space-y-2 text-slate-600">{children}</div>}
    </li>
  );
}

export function Callout({
  type = "info",
  title,
  children,
}: {
  type?: "info" | "warning" | "tip";
  title?: string;
  children: React.ReactNode;
}) {
  const styles = {
    info: "bg-blue-50 border-blue-200 text-blue-900",
    tip: "bg-emerald-50 border-emerald-200 text-emerald-900",
    warning: "bg-amber-50 border-amber-200 text-amber-900",
  }[type];
  const defaultTitle = { info: "Note", tip: "Tip", warning: "Heads up" }[type];

  return (
    <div className={`rounded-xl border px-5 py-4 text-sm leading-relaxed ${styles}`}>
      <p className="font-semibold mb-1">{title ?? defaultTitle}</p>
      <div className="space-y-2 opacity-90">{children}</div>
    </div>
  );
}

export function List({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc pl-5 space-y-1.5 marker:text-blue-400">{children}</ul>
  );
}

export function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-800 text-[13px] font-mono">
      {children}
    </code>
  );
}

/** UI label, e.g. a button or menu item the merchant clicks. */
export function UI({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-slate-900">{children}</strong>;
}

export function Table({
  head,
  rows,
}: {
  head: string[];
  rows: React.ReactNode[][];
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full text-sm text-left">
        <thead className="bg-slate-50 text-slate-900">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-4 py-3 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 align-top text-slate-600">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ExtLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      {children}
    </a>
  );
}
