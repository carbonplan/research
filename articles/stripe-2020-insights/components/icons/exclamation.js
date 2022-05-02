import { Box } from 'theme-ui'
import { useThemeUI } from 'theme-ui'

const Exclamation = ({ closed, color }) => {
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
            <line class='st0' x1='8' y1='0.9' x2='8' y2='9.6' />
            <line x1='7.97' y1='11.3' x2='7.97' y2='13.01' />
          </>
        )}
        {closed && (
          <>
            <circle cx='13' cy='13' r='12' />
            <line x1='13' y1='17.3' x2='13' y2='19.5' />
            <line x1='13' y1='6.9' x2='13' y2='15.0' />
          </>
        )}
      </Box>
    </span>
  )
}

export default Exclamation
