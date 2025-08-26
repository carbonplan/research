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
import { Filter, Slider, Row, Column } from '@carbonplan/components'
import { Arrow } from '@carbonplan/icons'
import data from '../data/processed-data.json'
import { interpolateAtLimits } from './util/chart-interpolation'
import { curveCatmullRom } from 'd3-shape'

const xRange = [0.1, 40]
const yRange = [-15, 15]

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

const Figure3 = () => {
  const [acidLevel, setAcidLevel] = useState({ low: true, hi: false })
  const [grainSizeIndex, setGrainSizeIndex] = useState(10)
  const [transportDistanceIndex, setTransportDistanceIndex] = useState(5)

  const figureData = useMemo(() => {
    if (!data) {
      return {
        basaltRemoval: [],
        basaltEmissions: [],
        basaltNet: [],
        calciteRemoval: [],
        calciteEmissions: [],
        calciteNet: [],
      }
    }

    try {
      const fertlevel = acidLevel.low ? 'low' : 'hi'

      const basaltRemoval =
        data.removal.basalt[fertlevel]?.[grainSizeIndex] || []
      const calciteRemoval =
        data.removal.calcite[fertlevel]?.[grainSizeIndex] || []

      const basaltEmissionsRaw =
        data.emissions.basalt[fertlevel]?.[grainSizeIndex] || []
      const calciteEmissionsRaw =
        data.emissions.calcite[fertlevel]?.[grainSizeIndex] || []
      const basaltNetRemoval =
        data.netRemoval.basalt[fertlevel]?.[grainSizeIndex] || []
      const calciteNetRemoval =
        data.netRemoval.calcite[fertlevel]?.[grainSizeIndex] || []

      const basaltEmissions = basaltEmissionsRaw.map(
        (transportArray) => transportArray[transportDistanceIndex] || 0
      )
      const calciteEmissions = calciteEmissionsRaw.map(
        (transportArray) => transportArray[transportDistanceIndex] || 0
      )
      const basaltNet = basaltNetRemoval.map(
        (transportArray) => transportArray[transportDistanceIndex] || 0
      )
      const calciteNet = calciteNetRemoval.map(
        (transportArray) => transportArray[transportDistanceIndex] || 0
      )

      return {
        basaltRemoval,
        basaltEmissions,
        basaltNet,
        calciteRemoval,
        calciteEmissions,
        calciteNet,
      }
    } catch (err) {
      console.error('Failed to extract data:', err)
      return {
        basaltRemoval: [],
        basaltEmissions: [],
        basaltNet: [],
        calciteRemoval: [],
        calciteEmissions: [],
        calciteNet: [],
      }
    }
  }, [acidLevel, grainSizeIndex, transportDistanceIndex])

  if (!data) return null

  const processDataForChart = (values) => {
    const chartData = data.arrays.dustrate
      .map((rate, i) => [rate, values[i] || 0])
      .filter(([x]) => x >= xRange[0] && x <= xRange[1])

    return interpolateAtLimits(chartData, yRange[0], yRange[1], 'y')
  }

  const basaltRemovalData = processDataForChart(figureData.basaltRemoval)
  const basaltEmissionsData = processDataForChart(figureData.basaltEmissions)
  const basaltNetData = processDataForChart(figureData.basaltNet)

  const calciteRemovalData = processDataForChart(figureData.calciteRemoval)
  const calciteEmissionsData = processDataForChart(figureData.calciteEmissions)
  const calciteNetData = processDataForChart(figureData.calciteNet)

  const ChartComponent = ({
    title,
    color,
    removalData,
    emissionsData,
    netData,
    showAxis = true,
  }) => (
    <Box sx={{ position: 'relative' }}>
      <Box sx={{ height: '325px' }}>
        <Chart
          x={xRange}
          y={yRange}
          logx
          padding={{
            left: [64, showAxis ? 64 : 0, showAxis ? 64 : 0, showAxis ? 64 : 0],
            top: 0,
            bottom: 60,
            right: 30,
          }}
        >
          <Ticks bottom />
          <Ticks
            left
            sx={{
              display: ['block', showAxis ? 'block' : 'none'],
            }}
          />
          <TickLabels
            left
            format={(value) => value.toFixed(0)}
            sx={{
              display: ['block', showAxis ? 'block' : 'none'],
            }}
          />
          {showAxis && <TickLabels bottom />}

          <TickLabels bottom values={[0.1, 1, 10]} />
          <Axis left bottom />
          <AxisLabel
            left
            arrow={false}
            align='left'
            sx={{
              display: ['block', showAxis ? 'block' : 'none'],
            }}
          >
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
          <AxisLabel
            left
            align='right'
            sx={{
              display: ['block', showAxis ? 'block' : 'none'],
            }}
          >
            Emissions
          </AxisLabel>
          <AxisLabel
            left
            align='center'
            arrow={false}
            units='tCO₂ / ha'
            sx={{
              display: ['block', showAxis ? 'block' : 'none'],
            }}
          />

          <Plot>
            <Line
              data={[
                [xRange[0], 0],
                [xRange[1], 0],
              ]}
              sx={{ stroke: 'secondary', strokeWidth: 0.5 }}
            />
            {removalData.length > 0 && (
              <Line
                data={removalData}
                curve={curveCatmullRom}
                sx={{ stroke: 'secondary', strokeWidth: 2 }}
              />
            )}
            {emissionsData.length > 0 && (
              <Line
                data={emissionsData}
                curve={curveCatmullRom}
                sx={{
                  stroke: 'secondary',
                  strokeWidth: 2,
                }}
              />
            )}
            {netData.length > 0 && (
              <Line
                data={netData}
                curve={curveCatmullRom}
                sx={{ stroke: color, strokeWidth: 3 }}
              />
            )}
          </Plot>
          <Label
            x={emissionsData[Math.floor(emissionsData.length - 1)][0]}
            y={emissionsData[Math.floor(emissionsData.length - 1)][1]}
            align='right'
            width={20}
            verticalAlign={'bottom'}
            color='secondary'
            sx={{ mr: 2, bg: 'background' }}
          >
            Logistics
          </Label>
          <Label
            x={netData[Math.floor(netData.length - 1)][0]}
            y={netData[Math.floor(netData.length - 1)][1]}
            align={'left'}
            width={20}
            verticalAlign={
              netData[Math.floor(netData.length - 1)][1] > 0 ? 'top' : 'bottom'
            }
            color={color}
            sx={{
              ml: 2,
              bg: 'background',
            }}
          >
            Net
          </Label>
          <Label
            x={removalData[Math.floor(removalData.length - 1)][0]}
            y={removalData[Math.floor(removalData.length - 1)][1]}
            align='right'
            width={20}
            verticalAlign={
              removalData[Math.floor(removalData.length - 1)][1] > yRange[0]
                ? 'top'
                : 'bottom'
            }
            color='secondary'
            sx={{ mr: 3, bg: 'background' }}
          >
            Weathering
          </Label>
        </Chart>
      </Box>
      <Box
        sx={{
          ...sx.filterLabel,
          color,
          ml: [0, showAxis ? 7 : 0, showAxis ? 7 : 0, showAxis ? 7 : 0],
          position: 'absolute',
          bottom: 7,
          left: ['70px', 2, 2, 2],
        }}
      >
        {title}
      </Box>
    </Box>
  )

  return (
    <>
      <Box sx={{ mb: 3 }}>
        <Box sx={{ ...sx.filterLabel, mb: 1 }}>Soil Acidity</Box>
        <Box sx={{ mb: 3 }}>
          <Filter
            values={acidLevel}
            labels={{ low: 'Low', hi: 'High' }}
            setValues={setAcidLevel}
          />
        </Box>

        <Row columns={6}>
          <Column start={1} width={[3, 3, 3, 3]}>
            <Box>
              <Box sx={{ ...sx.filterLabel, mb: 2 }}>Grain Diameter</Box>
              <Flex sx={{ alignItems: 'center', gap: 2 }}>
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
                    textWrap: 'nowrap',
                  }}
                >
                  {(data.arrays.dustrad[grainSizeIndex] || 0) * 2} μm
                </Box>
              </Flex>
            </Box>
          </Column>
          <Column start={[4, 4, 4, 4]} width={[3, 3, 3, 3]}>
            <Box>
              <Box
                sx={{
                  ...sx.filterLabel,
                  mb: 2,
                }}
              >
                Transport Distance
              </Box>
              <Flex sx={{ alignItems: 'center', gap: 2 }}>
                <Slider
                  value={transportDistanceIndex}
                  onChange={(e) =>
                    setTransportDistanceIndex(parseInt(e.target.value))
                  }
                  min={0}
                  max={data.arrays.truckKm.length - 1}
                  step={1}
                />
                <Box
                  sx={{
                    fontSize: [1, 1, 1, 2],
                    textAlign: 'right',
                    width: [70, 70, 70, 70],
                    fontFamily: 'mono',
                    letterSpacing: 'mono',
                    textWrap: 'nowrap',
                  }}
                >
                  {data.arrays.truckKm[transportDistanceIndex] || 0} km
                </Box>
              </Flex>
            </Box>
          </Column>
        </Row>
      </Box>
      <Row columns={6}>
        <Column start={1} width={[6, 3, 3, 3]} sx={{ ml: [0, -7, -7, -7] }}>
          <ChartComponent
            title='Calcite'
            color='grey'
            removalData={calciteRemovalData}
            emissionsData={calciteEmissionsData}
            netData={calciteNetData}
          />
        </Column>
        <Column start={[1, 4, 4, 4]} width={[6, 3, 3, 3]}>
          <ChartComponent
            title='Basalt'
            color='purple'
            removalData={basaltRemovalData}
            emissionsData={basaltEmissionsData}
            netData={basaltNetData}
            showAxis={false}
          />
        </Column>
      </Row>
      <Chart>
        <AxisLabel bottom units='tCO₂ / ha / yr'>
          Application flux
        </AxisLabel>
      </Chart>
    </>
  )
}

export default Figure3
