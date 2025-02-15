/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.OUTPUT || undefined,
  transpilePackages: ["@workspace/ui"],
  basePath: process.env.BASE_PATH || undefined,
}

export default nextConfig
