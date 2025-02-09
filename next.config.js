/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath:
    process.env.NODE_ENV === "production" ? "/nextjs-ssg-cuddly-train" : "",
};

module.exports = nextConfig;
