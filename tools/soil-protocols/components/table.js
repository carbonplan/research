import { useState } from 'react'
import { Box } from 'theme-ui'
import { Row, Column, Expander } from '@carbonplan/components'
import { Triangle } from '@carbonplan/icons'
import { metrics, protocols } from '../data'
import Entry from './entry'
import Expandable from './expandable'
import Details from './details'

const sx = {
  reset: {
    display: 'block',
    width: 'auto',
    height: 'auto',
    margin: 0,
    padding: 0,
    border: 'none',
    borderCollapse: 'inherit',
    borderSpacing: 0,
    borderColor: 'inherit',
    verticalAlign: 'inherit',
    textAlign: 'left',
    fontWeight: 'normal',
  },
  header: {
    fontSize: [0, 0, 0, 1],
    mb: [3, 0, 0, 0],
    fontWeight: 'normal',
  },
}

const fields = [
  'practices',
  'rigor',
  'additionality',
  'durability',
  'safeguards',
  'rating',
]

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

const keys = Object.keys(protocols)

const compare = (method) => {
  return (a, b) => {
    if (method == 'alpha') {
      return protocols[a].name.localeCompare(protocols[b].name)
    } else {
      return (
        protocols[b].metrics[method].score - protocols[a].metrics[method].score
      )
    }
  }
}

const Table = () => {
  const [expanded, setExpanded] = useState(null)
  const [sort, setSort] = useState('alpha')

  return (
    <Box sx={{ display: ['none', 'inherit', 'inherit', 'inherit'] }}>
      <Box as='table' sx={{ borderSpacing: '0px', ...sx.reset }}>
        <Box
          as='thead'
          sx={{
            ...sx.reset,
            position: ['relative', 'sticky', 'sticky', 'sticky'],
            top: [0, 56, 56, 56],
            pt: [4, '36px', '36px', '36px'],
            bg: 'background',
            zIndex: 1000,
            borderStyle: 'solid',
            borderColor: 'muted',
            borderWidth: '0px',
            borderBottomWidth: '1px',
          }}
        >
          <Row as='tr' columns={[6, 8, 10, 10]} sx={{ pb: [4] }}>
            <Column
              start={1}
              width={1}
              as='th'
              sx={{
                ...sx.header,
                position: 'relative',
                display: ['none', 'inherit', 'inherit', 'inherit'],
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  bg: 'background',
                  left: '-16px',
                  width: '10px',
                  top: '-36px',
                  height: '80px',
                }}
              />
              <Box
                onClick={() => setSort('alpha')}
                sx={{ position: 'relative', cursor: 'pointer' }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    left: ['-1px', '-1px', '-1px', '-1px'],
                    top: ['-24px', '0px', '0px', '0px'],
                    width: '16px',
                    height: '16px',
                    '@media (hover: hover) and (pointer: fine)': {
                      '&:hover > #triangle': {
                        stroke: 'primary',
                      },
                    },
                  }}
                >
                  <Triangle
                    id='triangle'
                    sx={{
                      transition: 'stroke 0.15s',
                      stroke: 'muted',
                      fill: 'none',
                      width: 10,
                      height: 10,
                    }}
                  />
                </Box>
              </Box>
            </Column>
            {fields.map((d, i) => {
              return (
                <Column
                  start={columns.start[i]}
                  width={columns.width[i]}
                  key={d}
                  as='th'
                  sx={sx.header}
                >
                  {d !== 'practices' && (
                    <Box
                      onClick={() => setSort(d)}
                      sx={{
                        position: 'relative',
                        cursor: 'pointer',
                        display: ['none', 'inherit', 'inherit', 'inherit'],
                      }}
                    >
                      <Box
                        sx={{
                          position: 'absolute',
                          left: ['-1px', '-1px', '-1px', '-1px'],
                          top: ['-24px', '-24px', '-24px', '-24px'],
                          width: '16px',
                          height: '16px',
                          '@media (hover: hover) and (pointer: fine)': {
                            '&:hover > #triangle': {
                              stroke: 'primary',
                            },
                          },
                        }}
                      >
                        <Triangle
                          id='triangle'
                          sx={{
                            transition: 'stroke 0.15s',
                            stroke: sort === d ? 'primary' : 'muted',
                            fill: 'none',
                            width: 10,
                            height: 10,
                          }}
                        />
                      </Box>
                    </Box>
                  )}
                  <Box
                    onClick={() =>
                      setExpanded((prev) => (prev && d === prev ? null : d))
                    }
                    sx={{
                      mx: [0, -3, -3, -3],
                      px: [3],
                      my: [-2],
                      py: [2],
                      width: 'fit-content',
                      cursor: 'pointer',
                      color: 'primary',
                      transition: 'color 0.15s',
                      position: 'relative',
                      '@media (hover: hover) and (pointer: fine)': {
                        '&:hover > #expander': {
                          stroke: 'primary',
                        },
                      },
                    }}
                  >
                    <Expander
                      id='expander'
                      value={d === expanded}
                      sx={{
                        position: 'absolute',
                        left: ['-6px', '-6px', '-6px', '-7px'],
                        top: ['6px', '6px', '6px', '7px'],
                        width: '18px',
                        height: '18px',
                        stroke: expanded === d ? 'primary' : 'muted',
                      }}
                    />
                    {metrics[d].name}
                  </Box>
                </Column>
              )
            })}
          </Row>
          <Expandable expanded={expanded} height={50}>
            <Details
              name={expanded}
              field='definition'
              label={expanded}
              close={() => setExpanded(null)}
              data={expanded}
            />
          </Expandable>
        </Box>
        <Box as='tbody' sx={sx.reset}>
          {keys.sort(compare(sort)).map((d, i) => {
            return (
              <Entry
                key={d}
                fields={fields}
                data={protocols[d]}
                first={i === 0}
              />
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}

export default Table
