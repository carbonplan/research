import dynamic from 'next/dynamic'

const figures = {
  InlineCheck: dynamic(() => import('../../components/inline-check.js')),
  Metrics: dynamic(() => import('./components/metrics.js')),
  Permanence: dynamic(() => import('./components/permanence.js')),
  Table: dynamic(() => import('./components/table.js')),
}

export default figures
