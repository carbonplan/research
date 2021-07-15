import { useThemeUI } from 'theme-ui'

const Logo = () => {
  const context = useThemeUI()
  const { primary, pink, background } = context.theme.colors

  return (
    <svg
      viewBox='0 0 150 100'
      width='100%'
      height='100%'
      preserveAspectRatio='xMidYMid slice'
    >
      <style type='text/css'>
        {`
  .st0-pc{fill:none;stroke:${pink};stroke-miterlimit:10;}
  .st1-pc{opacity:0.2;fill:${pink};}
  .st2-pc{opacity:0.6;fill:${pink};}
  .st3-pc{fill:${pink};}
  `}
      </style>
      <g>
        <path className='st0-pc' d='M0.2,10.7c0,0,62.9,24.6,149.6,26' />
        <line className='st0-pc' x1='0' y1='51.6' x2='150' y2='51.6' />
        <rect x='0' y='62.6' className='st1-pc' width='74.3' height='27.4' />
        <rect x='75.1' y='62.6' className='st2-pc' width='74.9' height='27.4' />
        <rect x='72.3' y='10.6' className='st3-pc' width='4.5' height='79.4' />
      </g>
    </svg>
  )
}

export default Logo
