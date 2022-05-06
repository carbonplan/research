import { getCombinedContents } from '../../utils/contents'

const contentsRssXml = (articles) => {
  let latestArticleDate
  let rssItemsXml = ''
  articles
    .filter(({ id }) => id)
    .forEach(({ id, date, title, summary }) => {
      const [month, day, year] = date.split('-').map((s, i) =>
        i === 0
          ? Number(s) - 1 // handle 0-indexed months
          : Number(s)
      )
      const postDate = new Date(year, month, day)

      const postHref = `https://carbonplan.org/research/${id}`

      if (!latestArticleDate || postDate > latestArticleDate) {
        latestArticleDate = postDate
      }

      rssItemsXml += `
        <item>
          <title><![CDATA[${title}]]></title>
          <link>${postHref}</link>
          <pubDate>${postDate.toUTCString()}</pubDate>
          <guid isPermaLink="false">${postHref}</guid>
          <description>
          <![CDATA[${summary}]]>
          </description>
      </item>`
    })
  return {
    rssItemsXml,
    latestArticleDate,
  }
}

const getRssXml = (articles) => {
  const { rssItemsXml, latestArticleDate } = contentsRssXml(articles)

  return `<?xml version="1.0" ?>
        <rss
          xmlns:dc="http://purl.org/dc/elements/1.1/"
          xmlns:content="http://purl.org/rss/1.0/modules/content/"
          xmlns:atom="http://www.w3.org/2005/Atom"
          version="2.0"
        >
          <channel>
              <title><![CDATA[research / carbonplan]]></title>
              <link>https://carbonplan.org/research</link>
              <atom:link href="https://carbonplan.org/research/rss.xml" rel="self" type="application/rss+xml" />
              <description>
                <![CDATA[Articles, tools, and commentary on carbon removal and climate solutions.]]>
              </description>
              <language>en</language>
              <lastBuildDate>${latestArticleDate.toUTCString()}</lastBuildDate>
              ${rssItemsXml}
          </channel>
        </rss>`
}

const RSS = () => {}

export async function getServerSideProps(context) {
  const res = context.res
  if (!res) {
    return
  }
  const { articles } = getCombinedContents()
  const xml = getRssXml(articles)
  res.setHeader('Content-Type', 'application/xml')
  res.write(xml)
  res.end()

  return { props: {} }
}

export default RSS
