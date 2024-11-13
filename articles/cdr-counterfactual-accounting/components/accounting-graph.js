import React from 'react'
import {
  Bar,
  Chart,
  Plot,
  Axis,
  AxisLabel,
  Label,
  Line,
} from '@carbonplan/charts'
import { Arrow } from '@carbonplan/icons'
import calculateNetCDR from './scenario-calculations'
import { alpha } from '@theme-ui/color'
import { Box, useThemeUI } from 'theme-ui'
import { Row, Column } from '@carbonplan/components'

import { Emissions, Hatching, Removals } from './svg-elements'

const iconWidths = [80, 90, 100, 110]

const AccountingGraph = ({ approach, inputs, showNet = true }) => {
  const { theme } = useThemeUI()

  const results = calculateNetCDR(inputs)
  const result = results.find((r) => r.acct_approach === approach)
  if (!result) return null
  const {
    E_COUNT_counted = 0,
    E_COUNT = 0,
    R_COUNT_counted = 0,
    R_COUNT = 0,
    R_PROJ = 0,
    R_PROJ_counted = 0,
    E_PROJ = 0,
    E_PROJ_counted = 0,
    netCDR = 0,
    netCDR_Nae = 0,
    netCDR_ae = 0,
  } = result

  const netEmissionsNoAvoided = netCDR_Nae > 0 ? netCDR_Nae : 0
  const netRemovalsNoAvoided = netCDR_Nae < 0 ? netCDR_Nae : 0

  let xLimits = [0, 2.5]
  let xSpacing = {
    counterfactual: 0.5,
    project: 1.25,
    net: 2,
  }
  let barWidth = 0.6

  if (!showNet) {
    xSpacing = {
      priorIcon: 1.5,
      counterfactual: 3,
      projectIcon: 5.5,
      project: 7,
      net: 1,
    }
    xLimits = [0, 8]
    barWidth = 0.2
  }

  const chartSpacing = 24
  const chartHeight = 200

  const emissionsDataCounted = [
    [xSpacing.counterfactual, E_COUNT_counted],
    [xSpacing.project, E_PROJ_counted],
    ...(showNet ? [[xSpacing.net, netEmissionsNoAvoided]] : []),
  ]

  const emissionsDataTotal = [
    [xSpacing.counterfactual, E_COUNT_counted, E_COUNT],
    [xSpacing.project, E_PROJ_counted, E_PROJ],
    ...(showNet ? [[xSpacing.net, 0, netCDR]] : []),
  ]

  const removalsDataCounted = [
    [xSpacing.counterfactual, R_COUNT_counted],
    [xSpacing.project, R_PROJ_counted],
    ...(showNet ? [[xSpacing.net, netCDR]] : []),
  ]

  const removalsDataTotal = [
    [xSpacing.counterfactual, R_COUNT_counted, R_COUNT],
    [xSpacing.project, R_PROJ_counted, R_PROJ],
    ...(showNet ? [[xSpacing.net, netRemovalsNoAvoided, netCDR]] : []),
  ]

  const alphaGrey = alpha('grey', 0.5)(theme)
  const alphaPurple = alpha('purple', 0.5)(theme)

  const maxValue =
    Math.max(
      Math.abs(R_COUNT),
      Math.abs(R_PROJ),
      Math.abs(E_COUNT),
      Math.abs(E_PROJ)
    ) * 1.2
  const yLimitsRemovals = -maxValue
  const yLimitsEmissions = maxValue

  return (
    <Row columns={6} style={{ width: '100%', height: chartHeight * 2 }}>
      <Column
        start={1}
        width={showNet ? [5, 4, 4, 4] : 6}
        sx={{ position: 'relative' }}
      >
        {/* Emissions Chart */}
        <Box sx={{ height: chartHeight, position: 'relative' }}>
          <Chart
            x={xLimits}
            y={[0, yLimitsEmissions]}
            padding={{
              left: chartSpacing,
              right: 0,
              top: 0,
              bottom: chartSpacing,
            }}
          >
            <Axis left bottom />
            <AxisLabel left arrow={false} align='center'>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                Emissions{' '}
                <Arrow
                  sx={{
                    transform: 'rotate(135deg)',
                    height: [12, 12, 12, 14],
                    mr: ['1px', '1px', '1px', '0px'],
                  }}
                />
              </Box>
            </AxisLabel>
            <Plot>
              <Bar
                width={barWidth}
                data={emissionsDataCounted}
                color={
                  showNet ? ['grey', 'purple', 'green'] : ['grey', 'purple']
                }
              />
              <Bar
                width={barWidth}
                data={emissionsDataTotal}
                color={
                  showNet
                    ? [alphaGrey, alphaPurple, 'green']
                    : [alphaGrey, alphaPurple]
                }
              />
              {approach === 4 && showNet && (
                <>
                  <Line
                    data={[
                      [xLimits[0], E_COUNT_counted],
                      [xSpacing.project + 0.22, E_COUNT_counted],
                    ]}
                    color={'primary'}
                    strokeDasharray={'4,4'}
                    width={1}
                  />
                  <Line
                    data={[
                      [xSpacing.project + 0.27, 0],
                      [xSpacing.project + 0.3, 0],
                      [xSpacing.project + 0.3, E_COUNT_counted],
                      [xSpacing.project + 0.27, E_COUNT_counted],
                    ]}
                    color={'primary'}
                    width={1}
                  />
                  <Line
                    data={[
                      [xSpacing.project + 0.3, E_COUNT_counted / 2],
                      [xSpacing.project + 0.37, E_COUNT_counted / 2],
                    ]}
                    color={'primary'}
                    width={1}
                  />
                </>
              )}
              {approach === 2 && showNet && (
                <>
                  <Line
                    data={[
                      [xSpacing.counterfactual + 0.27, E_COUNT_counted],
                      [xSpacing.counterfactual + 0.3, E_COUNT_counted],
                      [xSpacing.counterfactual + 0.3, E_COUNT],
                      [xSpacing.counterfactual + 0.27, E_COUNT],
                    ]}
                    color={'primary'}
                    width={1}
                  />
                  <Line
                    data={[
                      [
                        xSpacing.counterfactual + 0.3,
                        (E_COUNT - E_COUNT_counted) / 2 + E_COUNT_counted,
                      ],
                      [
                        xSpacing.counterfactual + 0.37,
                        (E_COUNT - E_COUNT_counted) / 2 + E_COUNT_counted,
                      ],
                      [xSpacing.counterfactual + 0.37, E_COUNT + 3],
                      [xSpacing.counterfactual + 0.44, E_COUNT + 3],
                    ]}
                    color={'primary'}
                    width={1}
                  />
                </>
              )}
            </Plot>
            <Label
              x={xSpacing.counterfactual}
              y={E_COUNT_counted}
              align='center'
              width={1}
              verticalAlign={'bottom'}
              sx={{ color: 'grey' }}
            >
              {E_COUNT_counted !== 0 && Math.abs(E_COUNT_counted).toFixed(1)}
            </Label>
            <Label
              x={xSpacing.project}
              y={E_PROJ_counted}
              align='center'
              width={1}
              verticalAlign={'bottom'}
              sx={{ color: 'purple' }}
            >
              {E_PROJ_counted !== 0 && Math.abs(E_PROJ_counted).toFixed(1)}
            </Label>
            {showNet ? (
              <>
                <Label
                  x={xSpacing.net}
                  y={netEmissionsNoAvoided}
                  align='center'
                  width={1}
                  verticalAlign={'bottom'}
                  sx={{ color: 'green' }}
                >
                  {netCDR > 0 && Math.abs(netCDR).toFixed(1)}
                </Label>
                {approach === 4 && (
                  <Label
                    x={xSpacing.project + 0.37}
                    y={E_COUNT_counted / 2}
                    align='left'
                    verticalAlign={'middle'}
                    width={1}
                    height={1}
                    sx={{ color: 'primary', ml: 2 }}
                  >
                    replacement rock emissions
                  </Label>
                )}
              </>
            ) : (
              <>
                <Label
                  x={xSpacing.priorIcon}
                  y={0}
                  align='center'
                  width={2}
                  verticalAlign={'bottom'}
                  sx={{ mb: -1 }}
                >
                  <Emissions isProject={false} sx={{ width: iconWidths }} />
                </Label>
                <Label
                  x={xSpacing.projectIcon}
                  y={0}
                  align='center'
                  width={2}
                  verticalAlign={'bottom'}
                  sx={{ mb: -1 }}
                >
                  <Emissions isProject={true} sx={{ width: iconWidths }} />
                </Label>
              </>
            )}
            <Label
              x={showNet ? xSpacing.counterfactual : 0}
              y={0}
              align={'center'}
              width={showNet ? 0.5 : xLimits[1]}
              verticalAlign={'top'}
              sx={{
                color: 'grey',
                height: `${2 * chartSpacing}px`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              {showNet ? (
                <>
                  Prior <br /> Liming
                </>
              ) : (
                <>
                  Prior Liming <br /> ({inputs.rockTonsCounterfactual} tons of
                  rock)
                </>
              )}
            </Label>
            <Label
              x={showNet ? xSpacing.project : xLimits[1] / 2 + 2}
              y={0}
              align={'center'}
              width={showNet ? 0.5 : xLimits[1] / 2}
              verticalAlign={'top'}
              sx={{
                color: 'purple',
                height: `${2 * chartSpacing}px`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              {showNet ? (
                <>
                  CDR <br /> Project
                </>
              ) : (
                <>
                  CDR Project <br /> ({inputs.rockTonsProject} tons of rock)
                </>
              )}
            </Label>
            {showNet && (
              <>
                <Label
                  x={xSpacing.net}
                  y={0}
                  align='center'
                  width={0.5}
                  verticalAlign={'top'}
                  sx={{
                    color: 'green',
                    height: `${2 * chartSpacing}px`,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  Net <br /> CDR
                </Label>
                {approach === 2 && showNet && (
                  <Label
                    x={xSpacing.counterfactual + 0.44}
                    y={E_COUNT + 3}
                    verticalAlign={'middle'}
                    height={1}
                    sx={{
                      color: 'primary',
                      ml: 2,
                      mb: ['1px', '1px', '1px', '1px'],
                    }}
                  >
                    ignored
                  </Label>
                )}
              </>
            )}
          </Chart>
        </Box>

        {/* Removals Chart */}
        <Box sx={{ height: chartHeight, position: 'relative' }}>
          <Chart
            x={xLimits}
            y={[0, yLimitsRemovals]}
            padding={{
              left: chartSpacing,
              right: 0,
              top: chartSpacing,
              bottom: 0,
            }}
          >
            <Axis left top />
            <AxisLabel left arrow={false} align='center'>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Arrow
                  sx={{
                    transform: 'rotate(315deg)',
                    height: [12, 12, 12, 14],
                    mr: ['1px', '1px', '1px', '0px'],
                  }}
                />{' '}
                Removals
              </Box>
            </AxisLabel>
            <Plot sx={{ transform: 'scale(1, -1)' }}>
              <Hatching />
              <Bar
                width={barWidth}
                data={removalsDataCounted}
                color={
                  showNet ? ['grey', 'purple', 'green'] : ['grey', 'purple']
                }
              />
              <Bar
                width={barWidth}
                data={removalsDataTotal}
                color={
                  showNet
                    ? [alphaGrey, alphaPurple, 'url(#hatchPattern)']
                    : [alphaGrey, alphaPurple]
                }
              />
              {approach === 1 && showNet && (
                <>
                  <Line
                    data={[
                      [xSpacing.net + 0.27, netCDR_Nae],
                      [xSpacing.net + 0.3, netCDR_Nae],

                      [xSpacing.net + 0.3, netCDR],
                      [xSpacing.net + 0.27, netCDR],
                    ]}
                    color={'primary'}
                    width={1}
                  />
                  <Line
                    data={[
                      [xSpacing.net + 0.3, netCDR_ae / 2 + netCDR_Nae],
                      [xSpacing.net + 0.37, netCDR_ae / 2 + netCDR_Nae],
                    ]}
                    color={'primary'}
                    width={1}
                  />
                </>
              )}
            </Plot>

            <Label
              x={xSpacing.counterfactual}
              y={yLimitsRemovals - R_COUNT_counted}
              align='center'
              width={1}
              verticalAlign={'top'}
              sx={{ color: 'grey' }}
            >
              {R_COUNT_counted !== 0 && Math.abs(R_COUNT_counted).toFixed(1)}
            </Label>
            <Label
              x={xSpacing.project}
              y={yLimitsRemovals - R_PROJ_counted}
              align='center'
              width={1}
              verticalAlign={'top'}
              sx={{ color: 'purple' }}
            >
              {R_PROJ_counted !== 0 && Math.abs(R_PROJ_counted).toFixed(1)}
            </Label>
            {showNet ? (
              <>
                <Label
                  x={xSpacing.net}
                  y={yLimitsRemovals - netCDR}
                  align='center'
                  width={1}
                  verticalAlign={'top'}
                  sx={{ color: 'green' }}
                >
                  {netCDR <= 0 && Math.abs(netCDR).toFixed(1)}
                </Label>
                {approach === 1 && showNet && (
                  <Label
                    x={xSpacing.net + 0.37}
                    y={yLimitsRemovals - netCDR}
                    verticalAlign={'bottom'}
                    sx={{
                      color: 'primary',
                      ml: 2,
                      mb: ['11px', '11px', '11px', '8px'],
                    }}
                  >
                    avoided emissions
                  </Label>
                )}
              </>
            ) : (
              <>
                <Label
                  x={xSpacing.priorIcon}
                  y={yLimitsRemovals}
                  align='center'
                  width={2}
                  verticalAlign={'top'}
                >
                  <Removals
                    isProject={false}
                    sx={{
                      width: iconWidths,
                    }}
                  />
                </Label>
                <Label
                  x={xSpacing.projectIcon}
                  y={yLimitsRemovals}
                  align='center'
                  width={2}
                  verticalAlign={'top'}
                >
                  <Removals
                    isProject={true}
                    sx={{
                      width: iconWidths,
                    }}
                  />
                </Label>
              </>
            )}
          </Chart>
        </Box>
      </Column>
    </Row>
  )
}

export default AccountingGraph
