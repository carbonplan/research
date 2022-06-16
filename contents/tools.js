import {
  ForestOffsetsCrediting,
  ForestOffsetsFires,
  ForestRisks,
  CDRDatabase,
  PermanenceCalculator,
  DACCalculator,
  SoilProtocols,
  ComplianceUsers,
  ForestCarbon,
  SeaweedFarming,
} from '../components/tool-logos'

const tools = [
  {
    id: 'seaweed-farming',
    logo: <SeaweedFarming />,
    color: 'teal',
    summary: 'Mapping the costs and climate benefits of farming seaweed.',
    title: 'Seaweed Farming',
  },
  {
    id: 'cdr-database',
    logo: <CDRDatabase />,
    color: 'secondary',
    summary:
      'A database of reports on carbon dioxide removal project proposals.',
    title: 'CDR Database',
  },
  {
    id: 'permanence-calculator',
    logo: <PermanenceCalculator />,
    color: 'pink',
    summary: 'Comparing costs for temporary and permanent carbon removal.',
    title: 'Permanence Calculator',
  },
  {
    id: 'compliance-users',
    logo: <ComplianceUsers />,
    color: 'blue',
    summary: 'Tracking the users of compliance offsets.',
    title: 'Compliance users',
  },
  {
    id: 'soil-protocols',
    logo: <SoilProtocols />,
    color: 'orange',
    summary: 'A database of protocols used to credit soil carbon.',
    title: 'Soil Protocols',
  },
  {
    id: 'forest-offsets-fires',
    logo: <ForestOffsetsFires />,
    color: 'red',
    summary:
      'Mapping forest carbon offset projects and their intersections with fires.',
    title: 'Offsets Fires',
  },
  {
    id: 'forest-offsets-crediting',
    logo: <ForestOffsetsCrediting />,
    color: 'green',
    summary:
      'Mapping our over-crediting analysis of forest carbon offset projects.',
    title: 'Offsets Crediting',
  },
  {
    id: 'forest-risks',
    logo: <ForestRisks />,
    color: 'red',
    summary: 'Mapping risks to forest carbon under a changing climate',
    title: 'Forest Risks',
  },
  {
    id: 'forest-carbon',
    logo: <ForestCarbon />,
    color: 'green',
    summary: 'Mapping emissions related to forest carbon.',
    title: 'Forest Carbon',
  },
  {
    id: 'dac-calculator',
    logo: <DACCalculator />,
    color: 'purple',
    summary: 'Explore key parameters affecting the cost of direct air capture.',
    title: 'DAC Cost Calculator',
  },
]

export default tools
