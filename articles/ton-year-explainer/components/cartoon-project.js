import { useThemeUI, Box } from 'theme-ui'
import { Row, Column } from '@carbonplan/components'
import {
  Chart,
  Grid,
  Label,
  Axis,
  AxisLabel,
  Line,
  Plot,
  Ticks,
  TickLabels,
} from '@carbonplan/charts'

const sx = {
  label: {
    color: 'green',
    fontSize: [3, 4, 4, '28px'],
  },
  co2Label: {
    position: 'absolute',
    fontFamily: 'mono',
    letterSpacing: 'mono',
    textTransform: 'uppercase',
    fontSize: [0, 0, 0, 1],
    color: 'primary',
  },
}

const ASPECT_RATIO = 144 / 684
const heights = {
  div: [
    `calc((6 / 6 * (100vw - 24px * 7) + 5 * 24px) * ${ASPECT_RATIO} + 170px)`,
    `calc((6 / 8 * (100vw - 32px * 9) + 5 * 32px) * ${ASPECT_RATIO} + 185px)`,
    `calc((6 / 12 * (100vw - 32px * 13) + 5 * 32px) * ${ASPECT_RATIO} + 185px)`,
    `calc(min(500px, (6 / 12 * (100vw - 48px * 13) + 5 * 48px) * ${ASPECT_RATIO} + 200px))`,
  ],
  svg: [
    `calc((6 / 6 * (100vw - 24px * 7) + 5 * 24px) * ${ASPECT_RATIO})`,
    `calc((6 / 8 * (100vw - 32px * 9) + 5 * 32px) * ${ASPECT_RATIO})`,
    `calc((6 / 12 * (100vw - 32px * 13) + 5 * 32px) * ${ASPECT_RATIO})`,
    `calc((6 / 12 * (100vw - 48px * 13) + 5 * 48px) * ${ASPECT_RATIO})`,
  ],
}
const circleSizes = [3, 3, 2.75, 2.5]

