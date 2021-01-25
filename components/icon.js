import { Box, Text } from 'theme-ui'

const prefix = 'https://images.carbonplan.org'

const Icon = ({ color, icon, link }) => {
  return (
    <Box
      id='container'
      sx={{
        cursor: 'pointer',
        display: ['none', 'none', 'inline-block'],
        width: '120px',
        height: '120px',
        mt: [3],
        float: 'right',
        position: 'relative',
        borderRadius: '50%',
        borderStyle: 'solid',
        borderColor: 'primary',
        borderWidth: '0px',
        '&:hover > #background': {
          opacity: 0.5,
        },
        '&:hover > #arrow': {
          opacity: 1,
          left: '22px',
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
          top: '-20px',
          left: '10px',
          width: '100%',
          height: '100%',
          display: 'inline-block',
          borderRadius: '50%',
          fontSize: '110px',
          color: 'text',
          zIndex: 500,
          transition: '0.25s',
          opacity: 0,
        }}
      >
        →
      </Text>
    </Box>
  )
}

export default Icon
