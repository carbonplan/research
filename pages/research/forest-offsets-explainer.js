import Index, { meta } from '../../articles/forest-offsets-explainer/index.md'
import { displayTitle } from '../../articles/forest-offsets-explainer/index.md'
import references from '../../articles/forest-offsets-explainer/references'
import { Article } from '@carbonplan/layouts'

const Content = (props) => (
  <Article references={references} meta={meta} displayTitle={displayTitle}>
    <Index {...props} />
  </Article>
)

export default Content
