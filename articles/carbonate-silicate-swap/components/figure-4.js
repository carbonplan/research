import React, { useState, useMemo } from 'react'
import { Box, Flex, useThemeUI } from 'theme-ui'
import {
  Chart,
  Plot,
  Ticks,
  TickLabels,
  Axis,
  AxisLabel,
  Area,
  Line,
  Label,
} from '@carbonplan/charts'
import { Filter } from '@carbonplan/components'
import data from '../data/processed-data.json'
import { mix } from '@theme-ui/color'

const xRange = [0.1, 60]
const yRange = [2, 600]

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

const extractBreakevenPoints = (rawData, acidityIdx, dustrad, dustrate) => {
  const points = []
  const radLen = dustrad.length
  const rateLen = dustrate.length

  for (let r = 0; r < radLen; r++) {
    for (let a = 0; a < rateLen - 1; a++) {
      const idx1 = acidityIdx * (radLen * rateLen) + r * rateLen + a
      const idx2 = idx1 + 1

      const val1 = Number(rawData.data[idx1] || 0)
      const val2 = Number(rawData.data[idx2] || 0)

      // Check for zero crossing (sign change)
      if ((val1 > 0 && val2 < 0) || (val1 < 0 && val2 > 0)) {
        const t = Math.abs(val1) / (Math.abs(val1) + Math.abs(val2))
        const breakEvenRate = dustrate[a] + t * (dustrate[a + 1] - dustrate[a])
        points.push([breakEvenRate, dustrad[r] * 2])
      }
    }
  }
  return points
}

