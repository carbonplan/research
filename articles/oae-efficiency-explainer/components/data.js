import { createContext, useContext, useEffect, useState } from 'react'
import { feature } from 'topojson-client'
import zarr from 'zarr-js'

const DataContext = createContext({})

export const DataWrapper = ({ children }) => {
  const [efficiencies, setEfficiencies] = useState({})
  const [regions, setRegions] = useState()
  const [loader, setLoader] = useState(null)

  useEffect(() => {
    zarr().open(
      'https://carbonplan-oae-efficiency.s3.us-west-2.amazonaws.com/store1b.zarr/OAE_efficiency',
      (err, get) => {
        setLoader(() => get)
      }
    )
  }, [])

  return (
    <DataContext.Provider
      value={{ efficiencies, setEfficiencies, regions, setRegions, loader }}
    >
      {children}
    </DataContext.Provider>
  )
}

export const useEfficiency = (injectionMonth) => {
  const { efficiencies, loader, setEfficiencies } = useContext(DataContext)

  useEffect(() => {
    if (!efficiencies[injectionMonth] && loader) {
      setEfficiencies((prev) => ({ ...prev, [injectionMonth]: 'loading' }))
      loader([0, 0, injectionMonth], (innerErr, array) => {
        setEfficiencies((prev) => ({ ...prev, [injectionMonth]: array }))
      })
    }
  }, [efficiencies, setEfficiencies, injectionMonth, loader])

  return {
    efficiency:
      efficiencies[injectionMonth] === 'loading'
        ? null
        : efficiencies[injectionMonth],
  }
}

export const useRegions = () => {
  const { regions, setRegions } = useContext(DataContext)

  useEffect(() => {
    if (!regions) {
      fetch(
        'https://carbonplan-oae-efficiency.s3.us-west-2.amazonaws.com/regions.topojson'
      )
        .then((response) => response.json())
        .then((topojsonData) => {
          const geojsonData = feature(
            topojsonData,
            topojsonData.objects.regions
          )
          setRegions(geojsonData)
        })
    }
  }, [regions, setRegions])

  return { regions: regions === 'loading' ? null : regions }
}
