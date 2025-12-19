import type { NextConfig } from "next";

const wpHost = (() => {
  try {
    const base = process.env.NEXT_PUBLIC_WORDPRESS_URL || "http://localhost";
    const url = new URL(base);
    return { hostname: url.hostname, port: url.port || undefined };
  } catch {
    return { hostname: "localhost", port: undefined };
  }
})();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "http", hostname: wpHost.hostname, port: wpHost.port, pathname: "/**" },
      { protocol: "https", hostname: wpHost.hostname, port: wpHost.port, pathname: "/**" },
    ],
  },
};

export default nextConfig;
