/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable ESLint errors during production builds
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Allow building even with TypeScript errors
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    // List real domains here (e.g. "assets.my-site.com")
    domains: ["placeholder.svg"],
    unoptimized: true, // if you don’t want Next.js image optimization
  },

  // Remove console.* calls in production
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Enable gzip/brotli compression
  compress: true,

  // Custom Webpack splitChunks for better bundle splitting
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
          framer: {
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            name: "framer-motion",
            chunks: "all",
          },
        },
      };
    }
    return config;
  },
};

module.exports = nextConfig;
