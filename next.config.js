const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

module.exports = withMDX({
  pageExtensions: ['jsx', 'md', 'mdx']
})