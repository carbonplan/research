const c2f = (c) => {
  return c * (9 / 5) + 32
}

const convert = (value, units) => {
  if (units == 'c') {
    return value
  }
  if (units == 'f') {
    return c2f(value)
  }
}

export default convert
