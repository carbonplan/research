import { Box } from 'theme-ui'
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
import data from './data.json'
const YEARS = [
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
]

const Summary = () => {
  return (
    <Box sx={{ height: 400 }}>
      <Chart x={[2010, 2023]} y={[70, 0]} padding={{ left: 0 }}>
        <Grid vertical values={YEARS} />
        <Axis bottom />
        <Ticks bottom />
        <TickLabels bottom />
        <Plot>
          {Object.keys(data).map((project, i) => (
            <g key={project}>
              <Project
                years={YEARS}
                key={project}
                project={project}
                y={(i + 0.24) * 12}
              />
            </g>
          ))}
        </Plot>
        {Object.keys(data).map((project, i) => (
          <Label
            key={project}
            x={0}
            y={(i + 0.24) * 12 - 2.75}
            sx={{
              mr: [4, 5, 5, 6],
              color: 'primary',
              mt: '-5px',
            }}
          >
            {project}
          </Label>
        ))}
      </Chart>
    </Box>
  )
}
export default Summary
