import dacDriver from './driver.js'
import dacParameters from './dac-params.js'
import { useThemeUI } from 'theme-ui'

const nBars = 10

function linspace(startValue, stopValue, count) {
  const array = []
  const step = (stopValue - startValue) / (count - 1)
  for (var i = 0; i < count; i++) {
    array.push(startValue + (step * i))
  }
  return array
}

function logspace(startValue, stopValue, count) {
  const start = Math.log10(startValue)
  const stop = Math.log10(stopValue)
  const array = []
  const step = (stop - start) / (count - 1)
  for (var i = 0; i < count; i++) {
    array.push(Math.pow(10, (start + (step * i))))
  }
  return array
}



const calcPartialCost = (electricSource, thermalSource, params) => {
  const context = useThemeUI()
  const theme = context.theme

  const chartData = {}
  let p
  let x
  let tempResults


  for (var i = 0, l = dacParameters.length; i < l; i++) {
    const localParams = Object.assign({}, params) 
    
    p = dacParameters[i]
    chartData[p.name] = []
    if (p.scale == 'linear') {
      x = linspace(p.validRange[0], p.validRange[1], nBars)
    } else {
      x = logspace(p.validRange[0], p.validRange[1], nBars)
    }
    

    for (var j = 0, k = x.length; j < k; j++) {
      localParams[p.name] = x[j]
      tempResults = dacDriver(electricSource, thermalSource, localParams)
      chartData[p.name].push({
        x: x[j],
        y: tempResults['Capital Recovery [$/tCO2eq]'],
        c: 'Capital Recovery [$/tCO2eq]'
      })
      chartData[p.name].push({
        x: x[j],
        y: tempResults['Fixed O+M [$/tCO2eq]'],
        c: 'Fixed O+M [$/tCO2eq]'
      })
      chartData[p.name].push({
        x: x[j],
        y: tempResults['Variable O+M [$/tCO2eq]'],
        c: 'Variable O+M [$/tCO2eq]'
      })
    }
  }
  return chartData
}

export default calcPartialCost;
