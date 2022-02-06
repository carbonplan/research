import Index, {
  meta,
  title,
} from '../../articles/dac-calculator-explainer/index.md'
import references from '../../articles/dac-calculator-explainer/references'
import { Article } from '@carbonplan/layouts'

const Content = () => (
  <Article references={references} meta={meta} title={title}>
    <Index />
  </Article>
)

export default Content
