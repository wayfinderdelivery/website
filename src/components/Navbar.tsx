"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SHOPIFY_URL } from "@/lib/docs";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Docs", href: "/#docs" },
  { label: "FAQ", href: "/docs/faq" },
  { label: "Contact", href: "/contact" },
];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    !href.startsWith("/#") && pathname.startsWith(href);

  // On the homepage, handle "/#section" links ourselves. Letting Next's
  // router and the browser both handle the same click appended a second
  // "#features". Jumps are instant (no smooth scroll animation).
  // From other pages, Link navigates to the homepage as usual.
  const handleSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setMenuOpen(false);
    if (pathname !== "/" || !href.startsWith("/#")) return;
    const target = document.getElementById(href.slice(2));
    if (!target) return;
    e.preventDefault();
    if (window.location.hash !== href.slice(1)) {
      window.history.pushState(null, "", href);
    }
    target.scrollIntoView({ behavior: "instant", block: "start" });
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-blue-100 shadow-sm shadow-blue-50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          onClick={(e) => {
            // Already on the homepage: Next treats "/#docs" → "/" as a
            // hash-only change and leaves the hash in the URL, so clear it
            // ourselves and scroll back to the top.
            if (pathname !== "/") return;
            e.preventDefault();
            setMenuOpen(false);
            if (window.location.hash) window.history.pushState(null, "", "/");
            window.scrollTo({ top: 0, behavior: "instant" });
          }}
        >
          <Image
            src="/logo.png"
            alt="Wayfinder logo"
            width={36}
            height={36}
            className="rounded-xl shadow-md shadow-blue-200"
            unoptimized
          />
          <span className="font-bold text-xl text-slate-900 tracking-tight">
            Wayfinder
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(e) => handleSectionClick(e, link.href)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`text-sm font-medium hover:text-blue-600 transition-colors duration-200 ${
                isActive(link.href) ? "text-blue-600" : "text-slate-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={SHOPIFY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-all duration-200 hover:shadow-lg hover:shadow-blue-200 active:scale-95"
        >
          Install Free
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-blue-50 transition-colors duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-blue-100 px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors py-1"
              onClick={(e) => handleSectionClick(e, link.href)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SHOPIFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold text-center hover:bg-blue-700 transition-colors"
          >
            Install Free
          </a>
        </div>
      )}
    </header>
  );
}
