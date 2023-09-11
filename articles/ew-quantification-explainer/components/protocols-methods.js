import { Link, Column, Row } from '@carbonplan/components'
import { Box, Flex } from 'theme-ui'

const sx = {
  protocol: {
    textTransform: 'uppercase',
    letterSpacing: 'smallcaps',
    fontFamily: 'heading',
    fontSize: [2, 2, 2, 3],
    mb: 2,
  },
  header: {
    textTransform: 'uppercase',
    letterSpacing: 'smallcaps',
    fontSize: [0, 0, 0, 1],
  },
}

const List = ({ values, color }) => {
  const base = 'https://carbonplan.org/research/ew-quantification/'

  return (
    <Flex sx={{ flexDirection: 'column', gap: 1 }}>
      {values.map((v) =>
        typeof v === 'string' ? (
          <Box
            key={v}
            sx={{ color, fontSize: 0, opacity: v === 'N/A' ? 0.5 : 1 }}
          >
            {v}
          </Box>
        ) : (
          <Link
            key={v.label}
            href={
              base +
              `?variable=${v.variable ?? v.label}${
                v.method ? `&method=${v.method}` : ''
              }`
            }
            sx={{ fontSize: 0, color, '&:hover': { color: 'primary' } }}
          >
            {v.label}
          </Link>
        )
      )}
    </Flex>
  )
}

const Area = ({ label, color, children }) => {
  return (
    <Column
      start={1}
      width={6}
      sx={{
        color: color,
        position: 'relative',
        borderStyle: 'solid',
        borderColor: 'muted',
        borderWidth: 0,
        borderTopWidth: 1,
        mt: 5,
        pt: 4,
      }}
    >
      <Box
        sx={{
          ...sx.header,
          position: 'absolute',
          top: '-8px',
          left: 0,
          pr: 3,
          bg: 'background',
        }}
      >
        {label}
      </Box>
      <Row columns={6} sx={{ minHeight: 36 }}>
        {children}
      </Row>
    </Column>
  )
}

const ProtocolsMethods = () => {
  return (
    <Row columns={6}>
      <Column start={1} width={2} sx={sx.protocol}>
        Puro
        <br />
        (protocol)
      </Column>
      <Column start={3} width={2} sx={sx.protocol}>
        CSI
        <br />
        (protocol)
      </Column>
      <Column start={5} width={2} sx={sx.protocol}>
        Beerling et al. 2023 (preprint)
      </Column>
      <Area label='Rock application' color='purple'>
        <Column start={1} width={2}>
          <List
            key='Puro'
            color='purple'
            values={[
              {
                label: 'Rock application',
              },
              { label: 'Rock mineralogy' },
              { label: 'Rock elemental composition' },
              { label: 'Project emissions' },
              { label: 'Upstream emissions' },
            ]}
          />
        </Column>
        <Column start={3} width={2}>
          <List
            key='CSI'
            color='purple'
            values={[
              { label: 'Rock application' },
              { label: 'Rock mineralogy' },
              { label: 'Rock elemental composition' },
              { label: 'Rock particle size distribution' },
              { label: 'Rock surface area' },
              { label: 'Project emissions' },
              { label: 'Upstream emissions' },
            ]}
          />
        </Column>
        <Column start={5} width={2}>
          <List
            key='Beerling'
            color='purple'
            values={[
              { label: 'Rock application' },
              { label: 'Rock mineralogy' },
              { label: 'Rock elemental composition' },
              { label: 'Rock particle size distribution' },
            ]}
          />
        </Column>
      </Area>
      <Area label='Initial weathering' color='grey'>
        <Column start={1} width={2}>
          <List
            key='Puro'
            color='grey'
            values={[
              {
                label: 'Weathering rate model (unspecified)',
                variable: 'Weathering rate and field outgassing',
              },
              'Weathering rate measurement (unspecified)',
            ]}
          />
        </Column>
        <Column start={3} width={2}>
          <List
            key='CSI'
            color='grey'
            values={[
              {
                label: 'Weathering rate model (shrinking core)',
                variable: 'Weathering rate and field outgassing',
              },
            ]}
          />
        </Column>
        <Column start={5} width={2}>
          <List
            key='Beerling'
            color='grey'
            values={[
              { label: 'Mobile / immobile element ratios' },
              { label: 'Field management' },
              { label: 'Precipitation' },
              {
                label: 'Air temperature',
                variable: 'Soil and air temperature',
              },
              { label: 'Soil texture' },
              {
                label: 'Soil physical properties',
                variable:
                  'Soil physical properties (water infiltration, aggregate stability)',
              },
            ]}
          />
        </Column>
      </Area>

      <Area label='Field processes' color='yellow'>
        <Column start={1} width={2}>
          <List
            key='Puro'
            color='yellow'
            values={[
              { label: 'Crop yield' },
              {
                label: 'Field outgassing model (unspecified)',
                variable: 'Field outgassing',
              },
              'Field measurement (unspecified)',
            ]}
          />
        </Column>
        <Column start={3} width={2}>
          <List
            key='CSI'
            color='yellow'
            values={[
              {
                label: 'Default discount factor',
                variable: 'Field outgassing',
                method: 'Default discount factor',
              },
            ]}
          />
        </Column>
        <Column start={5} width={2}>
          <List
            key='Beerling'
            color='yellow'
            values={[
              { label: 'Soil inorganic carbon' },
              { label: 'N₂O fluxes', variable: 'Greenhouse gas fluxes' },
              { label: 'pH' },
              {
                label:
                  'Cation exchange capacity (CEC) and exchange complex cations',
              },
              { label: 'Crop yield' },
            ]}
          />
        </Column>
      </Area>

      <Area label='Watershed transport' color='green'>
        <Column start={1} width={2}>
          <List
            key='Puro'
            color='green'
            values={[
              {
                label: 'River outgassing model (unspecified)',
                variable: 'River outgassing',
                method: 'Process or empirical models',
              },
            ]}
          />
        </Column>
        <Column start={3} width={2}>
          <List key='CSI' color='green' values={['N/A']} />
        </Column>
        <Column start={5} width={2}>
          <List key='Beerling' color='green' values={['N/A']} />
        </Column>
      </Area>
      <Area label='Ocean storage' color='teal'>
        <Column start={1} width={2}>
          <List
            key='Puro'
            color='teal'
            values={[
              {
                label: 'Ocean outgassing model (unspecified)',
                variable: 'Ocean outgassing',
                method: 'Process or empirical models',
              },
            ]}
          />
        </Column>
        <Column start={3} width={2}>
          <List
            key='CSI'
            color='teal'
            values={[
              {
                label: 'Default discount factor',
                variable: 'Ocean outgassing',
                method: 'Default discount factor',
              },
            ]}
          />
        </Column>
        <Column start={5} width={2}>
          <List key='Beerling' color='teal' values={['N/A']} />
        </Column>
      </Area>
    </Row>
  )
}

export default ProtocolsMethods
