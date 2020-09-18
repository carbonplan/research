import Article from '../../components/article'
import Reference from '../../components/article/reference'
import FireMap from './components/fire-map'
import RiskScenarios from './components/risk-scenarios'

export const meta = {
  id: 'offset-project-fire',
  title: 'Offset project fire',
  color: 'red',
  summary: 'A major fire in Oregon illustrates the challenges of managing forest carbon permanence.',
  quotes: [],
}

export const sidenotes = {
  1: {
    offset: -80,
    number: 1,
    authors: 'M A Krawchuk et al.',
    year: 2009,
    title: 'Global pyrogeography: the current and future distribution of wildfire',
    journal: 'PLOS One',
    url: 'https://doi.org/10.1371/journal.pone.0005102',
  },
  2: {
    offset: 0,
    number: 2,
    authors: 'M A Moritz et al.',
    year: 2020,
    title: 'Climate change and disruptions to global fire activity',
    journal: 'Ecosphere',
    url: 'https://doi.org/10.1890/ES11-00345.1',
  },
  3: {
    offset: 70,
    number: 3,
    authors: 'A P Williams & J T Abatzoglou',
    year: 2016,
    title: 'Recent advances and remaining uncertainties in resolving past and future climate effects on global fire activity',
    journal: 'Current Climate Change Reports',
    url: 'https://doi.org/10.1007/s40641-016-0031-0',
  },
  4: {
    offset: 0,
    number: 4,
    title: 'Calculated from the Q2 2020 Compliance Instrument Report',
    url: 'https://ww2.arb.ca.gov/sites/default/files/2020-07/2020_q2_complianceinstrumentreport.pdf'
  },
  5: {
    offset: -80,
    number: 5,
    title: 'The exact burned area is moderately sensitive to the processing method. Under maximally conservative parameters, we found the burned area to remain at or above 64%. See our Jupyter Notebook for full details.',
    url: 'https://github.com/carbonplan/notebooks/blob/master/offset-project-fire/fire_analysis.ipynb'
  },
  6: {
    offset: 0,
    number: 6,
    title: 'Based on an area-weighted average from Table 2 in a USFS Report on the fire and using common burn severities of 10% mortality in "Low Mortality", 10-75% mortality in "Mixed Mortality", and 75% mortality in "High Mortality" categories.',
    url: 'https://scholarsbank.uoregon.edu/xmlui/bitstream/handle/1794/7103/B%26B_Fire_Recovery_Project_ROD.pdf?sequence=1'
  },
  7: {
    offset: 0,
    number: 7,
    authors: 'National Research Council',
    title: 'Climate Stabilization Targets: Emissions, Concentrations, and Impacts over Decades to Millennia',
    journal: 'Washington, DC: The National Academies Press',
    url: 'https://www.nap.edu/catalog/12877/climate-stabilization-targets-emissions-concentrations-and-impacts-over-decades-to'
  },
  8: {
    offset: -50,
    number: 8,
    authors: 'B M Sleeter et al.',
    title: 'Effects of 21st‐century climate, land use, and disturbances on ecosystem carbon balance in California',
    year: 2019,
    journal: 'Global Change Biology',
    url: ' https://doi.org/10.1111/gcb.14677'
  },
  9: {
    offset: 50,
    number: 9,
    authors: 'W R. L. Anderegg et al.',
    year: 2020,
    title: 'Climate-driven risks to the climate mitigation potential of forests',
    journal: 'Science',
    url: 'https://doi.org/10.1126/science.aaz7005'
  }
}

# Carbon offsets burning

