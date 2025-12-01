/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", 
        destination: `${process.env.API_BASE}/:path*`, // backend - proxy
      },
    ];
  },


  /** Add the image hostnames/links below. */
  images: {
    remotePatterns: [
//      { protocol: "https", hostname: "i.pravatar.cc" },
//      { protocol: "https", hostname: "images.unsplash.com" },
//      { protocol: "https", hostname: "github.com" }, 
    ],
  },
};

export default nextConfig