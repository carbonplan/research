import { Box } from 'theme-ui'
import {
  Chart,
  Plot,
  Ticks,
  TickLabels,
  Axis,
  Label,
  AxisLabel,
  StackedBar,
} from '@carbonplan/charts'

const data = [
  [0, 0, 228903341, 179114974],
  [1, 0, 348158693, 261869229],
  [2, 0, 140855738, 40628660],
]

const CreditIssuance = ({ color }) => {
  return (
    <Box sx={{ width: '100%', height: ['300px', '300px', '300px', '350px'] }}>
      <Chart
        x={[-1, 3]}
        y={[0, 400000000]}
        padding={{ left: [70, 80, 80, 80], top: 10, bottom: [70, 50, 50, 50] }}
      >
        <Ticks left bottom />
        <TickLabels
          sx={{ textAlign: 'center' }}
          bottom
          values={[0, 1, 2]}
          labels={[
            <span>
              RENEWABLE
              <br />
              ENERGY
            </span>,
            <span>
              FORESTRY
              <br />
              AND{' '}
              <Box
                sx={{ display: ['initial', 'none', 'none', 'none'] }}
                as='br'
              />
              LAND{' '}
              <Box
                sx={{ display: ['initial', 'none', 'none', 'none'] }}
                as='br'
              />
              USE
            </span>,
            <span>
              ALL{' '}
              <Box
                sx={{ display: ['initial', 'none', 'none', 'none'] }}
                as='br'
              />
              OTHER
              <br />
              CREDIT{' '}
              <Box
                sx={{ display: ['initial', 'none', 'none', 'none'] }}
                as='br'
              />
              TYPES
            </span>,
          ]}
        />
        <TickLabels left labels={['0M', '100M', '200M', '300M', '400M']} />
        <Axis left bottom />
        <AxisLabel left>Credits</AxisLabel>
        <Label x={-0.8} y={400000000} sx={{ color: 'yellow' }}>
          Other Registries
        </Label>
        <Label x={-0.8} y={400000000 - 40000000} sx={{ color: 'green' }}>
          Verra
        </Label>

        <Plot>
          <StackedBar data={data} color={['green', 'yellow']} />
        </Plot>
        <Label
          width='1'
          align='center'
          x={0}
          y={179114974 - 5000000}
          sx={{ color: 'background' }}
        >
          179.1M
        </Label>
        <Label
          width='1'
          align='center'
          x={1}
          y={261869229 - 5000000}
          sx={{ color: 'background' }}
        >
          261.9M
        </Label>
        <Label
          width='1'
          align='center'
          x={2}
          y={40628660 - 5000000}
          sx={{ color: 'background' }}
        >
          40.6M
        </Label>
        <Label
          width='1'
          align='center'
          x={0}
          y={228903341 - 5000000}
          sx={{ color: 'background' }}
        >
          49.8M
        </Label>
        <Label
          width='1'
          align='center'
          x={1}
          y={348158693 - 5000000}
          sx={{ color: 'background' }}
        >
          86.3M
        </Label>
        <Label
          width='1'
          align='center'
          x={2}
          y={140855738 - 5000000}
          sx={{ color: 'background' }}
        >
          100.2M
        </Label>
      </Chart>
    </Box>
  )
}

export default CreditIssuance