const Svg = () => {
  const { theme } = useThemeUI()

  return (
    <Box
      as='svg'
      height='100%'
      width='100%'
      fill='none'
      preserveAspectRatio='none'
      viewBox='0 0 684 144'
      style={{ overflow: 'visible' }}
      sx={{ strokeWidth: [1.25, 1, 1, 0.75] }}
    >
      <line
        y1='-0.5'
        x2='14.4927'
        y2='-0.5'
        transform='matrix(0.763903 -0.645331 0.779796 0.626033 80 111.602)'
        stroke={theme.colors.primary}
      />
      <line
        y1='-0.5'
        x2='14.4927'
        y2='-0.5'
        transform='matrix(0.763903 -0.645331 0.779796 0.626033 170 112.602)'
        stroke={theme.colors.primary}
      />
      <line
        y1='-0.5'
        x2='14.584'
        y2='-0.5'
        transform='matrix(-0.824514 -0.565841 0.711279 -0.702909 80.0254 94.7966)'
        stroke={theme.colors.primary}
      />
      <line
        y1='-0.5'
        x2='14.584'
        y2='-0.5'
        transform='matrix(-0.824514 -0.565841 0.711279 -0.702909 170.025 94.7966)'
        stroke={theme.colors.primary}
      />
      <Box
        as='circle'
        cx='352'
        cy='38'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='387'
        cy='61'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='356'
        cy='51'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='372'
        cy='55'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='402'
        cy='46'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='402'
        cy='59'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='424'
        cy='53'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='442'
        cy='49'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='355'
        cy='64'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='379'
        cy='44'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='468'
        cy='47'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='477'
        cy='59'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='490'
        cy='52'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='505'
        cy='50'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='521'
        cy='52'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='536'
        cy='56'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='557'
        cy='54'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='576'
        cy='53'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='630'
        cy='56'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='652'
        cy='57'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='597'
        cy='56'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <line
        x1='79.5'
        y1='143'
        x2='79.5'
        y2='120'
        stroke={theme.colors.primary}
      />
      <line
        x1='169.5'
        y1='144'
        x2='169.5'
        y2='121'
        stroke={theme.colors.primary}
      />
      <line
        x1='79.5'
        y1='120'
        x2='79.5'
        y2='66'
        stroke={theme.colors.primary}
      />
      <line
        x1='169.5'
        y1='123'
        x2='169.5'
        y2='66'
        stroke={theme.colors.primary}
      />
      <line
        y1='-0.5'
        x2='14.9023'
        y2='-0.5'
        transform='matrix(-0.806908 -0.590677 0.733562 -0.679623 80.0254 135.433)'
        stroke={theme.colors.primary}
      />
      <line
        y1='-0.5'
        x2='14.9023'
        y2='-0.5'
        transform='matrix(-0.806908 -0.590677 0.733562 -0.679623 170.025 135.433)'
        stroke={theme.colors.primary}
      />
      <line
        x1='255.234'
        y1='143'
        x2='255.234'
        y2='88'
        stroke={theme.colors.primary}
      />
      <line
        y1='-0.5'
        x2='14.9023'
        y2='-0.5'
        transform='matrix(-0.806908 -0.590677 0.733562 -0.679623 256.023 134.433)'
        stroke={theme.colors.primary}
      />
      <line
        y1='-0.5'
        x2='14.4927'
        y2='-0.5'
        transform='matrix(0.763903 -0.645331 0.779796 0.626033 256.023 111.602)'
        stroke={theme.colors.primary}
      />
      <path
        d='M50.3536 87.3536C50.5488 87.1583 50.5488 86.8417 50.3536 86.6464L47.1716 83.4645C46.9763 83.2692 46.6597 83.2692 46.4645 83.4645C46.2692 83.6597 46.2692 83.9763 46.4645 84.1716L49.2929 87L46.4645 89.8284C46.2692 90.0237 46.2692 90.3403 46.4645 90.5355C46.6597 90.7308 46.9763 90.7308 47.1716 90.5355L50.3536 87.3536ZM10.5 68.3953L10.5 47L9.5 47L9.5 68.3953L10.5 68.3953ZM50 86.5L30 86.5L30 87.5L50 87.5L50 86.5ZM9.5 68.3953C9.5 78.98 18.7128 87.5 30 87.5L30 86.5C19.1958 86.5 10.5 78.3608 10.5 68.3953L9.5 68.3953Z'
        fill={theme.colors.primary}
      />
      <path
        opacity='0.9'
        d='M287.354 34.3536C287.549 34.1583 287.549 33.8417 287.354 33.6464L284.172 30.4645C283.976 30.2692 283.66 30.2692 283.464 30.4645C283.269 30.6597 283.269 30.9763 283.464 31.1716L286.293 34L283.464 36.8284C283.269 37.0237 283.269 37.3403 283.464 37.5355C283.66 37.7308 283.976 37.7308 284.172 37.5355L287.354 34.3536ZM264.204 34.5H287V33.5H264.204V34.5ZM247.5 74V54H246.5V74H247.5ZM264.204 33.5C254.358 33.5 246.5 42.7515 246.5 54H247.5C247.5 43.1571 255.047 34.5 264.204 34.5V33.5Z'
        fill={theme.colors.primary}
      />
      <Box
        as='circle'
        cx='293'
        cy='72'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='91.0921'
        cy='83.0934'
        transform='rotate(29.7554 91.0921 83.0934)'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='306.092'
        cy='69.0934'
        transform='rotate(29.7554 306.092 69.0934)'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='331.094'
        cy='35.0933'
        transform='rotate(29.7554 331.094 35.0933)'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='99'
        cy='112'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='271'
        cy='56'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='298.424'
        cy='59.7127'
        transform='rotate(29.7554 298.424 59.7127)'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='72'
        cy='81'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='256'
        cy='63'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='286.094'
        cy='51.0933'
        transform='rotate(29.7554 286.094 51.0933)'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='274'
        cy='45'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='321.092'
        cy='67.0934'
        transform='rotate(29.7554 321.092 67.0934)'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='269'
        cy='70'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='88.0921'
        cy='114.093'
        transform='rotate(29.7554 88.0921 114.093)'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='314.094'
        cy='35.0933'
        transform='rotate(29.7554 314.094 35.0933)'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='69'
        cy='100'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='239'
        cy='54'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='98'
        cy='103'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='243'
        cy='35'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        transform='matrix(0.366822 0.930291 -0.930294 0.366815 327.892 48.8913)'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='282.092'
        cy='65.0934'
        transform='rotate(29.7554 282.092 65.0934)'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='260'
        cy='50'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        transform='matrix(0.36682 0.930292 -0.930293 0.366817 58.8916 107.891)'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='335.892'
        cy='58.8913'
        transform='rotate(68.4804 335.892 58.8913)'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='87.0921'
        cy='94.0934'
        transform='rotate(29.7554 87.0921 94.0934)'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='298.092'
        cy='41.0933'
        transform='rotate(29.7554 298.092 41.0933)'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='311.44'
        cy='51.0904'
        transform='rotate(29.7554 311.44 51.0904)'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='68.0921'
        cy='113.093'
        transform='rotate(29.7554 68.0921 113.093)'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='181.092'
        cy='83.0934'
        transform='rotate(29.7554 181.092 83.0934)'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='189'
        cy='112'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='162'
        cy='81'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='178.092'
        cy='114.093'
        transform='rotate(29.7554 178.092 114.093)'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='159'
        cy='100'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='188'
        cy='103'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        transform='matrix(0.36682 0.930292 -0.930293 0.366817 148.892 107.891)'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='177.092'
        cy='94.0934'
        transform='rotate(29.7554 177.092 94.0934)'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='158.092'
        cy='113.093'
        transform='rotate(29.7554 158.092 113.093)'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        cx='311.44'
        cy='51.0904'
        transform='rotate(29.7554 311.44 51.0904)'
        stroke={theme.colors.pink}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        opacity='0.6'
        cx='26'
        cy='10'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        opacity='0.6'
        cx='75.8577'
        cy='9.09335'
        transform='rotate(29.7554 75.8577 9.09335)'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        opacity='0.6'
        cx='98.0941'
        cy='12.0934'
        transform='rotate(29.7554 98.0941 12.0934)'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        opacity='0.6'
        transform='matrix(0.36682 0.930292 -0.930293 0.366817 88.8916 3.89133)'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        opacity='0.6'
        cx='39'
        cy='35'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        opacity='0.6'
        cx='66.4242'
        cy='35.7127'
        transform='rotate(29.7554 66.4242 35.7127)'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        opacity='0.6'
        cx='24'
        cy='40'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        opacity='0.6'
        cx='54.0941'
        cy='30.0933'
        transform='rotate(29.7554 54.0941 30.0933)'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        opacity='0.6'
        cx='35'
        cy='22'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        opacity='0.6'
        cx='57.0921'
        cy='18.0933'
        transform='rotate(29.7554 57.0921 18.0933)'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        opacity='0.6'
        cx='42'
        cy='13'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        opacity='0.6'
        cx='83.0941'
        cy='19.0933'
        transform='rotate(29.7554 83.0941 19.0933)'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        opacity='0.6'
        cx='11'
        cy='31'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        opacity='0.6'
        cx='14'
        cy='18'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        opacity='0.6'
        transform='matrix(0.36682 0.930292 -0.930293 0.366817 94.8916 25.8913)'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        opacity='0.6'
        cx='54.1507'
        cy='7.81039'
        transform='rotate(29.7554 54.1507 7.81039)'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        opacity='0.6'
        cx='25'
        cy='26'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        opacity='0.6'
        transform='matrix(0.36682 0.930292 -0.930293 0.366817 104.892 32.8913)'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        opacity='0.6'
        cx='69.0941'
        cy='21.0933'
        transform='rotate(29.7554 69.0941 21.0933)'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <Box
        as='circle'
        opacity='0.6'
        cx='83.4398'
        cy='35.0904'
        transform='rotate(29.7554 83.4398 35.0904)'
        stroke={theme.colors.green}
        sx={{ r: circleSizes }}
      />
      <path
        d='M94.8803 95.8988C96.3708 94.8152 97.5847 93.3815 98.4197 91.7186C99.2547 90.0556 99.6864 88.212 99.6784 86.3429C99.6336 83.2894 98.4429 80.3699 96.3519 78.1875C94.261 76.0051 91.4296 74.7263 88.4424 74.6153C89.9476 72.6258 90.7598 70.1801 90.7503 67.6656C90.7503 64.5717 89.5474 61.6045 87.4061 59.4168C85.2647 57.2291 82.3605 56 79.3322 56H79.0285C76.0002 56 73.096 57.2291 70.9547 59.4168C68.8133 61.6045 67.6104 64.5717 67.6104 67.6656C67.6104 70.1494 68.3989 72.5662 69.8575 74.5533C66.7859 74.5859 63.851 75.8556 61.6903 78.0863C59.5296 80.317 58.3177 83.3287 58.3179 86.4671C58.3053 88.3745 58.7533 90.2556 59.6219 91.944C60.4906 93.6324 61.7533 95.076 63.2982 96.147C61.7031 96.2652 60.1463 96.7032 58.7168 97.436C57.2873 98.1688 56.0131 99.1822 54.9669 100.418C53.9207 101.654 53.1231 103.088 52.6195 104.639C52.1159 106.19 51.9162 107.827 52.0319 109.457C52.1475 111.087 52.5763 112.677 53.2935 114.138C54.0108 115.598 55.0026 116.9 56.2124 117.969C57.4221 119.038 58.8261 119.853 60.344 120.367C61.862 120.882 63.4643 121.086 65.0595 120.967H94.5766C97.7982 121.041 100.917 119.805 103.246 117.53C105.575 115.255 106.924 112.128 106.997 108.836C107.069 105.545 105.859 102.359 103.632 99.9793C101.406 97.5996 98.3448 96.2211 95.1233 96.147L94.8803 95.8988Z'
        strokeLinejoin='bevel'
        stroke={theme.colors.primary}
      />
      <path
        d='M184.88 95.8988C186.371 94.8152 187.585 93.3815 188.42 91.7186C189.255 90.0556 189.686 88.212 189.678 86.3429C189.634 83.2894 188.443 80.3699 186.352 78.1875C184.261 76.0051 181.43 74.7263 178.442 74.6153C179.948 72.6258 180.76 70.1801 180.75 67.6656C180.75 64.5717 179.547 61.6045 177.406 59.4168C175.265 57.2291 172.36 56 169.332 56H169.029C166 56 163.096 57.2291 160.955 59.4168C158.813 61.6045 157.61 64.5717 157.61 67.6656C157.61 70.1494 158.399 72.5662 159.858 74.5533C156.786 74.5859 153.851 75.8556 151.69 78.0863C149.53 80.317 148.318 83.3287 148.318 86.4671C148.305 88.3745 148.753 90.2556 149.622 91.944C150.491 93.6324 151.753 95.076 153.298 96.147C151.703 96.2652 150.146 96.7032 148.717 97.436C147.287 98.1688 146.013 99.1822 144.967 100.418C143.921 101.654 143.123 103.088 142.619 104.639C142.116 106.19 141.916 107.827 142.032 109.457C142.148 111.087 142.576 112.677 143.294 114.138C144.011 115.598 145.003 116.9 146.212 117.969C147.422 119.038 148.826 119.853 150.344 120.367C151.862 120.882 153.464 121.086 155.059 120.967H184.577C187.798 121.041 190.917 119.805 193.246 117.53C195.575 115.255 196.924 112.128 196.997 108.836C197.069 105.545 195.859 102.359 193.632 99.9793C191.406 97.5996 188.345 96.2211 185.123 96.147L184.88 95.8988Z'
        strokeLinejoin='bevel'
        stroke={theme.colors.primary}
      />
    </Box>
  )
}

