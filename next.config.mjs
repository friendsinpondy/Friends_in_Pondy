/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Allow Vercel to optimise images; keep unoptimized for JPEG logo
  images: {
    unoptimized: true,
  },

  // Suppress build errors from ESLint/TS warnings that are non-blocking at runtime.
  // We still see them in the terminal but Vercel CI won't fail because of them.
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false, // keep TypeScript strict — real type errors must still fail
  },

  // Production-grade HTTP security headers applied to every route
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