In the middle of a record fire season on the US West Coast, the [Lionshead Fire](http://inciweb.nwcg.gov/incident/7049/) in Oregon burned through one of the largest forest carbon offset projects participating in [California’s carbon market](https://ww2.arb.ca.gov/our-work/programs/cap-and-trade-program). Beyond the tragic effects on local communities and hazardous regional air quality, the expected carbon losses from this fire illustrate how California’s approach of using forests to mitigate climate change may need re-evaluation. 

Here we analyze how future fires might affect California’s offset program and compare these likely consequences to its “buffer pool” insurance mechanism designed to protect against forest carbon loss. While quantifying the full carbon impact of the Lionshead Fire will require additional information, the available evidence highlights the risks to forest carbon permanence, many of which are accelerating in a warming climate.

The intention of this article is not to evaluate or criticize individual land management approaches, nor to imply any error on behalf of the owners or developers of the offset project in question. Rather, we hope to highlight the need for a systemic appraisal of the effectiveness of California’s offset program in the context of risks posed by a changing climate. 

## Policy context

California runs the largest carbon market in North America. This program establishes a modest price on carbon and requires large companies to acquire pollution permits to cover the climate emissions from their power plants, refineries, and other pollution sources. 

One way companies subject to California’s carbon market can comply with its requirements is by buying forest offset credits. It works like this: the climate regulator first awards tradeable offsets credits to forest owners that manage their lands to increase forest carbon stocks relative to a business-as-usual scenario. Companies can acquire these offset credits and increase their  emissions, on the theory that higher emissions are fully offset by the preservation and enhancement of a forest somewhere else.

Although forests provide many environmental and social benefits, one critical challenge forests face as a climate solution is the permanence or durability of the carbon they store. When trees die — whether through fire, drought, or other ecological processes — much of the carbon stored in roots, wood, and soil is released back into the atmosphere. Many threats to forest carbon permanence will only get worse as the planet warms, increasing the chances that forest carbon will be released to the atmosphere <Reference color={meta.color} data={sidenotes[1]}/><Reference color={meta.color} data={sidenotes[2]}/><Reference color={meta.color} data={sidenotes[3]}/>.

The 2020 fire season, while unfortunately intense, provides a useful case study for evaluating just how prepared the California offset program is for managing the permanence risks of forest carbon in a warming climate. 

## The buffer pool

The California offset protocol addresses permanence concerns through a mechanism called a “buffer pool.” Each forest offset project must contribute a share of its offset credits to the buffer pool, which is available to compensate for any unintentional “reversal”, or forest carbon loss, across all forest projects in the offset program over projects’ 100-year commitments. 

In essence, the buffer pool functions as an insurance program that can be accessed when fire, drought, or other unintended events cause a loss of carbon. Whenever there is an unintentional reversal of forest carbon storage, an equal number of credits from the buffer pool are retired to maintain the environmental integrity of the credits that circulate in private markets. This works so long as the buffer pool is large enough to never be depleted. As a result, establishing the appropriate size of the buffer pool is essential — similar to setting financial requirements for an insurance provider. 

California’s forest offset protocol identifies a set of risks that determine what share of each project’s credits must be set aside in the buffer pool. Contributions per risk factor vary per project, but forest offset projects typically contribute between 15% to 20% of their total credits to the buffer pool. Notably, the entire buffer pool is available to cover comprehensive carbon loss from unintentional reversals, no matter the share of the buffer pool associated with that specific risk and no matter the contribution an individual project has made to the collective buffer pool. 

As of early July, more than 127 million forest offset credits were in the private market, and just over 24 million credits remained in the buffer pool — equal to about 15.8% of the total.<Reference color={meta.color} data={sidenotes[4]}/> 

## The fire and the project

The Lionshead Fire in Oregon provides a timely example of the importance of forest carbon offset permanence. Started by a lightning strike on August 16, 2020, the Lionshead Fire merged with nearby fires Beachie Creek and P515. The extent of this fire complex overlaps substantially with the boundaries of the Warm Springs forest offset project in Central Oregon, known as ACR260 in the offsets registry.

Public records from the offset program provide context for the potential scale of carbon loss from this project. ACR260 has received 2,676,483 carbon credits to date — each credit equal to 1 metric ton of CO<sub>2</sub> — which makes it the largest credited forest offset project in Oregon and among the fifteen largest forest projects in California’s carbon offset market.

Estimating forest carbon losses due to fire first requires estimating the area burned. We do this using satellites. Preliminary analysis of NASA FIRMS data, a standardized satellite product that detects and tracks fires across an array of satellites, shows that approximately 72% of the ACR260 project area has been burned by the Lionshead Fire through September 17, 2020.<Reference color={meta.color} data={sidenotes[5]}/> The map below shows the region of the fire and the project area boundary.

<FireMap/>

Second, we need to estimate the fraction of carbon lost due to fire-related mortality. Estimating carbon loss will ultimately require detailed assessment on the ground, which we lack today. As a historical reference point, the 2003 B&B fire, which burned nearby under similar conditions, ultimately killed almost half the trees it encountered.<Reference color={meta.color} data={sidenotes[6]}/> Though the situation in Oregon is still evolving, we can calculate the carbon impacts that would arise from a similar outcome in this incident. At a 50% loss of carbon in the 72% of the ACR260 project area burned through September 17, the Lionshead Fire will have reversed 963,534 credits (about 4% of the total buffer pool). In a worst case scenario in which the entirety of the project burns and all credited carbon is lost, more than 11% of the buffer pool could be depleted.

## Fires of the future

The burning of ACR260 represents one of the few documented fire-induced reversals of a credited California forest offset project. As temperatures continue to rise and fires grow more severe and more frequent, similar losses across other projects and regions are likely to occur in the future.<Reference color={meta.color} data={sidenotes[7]}/> 

So is the forest buffer pool robust enough to handle the inevitable fires of the future? 

To explore this question, we built a simple model that asks what the experience with ACR260 means if future years have similar levels of carbon reversals. We aren’t modeling whether this project re-grows and burns again, nor are we assuming that a similarly sized project will experience a similar event in the future — future reversals could come from multiple offset projects and multiple fires, or another single large event. Our calculations evaluate the impact on the buffer pool from future fires, using the outcome for ACR260 as an example for what a bad year could look like. 

Our model starts by asking what would happen in a year where the same number of offset credits in the ACR260 project experience a fire. We then vary two parameters: the fraction of carbon lost in each event and the frequency with which such events might occur. In the calculator below, you can select values for these two variables and simulate futures that show, as a function of time, the fraction of the buffer pool depleted. 

<RiskScenarios/>

Under a scenario in which carbon loss is approximately 50% in burned areas and events of this magnitude occur once every 4 years, fire alone could consume the entirety of the buffer pool by 2100, despite the fact that the buffer is intended to insure against many other non-fire risks. 

Relatively conservative assumptions still present a worrying picture. In a scenario with 20% carbon loss and events occuring every 10 years, fires could still exceed the 20% of the buffer pool specifically set aside to cover the risk of fire. While buffer credits are fungible and can compensate any unintended reversal, when fire reversals exhaust more than their "fair share" of the buffer pool, all other risks would have to outperform expectations for the buffer pool to adequately insure against future reversals from all types of permanence risks — including drought, disease, insect infestation, and other mounting climate-related stresses.

As long as the buffer pool has “priced” climate-related risks adequately, even the most severe wildfires or other future disturbances wouldn’t undermine the goal of using forests to meet climate targets. 

Thus, the critical question becomes: have we priced these risks correctly? The scenarios examined here strongly suggest undercapitalization of the buffer pool and the urgent need for California to update how climate risks are treated by the forest carbon buffer pool.<Reference color={meta.color} data={sidenotes[8]}/><Reference color={meta.color} data={sidenotes[9]}/> 

The already unprecedented — and on-going — fire year provides a sobering example of the importance of considering risk and permanence in a scientifically rigorous way in the context of forest carbon, carbon removal, and climate policy.

## Documentation

All analyses and data underlying this article are open source and [available online](https://github.com/carbonplan/notebooks/tree/master/offset-project-fire). The fire data is from NASA's Fire Information for Resource Management System (FIRMS), the buffer pool data is from the California Air Resource Board’s database of offset credit issuances, and the offset project geometries are from the American Carbon Registry project database. Our Jupyter notebooks show how we worked with these raw data sources and estimated all the numbers reported in the article. This article itself (including the map visualization and the calculator) are also themselves open source and [available in this repository](https://github.com/carbonplan/research).

Photograph by [Jared Stapp](https://www.jaredstapp.com/).

## Note

We have not reached out to the Confederated Tribes of Warm Springs Reservation of Oregon, on whose land the ACR260 project is located, for comments.

## Terms of engagement

CarbonPlan received no specific financial support for this work.

### Questions? Interested in collaborating on these problems? Email us at [hello@carbonplan.org](mailto:hello@carbonplan.org)

export default ({ children }) => <Article meta={meta}>{children}</Article>
