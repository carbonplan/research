import dynamic from 'next/dynamic'

const figures = {
  Depth: dynamic(() => import('./components/depth/index.js')),
  Density: dynamic(() => import('./components/density/index.js')),
  Country: dynamic(() => import('./components/country/index.js')),
}

export default figures
