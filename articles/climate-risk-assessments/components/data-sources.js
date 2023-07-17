import { Table } from '@carbonplan/components'
import { Check as CheckInner } from '@carbonplan/icons'
import { Box, Flex } from 'theme-ui'

const Heading = ({ children, example, sx }) => (
  <Box
    sx={{
      fontSize: [0, 0, 0, 1],
      fontFamily: 'body',
      letterSpacing: 'body',
      mr: -1,
      mb: [2, 0, 0, 0],
      ...sx,
    }}
  >
    {children}
    {example && <Box sx={{ color: 'secondary', mt: 1 }}>{example}</Box>}
  </Box>
)

const Check = () => {
  return (
    <Flex sx={{ height: '100%', alignItems: 'center' }}>
      <CheckInner height={18} />
    </Flex>
  )
}

const DataSources = () => {
  return (
    <Table
      columns={[5, 7, 7, 7]}
      start={[
        [1],
        [1, 3, 3, 3],
        [2, 4, 4, 4],
        [3, 5, 5, 5],
        [4, 6, 6, 6],
        [5, 7, 7, 7],
      ]}
      width={[[5, 2, 2, 2], [1], [1], [1], [1], [1]]}
      sx={{ '& td': { fontSize: 0 } }}
      data={[
        [
          '',
          'Climate science',
          'Energy-system modeling',
          'Energy economics',
          'Financial risk',
          'Energy law and policy',
        ].map((d) => (
          <Heading key={d} sx={{ mr: 0, mb: 0 }}>
            {d}
          </Heading>
        )),
        [
          <Heading key='heading' example='(e.g., CMIP5, CMIP6, RCPS, SSPS)'>
            Future projections from global climate models
          </Heading>,
          <Check key='1' />,
          <Check key='2' />,
          <Check key='3' />,
          '',
          '',
        ],
        [
          <Heading
            key='heading'
            example='(e.g., weather station data from NOAA’S National Centers for Environmental Information (NCEI))'
          >
            Historical weather data
          </Heading>,
          <Check key='1' />,
          '',
          '',
          '',
          '',
        ],
        [
          <Heading key='heading' example='(e.g., ERA5 reanalysis)'>
            Historical reanalysis of global climate data
          </Heading>,
          <Check key='1' />,
          <Check key='2' />,
          <Check key='3' />,
          '',
          '',
        ],
        [
          <Heading key='heading' example='(e.g., 427)'>
            Asset-level climate risk data from private providers
          </Heading>,
          '',
          '',
          '',
          <Check key='4' />,
          '',
        ],
        [
          <Heading
            key='heading'
            example='(e.g., National Climate Assessment, IPCC Sixth Assessment Report)'
          >
            Summary governmental climate reports
          </Heading>,
          '',
          '',
          '',
          '',
          <Check key='5' />,
        ],
        [
          <Heading key='heading'>Hsiang et al., 2017</Heading>,
          '',
          <Check key='2' />,
          '',
          <Check key='4' />,
          '',
        ],
        [
          <Heading key='heading'>
            Other (unspecified) peer-reviewed literature
          </Heading>,
          '',
          '',
          '',
          <Check key='4' />,
          <Check key='5' />,
        ],
      ]}
      index={false}
    />
  )
}

export default DataSources
