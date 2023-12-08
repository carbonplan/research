import { Fragment } from 'react'
import { Box, Divider, Flex } from 'theme-ui'
import { Chart, Label, Ticks, Axis, Grid } from '@carbonplan/charts'
import { Column, Row } from '@carbonplan/components'
import Diagram from './diagram'

const sx = {
  label: {
    fontSize: [0, 0, 0, 1],
    pl: '6px',
    textAlign: 'left',
    letterSpacing: 'smallcaps',
    fontFamily: 'heading',
    fontWeight: 'heading',
    textTransform: ['inherit', 'inherit', 'uppercase', 'uppercase'],
    color: 'primary',
    transition: '0.2s',
  },
}

const ACCOUNTING_VALUES = {
  baseline: [
    {
      value: 15,
      color: 'yellow',
      label: 'biogenic emissions',
    },
    {
      value: -10,
      color: 'yellow',
      label: 'biogenic removals',
    },
    {
      value: 5,
      color: 'pink',
      label: 'fossil emissions',
    },
    {
      value: 10,
      color: 'primary',
      label: 'net emissions',
    },
  ],
  retrofit: [
    {
      value: 11,
      color: 'yellow',
      label: 'biogenic emissions',
    },
    {
      value: -10,
      color: 'yellow',
      label: 'biogenic removals',
    },
    {
      value: 6,
      color: 'pink',
      label: 'fossil emissions',
    },
    {
      value: 7,
      color: 'primary',
      label: 'net emissions',
    },
  ],
  narrow: [
    {
      value: 0,
      color: 'yellow',
      label: 'biogenic emissions',
    },
    {
      value: 0,
      color: 'yellow',
      label: 'biogenic removals',
    },
    {
      value: 4,
      color: 'yellow',
      label: 'biogenic storage',
    },
    {
      value: 1,
      color: 'pink',
      label: 'fossil emissions',
    },
    {
      value: -3,
      color: 'primary',
      label: 'net removal claimed',
    },
  ],
}

const AccountingEntry = ({ value, color, label }) => {
  const abs = Math.abs(value)
  let symbol = '+'
  if (label.includes('removal')) {
    symbol = '-'
  } else if (label.includes('storage')) {
    symbol = (
      <Box
        as='svg'
        width='6'
        height='6'
        viewBox='0 0 6 6'
        sx={{ position: 'absolute', top: '6px' }}
      >
        <Box
          as='circle'
          cx='3'
          cy='3'
          r='2.5'
          sx={{ stroke: 'yellow', fill: 'none' }}
        />
      </Box>
    )
  }
  return (
    <Flex
      sx={{
        fontSize: 0,
        position: 'relative',
        gap: 2,
      }}
    >
      <Box sx={{ position: 'absolute', left: '-12px', color }}>{symbol}</Box>
      <Box as='span' sx={{ fontFamily: 'mono', letterSpacing: 'mono', color }}>
        {abs < 10 ? `0${abs}` : abs}
      </Box>{' '}
      <Box
        as='span'
        sx={{
          fontFamily: 'faux',
          letterSpacing: 'faux',
          color: 'secondary',
        }}
      >
        {label}
      </Box>
    </Flex>
  )
}

const Schematic = ({ view }) => {
  const accounting = ACCOUNTING_VALUES[Object.keys(view).find((k) => view[k])]
  return (
    <Row columns={6}>
      <Column start={1} width={[6, 4, 4, 4]}>
        <Box
          sx={{
            width: '100%',
            position: 'relative',
            height: [200, 200, 200, 360],
          }}
        >
          <Chart x={[0, 4]} y={[0, 10]} padding={{ left: 0, bottom: 5 }}>
            <Axis bottom />
            <Grid vertical />
            <Ticks bottom />
            <Label
              x={0.5}
              y={10}
              align='center'
              width={1}
              sx={{ ...sx.label, opacity: view.narrow ? 0.3 : 1 }}
            >
              Land use change
            </Label>
            <Label
              x={1.5}
              y={10}
              align='center'
              width={1}
              sx={{ ...sx.label, opacity: view.narrow ? 0.3 : 1 }}
            >
              Corn production
            </Label>
            <Label x={2.5} y={10} align='center' width={1} sx={sx.label}>
              Ethanol production
            </Label>
            <Label
              x={3.5}
              y={10}
              align='center'
              width={1}
              sx={{ ...sx.label, opacity: view.narrow ? 0.3 : 1 }}
            >
              Ethanol usage
            </Label>
          </Chart>

          <Diagram
            ccs={view.retrofit || view.narrow}
            narrow={view.narrow}
            sx={{ position: 'absolute', bottom: '5px', width: '100%' }}
          />
        </Box>
      </Column>
      <Column start={[1, 5, 5, 5]} width={[4, 2, 2, 2]}>
        <Box sx={{ ...sx.label, mt: [4, 0, 0, 0], pl: 0 }}>Accounting</Box>
        <Flex
          sx={{
            flexDirection: 'column',
            gap: 2,
            mt: [2, 3, 3, 3],
            minHeight: [122, 'inherit', 'inherit', 'inherit'],
          }}
        >
          {accounting.map((d, i) => (
            <Fragment key={d.label}>
              {i === accounting.length - 1 && (
                <Divider sx={{ my: [0, 2, 2, 2] }} />
              )}
              <AccountingEntry {...d} />
            </Fragment>
          ))}
        </Flex>
      </Column>
    </Row>
  )
}

export default Schematic
