import Head from 'next/head'

const Seo = ({ shareCard, shareDescription, shareTitle }) => (
  <Head>
    <title>carbonplan / research</title>
    <meta
      name='description'
      content={
        shareDescription
          ? shareDescription
          : 'Datasets, models, interactives, and commentary on carbon removal and climate solutions.'
      }
    />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    <link rel='canonical' content='https://carbonplan.org/' />
    <link
      rel='icon'
      href='https://carbonplan-assets.s3.amazonaws.com/images/favicon.svg'
    />
    <link
      rel='apple-touch-icon'
      href='https://carbonplan-assets.s3.amazonaws.com/images/favicon.png'
    />
    <meta property='og:title' content='carbonplan / research' />
    <meta
      property='og:description'
      content={
        shareDescription
          ? shareDescription
          : 'Datasets, models, interactives, and commentary on carbon removal and climate solutions.'
      }
    />
    <meta
      property='og:image'
      content={`https://carbonplan-assets.s3.amazonaws.com/images/social/${
        shareCard ? shareCard : 'research'
      }.png`}
    />
    <meta property='og:url' content='https://carbonplan.org' />
    <meta name='twitter:title' content='carbonplan / research' />
    <meta
      name='twitter:description'
      content={
        shareDescription
          ? shareDescription
          : 'Datasets, models, interactives, and commentary on carbon removal and climate solutions.'
      }
    />
    <meta
      name='twitter:image'
      content={`https://carbonplan-assets.s3.amazonaws.com/images/social/${
        shareCard ? shareCard : 'research'
      }.png`}
    />
    <meta name='twitter:card' content='summary_large_image' />
  </Head>
)

export default Seo
