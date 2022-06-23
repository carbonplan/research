const fs = require('fs')
const glob = require('glob')
const puppeteer = require('puppeteer')
const contents = require('./utils/mdx.js')

glob('./cards/**.png', async (err, filePaths) => {
  if (!fs.existsSync('./cards')) {
    fs.mkdirSync('./cards')
  }

  for (const commentary of contents.commentaryMetadata) {
    if (!filePaths.find((p) => p.includes(commentary.id))) {
      const file = await getScreenshot(commentary.id)
      fs.writeFileSync(`./cards/${commentary.id}.png`, file)
    }
  }
  process.exit()
})

const baseUrl = process.env.CARDS_BASE_URL || 'http://localhost:4000'

async function getScreenshot(id) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport({ width: 1200, height: 630 })
  await page.goto(baseUrl + '/cards/' + id)
  await page.waitForSelector('#final-authors')
  const file = await page.screenshot()
  await page.close()

  return file
}
