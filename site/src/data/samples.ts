/** Client-side demo samples — mirrored from docs/vc-schemas/examples */

export const sampleBbsLenderVp = {
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://schema.fthtrading.com/gem/v1",
  ],
  id: "urn:uuid:00000000-0000-4000-8000-lender-vp-sample-001",
  type: ["VerifiablePresentation", "BBSSelectiveDisclosurePresentation"],
  holder: "did:web:legacy.fthtrading.com:spv:allure-holdings",
  verifiableCredential: [
    {
      id: "urn:uuid:00000000-0000-4000-8000-gem-vc-sample-001",
      type: ["VerifiableCredential", "GemAssetCredential"],
      issuer: "did:web:legacy.fthtrading.com:spv:allure",
      credentialSubject: {
        id: "did:web:legacy.fthtrading.com:asset:allure-ruby-54ct",
        type: "GemAsset",
        titleStatus: "in_custody",
        legalOwner: "did:web:legacy.fthtrading.com:spv:allure-holdings",
        valuationThresholdMet: true,
      },
    },
  ],
  proof: {
    type: "BbsBlsSignatureProof2020",
    created: "2026-06-04T12:00:00.000Z",
    challenge: "lender-collateral-desk-nonce-SAMPLE-2026-06-04",
    proofPurpose: "authentication",
    verificationMethod: "did:web:legacy.fthtrading.com:spv:allure#bbs-key-1",
    ciphersuite: "BLS12-381-SHA-256",
    disclosedMessageIndexes: [8, 12, 24],
    mock: true,
  },
} as const;

export const sampleRwaManifest = {
  packageRef: "allure-ruby-emerald-2026",
  version: "1.0.0",
  appraisalStatus: "TBD",
  appraisalNote: "Independent appraisal not yet bound — no NAV asserted",
  assets: [
    {
      assetId: "allure-ruby-54ct",
      gemType: "ruby",
      caratWeight: 54.0,
      titleStatus: "in_custody",
      certLabels: ["GIA summary", "Gübelin summary", "GRS summary"],
    },
    {
      assetId: "siam-emerald-polished",
      gemType: "emerald",
      titleStatus: "in_custody",
      certLabels: ["Lab report summary (redacted)"],
    },
  ],
  spvDid: "did:web:legacy.fthtrading.com:spv:allure-holdings",
  manifestCID: "bafybei-SAMPLE-ALLURE-PACKAGE-MANIFEST-001",
  gmiiOracleRef: "gmii://comp-snapshot/2026-06/example",
} as const;
