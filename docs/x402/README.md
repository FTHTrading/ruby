# x402 — Metered access for RWA workflows

HTTP **402 Payment Required** gates premium Legacy exports and agent-callable services. Ruby documents the contract; Legacy implements settlement.

| Document | Description |
|----------|-------------|
| [X402_INTEGRATION_SPECIFICATION.md](./X402_INTEGRATION_SPECIFICATION.md) | Full spec (amounts, headers, failure modes) |
| [../architecture/x402.md](../architecture/x402.md) | Stack placement vs Vault and Agent Mailor |
| [Legacy X402_INTEGRATION.md](https://github.com/FTHTrading/Legacy/blob/main/docs/X402_INTEGRATION.md) | Production integration map |

## Example services (indicative)

| Service | Example amount |
|---------|----------------|
| Compliance report export | 1.00 USDF |
| Audit log export | 0.25 USDF |

Appraisal and NAV fields remain **TBD** in all gated exports until counsel clears disclosure.
