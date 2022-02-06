import Index, {
  meta,
  title,
} from '../../articles/forest-offsets-explainer/index.md'
import references from '../../articles/forest-offsets-explainer/references'
import { Article } from '@carbonplan/layouts'

const Content = () => (
  <Article references={references} meta={meta} title={title}>
    <Index />
  </Article>
)

export default Content
