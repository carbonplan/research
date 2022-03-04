import { Box, useThemeUI } from 'theme-ui'

const opacities = {
  1: 0.2,
  2: 0.9,
}

const BarGroup = ({ color, x, y, values }) => {
  return (
    <g transform={`translate(${x * 220} ${y * 40 + 10})`}>
      <rect
        x={0}
        y={0}
        width={50}
        height={20}
        fill={color}
        fillOpacity={opacities[values[0]]}
      />
      <rect
        x={60}
        y={0}
        width={50}
        height={20}
        fill={color}
        fillOpacity={opacities[values[1]]}
      />
      <rect
        x={120}
        y={0}
        width={50}
        height={20}
        fill={color}
        fillOpacity={opacities[values[2]]}
      />
    </g>
  )
}

//686/182

const SoilProtocols = () => {
  const { theme } = useThemeUI()
  const { orange } = theme.colors

  return (
    <Box
      as='svg'
      width='100%'
      viewBox='0 0 830 200'
      fill='none'
      sx={{ border: 'solid 0px red', mt: 3 }}
    >
      <BarGroup color={orange} values={[2, 1, 1]} x={0} y={0} />
      <BarGroup color={orange} values={[2, 1, 1]} x={1} y={0} />
      <BarGroup color={orange} values={[2, 2, 1]} x={2} y={0} />
      <BarGroup color={orange} values={[2, 2, 1]} x={3} y={0} />
      <BarGroup color={orange} values={[2, 1, 1]} x={0} y={1} />
      <BarGroup color={orange} values={[2, 2, 1]} x={1} y={1} />
      <BarGroup color={orange} values={[2, 1, 1]} x={2} y={1} />
      <BarGroup color={orange} values={[2, 2, 1]} x={3} y={1} />
      <BarGroup color={orange} values={[2, 2, 1]} x={0} y={2} />
      <BarGroup color={orange} values={[2, 1, 1]} x={1} y={2} />
      <BarGroup color={orange} values={[2, 2, 2]} x={2} y={2} />
      <BarGroup color={orange} values={[2, 2, 2]} x={3} y={2} />
      <BarGroup color={orange} values={[2, 2, 1]} x={0} y={3} />
      <BarGroup color={orange} values={[2, 1, 1]} x={1} y={3} />
      <BarGroup color={orange} values={[2, 2, 1]} x={2} y={3} />
      <BarGroup color={orange} values={[2, 1, 1]} x={3} y={3} />
      <BarGroup color={orange} values={[2, 2, 2]} x={0} y={4} />
      <BarGroup color={orange} values={[2, 2, 1]} x={1} y={4} />
      <BarGroup color={orange} values={[2, 1, 1]} x={2} y={4} />
      <BarGroup color={orange} values={[2, 1, 1]} x={3} y={4} />
    </Box>
  )
}
export default SoilProtocols
