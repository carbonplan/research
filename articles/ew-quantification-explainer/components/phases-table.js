import { Link, Table } from '@carbonplan/components'

const PhasesTable = () => {
  return (
    <Table
      columns={[6]}
      start={[[1], [1, 3, 3, 3]]}
      width={[
        [6, 2, 2, 2],
        [6, 4, 4, 4],
      ]}
      sx={{
        a: { color: 'inherit', '&:hover': { color: 'primary' } },
        '& tr:nth-of-type(1)': { color: 'purple' },
        '& tr:nth-of-type(2)': { color: 'grey' },
        '& tr:nth-of-type(3)': { color: 'yellow' },
        '& tr:nth-of-type(4)': { color: 'green' },
        '& tr:nth-of-type(5)': { color: 'teal' },
      }}
      data={[
        [
          'Rock application',
          <>
            The type and quantity of rock applied to the field places an upper
            bound on the{' '}
            <Link href='https://carbonplan.org/research/cdr-verification/docs/components/min-pot'>
              potential for CDR
            </Link>
            . This upper bound is a function of the application rate, along with
            physical and chemical characteristics of the rock. It is also
            affected by the{' '}
            <Link href='https://carbonplan.org/research/cdr-verification/docs/components/mat-co2'>
              emissions
            </Link>{' '}
            <Link href='https://carbonplan.org/research/cdr-verification/docs/components/energy-co2'>
              associated
            </Link>{' '}
            with sourcing and applying the rock.
          </>,
        ],
        [
          'Initial weathering',
          <>
            To impact atmospheric CO₂, the applied rock must dissolve,
            neutralizing acid and{' '}
            <Link href='https://carbonplan.org/research/cdr-verification/docs/components/alk-release'>
              releasing alkalinity
            </Link>{' '}
            into the system. These reactions increase water’s ability to hold
            carbon.
          </>,
        ],
        [
          'Field processes',
          <>
            Chemical or biological processes in the field to which the rock is
            applied can affect the relationship between initial weathering and
            atmospheric CO₂ removal. These processes could include{' '}
            <Link href='https://carbonplan.org/research/cdr-verification/docs/components/carb-terr'>
              carbonate precipitation
            </Link>
            ,{' '}
            <Link href='https://carbonplan.org/research/cdr-verification/docs/components/min-sec'>
              secondary mineral formation
            </Link>
            , or interactions with microbial communities and{' '}
            <Link href='https://carbonplan.org/research/cdr-verification/docs/components/soil-c'>
              soil organic carbon
            </Link>
            . Field processes can also affect the timing of CO₂ removal, for
            example via the interaction of weathering products and the soil
            cation exchange complex.
          </>,
        ],
        [
          'Watershed transport',
          <>
            As weathering products move through the watershed downstream of the
            field, chemical or biological processes can affect the relationship
            between initial weathering and ultimate atmospheric CO₂ removal.
            These processes include{' '}
            <Link href='https://carbonplan.org/research/cdr-verification/docs/components/carb-terr'>
              carbonate precipitation
            </Link>{' '}
            and{' '}
            <Link href='https://carbonplan.org/research/cdr-verification/docs/components/evasion'>
              evasion
            </Link>
            . Weathering products may spend days to centuries in a watershed
            before reaching the ocean.
          </>,
        ],
        [
          'Ocean storage',
          <>
            The majority of carbon removed from the atmosphere as a result of
            enhanced weathering will ultimately be stored in the ocean in the
            form of dissolved inorganic carbon (DIC). Ocean processes that
            affect the relationship between initial weathering and ultimate
            atmospheric CO₂ removal include{' '}
            <Link href='https://carbonplan.org/research/cdr-verification/docs/components/evasion'>
              evasion
            </Link>{' '}
            and{' '}
            <Link href='https://carbonplan.org/research/cdr-verification/docs/components/carb-marine'>
              carbonate precipitation
            </Link>
            .
          </>,
        ],
      ]}
      borderTop={false}
      borderBottom={false}
    />
  )
}

export default PhasesTable
