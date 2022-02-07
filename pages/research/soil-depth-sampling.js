import Index, { meta } from '../../articles/soil-depth-sampling/index.md'

import references from '../../articles/soil-depth-sampling/references'
import { Article } from '@carbonplan/layouts'

const Content = () => (
  <Article references={references} meta={meta} displayTitle={null}>
    <Index />
  </Article>
)

export default Content
