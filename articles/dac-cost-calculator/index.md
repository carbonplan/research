import Article from '../../components/article'
import Calculator from './calculator'

export const meta = {
  id: 'dac-cost-calculator'
}

# Cost calculator for direct air capture

<Calculator></Calculator>

export default ({ children }) => <Article meta={meta}>{children}</Article>