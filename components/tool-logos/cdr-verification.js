import { useThemeUI } from 'theme-ui'

const Logo = () => {
  const context = useThemeUI()
  const { primary, orange, pink, yellow } = context.theme.colors

  return (
    <svg
      viewBox='0 0 150 100'
      width='100%'
      height='100%'
      preserveAspectRatio='xMidYMid slice'
    >
      <style type='text/css'>
        {`
  .st0-cv{fill:none;stroke:${orange};stroke-width:2.5;}
  .st1-cv{fill:none;stroke:${pink};stroke-width:2.5;}
  .st2-cv{fill:none;stroke:${yellow};stroke-width:2.5;}
  .st3-cv{fill:none;stroke:${primary};stroke-width:2.5;}
  .st4-cv{fill:${primary};}
`}
      </style>
      <circle className='st0-cv' cx='75.9' cy='24.3' r='5' />
      <circle className='st1-cv' cx='124.9' cy='24.3' r='5' />
      <circle className='st0-cv' cx='124.9' cy='75.7' r='5' />
      <circle className='st0-cv' cx='25.1' cy='75.7' r='5' />
      <circle className='st2-cv' cx='25.1' cy='24.3' r='5' />
      <circle className='st0-cv' cx='75.9' cy='75.7' r='5' />
      <g>
        <g>
          <line className='st3-cv' x1='38.8' y1='24.3' x2='58.7' y2='24.3' />
          <g>
            <polygon
              className='st4-cv'
              points='50.4,34.5 48.7,32.7 57.7,24.3 48.7,15.9 50.4,14 61.4,24.3      '
            />
          </g>
        </g>
      </g>
      <g>
        <g>
          <line className='st3-cv' x1='111.9' y1='24.3' x2='92' y2='24.3' />
          <g>
            <polygon
              className='st4-cv'
              points='100.3,14 102,15.9 93,24.3 102,32.7 100.3,34.5 89.3,24.3      '
            />
          </g>
        </g>
      </g>
      <g>
        <g>
          <line className='st3-cv' x1='75.9' y1='38.4' x2='75.9' y2='58.1' />
          <g>
            <polygon
              className='st4-cv'
              points='65.7,49.8 67.5,48.1 75.9,57.2 84.3,48.1 86.1,49.8 75.9,60.8      '
            />
          </g>
        </g>
      </g>
      <g>
        <g>
          <line className='st3-cv' x1='90.2' y1='75.7' x2='110.1' y2='75.7' />
          <g>
            <polygon
              className='st4-cv'
              points='101.8,86 100.1,84.1 109.1,75.7 100.1,67.3 101.8,65.5 112.8,75.7      '
            />
          </g>
        </g>
      </g>
      <g>
        <g>
          <line className='st3-cv' x1='25.1' y1='38.4' x2='25.1' y2='58.1' />
          <g>
            <polygon
              className='st4-cv'
              points='14.8,49.8 16.7,48.1 25.1,57.2 33.5,48.1 35.3,49.8 25.1,60.8      '
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default Logo