const Figure4 = () => {
  const [acidLevel, setAcidLevel] = useState({ low: true, hi: false })
  const [transportCase, setTransportCase] = useState({
    case0: false,
    case1: true,
  })

  const figureData = useMemo(() => {
    if (!data) {
      // Provide fallback data when no data is available
      const fallbackContour = [
        [xRange[0], yRange[0]],
        [xRange[1], yRange[0]],
      ]
      const fallbackArea = fallbackContour.map(([x, y]) => [x, y, 100])
      return {
        conservativeContour: fallbackContour,
        simpleSubtractionContour: fallbackContour,
        conservativeArea: fallbackArea,
        simpleSubtractionArea: fallbackArea,
        fullAreaDashes: [],
      }
    }

    try {
      const acidityIdx = acidLevel.low ? 1 : 0
      const selectedTransportCase = transportCase.case0 ? 'case0' : 'case1'
      const { dustrad, dustrate } = data.arrays

      const conservativeData = data.contours.conservative[selectedTransportCase]
      const simpleSubtractionData =
        data.contours.simpleSubtraction[selectedTransportCase]

      if (!conservativeData || !simpleSubtractionData) {
        // Provide fallback data when specific transport case data is missing
        const fallbackContour = [
          [xRange[0], yRange[0]],
          [xRange[1], yRange[0]],
        ]
        const fallbackArea = fallbackContour.map(([x, y]) => [x, y, 100])
        return {
          conservativeContour: fallbackContour,
          simpleSubtractionContour: fallbackContour,
          conservativeArea: fallbackArea,
          simpleSubtractionArea: fallbackArea,
          fullAreaDashes: [],
        }
      }

      const conservativeContour = extractBreakevenPoints(
        conservativeData,
        acidityIdx,
        dustrad,
        dustrate
      )
      let simpleSubtractionContour = extractBreakevenPoints(
        simpleSubtractionData,
        acidityIdx,
        dustrad,
        dustrate
      )

      conservativeContour.sort((a, b) => a[0] - b[0])
      simpleSubtractionContour.sort((a, b) => a[0] - b[0])

      const conservativeArea = [
        ...conservativeContour.map(([x, y]) => [x, yRange[0], y]),
        [
          xRange[1],
          yRange[0],
          conservativeContour[conservativeContour.length - 1]?.[1] || yRange[1],
        ],
      ]

      const simpleSubtractionArea = [
        ...simpleSubtractionContour.map(([x, y]) => [x, yRange[0], y]),
        [
          xRange[1],
          yRange[0],
          simpleSubtractionContour[simpleSubtractionContour.length - 1]?.[1] ||
            yRange[1],
        ],
      ]

      const fullAreaDashes = acidLevel.low
        ? []
        : [
            [xRange[0], yRange[0], yRange[1]],
            [xRange[1], yRange[0], yRange[1]],
          ]

      return {
        conservativeContour,
        simpleSubtractionContour,
        conservativeArea,
        simpleSubtractionArea,
        fullAreaDashes,
      }
    } catch (err) {
      console.error('Failed to extract contour data:', err)
    }
  }, [acidLevel, transportCase])

  if (!data) return null

  const getLabelLines = () => {
    if (acidLevel.low && transportCase.case0) {
      return (
        <Line
          data={[
            [3.3, 280],
            [4.3, 280],
          ]}
          sx={{ stroke: 'primary', strokeWidth: 1 }}
        />
      )
    } else if (acidLevel.hi && transportCase.case0) {
      return (
        <Line
          data={[
            [0.85, 14],
            [0.85, 45],
            [0.8, 45],
          ]}
          sx={{ stroke: 'primary', strokeWidth: 1 }}
        />
      )
    } else if (acidLevel.low && transportCase.case1) {
      return (
        <Line
          data={[
            [1.1, 280],
            [2.7, 280],
          ]}
          sx={{ stroke: 'primary', strokeWidth: 1 }}
        />
      )
    }
    return null
  }

  const getLabels = () => {
    if (acidLevel.low && transportCase.case0) {
      return (
        <>
          <Label x={3} y={310} sx={{ color: 'primary' }} align='right'>
            climate benefit <br /> (simple subtraction)
          </Label>
          <Label
            x={14}
            y={200}
            sx={{ color: 'primary' }}
            align='center'
            width={16}
          >
            climate benefit <br /> (both)
          </Label>
          <Label
            x={0.1}
            y={450}
            sx={{ color: 'primary' }}
            align='center'
            width={1}
          >
            no climate <br /> benefit
          </Label>
        </>
      )
    } else if (acidLevel.low && transportCase.case1) {
      return (
        <>
          <Label
            x={0.5}
            y={310}
            align='center'
            width={1}
            sx={{
              color: 'primary',
              textAlign: ['center', 'right'],
            }}
          >
            climate benefit <br /> (simple subtraction)
          </Label>
          <Label
            x={14}
            y={200}
            sx={{ color: 'primary' }}
            align='center'
            width={16}
          >
            climate benefit <br /> (both)
          </Label>
          <Label
            x={0.1}
            y={450}
            sx={{ color: 'primary' }}
            align='center'
            width={1}
          >
            no climate <br /> benefit
          </Label>
        </>
      )
    } else if (acidLevel.hi && transportCase.case0) {
      return (
        <>
          <Label
            x={0.2}
            y={450}
            sx={{ color: 'primary' }}
            align='center'
            width={1.8}
          >
            climate benefit <br /> (simple subtraction)
          </Label>
          <Label
            x={14}
            y={200}
            sx={{ color: 'primary' }}
            align='center'
            width={16}
          >
            climate benefit <br /> (both)
          </Label>
          <Label x={0.75} y={75} sx={{ color: 'primary' }} align='right'>
            no climate <br /> benefit
          </Label>
        </>
      )
    } else if (acidLevel.hi && transportCase.case1) {
      return (
        <>
          <Label
            x={0.2}
            y={450}
            sx={{ color: 'primary' }}
            align='center'
            width={1.8}
          >
            climate benefit <br /> (simple subtraction)
          </Label>
          <Label
            x={14}
            y={200}
            sx={{ color: 'primary' }}
            align='center'
            width={16}
          >
            climate benefit <br /> (both)
          </Label>
        </>
      )
    }
  }

  return (
    <>
      <Flex sx={{ gap: 5, mb: 3 }}>
        <Box>
          <Box sx={{ ...sx.filterLabel }}>Soil Acidity</Box>
          <Filter
            values={acidLevel}
            labels={{ low: 'Low', hi: 'High' }}
            setValues={setAcidLevel}
          />
        </Box>

        <Box>
          <Box sx={{ ...sx.filterLabel }}>Transport Distance</Box>
          <Filter
            values={transportCase}
            labels={{ case0: 'Equal', case1: 'Reduced' }}
            setValues={setTransportCase}
            sx={{
              mr: -2,
            }}
          />
        </Box>
      </Flex>
      <Box sx={{ mb: 3 }}>
        <Box sx={{ ...sx.filterLabel }}>Accounting methods</Box>
        <Flex
          sx={{
            flexWrap: 'wrap',
            gap: [3, 3, 3, 4],
            my: 2,
          }}
        >
          <Flex
            sx={{
              alignItems: 'center',
              gap: 2,
              mr: 1,
            }}
          >
            <ConservativeLegendIcon width={30} height={30} sx={{ mb: 0 }} />
            <Box
              sx={{
                fontFamily: 'mono',
              }}
            >
              <Box
                sx={{
                  fontSize: [0, 0, 0, 1],
                  color: 'primary',
                  letterSpacing: 'mono',
                  textTransform: 'uppercase',
                }}
              >
                Conservative
              </Box>
              <Box
                sx={{
                  fontSize: [0, 0, 0, 1],
                  color: 'secondary',
                  sub: {
                    letterSpacing: 'faux',
                    fontSize: ['9px', '9px', '9px', '10px'],
                  },
                }}
              >
                R<sub>project</sub> - R<sub>baseline</sub> - E<sub>project</sub>{' '}
                &gt; 0
              </Box>
            </Box>
          </Flex>
          <Flex
            sx={{
              alignItems: 'center',
              gap: 2,
            }}
          >
            <SimpleSubtractionLegendIcon
              width={30}
              height={30}
              sx={{ mb: 0 }}
            />
            <Box
              sx={{
                fontFamily: 'mono',
              }}
            >
              <Box
                sx={{
                  fontSize: [0, 0, 0, 1],
                  color: 'primary',
                  letterSpacing: 'mono',
                  textTransform: 'uppercase',
                }}
              >
                Simple subtraction
              </Box>
              <Box
                sx={{
                  fontSize: [0, 0, 0, 1],
                  color: 'secondary',
                  sub: {
                    letterSpacing: 'faux',
                    fontSize: ['9px', '9px', '9px', '10px'],
                  },
                }}
              >
                (R<sub>project</sub> - R<sub>baseline</sub>) - (E
                <sub>project</sub> - E<sub>baseline</sub>) &gt; 0
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>

      <Box sx={{ height: '400px', ml: [0, -7, -7, -7] }}>
        <Chart x={xRange} y={yRange} logx padding={{ left: 64, top: 10 }}>
          <Ticks left bottom />
          <TickLabels left />
          <TickLabels bottom values={[0, 1, 10, xRange[1]]} />
          <Axis left bottom />
          <AxisLabel left units='μm'>
            Grain diameter
          </AxisLabel>
          <AxisLabel bottom units='tCO₂ / ha / yr'>
            Application flux
          </AxisLabel>
          <Plot>
            <defs>
              <pattern
                id='dashes'
                patternUnits='userSpaceOnUse'
                patternTransform='rotate(45 0 0)'
                width='2'
                height='2'
              >
                <Box
                  as='line'
                  x1='0'
                  y1='0'
                  x2='0'
                  y2='2'
                  sx={{
                    stroke: mix('purple', 'primary', 0.9),
                    strokeWidth: 0.35,
                  }}
                />
                <Box
                  as='line'
                  x1='0'
                  y1='0'
                  x2='2'
                  y2='0'
                  sx={{
                    stroke: mix('purple', 'primary', 0.9),
                    strokeWidth: 0.35,
                  }}
                />
              </pattern>
            </defs>
            {!acidLevel.low && figureData.fullAreaDashes.length > 0 && (
              <Area
                data={figureData.fullAreaDashes}
                sx={{ fill: 'purple', fillOpacity: 0.5 }}
              />
            )}

            {figureData.simpleSubtractionArea.length > 0 && (
              <Area
                data={
                  acidLevel.low
                    ? figureData.simpleSubtractionArea
                    : figureData.simpleSubtractionArea.sort(
                        (a, b) => b[1] - a[1] // special sort case to get curve instead of zig here
                      )
                }
                sx={{
                  fill:
                    acidLevel.hi && transportCase.case0
                      ? 'background'
                      : 'purple',
                  fillOpacity: acidLevel.hi && transportCase.case0 ? 1 : 0.5,
                }}
              />
            )}

            {figureData.conservativeArea.length > 0 && (
              <>
                <Area
                  data={
                    acidLevel.low
                      ? figureData.conservativeArea
                      : figureData.conservativeArea.sort((a, b) => a[0] - b[0])
                  }
                  sx={{ fill: 'url(#dashes)' }}
                />
                <Line
                  data={figureData.conservativeContour}
                  sx={{
                    stroke: mix('purple', 'primary', 0.9),
                    strokeWidth: 1,
                  }}
                />
              </>
            )}
            {getLabelLines()}
          </Plot>
          {getLabels()}
        </Chart>
      </Box>
    </>
  )
}

