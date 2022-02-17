const isDev =
  process.env.VERCEL_ENV === 'preview' || process.env.NODE_ENV === 'development'

const slug = require('rehype-slug')
const path = require('path')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [slug],
  },
})

module.exports = withMDX({
  pageExtensions: ['jsx', 'js', 'md', 'mdx'],
  assetPrefix: isDev ? '' : 'https://research.carbonplan.org',
  webpack: (config, options) => {
    if (options.isServer) {
      config.externals = ['react', 'theme-ui', ...config.externals]
    }
    config.resolve.alias['react'] = path.resolve(
      __dirname,
      '.',
      'node_modules',
      'react'
    )
    config.resolve.alias['theme-ui'] = path.resolve(
      __dirname,
      '.',
      'node_modules',
      'theme-ui'
    )
    return config
  },
})
