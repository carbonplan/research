import { useState, useEffect } from 'react'
import { useThemeUI, Flex, Box, Divider } from 'theme-ui'
import { json } from 'd3-fetch'
import { geoPath, geoAlbersUsa } from 'd3-geo'
import { feature } from 'topojson-client'
import { Row, Column, Tag, Slider } from '@carbonplan/components'
import Panel from './panel'

const projection = geoAlbersUsa().scale(1300).translate([487.5, 305])
const RiskMaps = () => {
  const [path, setPath] = useState(null)
  const [fire, setFire] = useState(null)
  const [biomass, setBiomass] = useState(null)
  const [drought, setDrought] = useState(null)
  const [insects, setInsects] = useState(null)
  const [year, setYear] = useState(0)
  const [scenario, setScenario] = useState(1)
  const [sliderChanging, setSliderChanging] = useState(false)
  const [tick, setTick] = useState(false)
  const {
    theme: { rawColors: colors },
  } = useThemeUI()

  useEffect(() => {
    const prefix =
      'https://storage.googleapis.com/carbonplan-data/raw/us-atlas/'
    const url = prefix + 'conus-albers-simplified.json'
    json(url).then((us) => {
      setPath(geoPath()(feature(us, us.objects.states)))
    })
  }, [])

  useEffect(() => {
    const prefix = 'https://carbonplan.blob.core.windows.net/'
    const path = prefix + 'carbonplan-forests/risks/results/web/'
    json(path + 'fire.geojson').then((d) => {
      setFire(d.features)
    })
    json(path + 'biomass.geojson').then((d) => {
      setBiomass(d.features)
    })
    json(path + 'insects.geojson').then((d) => {
      setInsects(d.features)
    })
    json(path + 'drought.geojson').then((d) => {
      setDrought(d.features)
    })
  }, [])

  return (
    <Box sx={{ mb: [5, 5, 5, 6] }}>
      <Row columns={[6, 6]}>
        <Panel
          position={'left'}
          scenario={scenario}
          year={year}
          label={'Fire'}
          color={'orange'}
          projection={projection}
          path={path}
          data={fire}
          domain={[3, 10]}
          init={5}
        />
        <Panel
          position={'right'}
          scenario={scenario}
          year={year}
          label={'Drought'}
          color={'pink'}
          projection={projection}
          path={path}
          data={drought}
          domain={[7, 15]}
          init={10}
        />
      </Row>
      <Row columns={[6, 6]}>
        <Panel
          position={'left'}
          scenario={scenario}
          year={year}
          label={'Insects'}
          color={'blue'}
          projection={projection}
          path={path}
          data={insects}
          domain={[2, 7]}
          init={4}
        />
        <Panel
          position={'right'}
          scenario={scenario}
          year={year}
          label={'Biomass'}
          color={'green'}
          projection={projection}
          path={path}
          data={biomass}
          domain={[2, 150]}
          slider={false}
          init={8}
        />
      </Row>
      <Row columns={[6, 6]} sx={{ mt: [5], mb: [5] }}>
        <Column start={[1, 1, 1, 1]} width={[3, 4, 4, 4]}>
          <Box
            sx={{
              fontFamily: 'heading',
              fontSize: [2, 2, 2, 3],
              letterSpacing: 'smallcaps',
              textTransform: 'uppercase',
              mb: [2, '25px', '25px', '25px'],
            }}
          >
            Scenario
          </Box>
          <Box>
            <Tag
              sx={{ mr: [3], mb: [1] }}
              onClick={() => setScenario(0)}
              value={scenario == 0}
            >
              SSP2-4.5
            </Tag>
            <Tag
              sx={{ mr: [3], mb: [1] }}
              onClick={() => setScenario(1)}
              value={scenario == 1}
            >
              SSP3-7.0
            </Tag>
            <Tag
              sx={{ mr: [3], mb: [1] }}
              onClick={() => setScenario(2)}
              value={scenario == 2}
            >
              SSP5-8.5
            </Tag>
          </Box>
        </Column>
        <Column start={[4, 5, 5, 5]} width={[3, 2, 2, 2]}>
          <Box
            sx={{
              fontFamily: 'heading',
              fontSize: [2, 2, 2, 3],
              letterSpacing: 'smallcaps',
              textTransform: 'uppercase',
              display: 'inline-block',
              mb: [0],
            }}
          >
            Year
          </Box>
          <Slider
            onMouseUp={(e) => {
              setSliderChanging(false)
            }}
            onTouchEnd={(e) => {
              setSliderChanging(false)
            }}
            onMouseDown={() => {
              setSliderChanging(true)
            }}
            onTouchStart={() => {
              setSliderChanging(true)
            }}
            onKeyDown={() => {
              if (tick) clearTimeout(tick)
              setSliderChanging(true)
              setTick(
                setTimeout(() => {
                  setSliderChanging(false)
                }, 250)
              )
            }}
            onChange={(e) => setYear(parseInt(e.target.value))}
            value={year}
            step={1}
            min={0}
            max={8}
            sx={{ my: [3, '12px', '12px', '12px'] }}
          />
          <Flex sx={{ justifyContent: 'space-between' }}>
            <Box
              sx={{
                fontFamily: 'mono',
                fontSize: [1, 1, 1, 2],
                letterSpacing: 'smallcaps',
                textTransform: 'uppercase',
              }}
            >
              2010
            </Box>
            <Box
              sx={{
                fontFamily: 'mono',
                fontSize: [1, 1, 1, 2],
                letterSpacing: 'smallcaps',
                textTransform: 'uppercase',
                color: 'secondary',
                transition: '0.15s',
                opacity: sliderChanging ? 1 : 0,
              }}
            >
              {year * 10 + 2010}
            </Box>
            <Box
              sx={{
                fontFamily: 'mono',
                fontSize: [1, 1, 1, 2],
                letterSpacing: 'smallcaps',
                textTransform: 'uppercase',
              }}
            >
              2090
            </Box>
          </Flex>
        </Column>
      </Row>
    </Box>
  )
}

export default RiskMaps
