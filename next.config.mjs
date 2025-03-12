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
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    const oneOfRule = config.module.rules.find(rule => rule.oneOf);
    
    if (oneOfRule) {
      const cssRules = oneOfRule.oneOf.filter(rule => 
        rule.test && rule.test.toString().includes('css')
      );
      
      cssRules.forEach(rule => {
        if (rule.sideEffects === false) {
          rule.sideEffects = true; // Enable side effects for CSS
        }
      });
    }
    
    return config;
  },
  
  // Configure page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  // Optimize image loading
  images: {
    domains: ['publication-portal-be.onrender.com'],
  },
  
  // Add experimental features if needed
  experimental: {
    // Enable app directory if you're using it
    // Ensure CSS is properly loaded during navigation
    optimizeCss: false,
    // Force all CSS to be included in the main chunk
  }
};

export default nextConfig;
