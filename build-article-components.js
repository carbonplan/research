const fs = require('fs')
const glob = require('glob')
const { articleMetadata } = require('./utils/mdx.js')

glob.sync('./components/mdx/article-components.js').forEach((f) => {
  if (fs.rmSync) return fs.rmSync(f)
})

const buildComponents = () => {
  const componentMapping = articleMetadata.map(({ id, components = [] }) => ({
    id,
    imports: components.map(({ name, src, exportName }) => ({
      name,
      exportName,
      src: src
        .replace(/^\.\//, `../../articles/${id}/`)
        .replace('../../components/', '../'),
    })),
  }))

  const file = `
  import dynamic from 'next/dynamic'
  
  // NOTE: This is a dynamically generated file based on the config specified under the
  //       \`components\` key in each article's frontmatter.
  const components = {
    ${componentMapping
      .map(
        ({ id, imports }) => `
      '${id}': {${imports
          .map(
            ({ name, src, exportName }) =>
              `${name}: dynamic(() => import('${src}')${
                exportName ? `.then((mod) => mod.${exportName})` : ''
              })`
          )
          .join(',')}}
      `
      )
      .join(',')}
  }
  
  export default components
  `

  fs.writeFileSync('./components/mdx/article-components.js', file)
}

buildComponents()
