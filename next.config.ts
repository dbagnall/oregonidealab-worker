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

    const requiredExternals = ['wrangler', 'sqlite']

    if (Array.isArray(webpackConfig.externals)) {
      for (const external of requiredExternals) {
        if (!webpackConfig.externals.includes(external)) {
          webpackConfig.externals.push(external)
        }
      }
    } else {
      webpackConfig.externals = [webpackConfig.externals, ...requiredExternals]
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
