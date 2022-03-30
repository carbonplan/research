import Index, { meta } from '../../articles/fire-forests-inventories/index.md'

import references from '../../articles/fire-forests-inventories/references'
import { Article } from '@carbonplan/layouts'

const Content = () => (
  <Article references={references} meta={meta} displayTitle={null}>
    <Index />
  </Article>
)

export default Content
