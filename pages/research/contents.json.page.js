import { getCombinedContents } from '../../utils/contents'

function Contents() {
  // getServerSideProps will do the heavy lifting
}

export function getServerSideProps({ res }) {
  const { articles, commentary, comments, tools, extras } =
    getCombinedContents()
  const pages = articles
    .concat(commentary)
    .concat(comments.map((t) => ({ ...t, type: 'commentary' })))
    .concat(tools.map((t) => ({ ...t, type: 'tool' })))
    .concat(extras)
    .map(({ date, href, color, id, title, icon, type, authors, summary }) => {
      let result = { page: id ? `research/${id}` : href }

      if (date) {
        const [month, day, year] = date.split('-')
        result.date = `${year}-${month}-${day}`
      }

      if (title) {
        result.metadata = {
          type,
          title,
          authors,
          summary,
          color,
          icon,
        }
      }
      return result
    })

  res.setHeader('Content-Type', 'application/json')

  res.write(JSON.stringify([{ page: 'research' }].concat(pages)))
  res.end()

  return {
    props: {},
  }
}

export default Contents
