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
  .st0-dc{fill:${primary};fill-opacity:0.2;}
  .st1-dc{fill:${primary};fill-opacity:0.4;}
  .st2-dc{fill:${primary};fill-opacity:0.8;}
  .st3-dc{fill:${primary};fill-opacity:0.6;}
  `}
      </style>
      <path
        className='st0-dc'
        d='M16,60.8c6,14.5,22.6,21.4,37.1,15.5c14.5-6,21.4-22.6,15.5-37.1c-4.4-10.7-14.8-17.6-26.3-17.6v15.6
  c7.1,0,12.8,5.7,12.8,12.8s-5.7,12.8-12.8,12.8c-5.2,0-9.9-3.1-11.8-7.9L16,60.8z'
      />
      <path
        className='st1-dc'
        d='M19,33.7c-5.5,7.9-6.7,18.1-3,27.1l14.5-5.9c-1.7-4-1.2-8.6,1.3-12.2L19,33.7z'
      />
      <path
        className='st2-dc'
        d='M42.3,21.6c-1.6,0-3.3,0.1-4.9,0.4l2.7,15.4c0.7-0.1,1.5-0.2,2.2-0.2V21.6z'
      />
      <path
        className='st3-dc'
        d='M37.4,22C30,23.3,23.3,27.5,19,33.7l12.8,8.9c1.9-2.8,4.9-4.7,8.3-5.3L37.4,22z'
      />
      <path className='st4' d='M13.9,21.6' />
      <path
        className='st0-dc'
        d='M112.8,78c15.4-2.8,25.7-17.6,22.9-33.1c-2.5-13.5-14.2-23.3-28-23.3v15.6c7.1,0,12.8,5.7,12.8,12.8
  c0,6.2-4.4,11.5-10.5,12.6L112.8,78z'
      />
      <path
        className='st1-dc'
        d='M79.4,52.5c1.4,15.6,15.2,27.2,30.8,25.8c0.9-0.1,1.8-0.2,2.6-0.4L110,62.6c-6.9,1.3-13.6-3.3-14.9-10.3
  c-0.1-0.4-0.1-0.8-0.2-1.2L79.4,52.5z'
      />
      <path
        className='st2-dc'
        d='M107.7,21.6c-2.8,0-5.7,0.4-8.4,1.3l4.6,14.9c1.2-0.4,2.5-0.6,3.8-0.6V21.6z'
      />
      <path
        className='st3-dc'
        d='M99.3,22.8c-12.8,4-21.1,16.3-19.9,29.6l15.6-1.4c-0.5-6,3.2-11.6,9-13.3L99.3,22.8z'
      />
      <path className='st4' d='M79.3,21.6' />
    </svg>
  )
}

export default Logo
