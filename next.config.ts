import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  productionBrowserSourceMaps: false,
  transpilePackages: ["next-image-export-optimizer"],
  experimental: {
    inlineCss: true,
  },
  images: {
    loader: "custom",
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  env: {
    nextImageExportOptimizer_imageFolderPath: "public",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "75",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
    nextImageExportOptimizer_generateAndUseBlurImages: "false",
    nextImageExportOptimizer_saveImageAndAssetPathsWithTrailingSlash: "false",
  },
  turbopack: {},
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "../build/polyfills/polyfill-module": path.resolve(
        __dirname,
        "src/lib/empty-polyfill.js"
      ),
      "next/dist/build/polyfills/polyfill-module": path.resolve(
        __dirname,
        "src/lib/empty-polyfill.js"
      ),
    };
    return config;
  },
};

export default nextConfig;
