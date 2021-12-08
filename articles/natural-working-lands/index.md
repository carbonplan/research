import FigureCaption from '../../components/figure-caption'
import {
  GHGInventory,
  FireEmissions,
  NetEffect,
  NetSeries,
  GHGSeries,
} from './components'

export const meta = {
  id: 'natural-working-lands',
  number: 12,
  version: '1.0.0',
  date: '11-17-2021',
  title: 'Title',
  authors: ['Oriana Chegwidden', 'Sadie Frank', 'Danny Cullenward'],
  color: 'yellow',
  quickLook: 'Quicklook...',
  background: '',
  card: 'natural-working-lands',
  tags: ['article'],
  summary: 'Summary...',
  icon: '',
}

# Title

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<GHGInventory />
<FigureCaption number={1}>
  Yellow line shows emissions from anthropogenic GHG inventory as a function of
  time. Gray horizontal line shows AB32 2020 limit for comparison.
</FigureCaption>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<FireEmissions />
<FigureCaption number={2}>
  Comparison of fire emissions estimates over time from GFED (solid red) and
  CARB (dashed red). GFED estimates in 2021 only include January through
  September.
</FigureCaption>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<NetEffect />
<FigureCaption number={3}>
  Inferring net emissions from historical data. The toggles let you specify a
  dataset for estimating historical net emissions, and a dataset for fire
  emissions. The model uses a historical period (shown on the left) to infer a
  residual sink based on the fire emissions and net emissions during that time
  period. That residual sink estimate is then used to predict net emissions over
  future time periods (middle and right).{' '}
</FigureCaption>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<NetSeries />
<FigureCaption number={4}>
  Inferring net emissions over time and across parameter combinations. The same
  model and procedure from Figure 3 is used here, but net emissions are inferred
  within rolling 10-year time windows. Each point represents a combination of
  source datasets (4 options for net emissions, 2 options for fire data). The
  time for each point is the end of the corresponding 10-year window. Only GFED
  fire data is available for 2021, so there are four points rather than 8.{' '}
</FigureCaption>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<GHGSeries mode='b' />
<GHGSeries mode='a' />
<FigureCaption number={5}>
  Inferring combined GHG inventories. Anthropogenic inventory emissions
  replotted from Figure 1 (yellow line). The GHG inventory is summed with an
  estimate of net emissions under different parameter combinations to infer
  emissions incorporating forests (orange lines). For the "rolling average" (top
  panel) those net estimates from the analysis shown in Figure 4, where fire
  data are averaged within 10 year rolling windows. For the "fixed average"
  (bottom panel) we instead use the entire window of 2000 to 2020 when averaging
  fire data. The paramter combination corresponding to AB 1504 (for net
  emissions) and CARB (for fire data) is shown with a dashed line.
</FigureCaption>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
