/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.OUTPUT || undefined,
  transpilePackages: ["@workspace/ui"],
}

export default nextConfig
