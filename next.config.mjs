// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/reset/:token",
        destination: "https://publication-portal-be.onrender.com/api/reset/:token", // Proxy to Backend
      },
      {
        source: "/api/login",
        destination: "https://publication-portal-be.onrender.com/api/login", // Proxy to Backend
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/api/reset/:token",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: "http://localhost:3000",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Content-Type, Accept, Authorization",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
