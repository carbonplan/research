import { useBreakpointIndex } from '@theme-ui/match-media'
import Desktop from './desktop'
import Mobile from './mobile'

const AnalysisExplanation = () => {
  const index = useBreakpointIndex()

  return (
    <>
      {index === 0 && <Mobile />}
      {index > 0 && <Desktop />}
    </>
  )
}

export default AnalysisExplanation
