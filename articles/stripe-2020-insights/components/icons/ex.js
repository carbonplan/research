import { Box } from 'theme-ui'
import { useThemeUI } from 'theme-ui'

const Ex = ({ closed, color }) => {
  const context = useThemeUI()
  const theme = context.theme

  return (
    <span
      sx={{
        display: 'inline-block',
        ml: closed ? [1] : [0],
        mr: closed ? ['2px'] : [0],
        mt: closed ? ['-3px'] : [0],
      }}
    >
      <Box
        as='svg'
        height={closed ? '18px' : '22px'}
        width={closed ? '18px' : '22px'}
        stroke='none'
        fill='none'
        viewBox={closed ? '0 0 30 30' : '0 0 20 20'}
        sx={{
          strokeWidth: closed ? '2px' : '2px',
          stroke: color ? color : theme.colors.text,
          transform: closed ? 'translate(0px, 5px)' : 'translate(0px, 10px)',
        }}
      >
        {!closed && (
          <>
            <line x1='4.1' y1='3.1' x2='11.9' y2='10.9' />
            <line x1='11.9' y1='3.1' x2='4.1' y2='10.9' />
          </>
        )}
        {closed && (
          <>
            <line x1='9.1' y1='9.1' x2='16.9' y2='16.9' />
            <line x1='16.9' y1='9.1' x2='9.1' y2='16.9' />
            <circle cx='13' cy='13' r='12' />
          </>
        )}
      </Box>
    </span>
  )
}

export default Ex
