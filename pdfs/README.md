# PDF Generation — Troptions / Allure Ruby

Generate institutional PDFs from markdown templates with Troptions placeholder branding.

## Prerequisites

- Node.js 20+
- From repo root: `npm install md-to-pdf` (or run once via npx in the script)

## Generate

```bash
node pdfs/scripts/generate-pdfs.mjs
```

Output writes to `pdfs/output/` (gitignored). Do not commit generated PDFs or secrets.

## Templates (8)

| Template | Output filename |
|----------|-----------------|
| `templates/01-executive-one-pager.md` | `01-executive-one-pager.pdf` |
| `templates/02-offering-summary.md` | `02-offering-summary.pdf` |
| `templates/03-how-it-works.md` | `03-how-it-works.pdf` |
| `templates/04-security-credentials.md` | `04-security-credentials.pdf` |
| `templates/05-investment-journey.md` | `05-investment-journey.pdf` |
| `templates/06-architecture-overview.md` | `06-architecture-overview.pdf` |
| `templates/07-whitepaper-excerpt.md` | `07-whitepaper-excerpt.pdf` |
| `templates/08-api-integration-brief.md` | `08-api-integration-brief.pdf` |

## Logo placement

1. Replace `site/public/logo-troptions.svg` with final brand assets.
2. In `scripts/generate-pdfs.mjs`, set `stylesheet` to your Troptions CSS (gold `#c9a227`, ink `#0c0f14`).
3. Optional: add `pdfs/assets/logo.png` and reference in template front matter:

```yaml
---
pdf_options:
  displayHeaderFooter: true
  headerTemplate: '<div style="padding-left:20px"><img src="file:///.../logo.png" height="32"/></div>'
---
```

## Branding note

Current CSS is a **placeholder** — swap fonts and margins before investor distribution.
