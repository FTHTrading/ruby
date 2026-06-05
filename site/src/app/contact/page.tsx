"use client";

import { FormEvent, useState } from "react";
import { PageHero } from "@/components/PageHero";

type IntakeResult = { ticketId: string; message: string } | { error: string };

export default function ContactPage() {
  const [result, setResult] = useState<IntakeResult | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    const form = new FormData(e.currentTarget);
    const body = {
      organization: String(form.get("organization")),
      email: String(form.get("email")),
      role: String(form.get("role") || "other"),
      notes: String(form.get("notes") || ""),
    };

    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) {
        setResult({ error: data.error ?? "Submission failed" });
      } else {
        setResult({ ticketId: data.ticketId, message: data.message });
      }
    } catch {
      setResult({ error: "Network error — try again or email your RM directly." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-xl space-y-10">
      <PageHero title="Contact &amp; onboarding">
        <p>
          Submit institutional interest. Requests receive a ticket ID and are logged server-side
          (optional webhook via <code className="text-troptions-gold">INTAKE_WEBHOOK_URL</code>).
          Legacy CRM wiring is phase 3.
        </p>
      </PageHero>

      {result && "ticketId" in result ? (
        <div className="rounded-lg border border-troptions-gold/30 bg-troptions-slate p-6 space-y-2">
          <p className="text-troptions-gold font-medium">{result.message}</p>
          <p className="font-mono text-sm text-troptions-cream/90">
            Ticket: <span className="text-troptions-gold">{result.ticketId}</span>
          </p>
        </div>
      ) : result && "error" in result ? (
        <p className="rounded border border-red-500/40 bg-red-950/40 p-4 text-red-200">{result.error}</p>
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
            <span className="text-troptions-cream/80">Role</span>
            <select
              name="role"
              className="mt-1 w-full rounded border border-troptions-cream/20 bg-troptions-ink px-3 py-2 text-troptions-cream"
              defaultValue="family_office"
            >
              <option value="family_office">Family office</option>
              <option value="counsel">Counsel</option>
              <option value="custody">Custody partner</option>
              <option value="lender">Lender / collateral desk</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label className="block text-sm">
            <span className="text-troptions-cream/80">Notes</span>
            <textarea
              name="notes"
              rows={3}
              className="mt-1 w-full rounded border border-troptions-cream/20 bg-troptions-ink px-3 py-2 text-troptions-cream"
              placeholder="Jurisdiction, timeline, proof requirements…"
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="rounded border border-troptions-gold bg-troptions-gold/10 px-6 py-2 font-medium text-troptions-gold hover:bg-troptions-gold/20 disabled:opacity-50"
          >
            {loading ? "Submitting…" : "Request onboarding packet"}
          </button>
        </form>
      )}
    </div>
  );
}
