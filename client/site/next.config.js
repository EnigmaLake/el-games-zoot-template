/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require("webpack");

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Headers",
            value: "traceparent, tracestate",
          },
        ],
      },
    ];
  },
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ["storage.googleapis.com", "card.godsunchained.com"],
  },
  sentry: {
    hideSourceMaps: false,
    disableServerWebpackPlugin: true,
  },
  experimental: {
    // Fixes ES modules crash
    // https://nextjs.org/blog/next-12#es-modules-support-and-url-imports
    esmExternals: false,
  },
  webpack(config, { buildId, isServer }) {
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.BUILD_ID": JSON.stringify(buildId),
      })
    );

    if (!isServer) {
      config.resolve.fallback = { fs: false, net: false, tls: false };
    }

    // Load most SVGs inline - this seems to be the only way to get next to
    // recognize them, and this doesn't seem to work for png
    config.module.rules.push({
      test: /\.svg$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 10000,
        },
      },
    });

    return config;
  },
};

export default nextConfig;
