import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "dpritwzkwdxqxihalzoq.supabase.co",
        pathname:
          "/storage/v1/object/public/actu-images/**",
      },
    ],
  },
};

export default nextConfig;
