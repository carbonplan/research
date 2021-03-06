<img
  src='https://carbonplan-assets.s3.amazonaws.com/monogram/dark-small.png'
  height='48'
/>

# carbonplan / research

**datasets, models, interactives, and commentary on carbon removal**

[![GitHub][github-badge]][github]
[![Build Status]][actions]
![MIT License][]

[github]: https://github.com/carbonplan/research
[github-badge]: https://badgen.net/badge/-/github?icon=github&label
[build status]: https://github.com/carbonplan/research/actions/workflows/main.yml/badge.svg
[actions]: https://github.com/carbonplan/research/actions/workflows/main.yaml
[mit license]: https://badgen.net/badge/license/MIT/blue

This repository contains our directory of research articles, tools, and commentary. Browse the live version at [carbonplan.org/research](https://carbonplan.org/research). All articles and most of our tools are included directly in this repository within the [`articles`](/articles) and [`tools`](tools) subfolders. Some of our more complex tools are in separate repos and hosted independently, for example [`forest-offests`](https://github.com/carbonplan/forest-offsets-web) and [`cdr-database`](https://github.com/carbonplan/cdr-database).

The site is a [Next.js](https://nextjs.org/) project, deployed on [Vercel](https://vercel.com/).

## to build the site locally

Assuming you already have `Node.js` installed, you can install the build dependencies as:

```shell
npm install .
```

To start a development version of the site, simply run:

```shell
npm run dev
```

and then visit `http://localhost:4000/research` in your browser.

## license

All the code in this repository is [MIT](https://choosealicense.com/licenses/mit/) licensed, but we request that you please provide attribution if reusing any of our digital content (graphics, logo, articles, etc.).

## about us

CarbonPlan is a non-profit organization that uses data and science for climate action. We aim to improve the transparency and scientific integrity of carbon removal and climate solutions through open data and tools. Find out more at [carbonplan.org](https://carbonplan.org/) or get in touch by [opening an issue](https://github.com/carbonplan/research/issues/new) or [sending us an email](mailto:hello@carbonplan.org).
