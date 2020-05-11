import Article from '../../components/article'
import Calculator from './calculator'

export const meta = {
  id: 'dac-cost-calculator',
  summary: 'Calculator for costing Direct Air Capture projects'
  quotes: []
}

# Cost calculator for direct air capture

<Calculator></Calculator>

export default ({ children }) => <Article meta={meta}>{children}</Article>