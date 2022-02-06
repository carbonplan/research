import Index, { meta, title } from '../../articles/offset-project-fire/index.md'
import references from '../../articles/offset-project-fire/references'
import { Article } from '@carbonplan/layouts'

const Content = () => (
  <Article references={references} meta={meta} title={title}>
    <Index />
  </Article>
)

export default Content
