export const interpolateAtLimits = (data, min, max, axis = 'y') => {
  const result = []
  const coordIndex = axis === 'x' ? 0 : 1
  const interpIndex = axis === 'x' ? 1 : 0

  for (let i = 0; i < data.length; i++) {
    const coord = data[i][coordIndex]

    if (coord >= min && coord <= max) {
      result.push([data[i][0], data[i][1]])
    } else if (coord > max) {
      if (i > 0 && data[i - 1][coordIndex] <= max) {
        const coord1 = data[i - 1][coordIndex]
        const coord2 = data[i][coordIndex]
        const interp1 = data[i - 1][interpIndex]
        const interp2 = data[i][interpIndex]
        const interpValue =
          interp1 + ((interp2 - interp1) * (max - coord1)) / (coord2 - coord1)

        if (axis === 'x') {
          result.push([max, interpValue])
        } else {
          result.push([interpValue, max])
        }
      }
      break
    } else if (coord < min) {
      if (i > 0 && data[i - 1][coordIndex] >= min) {
        const coord1 = data[i - 1][coordIndex]
        const coord2 = data[i][coordIndex]
        const interp1 = data[i - 1][interpIndex]
        const interp2 = data[i][interpIndex]
        const interpValue =
          interp1 + ((interp2 - interp1) * (min - coord1)) / (coord2 - coord1)

        if (axis === 'x') {
          result.push([min, interpValue])
        } else {
          result.push([interpValue, min])
        }
      }
      if (axis === 'x') {
        continue
      } else {
        break
      }
    }
  }

  return result
}
