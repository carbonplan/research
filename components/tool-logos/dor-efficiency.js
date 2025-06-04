import { useThemeUI } from 'theme-ui'
import { useThemedColormap } from '@carbonplan/colormaps'

const getColor = (colormap, ratio) => {
  const halfLength = colormap.length / 2
  let index

  if (ratio < 0) {
    index = Math.round(halfLength * (1 + ratio))
  } else {
    index = Math.round(halfLength + halfLength * ratio)
  }

  index = Math.max(0, Math.min(colormap.length - 1, index))

  const rgb = colormap[index]
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
}

const Logo = () => {
  const { theme } = useThemeUI()

  const baseColormap = useThemedColormap('cool')
  const negativeColorMapFull = [
    ...useThemedColormap('reds', { count: baseColormap.length }),
  ].reverse()
  const colormap = [...negativeColorMapFull, ...baseColormap]

  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 150 100'
      fill='none'
      preserveAspectRatio='xMidYMid slice'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M75.5592 -35.2612H93.6268V-29.4062H105.685V-17.7927H111.694V-6.35322H105.685V-0.691438H99.6557V4.9124H93.6268V10.4776H81.5881V4.9124H75.5592V-0.691438H69.5303V-29.4062H75.5592V-35.2612Z'
        stroke={theme.colors.background}
        fill={getColor(colormap, -0.38)}
      />
      <path
        d='M141.819 -17.7928H165.916V-12.0538H171.926V-0.69154H177.954V4.9123H171.926V10.4775H165.916V21.4339H159.887V26.8252H147.849V21.4339H141.819V4.9123H135.791V-12.0538H141.819V-17.7928Z'
        stroke={theme.colors.background}
        fill={getColor(colormap, -0.28)}
      />
      <path
        d='M69.5302 -12.0537V-0.691496H75.5591V4.91235H81.588V15.9847H75.5591V21.434H69.5302V32.1392H45.4338V21.434H39.4241V10.4775H33.3951V-0.691496H39.4241V-6.35328H45.4338V-12.0537H69.5302Z'
        stroke={theme.colors.background}
        fill={getColor(colormap, -0.38)}
      />
      <path
        d='M-32.8652 -12.0537H-26.8362V-6.35328H-2.73985V-0.691496H3.26985V4.91235H-2.73985V32.1392H-14.7977V37.4145H-26.8362V32.1392H-32.8652V26.8252H-44.9037V4.91235H-38.8941V-6.35328H-32.8652V-12.0537Z'
        stroke={theme.colors.background}
        fill={getColor(colormap, -0.48)}
      />
      <path
        d='M3.26972 -0.691528H33.395V10.4775H39.424V21.4339H45.4337V32.1392H39.424V37.4145H33.395V42.6125H27.3661V47.7526H21.3565V42.6125H15.3276V37.4145H3.26972V32.1392H-2.73999V4.91231H3.26972V-0.691528Z'
        stroke={theme.colors.background}
        fill={getColor(colormap, 0.18)}
      />
      <path
        d='M111.694 -12.0537H117.723V-6.35328H135.791V4.91235H141.82V26.8252H135.791V32.1392H123.752V37.4145H117.723V32.1392H111.694V26.8252H105.685V21.434H99.6559V15.9847H93.627V4.91235H99.6559V-0.691496H105.685V-6.35328H111.694V-12.0537Z'
        stroke={theme.colors.background}
        fill={getColor(colormap, -0.18)}
      />
      <path
        d='M81.5881 10.4775H93.6268V15.9848H99.6557V21.434H105.685V26.8253H111.694V32.1392H117.723V47.7526H105.685V52.8347H93.6268V57.8395H87.5977V62.7863H81.5881V57.8395H75.5592V47.7526H69.5303V21.434H75.5592V15.9848H81.5881V10.4775Z'
        stroke={theme.colors.background}
        fill={getColor(colormap, 0.13)}
      />
      <path
        d='M-14.7976 32.1392H3.26996V37.4145H15.3278V42.6126H21.3568V47.7526H27.3663V62.7863H21.3568V72.4481H15.3278V77.1631H-8.76867V72.4481H-20.8265V37.4145H-14.7976V32.1392Z'
        stroke={theme.colors.background}
        fill={getColor(colormap, 0.38)}
      />
      <path
        d='M141.82 21.434H147.849V26.8252H159.887V32.1392H165.916V67.6558H159.887V77.163H135.791V72.4481H129.762V62.7863H123.752V57.8395H117.723V37.4145H123.752V32.1392H135.791V26.8252H141.82V21.434Z'
        stroke={theme.colors.background}
        fill={getColor(colormap, 0.28)}
      />
      <path
        d='M39.424 32.1392H69.53V47.7526H75.559V57.8395H81.5879V67.6559H75.559V72.4481H69.53V77.1631H45.4337V67.6559H39.424V62.7863H27.3661V42.6126H33.395V37.4145H39.424V32.1392Z'
        stroke={theme.colors.background}
        fill={getColor(colormap, 0.18)}
      />
      <path
        d='M117.723 47.7526V57.8395H123.752V62.7863H129.762V72.4481H135.79V81.82H129.762V86.3997H123.752V95.3465H93.6267V86.3997H87.5976V81.82H81.588V72.4481H75.5591V67.6559H81.588V62.7863H87.5976V57.8395H93.6267V52.8347H105.685V47.7526H117.723Z'
        stroke={theme.colors.background}
        fill={getColor(colormap, 0.48)}
      />
      <path
        d='M21.3564 62.7863H39.4239V67.6559H45.4336V77.163H51.4625V90.902H45.4336V108.197H39.4239V103.984H21.3564V108.197H15.3275V95.3465H9.29858V77.163H15.3275V72.4481H21.3564V62.7863Z'
        stroke={theme.colors.background}
        fill={getColor(colormap, 0.28)}
      />
      <path
        d='M-26.8362 72.4481H-8.76873V77.1631H9.29884V95.3465H15.3278V112.351H9.29884V116.409H3.26991V120.409H-20.8266V116.409H-26.8362V90.9021H-32.8651V77.1631H-26.8362V72.4481Z'
        stroke={theme.colors.background}
        fill={getColor(colormap, 0.48)}
      />
      <path
        d='M69.5305 72.4481H81.5883V81.82H87.5979V86.3997H93.627V103.984H87.5979V112.351H81.5883V120.409H69.5305V124.312H57.4919V116.409H51.463V112.351H45.4341V90.9021H51.463V77.1631H69.5305V72.4481Z'
        stroke={theme.colors.background}
        fill={getColor(colormap, 0.58)}
      />
      <path
        d='M135.791 77.163H159.887V81.82H165.916V120.409H159.887V124.312H153.858V128.158H141.82V124.312H129.762V112.351H123.752V99.7136H117.723V95.3465H123.752V86.3997H129.762V81.82H135.791V77.163Z'
        stroke={theme.colors.background}
        fill={getColor(colormap, 0.48)}
      />
      <path
        d='M93.627 95.3464H117.723V99.7135H123.752V112.351H129.762V124.312H123.752V128.158H117.723V135.636H105.685V139.269H99.6559V135.636H93.627V128.158H87.598V124.312H81.5884V112.351H87.598V103.984H93.627V95.3464Z'
        stroke={theme.colors.background}
        fill={getColor(colormap, 0.68)}
      />
    </svg>
  )
}

export default Logo
