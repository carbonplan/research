import { Box, Text } from 'theme-ui'

const prefix = 'https://images.carbonplan.org'

const Icon = ({ color, icon, link }) => {
  return (
    <Box
      id='container'
      tabIndex='-1'
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
          '&:hover > #background': {
            opacity: 0.5,
          },
          '&:hover > #arrow': {
            opacity: 1,
            left: ['-10px', '-22px', '-30px', '30px'],
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
          top: ['-25px', '-20px', '-15px', '-24px'],
          left: ['-20px', '-42px', '-50px', '10px'],
          width: '100%',
          height: '100%',
          display: 'inline-block',
          borderRadius: '50%',
          fontSize: ['90px', '110px', '110px', '135px'],
          color: 'text',
          zIndex: 500,
          transition: '0.25s',
          display: ['none', 'initial', 'initial', 'intial'],
          opacity: 0,
        }}
      >
        →
      </Text>
    </Box>
  )
}

export default Icon
