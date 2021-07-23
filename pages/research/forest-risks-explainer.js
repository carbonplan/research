import Index, { meta } from '../../articles/forest-risks-explainer/index.md'
import references from '../../articles/forest-risks-explainer/references'
import Article from '../../components/article'

const Content = () => (
  <Article references={references} meta={meta}>
    <Index />
  </Article>
)

export default Content
