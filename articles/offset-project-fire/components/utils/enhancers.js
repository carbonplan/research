import { useEffect } from 'react'
import useTheme from './use-theme'

export default function Enhancers({ map, time }) {
  useTheme(map)

  useEffect(() => {
    const filter = ['<=', 'day', time]
    map.setFilter('fires', filter)
  }, [map, time])

  return null
}
