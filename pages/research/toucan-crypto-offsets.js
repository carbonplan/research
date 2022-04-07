import Index, { meta } from '../../articles/toucan-crypto-offsets/index.md'

import getStaticProps from '../../articles/toucan-crypto-offsets/get-static-props'
import { Article } from '@carbonplan/layouts'

const Content = (props) => (
  <Article references={{}} meta={meta} displayTitle={null}>
    <Index {...props} />
  </Article>
)

export { getStaticProps }

export default Content
