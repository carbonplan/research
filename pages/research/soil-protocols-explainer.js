import Index, {
  meta,
  title,
} from '../../articles/soil-protocols-explainer/index.md'
import references from '../../articles/soil-protocols-explainer/references'
import { Article } from '@carbonplan/layouts'

const Content = () => (
  <Article references={references} meta={meta} title={title}>
    <Index />
  </Article>
)

export default Content
