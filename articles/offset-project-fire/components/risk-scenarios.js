import { useState, useEffect } from 'react'
import { Box, Text, Grid, Divider } from 'theme-ui'
import Chart from './chart'
const random = require('d3-random')

const Radio = ({ value, label, current, set }) => {
  const handleClick = () => {
    set(value)
  }

  return (
    <Box
      onClick={handleClick}
      sx={{
        cursor: 'pointer',
        width: '250px',
        '&:hover > #box > #circle1': {
          opacity: 1,
        },
        '&:hover > #box > #circle2': {
          opacity: 1,
        },
        '&:hover > #text': {
          opacity: 1,
        },
      }}
    >
      <Box
        id='box'
        sx={{
          position: 'relative',
          display: 'inline-block',
          verticalAlign: 'middle',
          width: '22px',
          height: '22px',
          my: [1],
        }}
      >
        <Box
          id='circle1'
          sx={{
            position: 'absolute',
            bg: 'red',
            width: '22px',
            height: '22px',
            borderRadius: '11px',
            opacity: value == current ? 1 : 0.3,
            transition: '0.2s',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bg: 'background',
            left: '2px',
            top: '2px',
            width: '18px',
            height: '18px',
            borderRadius: '9px',
            opacity: 1,
            transition: '0.2s',
          }}
        />
        <Box
          id='circle2'
          sx={{
            position: 'absolute',
            bg: 'red',
            left: '6px',
            top: '6px',
            width: '10px',
            height: '10px',
            borderRadius: '5px',
            opacity: value == current ? 1 : 0.3,
            transition: '0.2s',
          }}
        />
      </Box>
      <Text
        id='text'
        sx={{
          display: 'inline-block',
          ml: [3],
          opacity: value == current ? 1 : 0.3,
          transition: '0.2s',
        }}
      >
        {label}
      </Text>
    </Box>
  )
}

const RiskScenarios = () => {
  const [risk, setRisk] = useState(0.25)
  const [mortality, setMortality] = useState(0.5)
  const [data, setData] = useState(null)
  const [chartWidth, setChartWidth] = useState(550)
  const buffer = 0.11

  useEffect(() => {
    const cumsum = (sum) => (value) => (sum += value)

    let combined = []

    for (let i = 0; i < 10; i++) {
      const values = Array.from({ length: 81 }, random.randomBinomial(1, risk))
      const transformed = values
        .map((d) => d * buffer * mortality)
        .map(cumsum(0))
        .map((d) => Math.min(1, d))
      const packed = transformed.map((y, x) => {
        return {
          x: 2020 + x,
          y: y,
          i: i,
        }
      })
      combined.push(packed)
    }

    setData(combined.flat())
  }, [risk, mortality])

  useEffect(() => {
    if (!window.matchMedia('(min-width: 640px)').matches) {
      console.log('here')
      setChartWidth(300)
    }
    if (!window.matchMedia('(min-width: 400px)').matches) {
      console.log('here')
      setChartWidth(200)
    }
    if (!window.matchMedia('(min-width: 375px)').matches) {
      console.log('here')
      setChartWidth(175)
    }
  }, [])

  return (
    <Box
      sx={{
        fontSize: [3],
        my: [5],
      }}
    >
      <Divider />
      <Grid
        columns={[1, 2, 2]}
        sx={{
          my: [3],
        }}
      >
        <Box>
          <Text
            sx={{
              fontSize: [3],
              fontFamily: 'heading',
              letterSpacing: 'smallcaps',
              textTransform: 'uppercase',
              color: 'red',
            }}
          >
            Carbon loss
          </Text>
          <Text
            sx={{
              fontSize: [3],
              fontFamily: 'faux',
              letterSpacing: 'faux',
              lineHeight: '1.2',
              my: [2, 3, 3],
            }}
          >
            What fraction of the carbon is lost in an event like this?
          </Text>
          <Radio
            value={0.2}
            label={'20% (low)'}
            current={mortality}
            set={setMortality}
          />
          <Radio
            value={0.5}
            label={'50% (moderate)'}
            current={mortality}
            set={setMortality}
          />
          <Radio
            value={0.8}
            label={'80% (high)'}
            current={mortality}
            set={setMortality}
          />
        </Box>
        <Box>
          <Text
            sx={{
              fontSize: [3],
              fontFamily: 'heading',
              letterSpacing: 'smallcaps',
              textTransform: 'uppercase',
              color: 'red',
            }}
          >
            Frequency
          </Text>
          <Text
            sx={{
              fontSize: [3],
              fontFamily: 'faux',
              letterSpacing: 'faux',
              lineHeight: '1.2',
              my: [2, 3, 3],
            }}
          >
            How often is an event like this likely to occur?
          </Text>
          <Radio
            value={0.1}
            label={'10% (every ten years)'}
            current={risk}
            set={setRisk}
          />
          <Radio
            value={0.25}
            label={'25% (every four years)'}
            current={risk}
            set={setRisk}
          />
          <Radio
            value={0.5}
            label={'50% (every other year)'}
            current={risk}
            set={setRisk}
          />
        </Box>
      </Grid>
      <Box
        sx={{
          mt: [4],
          mb: [3],
        }}
      >
        <Chart data={data} width={chartWidth} />
      </Box>
      <Divider />
      <Text
        sx={{
          fontSize: [2],
          color: 'secondary',
          my: [3],
        }}
      >
        FIGURE 2{' '}
        <Text sx={{ display: 'inline-block', color: 'primary' }}>/</Text> A
        simple stochastic model predicts buffer pool depletion as a function of
        the severity and frequency of fires. Individual{' '}
        <Text sx={{ display: 'inline-block', color: 'red' }}>red</Text> lines
        show different simulations. The dashed line at 20% shows the approximate
        fraction of the buffer pool for fire.
      </Text>
    </Box>
  )
}

export default RiskScenarios