const CartoonProject = () => {
  return (
    <Row columns={[6]} sx={{ mt: ['26px', 6, 6, 8] }}>
      <Column start={1} width={[6, 6, 6, 6]}>
        <Box sx={{ position: 'relative', height: heights.div }}>
          <Box
            sx={{ position: 'absolute', width: '100%', height: heights.div }}
          >
            <Chart
              x={[0, 6]}
              y={[0, 1]}
              clamp={false}
              padding={{ top: 88, left: 0, bottom: 46 }}
            >
              <TickLabels bottom />
              <Ticks bottom />
              <Axis bottom />
              <Grid vertical />
              <AxisLabel bottom align='right' units='years'>
                Time
              </AxisLabel>
              <Label x={0.5} y={1.1} width={1} align='center' sx={sx.label}>
                +1
              </Label>
              <Label x={1.5} y={1.1} width={1} align='center' sx={sx.label}>
                +1
              </Label>
              <Label
                x={2.5}
                y={1.1}
                width={1}
                align='center'
                sx={{ ...sx.label, color: 'pink' }}
              >
                +1
              </Label>
              <Label
                x={3.5}
                y={1.1}
                width={1}
                align='center'
                sx={{ ...sx.label, color: 'pink' }}
              >
                +0.5
              </Label>
              <Label
                x={4.5}
                y={1.1}
                width={1}
                align='center'
                sx={{ ...sx.label, color: 'pink' }}
              >
                +0.3
              </Label>
              <Label
                x={5.5}
                y={1.1}
                width={1}
                align='center'
                sx={{ ...sx.label, color: 'pink' }}
              >
                +0.2
              </Label>
              <Label
                x={1}
                y={1.21}
                width={4}
                align='center'
                verticalAlign='bottom'
                sx={sx.label}
              >
                <Box sx={{ textTransform: 'none', fontSize: [1, 1, 1, 2] }}>
                  (Moura Costa)
                </Box>
                2{' '}
                <Box
                  as='span'
                  sx={{ display: ['none', 'none', 'none', 'initial'] }}
                >
                  Ton-years
                </Box>
                <Box
                  as='span'
                  sx={{ display: ['initial', 'initial', 'initial', 'none'] }}
                >
                  T-YRS
                </Box>
              </Label>
              <Label
                x={5}
                y={1.21}
                width={2}
                align='center'
                verticalAlign='bottom'
                sx={{ ...sx.label, color: 'pink' }}
              >
                <Box sx={{ textTransform: 'none', fontSize: [1, 1, 1, 2] }}>
                  (Lashof)
                </Box>
                0.5{' '}
                <Box
                  as='span'
                  sx={{ display: ['none', 'none', 'none', 'initial'] }}
                >
                  Ton-years
                </Box>
                <Box
                  as='span'
                  sx={{ display: ['initial', 'initial', 'initial', 'none'] }}
                >
                  T-YRS
                </Box>
              </Label>

              <Plot>
                <Line
                  data={[
                    [4, 0],
                    [4, 1.4],
                  ]}
                  sx={{
                    stroke: 'secondary',
                    strokeWidth: 1,
                    strokeDasharray: 4,
                  }}
                />
                <Line
                  data={[
                    [0, 1.165],
                    [2, 1.165],
                  ]}
                  sx={{
                    stroke: 'green',
                    strokeWidth: 1,
                  }}
                />
                <Line
                  data={[
                    [4, 1.165],
                    [6, 1.165],
                  ]}
                  sx={{
                    stroke: 'pink',
                    strokeWidth: 1,
                  }}
                />
              </Plot>
            </Chart>
          </Box>
          <Box
            sx={{
              zIndex: -1,
              position: 'absolute',
              bottom: 0,
              mb: '45px',
              height: heights.svg,
              width: '100%',
            }}
          >
            <Svg />
            <Box
              sx={{
                ...sx.co2Label,
                bottom: ['17%', '22%', '22%', '22%'],
                left: ['0.5%', '2%', '2%', '2%'],
              }}
            >
              CO₂
            </Box>
            <Box
              sx={{
                ...sx.co2Label,
                bottom: '85%',
                left: '37%',
              }}
            >
              CO₂
            </Box>
          </Box>
        </Box>
      </Column>
    </Row>
  )
}

export default CartoonProject
