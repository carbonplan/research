import { Row, Column } from '@carbonplan/components'
import { useCallback } from 'react'
import Parameter from './parameter'

const Parameters = ({
  timeHorizon,
  setTimeHorizon,
  delay,
  setDelay,
  discountRate,
  setDiscountRate,
}) => {
  const handleTimeHorizonChange = useCallback(
    (value) => {
      if (delay > value) {
        setDelay(value)
      }
      setTimeHorizon(value)
    },
    [delay]
  )
  const handleDelayChange = useCallback(
    (value) => {
      if (value > timeHorizon) {
        setTimeHorizon(value)
      }
      setDelay(value)
    },
    [timeHorizon]
  )

  return (
    <Row columns={6}>
      <Column
        start={[1, 1, 1, 1]}
        width={[6, 2, 2, 2]}
        sx={{ mb: [4, 0, 0, 0] }}
      >
        <Parameter
          label={<span>Time&nbsp;horizon</span>}
          units='years'
          onChange={handleTimeHorizonChange}
          value={timeHorizon}
          step={1}
          min={1}
          max={1000}
        />
      </Column>
      <Column
        start={[1, 3, 3, 3]}
        width={[6, 2, 2, 2]}
        sx={{ mb: [4, 0, 0, 0] }}
      >
        <Parameter
          label={<span>Storage&nbsp;period</span>}
          units='years'
          onChange={handleDelayChange}
          value={delay}
          step={1}
          min={1}
          max={1000}
        />
      </Column>
      <Column start={[1, 5, 5, 5]} width={[6, 2, 2, 2]}>
        <Parameter
          label={<span>Discount&nbsp;rate</span>}
          units='percent'
          onChange={setDiscountRate}
          value={discountRate}
          factor={100}
          decimals={2}
          step={0.0001}
          min={0}
          max={0.1}
        />
      </Column>
    </Row>
  )
}

export default Parameters
