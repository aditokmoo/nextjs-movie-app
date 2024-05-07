/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/tv-shows',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
