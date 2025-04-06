import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // ppr: 'incremental'
    ppr: true,
  }
};

export default nextConfig;
