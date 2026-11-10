"use client";

import { useState } from "react";
import { CONTACT_EMAIL } from "@/lib/docs";

/**
 * The site is a static export (no server), so messages are sent through
 * Static Forms (https://www.staticforms.dev), which emails them to us.
 *
 * Set NEXT_PUBLIC_STATICFORMS_API_KEY at build time (see deploy.yml). The key
 * is visible in the page source like any static-site form key; it can only
 * submit to our form. Spam is handled by the honeypot field below plus
 * Static Forms' built-in filtering. If spam becomes a problem: add reCAPTCHA
 * v2 (free plan) or Domain Restriction (paid plans).
 *
 * Without a key (e.g. local dev), the form falls back to opening the
 * visitor's mail client with the message pre-filled.
 */
const STATICFORMS_API_KEY = process.env.NEXT_PUBLIC_STATICFORMS_API_KEY;
const STATICFORMS_ENDPOINT = "https://api.staticforms.dev/submit";

const TOPICS = [
  "Setup help",
  "Delivery zones",
  "Shipping rates",
  "Billing",
  "Feature request",
  "Other",
];

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: bots fill hidden fields, humans don't. Static Forms also
    // rejects any submission where a field named "*honeypot*" has a value.
    if (data.get("honeypot")) return;

    const topic = String(data.get("topic") ?? "");
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const store = String(data.get("store") ?? "");
    const message = String(data.get("message") ?? "");

    if (!STATICFORMS_API_KEY) {
      const subject = `[Wayfinder] ${topic}`;
      const body = `${message}\n\n---\nName: ${name}\nEmail: ${email}\nStore: ${store || "-"}`;
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(STATICFORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          apiKey: STATICFORMS_API_KEY,
          subject: `[Wayfinder] ${topic}`,
          name,
          email,
          replyTo: email,
          topic,
          store: store || "-",
          message,
          honeypot: "",
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <div className="mx-auto w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mb-4">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-slate-900">Message sent</h2>
        <p className="mt-2 text-sm text-slate-600">
          Thanks for reaching out. We&rsquo;ll reply to your email soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Name" htmlFor="name">
          <input id="name" name="name" required autoComplete="name" className={inputClass} placeholder="Jane Smith" />
        </Field>
        <Field label="Email" htmlFor="email">
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder="jane@yourstore.com" />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Store URL" htmlFor="store" optional>
          <input id="store" name="store" className={inputClass} placeholder="yourstore.myshopify.com" />
        </Field>
        <Field label="Topic" htmlFor="topic">
          <select id="topic" name="topic" className={inputClass} defaultValue={TOPICS[0]}>
            {TOPICS.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Message" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={`${inputClass} resize-y`}
          placeholder="How can we help?"
        />
      </Field>

      {/* Honeypot */}
      <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          Something went wrong sending your message. Please email us directly at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline">{CONTACT_EMAIL}</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-all duration-200 hover:shadow-lg hover:shadow-blue-200 active:scale-95 disabled:opacity-60 disabled:pointer-events-none"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-slate-700 mb-1.5">
        {label}
        {optional && <span className="ml-1 font-normal text-slate-400">(optional)</span>}
      </label>
      {children}
    </div>
  );
}
