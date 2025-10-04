import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (webpackConfig: any) => {
    if (!webpackConfig.externals) {
      webpackConfig.externals = []
    }

    if (Array.isArray(webpackConfig.externals)) {
      if (!webpackConfig.externals.includes('wrangler')) {
        webpackConfig.externals.push('wrangler')
      }
    } else {
      webpackConfig.externals = [webpackConfig.externals, 'wrangler']
    }

    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
