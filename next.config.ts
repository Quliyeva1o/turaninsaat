const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "turanprojects.az",
      },
      {
        protocol: "https",
        hostname: "www.turanprojects.az",
      },
    ],
  },

  // SEO + routing fix
  trailingSlash: false,

  async redirects() {
    return [
      {
        source: "/(.*)",
        has: [
          {
            type: "host",
            value: "turanprojects.az",
          },
        ],
        destination: "https://www.turanprojects.az/:path*",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ];
  },
};

export default nextConfig;