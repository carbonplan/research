const isDev =
  process.env.VERCEL_ENV === 'preview' || process.env.NODE_ENV === 'development'

const slug = require('rehype-slug')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [slug],
    format: 'mdx',
  },
})

module.exports = withMDX({
  pageExtensions: ['page.jsx', 'page.js', 'page.md', 'page.mdx'],
  assetPrefix: isDev ? '' : 'https://research.carbonplan.org',
  experimental: {
    scrollRestoration: true,
  },
})
