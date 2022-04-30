const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

// Utils based on examples in https://github.com/vercel/next.js/tree/canary/examples/with-mdx-remote

// ARTICLES_PATH is useful when you want to get the path to a specific file
const ARTICLES_PATH = path.join(process.cwd(), 'articles')

// articles is the list of all article folders inside the ARTICLES_PATH directory
const articles = fs.readdirSync(ARTICLES_PATH)

// articleMetadata is the list metadata objects for all articles
const articleMetadata = articles
  .map((id) => {
    const source = fs.readFileSync(path.join(ARTICLES_PATH, `${id}/index.md`))
    const references = fs.readFileSync(
      path.join(ARTICLES_PATH, `${id}/references.json`)
    )
    const { data } = matter(source)
    return {
      ...data,
      id,
      references: JSON.parse(references),
    }
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .map((meta, idx) => ({ ...meta, number: articles.length - 1 - idx }))

module.exports = {
  ARTICLES_PATH,
  articleMetadata,
}
