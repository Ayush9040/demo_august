import React from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'

import metaDataObj from '../../Constants/metaData.json'
import { cmsBaseDomain } from '../../Constants/appSettings'
import { useEffect } from 'react'

const MetaTags = () => {

  const location = useLocation()

  useEffect(()=>{
    console.log(document.title)
  },[ location.pathname ])

  const getBlogsMeta = async(slug) => {
    try {
      const res = await axios.get(
        `${ cmsBaseDomain }/post${slug}`
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
          headers.title = el.replace('<title>', '').replace('</title>', '')
        else if (el.includes('<script')) headers.script = el
      })

      return (
        <Helmet
          title={`${headers.title || ''} `}
          meta={headers?.metaData || []}
        />
      )
    } catch (err) {
      console.log(err)
    }
  }

  return metaDataObj[location.pathname] ? (
    <Helmet
      title={metaDataObj[location.pathname || '']?.title || ''}
      meta={metaDataObj[location.pathname || '']?.metaData || []}
    />
  ) : (
    <>{ ()=>getBlogsMeta(location.pathname) }</>
  )
}

export default MetaTags
