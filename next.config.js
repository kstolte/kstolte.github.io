/** @type {import('next').NextConfig} */
module.exports = {
  // Produce a fully static site in ./out (replaces the removed `next export`
  // command). This is what gets published to GitHub Pages.
  output: 'export',
  images: {
    // Static export cannot use the on-demand Image Optimization API, so images
    // are served as-is. Required for `output: 'export'`.
    unoptimized: true,
    // `images.domains` was removed in Next 16 in favor of `remotePatterns`.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uploads.divjoy.com',
      },
    ],
  },
};
