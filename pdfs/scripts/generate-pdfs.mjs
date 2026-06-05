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

const TROPTIONS_CSS = join(PDFS_ROOT, "assets", "troptions.css");

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
  let cssPath = TROPTIONS_CSS;
  try {
    await readFile(cssPath);
  } catch {
    cssPath = join(OUTPUT_DIR, ".troptions-fallback.css");
    await writeFile(
      cssPath,
      "body { font-family: Georgia, serif; color: #0c0f14; } h1,h2 { color: #8a7420; }"
    );
    console.warn("Using fallback CSS — add pdfs/assets/troptions.css");
  }

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
