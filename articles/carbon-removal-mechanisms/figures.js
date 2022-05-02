import dynamic from 'next/dynamic'

const figures = {
  Cycle: dynamic(() => import('./components/cycle.js')),
}

export default figures
