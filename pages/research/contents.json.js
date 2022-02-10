import contents from '../../contents'

function Contents() {
  // getServerSideProps will do the heavy lifting
}

export function getServerSideProps({ res }) {
  const pages = contents.articles
    .concat(contents.tools)
    .concat(contents.extras)
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
