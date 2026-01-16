import type { NextConfig } from "next";
import createMDX from "@next/mdx";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isProd ? "/next-starter-blog" : "",
  distDir: "dist",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

// Wrap your config with MDX
export default withMDX(nextConfig);
