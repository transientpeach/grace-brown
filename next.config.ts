import type { NextConfig } from "next";
import createMDX from "@next/mdx";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/graces-site-next" : "",
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    turbo: {
      rules: {
        "*.mdx": {
          loaders: ["@mdx-js/loader"],
          as: "*.js",
        },
      },
    },
  },
} as NextConfig;

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

// Wrap your config with MDX
export default withMDX(nextConfig);
