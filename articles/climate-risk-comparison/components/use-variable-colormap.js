import { useThemedColormap } from '@carbonplan/colormaps'

const COLORMAPS = {
  ca: 'fire',
  nystate: 'water',
  nyc: 'water',
}

const useVariableColormap = ({ region, provider }) => {
  const count = provider === 'xdi' ? 3 : 5
  const base = useThemedColormap(COLORMAPS[region], {
    count: count + 2,
  })

  return base.slice(2)
}

export default useVariableColormap
