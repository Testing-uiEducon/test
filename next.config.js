/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode:
    process.env.NEXT_PUBLIC_NODE_ENV === "production" ? true : false,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
      },
      {
        protocol: "https",
        hostname: "aktu.ac.in",
        port: "",
      },
      {
        protocol: "https",
        hostname: "gnim.ac.in",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.collegedunia.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.igdtuw.ac.in",
        port: "",
      },
      {
        protocol: "https",
        hostname: "img.collegedekhocdn.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "it.mait.ac.in",
        port: "",
      },
      {
        protocol: "https",
        hostname: "logos-world.net",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.pcam-doctorate.eu",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.mmu.ac.uk",
        port: "",
      },
      {
        protocol: "https",
        hostname: "jcpileish.org",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.londonmet.ac.uk",
        port: "",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "icccn.co.uk",
        port: "",
      },
      {
        protocol: "https",
        hostname: "icnda.in",
        port: "",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "thumbs.dreamstime.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "europe1.discourse-cdn.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
