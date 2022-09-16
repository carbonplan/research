const fs = require('fs')
const path = require('path')
const glob = require('glob')
const matter = require('gray-matter')

// Utils based on examples in https://github.com/vercel/next.js/tree/canary/examples/with-mdx-remote

// articles is the list of all article folders inside the ARTICLES_PATH directory
const articles = fs
  .readdirSync(path.join(process.cwd(), 'articles'))
  .filter((p) => p.match(/^[\w|\d|-]+$/))

// commentary is the list of all commentary folders inside the COMMENTARY_PATH directory
const commentary = fs
  .readdirSync(path.join(process.cwd(), 'commentary'))
  .filter((p) => p.match(/^[\w|\d|-]+$/))

const getMetadata = (ids, folder) => {
  const directory = path.join(process.cwd(), folder)
  return ids
    .map((id) => {
      const source = fs.readFileSync(path.join(directory, `${id}/index.md`))
      let references
      try {
        references = fs.readFileSync(
          path.join(directory, `${id}/references.json`)
        )
        references = JSON.parse(references)
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
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map((meta, idx) => ({ ...meta, number: ids.length - 1 - idx }))
}

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

module.exports = {
  articleMetadata: getMetadata(articles, 'articles'),
  commentaryMetadata: getMetadata(commentary, 'commentary'),
  supplementMetadata,
}
