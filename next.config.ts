import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Required for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
  // If you are deploying to a user site (username.github.io), basePath is not needed.
  // If deploying to a project site (username.github.io/repo-name), you might need basePath.
  // GitHub Actions 'configure-pages' usually handles this, but explicit setting is safer if known.
};

export default nextConfig;
