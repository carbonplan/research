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
        <rect x='149.9' y='328.1' className='st0' width='184.7' height='75.7' />
        <polyline className='st1' points='95.1,344.5 95.1,76.9 318.4,76.9 ' />
        <polyline
          className='st1'
          points='599.6,389.7 599.6,441.4 95.1,441.4 95.1,389.7 '
        />
        <polyline className='st1' points='370.2,76.9 599.6,76.9 599.6,344 ' />
        <rect x='657.1' y='356.7' className='st2' width='198.8' height='32.8' />
        <text
          transform='matrix(1 0 0 1 657.0925 376.2583)'
          className='st3 st4 st5'
        >
          Transportation
        </text>
        <rect x='244' y='1.8' className='st2' width='203.7' height='32.8' />
        <text
          transform='matrix(1 0 0 1 244.156 21.3652)'
          className='st3 st4 st5'
        >
          Energy resource
        </text>
        <rect x='1' y='356.7' className='st2' width='57.4' height='32.8' />
        <text
          transform='matrix(1 0 0 1 1.0142 376.2583)'
          className='st3 st4 st5'
        >
          Air
        </text>
        <rect x='177.7' y='342.1' className='st2' width='129.1' height='53.9' />
        <text transform='matrix(1 0 0 1 177.8018 361.6998)'>
          <tspan x='0' y='0' className='st6 st4 st5'>
            Direct air
          </tspan>
          <tspan x='14.1' y='27' className='st6 st4 st5'>
            capture
          </tspan>
        </text>
        <rect x='357.7' y='328.1' className='st0' width='184.7' height='75.7' />
        <g>
          <rect x='366.5' y='356.6' className='st2' width='167' height='53.9' />
          <text
            transform='matrix(1 0 0 1 367.3798 376.1901)'
            className='st6 st4 st5'
          >
            Compression
          </text>
        </g>
        <rect x='249.9' y='137.6' className='st0' width='191.9' height='75.7' />
        <g>
          <rect
            x='256.2'
            y='150.4'
            className='st2'
            width='179.2'
            height='53.9'
          />
          <text transform='matrix(1 0 0 1 264.4141 170.0396)'>
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
            <line className='st1' x1='345.8' y1='34.4' x2='345.8' y2='119' />
            <g>
              <polygon
                className='st3'
                points='337.7,112.4 339.1,111 345.8,118.2 352.5,111 354,112.4 345.8,121.2      '
              />
            </g>
          </g>
        </g>
        <g>
          <g>
            <polyline
              className='st1'
              points='449.8,303.8 449.8,264.2 242.9,264.2 242.9,303.8     '
            />
            <g>
              <polygon
                className='st3'
                points='458,297.2 456.5,295.8 449.8,303 443.1,295.8 441.6,297.2 449.8,306      '
              />
            </g>
            <g>
              <polygon
                className='st3'
                points='234.7,297.2 236.1,295.8 242.9,303 249.6,295.8 251,297.2 242.9,306      '
              />
            </g>
          </g>
        </g>
        <line className='st1' x1='345.8' y1='263.9' x2='345.8' y2='227.7' />
        <g>
          <g>
            <line className='st1' x1='57.8' y1='367.1' x2='131.4' y2='367.1' />
            <g>
              <polygon
                className='st3'
                points='124.8,375.3 123.4,373.8 130.6,367.1 123.4,360.4 124.8,358.9 133.6,367.1      '
              />
            </g>
          </g>
        </g>
        <g>
          <g>
            <line className='st1' x1='561.4' y1='367.1' x2='635' y2='367.1' />
            <g>
              <polygon
                className='st3'
                points='628.3,375.3 627,373.8 634.2,367.1 627,360.4 628.3,358.9 637.1,367.1      '
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
