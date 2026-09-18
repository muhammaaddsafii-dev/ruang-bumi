/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Static Export
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  optimizeFonts: false,
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/services-and-products/gis-and-mapping',
        destination: '/services-and-products/mapping',
        permanent: true,
      },
      {
        source: '/services-and-products/training',
        destination: '/services-and-products',
        permanent: true,
      },
      {
        source: '/services-and-products/agriculture',
        destination: '/services-and-products/gis-apps-geoai',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;