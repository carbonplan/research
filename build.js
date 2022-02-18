const fs = require('fs')
const glob = require('glob')
const extractMdxMeta = require('extract-mdx-metadata')

const existing = glob.sync(
  './pages/research/!(index.js|rss.xml.js|contents.json.js)'
)
existing.forEach((f) => {
  if (fs.rmSync) return fs.rmSync(f)
})

// Build pages and contents.js from articles
glob('./articles/**/index.md', async (err, articlePaths) => {
  const articleContents = await Promise.all(articlePaths.map(getMetadata))
  const sortedArticles = articleContents.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )

  // Construct contents/articles.js
  const contents = `const articles = ${JSON.stringify(sortedArticles)}
            export default articles`
  fs.writeFileSync('./contents/articles.js', contents)

  // Construct pages/research
  articleContents.forEach(({ id }) => {
    const hasReferences = glob.sync(`./articles/${id}/references.js`).length > 0
    const hasCustomTitle = fs
      .readFileSync(`./articles/${id}/index.md`, 'utf-8')
      .includes('export const displayTitle')
    const referencesImport = hasReferences
      ? `import references from '../../articles/${id}/references'`
      : ''
    const titleImport = hasCustomTitle
      ? `import { displayTitle } from '../../articles/${id}/index.md'`
      : ''

    const page = `
    import Index, { meta } from '../../articles/${id}/index.md'
    ${titleImport}
    ${referencesImport}
    import { Article } from '@carbonplan/layouts'

    const Content = () => (
      <Article references={${
        hasReferences ? 'references' : '{}'
      }} meta={meta} displayTitle={${hasCustomTitle ? 'displayTitle' : 'null'}}>
        <Index />
      </Article>
    )

    export default Content
    `
    fs.writeFileSync(`./pages/research/${id}.js`, page)
  })
})

// Build pages for extra markdown content
glob('./articles/**/!(index).md', (err, extraPaths) => {
  const extras = []
  extraPaths.forEach((filePath) => {
    const [prefix] = filePath.match(/[^\/]+(?=\/(\w|\d|-)+.md)/)
    const [suffix] = filePath.match(/[^\/]+(?=\.md)/)

    const page = `import Content from '../../articles/${prefix}/${suffix}.md'
    export default Content
    `
    extras.push({ id: `${prefix}-${suffix}` })

    fs.writeFileSync(`./pages/research/${prefix}-${suffix}.js`, page)

    // Construct contents/extras.js
    const contents = `const extras = ${JSON.stringify(extras)}
        export default extras`
    fs.writeFileSync('./contents/extras.js', contents)
  })
})

// Build pages for tools
glob('./tools/*/index.js', (err, toolPaths) => {
  const tools = []
  toolPaths.forEach((filePath) => {
    const [toolName] = filePath.match(/[^\/]+(?=\/index\.js)/)

    const page = `import Tool from '../../tools/${toolName}/index.js'
          export default Tool
          `
    tools.push({ id: toolName })
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

  const links = [
    {
      label: 'Read article',
      href: `/research/${id}`,
    },
    ...(meta.links || []),
  ]

  return {
    id: id[0],
    ...meta,
    links,
  }
}
