import { CheckCircle } from '@carbonplan/icons'

const InlineCheck = () => {
  return (
    <CheckCircle
      sx={{
        position: 'relative',
        width: [25, 25, 25, 30],
        height: [19, 19, 19, 22],
        strokeWidth: [1.5, 1.5, 1.5, 2],
        px: [1],
        top: ['4px'],
      }}
    />
  )
}

export default InlineCheck
