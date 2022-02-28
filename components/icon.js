import { Box, Text } from 'theme-ui'

const prefix = 'https://images.carbonplan.org'

const Icon = ({ color, icon, hovered }) => {
  return (
    <Box
      id='container'
      tabIndex='-1'
      className={hovered && 'hovered'}
      sx={{
        cursor: 'pointer',
        display: ['inline-block'],
        width: ['80px', '120px', '130px', '150px'],
        height: ['80px', '120px', '130px', '150px'],
        float: ['none', 'none', 'right', 'right'],
        position: 'relative',
        borderRadius: '50%',
        borderStyle: 'solid',
        borderColor: 'primary',
        borderWidth: '0px',
        '@media (hover: hover) and (pointer: fine)': {
          '&:hover > #background, &.hovered > #background': {
            opacity: 0.5,
          },
          '&:hover > #arrow, &.hovered > #arrow': {
            opacity: 1,
            left: ['20px', '19px', '25px', '25px'],
          },
        },
      }}
    >
      <Box
        id='background'
        sx={{
          top: 0,
          left: 0,
          position: 'absolute',
          display: 'inline-block',
          borderRadius: '50%',
          width: '100%',
          height: '100%',
          backgroundColor: color,
          transition: '0.25s',
          opacity: 1,
          backgroundImage: [`url('${prefix}/${icon}.png')`],
          backgroundSize: 'contain',
        }}
      ></Box>
      <Text
        id='arrow'
        sx={{
          fontFamily: 'faux',
          position: 'absolute',
          top: ['-14px', '0px', '0px', '0px'],
          width: '100%',
          height: '100%',
          display: 'inline-block',
          borderRadius: '50%',
          fontSize: ['90px', '110px', '110px', '135px'],
          color: 'text',
          zIndex: 500,
          transition: '0.25s',
          display: ['none', 'initial', 'initial', 'intial'],
          left: ['0px', '0px', '0px', '0px'],
          opacity: hovered ? 1 : 0,
          textAlign: 'left',
        }}
      >
        <Box
          as='span'
          sx={{ position: 'relative', top: [0, '-19px', '-15px', '-25px'] }}
        >
          →
        </Box>
      </Text>
    </Box>
  )
}

export default Icon
