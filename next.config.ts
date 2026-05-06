/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {

images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'ejemplo.com',
    }
  ]
}
};


export default nextConfig;


