import Index, { meta } from '../../articles/forest-offsets-explainer/index.md'
import { displayTitle } from '../../articles/forest-offsets-explainer/index.md'
import references from '../../articles/forest-offsets-explainer/references'
import { Article } from '@carbonplan/layouts'

const Content = () => (
  <Article references={references} meta={meta} displayTitle={displayTitle}>
    <Index />
  </Article>
)

export default Content
