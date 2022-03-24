import { useState, useEffect } from 'react'
import { useThemeUI, Link, Box, Grid, Text } from 'theme-ui'
import { format } from 'd3-format'
import { scaleLinear } from 'd3-scale'
import { Row, Column, Button, Select } from '@carbonplan/components'
import { RotatingArrow } from '@carbonplan/icons'

import projects from '../../data/projects'

const sx = {
  axisLabelVertical: {
    writingMode: 'vertical-rl',
    transform: 'rotate(180deg)',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'mono',
    letterSpacing: 'mono',
    fontSize: [1],
  },
  axisLabelHorizontal: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'mono',
    letterSpacing: 'mono',
    fontSize: [1],
  },
  tickLabel: {
    display: 'inline-block',
    position: 'absolute',
    fontFamily: 'mono',
    leterSpacing: 'mono',
    color: 'secondary',
    fontSize: [1],
  },
}

const OverCreditingPercent = ({
  theme,
  projects,
  highlighted,
  setHighlighted,
  selected,
  setSelected,
}) => {
  const count = projects.length
  const height = [160, 220, 220, 220]
  const x = scaleLinear().domain([0, count]).range([0, 100])
  const y = scaleLinear().domain([0, 1]).range([0, 30])
  return (
    <Box sx={{ mt: [3] }}>
      <Grid
        gap={[0]}
        columns={['30px 1fr 38px', '30px 1fr 48px', '30px 1fr 48px']}
      >
        <Text sx={{ ...sx.axisLabelVertical, height: height, ml: ['-4px'] }}>
          CREDITING ERROR{' '}
          <Box as='span' sx={{ color: 'secondary' }}>
            %
          </Box>
        </Text>
        <Box sx={{ width: '100%', display: 'inline-block', height: height }}>
          <svg
            width='100%'
            height='100%'
            viewBox='0 0 100 60'
            preserveAspectRatio='none'
          >
            {projects.map((d, i) => {
              const positive = d.overcrediting.arbocs[1] > 0
              const fraction =
                Math.abs(d.overcrediting.arbocs[1]) / d.arbocs.issuance
              return (
                <g key={'f-' + i} transform={`translate(${x(i)},0)`}>
                  <Box
                    as='rect'
                    width={100 / count}
                    x='0'
                    height={2 * (y(1) - y(0))}
                    y={y(0)}
                    onClick={(e) => {
                      setSelected(d.id)
                    }}
                    onMouseOver={(e) => {
                      setHighlighted(d.id)
                    }}
                    sx={{
                      cursor: 'pointer',
                      fill: 'background',
                      pointerEvents: ['none', 'initial', 'initial', 'initial'],
                    }}
                  />
                  <Box
                    as='rect'
                    width={0.75 * (100 / count)}
                    x='0'
                    height={2 * (y(1) - y(0))}
                    y={y(0)}
                    sx={{
                      fill: positive ? 'green' : 'secondary',
                      pointerEvents: ['none'],
                    }}
                    fillOpacity={
                      d.id === selected || d.id === highlighted ? '0.4' : '0.2'
                    }
                    onClick={(e) => {
                      setSelected(d.id)
                    }}
                  />
                  <Box
                    as='rect'
                    width={0.75 * (100 / count)}
                    x='0'
                    height={y(1) - y(1 - fraction)}
                    y={positive ? y(1 - fraction) : y(1)}
                    sx={{
                      fill: positive ? 'green' : 'secondary',
                      pointerEvents: ['none'],
                    }}
                    onClick={(e) => {
                      setSelected(d.id)
                    }}
                  />
                </g>
              )
            })}
          </svg>
        </Box>
        <Box sx={{ height: height, position: 'relative', ml: [2] }}>
          <Text sx={{ ...sx.tickLabel, top: '-10px' }}>100%</Text>
          <Text sx={{ ...sx.tickLabel, bottom: '-8px' }}>-100%</Text>
        </Box>
      </Grid>
    </Box>
  )
}

