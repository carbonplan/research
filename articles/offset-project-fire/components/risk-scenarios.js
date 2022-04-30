import { useState, useEffect } from 'react'
import { Box } from 'theme-ui'
import { Row, Column } from '@carbonplan/components'
import { randomBinomial } from 'd3-random'
import Chart from './utils/chart'

const Radio = ({ value, label, current, set }) => {
  const handleClick = () => {
    set(value)
  }

  return (
    <Box
      onClick={handleClick}
      sx={{
        cursor: 'pointer',
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
      <Box
        id='text'
        sx={{
          display: 'inline-block',
          fontSize: [3, 3, 3, 4],
          ml: [3],
          opacity: value == current ? 1 : 0.3,
          transition: '0.2s',
        }}
      >
        {label}
      </Box>
    </Box>
  )
}

const RiskScenarios = () => {
  const [risk, setRisk] = useState(0.25)
  const [mortality, setMortality] = useState(0.5)
  const [data, setData] = useState(null)
  const buffer = 0.11

  useEffect(() => {
    const cumsum = (sum) => (value) => (sum += value)

    let combined = []

    for (let i = 0; i < 10; i++) {
      const values = Array.from({ length: 81 }, randomBinomial(1, risk))
      const transformed = values
        .map((d) => d * buffer * mortality)
        .map(cumsum(0))
        .map((d) => Math.min(1, d))
      const packed = transformed.map((y, x) => [2020 + x, y])
      combined.push(packed)
    }

    setData(combined)
  }, [risk, mortality])

  return (
    <Box>
      <Row
        columns={[6]}
        sx={{
          my: [3],
        }}
      >
        <Column start={[1]} width={[6, 3, 3, 3]}>
          <Box
            sx={{
              fontSize: [3, 3, 3, 4],
              fontFamily: 'heading',
              letterSpacing: 'smallcaps',
              textTransform: 'uppercase',
              color: 'red',
            }}
          >
            Carbon loss
          </Box>
          <Box
            sx={{
              fontSize: [3, 3, 3, 4],
              fontFamily: 'faux',
              letterSpacing: 'faux',
              lineHeight: '1.2',
              my: [2, 3, 3],
            }}
          >
            What fraction of the carbon is lost in an event like this?
          </Box>
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
        </Column>
        <Column
          start={[1, 4, 4, 4]}
          width={[6, 3, 3, 3]}
          sx={{ mt: [4, 0, 0, 0] }}
        >
          <Box
            sx={{
              fontSize: [3, 3, 3, 4],
              fontFamily: 'heading',
              letterSpacing: 'smallcaps',
              textTransform: 'uppercase',
              color: 'red',
            }}
          >
            Frequency
          </Box>
          <Box
            sx={{
              fontSize: [3, 3, 3, 4],
              fontFamily: 'faux',
              letterSpacing: 'faux',
              lineHeight: '1.2',
              my: [2, 3, 3],
            }}
          >
            How often is an event like this likely to occur?
          </Box>
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
        </Column>
      </Row>
      <Box
        sx={{
          mt: [4],
          mb: [3],
        }}
      >
        <Chart data={data} />
      </Box>
    </Box>
  )
}

export default RiskScenarios
