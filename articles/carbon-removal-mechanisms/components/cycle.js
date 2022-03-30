import { Box } from 'theme-ui'
import { shade, mix } from '@theme-ui/color'
import { Row, Column } from '@carbonplan/components'

const tags = {
  mineralization: 'grey',
  soil: 'orange',
  biomass: 'yellow',
  forests: 'green',
  ocean: 'teal',
  dac: 'purple',
}

const Cycle = ({ tag, data, labels, intro }) => {
  const sxStock = (stock) => {
    const enhanced = data.flux.filter(
      (fx) => fx.from == stock && fx.type == 'enhanced'
    )
    if (data.stock[stock] || enhanced.length > 0) return tags[tag]
    else return 'muted'
  }

  const sxStockInner = (stock) => {
    if (data.stock[stock]) return tags[tag]
    else return 'none'
  }

  const isAffected = (flux) => {
    const enhanced = data.flux.filter(
      (fx) => fx.from == flux.from && fx.to == flux.to && fx.type == 'enhanced'
    )
    const avoided = data.flux.filter(
      (fx) => fx.from == flux.from && fx.to == flux.to && fx.type == 'avoided'
    )
    return [enhanced.length > 0, avoided.length > 0]
  }

  const sxFlux = (flux, lateral) => {
    const [enhanced, avoided] = isAffected(flux)
    if (avoided) {
      return 'none'
    } else if (enhanced) {
      return tags[tag]
    } else if (lateral) {
      return 'background'
    } else {
      return 'muted'
    }
  }

  const sxFluxAvoided = (flux, display) => {
    const avoided = data.flux.filter(
      (fx) => fx.from == flux.from && fx.to == flux.to && fx.type == 'avoided'
    )
    if (avoided.length > 0) {
      if (display) {
        return 'initial'
      } else {
        return tags[tag]
      }
    } else return 'none'
  }

  const element = (tag, shift) => {
    const down = () => {
      return (
        <Box as='g' sx={{ stroke: sxFlux({ from: 'atmosphere', to: tag }) }}>
          <g transform='translate(12.8,22.5)'>
            // left edge
            <line x1='26' y1='68' x2='21.5' y2='63' />
            // right edge
            <line x1='26' y1='68' x2='30.5' y2='63' />
            // shaft
            <line x1='26' y1='68' x2='26' y2='16' />
          </g>
        </Box>
      )
    }

    const up = () => {
      return (
        <Box as='g' sx={{ stroke: sxFlux({ from: tag, to: 'atmosphere' }) }}>
          <g transform='translate(12.8,22.5)'>
            // shaft
            <line x1='13' y1='16' x2='13' y2='68' />
            // right edge
            <line x1='13' y1='16' x2='17.5' y2='21' />
            // left edge
            <line x1='13' y1='16' x2='8.5' y2='21' />
          </g>
        </Box>
      )
    }

    const circle = () => {
      return (
        <Box as='g' sx={{ fill: mix(sxStock(tag), 'background', 0.5) }}>
          <circle cx='33.6' cy='91.1' r='18' />
        </Box>
      )
    }

    const avoided = () => {
      return (
        <Box
          as='g'
          sx={{
            stroke: sxFluxAvoided({ from: tag, to: 'atmosphere' }),
            display: sxFluxAvoided({
              from: tag,
              to: 'atmosphere',
              display: true,
            }),
          }}
        >
          <g transform='translate(12.8,22.5)'>
            // hidden line
            <Box
              as='line'
              x1='13'
              y1='16'
              x2='13'
              y2='68'
              sx={{ stroke: mix('secondary', 'background', 0.4) }}
            />
            // highlighted line
            <line x1='13' y1='60' x2='13' y2='68' />
            // right edge
            <Box
              as='line'
              x1='13'
              y1='16'
              x2='17.5'
              y2='21'
              sx={{ stroke: mix('secondary', 'background', 0.4) }}
            />
            // left edge
            <Box
              as='line'
              x1='13'
              y1='16'
              x2='8.5'
              y2='21'
              sx={{ stroke: mix('secondary', 'background', 0.4) }}
            />
          </g>
          <Box
            as='circle'
            sx={{ fill: 'background' }}
            cx='25.9'
            cy='74'
            r='6.7'
          />
          <line x1='20.4' y1='77.3' x2='30.7' y2='70' />
        </Box>
      )
    }

    const [enhancedUp, avoidedUp] = isAffected({ from: 'atmosphere', to: tag })
    const [enhancedDown, avoidedDown] = isAffected({
      from: tag,
      to: 'atmosphere',
    })
    const enhancedStock = data.stock[tag]

    return (
      <g transform={`translate(${shift},0)`}>
        {enhancedUp && enhancedDown && (
          <>
            {circle()}
            {up()}
            {down()}
            {avoided()}
          </>
        )}
        {enhancedUp && !enhancedDown && (
          <>
            {up()}
            {circle()}
            {down()}
            {avoided()}
          </>
        )}
        {!enhancedUp && enhancedDown && (
          <>
            {down()}
            {circle()}
            {up()}
            {avoided()}
          </>
        )}
        {!enhancedUp && !enhancedDown && !enhancedStock && (
          <>
            {circle()}
            {down()}
            {up()}
            {avoided()}
          </>
        )}
        {!enhancedUp && !enhancedDown && enhancedStock && (
          <>
            {down()}
            {up()}
            {circle()}
            {avoided()}
          </>
        )}
      </g>
    )
  }

  const arrow = (from, to, shift, flip) => {
    let t
    if (flip) {
      t = `translate(${shift},68) scale(-1, 1)`
    } else {
      t = `translate(${shift},68)`
    }
    return (
      <g transform={`translate(${shift},0)`}>
        <Box
          as='g'
          sx={{ stroke: sxFlux({ from: from, to: to }, true) }}
          transform={t}
        >
          // top edge
          <line x1='43' y1='23.3' x2='48' y2='19.2' />
          // bottom edge
          <line x1='48' y1='27.4' x2='43' y2='23.3' />
          // shaft
          <line x1='43' y1='23.3' x2='70.3' y2='23.3' />
        </Box>
      </g>
    )
  }

  const label = (stock, shift) => {
    let check = stock.toLowerCase()
    if (check === 'geologic') check = 'geological'
    if (check === 'fuels') check = 'fuel'
    return (
      <Box
        as='text'
        x={shift}
        y='126'
        sx={{ fill: data.stock[check] || intro ? 'primary' : 'muted' }}
      >
        {stock}
      </Box>
    )
  }

  return (
    <Row columns={[6]} sx={{ mb: [6, 6, 6, 7] }}>
      <Column start={[1]} width={[6, 5, 5, 5]}>
        <Box
          sx={{
            width: ['100%'],
          }}
        >
          <svg
            stroke='none'
            strokeWidth='2px'
            strokeLinecap='round'
            strokeMiterlimit='10'
            fill='none'
            viewBox='6 16 335 110'
          >
            <Box
              as='rect'
              sx={{ fill: mix('muted', 'background', 0.5) }}
              x='6.3'
              y='21.4'
              width='333.8'
              height='33'
              rx='17'
            />

            <g transform=''>
              {arrow('land', 'material', 78)}
              {arrow('material', 'geological', 43)}
              {arrow('fuel', 'geological', 60, 1)}
            </g>

            <g transform='translate(0,0)'>
              {element('fuel', 0)}
              {element('geological', 70)}
              {element('material', 140)}
              {element('land', 210)}
              {element('ocean', 280)}
            </g>

            {labels && (
              <>
                <Box
                  as='g'
                  sx={{
                    fill: 'text',
                    textTransform: 'uppercase',
                    fontFamily: 'heading',
                    fontSize: ['12px'],
                  }}
                >
                  <text x='131' y='26'>
                    Atmosphere
                  </text>
                  {label('Fuels', 16)}
                  {label('Geologic', 73)}
                  {label('Material', 148)}
                  {label('Land', 228)}
                  {label('Ocean', 293)}
                </Box>
              </>
            )}
          </svg>
        </Box>
      </Column>
    </Row>
  )
}

export default Cycle
