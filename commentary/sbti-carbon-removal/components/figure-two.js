import { Box } from 'theme-ui'
import { Row, Column } from '@carbonplan/components'

const FigureTwo = ({ caption }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'muted',
        p: [3, 5, 5, 6],
        mx: [-3, -5, -5, -6],
      }}
    >
      <Row columns={[6]}>
        <Column start={1} width={[6, 6, 4, 4]}>
          <Box
            as='img'
            src='https://images.carbonplan.org/blog/sbti-carbon-removal/figure-two.png'
            sx={{
              width: '100%',
              borderWidth: 3,
              borderStyle: 'solid',
              borderColor: 'primary',
            }}
          />
        </Column>
        <Column
          start={[1, 1, 5, 5]}
          width={[6, 6, 2, 2]}
          sx={{ mt: [4, 4, 0, 0] }}
        >
          {caption}
        </Column>
      </Row>
    </Box>
  )
}

export default FigureTwo
