import { useState, useEffect } from 'react'
import { Box, Grid, Slider } from 'theme-ui'
import { useBreakpointIndex } from '@theme-ui/match-media'
import { json } from 'd3-fetch'
import DepthProfile from './depth-profile'
import DepthSlider from './depth-slider'

const sx = {
  tick: {
    fontFamily: 'mono',
    letterSpacing: 'mono',
    fontSize: [0, 0, 0, 1],
    textAlign: 'center',
    width: '100%',
    mt: ['38px'],
    ml: [0, '32px', '32px', '32px', '32px'],
    textTransform: 'uppercase',
  },
}

const datasets = ['bai', 'mondal', 'xiao', 'nunes', 'du', 'angers']
const Depth = () => {
  const [data, setData] = useState(null)
  const [depth, setDepth] = useState(100 - 30)
  const [sliderChanging, setSliderChanging] = useState(false)
  const breakpoint = useBreakpointIndex({ defaultIndex: 2 })

  useEffect(() => {
    const prefix =
      'https://storage.googleapis.com/carbonplan-data/articles/soil-depth-sampling/'
    const url = prefix + 'depth.json'
    json(url).then((d) => {
      setData(d)
    })
  }, [])

  return (
    <Box sx={{ mt: [7, 7, 7, 8], mb: [5, 5, 5, 6] }}>
      <Grid
        columns={[
          'repeat(3, 1fr)',
          'calc(0.12495 * 100vw - 34px) repeat(6, 1fr)',
          'calc(0.08333 * 100vw - 34px) repeat(6, 1fr)',
          'min(calc(0.08333 * 100vw - 48px), 108px) repeat(6, 1fr)',
        ]}
        gap={['8px', '4px', '4px', '4px']}
        sx={{ width: 'calc(100% - 56px)', rowGap: [8, 0, 0, 0] }}
      >
        {breakpoint > 0 && (
          <DepthSlider
            depth={depth}
            setDepth={setDepth}
            sliderChanging={sliderChanging}
            setSliderChanging={setSliderChanging}
          />
        )}
        {data &&
          datasets.map((d, i) => (
            <DepthProfile
              key={i}
              data={data[d]}
              depth={100 - depth}
              legend={breakpoint > 0 && i === 5}
              mobileLegend={breakpoint === 0 && (i === 2 || i === 5)}
              sliderChanging={sliderChanging}
            />
          ))}
      </Grid>
      <Box sx={sx.tick}>
        Relative effect size
        <Box sx={{ display: 'inline-block', color: 'secondary', ml: [2] }}>
          %
        </Box>
      </Box>
    </Box>
  )
}

export default Depth
