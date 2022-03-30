import { useThemeUI, Box } from 'theme-ui'

const AnalysisExplanationDesktop = () => {
  const { theme } = useThemeUI()
  const { primary, secondary, green, muted } = theme.rawColors
  const { faux, heading } = theme.fonts

  return (
    <Box sx={{ mb: [2, 2, 4], userSelect: 'none' }}>
      <svg x='0px' y='0px' viewBox='0 0 670 226'>
        <style type='text/css'>
          {`
  .st0{fill:${green};}
  .st1{fill:${muted};}
  .st2{font-family:${heading};}
  .st3{font-size:16px;}
  .st4{letter-spacing:1;}
  .st5{fill:${secondary};}
  .st6{fill:none;stroke:${green};}
  .st7{fill:${secondary};}
  .st8{fill:none;stroke:${secondary};}
`}
        </style>
        <rect x='133.02' y='41.4' className='st0' width='14' height='184' />
        <rect x='163.02' y='179.4' className='st0' width='14' height='46' />
        <rect x='527.02' y='179.4' className='st1' width='14' height='46' />
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
            transform='matrix(1 0 0 1 0 15.4214)'
            className='st5 st2 st3 st4'
          >
            HOW CREDITING WORKS
          </text>
        </g>
        <g>
          <text
            transform='matrix(1 0 0 1 467.0156 15.4214)'
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
        <rect x='497.02' y='115.4' className='st0' width='14' height='110' />
        <g>
          <text transform='matrix(1 0 0 1 356.4397 147.6323)'>
            <tspan x='0' y='0' className='st7 st2 st3 st4'>
              ADJUST
            </tspan>
            <tspan x='-14.21' y='19.2' className='st7 st2 st3 st4'>
              COMMON
            </tspan>
            <tspan x='-18.27' y='38.4' className='st7 st2 st3 st4'>
              PRACTICE
            </tspan>
          </text>
        </g>
        <g>
          <text transform='matrix(1 0 0 1 578.458 127.4214)'>
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
          points='554.72,115.9 568.69,115.9 568.69,177.38 554.72,177.38 '
        />
        <line className='st6' x1='435.02' y1='115.9' x2='540.02' y2='115.9' />
        <rect x='467.02' y='41.4' className='st0' width='14' height='184' />
        <g>
          <g>
            <polyline
              className='st8'
              points='221.52,201.9 280.52,201.9 353.52,115.9 420.43,115.9     '
            />
            <g>
              <polygon
                className='st7'
                points='417.12,119.99 416.44,119.26 420.05,115.9 416.44,112.54 417.12,111.81 421.52,115.9      '
              />
            </g>
          </g>
        </g>
        <path className='st6' d='M346.21,126.16' />
      </svg>
    </Box>
  )
}

export default AnalysisExplanationDesktop
