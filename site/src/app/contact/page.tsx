"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="max-w-xl space-y-8">
      <h1 className="font-display text-4xl text-troptions-cream">Contact &amp; onboarding</h1>
      <p className="text-troptions-cream/85 leading-relaxed">
        Submit interest for institutional onboarding. This form is a stub — submissions are not yet
        wired to CRM or Legacy intake APIs (phase 2).
      </p>
      {submitted ? (
        <p className="rounded border border-troptions-gold/30 bg-troptions-slate p-4 text-troptions-gold">
          Thank you. A relationship manager will follow up after intake APIs are connected.
        </p>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4">
          <label className="block text-sm">
            <span className="text-troptions-cream/80">Organization</span>
            <input
              required
              name="organization"
              className="mt-1 w-full rounded border border-troptions-cream/20 bg-troptions-ink px-3 py-2 text-troptions-cream"
            />
          </label>
          <label className="block text-sm">
            <span className="text-troptions-cream/80">Email</span>
            <input
              required
              type="email"
              name="email"
              className="mt-1 w-full rounded border border-troptions-cream/20 bg-troptions-ink px-3 py-2 text-troptions-cream"
            />
          </label>
          <label className="block text-sm">
            <span className="text-troptions-cream/80">Jurisdiction / role</span>
            <textarea
              name="notes"
              rows={3}
              className="mt-1 w-full rounded border border-troptions-cream/20 bg-troptions-ink px-3 py-2 text-troptions-cream"
              placeholder="Family office, counsel, custody partner…"
            />
          </label>
          <button
            type="submit"
            className="rounded border border-troptions-gold bg-troptions-gold/10 px-6 py-2 font-medium text-troptions-gold hover:bg-troptions-gold/20"
          >
            Request onboarding packet
          </button>
        </form>
      )}
    </div>
  );
}
