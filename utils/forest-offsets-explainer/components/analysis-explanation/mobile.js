import { useThemeUI, Box } from 'theme-ui'

const AnalysisExplanationMobile = () => {
  const { theme } = useThemeUI()
  const { primary, secondary, green, muted } = theme.rawColors
  const { faux, heading } = theme.fonts

  return (
    <Box sx={{ mb: [2, 2, 4], userSelect: 'none' }}>
      <svg x='0px' y='0px' viewBox='0 0 522 226'>
        <style type='text/css'>
          {`  .st0{fill:${green};}
  .st1{fill:${muted};}
  .st2{font-family:${heading};}
  .st3{font-size:16px;}
  .st4{letter-spacing:1;}
  .st5{fill:${secondary};}
  .st6{fill:none;stroke:#7EB36A;}
  .st7{fill:none;stroke:${secondary};}
  `}
        </style>
        <rect x='133.02' y='41.4' className='st0' width='14' height='184' />
        <rect x='163.02' y='179.4' className='st0' width='14' height='46' />
        <rect x='380.02' y='179.4' className='st1' width='14' height='46' />
        <g>
          <text transform='matrix(1 0 0 1 163.458 145.6323)'>
            <tspan x='0' y='0' className='st0 st2 st3 st4'>
              BASELINE{' '}
            </tspan>
            <tspan x='0' y='19.2' className='st0 st2 st3 st4'>
              AVERAGE
            </tspan>
          </text>
        </g>
        <g>
          <text transform='matrix(1 0 0 1 4.2314 199.6323)'>
            <tspan x='0' y='0' className='st0 st2 st3 st4'>
              COMMON
            </tspan>
            <tspan x='-4.06' y='19.2' className='st0 st2 st3 st4'>
              PRACTICE
            </tspan>
          </text>
        </g>
        <g>
          <text transform='matrix(1 0 0 1 163.458 53.4214)'>
            <tspan x='0' y='0' className='st0 st2 st3 st4'>
              INITIAL{' '}
            </tspan>
            <tspan x='0' y='19.2' className='st0 st2 st3 st4'>
              CARBON
            </tspan>
          </text>
        </g>
        <g>
          <text
            transform='matrix(1 0 0 1 5.3467 15.4214)'
            className='st5 st2 st3 st4'
          >
            HOW CREDITING WORKS
          </text>
        </g>
        <g>
          <text
            transform='matrix(1 0 0 1 320.0156 15.4214)'
            className='st5 st2 st3 st4'
          >
            OUR ANALYSIS
          </text>
        </g>
        <g>
          <text transform='matrix(1 0 0 1 5.2827 54.4214)'>
            <tspan x='0' y='0' className='st0 st2 st3 st4'>
              UPFRONT
            </tspan>
            <tspan x='7.41' y='19.2' className='st0 st2 st3 st4'>
              CREDITS
            </tspan>
          </text>
        </g>
        <polyline
          className='st6'
          points='116.69,180.38 102.72,180.38 102.72,43.32 116.69,43.32 '
        />
        <line className='st6' x1='101.02' y1='201.9' x2='206.02' y2='201.9' />
        <rect x='350.02' y='115.4' className='st0' width='14' height='110' />
        <g>
          <text transform='matrix(1 0 0 1 431.458 127.4214)'>
            <tspan x='0' y='0' className='st0 st2 st3 st4'>
              OVER-
            </tspan>
            <tspan x='0' y='19.2' className='st0 st2 st3 st4'>
              CREDITING
            </tspan>
          </text>
        </g>
        <polyline
          className='st6'
          points='407.72,115.9 421.69,115.9 421.69,177.38 407.72,177.38 '
        />
        <line className='st6' x1='288.02' y1='115.9' x2='393.02' y2='115.9' />
        <rect x='320.02' y='41.4' className='st0' width='14' height='184' />
        <g>
          <text transform='matrix(1 0 0 1 349.9583 80.9487)'>
            <tspan x='0' y='0' className='st5 st2 st3 st4'>
              ADJUSTED
            </tspan>
            <tspan x='0' y='19.2' className='st5 st2 st3 st4'>
              COMMON PRACTICE
            </tspan>
          </text>
        </g>
        <g>
          <g>
            <polyline
              className='st7'
              points='216,201.5 258.5,201.5 258.5,115.9 278.92,115.9    '
            />
            <g>
              <polygon
                className='st5'
                points='275.6,119.99 274.92,119.26 278.53,115.9 274.92,112.54 275.6,111.81 280,115.9       '
              />
            </g>
          </g>
        </g>
      </svg>
    </Box>
  )
}

export default AnalysisExplanationMobile
