import { useThemeUI, Box, Divider, Text } from 'theme-ui'
import {
  Chart,
  Grid,
  Label,
  Axis,
  AxisLabel,
  Line,
  Plot,
  Ticks,
  Point,
  TickLabels,
} from '@carbonplan/charts'

import { Row, Column } from '@carbonplan/components'

const sx = {
  label: {
    color: 'yellow',
    fontSize: [3, 4, 4, '28px'],
  },
  co2Label: {
    position: 'absolute',
    fontFamily: 'mono',
    letterSpacing: 'mono',
    textTransform: 'uppercase',
    fontSize: [0, 0, 0, 1],
    color: 'primary',
  },
}

const ASPECT_RATIO = 118 / 684
const heights = {
  div: [
    `calc((6 / 6 * (100vw - 24px * 7) + 5 * 24px) * ${ASPECT_RATIO} + 180px)`,
    `calc((6 / 8 * (100vw - 32px * 9) + 5 * 32px) * ${ASPECT_RATIO} + 185px)`,
    `calc((6 / 12 * (100vw - 32px * 13) + 5 * 32px) * ${ASPECT_RATIO} + 185px)`,
    `calc(min(500px, (6 / 12 * (100vw - 48px * 13) + 5 * 48px) * ${ASPECT_RATIO} + 200px))`,
  ],
  svg: [
    `calc((6 / 6 * (100vw - 24px * 7) + 5 * 24px) * ${ASPECT_RATIO})`,
    `calc((6 / 8 * (100vw - 32px * 9) + 5 * 32px) * ${ASPECT_RATIO})`,
    `calc((6 / 12 * (100vw - 32px * 13) + 5 * 32px) * ${ASPECT_RATIO})`,
    `calc((6 / 12 * (100vw - 48px * 13) + 5 * 48px) * ${ASPECT_RATIO})`,
  ],
}
const circleSizes = [3, 3, 2.75, 2.5]

