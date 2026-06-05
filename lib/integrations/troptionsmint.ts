/**
 * troptionsmint metadata schema types and console API stubs.
 * @see docs/tokenization/METADATA_SCHEMA_RWA.json
 */

export type TroptionsMintEnv = {
  consoleBaseUrl: string;
  cluster?: "devnet" | "mainnet-beta";
};

export function getTroptionsMintConfig(): TroptionsMintEnv {
  return {
    consoleBaseUrl:
      process.env.TROPTIONSMINT_BASE_URL ?? "https://troptionsmint.com",
    cluster: (process.env.SOLANA_CLUSTER as TroptionsMintEnv["cluster"]) ?? "devnet",
  };
}

export type RwaTokenMetadata = {
  name: string;
  symbol: string;
  description: string;
  image?: string;
  external_url?: string;
  attributes: Array<{ trait_type: string; value: string | number | boolean | null }>;
  properties: {
    category: "RWA";
    files?: Array<{ uri: string; type: string }>;
    legacyVault?: {
      manifestCID?: string;
      provenanceUri?: string;
      packageRef: string;
    };
    token2022?: {
      transferHook?: boolean;
      permanentDelegate?: boolean;
      mintAuthorityRevoked?: boolean;
    };
  };
};

export type MintPrepareRequest = {
  packageRef: string;
  provenanceUri: string;
  metadata: RwaTokenMetadata;
  accreditedOnly?: boolean;
};

export type MintPrepareResponse = {
  draftMintId: string;
  metadataUri: string;
  status: "draft" | "ready" | "submitted";
};

/**
 * Stub: institutional mint console prepare step.
 * Production: troptionsmint session + wallet signing.
 */
export async function prepareTokenMint(
  body: MintPrepareRequest
): Promise<{ ok: true; data: MintPrepareResponse } | { ok: false; error: string }> {
  const { consoleBaseUrl } = getTroptionsMintConfig();
  try {
    const res = await fetch(`${consoleBaseUrl}/api/rwa/prepare-mint`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      return {
        ok: false,
        error: `troptionsmint prepare failed (${res.status}). Console may be stub-only in v1.`,
      };
    }
    return { ok: true, data: (await res.json()) as MintPrepareResponse };
  } catch (e) {
    const message = e instanceof Error ? e.message : "troptionsmint unreachable";
    return { ok: false, error: message };
  }
}

/** Validate metadata shape locally (no network) */
export function validateRwaMetadata(meta: RwaTokenMetadata): string[] {
  const errors: string[] = [];
  if (!meta.name?.trim()) errors.push("name required");
  if (!meta.symbol?.trim()) errors.push("symbol required");
  if (!meta.properties?.legacyVault?.packageRef) {
    errors.push("properties.legacyVault.packageRef required");
  }
  const navAttr = meta.attributes?.find((a) => a.trait_type === "appraisalStatus");
  if (navAttr?.value === "completed" && meta.attributes.some((a) => a.trait_type === "navUsd")) {
    errors.push("navUsd must not be set until counsel clears disclosure");
  }
  return errors;
}
