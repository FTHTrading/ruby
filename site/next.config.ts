import type { NextConfig } from "next";

import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/ruby" : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  ...(isGitHubPages ? { output: "export" as const } : {}),
};

export default nextConfig;
