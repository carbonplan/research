import { useState } from 'react'
import { Box, Flex, Container } from 'theme-ui'
import { alpha } from '@theme-ui/color'
import { Row, Column, Expander } from '@carbonplan/components'
import { Info } from '@carbonplan/icons'
import Metric from './metric'
import Details from './details'
import AnimateHeight from 'react-animate-height'

const fields = [
  'rating',
  'practices',
  'rigor',
  'durability',
  'safeguards',
  'additionality',
]

const sx = {
  label: {
    fontFamily: 'mono',
    letterSpacing: 'mono',
    fontSize: 1,
    textTransform: 'uppercase',
  },
}

const Field = ({ data, first, field }) => {
  const [expanded, setExpanded] = useState(false)
  const [showDefinition, setShowDefinition] = useState(false)

  const hasDetails = true

  return (
    <>
      <Container>
        <Row
          onClick={() => setExpanded((prev) => !prev)}
          sx={{
            pt: '20px',
            pb: 3,
            borderStyle: 'solid',
            borderColor: 'muted',
            borderWidth: '0px',
            borderTopWidth: first ? '0px' : '1px',
            borderBottomWidth: '0px',
            cursor: hasDetails ? 'pointer' : 'default',
          }}
        >
          <Column start={1} width={3} sx={sx.label}>
            {field}
            <Info
              onClick={(e) => {
                e.stopPropagation()
                setShowDefinition((prev) => !prev)
              }}
              closed
              sx={{
                cursor: 'pointer',
                position: ['relative', 'absolute', 'absolute', 'absolute'],
                left: ['10px'],
                top: ['2px'],
                width: '14px',
                height: '14px',
                strokeWidth: '1px',
                stroke: showDefinition ? 'primary' : alpha('primary', 0.25),
                transition: 'stroke 0.15s',
                '@media (hover: hover) and (pointer: fine)': {
                  '&:hover': {
                    stroke: 'primary',
                  },
                },
              }}
            />
          </Column>
          <Column start={4} width={2}>
            <Box sx={{ mt: [field === 'rating' ? '-9px' : 0] }}>
              <Metric
                value={
                  field === 'practices'
                    ? data.metrics[field].value
                    : data.metrics[field].score
                }
                field={field}
              />
            </Box>
          </Column>
          <Column start={6} width={1}>
            {hasDetails && (
              <Flex sx={{ justifyContent: 'flex-end' }}>
                <Expander
                  value={expanded}
                  sx={{
                    stroke: expanded ? 'primary' : 'secondary',
                    width: 22,
                    height: 22,
                    position: 'relative',
                    mt: '-3px',
                  }}
                />
              </Flex>
            )}
          </Column>
        </Row>
      </Container>
      <AnimateHeight
        duration={150}
        height={showDefinition ? 'auto' : 0}
        easing={'ease'}
      >
        <Box sx={{ bg: alpha('primary', 0.125) }}>
          <Container>
            {showDefinition && (
              <Details
                field={'definition'}
                data={field}
                color='primary'
                close={() => setExpanded(null)}
              />
            )}
          </Container>
        </Box>
      </AnimateHeight>
      <AnimateHeight
        duration={250}
        height={expanded ? 'auto' : 0}
        easing={'ease'}
      >
        <Box sx={{ bg: alpha('orange', 0.125) }}>
          <Container>
            {hasDetails && expanded && (
              <Details
                field={field === 'rating' ? 'protocol' : field}
                data={
                  field === 'rating'
                    ? data.details
                    : data.metrics[field].details
                }
                color='orange'
                close={() => setExpanded(null)}
              />
            )}
          </Container>
        </Box>
      </AnimateHeight>
    </>
  )
}

const EntryMobile = ({ data, setShifted, setSelected }) => {
  return (
    <Box sx={{ mt: [7] }}>
      <Container>
        <Box sx={{ fontSize: 5, mb: 3, mt: 4 }}>{data.name}</Box>
      </Container>
      {fields.map((d, i) => {
        return <Field key={i} data={data} first={i === 0} field={d} />
      })}
    </Box>
  )
}

export default EntryMobile
