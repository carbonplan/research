import { useThemeUI } from 'theme-ui'

const Logo = () => {
  const context = useThemeUI()
  const { primary, green, background } = context.theme.colors

  return (
    <svg
      viewBox='0 0 150 100'
      width='100%'
      height='100%'
      preserveAspectRatio='xMidYMid slice'
    >
      <style type='text/css'>
        {`
    .st0-cd{fill:${primary};}
    .st1-cd{opacity:0.2;fill:${primary};}
    .st2-cd{fill:none;stroke:${primary};stroke-width:2;stroke-miterlimit:10;}
    .st3-cd{opacity:0.2;fill:none;stroke:${primary};stroke-width:2;stroke-miterlimit:10;}
`}
      </style>
      <g>
        <rect x='24.4' y='20.2' className='st0-cd' width='28.2' height='13.4' />
        <rect
          x='24.4'
          y='44.5'
          className='st1-cd'
          width='101.2'
          height='13.4'
        />
        <rect x='24.4' y='44.5' className='st0-cd' width='87.2' height='13.4' />
        <rect x='61.2' y='20.2' className='st0-cd' width='28.2' height='13.4' />
        <rect x='97.4' y='20.2' className='st1-cd' width='28.2' height='13.4' />
        <line className='st2-cd' x1='24.9' y1='75.3' x2='29.4' y2='79.8' />
        <line className='st2-cd' x1='37' y1='70.8' x2='28.6' y2='79.3' />
        <line className='st2-cd' x1='46.9' y1='75.3' x2='51.4' y2='79.8' />
        <line className='st2-cd' x1='59' y1='70.8' x2='50.6' y2='79.3' />
        <line className='st2-cd' x1='68.9' y1='75.3' x2='73.4' y2='79.8' />
        <line className='st2-cd' x1='81' y1='70.8' x2='72.6' y2='79.3' />
        <line className='st2-cd' x1='90.9' y1='75.3' x2='95.4' y2='79.8' />
        <line className='st2-cd' x1='103' y1='70.8' x2='94.6' y2='79.3' />
        <polyline
          className='st3-cd'
          points='113.1,75.3 116.9,79.1 125.1,70.9  '
        />
      </g>
    </svg>
  )
}

export default Logo
