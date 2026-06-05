"use client";

import { sampleRwaManifest } from "@/data/samples";

export function ManifestViewer() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-troptions-cream/80">
        Sample vault manifest metadata for package{" "}
        <code className="text-troptions-gold">{sampleRwaManifest.packageRef}</code>. Live manifests
        are created via Legacy <code className="text-troptions-gold">POST /api/rwa/manifest</code>.
        Appraisal status: <strong className="text-troptions-gold">TBD</strong>.
      </p>
      <pre className="overflow-auto rounded-lg border border-troptions-gold/15 bg-troptions-ink p-4 font-mono text-xs leading-relaxed text-troptions-cream/90">
        {JSON.stringify(sampleRwaManifest, null, 2)}
      </pre>
    </div>
  );
}
