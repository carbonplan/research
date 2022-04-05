import Index, { meta } from '../../articles/forest-risks-explainer/index.md'

import references from '../../articles/forest-risks-explainer/references'
import { Article } from '@carbonplan/layouts'

const Content = (props) => (
  <Article references={references} meta={meta} displayTitle={null}>
    <Index {...props} />
  </Article>
)

export default Content
