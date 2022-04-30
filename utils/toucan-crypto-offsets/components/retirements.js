import { useEffect, useState } from 'react'
import { Box } from 'theme-ui'
import { format } from 'd3-format'
import {
  Chart,
  Ticks,
  TickLabels,
  Axis,
  AxisLabel,
  Bar,
  Plot,
  Line,
  Label,
  Grid,
} from '@carbonplan/charts'

// data from https://github.com/carbonplan/toucan-crypto-offsets/tree/main/data

const data = {
  2003: 880,
  2005: 1390062,
  2006: 4805854,
  2007: 752582,
  2008: 3099786,
  2009: 3821685,
  2010: 2704663,
  2011: 2864839,
  2012: 423235,
  2013: 1172559,
  2014: 170933,
  2015: 434080,
  2016: 12831,
  2017: 650,
  2018: 3,
}

const counts = Object.keys(data).map((k) => [parseInt(k), data[k]])

const Retirements = ({ name }) => {
  // const [counts, setCounts] = useState([])

  // useEffect(() => {
  //   fetch(
  //     'https://raw.githubusercontent.com/carbonplan/toucan-crypto-explainer/main/data/toucan_retirements_by_minimum_vintage.json?token=GHSAT0AAAAAABHMSV3JCUFKSGNL4TUKGKDGYSE22DQ'
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCounts(Object.keys(data).map((k) => [parseInt(k), data[k]]))
  //     })
  // }, [])

  const formatter = format('~s')

  return (
    <Box sx={{ width: '100%', height: ['275px', '350px', '350px', '350px'] }}>
      <Chart x={[2002, 2019]} y={[0, 5000000]} padding={{ left: 60 }}>
        <Ticks left />
        <Ticks
          bottom
          count={10}
          sx={{ display: ['none', 'inherit', 'inherit', 'inherit'] }}
        />
        <Ticks
          bottom
          count={5}
          sx={{ display: ['inherit', 'none', 'none', 'none'] }}
        />
        <TickLabels left format={formatter} />
        <TickLabels
          bottom
          count={10}
          sx={{ display: ['none', 'inherit', 'inherit', 'inherit'] }}
        />
        <TickLabels
          bottom
          count={5}
          sx={{ display: ['inherit', 'none', 'none', 'none'] }}
        />
        <Axis left bottom />
        <Grid
          vertical
          count={10}
          sx={{ display: ['none', 'inherit', 'inherit', 'inherit'] }}
        />
        <Grid
          vertical
          count={5}
          sx={{ display: ['inherit', 'none', 'none', 'none'] }}
        />
        <AxisLabel left align='left'>
          Credits
        </AxisLabel>
        <AxisLabel bottom>Earliest Vintage</AxisLabel>
        <Plot>
          <Bar width={0.7} data={counts} color={'grey'} />
          <Line
            data={[
              [2015.5, 10],
              [2015.5, 5000000],
            ]}
            color={'grey'}
            sx={{ strokeWidth: 1, strokeDasharray: 4 }}
          />
        </Plot>
        <Label x={2015.75} y={5000000} sx={{ color: 'grey' }}>
          Corsia Cutoff
        </Label>
      </Chart>
    </Box>
  )
}

export default Retirements
