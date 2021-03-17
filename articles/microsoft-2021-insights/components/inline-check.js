import { Icons } from '@carbonplan/components'

const InlineCheck = () => {
  return (
    <Icons.Check
      as='span'
      sx={{ cursor: 'text', position: 'relative', px: [1], top: ['3px'] }}
      closed={true}
    />
  )
}

export default InlineCheck
