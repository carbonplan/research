import Index, { meta } from '../../articles/forest-risks-explainer/index.md'

import references from '../../articles/forest-risks-explainer/references'
import { Article } from '@carbonplan/layouts'

const Content = () => (
  <Article references={references} meta={meta} displayTitle={null}>
    <Index />
  </Article>
)

export default Content
