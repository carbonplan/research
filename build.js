const fs = require('fs')
const path = require('path')
const glob = require('glob')
const extractMdxMeta = require('extract-mdx-metadata')
const externalContents = require('./external-contents')

const existing = glob.sync('./pages/research/!(index.js)')
existing.forEach((f) => {
  fs.rmSync(f)
})

// Build pages and contents.js from articles
glob('./articles/**/index.md', async (err, filePaths) => {
  const articleContents = await Promise.all(filePaths.map(getMetadata))

  // Construct pages/research
  articleContents.forEach(({ id }) => {
    const page = `import Index from '../../articles/${id}/index.md'
    export default Index
    `
    fs.writeFileSync(`./pages/research/${id}.js`, page)
  })

  // Construct contents.js
  const combined = articleContents.concat(externalContents)
  const sorted = combined.sort((a, b) => new Date(b.date) - new Date(a.date))
  const contents = `const contents = ${JSON.stringify(sorted)}
    export default contents`
  fs.writeFileSync('./contents.js', contents)
})

// Build pages for extra markdown content
glob('./articles/**/!(index).md', (err, filePaths) => {
  filePaths.forEach((filePath) => {
    const [prefix] = filePath.match(/[^\/]+(?=\/(\w|\d|-)+.md)/)
    const [suffix] = filePath.match(/[^\/]+(?=\.md)/)

    const page = `import Content from '../../articles/${prefix}/${suffix}.md'
    export default Content
    `
    fs.writeFileSync(`./pages/research/${prefix}-${suffix}.js`, page)
  })
})

// Build pages for tools
glob('./tools/*/index.js', (err, filePaths) => {
  filePaths.forEach((filePath) => {
    const [toolName] = filePath.match(/[^\/]+(?=\/index\.js)/)

    const page = `import Tool from '../../tools/${toolName}/index.js'
    export default Tool
    `
    fs.writeFileSync(`./pages/research/${toolName}.js`, page)
  })
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
