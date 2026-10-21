/** @type {import('next').NextConfig} */

// Build allowed image hostnames dynamically from env vars
const remotePatterns = [{ protocol: "https", hostname: "ucarecdn.com" }];

// If a blog URL is configured, allow its hostname for featured images
if (process.env.BLOG_BASE_URL) {
  try {
    const blogHost = new URL(process.env.BLOG_BASE_URL).hostname;
    remotePatterns.push({ protocol: "https", hostname: blogHost });
  } catch {
    // Invalid URL — skip
  }
}

const nextConfig = {
  reactStrictMode: false,

  // Enable standalone output for Docker / self-hosted deployments
  output: process.env.DOCKER_BUILD === "1" ? "standalone" : undefined,

  images: { remotePatterns },
};

export default nextConfig;
