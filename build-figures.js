const fs = require('fs')
const glob = require('glob')

glob.sync('./figures.js').forEach((f) => {
  if (fs.rmSync) return fs.rmSync(f)
})

const figurePaths = glob.sync('./articles/**/components/**.js')
const figureMapping = figurePaths.reduce((accum, figurePath) => {
  const [articleId] = figurePath.match(/[^\/]+(?=\/components\/)/)
  const [fileName] = figurePath.match(/[^\/]+(?=\.js)/)
  const componentName = fileName.replace(/(^\w|-\w)/g, (text) =>
    text.replace(/-/, '').toUpperCase()
  )

  if (!accum[articleId]) {
    accum[articleId] = []
  }

  accum[articleId].push({ figurePath, componentName })
  return accum
}, {})

const file = `
import dynamic from 'next/dynamic'

const figures = {
${Object.keys(figureMapping).map(
  (articleId) => `
'${articleId}': {
    ${figureMapping[articleId].map(
      ({ figurePath, componentName }) =>
        `${componentName}: dynamic(() => import('${figurePath}'))`
    )}
}
`
)}
}
export default figures
`
fs.writeFileSync('./figures.js', file)
