const fs = require('fs')
const glob = require('glob')

glob.sync('./figures.js').forEach((f) => {
  if (fs.rmSync) return fs.rmSync(f)
})

const createMissingFigures = () => {
  const articles = fs.readdirSync('./articles')
  const existingFigures = glob
    .sync('./articles/**/figures.js')
    .map((figurePath) => figurePath.match(/[^\/]+(?=\/figures\.js)/)[0])

  const articlesMissingFigures = articles.filter(
    (id) => !existingFigures.includes(id)
  )
  articlesMissingFigures.forEach((id) => {
    const figurePaths = glob.sync(`./articles/${id}/components/**.js`)
    const figureMapping = figurePaths.map((figurePath) => {
      const [fileName] = figurePath.match(/[^\/]+(?=\.js)/)
      const componentName = fileName.replace(/(^\w|-\w)/g, (text) =>
        text.replace(/-/, '').toUpperCase()
      )
      const relativePath = `./components/${fileName}.js`

      return { componentName, relativePath }
    })

    const file = `
    import dynamic from 'next/dynamic'
    
    // NOTE: This is a dynamically generated file assuming that every file within components/ is a
    //       kebeb-case-named file exporting a single figure. You may overwrite this file if that
    //       assumption does not apply.
    const figures = {
      ${figureMapping
        .map(
          ({ componentName, relativePath }) =>
            `${componentName}: dynamic(() => import('${relativePath}'))`
        )
        .join(',')}
    }
    
    export default figures
    `
    fs.writeFileSync(`./articles/${id}/figures.js`, file)
  })
}

const combineFigures = () => {
  const figurePaths = glob.sync('./articles/**/figures.js')
  const figureMapping = figurePaths.map((figurePath) => {
    const [articleId] = figurePath.match(/[^\/]+(?=\/figures\.js)/)
    const importPath = figurePath.replace(/\.js/, '')
    const importName = articleId.replace(/-\w/g, (text) =>
      text.replace(/-/, '').toUpperCase()
    )
    return { articleId, importPath, importName }
  })

  const file = `
${figureMapping
  .map(
    ({ importPath, importName }) =>
      `import { default as ${importName} } from '${importPath}'`
  )
  .join('\n')}

export default {
${figureMapping
  .map(({ articleId, importName }) => `'${articleId}': ${importName}`)
  .join(',\n')}
}
`
  fs.writeFileSync('./figures.js', file)
}

createMissingFigures()
combineFigures()
