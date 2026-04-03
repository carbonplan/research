import { writeFileSync, mkdirSync } from 'fs'
import { dirname } from 'path'
import { open, get, FetchStore } from 'zarrita'

const dataUrl =
  'https://carbonplan-carbon-removal.s3.us-west-2.amazonaws.com/SCEPTER/aglime_explainer/figure4.zarr'

const loadZarr = async (url, variable) => {
  try {
    const store = new FetchStore(url + '/' + variable)
    const array = await open(store, { kind: 'array' })
    const data = await get(array)
    return data
  } catch (error) {
    console.error('Error loading data:', error)
    throw error
  }
}

const roundToTwoDecimals = (num) => {
  return Number(num.toFixed(2))
}

const roundNestedData = (data) => {
  if (typeof data === 'number') {
    return roundToTwoDecimals(data)
  }
  if (Array.isArray(data)) {
    return data.map(roundNestedData)
  }
  if (data && typeof data === 'object') {
    const rounded = {}
    for (const [key, value] of Object.entries(data)) {
      rounded[key] = roundNestedData(value)
    }
    return rounded
  }
  return data
}

const processData = (rawData) => {
  const {
    dustradArray,
    dustrateArray,
    truckKmArray,
    fertlevelArray,
    feedstockArray,
    psdArray,
    cdrData,
    emissionsData,
    netRemovalData,
    conCase0Data,
    ssCase0Data,
    conCase1Data,
    ssCase1Data,
  } = rawData

  const dims = {
    fertlevel: fertlevelArray.length,
    feedstock: feedstockArray.length,
    psd: psdArray.length,
    dustrad: dustradArray.length,
    dustrate: dustrateArray.length,
    truckKm: truckKmArray.length,
  }

  const calculateIndex = (coords, dimOrder) => {
    let index = 0
    let multiplier = 1

    for (let i = dimOrder.length - 1; i >= 0; i--) {
      const dimName = dimOrder[i]
      const coord = coords[dimName]
      if (coord !== undefined) {
        index += coord * multiplier
        multiplier *= dims[dimName]
      }
    }
    return index
  }

  const processed = {
    arrays: {
      dustrad: dustradArray,
      dustrate: dustrateArray,
      truckKm: truckKmArray,
      fertlevel: fertlevelArray,
      feedstock: feedstockArray,
      psd: psdArray,
    },

    removal: {},
    emissions: {},
    netRemoval: {},

    contours: {
      conservative: {
        case0: null,
        case1: null,
      },
      simpleSubtraction: {
        case0: null,
        case1: null,
      },
    },
  }

  feedstockArray.forEach((feedstock) => {
    const material = feedstock === 'gbas' ? 'basalt' : 'calcite'

    processed.removal[material] = {}
    processed.emissions[material] = {}
    processed.netRemoval[material] = {}

    fertlevelArray.forEach((fertlevel) => {
      processed.removal[material][fertlevel] = []
      processed.emissions[material][fertlevel] = []
      processed.netRemoval[material][fertlevel] = []

      for (let dustradIdx = 0; dustradIdx < dustradArray.length; dustradIdx++) {
        const removalByRate = []
        const emissionsByRate = []
        const netRemovalByRate = []

        for (
          let dustrateIdx = 0;
          dustrateIdx < dustrateArray.length;
          dustrateIdx++
        ) {
          const removalIndex = calculateIndex(
            {
              fertlevel: fertlevelArray.indexOf(fertlevel),
              feedstock: feedstockArray.indexOf(feedstock),
              psd: psdArray.indexOf('on'),
              dustrad: dustradIdx,
              dustrate: dustrateIdx,
            },
            ['fertlevel', 'feedstock', 'psd', 'dustrad', 'dustrate']
          )
          removalByRate.push(
            roundToTwoDecimals(-Number(cdrData.data[removalIndex] || 0))
          )

          const emissionsByTransport = []
          const netRemovalByTransport = []

          for (
            let truckKmIdx = 0;
            truckKmIdx < truckKmArray.length;
            truckKmIdx++
          ) {
            const emissionsIndex = calculateIndex(
              {
                fertlevel: fertlevelArray.indexOf(fertlevel),
                feedstock: feedstockArray.indexOf(feedstock),
                psd: psdArray.indexOf('on'),
                truckKm: truckKmIdx,
                dustrate: dustrateIdx,
                dustrad: dustradIdx,
              },
              [
                'fertlevel',
                'feedstock',
                'psd',
                'truckKm',
                'dustrate',
                'dustrad',
              ]
            )

            const netRemovalIndex = calculateIndex(
              {
                fertlevel: fertlevelArray.indexOf(fertlevel),
                feedstock: feedstockArray.indexOf(feedstock),
                psd: psdArray.indexOf('on'),
                dustrad: dustradIdx,
                dustrate: dustrateIdx,
                truckKm: truckKmIdx,
              },
              [
                'fertlevel',
                'feedstock',
                'psd',
                'dustrad',
                'dustrate',
                'truckKm',
              ]
            )

            emissionsByTransport.push(
              roundToTwoDecimals(
                Number(emissionsData.data[emissionsIndex] || 0)
              )
            )
            netRemovalByTransport.push(
              roundToTwoDecimals(
                -Number(netRemovalData.data[netRemovalIndex] || 0)
              )
            )
          }

          emissionsByRate.push(emissionsByTransport)
          netRemovalByRate.push(netRemovalByTransport)
        }

        processed.removal[material][fertlevel].push(removalByRate)
        processed.emissions[material][fertlevel].push(emissionsByRate)
        processed.netRemoval[material][fertlevel].push(netRemovalByRate)
      }
    })
  })

  processed.contours = {
    conservative: {
      case0: roundNestedData(conCase0Data),
      case1: roundNestedData(conCase1Data),
    },
    simpleSubtraction: {
      case0: roundNestedData(ssCase0Data),
      case1: roundNestedData(ssCase1Data),
    },
  }

  return processed
}

