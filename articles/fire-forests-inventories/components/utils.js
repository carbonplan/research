export const getOption = (options) => {
  return Object.keys(options).find((key) => options[key])
}

export const averageOverRange = (data, range) => {
  return (
    data
      .filter((d) => d[0] >= range[0] && d[0] <= range[1])
      .map((d) => d[1])
      .reduce((a, b) => a + b, 0) /
    (range[1] - range[0] + 1)
  )
}
