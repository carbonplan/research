const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const glob = require('glob')

// Get list of all article and commentary folders
const articles = fs
  .readdirSync(path.join(process.cwd(), 'articles'))
  .filter((p) => p.match(/^[\w|\d|-]+$/))

const commentary = fs
  .readdirSync(path.join(process.cwd(), 'commentary'))
  .filter((p) => p.match(/^[\w|\d|-]+$/))

// Helper function to get metadata for articles and commentary
const getMetadata = (ids, folder) => {
  const directory = path.join(process.cwd(), folder)
  return ids
    .map((id) => {
      const source = fs.readFileSync(path.join(directory, `${id}/index.md`))
      let references
      try {
        const referencesBuffer = fs.readFileSync(
          path.join(directory, `${id}/references.json`)
        )
        references = JSON.parse(referencesBuffer.toString())
      } catch {
        references = {}
      }
      const { data } = matter(source)
      return {
        ...data,
        id,
        references,
        folder,
        path: `${directory}/${id}/index.md`,
      }
    })
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    .map((meta, idx) => ({ ...meta, number: ids.length - 1 - idx }))
}

// Generate metadata for articles and commentary
const articleMetadata = getMetadata(articles, 'articles')
const commentaryMetadata = getMetadata(commentary, 'commentary')

// Generate metadata for supplementary files
const supplementMetadata = glob
  .sync('./@(articles|commentary)/**/!(index).md')
  .map((supplementPath) => {
    const [id] = supplementPath.match(/[^/]+(?=\/[^/]+\.md)/)
    const [fileName] = supplementPath.match(/[^/]+(?=\.md)/)
    const source = fs.readFileSync(supplementPath)
    const { data } = matter(source)

    const folder = supplementPath.match(/\.\/articles/)
      ? 'articles'
      : 'commentary'
    const directory = path.join(process.cwd(), folder)
    return {
      ...data,
      parentId: id,
      folder: folder,
      id: data.slug ?? `${id}-${fileName}`,
      path: `${directory}/${id}/${fileName}.md`,
    }
  })

// Generate the metadata file content
const fileContent = `// This file is auto-generated. Do not edit it manually.
const articleMetadata = ${JSON.stringify(articleMetadata)}
const commentaryMetadata = ${JSON.stringify(commentaryMetadata)}
const supplementMetadata = ${JSON.stringify(supplementMetadata)}

module.exports = {
  articleMetadata,
  commentaryMetadata,
  supplementMetadata,
}
`

// Write the metadata file
fs.writeFileSync(path.join(process.cwd(), 'utils', 'metadata.js'), fileContent)
