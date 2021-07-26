export const scoreDescriptions = {
  rigor: {
    1: 'Protocol relies on modeling for crediting, and either does not use sampling or has only weak or adequate sampling. Alternatively, protocol uses empirical crediting but with weak sampling.',
    2: 'Protocol relies on modeling for crediting, models are calibrated or parameterized with samples, and overall quality of both sampling and modeling is as high as possible. Alternatively, protocol uses empirical crediting based directly on soil sampling, and overall quality of sampling is adequate.',
    3: 'Protocol uses empirical crediting based directly on soil sampling and overall quality of both sampling and modeling is as high as possible.',
  },
  additionality: {
    1: 'No additionality test, or an ineffective additionality test, or a transparently cynical test that is designed to create the appearance of a robust additionality screen.',
    2: 'A project-level or programmatic additionality test that is not adequately grounded in real-world data about the existing adoption of all creditable agricultural practices, and/or is implemented at a level of geographic resolution that masks real-world market trends.',
    3: 'A rigorous project-level or programmatic additionality test that takes into account real data about the existing adoption of all creditable agricultural practices at a level of geographic resolution that accurately reflects real-world market trends.',
  },
  durability: {
    1: 'A permanence period of less than 10 years, or an inadequate buffer pool and/or no explicit permanence protections.',
    2: 'A permanence period of 10 years or more, plus at least a moderately robust buffer pool and/or a moderately robust alternative insurance instrument.',
    3: 'A permanence period approaching or exceeding 100 years, plus a rigorous buffer pool and/or a rigorous alternative insurance instrument.',
  },
  safeguards: {
    1: 'No safeguards included as robust and rigorous requirements.',
    2: 'At least one safeguard included as a robust and rigorous requirement.',
    3: 'At least two safeguards included as robust and rigorous requirements.',
  },
}