const OverCreditingAbsolute = ({
  theme,
  projects,
  highlighted,
  setHighlighted,
  selected,
  setSelected,
}) => {
  const count = projects.length
  const max = 3000000
  const x = scaleLinear().domain([0, count]).range([0, 100])
  const y = scaleLinear().domain([0, max]).range([0, 30])
  return (
    <Box sx={{ mt: [4] }}>
      <Grid
        gap={[0]}
        columns={['30px 1fr 38px', '30px 1fr 48px', '30px 1fr 48px']}
      >
        <Text
          sx={{
            ...sx.axisLabelVertical,
            height: '140px',
            mt: ['-12px'],
            ml: ['-4px'],
          }}
        >
          CRED. ERROR{' '}
          <Box as='span' sx={{ textTransform: 'none', color: 'secondary' }}>
            tCO₂{' '}
          </Box>
        </Text>
        <Box sx={{ width: '100%', display: 'inline-block', height: '120px' }}>
          <svg
            width='100%'
            height='100%'
            viewBox='0 0 100 60'
            preserveAspectRatio='none'
          >
            {projects.map((d, i) => {
              const positive = d.overcrediting.arbocs[1] > 0
              const fraction = Math.abs(d.overcrediting.arbocs[1])
              return (
                <g key={'f-' + i} transform={`translate(${x(i)},0)`}>
                  <Box
                    as='rect'
                    width={100 / count}
                    x='0'
                    height={2 * (y(max) - y(0))}
                    y={y(0)}
                    onClick={(e) => {
                      setSelected(d.id)
                    }}
                    onMouseOver={(e) => {
                      setHighlighted(d.id)
                    }}
                    sx={{
                      cursor: 'pointer',
                      fill: 'background',
                      pointerEvents: ['none', 'initial', 'initial', 'initial'],
                    }}
                  />
                  <Box
                    as='rect'
                    width={0.75 * (100 / count)}
                    x='0'
                    height={2 * (y(max) - y(0))}
                    y={y(0)}
                    sx={{
                      fill: positive ? 'green' : 'secondary',
                      pointerEvents: ['none'],
                    }}
                    fillOpacity={
                      d.id === selected || d.id === highlighted ? '0.4' : '0.2'
                    }
                    onClick={(e) => {
                      setSelected(d.id)
                    }}
                  />
                  <Box
                    as='rect'
                    width={0.75 * (100 / count)}
                    x='0'
                    height={y(max) - y(max - fraction)}
                    y={positive ? y(max - fraction) : y(max)}
                    sx={{
                      fill: positive ? 'green' : 'secondary',
                      pointerEvents: ['none'],
                    }}
                    onClick={(e) => {
                      setSelected(d.id)
                    }}
                  />
                </g>
              )
            })}
          </svg>
        </Box>
        <Box sx={{ height: '120px', position: 'relative', ml: [2] }}>
          <Text sx={{ ...sx.tickLabel, top: '-10px' }}>3M</Text>
          <Text sx={{ ...sx.tickLabel, bottom: '-8px' }}>-3M</Text>
        </Box>
      </Grid>
    </Box>
  )
}

