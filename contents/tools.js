import {
  ForestOffsets,
  ForestRisks,
  CDRDatabase,
  PermanenceCalculator,
  DACCalculator,
  SoilProtocols,
} from '../components/tool-logos'

const tools = [
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
    logo: <DACCalculator />,
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
    id: 'forest-offsets',
    logo: <ForestOffsets />,
    color: 'green',
    summary:
      'Mapping forest carbon offset projects and their intersections with fires.',
    title: 'Forest Offsets',
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
    logo: <DACCalculator />,
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