const Svg = () => {
  const { theme } = useThemeUI()

  return (
    <Box
      as='svg'
      height='100%'
      width='100%'
      fill='none'
      preserveAspectRatio='none'
      viewBox='0 0 684 118'
      style={{ overflow: 'visible' }}
      sx={{ strokeWidth: [1.25, 1, 1, 0.75] }}
    >
      <path
        d='M14 118V78.905L17.541 54H24.0784L27.0746 78.905L55.6754 69.638V78.905L87 69.638V118'
        stroke={theme.colors.primary}
      />
      <rect
        x='24.5'
        y='91.5'
        width='52'
        height='15'
        stroke={theme.colors.primary}
      />
      <line x1='24' y1='98.5' x2='77' y2='98.5' stroke={theme.colors.primary} />
      <line
        x1='51.5'
        y1='91'
        x2='51.5'
        y2='107'
        stroke={theme.colors.primary}
      />
      <line
        x1='41.5'
        y1='91'
        x2='41.5'
        y2='107'
        stroke={theme.colors.primary}
      />
      <line
        x1='32.5'
        y1='91'
        x2='32.5'
        y2='107'
        stroke={theme.colors.primary}
      />
      <line
        x1='68.5'
        y1='91'
        x2='68.5'
        y2='107'
        stroke={theme.colors.primary}
      />
      <line
        x1='60.5'
        y1='91'
        x2='60.5'
        y2='107'
        stroke={theme.colors.primary}
      />
      <Box
        as='circle'
        cx='133'
        cy='12'
        sx={{ r: circleSizes }}
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='148'
        cy='36'
        sx={{ r: circleSizes }}
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='140'
        cy='27'
        sx={{ r: circleSizes }}
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='125'
        cy='25'
        sx={{ r: circleSizes }}
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='159'
        cy='28'
        sx={{ r: circleSizes }}
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='174'
        cy='22'
        sx={{ r: circleSizes }}
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='174'
        cy='35'
        sx={{ r: circleSizes }}
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='196'
        cy='29'
        sx={{ r: circleSizes }}
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='215'
        cy='27'
        sx={{ r: circleSizes }}
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='125'
        cy='37'
        sx={{ r: circleSizes }}
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='151'
        cy='17'
        sx={{ r: circleSizes }}
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='238'
        cy='31'
        sx={{ r: circleSizes }}
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='246'
        cy='19'
        sx={{ r: circleSizes }}
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='259'
        cy='34'
        sx={{ r: circleSizes }}
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='274'
        cy='32'
        sx={{ r: circleSizes }}
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='293'
        cy='29'
        sx={{ r: circleSizes }}
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='306'
        cy='34'
        sx={{ r: circleSizes }}
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='327'
        cy='33'
        sx={{ r: circleSizes }}
        stroke={theme.colors.yellow}
      />
      <path
        d='M353.5 34C353.5 35.3807 352.381 36.5 351 36.5C349.619 36.5 348.5 35.3807 348.5 34C348.5 32.6193 349.619 31.5 351 31.5C352.381 31.5 353.5 32.6193 353.5 34Z'
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='409'
        cy='34'
        sx={{ r: circleSizes }}
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='427'
        cy='37'
        sx={{ r: circleSizes }}
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='371'
        cy='32'
        sx={{ r: circleSizes }}
        stroke={theme.colors.yellow}
      />
      <path
        d='M67.8536 4.35355C68.0488 4.15829 68.0488 3.84171 67.8536 3.64645L64.6716 0.464466C64.4763 0.269204 64.1597 0.269204 63.9645 0.464466C63.7692 0.659728 63.7692 0.976311 63.9645 1.17157L66.7929 4L63.9645 6.82843C63.7692 7.02369 63.7692 7.34027 63.9645 7.53553C64.1597 7.7308 64.4763 7.7308 64.6716 7.53553L67.8536 4.35355ZM41 4.5H67.5V3.5H41V4.5ZM21.5 44V24H20.5V44H21.5ZM41 3.5C29.6782 3.5 20.5 12.6782 20.5 24H21.5C21.5 13.2304 30.2304 4.5 41 4.5V3.5Z'
        fill={theme.colors.primary}
      />
      <Box
        as='circle'
        cx='38'
        cy='15'
        sx={{ r: circleSizes }}
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='78.0921'
        cy='14.0934'
        sx={{ r: circleSizes }}
        transform='rotate(29.7554 78.0921 14.0934)'
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='106.094'
        cy='15.0934'
        sx={{ r: circleSizes }}
        transform='rotate(29.7554 106.094 15.0934)'
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='42'
        cy='38'
        sx={{ r: circleSizes }}
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='69.4242'
        cy='38.7127'
        sx={{ r: circleSizes }}
        transform='rotate(29.7554 69.4242 38.7127)'
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='32'
        cy='43'
        sx={{ r: circleSizes }}
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='57.0941'
        cy='33.0933'
        sx={{ r: circleSizes }}
        transform='rotate(29.7554 57.0941 33.0933)'
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='45'
        cy='25'
        sx={{ r: circleSizes }}
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='14'
        cy='11'
        sx={{ r: circleSizes }}
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='60.0921'
        cy='21.0933'
        sx={{ r: circleSizes }}
        transform='rotate(29.7554 60.0921 21.0933)'
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='94'
        cy='9'
        sx={{ r: circleSizes }}
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='89.0941'
        cy='22.0933'
        sx={{ r: circleSizes }}
        transform='rotate(29.7554 89.0941 22.0933)'
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='11'
        cy='31'
        sx={{ r: circleSizes }}
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        sx={{ r: circleSizes }}
        transform='matrix(0.36682 0.930292 -0.930293 0.366817 100.892 28.8913)'
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='50.0921'
        cy='14.0934'
        sx={{ r: circleSizes }}
        transform='rotate(29.7554 50.0921 14.0934)'
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='32'
        cy='28'
        sx={{ r: circleSizes }}
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        sx={{ r: circleSizes }}
        transform='matrix(0.36682 0.930292 -0.930293 0.366817 105.892 39.8913)'
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='73.0921'
        cy='26.0933'
        sx={{ r: circleSizes }}
        transform='rotate(29.7554 73.0921 26.0933)'
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='86.4398'
        cy='38.0904'
        sx={{ r: circleSizes }}
        transform='rotate(29.7554 86.4398 38.0904)'
        stroke={theme.colors.yellow}
      />
      <Box
        as='circle'
        cx='86.4398'
        cy='38.0904'
        sx={{ r: circleSizes }}
        transform='rotate(29.7554 86.4398 38.0904)'
        stroke={theme.colors.yellow}
      />
    </Box>
  )
}

