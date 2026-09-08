import type { NextConfig } from "next";

// Static export so this can be hosted on GitHub Pages / Cloudflare Pages with no server.
// GITHUB_PAGES is set by the deploy workflow only — Cloudflare Pages serves from the
// domain root, so it doesn't need the repo-name basePath.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "or-initiative-prototype";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
};

export default nextConfig;
