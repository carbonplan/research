import { getCombinedContents } from '../../utils/contents'

function Contents() {
  // getServerSideProps will do the heavy lifting
}

export function getServerSideProps({ res }) {
  const { articles, commentary, tools, extras } = getCombinedContents()
  const pages = articles
    .concat(commentary)
    .concat(tools)
    .concat(extras)
    .filter((content) => content.id)
    .map(({ date, id }) => {
      const result = { page: `research/${id}` }
      if (date) {
        const [month, day, year] = date.split('-')
        result.date = `${year}-${month}-${day}`
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
