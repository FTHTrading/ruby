"use client";

import { useMemo, useState } from "react";
import { sampleBbsLenderVp } from "@/data/samples";

const DISCLOSURE_OPTIONS = [
  { id: "titleStatus", label: "Title status (in custody)" },
  { id: "valuationThresholdMet", label: "Valuation threshold met (boolean policy)" },
  { id: "legalOwner", label: "Legal owner DID" },
] as const;

export function ProofRequestDemo() {
  const [selected, setSelected] = useState<string[]>(["titleStatus", "valuationThresholdMet"]);
  const [nonce, setNonce] = useState("lender-collateral-desk-nonce-SAMPLE-2026-06-04");

  const presentation = useMemo(() => {
    const subject = sampleBbsLenderVp.verifiableCredential[0].credentialSubject as Record<
      string,
      unknown
    >;
    const disclosed: Record<string, unknown> = { type: subject.type };
    for (const key of selected) {
      if (key in subject) disclosed[key] = subject[key];
    }
    return {
      ...sampleBbsLenderVp,
      proof: {
        ...sampleBbsLenderVp.proof,
        challenge: nonce,
        disclosedMessageIndexes:
          selected.length === 3 ? [8, 12, 24] : selected.length === 2 ? [8, 24] : [8],
      },
      verifiableCredential: [
        {
          ...sampleBbsLenderVp.verifiableCredential[0],
          credentialSubject: disclosed,
        },
      ],
      _demoNote:
        "Sample only — live proofs via Legacy POST /api/vc/present/bbs. No dollar NAV in disclosed claims.",
    };
  }, [selected, nonce]);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <form className="space-y-4 rounded-lg border border-troptions-gold/20 bg-troptions-slate p-6">
        <h2 className="font-display text-xl text-troptions-gold">Proof request (demo)</h2>
        <p className="text-sm text-troptions-cream/75">
          Select claims a collateral desk would request. Output is a sample BBS+ lender VP JSON —
          not sent to Legacy in v1.
        </p>
        <fieldset className="space-y-2">
          {DISCLOSURE_OPTIONS.map((opt) => (
            <label key={opt.id} className="flex cursor-pointer items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={selected.includes(opt.id)}
                onChange={(e) => {
                  setSelected((prev) =>
                    e.target.checked ? [...prev, opt.id] : prev.filter((x) => x !== opt.id)
                  );
                }}
                className="accent-troptions-gold"
              />
              <span className="text-troptions-cream/90">{opt.label}</span>
            </label>
          ))}
        </fieldset>
        <label className="block text-sm">
          <span className="text-troptions-cream/80">Challenge nonce</span>
          <input
            value={nonce}
            onChange={(e) => setNonce(e.target.value)}
            className="mt-1 w-full rounded border border-troptions-cream/20 bg-troptions-ink px-3 py-2 font-mono text-xs text-troptions-cream"
          />
        </label>
      </form>
      <pre className="max-h-[28rem] overflow-auto rounded-lg border border-troptions-gold/15 bg-troptions-ink p-4 font-mono text-xs leading-relaxed text-troptions-cream/90">
        {JSON.stringify(presentation, null, 2)}
      </pre>
    </div>
  );
}
