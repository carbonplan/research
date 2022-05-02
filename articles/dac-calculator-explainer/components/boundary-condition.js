import { useThemeUI, Box, Divider, Text } from 'theme-ui'
import { Row, Column } from '@carbonplan/components'

const BoundaryCondition = () => {
  const context = useThemeUI()

  const { background, purple } = context.theme.colors
  const { faux, heading } = context.theme.fonts

  return (
    <Row columns={[6]}>
      <Column start={[1]} width={[6, 5, 5, 5]}>
        <Box sx={{ mb: [2, 2, 4], userSelect: 'none' }}>
          <svg viewBox='0 0 828.7 629.4'>
            <style type='text/css'>
              {`
            .st0{fill:${purple};stroke:${purple};stroke-miterlimit:10;}
            .st1{fill:none;stroke:${purple};stroke-width:2;stroke-miterlimit:10;}
            .st2{fill:none;}
            .st3{fill:${purple};}
            .st4{font-family:${heading};}
            .st5{font-size:26px;}
            .st6{fill:${background};}
            .st7{fill:none;stroke:${purple};stroke-width:2;stroke-miterlimit:10;stroke-dasharray:4,4;}
            `}
            </style>
            <rect
              x='571.4'
              y='145.8'
              className='st0'
              width='200.8'
              height='82.1'
            />
            <rect
              x='571.4'
              y='299.9'
              className='st0'
              width='200.8'
              height='82.1'
            />
            <rect
              x='571.4'
              y='299.9'
              className='st0'
              width='200.8'
              height='82.1'
            />
            <polyline
              className='st1'
              points='187.7,242.7 187.7,83.9 368.3,83.9 '
            />
            <polyline
              className='st1'
              points='645.2,444.9 187.7,444.9 187.7,286.9 '
            />
            <polyline
              className='st1'
              points='697,83.9 827,83.9 827,444.9 697,444.9 '
            />
            <rect
              x='560.7'
              y='506.5'
              className='st2'
              width='239.1'
              height='32.8'
            />
            <text
              transform='matrix(1 0 0 1 560.7131 524.6619)'
              className='st3 st4 st5'
            >
              TRANSPORTATION
            </text>
            <rect
              x='276.2'
              y='5.8'
              className='st2'
              width='239.1'
              height='32.8'
            />
            <text
              transform='matrix(1 0 0 1 284.3244 23.9714)'
              className='st3 st4 st5'
            >
              CO₂ DEPLETED AIR
            </text>
            <rect
              x='569.9'
              y='5.8'
              className='st2'
              width='203.7'
              height='32.8'
            />
            <text
              transform='matrix(1 0 0 1 651.9165 23.9713)'
              className='st3 st4 st5'
            >
              AIR
            </text>
            <rect
              x='596.5'
              y='161.9'
              className='st2'
              width='150.5'
              height='53.9'
            />
            <text transform='matrix(1 0 0 1 604.9211 180.0976)'>
              <tspan x='0' y='0' className='st6 st4 st5'>
                DIRECT AIR{' '}
              </tspan>
              <tspan x='10.1' y='31.2' className='st6 st4 st5'>
                CAPTURE
              </tspan>
            </text>
            <g>
              <rect
                x='637.2'
                y='251'
                className='st2'
                width='150.5'
                height='53.9'
              />
              <text
                transform='matrix(1 0 0 1 688.5464 269.2202)'
                className='st3 st4 st5'
              >
                CO₂
              </text>
            </g>
            <g>
              <rect
                x='570.5'
                y='331.5'
                className='st2'
                width='202.6'
                height='53.9'
              />
              <text
                transform='matrix(1 0 0 1 580.1046 349.6595)'
                className='st6 st4 st5'
              >
                COMPRESSION
              </text>
            </g>
            <rect
              x='247.4'
              y='222.6'
              className='st0'
              width='200.8'
              height='82.1'
            />
            <g>
              <rect
                x='258.2'
                y='238.7'
                className='st2'
                width='179.2'
                height='53.9'
              />
              <text transform='matrix(1 0 0 1 259.5679 256.8867)'>
                <tspan x='0' y='0' className='st6 st4 st5'>
                  HEAT / POWER{' '}
                </tspan>
                <tspan x='8.5' y='31.2' className='st6 st4 st5'>
                  GENERATION
                </tspan>
              </text>
            </g>
            <rect
              x='583.1'
              y='600.4'
              className='st2'
              width='177.3'
              height='32.8'
            />
            <text
              transform='matrix(1 0 0 1 613.3589 618.6375)'
              className='st3 st4 st5'
            >
              STORAGE
            </text>
            <g>
              <g>
                <line
                  className='st1'
                  x1='671.8'
                  y1='41.4'
                  x2='671.8'
                  y2='126'
                />
                <g>
                  <polygon
                    className='st3'
                    points='663.6,119.4 665.1,118 671.8,125.2 678.5,118 680,119.4 671.8,128.2      '
                  />
                </g>
              </g>
            </g>
            <g>
              <g>
                <line
                  className='st1'
                  x1='671.8'
                  y1='242.1'
                  x2='671.8'
                  y2='282.8'
                />
                <g>
                  <polygon
                    className='st3'
                    points='663.6,276.2 665.1,274.8 671.8,282 678.5,274.8 680,276.2 671.8,285      '
                  />
                </g>
              </g>
            </g>
            <g>
              <g>
                <line
                  className='st1'
                  x1='671.8'
                  y1='541.2'
                  x2='671.8'
                  y2='581.9'
                />
                <g>
                  <polygon
                    className='st3'
                    points='663.6,575.3 665.1,573.9 671.8,581.1 678.5,573.9 680,575.3 671.8,584.1      '
                  />
                </g>
              </g>
            </g>
            <g>
              <g>
                <polyline
                  className='st1'
                  points='547.6,185.9 508,185.9 508,340.8 547.6,340.8     '
                />
                <g>
                  <polygon
                    className='st3'
                    points='541,177.7 539.6,179.1 546.8,185.9 539.6,192.6 541,194 549.8,185.9      '
                  />
                </g>
                <g>
                  <polygon
                    className='st3'
                    points='541,349 539.6,347.5 546.8,340.8 539.6,334.1 541,332.6 549.8,340.8      '
                  />
                </g>
              </g>
            </g>
            <line className='st1' x1='507.7' y1='263.6' x2='466.5' y2='263.6' />
            <g>
              <g>
                <line
                  className='st1'
                  x1='150.4'
                  y1='263.6'
                  x2='224'
                  y2='263.6'
                />
                <g>
                  <polygon
                    className='st3'
                    points='217.4,271.8 216,270.3 223.3,263.6 216,256.9 217.4,255.4 226.2,263.6      '
                  />
                </g>
              </g>
            </g>
            <g>
              <g>
                <line
                  className='st1'
                  x1='671.8'
                  y1='400.9'
                  x2='671.8'
                  y2='485.5'
                />
                <g>
                  <polygon
                    className='st3'
                    points='663.6,478.9 665.1,477.5 671.8,484.7 678.5,477.5 680,478.9 671.8,487.7      '
                  />
                </g>
              </g>
            </g>
            <g>
              <rect
                x='-4.5'
                y='238.7'
                className='st2'
                width='138.7'
                height='88.8'
              />
              <text transform='matrix(1 0 0 1 36.3098 256.8868)'>
                <tspan x='0' y='0' className='st3 st4 st5'>
                  ENERGY
                </tspan>
                <tspan x='-36.3' y='31.2' className='st3 st4 st5'>
                  RESOURCE
                </tspan>
              </text>
            </g>
            <g>
              <g>
                <polyline
                  className='st7'
                  points='548.3,162.4 395.6,162.4 395.6,43.6    '
                />
                <g>
                  <polygon
                    className='st3'
                    points='403.8,50.2 402.3,51.5 395.6,44.3 388.9,51.5 387.4,50.2 395.6,41.4      '
                  />
                </g>
              </g>
            </g>
            <line className='st1' x1='421.3' y1='83.9' x2='646' y2='83.9' />
          </svg>
        </Box>
      </Column>
    </Row>
  )
}

export default BoundaryCondition
