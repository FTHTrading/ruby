/**
 * Legacy Vault API client stubs — wire to production via env (no secrets in repo).
 * @see docs/API_INTEGRATION.md
 */

export type LegacyVaultEnv = {
  baseUrl: string;
  /** Optional bearer for staging; use managed identity in production */
  apiToken?: string;
};

export function getLegacyVaultConfig(): LegacyVaultEnv {
  const baseUrl = process.env.LEGACY_VAULT_BASE_URL ?? "http://localhost:3001";
  return {
    baseUrl: baseUrl.replace(/\/$/, ""),
    apiToken: process.env.LEGACY_VAULT_API_TOKEN,
  };
}

export type RwaManifestInput = {
  packageRef: string;
  documentLabels: string[];
  appraisalStatus?: "TBD" | "in_progress" | "completed";
};

export type RwaManifestResponse = {
  manifestId: string;
  packageRef: string;
  manifestCID?: string;
  appraisalStatus: string;
  createdAt: string;
};

export type VcPresentBbsRequest = {
  credentialId: string;
  disclosedClaimIds: string[];
  challenge?: string;
  proofPurpose?: "authentication" | "assertionMethod";
};

export type VcPresentBbsResponse = {
  presentation: Record<string, unknown>;
  verified?: boolean;
};

async function legacyFetch<T>(
  path: string,
  init?: RequestInit
): Promise<{ ok: true; data: T } | { ok: false; error: string; status?: number }> {
  const { baseUrl, apiToken } = getLegacyVaultConfig();
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(apiToken ? { Authorization: `Bearer ${apiToken}` } : {}),
    ...(init?.headers ?? {}),
  };

  try {
    const res = await fetch(`${baseUrl}${path}`, { ...init, headers });
    if (!res.ok) {
      return { ok: false, error: await res.text(), status: res.status };
    }
    const data = (await res.json()) as T;
    return { ok: true, data };
  } catch (e) {
    const message = e instanceof Error ? e.message : "Legacy Vault unreachable";
    return { ok: false, error: message };
  }
}

/** POST /api/rwa/manifest — create or update RWA intake manifest */
export async function createRwaManifest(body: RwaManifestInput) {
  return legacyFetch<RwaManifestResponse>("/api/rwa/manifest", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

/** GET /api/vault/manifest — vault manifest retrieval */
export async function getVaultManifest(params?: { packageRef?: string }) {
  const q = params?.packageRef
    ? `?packageRef=${encodeURIComponent(params.packageRef)}`
    : "";
  return legacyFetch<RwaManifestResponse>(`/api/vault/manifest${q}`);
}

/** GET /api/rwa/provenance/{tokenId} */
export async function getRwaProvenance(tokenId: string) {
  return legacyFetch<{ provenanceUri: string; manifestCID?: string }>(
    `/api/rwa/provenance/${encodeURIComponent(tokenId)}`
  );
}

/** POST /api/vc/present/bbs — selective disclosure presentation */
export async function presentBbsVc(body: VcPresentBbsRequest) {
  return legacyFetch<VcPresentBbsResponse>("/api/vc/present/bbs", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

/** POST /api/vc/verify/bbs */
export async function verifyBbsPresentation(presentation: Record<string, unknown>) {
  return legacyFetch<{ verified: boolean }>("/api/vc/verify/bbs", {
    method: "POST",
    body: JSON.stringify({ presentation }),
  });
}