const ProjectSize = ({
  theme,
  projects,
  highlighted,
  setHighlighted,
  selected,
  setSelected,
}) => {
  const count = projects.length
  const max = 10000000
  const x = scaleLinear().domain([0, count]).range([0, 100])
  const y = scaleLinear().domain([0, max]).range([0, 30])
  return (
    <Box sx={{ mt: [3] }}>
      <Grid
        gap={[0]}
        columns={['30px 1fr 38px', '30px 1fr 48px', '30px 1fr 48px']}
      >
        <Text sx={{ ...sx.axisLabelVertical, height: '120px', ml: ['-4px'] }}>
          CREDITS{' '}
          <Box as='span' sx={{ textTransform: 'none', color: 'secondary' }}>
            tCO₂
          </Box>
        </Text>
        <Box sx={{ width: '100%', display: 'inline-block', height: '120px' }}>
          <svg
            width='100%'
            height='100%'
            viewBox='0 0 100 30'
            preserveAspectRatio='none'
          >
            {projects.map((d, i) => {
              const positive = d.overcrediting.arbocs[1] > 0
              const value = d.arbocs.issuance
              return (
                <g key={'f-' + i} transform={`translate(${x(i)},0)`}>
                  <Box
                    as='rect'
                    width={100 / count}
                    x='0'
                    height={2 * (y(max) - y(0))}
                    y={y(0)}
                    onClick={(e) => {
                      setSelected(d.id)
                    }}
                    onMouseOver={(e) => {
                      setHighlighted(d.id)
                    }}
                    sx={{
                      cursor: 'pointer',
                      fill: 'background',
                      pointerEvents: ['none', 'initial', 'initial', 'initial'],
                    }}
                  />
                  <Box
                    as='rect'
                    width={0.75 * (100 / count)}
                    x='0'
                    height={2 * (y(max) - y(0))}
                    y={y(0)}
                    sx={{
                      fill: positive ? 'green' : 'secondary',
                      pointerEvents: ['none'],
                    }}
                    fillOpacity={
                      d.id === selected || d.id === highlighted ? '0.4' : '0.2'
                    }
                  />
                  <Box
                    as='rect'
                    width={0.75 * (100 / count)}
                    x='0'
                    height={y(max) - y(max - value)}
                    y={y(max - value)}
                    sx={{
                      fill: positive ? 'green' : 'secondary',
                      pointerEvents: ['none'],
                    }}
                  />
                </g>
              )
            })}
          </svg>
        </Box>
        <Box sx={{ height: '120px', position: 'relative', ml: [2] }}>
          <Text sx={{ ...sx.tickLabel, top: '-10px' }}>10M</Text>
          <Text sx={{ ...sx.tickLabel, bottom: '-8px' }}>0</Text>
        </Box>
      </Grid>
    </Box>
  )
}

const Metric = ({ label, units, value, color }) => {
  return (
    <Box
      sx={{
        color: 'secondary',
        mb: ['10px'],
      }}
    >
      <Box
        sx={{
          display: 'inline-block',
          width: ['120px', '160px', '170px', '170px'],
          fontFamily: 'faux',
          color: 'primary',
        }}
      >
        {label}{' '}
        <Box
          as='span'
          sx={{
            display: ['none', 'initial', 'initial', 'initial'],
            ml: [1],
            color: 'secondary',
            fontSize: [1, 1, 1, 2],
          }}
        >
          {units}
        </Box>
      </Box>
      <Box
        sx={{
          fontSize: [2, 2, 2, 3],
          ml: [2],
          display: 'inline-block',
          fontFamily: 'mono',
          letterSpacing: 'mono',
          color: color,
        }}
      >
        {value}
      </Box>
    </Box>
  )
}

