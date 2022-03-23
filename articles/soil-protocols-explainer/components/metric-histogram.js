import { Box } from 'theme-ui'
import { Row, Column } from '@carbonplan/components'
import Squares from './squares'
import Rating from './rating'

const durability = [2, 2, 2, 2, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2]

const additionality = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1]

const safeguards = [1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 1]

const rating = [1, 1, 3, 2, 2, 2, 1, 1, 1, 2, 2, 3, 1, 1]

const rigor = [1, 1, 3, 2, 3, 1, 1, 1, 1, 2, 1, 3, 1, 1]

const names = [
  'ACR C',
  'ACR G',
  'BCarbon',
  'CAR Soil',
  'FAO',
  'Gold Std',
  'Nori',
  'Plan Vivo',
  'Regen',
  'Verra FG',
  'Verra IA',
  'Verra Soil',
  'Verra SA',
  'Verra SG',
]

const sx = {
  header: {
    transform: ['rotate(-90deg)', 'none', 'none', 'none'],
    transformOrigin: 'left',
    fontSize: [0, 0, 0, 1],
    ml: ['4px', 0, 0, 0],
  },
  label: {
    fontSize: [0, 0, 0, 1],
    ml: ['4px', 0, 0, 0],
  },
}

const MetricHistogram = () => {
  return (
    <Box sx={{ mb: [5, 5, 5, 6] }}>
      <Row columns={[6]} sx={{ pb: ['1px'], mb: [1], mt: [8, 0, 0, 0] }}>
        <Column start={[2]} width={[1]}>
          <Box sx={sx.header}>Rigor</Box>
        </Column>
        <Column start={[3]} width={[1]}>
          <Box sx={sx.header}>Additionality</Box>
        </Column>
        <Column start={[4]} width={[1]}>
          <Box sx={sx.header}>Durability</Box>
        </Column>
        <Column start={[5]} width={[1]}>
          <Box sx={sx.header}>Safeguards</Box>
        </Column>
        <Column start={[6, 6, 6, 6]} width={[1]}>
          <Box sx={sx.header}>Rating</Box>
        </Column>
      </Row>
      {Array(rigor.length)
        .fill(0)
        .map((d, i) => {
          return (
            <Row key={i} columns={[6]}>
              <Column start={[1]} width={[6, 1, 1, 1]}>
                <Box sx={{ ...sx.label, mb: ['2px', 0, 0, 0] }}>{names[i]}</Box>
              </Column>
              <Column start={[2]} width={[1]}>
                <Squares value={rigor[i]} color='orange' />
              </Column>
              <Column start={[3]} width={[1]}>
                <Squares value={additionality[i]} color='orange' />
              </Column>
              <Column start={[4]} width={[1]}>
                <Squares value={durability[i]} color='orange' />
              </Column>
              <Column start={[5]} width={[1]}>
                <Squares value={safeguards[i]} color='orange' />
              </Column>
              <Column start={[6]} width={[1]}>
                <Rating value={rating[i]} color='orange' />
              </Column>
            </Row>
          )
        })}
    </Box>
  )
}

export default MetricHistogram
