import dynamic from 'next/dynamic'

const figures = {
  InlineCheck: dynamic(() => import('../../components/inline-check.js')),
  Distributions: dynamic(() => import('./components/distributions/index.js')),
  Numbers: dynamic(() => import('./components/numbers.js')),
  Price: dynamic(() => import('./components/price/index.js')),
}

export default figures
