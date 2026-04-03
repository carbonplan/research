import { Box, Flex } from 'theme-ui'
import { Button, Figure, Table } from '@carbonplan/components'
import { RotatingArrow } from '@carbonplan/icons'

const FACTORS = [
  {
    name: 'Building attributes like fire-resistant construction and defensible space',
    explanation:
      'Interventions like metal roofs, clean gutters, resistant siding, and defensible space can dramatically reduce the risk of home ignition. We do not account for any of these attributes.',
    resources: [
      {
        label: 'Home hardening',
        url: 'https://readyforwildfire.org/prepare-for-wildfire/hardening-your-home',
      },
      {
        label: 'Home ignition zone',
        url: 'https://www.nfpa.org/education-and-research/wildfire/preparing-homes-for-wildfire',
      },
      {
        label: 'Exterior home protection',
        url: 'https://cpaw.headwaterseconomics.org/wp-content/uploads/2022/08/2022HE-OwnYourZoneHouse-R3_CPAW.pdf',
      },
    ],
  },
  {
    name: 'Building-to-building spread',
    explanation:
      'Our estimates do not account for how, during an urban conflagration, buildings can become fuel, and fire can spread amongst communities. This is an area of research in urgent need of innovation.',
    resources: [
      {
        label: 'Wildland-urban fire',
        url: 'https://doi.org/10.1073/pnas.2315797120',
      },
      {
        label: 'Research opportunities',
        url: 'https://headwaterseconomics.org/natural-hazards/wildfire/wildfire-risk-models-built-environment/',
      },
    ],
  },
  {
    name: 'Changes in vegetation, including wildfires after 2020',
    explanation:
      'Our estimates are based on a combination of vegetation maps from the ends of 2020 and 2022. Changes in vegetation in the interim, particularly wildfires, would have removed fuel and temporarily reduced our BP and cRPS values, thereby decreasing the final risk estimate. In these cases our risk estimates are likely anomalously high-biased. Similarly, prescribed fire is an effective technique for reducing fire risk, but if it occurred after 2020, our estimates would not capture it.',
    resources: [
      {
        label: 'Prescribed fire',
        url: 'https://www.fs.usda.gov/managing-land/prescribed-fire',
      },
      {
        label: 'Wildfires',
        url: 'https://cires.colorado.edu/news/fewer-forest-fires-burn-north-america-today-past-and-thats-bad-thing',
      },
    ],
  },
  {
    name: 'Community mitigation planning',
    explanation:
      'Our estimates do not account for community-scale actions like wildfire protection plans and land-use planning. These actions can reduce the risk of wildfire entering a community.',
    resources: [
      {
        label: 'Firewise communities',
        url: 'https://www.nfpa.org/education-and-research/wildfire/firewise-usa',
      },
      {
        label: 'Community wildfire protection plan',
        url: 'https://www.iafc.org/docs/default-source/pdf/wild_cwppleadrsguide.pdf',
      },
      {
        label: 'Fire adapted communities tool',
        url: 'https://fireadaptednetwork.org/resources/fac-assessment-tool/',
      },
      {
        label: 'Land-use planning',
        url: 'https://wildfirerisk.org/reduce-risk/land-use-planning',
      },
    ],
  },
  {
    name: 'Community emergency planning',
    explanation:
      'Community-level emergency planning can support the development of strong evacuation plans and ensure adequate access, which could reduce wildfire risk.',
    resources: [
      {
        label: 'Evacuation readiness',
        url: 'https://www.nist.gov/publications/wui-fire-evacuation-and-sheltering-considerations-assessment-planning-and-execution-0',
      },
      {
        label: 'Fire apparatus access roads',
        url: 'https://www.nfpa.org/news-blogs-and-articles/blogs/2021/01/08/fire-apparatus-access-roads',
      },
      {
        label: 'Wildfire risk to roads',
        url: 'https://www.climatecentral.org/climate-matters/wildfire-risk-to-homes',
      },
    ],
  },
  {
    name: 'Changes to ignition patterns',
    explanation:
      'Our model is based on simulations which used a fixed map of ignition probabilities. Changes in ignition patterns could either increase or decrease the estimated risk in a given location.',
    resources: [
      {
        label: 'Preventing ignitions',
        url: 'https://wildfirerisk.org/reduce-risk/prevent-ignitions',
      },
      {
        label: 'Wildfire prevention',
        url: 'https://dnr.wa.gov/wildfire-resources/wildfire-prevention',
      },
    ],
  },
]

const FactorsTable = () => {
  return (
    <Figure>
      <Table
        columns={6}
        start={[1, 1, 1]}
        width={[6, 6, 6]}
        data={[
          ...FACTORS.map(({ name, explanation, resources }) => [
            <Box key='name' sx={{ color: 'red' }}>
              {name}
            </Box>,
            <Box
              key='explanation'
              sx={{
                mt: [2, 3, 3, 3],
                fontFamily: 'body',
                letterSpacing: 'body',
                textTransform: 'none',
              }}
            >
              {explanation}
            </Box>,

            <Flex
              key='links'
              sx={{
                mt: [2, 3, 3, 3],
                columnGap: 4,
                rowGap: 2,
                flexWrap: 'wrap',
              }}
            >
              {resources.map(({ label, url }) => (
                <Button
                  key={url}
                  href={url}
                  suffix={<RotatingArrow sx={{ display: 'inline' }} />}
                  size='xs'
                  inverted
                >
                  <Box as='span' sx={{}}>
                    {label}
                  </Box>
                </Button>
              ))}
            </Flex>,
          ]),
        ]}
      />
    </Figure>
  )
}

export default FactorsTable
