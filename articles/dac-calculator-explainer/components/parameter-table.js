import { Box, Grid, Text, Divider } from 'theme-ui'

const Row = ({ children }) => {
  return (
    <Grid
      columns={[1, '175px 1fr', '175px 1fr']}
      sx={{
        borderStyle: 'solid',
        borderWidth: '0px',
        borderTopWidth: '1px',
        borderColor: 'muted',
        pt: [3],
        pb: [3],
        mb: ['2px', 0, 0],
      }}
    >
      {children}
    </Grid>
  )
}

const Top = ({ children }) => {
  return (
    <Box
      sx={{
        borderStyle: 'solid',
        borderWidth: '0px',
        borderTopWidth: '1px',
        borderColor: 'muted',
        pt: [3],
        pb: [3],
        mb: ['2px', 0, 0],
      }}
    >
      {children}
    </Box>
  )
}

const ParameterTable = ({}) => {
  const sx = {
    title: {
      fontFamily: 'heading',
      letterSpacing: 'smallcaps',
      textTransform: 'uppercase',
      mt: [0],
      mb: [0, '2px', '2px'],
      fontSize: [2],
    },
    label: {
      fontFamily: 'heading',
      letterSpacing: 'smallcaps',
      textTransform: 'uppercase',
      mt: [0],
      fontSize: [2],
    },
    description: {
      fontFamily: 'faux',
      letterSpacing: 'faux',
      fontSize: [2],
      mb: [0, 0, '2px'],
    },
    number: {
      fontFamily: 'mono',
      letterSpacing: 'mono',
      fontSize: [5],
      color: 'purple',
    },
    units: {
      textTransform: 'initial',
      fontFamily: 'faux',
      letterSpacing: 'faux',
      fontSize: [2],
      color: 'secondary',
    },
    group: {
      borderStyle: 'solid',
      borderWidth: '0px',
      borderTopWidth: '1px',
      borderColor: 'muted',
      pt: [3],
      pb: [3],
    },
  }
  return (
    <Box sx={{ my: [5] }}>
      <Top>
        <Text sx={{ ...sx.title, ...{ color: 'purple' } }}>Parameters</Text>
      </Top>
      <Row>
        <Text sx={sx.label}>
          Capital expense
          <Text sx={sx.units}>$</Text>
        </Text>
        <Text sx={sx.description}>
          The amount of money spent to build a given DAC plant. Design choices,
          process innovation, material choice, and complexity can all influence
          this cost. The higher the capital expense, the higher the overall
          process costs.
        </Text>
      </Row>
      <Row>
        <Text sx={sx.label}>
          Overnight cost
          <Text sx={sx.units}>$</Text>
        </Text>
        <Text sx={sx.description}>
          How much it costs to build the plant "overnight" without considering
          the time it takes to build a plant. This is multiplied by a lead time
          factor to account for the time it takes to build. The higher the
          overnight cost, the higher the overall cost.
        </Text>
      </Row>
      <Row>
        <Text sx={sx.label}>
          Economic lifetime
          <Text sx={sx.units}>years</Text>
        </Text>
        <Text sx={sx.description}>
          The expected payback period for the loan on the DAC plant. This is
          separate from the plant lifetime, which is the useful life of the DAC
          plant. The shorter the economic lifetime, the higher the annualized
          capital cost is through the payback period, resulting in a higher
          process cost.
        </Text>
      </Row>
      <Row>
        <Text sx={sx.label}>
          Weighted average cost of capital (WACC)
          <Text sx={sx.units}>%</Text>
        </Text>
        <Text sx={sx.description}>
          Combines equity and debt capital into a weighted percent between
          differing interest rates from multiple lenders. Can be used to
          calculate the capital recovery factor, which is used to annualize the
          capital cost of the system. In other words, the WACC is a way to
          discount money that exists today for its future value. The higher the
          WACC, the higher the annualized capital cost resulting in greater
          process costs.
        </Text>
      </Row>
      <Row>
        <Text sx={sx.label}>
          Construction lead time
          <Text sx={sx.units}>years</Text>
        </Text>
        <Text sx={sx.description}>
          How long it takes to construct the DAC plant. This is the time between
          when construction starts and the plant is commissioned. The longer the
          lead time, the longer between when the capital expense is incurred and
          when the plant begins producing a sellable product.
        </Text>
      </Row>
      <Row>
        <Text sx={sx.label}>
          Capacity factor
          <Text sx={sx.units}>%</Text>
        </Text>
        <Text sx={sx.description}>
          The ratio of the actual operating capacity of a given industrial
          facility divided by the maximum operating capacity of the facility
          over a defined period. This includes planned down time, such as
          routine maintenance. The lower the capacity factor, the larger the
          facility needs to be to capture the same amount of CO₂, or produce an
          equivalent amount of electricity, as a facility with a higher capacity
          factor. This results in higher capital costs and higher overall
          process costs.
        </Text>
      </Row>
      <Row>
        <Text sx={sx.label}>
          Availability
          <Text sx={sx.units}>%</Text>
        </Text>
        <Text sx={sx.description}>
          The number of hours in a day that a given energy generating technology
          is capable of producing electricity. For example, at an equatorial
          location, on average the sun is only shining for 35.2% of each day.
          Therefore the availability of solar electricity in this region would
          be 35.2%. Since the model assumes that the DAC system requires a
          continuous energy input, the energy availability dictates how much
          larger we need to build the energy generating facility to compensate
          for the time we cannot generate electricity. In other words, the
          system is made to overproduce during hours when the sun is shining or
          the wind is blowing, and this energy is stored via lithium-ion
          batteries for once the sun goes down or the wind stops blowing.
          Therefore, the lower the availability, the higher the costs of the
          joint energy production and storage systems. This increases both the
          capital and operating costs of the energy system, resulting in a
          higher levelized cost of electricity (LCOE) which ultimately increases
          the costs of the overall process.
        </Text>
      </Row>
      <Row>
        <Text sx={sx.label}>
          Fixed operating and maintenance (O&M)
          <Text sx={sx.units}>$</Text>
        </Text>
        <Text sx={sx.description}>
          Costs associated with processes that do not vary based on the
          production (i.e. tCO₂ captured by DAC facility). An example of fixed
          O&M is lease payments and/or property taxes. The higher the fixed O&M
          costs, the higher the overall process costs.
        </Text>
      </Row>
      <Row>
        <Text sx={sx.label}>
          Variable operating and maintenance (O&M)
          <Text sx={sx.units}>$</Text>
        </Text>
        <Text sx={sx.description}>
          The non-fuel portion of operating costs that are a function of the
          production (i.e. these are the costs associated with consumables that
          vary directly with the tCO₂ captured by the DAC facility). An example
          of a variable O&M cost is raw materials, such as water and chemicals,
          as well as other consumables. The higher the variable O&M costs, the
          higher the overall process costs.
        </Text>
      </Row>
      <Divider sx={{ mt: [1], width: ['100%', '100%', '650px'] }} />
    </Box>
  )
}

export default ParameterTable
