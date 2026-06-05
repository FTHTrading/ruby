#!/usr/bin/env node
/**
 * Generate institutional PDFs from markdown templates.
 * Usage: node pdfs/scripts/generate-pdfs.mjs
 */
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PDFS_ROOT = join(__dirname, "..");
const TEMPLATES_DIR = join(PDFS_ROOT, "templates");
const OUTPUT_DIR = join(PDFS_ROOT, "output");

const PLACEHOLDER_CSS = `
body {
  font-family: Georgia, "Times New Roman", serif;
  color: #0c0f14;
  line-height: 1.5;
  margin: 2cm;
}
h1, h2 { color: #8a7420; border-bottom: 1px solid #c9a227; padding-bottom: 0.25em; }
a { color: #c9a227; }
header::before {
  content: "TROPTIONS — Institutional RWA (placeholder branding)";
  display: block;
  font-size: 10pt;
  color: #8a7420;
  margin-bottom: 1em;
}
`.trim();

async function ensureMdToPdf() {
  return new Promise((resolve, reject) => {
    const child = spawn("npx", ["--yes", "md-to-pdf", "--version"], {
      shell: true,
      stdio: "inherit",
    });
    child.on("error", reject);
    child.on("close", (code) => (code === 0 ? resolve() : reject(new Error("md-to-pdf unavailable"))));
  });
}

async function generateOne(mdPath, pdfPath, cssPath) {
  return new Promise((resolve, reject) => {
    const args = [mdPath, "--dest", pdfPath, "--stylesheet", cssPath];
    const child = spawn("npx", ["--yes", "md-to-pdf", ...args], { shell: true, stdio: "inherit" });
    child.on("error", reject);
    child.on("close", (code) => (code === 0 ? resolve() : reject(new Error(`Failed: ${mdPath}`))));
  });
}

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });
  const cssPath = join(OUTPUT_DIR, ".troptions-placeholder.css");
  await writeFile(cssPath, PLACEHOLDER_CSS);

  console.log("Checking md-to-pdf…");
  await ensureMdToPdf();

  const files = (await readdir(TEMPLATES_DIR)).filter((f) => f.endsWith(".md")).sort();
  if (files.length === 0) {
    console.error("No templates in", TEMPLATES_DIR);
    process.exit(1);
  }

  for (const file of files) {
    const base = file.replace(/\.md$/, "");
    const mdPath = join(TEMPLATES_DIR, file);
    const pdfPath = join(OUTPUT_DIR, `${base}.pdf`);
    console.log(`Generating ${pdfPath}…`);
    await generateOne(mdPath, pdfPath, cssPath);
  }

  console.log(`Done. ${files.length} PDF(s) in ${OUTPUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
