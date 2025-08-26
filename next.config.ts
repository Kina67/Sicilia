import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Sicilia",
  assetPrefix: "/Sicilia/",
  images: { unoptimized: true },
};

export default nextConfig;
