import { useThemeUI, Box, Divider, Text } from 'theme-ui'

const BoundaryCondition = () => {
  const context = useThemeUI()

  const { background, purple } = context.theme.colors
  const { faux } = context.theme.fonts

  return (
    <Box sx={{ width: '100%', maxWidth: '650px', my: [5] }}>
      <svg viewBox='0 0 1072.7 444.2'>
        <style type='text/css'>
          {`
          .st0{fill:${purple};stroke:${purple};stroke-miterlimit:10;}
          .st1{fill:none;stroke:${purple};stroke-width:2;stroke-miterlimit:10;}
          .st2{fill:none;}
          .st3{fill:${purple};}
          .st4{font-family:${faux};}
          .st5{font-size:28px;}
          .st6{fill:${background};}
          `}
        </style>
        <rect x='142.9' y='328.1' className='st0' width='184.7' height='75.7' />
        <polyline className='st1' points='88.1,344.5 88.1,76.9 311.4,76.9 ' />
        <polyline
          className='st1'
          points='592.6,389.7 592.6,441.4 88.1,441.4 88.1,389.7 '
        />
        <polyline className='st1' points='363.2,76.9 592.6,76.9 592.6,344 ' />
        <rect x='654.1' y='356.7' className='st2' width='198.8' height='32.8' />
        <text
          transform='matrix(1 0 0 1 654.0925 376.2583)'
          className='st3 st4 st5'
        >
          Transportation
        </text>
        <rect x='237' y='1.8' className='st2' width='203.7' height='32.8' />
        <text
          transform='matrix(1 0 0 1 237.156 21.3652)'
          className='st3 st4 st5'
        >
          Energy resource
        </text>
        <rect x='928.3' y='71.4' className='st2' width='142.2' height='105.9' />
        <rect x='1' y='356.7' className='st2' width='57.4' height='32.8' />
        <text
          transform='matrix(1 0 0 1 1.0142 376.2583)'
          className='st3 st4 st5'
        >
          Air
        </text>
        <rect x='170.7' y='342.1' className='st2' width='129.1' height='53.9' />
        <text transform='matrix(1 0 0 1 170.8018 361.6998)'>
          <tspan x='0' y='0' className='st6 st4 st5'>
            Direct air
          </tspan>
          <tspan x='14.1' y='27' className='st6 st4 st5'>
            capture
          </tspan>
        </text>
        <rect x='350.7' y='328.1' className='st0' width='184.7' height='75.7' />
        <g>
          <rect x='359.5' y='356.6' className='st2' width='167' height='53.9' />
          <text
            transform='matrix(1 0 0 1 360.3798 376.1901)'
            className='st6 st4 st5'
          >
            Compression
          </text>
        </g>
        <rect x='242.9' y='137.6' className='st0' width='191.9' height='75.7' />
        <g>
          <rect
            x='249.2'
            y='150.4'
            className='st2'
            width='179.2'
            height='53.9'
          />
          <text transform='matrix(1 0 0 1 257.4141 170.0396)'>
            <tspan x='0' y='0' className='st6 st4 st5'>
              Heat / power
            </tspan>
            <tspan x='10.6' y='27' className='st6 st4 st5'>
              generation
            </tspan>
          </text>
        </g>
        <rect x='970.3' y='356.7' className='st2' width='114.2' height='32.8' />
        <text
          transform='matrix(1 0 0 1 970.2505 376.2583)'
          className='st3 st4 st5'
        >
          Storage
        </text>
        <g>
          <g>
            <line className='st1' x1='338.8' y1='34.4' x2='338.8' y2='119' />
            <g>
              <polygon
                className='st3'
                points='330.7,112.4 332.1,111 338.8,118.2 345.5,111 347,112.4 338.8,121.2      '
              />
            </g>
          </g>
        </g>
        <g>
          <g>
            <polyline
              className='st1'
              points='442.8,303.8 442.8,264.2 235.9,264.2 235.9,303.8     '
            />
            <g>
              <polygon
                className='st3'
                points='451,297.2 449.5,295.8 442.8,303 436.1,295.8 434.6,297.2 442.8,306      '
              />
            </g>
            <g>
              <polygon
                className='st3'
                points='227.7,297.2 229.1,295.8 235.9,303 242.6,295.8 244,297.2 235.9,306      '
              />
            </g>
          </g>
        </g>
        <line className='st1' x1='338.8' y1='263.9' x2='338.8' y2='227.7' />
        <g>
          <g>
            <line className='st1' x1='49.8' y1='367.1' x2='123.4' y2='367.1' />
            <g>
              <polygon
                className='st3'
                points='116.8,375.3 115.4,373.8 122.6,367.1 115.4,360.4 116.8,358.9 125.6,367.1      '
              />
            </g>
          </g>
        </g>
        <g>
          <g>
            <line className='st1' x1='554.4' y1='367.1' x2='628' y2='367.1' />
            <g>
              <polygon
                className='st3'
                points='621.3,375.3 620,373.8 627.2,367.1 620,360.4 621.3,358.9 630.1,367.1      '
              />
            </g>
          </g>
        </g>
        <g>
          <g>
            <line className='st1' x1='871.3' y1='367.1' x2='944.9' y2='367.1' />
            <g>
              <polygon
                className='st3'
                points='938.3,375.3 936.9,373.8 944.2,367.1 936.9,360.4 938.3,358.9 947.1,367.1      '
              />
            </g>
          </g>
        </g>
      </svg>
      <Divider sx={{ mt: [3] }} />
      <Text
        sx={{
          color: 'secondary',
          my: [3],
        }}
      >
        FIGURE 1{' '}
        <Text sx={{ display: 'inline-block', color: 'primary', mx: [1] }}>
          /
        </Text>{' '}
        Boundary conditions for the DAC cost calculator.{' '}
        <Text sx={{ display: 'inline-block', color: 'purple' }}>Purple</Text>{' '}
        box bounds the components considered for our analysis.
      </Text>
    </Box>
  )
}

export default BoundaryCondition
