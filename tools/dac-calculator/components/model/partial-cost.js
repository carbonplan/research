import dacParameters from './dac-params.js'
import techData from './tech-data.js'

const NBARS = 20

/**
 * Return evenly spaced numbers over a specified interval.
 * Returns `count` evenly spaced samples, calculated over the interval `[start,stop]`.
 * @param {number} start
 * @param {number} stop
 * @param {number} count
 * @return {!Array<number>}
 */
function linspace(start, stop, count) {
  const array = []
  const step = (stop - start) / (count - 1)
  for (var i = 0; i < count; i++) {
    array.push(start + step * i)
  }
  return array
}

/**
 * Return numbers spaced evenly on a log scale.
 * In linear space, the sequence starts at `10**start` and ends with `10**stop`.
 * @param {number} start
 * @param {number} stop
 * @param {number} count
 * @return {!Array<number>}
 */
function logspace(start, stop, count) {
  const lStart = Math.log10(start)
  const lStop = Math.log10(stop)
  const array = []
  const step = (lStop - lStart) / (count - 1)
  for (var i = 0; i < count; i++) {
    array.push(Math.pow(10, lStart + step * i))
  }
  return array
}

/**
 * Calculate the x-axis for a parameter (`p`).
 * @param {object} p
 * @return {!Array<number>}
 */
function calcX(p) {
  let x

  if (p.scale == 'linear') {
    x = linspace(p.validRange[0], p.validRange[1], p.maxSteps || NBARS)
  } else {
    x = logspace(p.validRange[0], p.validRange[1], p.maxSteps || NBARS)
  }
  return x
}

/**
 * Calculate the "partial-cost" for one parameter (`p`).
 * Return an array of chart data structured for Vega.
 * @param {DacModel} model
 * @param {object} p
 * @param {object} params
 * @return {!Array<object>}
 */
function calcForOneParam(model, p, params) {
  let tempResults
  const chartData = []

  const origValue = params[p.name].valueOf() // copy original value

  const x = calcX(p)

  let cost

  for (var j = 0, k = x.length; j < k; j++) {
    params[p.name] = x[j]
    model.setParams(params)
    tempResults = model.compute()
    cost = tempResults['Total Cost [$/tCO2 Net Removed]']
    chartData.push({
      x: x[j],
      y: cost < 0 ? 1000 : tempResults['Variable O&M [$/tCO2eq Net Removed]'],
      o: cost < 0 ? 1 : 3,
      c: cost < 0 ? 0 : 1,
    })
    chartData.push({
      x: x[j],
      y: cost < 0 ? 1000 : tempResults['Natural Gas Cost [$/tCO2 Net Removed]'],
      o: cost < 0 ? 1 : 2,
      c: cost < 0 ? 0 : 1,
    })
    chartData.push({
      x: x[j],
      y: cost < 0 ? 1000 : tempResults['Fixed O&M [$/tCO2eq Net Removed]'],
      o: cost < 0 ? 1 : 1,
      c: cost < 0 ? 0 : 1,
    })
    chartData.push({
      x: x[j],
      y:
        cost < 0
          ? 1000
          : tempResults['Capital Recovery [$/tCO2eq Net Removed]'],
      o: cost < 0 ? 1 : 0,
      c: cost < 0 ? 0 : 1,
    })
  }
  params[p.name] = origValue // replace original value
  return chartData
}

/**
 * Calculate the "partial-cost" for one technology parameter (`p`).
 * Return an array of chart data structured for Vega.
 * @param {DacModel} model
 * @param {object} tech
 * @param {object} p
 * @param {object} params
 * @return {!Array<object>}
 */
function calcForOneTechParam(model, tech, p, params) {
  let tempResults

  const origValue = params['Technology'][tech][p.name].valueOf() // copy original value
  const chartData = []

  const x = calcX(p)

  let cost

  for (var j = 0, k = x.length; j < k; j++) {
    params['Technology'][tech][p.name] = x[j]
    model.setParams(params)
    tempResults = model.compute()
    cost = tempResults['Total Cost [$/tCO2 Net Removed]']
    chartData.push({
      x: x[j],
      y: cost < 0 ? 1000 : tempResults['Natural Gas Cost [$/tCO2 Net Removed]'],
      o: cost < 0 ? 1 : 2,
      c: cost < 0 ? 0 : 1,
    })
    chartData.push({
      x: x[j],
      y: cost < 0 ? 1000 : tempResults['Variable O&M [$/tCO2eq Net Removed]'],
      o: cost < 0 ? 1 : 3,
      c: cost < 0 ? 0 : 1,
    })
    chartData.push({
      x: x[j],
      y: cost < 0 ? 1000 : tempResults['Fixed O&M [$/tCO2eq Net Removed]'],
      o: cost < 0 ? 1 : 1,
      c: cost < 0 ? 0 : 1,
    })
    chartData.push({
      x: x[j],
      y:
        cost < 0
          ? 1000
          : tempResults['Capital Recovery [$/tCO2eq Net Removed]'],
      o: cost < 0 ? 1 : 0,
      c: cost < 0 ? 0 : 1,
    })
  }
  params['Technology'][tech][p.name] = origValue // replace original value
  return chartData
}

/**
 * Calculate the "partial-cost" for all parameters (`params`).
 * Return an object of chart data structured for Vega.
 * @param {DacModel} model
 * @param {object} params
 * @return {!Array<object>}
 */
const calcPartialCost = (model, params, techKeys) => {
  const chartData = {}
  let p

  const flatParams = []
  dacParameters.map((group) =>
    group.parameters.map((param) => flatParams.push(param))
  )

  // parameters
  for (var i = 0, l = flatParams.length; i < l; i++) {
    p = flatParams[i]
    chartData[p.name] = calcForOneParam(model, p, params)
  }

  // tech-data
  chartData['Technology'] = {}
  for (const key of techKeys) {
    chartData['Technology'][key] = {}
    for (var i = 0, l = techData[key].length; i < l; i++) {
      p = techData[key][i]
      if (p.show) {
        chartData['Technology'][key][p.name] = calcForOneTechParam(
          model,
          key,
          p,
          params
        )
      }
    }
  }
  return chartData
}

export default calcPartialCost
