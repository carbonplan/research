async function getStaticProps() {
  const responses = await Promise.all([
    fetch(
      'https://raw.githubusercontent.com/carbonplan/toucan-crypto-offsets/main/data/coin_price_ts.json'
    ),
    fetch(
      'https://raw.githubusercontent.com/carbonplan/toucan-crypto-explainer/main/data/toucan_retirements_by_minimum_vintage.json'
    ),
  ])
  const values = await Promise.all(responses.map((res) => res.json()))

  return {
    props: {
      prices: values[0],
      retirements: values[1],
    },
  }
}

export default getStaticProps
