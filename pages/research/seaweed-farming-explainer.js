import Index, { meta } from '../../articles/seaweed-farming-explainer/index.md'

import references from '../../articles/seaweed-farming-explainer/references'
import { Article } from '@carbonplan/layouts'

const Content = (props) => (
  <Article references={references} meta={meta} displayTitle={null}>
    <Index {...props} />
  </Article>
)

export async function getStaticProps() {
  const propUrls = [
    [
      'zarray',
      'https://cmip6downscaling.blob.core.windows.net/flow-outputs/results/pyramids/cmip6/raw/year/ScenarioMIP.AS-RCEC.TaiESM1.ssp245.day.gn.r1i1p1f1.tasmax/0/date_str/.zarray',
    ],
    [
      'zmetadata',
      'https://cmip6downscaling.blob.core.windows.net/flow-outputs/results/pyramids/cmip6/raw/year/ScenarioMIP.AS-RCEC.TaiESM1.ssp245.day.gn.r1i1p1f1.tasmax/.zmetadata',
    ],
  ]
  const responses = await Promise.all(propUrls.map(([prop, url]) => fetch(url)))
  const values = await Promise.all(responses.map((res) => res.json()))

  return {
    props: propUrls.reduce(
      (accum, [prop], i) => ({ ...accum, [prop]: values[i] }),
      {}
    ),
  }
}

export default Content
