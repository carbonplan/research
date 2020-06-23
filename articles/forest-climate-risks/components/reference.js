import { Box, Link } from 'theme-ui'

const Reference = () => {
  return <Box sx={{ mt: [5], mb: [5] }}>
    <Box sx={{
      borderStyle: 'solid',
      borderWidth: '0px',
      borderTopWidth: '1px',
      borderColor: 'muted',
      pt: [3],
      pb: ['22px', 3, 3],
      textTransform: 'uppercase',
      letterSpacing: 'wide',
      fontFamily: 'heading',
      fontSize: [2],
      color: 'green'
    }}>
    <Box sx={{ maxWidth: '400px' }}>
    Climate-driven risks to the climate mitigation potential of forests
    </Box>
    </Box>
    <Box sx={{
      borderStyle: 'solid',
      borderWidth: '0px',
      borderTopWidth: '1px',
      borderColor: 'muted',
      pt: [3],
      pb: ['22px', 3, 3],
      fontSize: [2],
      fontFamily: 'faux',
      letterSpacing: 'faux'
    }}>
    William R. L. Anderegg, Anna T. Trugman, Grayson Badgley, Christa M. Anderson,
    Ann Bartuska, Philippe Ciais, Danny Cullenward, Christopher B. Field, Jeremy Freeman, 
    Scott J. Goetz, Jeffrey A. Hicke, Deborah Huntzinger, Robert B. Jackson, 
    John Nickerson, Stephen Pacala, James T. Randerson
    </Box>
    <Box sx={{
      borderStyle: 'solid',
      borderWidth: '0px',
      borderTopWidth: '1px',
      borderBottomWidth: '1px',
      borderColor: 'muted',
      pt: [3],
      pb: ['22px', 3, 3],
      fontSize: [2],
      fontFamily: 'faux',
      letterSpacing: 'faux',
      color: 'secondary'
    }}>
    Science, 368 (2020) {' '}
      <Link sx={{ color: 'secondary' }}href='https://dx.doi.org/10.1126/science.aaz7005'>
        10.1126/science.aaz7005
      </Link>
    </Box>
    
  </Box>
}

export default Reference