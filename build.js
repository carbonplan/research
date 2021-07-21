const fs = require('fs')
const path = require('path')
const glob = require('glob')
const extractMdxMeta = require('extract-mdx-metadata')
const externalContents = require('./external-contents')

glob('./articles/**/index.md', async (err, files) => {
  const internalContents = await Promise.all(files.map((d) => getMetadata(d)))
  const combined = internalContents.concat(externalContents)

  const sorted = combined.sort((a, b) => new Date(b.date) - new Date(a.date))

  const contents = `const contents = ${JSON.stringify(sorted)}
    export default contents`
  fs.writeFileSync('./contents.js', contents)
})

async function getMetadata(path) {
  const content = fs.readFileSync(path)
  const meta = await extractMdxMeta(content)
  const id = path.match(/[^\/]+(?=\/index\.md)/)

  if (!id || !id[0]) {
    throw new Error(`Invalid article path: ${path}`)
  }
  return {
    id: id[0],
    ...meta,
  }
}
