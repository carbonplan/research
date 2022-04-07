import Index, { meta } from '../../articles/soil-carbon-comment/index.md'
import { displayTitle } from '../../articles/soil-carbon-comment/index.md'
import references from '../../articles/soil-carbon-comment/references'

import { Article } from '@carbonplan/layouts'

const Content = (props) => (
  <Article references={references} meta={meta} displayTitle={displayTitle}>
    <Index {...props} />
  </Article>
)

export default Content
