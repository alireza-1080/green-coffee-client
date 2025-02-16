/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://green-coffee-server.vercel.app/:path*',
            },
        ];
    },
};

export default nextConfig;
