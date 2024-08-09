import data from './article_data.json'

const useData = ({ region, experiment, variable }) => {
  if (!data[region]) {
    throw new Error(
      `Unexpected region, ${region}. Must be one of 'ca', 'nystate', 'nyc'`
    )
  }
  if (!['historical', 'future'].includes(experiment)) {
    throw new Error(
      `Unexpected experiment, ${experiment}. Must be one of 'historical', 'future'`
    )
  }

  if (region === 'nystate' && !['riverine', 'surface'].includes(variable)) {
    throw new Error(
      `Unexpected variable, ${variable}. Must be one of 'riverine', 'surface'`
    )
  }

  let { xdi, jupiter } = data[region]

  if (region === 'nyc') {
    xdi = xdi['Coastal Inundation']
    jupiter = jupiter['Coastal Inundation']
  } else if (region === 'nystate') {
    if (variable === 'riverine') {
      xdi = xdi['Riverine Flooding']
      jupiter = jupiter['Riverine Flooding']
    } else {
      xdi = xdi['Surface Water Flooding']
      jupiter = jupiter['Surface Water Flooding']
    }
  }

  // const base = { xdi, jupiter }

  xdi = xdi[experiment === 'historical' ? 'RCP85-1995' : 'RCP85-2100']
  jupiter =
    jupiter[
      experiment === 'historical'
        ? 'Historical baseline - 1995'
        : 'SSP5-8.5 (4.4C) - 2100'
    ]

  // const points = useMemo(() => {
  //   return Object.keys(xdi).reduce((accum, id) => {
  //     accum[id] = [base.xdi.lon[id], base.xdi.lat[id]]
  //     return accum
  //   }, {})
  // }, [region, base, xdi, jupiter])

  // console.log(region, points)
  return { xdi, jupiter }
}

export default useData
