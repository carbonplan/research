const comments = [
  {
    title:
      'Commodity Futures Trading Commission re: Listing of voluntary carbon credit derivative contracts guidance',
    href: 'https://files.carbonplan.org/CFTC-Voluntary-Carbon-Credit-Comment-Letter-02-16-2024.pdf',
    date: '02-16-2024',
  },
  {
    title: 'Federal Insurance Office re: Climate-related financial risk',
    href: 'https://files.carbonplan.org/FIO-Climate-Related-Financial-Risk-12-04-2023.pdf',
    date: '12-04-2023',
  },
  {
    title: 'UNFCCC Article 6.4 Supervisory Body re: SB005 annotated agenda',
    href: 'https://files.carbonplan.org/Article-6_4-Supervisory-Body-Comment-Letter-05-24-2023.pdf',
    date: '05-24-2023',
  },
  {
    title: 'Federal Trade Commission re: Green Guides Review',
    href: 'https://files.carbonplan.org/FTC-Green-Guides-Comment-Letter-04-21-2023.pdf',
    date: '04-21-2023',
  },
  {
    title: 'Federal Insurance Office re: Climate-related financial risk',
    href: 'https://files.carbonplan.org/FIO-Climate-Related-Financial-Risk-12-20-2022.pdf',
    date: '12-20-2022',
    links: [
      {
        label: 'Blog post',
        href: 'https://carbonplan.org/blog/climate-risks-insurance',
      },
    ],
  },
  {
    title: 'California Air Resources Board re: Forest carbon offset workshop',
    href: 'https://files.carbonplan.org/CARB-Forest-Offsets-Workshop-Comment-Letter-12-15-2022.pdf',
    date: '12-15-2022',
  },
  {
    title:
      'Greenhouse Gas Protocol re: Draft Land Sector and Removals Guidance',
    href: 'https://files.carbonplan.org/GHG-Protocol-Letter-11-30-2022.pdf',
    date: '11-30-2022',
    links: [
      {
        label: 'Explainer article',
        href: 'https://carbonplan.org/research/ton-year-explainer',
      },
    ],
  },
  {
    title: 'Science Based Targets initiative re: Carbon removal guidance',
    href: 'https://files.carbonplan.org/SBTi-Carbon-Removal-Letter-11-22-2022.pdf',
    date: '11-22-2022',
    links: [
      {
        label: 'Policy brief',
        href: 'https://carbonplan.org/research/sbti-carbon-removal',
      },
    ],
  },
  {
    title:
      'UNFCCC Article 6.4 Mechanism Supervisory Body re: Carbon removal guidance',
    href: 'https://files.carbonplan.org/Article-6_4-Supervisory-Body-Comment-Letter-10-10-2022.pdf',
    date: '10-10-2022',
  },
  {
    title:
      'U.S. Commodity Futures Trading Commission re: Climate-Related Financial Risk',
    href: 'https://files.carbonplan.org/CFTC-Climate-Risk-RFI-Comment-Letter-10-07-2022.pdf',
    date: '10-07-2022',
    links: [
      {
        label: 'Policy brief',
        href: 'https://carbonplan.org/research/verra-integrity-council',
      },
    ],
  },
  {
    title: 'Australian Independent Review Panel re: Climate integrity of ACCUs',
    href: 'https://files.carbonplan.org/ACCU-Review-Comment-Letter-09-27-2022.pdf',
    date: '09-27-2022',
  },
  {
    title:
      'Voluntary Carbon Markets Integrity Initiative re: Provisional Claims Code of Practice',
    href: 'https://files.carbonplan.org/VCMI-Comment-Letter-08-12-2022.pdf',
    date: '08-12-2022',
  },
  {
    title:
      'Washington Department of Ecology re: California forest carbon offsets',
    href: 'https://files.carbonplan.org/Washington-Ecology-Offsets-Comment-Letter-07-15-2022.pdf',
    date: '07-15-2022',
  },
  {
    title:
      'U.S. Securities and Exchange Commission re: Climate-related financial disclosures',
    href: 'https://files.carbonplan.org/SEC-Climate-Disclosures-Comment-Letter-06-16-2022.pdf',
    date: '06-16-2022',
    links: [
      {
        label: 'Blog post',
        href: 'https://carbonplan.org/blog/sec-offset-disclosure',
      },
    ],
  },
  {
    title:
      'White House Office of Science and Technology Policy re: Digital assets',
    href: 'https://files.carbonplan.org/OSTP-Digital-Assets-Comment-Letter-05-09-2022.pdf',
    date: '05-09-2022',
    links: [
      {
        label: 'Explainer article',
        href: '/research/toucan-crypto-offsets',
      },
    ],
  },
  {
    title: 'European Commission re: Certifying carbon removal',
    href: 'https://files.carbonplan.org/EU-CDR-Certification-Comment-Letter-05-02-2022.pdf',
    date: '05-02-2022',
  },
  {
    title: "Verra re: NCX's proposed harvest deferral methodology",
    href: 'https://files.carbonplan.org/Verra-NCX-Harvest-Deferral-Comment-Letter-04-21-2022.pdf',
    date: '04-21-2022',
    links: [
      {
        label: 'Blog post',
        href: '/blog/ton-year-verra',
      },
    ],
  },
  {
    title: 'Verra re: Proposed updates to the VCS Program',
    href: 'https://files.carbonplan.org/Verra-Ton-Year-Comment-Letter-04-08-22.pdf',
    date: '04-08-2022',
    links: [
      {
        label: 'Blog post',
        href: '/blog/ton-year-verra',
      },
    ],
  },
  {
    title:
      'Office of the Comptroller of the Currency re: Climate-related financial risk',
    href: 'https://files.carbonplan.org/OCC-Climate-Risks-Comments-02-14-2022.pdf',
    date: '02-14-2022',
    links: [
      {
        label: 'Blog post',
        href: 'https://carbonplan.org/blog/occ-risk-comment',
      },
    ],
  },
  {
    date: '02-01-2022',
    title: 'NASA re: Open source science',
    href: 'https://files.carbonplan.org/NASA-OSS-Data-RFI-Comments-02-01-2022.pdf',
  },
  {
    title: 'PCAF and SBTi re: Net-zero standards',
    href: 'https://files.carbonplan.org/PCAF-SBTi-Net-Zero-Comment-Letter-12-20-2021.pdf',
    date: '12-20-2021',
    links: [
      {
        label: 'Policy brief',
        href: 'https://carbonplan.org/research/climate-financial-risks',
      },
    ],
  },
  {
    date: '11-01-2021',
    title: 'U.S. Department of Agriculture re: Climate-smart commodity markets',
    href: 'https://files.carbonplan.org/USDA-CSAF-Comment-Letter-11-01-21.pdf',
    links: [
      {
        label: 'Blog post',
        href: 'https://carbonplan.org/blog/usda-csaf-comment',
      },
    ],
  },
  {
    date: '01-05-2021',
    title:
      'Taskforce Scaling Voluntary Carbon Markets re: Initial recommendations',
    href: 'https://files.carbonplan.org/Offset-Task-Force-Comment-Letter-01-05-2021.pdf',
    links: [
      {
        label: 'Taskforce website',
        href: 'https://www.iif.com/tsvcm',
      },
      {
        label: 'Press coverage',
        href: 'https://www.ft.com/content/de5e8631-bdf2-4c2e-8b7f-83c0c80cdea8',
      },
    ],
  },
  {
    date: '08-25-2020',
    title: 'Climate Action Reserve re: Soil Enrichment Protocol #2',
    href: 'https://files.carbonplan.org/Soil-Carbon-Comment-Letter-08-25-2020.pdf',
    links: [
      {
        label: 'Explainer article',
        href: '/research/soil-carbon-comment',
      },
    ],
  },
  {
    date: '05-18-2020',
    title: 'Climate Action Reserve re: Soil Enrichment Protocol #1',
    href: 'https://files.carbonplan.org/Soil-Carbon-Comment-Letter-05-18-2020.pdf',
    links: [
      {
        label: 'Explainer article',
        href: '/research/soil-carbon-comment',
      },
    ],
  },
]
export default comments
