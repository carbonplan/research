import { Box } from 'theme-ui'
import Caption from './caption'

const TableCaption = ({ number, children }) => {
  return (
    <Caption number={number} label='table'>
      {children}
    </Caption>
  )
}

export default TableCaption
