import { format } from 'd3-format'

export const formatValue = (value) => {
  const test = Math.abs(value)
  if (test === 0) {
    return 0
  } else if (test < 0.0001) {
    return format('.1e')(value)
  } else if (test < 0.01) {
    return format('.2')(value)
  } else if (test < 1) {
    return format('.2f')(value)
  } else if (test < 10) {
    return format('.1f')(value)
  } else if (test < 10000) {
    return format('.0f')(value)
  } else {
    return format('0.2s')(value)
  }
}
