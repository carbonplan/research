import Index, { meta } from '../../articles/soil-protocols-explainer/index.md'

import references from '../../articles/soil-protocols-explainer/references'
import { Article } from '@carbonplan/layouts'

const Content = (props) => (
  <Article references={references} meta={meta} displayTitle={null}>
    <Index {...props} />
  </Article>
)

export default Content
