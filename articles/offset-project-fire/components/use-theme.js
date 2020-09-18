import { useState, useEffect } from 'react'
import { useThemeUI } from 'theme-ui'

function useTheme(map) {
  const context = useThemeUI()
  const theme = context.theme

  useEffect(() => {
    map.setPaintProperty(
      'background',
      'background-color',
      theme.colors.background
    )
    map.setPaintProperty('background', 'background-opacity', 0)
    map.setPaintProperty('background', 'background-color', theme.colors.muted)
    map.setPaintProperty('land', 'fill-opacity', 0)
    map.setPaintProperty('land', 'fill-color', theme.colors.background)
    map.setPaintProperty('lakes', 'fill-opacity', 1)
    map.setPaintProperty('lakes', 'fill-color', theme.colors.muted)
    map.setPaintProperty('countries', 'line-color', theme.colors.primary)
    map.setPaintProperty('countries', 'line-opacity', 1)
    map.setPaintProperty('states', 'line-color', theme.colors.primary)
    map.setPaintProperty('states', 'line-opacity', 1)
    map.setPaintProperty('roads', 'line-color', theme.colors.primary)
    map.setPaintProperty('roads', 'line-opacity', 1)
    map.setPaintProperty('rivers', 'line-color', theme.colors.muted)
    map.setPaintProperty('rivers', 'line-opacity', 0)
    map.setPaintProperty('project-fill', 'fill-color', theme.colors.primary)
    map.setPaintProperty('project-fill', 'fill-opacity', 1)
    map.setPaintProperty('fires', 'fill-color', theme.colors.red)
    map.setPaintProperty('fires', 'fill-opacity', 1)
    map.setPaintProperty('places-points', 'circle-color', theme.colors.primary)
    map.setPaintProperty('places-points', 'circle-opacity', 1)
    map.setPaintProperty('places-text', 'text-color', theme.colors.primary)
    map.setPaintProperty('places-text', 'text-opacity', 1)
    map.setPaintProperty('project-label', 'text-color', theme.colors.primary)
    map.setPaintProperty('project-label', 'text-opacity', 1)
    map.setPaintProperty('fire-label', 'text-color', theme.colors.red)
    map.setPaintProperty('fire-label', 'text-opacity', 1)
  }, [context])
}

export default useTheme
