import { useState, useEffect } from 'react'
import { Box } from 'theme-ui'
import { piecewise, quantize, interpolateNumber } from 'd3-interpolate'

const Cost = ({
  shortCost,
  shortDuration,
  projectRisk,
  horizon,
  discountRate,
  switchingTime,
  switchingTimeActive,
  shortCostCurve,
  longCostArrayForCalc,
}) => {
  const [discountedCost, setDiscountedCost] = useState(0)
  const [standardDeviation, setStandardDeviation] = useState(0)

  const shortCostCurveValues = shortCostCurve.map((d) => d[1])
  const shortCostPiecewise = piecewise(interpolateNumber, shortCostCurveValues)
  const shortCostArray = quantize(shortCostPiecewise, 100)

  const nsims = 50
  const years = Array(horizon + shortDuration)
    .fill(0)
    .map((_, i) => i)
  const discount = years.map((y) => 1 / Math.pow(1 + discountRate / 100, y))

  const simulate = () => {
    let counter = 0
    let skip = 0
    let cost = Array(horizon + shortDuration).fill(0)
    while (counter < horizon) {
      if (counter >= switchingTime && switchingTimeActive) {
        cost[switchingTime] = longCostArrayForCalc[Math.min(switchingTime, 99)]
        counter = horizon
        skip = 1
      } else {
        cost[counter] = shortCostArray[Math.min(counter, 99)]
        let projectFailYear = projectFail()
        if (projectFailYear == 0) {
          counter += shortDuration
        } else {
          counter += projectFailYear
        }
      }
    }
    if ((counter >= horizon) & (skip == 0) && switchingTimeActive) {
      cost[counter] = longCostArrayForCalc[Math.min(counter, 99)]
    }
    const discountedCost = cost
      .map((c, i) => c * discount[i])
      .reduce((a, b) => a + b, 0)
    return { discountedCost: discountedCost }
  }

  const projectFail = () => {
    let counter = 1
    while (counter < shortDuration) {
      if (Math.random() < projectRisk / 100) {
        return counter
      } else {
        counter += 1
      }
    }
    return 0
  }

  const buyerFail = () => {
    let counter = 1
    while (counter < horizon) {
      if (Math.random() < buyerRisk) {
        return counter
      } else {
        counter += 1
      }
    }
    return 0
  }

  useEffect(() => {
    const sims = Array(nsims)
      .fill(0)
      .map((_) => simulate())
    const discountedCost =
      sims.map((o) => o.discountedCost).reduce((a, b) => a + b, 0) / nsims
    const standardDeviation = Math.sqrt(
      sims
        .map((o) => Math.pow(o.discountedCost - discountedCost, 2))
        .reduce((a, b) => a + b, 0) / nsims
    )
    setDiscountedCost(discountedCost)
    setStandardDeviation(standardDeviation)
  }, [
    shortCost,
    shortDuration,
    projectRisk,
    horizon,
    discountRate,
    switchingTime,
    switchingTimeActive,
    shortCostCurve,
    longCostArrayForCalc,
  ])

  return (
    <Box>
      <Box
        sx={{
          display: ['inline-block', 'inline-block', 'block'],
          fontSize: [3, 3, 3, 4],
          fontFamily: 'faux',
          letterSpacing: 'faux',
          mr: [2, 2, 0, 0],
          mt: [2, 2, 5, 6],
          pt: [1, 1, 0, 0],
        }}
      >
        If a temporary project now costs...
      </Box>
      <Box
        sx={{
          display: ['inline-block', 'inline-block', 'block'],
          fontSize: [4, 4, 6, 7],
          fontFamily: 'mono',
          letterSpacing: '0.02em',
          color: 'pink',
          mt: [0, 0, 2],
          mb: [1, 1, 2],
        }}
      >
        ${shortCostCurve[0][1].toFixed(0)}
        <Box
          sx={{
            display: 'inline-block',
            fontSize: [3, 3, 3, 4],
            fontFamily: 'faux',
            letterSpacing: 'faux',
            color: 'secondary',
            ml: [2],
          }}
        >
          per tCO₂
        </Box>
      </Box>
      <Box
        sx={{
          display: ['inline-block', 'inline-block', 'block'],
          fontSize: [3, 3, 3, 4],
          fontFamily: 'faux',
          letterSpacing: 'faux',
          mr: [2, 2, 0, 0],
        }}
      >
        you actually need to budget...
      </Box>
      <Box
        sx={{
          display: ['inline-block', 'inline-block', 'block'],
          fontSize: [4, 4, 6, 7],
          fontFamily: 'mono',
          letterSpacing: '0.02em',
          color: 'pink',
          my: [0, 0, 2],
        }}
      >
        ${discountedCost.toFixed(0)}
        <Box
          sx={{
            display: 'inline-block',
            mx: [2],
          }}
        >
          ±
        </Box>
        {standardDeviation.toFixed(0)}
        <Box
          sx={{
            display: 'inline-block',
            fontSize: [3, 3, 3, 4],
            fontFamily: 'faux',
            letterSpacing: 'faux',
            color: 'secondary',
            ml: [2],
          }}
        >
          per tCO₂
        </Box>
      </Box>
      <Box
        sx={{
          display: ['none', 'none', 'block'],
          fontSize: [3, 3, 3, 4],
          fontFamily: 'faux',
          letterSpacing: 'faux',
        }}
      >
        for permanent carbon removal.
      </Box>
    </Box>
  )
}

export default Cost
