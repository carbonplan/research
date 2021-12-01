import { Box } from 'theme-ui'
import { useThemeUI } from 'theme-ui'

const Question = ({ closed, color }) => {
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
          transform: closed ? 'translate(0px, 5px)' : 'translate(0px, 8px)',
        }}
      >
        {!closed && (
          <>
            <path d='M4.5,5A3.58,3.58,0,0,1,8.11,1.49,3.2,3.2,0,0,1,11.5,4.76C11.5,7.61,8,7,8,9.07V9.6' />
            <line x1='7.98' y1='11.3' x2='7.98' y2='13.6' />
          </>
        )}
        {closed && (
          <>
            <path d='M9.52,10.78a3.58,3.58,0,0,1,3.61-3.54,3.2,3.2,0,0,1,3.39,3.27c0,2.85-3.52,2.28-3.52,4.31v.53' />
            <line x1='13' y1='17.05' x2='13' y2='18.76' />
            <circle cx='13' cy='13' r='12' />
          </>
        )}
      </Box>
    </span>
  )
}

export default Question
