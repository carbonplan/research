import dynamic from 'next/dynamic'

const figures = {
  InlineCheck: dynamic(() => import('../../components/inline-check.js')),
  Distributions: dynamic(() => import('./components/distributions.js')),
  Metrics: dynamic(() => import('./components/metrics.js')),
  Numbers: dynamic(() => import('./components/numbers.js')),
  Oxford: dynamic(() => import('./components/oxford.js')),
  Validation: dynamic(() => import('./components/validation.js')),
}

export default figures
