import { Box, Flex } from 'theme-ui'
import {
  Axis,
  Chart,
  Grid,
  Plot,
  TickLabels,
  Ticks,
  Label,
} from '@carbonplan/charts'

import Project from './project'

const YEARS = [
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
]

const Summary = () => {
  return (
    <Box sx={{ height: 200 }}>
      <Chart x={[2010, 2023]} y={[10, 0]} padding={{ top: 20, left: 0 }}>
        <Grid vertical values={YEARS} />
        <Axis bottom />
        <Ticks bottom />
        <TickLabels bottom />
        <Grid
          vertical
          values={[2012]}
          sx={{ borderColor: 'primary', borderStyle: 'dashed' }}
        />
        <Grid
          vertical
          values={[2022]}
          sx={{ borderColor: 'primary', borderStyle: 'dashed' }}
        />

        <Plot>
          <Project years={YEARS} project={'CAR516'} y={3} />
        </Plot>

        <Label x={2012} y={0} sx={{ ml: 2, maxWidth: '40%', color: 'primary' }}>
          <Box as='span' sx={{ color: 'green' }}>
            Crediting stops,
          </Box>{' '}
          <Box as='span' sx={{ color: 'blue' }}>
            gas collection continues
          </Box>{' '}
        </Label>

        <Label x={2022} y={0} align='right' sx={{ mr: 2, color: 'primary' }}>
          <Flex sx={{ justifyContent: 'flex-end' }}>
            <Box sx={{ maxWidth: ['80%', 'inherit', 'inherit', 'inherit'] }}>
              <Box as='span' sx={{ color: 'yellow' }}>
                non-additional <br />
                crediting begins
              </Box>{' '}
            </Box>
          </Flex>
        </Label>

        <Label
          x={2010}
          y={3}
          sx={{ color: 'background', ml: 2 }}
          height={2}
          verticalAlign='middle'
        >
          Crediting
        </Label>
        <Label
          x={2010}
          y={6}
          sx={{ color: 'background', ml: 2 }}
          height={2}
          verticalAlign='middle'
        >
          Gas collection operation
        </Label>
      </Chart>
    </Box>
  )
}
export default Summary
