import { Box } from 'theme-ui'
import {
  Axis,
  Chart,
  Grid,
  Plot,
  TickLabels,
  Ticks,
  Label,
  AxisLabel,
} from '@carbonplan/charts'

import Project from './project'
import data from './projects-data.json'
const YEARS = [
  2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
]
const TICKS = YEARS.filter((d, i) => i % 2 === 0).map((d) => d + 0.5)

const Summary = () => {
  return (
    <Box sx={{ height: 300 }}>
      <Chart x={[2012, 2025]} y={[16, -1]} padding={{ left: 0 }}>
        <Axis bottom />
        <AxisLabel bottom>Issuance years</AxisLabel>
        <Ticks bottom values={TICKS} />
        <TickLabels bottom values={TICKS} format={Math.floor} />
        <Grid vertical values={YEARS} />
        <Plot>
          {Object.keys(data).map((project, i) => (
            <g key={project}>
              <Project
                years={YEARS}
                key={project}
                project={project}
                y={(i + 0.25) * 4}
              />
            </g>
          ))}
        </Plot>
        {Object.keys(data).map((project, i) => (
          <Label
            key={project}
            x={0}
            y={(i + 0.25) * 4 - 1}
            sx={{
              mr: [4, 5, 5, 6],
              color: 'primary',
              mt: '-5px',
            }}
          >
            {project}
          </Label>
        ))}

        {/* {Object.keys(data).map((project, i) => (
          <Label
            key={project}
            x={2013}
            y={(i + 0.25) * 4}
            sx={{
              color: 'secondary',
              ml: 2,
              mt: '2px',
            }}
          >
            Issuance gap
          </Label>
        ))} */}
      </Chart>
    </Box>
  )
}
export default Summary
