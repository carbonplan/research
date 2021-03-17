import { useThemeUI, Box } from 'theme-ui'
import { pie, arc } from 'd3-shape'

const Donut = ({ data, opacity, color, ascending = false }) => {
  if (data.length == 1) {
    data = [data[0], 1 - data[0]]
  }
  const { theme } = useThemeUI()
  let generator = pie()
  if (ascending) {
    generator = generator.sortValues((a, b) => a - b)
  }
  const arcs = generator(data)
  const path = arc().innerRadius(23).outerRadius(50)

  return (
    <svg viewBox='0 0 100 100'>
      <g transform='translate(50,50)'>
        {arcs.map((d, i) => {
          return (
            <path
              key={i}
              d={path(d)}
              fill={theme.colors[color]}
              opacity={opacity[i]}
            />
          )
        })}
      </g>
    </svg>
  )
}

export default Donut
