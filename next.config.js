/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'akm-img-a-in.tosshub.com/',
//         port: '',
//         pathname: '/indiatoday/images/media_bank/202307/**',
//       },
//     ],
//   },
// }

module.exports = {
  images: {
    domains: ['akm-img-a-in.tosshub.com', 'Your_domain'],
  },
};

module.exports = nextConfig
