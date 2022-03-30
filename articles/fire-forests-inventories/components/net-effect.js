import { useState, useEffect } from 'react'
import { Box } from 'theme-ui'
import { Row, Column, Filter } from '@carbonplan/components'
import {
  Chart,
  Circle,
  Plot,
  Line,
  Grid,
  Label,
  Ticks,
  Rect,
  AxisLabel,
  TickLabels,
} from '@carbonplan/charts'
import { data as netData } from './data/net-effect'
import { data as fireData } from './data/fire-emissions'
import { getOption, averageOverRange } from './utils'

const init = {
  fire: {
    GFED: true,
    CARB: false,
  },
  emissions: {
    holland: true,
    gonzalez: false,
    'AB-1504 2015': false,
    'AB-1504 2019': false,
  },
}

const Figure = () => {
  const [fireOptions, setFireOptions] = useState(init.fire)
  const [emissionsOptions, setEmissionsOptions] = useState(init.emissions)

  const [results, setResults] = useState({ fire: 0, residual: 0, net: 0 })

  useEffect(() => {
    const net = netData[getOption(emissionsOptions)]
    const fire = fireData[getOption(fireOptions)]
    const netValue = net.value

    const fireValue = [
      averageOverRange(fire, net.range),
      averageOverRange(fire, [2001, 2010]),
      averageOverRange(fire, [2011, 2020]),
    ]
    const residualValue = netValue - fireValue[0]

    setResults({
      fire: fireValue,
      residual: [residualValue, residualValue, residualValue],
      net: [
        net.value,
        residualValue + fireValue[1],
        residualValue + fireValue[2],
      ],
    })
  }, [fireOptions, emissionsOptions])

  const bar = (v) => [v - 0.25, v + 0.25]

  return (
    <>
      <Row columns={6}>
        <Column start={1} width={3}>
          <Heading>Net emissions dataset</Heading>
          <Filter values={emissionsOptions} setValues={setEmissionsOptions} />
        </Column>
        <Column start={4} width={3}>
          <Heading>Fire dataset</Heading>
          <Filter values={fireOptions} setValues={setFireOptions} />
        </Column>
      </Row>
      <Box sx={{ width: '100%', height: '270px', mt: [6] }}>
        <Chart
          x={[-1, 15]}
          y={[-60, 80]}
          padding={{ bottom: 20, right: 0, left: 60 }}
        >
          <AxisLabel left align='left'>
            CO₂ emissions&nbsp;
            <Box as='span' sx={{ textTransform: 'none', color: 'secondary' }}>
              MMT / year
            </Box>
          </AxisLabel>
          <Grid horizontal />
          <TickLabels left />
          <Ticks left />
          <Plot>
            <Rect color='red' x={bar(1)} y={[0, results.fire[0]]} />
            <Rect color='green' x={bar(2)} y={[0, results.residual[0]]} />
            <Rect color='yellow' x={bar(3)} y={[0, results.net[0]]} />
            <Rect color='red' x={bar(6)} y={[0, results.fire[1]]} />
            <Rect color='green' x={bar(7)} y={[0, results.residual[1]]} />
            <Rect color='yellow' x={bar(8)} y={[0, results.net[1]]} />
            <Rect color='red' x={bar(11)} y={[0, results.fire[2]]} />
            <Rect color='green' x={bar(12)} y={[0, results.residual[2]]} />
            <Rect color='yellow' x={bar(13)} y={[0, results.net[2]]} />
          </Plot>
          <Label x={1.25} y={-45}>
            {netData[getOption(emissionsOptions)].range.join('-')}
          </Label>
          <Label x={6.25} y={-45}>
            2001-2010
          </Label>
          <Label x={11.25} y={-45}>
            2011-2020
          </Label>
          <Label x={-0.5} y={75} sx={{ color: 'red' }}>
            Fire emissions
          </Label>
          <Label x={-0.5} y={65} sx={{ color: 'green' }}>
            Residual sink (inferred)
          </Label>
          <Label x={-0.5} y={55} sx={{ color: 'yellow' }}>
            Net emissions
          </Label>
        </Chart>
      </Box>
    </>
  )
}

const Heading = ({ children }) => {
  return (
    <Box
      sx={{
        fontFamily: 'heading',
        fontSize: [2, 2, 2, 3],
        letterSpacing: 'smallcaps',
        textTransform: 'uppercase',
        mb: [2],
      }}
    >
      {children}
    </Box>
  )
}

export default Figure
