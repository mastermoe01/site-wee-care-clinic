import type { NextConfig } from "next";

// Demo label (D-09): every response carries X-Robots-Tag, in `header` mode of data/demos.yml.
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
