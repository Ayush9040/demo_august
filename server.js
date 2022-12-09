/* eslint @typescript-eslint/no-var-requires: 0 */
const express = require('express')
const cheerio = require('cheerio')
const path = require('path')
const fs = require('fs')
const metaDataObj = require('./src/Constants/metaData.json')
const axios = require('axios')
//import { cmsBaseDomain } from './src/Constants/appSettings' 

const PORT = 5500

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



//metaDataObj[correctPath] || await getBlogsMeta(correctPath)

const getMetaData = async( path )=>{
  let pathName = path.slice(1)
  try {
    const res = await axios.get(
      `https://www.cms-prod-be.theyogainstitute.org/v1/seometatags/?pagePath=${pathName}`
    )
    let data = res.data.data.meta
    let headers = {
      title: '',
      links: [],
      metaData: [],
      script: '',
    }
    data = data.replace(/\\n/g, '')
    data = data.split('\n')
    data.forEach((el) => {
      if (el.includes('<meta') || el.includes('<link')) {
        let obj = {}
        let regExp = /(\S+)="[^"]*/g
        let regexMatches = el.match(regExp)

        regexMatches.map((el) => {
          let partition = el.split('="')
          obj[partition[0]] = partition[1].replace(/"/g, '')
        })

        if (el.includes('<meta')) headers.metaData.push(obj)
        if (el.includes('<link')) headers.links.push(obj)
      } else if (el.includes('<title'))
        headers.title = el.replace('<title>','').replace('</title>','')
      else if (el.includes('<script')) headers.script = el
    })
    return headers
  } catch (err) {
    if(metaDataObj[path]) return metaDataObj[path]
    try{
      const res = await axios.get(`https://www.cms-prod-be.theyogainstitute.org/v1/post${ path }`)
      let data =  res.data.data.meta
      let headers = {
        title: '',
        links: [],
        metaData: [],
        script: '',
      }
      data = data.replace(/\\n/g, '')
      data = data.split('\n')
      data.forEach((el) =>{
        if(el.includes('<meta') || el.includes('<link')){
          let obj = {}
          let regExp = /(\S+)="[^"]*/g
          let regexMatches = el.match(regExp)
                      
          regexMatches.map(el=>{
            let partition = el.split('="')
            obj[partition[0]] = partition[1].replace(/"/g,'')
          })
                      
          if(el.includes('<meta'))
            headers.metaData.push(obj)
          if(el.includes('<link'))
            headers.links.push(obj)
        }
        else if(el.includes('<title'))
          headers.title = el.replace('<title>','').replace('</title>','')
        else if(el.includes('<script'))
          headers.script = el
                  
      })
      return headers
    }catch(err){
      console.log(err)
    }
  }
}
const getBogLinks = async()=>{
  const { data } = await axios.get('https://cms-prod-be.theyogainstitute.org/v1/misc/urlsarray')
  return data.data
}

app.use(express.static('build', options))

app.get('*', async(req, res) => {
  const { path: reqPath } = req
  let correctPath = reqPath
  const indexHtmlPath = path.resolve(__dirname, './build/index.html')
  const indexHtml = fs.readFileSync(indexHtmlPath)
  const $ = cheerio.load(indexHtml)
  if (reqPath.endsWith('/') && !(reqPath.length === 1 && reqPath === '/')) correctPath = reqPath.slice(0, -1)
  const metaData = await getMetaData( correctPath )
  let titleTag = null
  let metaArray = []
  let linkArray = []
  let linkArryBlogs = await getBogLinks()
  let script = ''
  let h1Tag = null
  let h2Tags = []
  let aTags = []
  let blogATags =[]

  console.log(linkArryBlogs)
  if (metaData && metaData.title) titleTag = `<title>${metaData.title}</title>`
  if(metaData && metaData.links){
    linkArray = metaData.links.map((link)=>{
      if(link?.rel) return `<link rel=${ link.rel || '' } href=${ link.href || '' }  />`
    })
  }
  if (metaData && metaData.metaData) {
    metaArray = metaData.metaData.map((meta) => {
      if (meta?.name) return `<meta name="${meta.name || ''}" content="${String(meta.content) || ''}" data-react-helmet="true" />`
      if (meta?.property) return `<meta property="${meta.property || ''}" content="${String(meta.content) || ''}" data-react-helmet="true" />`
      return null
    })
  }
  if( metaData && metaData.script ) script = metaData.script
  
  if(metaData && metaData.h1Tag) h1Tag = `<h1 class="meta-heading">${metaData.h1Tag}</h1>` 
  if(metaData && metaData.h2Tags) {
    h2Tags = metaData.h2Tags.map((string) => `<h2 class="meta-heading">${string}</h2>`)
  }
  if(metaData && metaData.aTags) {
    aTags = metaData.aTags.map((url)=>`<a class="meta-heading" href=${ url } >${ url }</a>`)
    blogATags = linkArryBlogs.map((url)=>`<a class="meta-heading" href=${ url } >${ url }</a>`)
  }
  

  $('head').append([titleTag, script, ...metaArray, ...linkArray])
  $('body').append([h1Tag, ...h2Tags,...aTags,...blogATags])
  res.status(200).send($.html())
})

app.listen(PORT, () => {
  console.log('SERVER Started at port: ' + PORT)
})
