/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [320, 420, 640, 768, 1024, 1280, 1440],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Legacy / dead paths -> their live destinations
  async redirects() {
    const appUrl = 'https://app.cred2tech.com'
    const blogSlug = 'empowering-the-engine-of-india-vital-role-of-sourcing-partners'
    return [
      // This site has no login page; auth lives on the app subdomain
      { source: '/login', destination: `${appUrl}/login`, permanent: false },
      { source: '/msme/login', destination: `${appUrl}/msme/login`, permanent: false },
      { source: '/register', destination: `${appUrl}/register`, permanent: false },
      // Old blog slugs (original "dsas" slug and the space-containing one)
      { source: '/blogs/empowering-the-engine-of-india-vital-role-of-dsas', destination: `/blogs/${blogSlug}`, permanent: true },
      { source: '/blogs/empowering-the-engine-of-india-vital-role-of-Sourcing%20Partners', destination: `/blogs/${blogSlug}`, permanent: true },
    ]
  },

  // Enable compression for better performance
  compress: true,
  
  // Optimize build output
  swcMinify: true,
  
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react'],
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
}

module.exports = nextConfig
