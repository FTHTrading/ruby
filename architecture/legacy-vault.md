# Legacy Vault

**Owner:** [FTHTrading/Legacy](https://github.com/FTHTrading/Legacy)

Legacy Vault is the sovereign estate operating system for encrypted document custody, release policies, and verifiable provenance.

## Capabilities relevant to gem RWA

- AES-256-GCM encryption before private IPFS upload
- SHA-256 manifest hashing and audit event stream
- W3C DID + VC 2.0 issuance paths for asset provenance
- Multi-proof release engine (executor, guardians, waiting periods)
- RWA manifest API: `POST /api/rwa/manifest`, `GET /api/rwa/provenance/{tokenId}`

## Ruby integration

1. Intake milestones in `/tracking` reference vault `packageRef` labels only.
2. Client portal links here for technical depth — no vault code in ruby.
3. PDF and whitepaper materials describe vault role; implementation stays in Legacy.

## References

- [LEGACY_VAULT_ARCHITECTURE.md](https://github.com/FTHTrading/Legacy/blob/main/docs/LEGACY_VAULT_ARCHITECTURE.md)
- [ruby-rwa/INTEGRATION_MAP.md](https://github.com/FTHTrading/Legacy/blob/main/docs/ruby-rwa/INTEGRATION_MAP.md)
