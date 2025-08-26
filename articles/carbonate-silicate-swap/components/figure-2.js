import React, { useState, useMemo } from 'react'
import { Box, Flex } from 'theme-ui'
import {
  Chart,
  Plot,
  Ticks,
  TickLabels,
  Axis,
  AxisLabel,
  Line,
  Label,
} from '@carbonplan/charts'
import { Column, Filter, Row, Slider } from '@carbonplan/components'
import { Arrow } from '@carbonplan/icons'
import data from '../data/processed-data.json'
import { interpolateAtLimits } from './util/chart-interpolation'
import { curveCatmullRom } from 'd3-shape'

const xRange = [0.1, 60]
const yRange = [-20, 10]

const sx = {
  filterLabel: {
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
    fontSize: [2, 2, 2, 3],
    mt: [0],
    pb: [0],
  },
}

const Figure2 = () => {
  const [acidLevel, setAcidLevel] = useState({ low: true, hi: false })
  const [grainSizeIndex, setGrainSizeIndex] = useState(15)

  const figureData = useMemo(() => {
    if (!data) {
      return {
        basaltData: [[0]],
        calciteData: [[0]],
      }
    }

    try {
      const fertlevel = acidLevel.low ? 'low' : 'hi'

      const basaltData = data.removal.basalt[fertlevel] || []
      const calciteData = data.removal.calcite[fertlevel] || []

      return {
        basaltData,
        calciteData,
      }
    } catch (err) {
      console.error('Failed to extract data:', err)
      return {
        basaltData: [[0]],
        calciteData: [[0]],
      }
    }
  }, [acidLevel])

  if (!data) return null

  const basaltValues = figureData.basaltData[grainSizeIndex] || []
  const calciteValues = figureData.calciteData[grainSizeIndex] || []

  const basaltPlotData = interpolateAtLimits(
    interpolateAtLimits(
      data.arrays.dustrate.map((rate, i) => [rate, basaltValues[i] || 0]),
      xRange[0],
      xRange[1],
      'x'
    ),
    yRange[0],
    yRange[1],
    'y'
  )

  const calcitePlotData = interpolateAtLimits(
    interpolateAtLimits(
      data.arrays.dustrate.map((rate, i) => [rate, calciteValues[i] || 0]),
      xRange[0],
      xRange[1],
      'x'
    ),
    yRange[0],
    yRange[1],
    'y'
  )

  return (
    <>
      <Row columns={6} sx={{ mb: 3 }}>
        <Column start={1} width={[6, 2, 2, 2]}>
          <Box>
            <Box sx={{ ...sx.filterLabel }}>Soil Acidity</Box>
            <Filter
              values={acidLevel}
              labels={{ low: 'Low', hi: 'High' }}
              setValues={setAcidLevel}
            />
          </Box>
        </Column>
        <Column
          start={[1, 3, 3, 3]}
          width={[6, 4, 4, 4]}
          sx={{ mt: [2, 0, 0, 0] }}
        >
          <Box>
            <Box
              sx={{
                ...sx.filterLabel,
                mb: 1,
              }}
            >
              Grain Diameter
            </Box>
            <Flex sx={{ gap: 2 }}>
              <Slider
                value={grainSizeIndex}
                onChange={(e) => setGrainSizeIndex(parseInt(e.target.value))}
                min={0}
                max={data.arrays.dustrad.length - 1}
                step={1}
              />
              <Box
                sx={{
                  fontSize: [1, 1, 1, 2],
                  textAlign: 'right',
                  width: [70, 70, 70, 70],
                  fontFamily: 'mono',
                  letterSpacing: 'mono',
                }}
              >
                {(data.arrays.dustrad[grainSizeIndex] || 0) * 2} μm
              </Box>
            </Flex>
          </Box>
        </Column>
      </Row>
      <Box
        sx={{
          height: '400px',
          ml: [0, -7, -7, -7],
        }}
      >
        <Chart
          x={xRange}
          y={yRange}
          logx
          padding={{ left: 64, top: 0, right: 0 }}
        >
          <Ticks left bottom />
          <TickLabels left format={(value) => value.toFixed(0)} />
          <TickLabels bottom values={[0, 1, 10, 60]} />
          <Axis left bottom />
          <AxisLabel left align='right'>
            Emissions
          </AxisLabel>
          <AxisLabel left arrow={false} align='left'>
            <Arrow
              sx={{
                mr: 1,
                mb: '6px',
                width: 11,
                height: 11,
                transform: 'rotate(-45deg)',
              }}
            />
            Removals
          </AxisLabel>
          <AxisLabel left align='center' arrow={false} units='tCO₂ / ha / yr' />
          <AxisLabel bottom units='tCO₂ / ha / yr'>
            Application flux
          </AxisLabel>
          <Label
            x={1}
            y={yRange[0]}
            align='center'
            width={20}
            verticalAlign={'bottom'}
            color='primary'
            sx={{ mb: 2 }}
          >
            Common liming rates
          </Label>
          {basaltPlotData && basaltPlotData.length > 0 && (
            <Label
              x={basaltPlotData[Math.floor(basaltPlotData.length - 1)][0]}
              y={basaltPlotData[Math.floor(basaltPlotData.length - 1)][1]}
              align='left'
              width={20}
              verticalAlign={'bottom'}
              color='purple'
              sx={{ mb: 3 }}
            >
              Basalt
            </Label>
          )}
          {calcitePlotData && calcitePlotData.length > 0 && (
            <Label
              x={calcitePlotData[Math.floor(calcitePlotData.length - 1)][0]}
              y={calcitePlotData[Math.floor(calcitePlotData.length - 1)][1]}
              align='right'
              width={20}
              verticalAlign={'top'}
              color='grey'
            >
              Calcite
            </Label>
          )}
          <Plot>
            {figureData.basaltData.length > 1 && (
              <>
                <Line
                  data={basaltPlotData}
                  curve={curveCatmullRom}
                  sx={{ stroke: 'purple' }}
                  width={2}
                />
                <Line
                  data={calcitePlotData}
                  curve={curveCatmullRom}
                  sx={{ stroke: 'grey' }}
                  width={2}
                />
              </>
            )}
            <Line
              data={[
                [0, yRange[1]],
                [10, yRange[1]],
              ]}
              sx={{
                stroke: 'primary',
                strokeDasharray: '5,5',
                transform: 'translateY(98%)',
              }}
              width={2}
            />
            <Line
              data={[
                [xRange[0], 0],
                [xRange[1], 0],
              ]}
              sx={{ stroke: 'secondary', strokeWidth: 1 }}
              width={2}
            />
          </Plot>
        </Chart>
      </Box>
    </>
  )
}

export default Figure2
