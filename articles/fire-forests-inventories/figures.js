import dynamic from 'next/dynamic'

const figures = {
  FireEmissions: dynamic(() => import('./components/fire-emissions.js')),
  GHGInventory: dynamic(() => import('./components/ghg-inventory.js')),
  GHGSeries: dynamic(() => import('./components/ghg-series.js')),
  NetEffect: dynamic(() => import('./components/net-effect.js')),
  NetSeries: dynamic(() => import('./components/net-series.js')),
}

export default figures
