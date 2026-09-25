import { useEffect, useState } from 'react'
import { useThemedColormap } from '@carbonplan/colormaps'

export const CASE_LABELS = {
  hourly: 'Hourly',
  daily: 'Daily',
  monthly: 'Monthly',
  longterm: 'Long-term',
}

export const useCaseColors = () => {
  const colormap = useThemedColormap('wind', { count: 5, format: 'hex' })
  return {
    hourly: colormap[1],
    daily: colormap[2],
    monthly: colormap[3],
    longterm: colormap[4],
  }
}

export const filterLabelSx = {
  fontFamily: 'heading',
  letterSpacing: 'smallcaps',
  textTransform: 'uppercase',
  fontSize: [2, 2, 2, 3],
  mt: [0],
  pb: [0],
}

export const chartLabelSx = {
  fontFamily: 'mono',
  letterSpacing: 'mono',
  fontSize: [0, 0, 0, 1],
  whiteSpace: 'nowrap',
}

export const mulberry32 = (a) => () => {
  a |= 0
  a = (a + 0x6d2b79f5) | 0
  let t = Math.imul(a ^ (a >>> 15), 1 | a)
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296
}

// Drive highlighting using tap interactions on touch devices
export const useHasHover = () => {
  const [hasHover, setHasHover] = useState(true)

  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setHasHover(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  return hasHover
}

export const useHighlight = (isEqual = (a, b) => a === b) => {
  const hasHover = useHasHover()
  const [highlighted, setHighlighted] = useState(null)

  const getHandlers = (value) =>
    hasHover
      ? {
          onMouseEnter: () => setHighlighted(value),
          onMouseLeave: () => setHighlighted(null),
        }
      : {
          onClick: () =>
            setHighlighted((prev) =>
              prev != null && isEqual(prev, value) ? null : value
            ),
        }

  return { highlighted, setHighlighted, getHandlers, hasHover }
}
