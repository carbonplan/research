import Index, { meta, title } from '../../articles/soil-carbon-comment/index.md'
import references from '../../articles/soil-carbon-comment/references'
import { Article } from '@carbonplan/layouts'

const Content = () => (
  <Article references={references} meta={meta} title={title}>
    <Index />
  </Article>
)

export default Content
