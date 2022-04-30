import { useThemeUI, Box } from 'theme-ui'
import { pie, arc } from 'd3-shape'

const Bar = ({ data, opacity, color, height = 18 }) => {
  const { theme } = useThemeUI()

  return (
    <svg
      width={'100%'}
      height={height}
      viewBox={`0 0 100 ${height}`}
      preserveAspectRatio='none'
    >
      <rect
        width={100}
        height={height}
        fill={theme.colors.secondary}
        opacity={0.15}
      />
      <rect
        width={data[0] * 100}
        height={height}
        fill={theme.colors[color]}
        opacity={1}
      />
    </svg>
  )
}

export default Bar
