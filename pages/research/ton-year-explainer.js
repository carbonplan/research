import Index, { meta, title } from '../../articles/ton-year-explainer/index.md'
import references from '../../articles/ton-year-explainer/references'
import { Article } from '@carbonplan/layouts'

const Content = () => (
  <Article references={references} meta={meta} title={title}>
    <Index />
  </Article>
)

export default Content
