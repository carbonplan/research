import Index, { meta } from '../../articles/carbon-removal-mechanisms/index.md'
import references from '../../articles/carbon-removal-mechanisms/references'
import { Article } from '@carbonplan/layouts'

const Content = () => (
  <Article references={references} meta={meta}>
    <Index />
  </Article>
)

export default Content
