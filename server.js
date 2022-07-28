/* eslint @typescript-eslint/no-var-requires: 0 */
const express = require('express')
const cheerio = require('cheerio')
const path = require('path')
const fs = require('fs')
const metaDataObj = require('./src/Constants/metaData.json')

const PORT = 8080

const app = express()

const options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm','html','js','css','json','ico','png','jpg','txt','svg','woff','woff2','webp','map'],
  index: false,
  maxAge: '0',
  redirect: 'false',
  setHeaders: (res) => {
    res.set('x-timestamp', Date.now())
  },
}

app.use(express.static('build', options))

app.get('*', (req, res) => {
  const { path: reqPath } = req
  let correctPath = reqPath
  const indexHtmlPath = path.resolve(__dirname, './build/index.html')
  const indexHtml = fs.readFileSync(indexHtmlPath)
  const $ = cheerio.load(indexHtml)
  if (reqPath.endsWith('/') && !(reqPath.length === 1 && reqPath === '/')) correctPath = reqPath.slice(0, -1)
  const metaData = metaDataObj[correctPath] || null
  let titleTag = null
  let metaArray = []
  let h1Tag = null
  let h2Tags = []
  if (metaData && metaData.title) titleTag = `<title>${metaData.title}</title>`
  if (metaData && metaData.metaData) {
    metaArray = metaData.metaData.map((meta) => {
      if (meta?.name) return `<meta name="${meta.name || ''}" content="${String(meta.content) || ''}" data-react-helmet="true" />`
      if (meta?.property) return `<meta property="${meta.property || ''}" content="${String(meta.content) || ''}" data-react-helmet="true" />`
      return null
    })
  }
  
  if(metaData && metaData.h1Tag) h1Tag = `<h1 class="meta-heading">${metaData.h1Tag}</h1>` 
  if(metaData && metaData.h2Tags) {
    h2Tags = metaData.h2Tags.map((string) => `<h2 class="meta-heading">${string}</h2>`)
  }

  $('head').append([titleTag, ...metaArray])
  $('body').append([h1Tag, ...h2Tags])
  res.status(200).send($.html())
})

app.listen(PORT, () => {
  console.log('SERVER Started at port: ' + PORT)
})
