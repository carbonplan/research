import { Box, Text } from 'theme-ui'
import { useThemeUI } from 'theme-ui'
import { default as NextLink } from 'next/link'

const BackArrow = () => {
  const context = useThemeUI()
  const theme = context.theme

  return <NextLink href='/research'><a><Text sx={{ 
    fontFamily: 'faux',
    color: 'text',
    display: 'inline-block', 
    mr: [3],
    fontSize: [7],
    mt: [2],
    cursor: 'pointer',
    '&:hover': {
      color: 'secondary'
    }
  }}>←</Text></a></NextLink>
  {/*
  <NextLink href='/'><Box sx={{ 
    mt: [5], 
    width: '200px', 
    height: '10px', 
    fill: 'none', 
    strokeWidth: '2px',
    stroke: theme.colors.primary,
    cursor: 'pointer',
    '&:hover': {
      stroke: theme.colors.secondary
    }
  }}>
  <svg>
    <line x1="150.2" y1="15.7" x2="3" y2="15.7"/>
    <circle cx="161.6" cy="15.6" r="11.2"/>
    <line x1="2.4" y1="15.7" x2="17" y2="30.7"/>
    <line x1="2.4" y1="15.8" x2="17" y2="0.8"/>
  </svg>
  </Box></NextLink>
  */}
}

export default BackArrow

