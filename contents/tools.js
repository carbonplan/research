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
    id: 'compliance-users',
    logo: <DACCalculator />,
    color: 'grey',
    summary: 'TK',
    title: 'Compliance users',
  },
  {
    id: 'forest-carbon',
    logo: <DACCalculator />,
    color: 'green',
    summary: 'TK',
    title: 'Forest Carbon',
  },
  {
    id: 'soil-protocols',
    logo: <SoilProtocols />,
    color: 'orange',
    summary: 'TK',
    title: 'Soil Protocols',
  },
  {
    id: 'forest-offsets',
    logo: <ForestOffsets />,
    color: 'green',
    summary: 'TK',
    title: 'Forest Offsets',
  },
  {
    id: 'forest-risks',
    logo: <ForestRisks />,
    color: 'red',
    summary: 'TK',
    title: 'Forest Risks',
  },
  {
    id: 'cdr-database',
    logo: <CDRDatabase />,
    color: 'secondary',
    summary: 'TK',
    title: 'CDR Database',
  },
  {
    id: 'permanence-calculator',
    logo: <PermanenceCalculator />,
    color: 'pink',
    summary: 'TK',
    title: 'Permanence Calculator',
  },
  {
    id: 'dac-calculator',
    logo: <DACCalculator />,
    color: 'purple',
    summary: 'TK',
    title: 'DAC Cost Calculator',
  },
]

export default tools
