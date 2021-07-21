import fs from 'fs'
import extractMdxMeta from 'extract-mdx-metadata'

import externalContents from '../external-contents'

const articlesDirectory = process.cwd() + '/' + 'articles'

function getArticleIDs() {
  return fs
    .readdirSync(articlesDirectory, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
}

export async function getArticleByID(id, fields = []) {
  const path = `${articlesDirectory}/${id}/index.md`
  const fileContents = fs.readFileSync(path)
  const meta = await extractMdxMeta(fileContents)

  const items = {}

  fields.forEach(async (field) => {
    if (field === 'id') {
      items[field] = id
    } else if (meta[field]) {
      items[field] = meta[field]
    }
  })

  return items
}

export function getAllArticles(fields = []) {
  const articleIDs = getArticleIDs()

  return Promise.all(
    articleIDs.map(async (id) => await getArticleByID(id, fields))
  )
}

export async function getAllContentData(fields = []) {
  const internalFields = await getAllArticles(fields)
  const externalFields = externalContents.map((content) => content) // todo: pick out fields

  const combinedFields = internalFields.concat(externalFields)
  return combinedFields.sort((a, b) => new Date(b.date) - new Date(a.date))
}
