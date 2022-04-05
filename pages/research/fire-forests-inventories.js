import Index, { meta } from '../../articles/fire-forests-inventories/index.md'

import references from '../../articles/fire-forests-inventories/references'
import { Article } from '@carbonplan/layouts'

const Content = (props) => (
  <Article references={references} meta={meta} displayTitle={null}>
    <Index {...props} />
  </Article>
)

export default Content
