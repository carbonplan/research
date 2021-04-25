import { useState, useEffect } from 'react'
import { useThemeUI } from 'theme-ui'

function useTheme(map) {
  const { theme } = useThemeUI()
  const { muted, background, primary, red } = theme.rawColors

  useEffect(() => {
    map.setPaintProperty('background', 'background-color', background)
    map.setPaintProperty('background', 'background-opacity', 0)
    map.setPaintProperty('background', 'background-color', muted)
    map.setPaintProperty('land', 'fill-opacity', 0)
    map.setPaintProperty('land', 'fill-color', background)
    map.setPaintProperty('lakes', 'fill-opacity', 1)
    map.setPaintProperty('lakes', 'fill-color', muted)
    map.setPaintProperty('countries', 'line-color', primary)
    map.setPaintProperty('countries', 'line-opacity', 1)
    map.setPaintProperty('states', 'line-color', primary)
    map.setPaintProperty('states', 'line-opacity', 1)
    map.setPaintProperty('roads', 'line-color', primary)
    map.setPaintProperty('roads', 'line-opacity', 1)
    map.setPaintProperty('rivers', 'line-color', muted)
    map.setPaintProperty('rivers', 'line-opacity', 0)
    map.setPaintProperty('project-fill', 'fill-color', primary)
    map.setPaintProperty('project-fill', 'fill-opacity', 1)
    map.setPaintProperty('fires', 'fill-color', red)
    map.setPaintProperty('fires', 'fill-opacity', 1)
    map.setPaintProperty('places-points', 'circle-color', primary)
    map.setPaintProperty('places-points', 'circle-opacity', 1)
    map.setPaintProperty('places-text', 'text-color', primary)
    map.setPaintProperty('places-text', 'text-opacity', 1)
    map.setPaintProperty('project-label', 'text-color', primary)
    map.setPaintProperty('project-label', 'text-opacity', 1)
    map.setPaintProperty('fire-label', 'text-color', red)
    map.setPaintProperty('fire-label', 'text-opacity', 1)
  }, [theme])
}

export default useTheme
