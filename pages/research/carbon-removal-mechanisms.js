import Index, {
  meta,
  title,
} from '../../articles/carbon-removal-mechanisms/index.md'
import references from '../../articles/carbon-removal-mechanisms/references'
import { Article } from '@carbonplan/layouts'

const Content = () => (
  <Article references={references} meta={meta} title={title}>
    <Index />
  </Article>
)

export default Content
