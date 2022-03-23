import { Figure, Table } from '@carbonplan/components'

const additionality = [
  [
    'Problem',
    'Contrary to key standards for compliance grade markets and the Climate Action Reserve’s own requirements for private markets, the protocol does not evaluate project additionality.',
  ],
  [
    'Recommendation',
    'To accurately inform prospective credit buyers, the protocol should acknowledge that it is not evaluating the financial viability of credited projects and therefore is not testing for additionality.',
  ],
]

const modelSelection = [
  [
    'Problem',
    'Projects can select their own models to calculate the number of credits earned under the protocol, subject to a set of ambiguous quality control criteria.',
  ],
  [
    'Recommendation',
    'All model calculations should be based on well-established, scientifically vetted models and either be fully disclosed such that an independent researcher could fully replicate calculations or independently verified by a financially disinterested third party.',
  ],
]

const samplingAndVerification = [
  [
    'Problem',
    <span>
      The protocol does not prescribe specific sampling methods to ensure
      accurate measurement of individual project sites, nor does it require
      independent measurement of soil carbon in the verification process.
      <br />
      <br />
      The protocol proposes that fewer than 1% of large project aggregators’
      sites be verified, without justifying that rate with respect to known data
      on soil carbon quantification and sampling.
      <br />
      <br />
      Numerous loopholes would allow offset projects to avoid all physical site
      visits in the verification process.
    </span>,
  ],
  [
    'Recommendation',
    <span>
      Projects should rigorously sample soils at baseline and regular intervals,
      with sampling designs and randomization schemes that adequately capture
      underlying variation, in accordance with best practices from the
      scientific literature.
      <br />
      <br />
      The rate of sampling of individual project sites for large aggregators
      should be increased.
      <br />
      <br />
      Verification sampling must be done on-site and should not be replaced with
      self-reporting or remote sensing techniques that are not widely accepted
      in the scientific literature.
    </span>,
  ],
]

const permanence = [
  [
    'Problem',
    <span>
      Although the protocol offers 100-year guarantees on carbon permanence, it
      only requires physical soil carbon monitoring for 30 years and allows
      projects to select shorter compliance timeframes in private contracts with
      the Climate Action Reserve.
      <br />
      <br />
      The protocol does not support its choice of buffer pool parameters. The
      buffer pool rules also include a series of loopholes that do not protect
      against the possibility that participating projects might default on their
      contracts.
    </span>,
  ],
  [
    'Recommendation',
    <span>
      The permanence of any credits issued under the protocol should be the
      lesser of (1) the period of time over which projects must physically
      monitor soil carbon and (2) any shorter time period the carbon offset
      project elects in its private contract with the Climate Action Reserve.
      <br />
      <br />
      The protocol should justify the choice of parameters used to calculate the
      contribution of its buffer pool and eliminate loopholes that allow private
      parties to avoid contributing to the buffer pool to cover their default
      risks.
    </span>,
  ],
]

const TableWrapper = ({ data, header, first = false }) => {
  return (
    <Table
      color='orange'
      header={header}
      data={data}
      columns={[6]}
      start={[
        [1, 1, 1, 1],
        [1, 3, 3, 3],
      ]}
      width={[
        [6, 2, 2, 2],
        [6, 4, 4, 4],
      ]}
      borderTop={first ? true : false}
      sx={{ mt: [first ? '0px' : '-2px'] }}
    />
  )
}

const Conclusions = () => {
  return (
    <Figure>
      <TableWrapper header='Additionality' data={additionality} first={true} />
      <TableWrapper header='Model selection' data={modelSelection} />
      <TableWrapper
        header='Sampling and verification'
        data={samplingAndVerification}
      />
      <TableWrapper header='Permanence' data={permanence} />
    </Figure>
  )
}

export default Conclusions
