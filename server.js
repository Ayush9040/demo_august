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
  const metaData = metaDataObj[correctPath] || []
  $('head').append(metaData)
  res.status(200).send($.html())
})

app.listen(PORT, () => {
  console.log('SERVER Started at port: ' + PORT)
})
