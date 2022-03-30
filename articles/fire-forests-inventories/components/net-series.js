import { useState, useEffect } from 'react'
import { Box } from 'theme-ui'
import { Row, Column, Filter } from '@carbonplan/components'
import {
  Chart,
  Circle,
  Plot,
  Line,
  Scatter,
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

const fireOptions = ['GFED', 'CARB']
const emissionsOptions = Object.keys(netData)
//const years = Array(8).fill(0).map((_,i) => i + 2005)
const years = Array(13)
  .fill(0)
  .map((_, i) => i + 2000)

const Figure = () => {
  let lineData = []

  for (let i = 0; i < emissionsOptions.length; i++) {
    for (let j = 0; j < fireOptions.length; j++) {
      let data = []
      for (let k = 0; k < years.length; k++) {
        const net = netData[emissionsOptions[i]]
        const fire = fireData[fireOptions[j]]
        const residual = net.value - averageOverRange(fire, net.range)
        const result =
          residual + averageOverRange(fire, [years[k], years[k] + 9])
        data.push([years[k] + 9, result])
      }
      lineData.push(data)
    }
  }

  return (
    <Box sx={{ width: '100%', height: '300px' }}>
      <Chart x={[2008, 2022]} y={[-60, 80]}>
        <AxisLabel left align='left'>
          Net CO₂ emissions&nbsp;
          <Box as='span' sx={{ textTransform: 'none', color: 'secondary' }}>
            MMT / year
          </Box>
        </AxisLabel>
        <AxisLabel bottom align='right'>
          Year
        </AxisLabel>
        <Grid horizontal vertical />
        <TickLabels left />
        <Ticks left />
        <TickLabels bottom />
        <Ticks bottom />

        <Plot>
          <Line
            data={[
              [1999, 0],
              [2022, 0],
            ]}
            color='secondary'
            width={2}
          />
          {lineData.map((d, i) => (
            <Line key={i} data={d} color='yellow' width={2} />
          ))}
        </Plot>
      </Chart>
    </Box>
  )
}

export default Figure
