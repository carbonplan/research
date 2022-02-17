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
    label: 'Compliance users',
  },
  {
    id: 'forest-carbon',
    logo: <DACCalculator />,
    color: 'green',
    label: 'Forest Carbon',
  },
  {
    id: 'soil-protocols',
    logo: <SoilProtocols />,
    color: 'orange',
    label: 'Soil Protocols',
  },
  {
    id: 'forest-offsets',
    logo: <ForestOffsets />,
    color: 'green',
    label: 'Forest Offsets',
  },
  {
    id: 'forest-risks',
    logo: <ForestRisks />,
    color: 'red',
    label: 'Forest Risks',
  },
  {
    id: 'cdr-database',
    logo: <CDRDatabase />,
    color: 'secondary',
    label: 'CDR Database',
  },
  {
    id: 'permanence-calculator',
    logo: <PermanenceCalculator />,
    color: 'pink',
    label: 'Permanence Calculator',
  },
  {
    id: 'dac-calculator',
    logo: <DACCalculator />,
    color: 'purple',
    label: 'DAC Cost Calculator',
  },
]

export default tools
