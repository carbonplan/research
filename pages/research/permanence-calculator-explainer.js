import Index, {
  meta,
  title,
} from '../../articles/permanence-calculator-explainer/index.md'
import references from '../../articles/permanence-calculator-explainer/references'
import { Article } from '@carbonplan/layouts'

const Content = () => (
  <Article references={references} meta={meta} title={title}>
    <Index />
  </Article>
)

export default Content
