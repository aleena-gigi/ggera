/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // redirects: async() => {
    //     return [
    //         {
    //             source: '/',
    //             destination: 'https://gaming.ggera.com/login',
    //             permanent: false,
    //         },
    //     ]
    // },
    compiler: {
        styledComponents: true,
    },
}

module.exports = nextConfig
