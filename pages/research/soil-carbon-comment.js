import Index, { meta } from '../../articles/soil-carbon-comment/index.md'
import references from '../../articles/soil-carbon-comment/references'
import Article from '../../components/article'

const Content = () => (
  <Article references={references} meta={meta}>
    <Index />
  </Article>
)

export default Content