const ProjectAnalysis = () => {
  const { theme } = useThemeUI()
  const [order, setOrder] = useState('percent')
  const [data, setData] = useState([])
  const [selected, setSelected] = useState(null)
  const [highlighted, setHighlighted] = useState(null)
  const filtered = projects.filter((d) => d.overcrediting)

  useEffect(() => {
    let sorted
    if (order === 'percent') {
      sorted = [...filtered].sort(
        (a, b) =>
          b.overcrediting.arbocs[1] / b.arbocs.issuance -
          a.overcrediting.arbocs[1] / a.arbocs.issuance
      )
    }
    if (order === 'number') {
      sorted = [...filtered].sort(
        (a, b) => b.overcrediting.arbocs[1] - a.overcrediting.arbocs[1]
      )
    }
    if (order === 'size') {
      sorted = [...filtered].sort(
        (a, b) => b.arbocs.issuance - a.arbocs.issuance
      )
    }
    setData(sorted)
  }, [order])

  const handleOrder = (e) => {
    setOrder(e.target.value)
  }

  const under = selected
    ? data.filter((d) => d.id == selected)[0].overcrediting.percent[1] < 0
    : null

  return (
    <Box>
      <Box>
        <Row columns={[6, 6, 6, 6]}>
          <Column start={[1]} width={[6, 3, 3, 3]}>
            <Box sx={{ mt: '-4px' }}>
              <Box
                sx={{
                  color: 'secondary',
                  fontSize: [2, 2, 2, 3],
                  mr: ['10px'],
                  display: 'inline-block',
                  mb: ['15px'],
                }}
              >
                Sort by:
              </Box>
              <Select onChange={handleOrder} size='xs' sx={{ mt: [-2, 0, 0] }}>
                <option value='percent'>Crediting error (%)</option>
                <option value='number'>Crediting error</option>
                <option value='size'>Project size</option>
              </Select>
            </Box>
            <Box
              sx={{
                color: 'secondary',
                fontSize: [2, 2, 2, 3],
                mb: ['12px'],
                mt: ['-4px'],
                display: ['none', 'block', 'block', 'block'],
              }}
            >
              Selected:
              <Box
                sx={{
                  fontSize: [2, 2, 2, 3],
                  display: 'inline-block',
                  color: 'primary',
                  borderWidth: '0px',
                  borderBottomWidth: '0px',
                  borderStyle: 'solid',
                  borderColor: 'primary',
                  fontFamily: 'body',
                  letterSpacing: 'body',
                  ml: [2],
                }}
              >
                {selected ? selected : '(click to select)'}
              </Box>
            </Box>
            <Button
              size='xs'
              href={`/research/forest-offsets?id=${selected}`}
              inverted
              suffix={<RotatingArrow />}
              sx={{
                cursor: 'pointer',
                mb: [2],
                opacity: selected ? 1 : 0,
                transition: 'opacity 0.15s, color 0.15s',
                pointerEvents: selected ? 'all' : 'none',
                pointerEvents: [selected ? 'all' : 'none'],
                display: ['none', 'block', 'block', 'block'],
              }}
            >
              Open in map
            </Button>
          </Column>
          <Column
            start={[1, 4, 4, 4]}
            width={[6, 3, 3, 3]}
            sx={{
              mt: [2, '-4px', '-4px', 0],
              opacity: selected ? 1 : 0,
              transition: 'opacity 0.15s',
              display: ['none', 'initial', 'initial', 'initial'],
              pointerEvents: [selected ? 'all' : 'none'],
            }}
          >
            <Metric
              label='Project size'
              units='tCO₂'
              value={
                selected
                  ? '\u00A0' +
                    format('.2s')(
                      data.filter((d) => d.id == selected)[0].arbocs.issuance
                    )
                  : 0
              }
              color={selected ? (under ? 'secondary' : 'green') : 'green'}
            />
            <Metric
              label={under ? 'Under-crediting' : 'Over-crediting'}
              units='tCO₂'
              value={
                selected
                  ? (under ? '' : '\u00A0') +
                    format('.2s')(
                      data.filter((d) => d.id == selected)[0].overcrediting
                        .arbocs[1]
                    )
                  : 0
              }
              color={selected ? (under ? 'secondary' : 'green') : 'green'}
            />
            <Metric
              label={under ? 'Under-crediting' : 'Over-crediting'}
              units='%'
              value={
                selected
                  ? (under ? '' : '\u00A0') +
                    format('.0%')(
                      data.filter((d) => d.id == selected)[0].overcrediting
                        .percent[1]
                    )
                  : 0
              }
              color={selected ? (under ? 'secondary' : 'green') : 'green'}
            />
          </Column>
        </Row>
      </Box>
      <Box onMouseLeave={() => setHighlighted(null)}>
        <OverCreditingPercent
          projects={data}
          theme={theme}
          highlighted={highlighted}
          setHighlighted={setHighlighted}
          selected={selected}
          setSelected={setSelected}
        />
        <OverCreditingAbsolute
          projects={data}
          theme={theme}
          highlighted={highlighted}
          setHighlighted={setHighlighted}
          selected={selected}
          setSelected={setSelected}
        />
        <ProjectSize
          projects={data}
          theme={theme}
          highlighted={highlighted}
          setHighlighted={setHighlighted}
          selected={selected}
          setSelected={setSelected}
        />
      </Box>
      <Box sx={{ ...sx.axisLabelHorizontal, ml: '30px', mr: '64px', mt: [3] }}>
        Individual offset projects
      </Box>
    </Box>
  )
}

export default ProjectAnalysis
