import { polygonArea } from 'd3-polygon'

export const getIrfCurve = (curveName) => {
  let a
  let tau

  switch (curveName) {
    case 'joos_2013':
      // parameters from Joos et al., 2013 (Table 5)
      // https://doi.org/10.5194/acp-13-2793-2013
      a = [0.2173, 0.224, 0.2824, 0.2763]
      tau = [0, 394.4, 36.54, 4.304]
      break
    case 'ipcc_2007':
      // parameters from IPCC AR4 2007 (Chapter 2, page 213)
      // https://www.ipcc.ch/site/assets/uploads/2018/02/ar4-wg1-chapter2-1.pdf
      a = [0.217, 0.259, 0.338, 0.186]
      tau = [0, 172.9, 18.51, 1.186]
      break
    case 'ipcc_2000':
      // parameters from IPCC Land Use, Land-Use Change and Forestry Special Report 2000 (Chapter 2.3.6.3, Footnote 4)
      // https://archive.ipcc.ch/ipccreports/sres/land_use/index.php?idp=74
      a = [0.175602, 0.137467, 0.18576, 0.242302, 0.258868]
      tau = [0, 421.093, 70.5965, 21.42165, 3.41537]
      break
    default:
      throw new Error(`Unexpected IRF curve name: ${curveName}`)
  }

  const [initialValue, ...otherValues] = a
  return Array(1001)
    .fill(null)
    .map((x, i) => {
      return otherValues.reduce((result, y, j) => {
        return result + y * Math.pow(Math.E, (-1 * i) / tau[j + 1])
      }, initialValue)
    })
}

const discount = (curve, discountRate) => {
  if (discountRate) {
    return curve.map(([year, x]) => [
      year,
      x / Math.pow(1 + discountRate, year),
    ])
  } else {
    return curve
  }
}

const comparePoints = (a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1]
  } else {
    return a[0] - b[0]
  }
}

export const getBaselineData = (baseline, timeHorizon, discountRate) => {
  let points = baseline.map((v, i) => [i, v]).slice(0, timeHorizon + 1)
  points = discount(points, discountRate)
  const impact = polygonArea([...points, [timeHorizon, 0], [0, 0]])

  return {
    points,
    impact,
  }
}

export const getScenarioData = (
  method,
  baseline,
  timeHorizon,
  delay,
  discountRate
) => {
  // Generate undiscounted curve for construction of scenario points
  const baselineData = getBaselineData(baseline, timeHorizon, 0)
  let scenarioPoints = Array(delay)
    .fill(-1)
    .concat(baselineData.points.map(([year, value]) => value))
    .map((v, i) => [i, v])
    .concat([[delay, -1]])
    .concat([[delay, 0]])
    .sort(comparePoints)
  scenarioPoints = discount(scenarioPoints, discountRate)

  let benefitPoints
  let benefit

  switch (method) {
    case 'Moura Costa':
      benefitPoints = scenarioPoints.slice(0, delay + 1)
      benefit = -1 * polygonArea([...benefitPoints, [delay, 0], [0, 0]])
      break
    case 'Lashof':
      // Visualize the benefit area as the baseline emission (truncated to the time horizon)
      // shifted over to account for the temporary storage period (delay). The area sticking out
      // past the time horizon is equivalent to the ton-years of atmospheric impact that are avoided
      // within the time horizon in the absence of a discount rate.
      const benefitStart = Math.max(delay, timeHorizon)
      const benefitEnd = timeHorizon + delay

      benefitPoints = scenarioPoints.filter(
        (p) => p[0] >= benefitStart && p[0] <= benefitEnd
      )

      // Get discounted baseline impact
      const { impact: baselineImpact } = getBaselineData(
        baseline,
        timeHorizon,
        discountRate
      )
      // Get scenario impact occurring between t=delay and t=timeHorizon
      // Exclude all points where p[1]=-1 but include scenarioPoints[delay + 1] (p=[delay, 0])
      const scenarioImpact = polygonArea([
        ...scenarioPoints.slice(delay + 1, timeHorizon + 3),
        [timeHorizon, 0],
        [0, 0],
      ])

      // Calculate the benefit by actually taking the difference between the baseline and scenario
      // impacts in order to handle discountRate > 0.
      benefit = baselineImpact - scenarioImpact

      break
    default:
      throw new Error(`Unexpected ton-year accounting method: ${method}`)
  }

  return {
    lineData: scenarioPoints,
    areaData: benefitPoints,
    benefit,
  }
}
