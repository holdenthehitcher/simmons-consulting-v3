/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    // async redirects() {
    //     return [
    //         {
    //             source: "/about",
    //             destination: "/",
    //             permanent: false,
    //         },
    //     ];
    // },
};

export default nextConfig;
