import { Box, Divider } from 'theme-ui'
import { useState, useEffect } from 'react'
import { piecewise, quantize, interpolateNumber } from 'd3-interpolate'
import { Row, Column, Link } from '@carbonplan/components'
import Slider from './controls/slider'
import Curve from './controls/curve'
import Timeline from './timeline'
import Cost from './cost'

const Calculator = () => {
  const initOptions = {
    discountRate: 3,
    shortDuration: 10,
    projectRisk: 10,
    switchingTime: 50,
    switchingTimeActive: true,
    horizon: 1000,
    shortCostCurve: [
      [0, 20],
      [20, 20],
      [40, 20],
      [60, 20],
      [80, 20],
      [100, 20],
    ],
    longCostCurve: [
      [0, 500],
      [20, 500],
      [40, 500],
      [60, 500],
      [80, 500],
      [100, 500],
    ],
    longCostArray: [],
    longCostArrayForCalc: [],
  }

  const [options, setOptions] = useState(initOptions)

  useEffect(() => {
    const { shortDuration, longCostCurve } = options

    const longCostCurveValues = longCostCurve.map((d) => d[1])
    const longCostPiecewise = piecewise(interpolateNumber, longCostCurveValues)
    const longCostArray = quantize(longCostPiecewise, 100)
    set('longCostArray')(longCostArray)
  }, [options['shortDuration'], options['longCostCurve']])

  // update a copy of the long cost array only when switching
  // time is active to prevent recalc when switching time is off
  useEffect(() => {
    if (options['switchingTimeActive'])
      set('longCostArrayForCalc')(options['longCostArray'])
  }, [options['longCostArray']])

  const set = (label) => {
    const setValue = (value) => {
      setOptions((options) => {
        return { ...options, [label]: value }
      })
    }
    return setValue
  }

  const get = (label) => {
    return options[label]
  }

  const longCostDisplay = () => {
    const { switchingTime, switchingTimeActive, longCostCurve, longCostArray } =
      options
    if (switchingTimeActive && longCostArray.length > 0) {
      return longCostArray[Math.max(switchingTime - 1, 0)]
    } else {
      return longCostCurve[0][1]
    }
  }

  const shortCostDisplay = () => {
    return get('shortCostCurve')[0][1]
  }

  return (
    <Box>
      <Box
        sx={{
          position: 'sticky',
          top: '55px',
          my: [3],
          pointerEvents: 'none',
          zIndex: [100],
          ml: ['-16px', '-16px', '0px'],
          pl: ['16px', '16px', '0px'],
        }}
      >
        <Box
          sx={{
            borderStyle: 'solid',
            borderColor: 'muted',
            borderWidth: '0px',
            borderBottomWidth: '1px',
            ml: ['-1px'],
            mb: [0, 0, 4],
            pb: [3],
            pt: [3],
            backgroundColor: 'background',
            display: ['none', 'none', 'inherit'],
          }}
        >
          <Timeline options={options} />
        </Box>
        <Row
          columns={[6, 6, 10, 10]}
          sx={{
            backgroundColor: ['background', 'background', 'transparent'],
            pb: [3, 3, 0],
            borderStyle: 'solid',
            borderColor: 'muted',
            borderWidth: '0px',
            borderBottomWidth: ['1px', '1px', '0px'],
            borderTopWidth: ['1px', '1px', '0px'],
          }}
        >
          <Column start={[1, 1, 7, 7]} width={[6, 6, 4, 4]}>
            <Cost {...options} />
          </Column>
        </Row>
      </Box>
      <Box>
        <Row
          columns={[6, 6, 10, 10]}
          sx={{
            zIndex: [-1],
          }}
        >
          <Column
            start={[1, 1, 1, 1]}
            width={[6, 6, 5, 5]}
            sx={{ position: 'relative' }}
          >
            <Box
              sx={{
                position: 'relative',
                top: ['0px', '0px', '-296px', '-378px'],
                marginBottom: ['0px', '0px', '-264px', '-264px'],
              }}
            >
              <Slider
                name='project duration'
                description='How long does a single temporary project last?'
                units='years'
                value={get('shortDuration')}
                setValue={set('shortDuration')}
                min={1}
                max={100}
                step={1}
              />
              <Slider
                name='switching time'
                description='When do we switch from paying for repeated, temporary projects to paying once for permanent storage?'
                units='years'
                value={get('switchingTime')}
                setValue={set('switchingTime')}
                min={0}
                max={100}
                step={1}
                optional={true}
                setOptional={set('switchingTimeActive')}
              />
              <Slider
                name='discount rate'
                description='What is the rate for discounting future costs? Higher discount rates reduce total costs.'
                units='percent'
                value={get('discountRate')}
                setValue={set('discountRate')}
                min={0}
                max={10}
                step={0.1}
              />
              <Slider
                name='project risk'
                description='What is the risk each year that a temporary project fails? Project failure triggers paying for a new project.'
                units='per year'
                value={get('projectRisk')}
                setValue={set('projectRisk')}
                min={0}
                max={10}
                step={0.1}
              />
              <Curve
                name='temporary cost'
                description='What is the cost of temporary carbon removal over time? '
                units='$/tCO₂ (initial)'
                value={get('shortCostCurve')}
                setValue={set('shortCostCurve')}
                displayMethod={shortCostDisplay()}
                scales={{ x: [0, 100], y: [0, 100] }}
              />
              <Curve
                name='permanent cost'
                description='What is the cost of permanent carbon removal over time?'
                units={
                  options['switchingTimeActive']
                    ? '$/tCO₂ (switch time)'
                    : '$/tCO₂ (initial)'
                }
                value={get('longCostCurve')}
                setValue={set('longCostCurve')}
                displayMethod={longCostDisplay()}
                scales={{ x: [0, 100], y: [0, 1000] }}
              />
            </Box>
          </Column>
        </Row>
        <Row columns={[6, 6, 10, 10]} sx={{ mb: [0], mt: [2, 3, -4, -8] }}>
          <Column start={[1, 1, 1, 1]} width={[6, 6, 5, 5]}>
            <Divider />
            <Box as='h2' variant='styles.h2'>
              Methods
            </Box>
            <Box as='p' variant='styles.p'>
              We model a decision-maker seeking to achieve permanent climate
              benefits, whether by paying directly for permanent CO₂ removal or
              by sequentially renewing temporary carbon removal projects over a
              1000-year period. We assume that temporary projects are renewed at
              the end of each project period. At any point, the decision-maker
              can switch to a permanent carbon removal alternative and stop
              purchasing renewals (or never, if this option is turned off).
            </Box>
            <Box as='p' variant='styles.p'>
              If project risk is greater than 0%, each project has a probability
              of failing each year according to an independent Bernoulli trial,
              and in the event of a failure, another temporary project is
              immediately purchased.
            </Box>
            <Box as='p' variant='styles.p'>
              We calculate the amount that must be budgeted to sustain the
              temporary removals over time, including the cost of the eventual
              permanent solution if and whenever the switch is made. All future
              costs are discounted using the specified discount rate and
              reported in net present value terms to compare with the upfront
              cost of the temporary carbon removal project. The model is
              deterministic except for the stochastic project failure. For every
              parameter setting, we run the model 50 times and report the mean
              and standard deviation.
            </Box>
            <Box as='p' variant='styles.p'>
              For more details, read our{' '}
              <Link href={'/research/permanence-calculator-explainer'}>
                article
              </Link>{' '}
              on this calculator.
            </Box>
            <Box as='h2' variant='styles.h2'>
              Support
            </Box>
            <Box as='p' variant='styles.p'>
              This work was generously funded by the ClimateWorks Foundation.
            </Box>
          </Column>
        </Row>
      </Box>
    </Box>
  )
}

export default Calculator
