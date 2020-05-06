import Article from '../../components/Article'
import DacCalculator from './calculator.js'

export const meta = {
  id: 'dac-cost-calculator'
}

# Cost calculator for direct air capture

How much does it cost to build a Direct Air Capture facility? To help answer
this question, we've built a calculator that takes the most important variables
that drive the cost of building and operating a DAC plant. To find out more
about the fundementals and assumptions in the calcuator, check out Noah's paper...

<DacCalculator></DacCalculator>

export default ({ children }) => <Article meta={meta}>{children}</Article>