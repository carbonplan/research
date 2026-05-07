import { Badge, Expander } from '@carbonplan/components'
import { useState } from 'react'
import AnimateHeight from 'react-animate-height'
import { Box, Flex, Grid } from 'theme-ui'

const Element = ({ text, description, expanded, setExpanded }) => {
  return (
    <Badge
      sx={{
        color: 'grey',
        fontSize: [1, 1, 1, 2],
        cursor: 'pointer',
        '&:hover .element': {
          color: 'primary',
        },
        '&:hover svg': {
          stroke: 'primary',
        },
      }}
      onClick={() => setExpanded(expanded ? null : description)}
    >
      <Flex sx={{ alignItems: 'center', gap: 1, mt: [0, 0, 0, '2px'] }}>
        <Expander
          value={expanded}
          sx={{ flexShrink: 0, stroke: 'grey', width: 18, mb: '-2px' }}
        />
        <Box className='element' sx={{ mr: 1, transition: 'color 0.2s' }}>
          {text}
        </Box>
      </Flex>
    </Badge>
  )
}

const Dimension = ({ elements = [], label }) => {
  const [expanded, setExpanded] = useState(null)

  return (
    <>
      <Box
        sx={{
          fontFamily: 'heading',
          letterSpacing: 'smallCaps',
          textTransform: 'uppercase',
          '&:not(:first-of-type)': {
            mt: [4, 0, 0, 0],
          },
        }}
      >
        {label}
      </Box>
      <Box>
        <Flex
          sx={{
            gap: 2,
            flexWrap: 'wrap',
            alignItems: 'baseline',
            mt: [2, 0, 0, 0],
          }}
        >
          {elements.map(({ text, description }) => (
            <Element
              key={text}
              text={text}
              description={description}
              expanded={expanded === description}
              setExpanded={setExpanded}
            />
          ))}
          <Box
            sx={{
              fontSize: [1, 1, 1, 2],
              fontFamily: 'mono',
              letterSpacing: '0.02em', // to match Badge
              color: 'grey',
            }}
          >
            + more
          </Box>
        </Flex>
        <AnimateHeight
          duration={150}
          height={expanded ? 'auto' : 0}
          easing={'ease'}
        >
          {expanded ? (
            <Box
              sx={{
                mt: 2,
                color: 'grey',
                fontSize: [1, 1, 1, 2],
                fontFamily: 'mono',
                letterSpacing: '0.02em', // to match Badge
              }}
            >
              {expanded}
            </Box>
          ) : (
            <Box />
          )}
        </AnimateHeight>
      </Box>
    </>
  )
}

const Primer = () => {
  return (
    <Grid
      columns={['1fr', 'max-content 1fr', 'max-content 1fr', 'max-content 1fr']}
      gap={0}
      sx={{
        rowGap: [0, 5, 5, 5],
        columnGap: [0, 4, 4, 5],
        py: [4, 5, 5, 5],
        borderColor: 'muted',
        borderStyle: 'solid',
        borderWidth: '1px 0px 1px 0px',
      }}
    >
      <Dimension
        label='Domain'
        elements={[
          {
            text: 'Spatial dimension',
            description:
              'The number of spatial dimensions (0-3) and the size or extent of each. Processes and parameters will vary as you scale up in both the size of the domain and the number of dimensions.',
          },
          {
            text: 'Numerical solver',
            description:
              'Decisions include boundary conditions, discretization method, timestep size, solver tolerances, and how reactions and transport are coupled.',
          },
          {
            text: 'Physical characteristics',
            description:
              'Topographic characteristics (especially for 2D and 3D domains), and the locations of features such as the rooting zone, mixing depth, groundwater table, and bedrock.',
          },
        ]}
      />
      <Dimension
        label='Forcing'
        elements={[
          {
            text: 'Deployment and other interventions',
            description:
              'Rock feedstock characteristics and application rates, other field amendments such as fertilizer, and other land use practices such as irrigation, tillage, and harvest.',
          },

          {
            text: 'Meteorology',
            description:
              'The source and time-resolution of data for variables such as temperature, rainfall, evaporation, and water flux partitioning. Some models solve the water partitioning, while others require it as input.',
          },

          {
            text: 'Ambient chemistry',
            description:
              'Atmospheric gas concentrations (including pCO₂), the chemical composition of the rainwater and irrigation water, and mineralogical composition of the bedrock.',
          },
        ]}
      />
      <Dimension
        label='Spinup'
        elements={[
          {
            text: 'Equilibration timescale',
            description:
              'Longer spinups are required to account for the formation and equilibration of the solid phase; shorter spinups assume the solid phase and equilibrate the water. Some enhanced weathering simulations use no spinup at all.',
          },

          {
            text: 'Equilibrium metric',
            description:
              'The condition that marks a spinup as equilibrated, such as a fixed elapsed time or negligible secular change in certain metrics. Typically, only the spinup data at or after equilibration are used to initialize follow-on simulations.',
          },

          {
            text: 'Initial conditions',
            description:
              'What the model starts the spinup with: bedrock only, an inert column, a prescribed solid phase domain, etc.',
          },

          {
            text: 'Target conditions',
            description:
              'The condition that marks a spinup as successful for the target environment, beyond just reaching equilibrium. It could mean tuning the spinup to match depth profiles of solid phase and porewater chemistry, or fluxes measured at the inlet or outlet, or something else.',
          },
        ]}
      />
      <Dimension
        label='Reactions'
        elements={[
          {
            text: 'Species',
            description:
              'The solid, liquid, and gas species that can serve as products and/or reactants.',
          },

          {
            text: 'Geochemical database',
            description:
              'List of all species and reactions that the model allows to occur, including characteristics like their thermodynamic and kinetic parameters and temperature dependencies.',
          },

          {
            text: 'Surface complexation and ion exchange',
            description:
              'The model, convention, or parameterization used for ion sorption and exchange at mineral surfaces. Depending on the choice, practitioners may also have to prescribe surface site densities and other parameters for each solid phase.',
          },

          {
            text: 'Biochemistry',
            description:
              'Parameterizations for biochemical processes including plant ion uptake, respiration, microbially-mediated redox reactions, and organic acid and ligand production. These are typically handled in the geochemical database, but are listed separately here for clarity.',
          },
        ]}
      />
      <Dimension
        label='Transport'
        elements={[
          {
            text: 'Solute transport',
            description:
              'Model treatment for water advection, dispersion, and molecular diffusion. The processes are often scale-dependent, with parameter values standing-in for the structure of unresolved heterogeneity and fine-scale transport processes.',
          },
          {
            text: 'Hydraulic properties and flow regimes',
            description:
              'How water is retained and transmitted through the soil, governed by decisions and parameterizations around porosity, conductivity, and water retention and dispersion characteristics. Soil water saturation sets the relationship between the pressure head and hydraulic conductivity. Some models assume fully saturated flow for simplicity.',
          },
          {
            text: 'Flow heterogeneity',
            description:
              'The chosen model treatment for fluid flow — typically either with a single, well-connected pore network, or a more complicated network with faster and slower flow regions (i.e., preferential flow) and parameterized exchange between them.',
          },
          {
            text: 'Gas diffusivity',
            description:
              'Parameterizations for gas transport and aqueous exchange, which influence weathering through the supply of carbonic acid. More gas dissolves into water when soil water saturation is high; more gas escapes along a pressure gradient when saturation is low.',
          },
        ]}
      />
    </Grid>
  )
}

export default Primer
