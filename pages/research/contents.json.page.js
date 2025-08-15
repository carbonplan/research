import { getCombinedContents } from '../../utils/contents'

function Contents() {
  // getServerSideProps will do the heavy lifting
}

export function getServerSideProps({ res }) {
  const { articles, commentary, tools, extras } = getCombinedContents()
  const pages = articles
    .concat(commentary)
    .concat(tools.map((t) => ({ ...t, type: 'tool' })))
    .concat(extras)
    .filter((content) => content.id)
    .map(({ date, color, id, title, icon, type, authors, summary }) => {
      const result = { page: `research/${id}` }
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
