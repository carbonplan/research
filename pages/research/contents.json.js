import fs from 'fs'

import contents from '../../contents'

function Contents() {
  // getServerSideProps will do the heavy lifting
}

export function getServerSideProps({ res }) {
  const pages = fs
    .readdirSync('pages/research')
    .filter((staticPage) => {
      return !['index.js', '404.js', 'rss.xml.js', 'contents.json.js'].includes(
        staticPage
      )
    })
    .map((page) => page.replace('.js', ''))
    .map((page) => {
      const articleContent = contents.find((c) => c.id === page)
      const result = { page: `research/${page}` }
      if (articleContent) {
        const [month, day, year] = articleContent.date.split('-')
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
