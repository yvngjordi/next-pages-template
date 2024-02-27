import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
  styledComponents: true,

  },
  eslint: {
    ignoreDuringBuilds: true,
  },
});
