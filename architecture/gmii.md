# GMIIE (Market Intelligence)

**Owner:** GMIIE / xxxiii.io oracle layer

## Role

GMIIE supplies market comp snapshots and `gmiiOracleRef` fields on RWA manifests and credentials. It supports narrative and risk monitoring — **not** binding appraisal or NAV for securities disclosure.

## Integration

| Field | Usage |
|-------|--------|
| `gmiiOracleRef` | Pointer to comp snapshot used at manifest time |
| Comp updates | May trigger policy review for credential re-issue |

## Disclosure

Public materials must state that oracle comps are indicative. Independent appraisal governs economic claims in investor communications.

## Reference

[INTEGRATION_MAP.md — GMIIE](https://github.com/FTHTrading/Legacy/blob/main/docs/ruby-rwa/INTEGRATION_MAP.md)
