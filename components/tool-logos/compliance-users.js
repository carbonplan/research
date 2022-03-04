import { useThemeUI } from 'theme-ui'

const Logo = () => {
  const context = useThemeUI()
  const { primary, secondary } = context.theme.colors
  const { mono } = context.theme.fonts

  return (
    <svg
      viewBox='0 0 150 100'
      width='100%'
      height='100%'
      preserveAspectRatio='xMidYMid slice'
    >
      <style type='text/css'>
        {`
  .st0-cu{fill:${primary};}
  .st1-cu{font-family:${mono};}
  .st2-cu{font-size:11px;}
  .st3-cu{fill:${secondary};}
  .st4-cu{fill:${primary};}
  .st5-cu{fill:none;stroke:${secondary};stroke-width:2;stroke-miterlimit:10;}
`}
      </style>
      <text transform='matrix(1 0 0 1 24.4376 66.8355)'>
        <tspan x='0' y='0' className='st0-cu st1-cu st2-cu'>
          USER
        </tspan>
        <tspan x='0' y='13.2' className='st3-cu st1-cu st2-cu'>
          ____
        </tspan>
      </text>
      <text transform='matrix(1 0 0 1 73.6245 66.5797)'>
        <tspan x='0' y='0' className='st0-cu st1-cu st2-cu'>
          PROJECT
        </tspan>
        <tspan x='0' y='13.2' className='st3-cu st1-cu st2-cu'>
          ____
        </tspan>
      </text>
      <text transform='matrix(1 0 0 1 73.0417 28.9507)'>
        <tspan x='0' y='0' className='st0-cu st1-cu st2-cu'>
          FACILITY
        </tspan>
        <tspan x='0' y='13.2' className='st3-cu st1-cu st2-cu'>
          ____
        </tspan>
      </text>
      <g>
        <line className='st5-cu' x1='25.9' y1='41' x2='32.6' y2='34.3' />
        <circle className='st5-cu' cx='37.2' cy='29.6' r='6.2' />
      </g>
    </svg>
  )
}

export default Logo