export default Figure4

const ConservativeLegendIcon = ({ width = 14, height = 14, sx = {} }) => {
  const { theme } = useThemeUI()
  return (
    <Box
      as='svg'
      width={width}
      height={height}
      viewBox='0 0 14 14'
      sx={{ height: `${height}px`, mb: '-3px', ...sx }}
    >
      <defs>
        <pattern
          id='inline-legend-dashes-circle'
          patternUnits='userSpaceOnUse'
          patternTransform='rotate(45 0 0)'
          width='4'
          height='4'
        >
          <Box
            as='line'
            x1='0'
            y1='0'
            x2='0'
            y2='4'
            sx={{
              stroke: mix('purple', 'primary', 0.9)(theme),
              strokeWidth: 0.8,
            }}
          />
          <Box
            as='line'
            x1='0'
            y1='0'
            x2='4'
            y2='0'
            sx={{
              stroke: mix('purple', 'primary', 0.9)(theme),
              strokeWidth: 0.8,
            }}
          />
        </pattern>
      </defs>
      <Box
        as='circle'
        cx='7'
        cy='7'
        r='6'
        sx={{
          fill: 'url(#inline-legend-dashes-circle)',
          stroke: mix('purple', 'primary', 0.9)(theme),
          strokeWidth: 0.5,
        }}
      />
    </Box>
  )
}

const SimpleSubtractionLegendIcon = ({ width = 14, height = 14, sx = {} }) => {
  const { theme } = useThemeUI()
  return (
    <Box
      as='svg'
      width={width}
      height={height}
      viewBox='0 0 14 14'
      sx={{ height: `${height}px`, mb: '-3px', ...sx }}
    >
      <Box
        as='circle'
        cx='7'
        cy='7'
        r='6'
        sx={{
          fill: 'purple',
          stroke: mix('purple', 'primary', 0.9)(theme),
          fillOpacity: 0.5,
          strokeWidth: 0,
        }}
      />
    </Box>
  )
}

const LegendWrapper = ({ children }) => {
  return (
    <Box
      as='span'
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
      }}
    >
      ({children})
    </Box>
  )
}

export const ConservativeLegend = () => {
  return (
    <LegendWrapper>
      <ConservativeLegendIcon />
    </LegendWrapper>
  )
}

export const SimpleSubtractionLegend = () => {
  return (
    <LegendWrapper>
      <SimpleSubtractionLegendIcon />
    </LegendWrapper>
  )
}
