import { useState } from 'react'
import { Box } from 'theme-ui'
import { mean } from 'd3-array'
import { format } from 'd3-format'
import { mix } from '@theme-ui/color'
import { Tag } from '@carbonplan/components'
import {
  Chart,
  Scatter,
  Plot,
  Grid,
  Ticks,
  TickLabels,
  AxisLabel,
} from '@carbonplan/charts'
import { data } from '../data'

const categoryToColor = {
  dac: 'purple',
  mineralization: 'grey',
  ocean: 'teal',
  biomass: 'yellow',
  soil: 'orange',
  forests: 'green',
}

const categories = [
  'dac',
  'mineralization',
  'ocean',
  'biomass',
  'soil',
  'forests',
]

const projects = data.projects
  .map((d) => {
    return {
      source: d.source,
      category: d.tags[0],
      volume: Math.max(Math.min(d.metrics[1].value, 1000000), 10),
      price: d.metrics[5].value,
      rating: parseInt(d.rating),
    }
  })
  .filter((d) => {
    return (
      ['STRP00', 'STRP01'].includes(d.source) &&
      d.price !== 'N/A' &&
      d.price !== '$1M' &&
      d.rating >= 2
    )
  })

const initSource = 'STRP01'

const Price = () => {
  const [source, setSource] = useState(initSource)

  const toggle = (key) => {
    setSource(key)
  }
  return (
    <Box>
      <Box
        sx={{
          fontFamily: 'heading',
          fontSize: [2, 2, 2, 3],
          letterSpacing: 'smallcaps',
          textTransform: 'uppercase',
          mb: [2, 2, 2, 3],
        }}
      >
        Source
      </Box>
      <Box sx={{ mb: [4, 4, 4, 5] }}>
        <Tag
          sx={{ mr: [3], mb: [1] }}
          onClick={() => toggle('STRP00')}
          value={source === 'STRP00'}
        >
          Stripe 2020
        </Tag>
        <Tag
          sx={{ mr: [3], mb: [1] }}
          onClick={() => toggle('STRP01')}
          value={source === 'STRP01'}
        >
          Stripe 2021
        </Tag>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: ['275px', '275px', '275px', '350px'],
          my: [4, 4, 4, 5],
        }}
      >
        <Chart log x={[10, 1000000]} y={[1, 20000]}>
          <Grid vertical horizontal count={4} />
          <Ticks left bottom count={4} />
          <TickLabels left bottom count={4} format={format('~s')} />
          <AxisLabel left align='left'>
            Price&nbsp;
            <Box as='span' sx={{ textTransform: 'none', color: 'secondary' }}>
              net $/tCO₂
            </Box>
          </AxisLabel>
          <AxisLabel bottom>
            Volume&nbsp;
            <Box as='span' sx={{ textTransform: 'none', color: 'secondary' }}>
              tCO₂
            </Box>
          </AxisLabel>
          <Plot>
            {categories.map((category, i) => {
              return (
                <Scatter
                  key={i}
                  data={projects
                    .filter((d) => d.source !== source)
                    .filter((d) => d.category === category)
                    .map((d) => [d.volume, d.price])}
                  color={mix(categoryToColor[category], 'background', 0.1)}
                />
              )
            })}
            {categories.map((category, i) => {
              return (
                <Scatter
                  key={i}
                  data={projects
                    .filter((d) => d.source === source)
                    .filter((d) => d.category === category)
                    .map((d) => [d.volume, d.price])}
                  color={categoryToColor[category]}
                />
              )
            })}
          </Plot>
        </Chart>
      </Box>
    </Box>
  )
}

export default Price
