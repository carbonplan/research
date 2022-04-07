import Index, {
  meta,
} from '../../articles/permanence-calculator-explainer/index.md'

import references from '../../articles/permanence-calculator-explainer/references'

import { Article } from '@carbonplan/layouts'

const Content = (props) => (
  <Article references={references} meta={meta} displayTitle={null}>
    <Index {...props} />
  </Article>
)

export default Content
