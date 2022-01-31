import Caption from './caption'

const FigureCaption = ({ number, children }) => {
  return (
    <Caption number={number} label='figure'>
      {children}
    </Caption>
  )
}

export default FigureCaption
