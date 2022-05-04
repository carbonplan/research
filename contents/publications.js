const publications = [
  {
    date: '04-29-2022',
    title:
      'California’s forest carbon offsets buffer pool is severely undercapitalized',
    href: 'https://doi.org/10.1101/2022.04.27.488938',
    color: 'green',
    summary:
      'A preprint analyzing the design of California’s forest carbon offset insurance program shows that the state has not adequately addressed the risks of wildfire and sudden oak death.',
    journal: 'bioRxiv',
  },
  {
    date: '03-31-2022',
    title: 'Ocean solutions in the carbon market',
    href: 'https://issuu.com/journaloceantechnology/docs/e-jot_vol17n1_interactive_book_lr_flipbook',
    color: 'teal',
    summary:
      'A short article outlining the challenges of incorporating ocean-based CDR into carbon markets and the need for those who know the science to track claims carefully and help others do the same.',
    journal: 'The Journal of Ocean Technology',
  },
  {
    date: '02-12-2022',
    title: 'Economic and biophysical limits to seaweed-based climate solutions',
    href: 'https://doi.org/10.31223/X5PG9V',
    color: 'teal',
    summary:
      'A paper using coupled seaweed growth and technoeconomic models to better understand the potential role of seaweed farming for carbon removal and biomass products.',
    journal: 'EarthArXiv',
    links: [
      {
        label: 'Explainer article',
        href: '/research/seaweed-farming-explainer',
      },
      { label: 'Map tool', href: '/research/seaweed-farming' },
    ],
  },
  {
    date: '10-20-2021',
    title:
      "Systematic over-crediting in California's forest carbon offsets program",
    href: 'https://doi.org/10.1111/gcb.15943',
    color: 'green',
    summary:
      "Our paper evaluating the design of California's prominent forest carbon offsets program and demonstrate that its climate-equivalence claims fall far short on the basis of directly observable evidence.",
    journal: 'Global Change Biology',
    links: [
      {
        label: 'Explainer article',
        href: '/research/forest-offsets-explainer',
      },
      { label: 'Map tool', href: '/research/forest-offsets' },
      {
        label: 'Press coverage',
        href: 'https://www.propublica.org/article/the-climate-solution-actually-adding-millions-of-tons-of-co2-into-the-atmosphere',
      },
      { label: 'FAQ', href: '/research/forest-offsets-explainer-faq' },
    ],
  },
  {
    date: '05-20-2021',
    title: 'Climate risks to carbon sequestration in US forests',
    href: 'https://doi.org/10.1101/2021.05.11.443688',
    color: 'red',
    journal: 'bioRxiv',
    summary:
      'A paper quantifying the key climate drivers that fuel risks to forests in the United States from wildfire, drought, and insects, and projecting those risks over the 21st century.',
    links: [
      { label: 'Explainer article', href: '/research/forest-risks-explainer' },
      { label: 'Map tool', href: '/research/forest-risks' },
    ],
  },
  {
    date: '01-14-2021',
    title: 'CDR Primer',
    href: 'https://cdrprimer.org',
    summary:
      'A new resource on the fundamentals of carbon dioxide removal and its role in addressing the climate crisis. Our team helped write, edit, and produce this free, online digital book.',
    journal: 'Book',
    color: 'secondary',
  },

  {
    date: '06-19-2020',
    title:
      'Climate-driven risks to the climate mitigation potential of forests',
    href: 'https://doi.org/10.1126/science.aaz7005',
    summary:
      'Team members contributed to a review paper on physical risks to forest carbon, like fire, drought, and insects, and why that matters for thinking about the role of forests in climate change mitigation.',
    color: 'green',
    journal: 'Science',
    links: [
      {
        label: 'Press coverage',
        href: 'https://www.rollingstone.com/politics/politics-features/tree-planting-wont-stop-climate-crisis-1020500/',
      },
    ],
  },
]
export default publications
