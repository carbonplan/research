import { Box } from 'theme-ui'
import { useThemeUI } from 'theme-ui'

const Check = ({ closed, color }) => {
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
        {!closed && <polyline points='1.21 7.17 5.51 11.46 14.79 2.18' />}
        {closed && (
          <>
            <polyline points='5.95 13.34 10.25 17.64 19.53 8.36' />
            <circle cx='13' cy='13' r='12' />
          </>
        )}
      </Box>
    </span>
  )
}

export default Check