const saveData = async () => {
  try {
    console.log('Fetching data from Zarr store...')

    const [dustrad, dustrate, truckKm, fertlevel, feedstock, psd] =
      await Promise.all([
        loadZarr(dataUrl, 'dustrad'),
        loadZarr(dataUrl, 'dustrate_ton_ha_yr'),
        loadZarr(dataUrl, 'truck_km'),
        loadZarr(dataUrl, 'fertlevel'),
        loadZarr(dataUrl, 'feedstock'),
        loadZarr(dataUrl, 'PSD'),
      ])

    console.log('Fetching main data arrays...')

    const [
      cdrData,
      emissionsData,
      netRemovalData,
      conCase0Data,
      ssCase0Data,
      conCase1Data,
      ssCase1Data,
    ] = await Promise.all([
      get(await open(new FetchStore(dataUrl + '/cdr_dif'), { kind: 'array' })),
      get(
        await open(new FetchStore(dataUrl + '/E_total_perHa'), {
          kind: 'array',
        })
      ),
      get(await open(new FetchStore(dataUrl + '/netR'), { kind: 'array' })),
      get(
        await open(new FetchStore(dataUrl + '/con_case0'), {
          kind: 'array',
        })
      ),
      get(await open(new FetchStore(dataUrl + '/ss_case0'), { kind: 'array' })),
      get(
        await open(new FetchStore(dataUrl + '/con_case1'), {
          kind: 'array',
        })
      ),
      get(await open(new FetchStore(dataUrl + '/ss_case1'), { kind: 'array' })),
    ])

    console.log('Processing data...')

    const rawData = {
      dustradArray: Array.from(dustrad.data || []).map((d) =>
        roundToTwoDecimals(Number(d))
      ),
      dustrateArray: Array.from(dustrate.data || []).map((d) =>
        roundToTwoDecimals(Number(d))
      ),
      truckKmArray: Array.from(truckKm.data || []).map((d) =>
        roundToTwoDecimals(Number(d))
      ),
      fertlevelArray: Array.from(fertlevel.data || []),
      feedstockArray: Array.from(feedstock.data || []),
      psdArray: Array.from(psd.data || []),
      cdrData,
      emissionsData,
      netRemovalData,
      conCase0Data,
      ssCase0Data,
      conCase1Data,
      ssCase1Data,
    }

    const processedData = processData(rawData)

    const outputPath = '../../data/processed-data.json'

    mkdirSync(dirname(outputPath), { recursive: true })

    writeFileSync(outputPath, JSON.stringify(processedData))

    console.log(`Data saved successfully to ${outputPath}`)
  } catch (error) {
    console.error('Error saving data:', error)
    process.exit(1)
  }
}

saveData()
