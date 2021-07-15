import { useState } from 'react'
import { Box } from 'theme-ui'
import { Row, Column, Expander } from '@carbonplan/components'
import Expandable from './expandable'
import Metric from './metric'
import Details from './details'

const columns = {
  width: [
    [2, 1, 2, 2],
    [2, 1, 1, 1],
    [2, 1, 1, 1],
    [2, 1, 1, 1],
    [2, 1, 1, 1],
    [2, 1, 1, 1],
  ],
  start: [
    [1, 3, 3, 3],
    [3, 4, 5, 5],
    [5, 5, 6, 6],
    [1, 6, 7, 7],
    [3, 7, 8, 8],
    [5, 8, 10, 10],
  ],
}

const Entry = ({ fields, data, first = false }) => {
  const [expanded, setExpanded] = useState(null)

  return (
    <>
      <Row
        as='tr'
        columns={[6, 8, 10, 10]}
        sx={{
          pb: ['21px', '21px', '21px', '22px'],
          pt: [0, '23px', '23px', '26px'],
          borderStyle: 'solid',
          borderWidth: '0px',
          borderTopWidth: first ? '0px' : '1px',
          borderColor: 'muted',
        }}
      >
        <Column start={[1, 1]} width={[6, 2, 2, 2]} as='td'>
          <Box
            onClick={() =>
              setExpanded((prev) =>
                prev && prev === 'protocol' ? null : 'protocol'
              )
            }
            sx={{
              p: [2],
              pt: [2, 2, 2, '5px'],
              m: [2, -2, -2, -2],
              mt: [4, -2, -2, -2],
              width: 'fit-content',
              position: 'relative',
              '@media (hover: hover) and (pointer: fine)': {
                '&:hover > #expander': {
                  stroke: 'orange',
                },
              },
              cursor: 'pointer',
              fontSize: [3, 3, 3, 4],
            }}
          >
            {data.name}
            <Expander
              id='expander'
              value={expanded === 'protocol'}
              sx={{
                position: 'absolute',
                left: ['-13px', '-13px', '-13px', '-14px'],
                top: ['10px', '10px', '10px', '12px'],
                width: '18px',
                height: '18px',
                stroke: expanded === 'protocol' ? 'orange' : 'muted',
              }}
            />
          </Box>
        </Column>
        {fields.map((d, i) => {
          return (
            <Column
              start={columns.start[i]}
              width={columns.width[i]}
              key={d}
              as='td'
              onClick={
                d !== 'rating'
                  ? () => setExpanded((prev) => (prev && prev === d ? null : d))
                  : null
              }
              sx={{
                transition: 'background-color 0.15s',
                cursor: d !== 'rating' ? 'pointer' : 'default',
                width:
                  d === 'practices' ? 'fit-content' : ['100%', '100%', '100%'],
              }}
            >
              <Box
                sx={{
                  mx: [0, -3, -3, -3],
                  pr: [0, 3, 3, 3],
                  pl: [3],
                  my: [0, '-24px', '-24px', '-24px'],
                  py: [2, '24px', '24px', '24px'],
                  position: 'relative',
                  transition: 'background-color 0.15s',
                  '@media (hover: hover) and (pointer: fine)': {
                    '&:hover > #expander': {
                      stroke: 'orange',
                    },
                  },
                }}
              >
                {d !== 'rating' && (
                  <Expander
                    id='expander'
                    value={expanded === d}
                    sx={{
                      position: 'absolute',
                      left: ['-6px', '-6px', '-6px', '-7px'],
                      top: ['9px', '25px', '25px', '26px'],
                      width: '18px',
                      height: '18px',
                      stroke: expanded === d ? 'orange' : 'muted',
                      transform: 'translateY(0.75px)',
                    }}
                  />
                )}
                <Metric
                  value={
                    d === 'practices'
                      ? data.metrics[d].value
                      : data.metrics[d].score
                  }
                  field={d}
                />
              </Box>
            </Column>
          )
        })}
      </Row>
      <Expandable expanded={expanded} color={'orange'} height={200}>
        <Details
          name={data.name}
          field={expanded}
          color='orange'
          label={expanded}
          close={() => setExpanded(null)}
          data={
            expanded
              ? expanded === 'protocol'
                ? data.details
                : data.metrics[expanded].details
              : null
          }
        />
      </Expandable>
    </>
  )
}

export default Entry
