import type { NextConfig } from "next";

const isDevelopment = process.env.NODE_ENV === "development";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "frame-src 'none'",
  "worker-src 'none'",
  "manifest-src 'self'",
  "img-src 'self' data:",
  "font-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ""}`,
  "script-src-attr 'none'",
  `connect-src 'self'${isDevelopment ? " ws: wss:" : ""}`,
].join("; ");

const securityHeaders = [
  ...(!isDevelopment
    ? [
        {
          key: "Strict-Transport-Security",
          value: "max-age=31536000",
        },
      ]
    : []),
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy,
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920, 2048, 3840],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
