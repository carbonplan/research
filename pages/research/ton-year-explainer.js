import Index, { meta } from '../../articles/ton-year-explainer/index.md'
import references from '../../articles/ton-year-explainer/references'
import Article from '../../components/article'

const Content = () => (
  <Article references={references} meta={meta}>
    <Index />
  </Article>
)

export default Content
