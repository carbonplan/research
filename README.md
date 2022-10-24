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

### articles

New articles should be added to `articles/` with the article content exported from `articles/{article-name}/index.md`.

#### components

Beyond the default set of components available to each article, extra components (e.g. figures and tables) must be configured using the `components` key in the MDX frontmatter. Any named exports corresponding to the `name` key will be considered first, followed by the default export.

```yaml
components:
  - name: ComponentName
    src: ./path/to/component
```

You may also use components imported from external packages. For example,

```yaml
components:
  - name: Sun
    src: '@carbonplan/icons'
```

You may also specify an `exportName` that is distinct from the `name` used for reference within MDX. For example,

```yaml
components:
  - name: ThemedLink
    src: theme-ui
    exportName: Link
```

To wire through components for availability in MDX, you can start a development version of the site or explicitly run:

```shell
npm run build-components
```

#### display titles

To override the default formatting of an article title, you may add custom JSX to use for your article in `components/mdx/display-titles.js`

### tools

Tools should be added directly to `pages/research/` using the `.page.js` extension. Entries for tools should be added `contents/tools.js` to support rendering content on the index page.

### publications

Publications can be added as an entry to `contents/publications.js`.

### comments

Comment letters can be added as an entry to `contents/comments.js`.

### additional pages

Additional mdx-built pages are automatically generated when added to `articles/{related-article-name}/{additional-page-name}.md`. The route will be prefixed with the related article name.

## license

All the code in this repository is [MIT](https://choosealicense.com/licenses/mit/) licensed, but we request that you please provide attribution if reusing any of our digital content (graphics, logo, articles, etc.).

## about us

CarbonPlan is a non-profit organization that uses data and science for climate action. We aim to improve the transparency and scientific integrity of climate solutions with open data and tools. Find out more at [carbonplan.org](https://carbonplan.org/) or get in touch by [opening an issue](https://github.com/carbonplan/research/issues/new) or [sending us an email](mailto:hello@carbonplan.org).
