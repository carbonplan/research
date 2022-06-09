const fs = require('fs')
const path = require('path')
const glob = require('glob')
const matter = require('gray-matter')

// Utils based on examples in https://github.com/vercel/next.js/tree/canary/examples/with-mdx-remote

// ARTICLES_PATH is useful when you want to get the path to a specific file
const ARTICLES_PATH = path.join(process.cwd(), 'articles')

// articles is the list of all article folders inside the ARTICLES_PATH directory
const articles = fs
  .readdirSync(ARTICLES_PATH)
  .filter((p) => p.match(/^[\w|\d|-]+$/))

// COMMENTARY_PATH is useful when you want to get the path to a specific file
const COMMENTARY_PATH = path.join(process.cwd(), 'commentary')

// commentary is the list of all commentary folders inside the COMMENTARY_PATH directory
const commentary = fs
  .readdirSync(COMMENTARY_PATH)
  .filter((p) => p.match(/^[\w|\d|-]+$/))

const getMetadata = (ids, directory) =>
  ids
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
        path: `${directory}/${id}/index.md`,
      }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map((meta, idx) => ({ ...meta, number: ids.length - 1 - idx }))

const supplementMetadata = glob
  .sync('./@(articles|commentary)/**/!(index).md')
  .map((supplementPath) => {
    const [id] = supplementPath.match(/[^\/]+(?=\/[^\/]+\.md)/)
    const [fileName] = supplementPath.match(/[^\/]+(?=\.md)/)
    const source = fs.readFileSync(supplementPath)
    const { data } = matter(source)

    const directory = supplementPath.match(/\.\/articles/)
      ? ARTICLES_PATH
      : COMMENTARY_PATH
    return {
      ...data,
      id,
      id: `${id}-${fileName}`,
      path: `${directory}/${id}/${fileName}.md`,
    }
  })

module.exports = {
  articleMetadata: getMetadata(articles, ARTICLES_PATH),
  commentaryMetadata: getMetadata(commentary, COMMENTARY_PATH),
  supplementMetadata,
}
