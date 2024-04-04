/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'unsplash.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