const CartoonEmissions = () => {
  return (
    <Row columns={[6]} sx={{ mt: ['26px', 6, 6, 8] }}>
      <Column start={1} width={[6, 6, 6, 6]}>
        <Box sx={{ position: 'relative', height: heights.div }}>
          <Box
            sx={{ position: 'absolute', width: '100%', height: heights.div }}
          >
            <Chart
              x={[0, 6]}
              y={[0, 1]}
              clamp={false}
              padding={{ top: 88, left: 0, bottom: 46 }}
            >
              <TickLabels bottom />
              <Ticks bottom />
              <Axis bottom />
              <Grid vertical />
              <AxisLabel bottom align='right' units='years'>
                Time
              </AxisLabel>
              <Label x={0.5} y={1.1} width={1} align='center' sx={sx.label}>
                +1
              </Label>
              <Label x={1.5} y={1.1} width={1} align='center' sx={sx.label}>
                +0.5
              </Label>
              <Label x={2.5} y={1.1} width={1} align='center' sx={sx.label}>
                +0.3
              </Label>
              <Label x={3.5} y={1.1} width={1} align='center' sx={sx.label}>
                +0.2
              </Label>
              <Label
                x={2}
                y={1.21}
                width={4}
                align='center'
                verticalAlign='bottom'
                sx={sx.label}
              >
                <Box sx={{ textTransform: 'none', fontSize: [1, 1, 1, 2] }}>
                  (Cost of emission)
                </Box>
                2 ton-years
              </Label>
              <Label x={4.45} y={1.3}>
                Time horizon
                <br />
                (4 years)
              </Label>
              <Plot>
                <Line
                  data={[
                    [4, 0],
                    [4, 1.45],
                  ]}
                  sx={{
                    stroke: 'secondary',
                    strokeWidth: 1,
                    strokeDasharray: 4,
                  }}
                />
                <Line
                  data={[
                    [0, 1.165],
                    [4, 1.165],
                  ]}
                  sx={{
                    stroke: 'yellow',
                    strokeWidth: 1,
                  }}
                />
                <Line
                  data={[
                    [4.15, 1.45],
                    [4.4, 1.45],
                  ]}
                  sx={{
                    stroke: 'secondary',
                    strokeWidth: 1,
                  }}
                />
                <Line
                  data={[
                    [4.4, 1.45],
                    [4.55, 1.35],
                  ]}
                  sx={{
                    stroke: 'secondary',
                    strokeWidth: 1,
                  }}
                />
              </Plot>
            </Chart>
          </Box>
          <Box
            sx={{
              zIndex: -1,
              position: 'absolute',
              bottom: 0,
              mb: '45px',
              height: heights.svg,
              width: '100%',
            }}
          >
            <Svg />
            <Box
              sx={{
                ...sx.co2Label,
                bottom: ['103%', '103%', '103%', '101%'],
                left: ['1%', '2%', '2%', '2%'],
              }}
            >
              CO₂
            </Box>
          </Box>
        </Box>
      </Column>
    </Row>
  )
}

export default CartoonEmissions
