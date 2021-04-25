import { useRef, useState, useEffect } from 'react'
import { useThemeUI, Box, Grid, Slider } from 'theme-ui'
import { darken } from '@theme-ui/color'
import { Row, Column } from '@carbonplan/components'
import LabeledToggle from '../labeled-toggle'
import CostCurve from '../charts/cost-curve'

let chart = null

const Curve = ({
  name,
  description,
  units,
  value,
  setValue,
  displayValue,
  scales,
}) => {
  const container = useRef(null)
  const { theme } = useThemeUI()
  const [isVariable, setIsVariable] = useState(false)

  useEffect(() => {
    chart = new CostCurve(
      container,
      theme,
      value,
      setValue,
      name,
      scales,
      !isVariable
    )

    return function cleanup() {
      container.current.innerHTML = ''
    }
  }, [theme, isVariable])

  useEffect(() => {
    let id = null

    const listener = () => {
      clearTimeout(id)
      id = setTimeout(() => {
        if (container.current.offsetWidth > 0) {
          chart = new CostCurve(
            container,
            theme,
            value,
            setValue,
            name,
            scales,
            !isVariable
          )
        }
      }, 150)
    }

    window.addEventListener('resize', listener)

    return () => {
      window.removeEventListener('resize', listener)
    }
  }, [theme])

  const format = (value) => {
    return `$${value.toFixed(0)}`
  }

  return (
    <Box
      sx={{
        mt: [4, 5, 6, 7],
        mb: [4, 5, 6, 7],
      }}
    >
      <Box
        sx={{
          fontFamily: 'heading',
          letterSpacing: 'smallcaps',
          textTransform: 'uppercase',
          fontSize: [3, 3, 3, 4],
          mt: [3],
          mb: [1],
        }}
      >
        {name}
        <Box
          sx={{
            display: 'inline-block',
            mt: [1],
            position: 'absolute',
            right: ['0px'],
          }}
        >
          <LabeledToggle
            value={isVariable}
            setValue={setIsVariable}
            labels={{ on: 'vary', off: 'fixed' }}
          />
        </Box>
      </Box>
      <Row columns={[6, 6, 5, 5]}>
        <Column start={[1]} width={[4, 4, 3, 3]}>
          <Box
            sx={{
              fontFamily: 'faux',
              letterSpacing: 'faux',
              fontSize: [2, 2, 2, 3],
              mt: [0],
              mb: [1],
            }}
          >
            {description}
          </Box>
        </Column>
      </Row>
      <Row columns={[6, 6, 5, 5]}>
        <Column start={[1]} width={[1]}>
          <Box
            sx={{
              borderStyle: 'solid',
              borderColor: 'primary',
              borderWidth: '0px',
              borderBottomWidth: '1px',
              pb: [1],
              pt: [2],
            }}
          >
            <Box
              sx={{
                display: 'inline-block',
                color: 'pink',
                fontSize: [4],
                fontFamily: 'mono',
                letterSpacing: 'mono',
              }}
            >
              {format(displayValue)}
            </Box>
          </Box>
          <Box
            sx={{
              color: 'secondary',
              fontSize: [2],
              fontFamily: 'faux',
              letterSpacing: 'faux',
              pt: [1],
            }}
          >
            {units}
          </Box>
        </Column>
        <Column start={[2]} width={[5, 5, 4, 4]}>
          <Box sx={{ mt: ['5px'], ml: ['-10px'] }}>
            <Box ref={container} sx={{ height: '200px', width: '100%' }} />
          </Box>
        </Column>
      </Row>
    </Box>
  )
}

export default Curve
