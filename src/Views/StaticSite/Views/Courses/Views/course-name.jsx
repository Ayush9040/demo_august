import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, useParams } from 'react-router-dom' 
import CourseDetails from '../../../Components/CourseDetails'
import InnerNavComponent from '../../../Components/InnerNavComponent'
//import { c200h } from '../../../Constants/courses/c200hr'
import { AllCourses } from '../Constants/courses'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../../Constants/metaData.json'
import { cmsBaseDomain } from '../../../../../Constants/appSettings'
import RelatedCourse from './Component'

const SingleCourse = () => {

  const location = useLocation()

  const { contentId } = useParams()
  const [pageDate, setPageData] = useState({})
  const [isLoading, setIsLoadding] = useState(false)
  const [ metaData,setMetaData ] = useState([])
  const [ cardData,setCardData ] = useState([])
  const [ titleTag,setTitleTag ] = useState('')

  const parsingAlgo = async()=>{
    try {
      const res = await axios.get(
        `${ cmsBaseDomain }/seometatags/?pagePath=${contentId}`
      )
      let data = res.data.data.meta
      setCardData( res.data.data.relatedCourses.map( item=>{
        return AllCourses.find(el=>el.key===item)
      } ) )
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

      setTitleTag(headers.title.trim())
      setMetaData(headers.metaData)
    } catch (err) {
      console.log(err)
    }
  }
  
  
  useEffect(() =>{
    setIsLoadding(true)
    setPageData(AllCourses.find(item=>item.key === contentId))
    setIsLoadding(false)
    document.title = `${metaDataObj[location.pathname]?.title}`
    parsingAlgo()
  }, [contentId])
  const CareerNameBan = {
    title: 'Career',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }

  return (
    <>
      { metaDataObj[location.pathname] &&    
    <Helmet
      title={ titleTag }
      meta={ metaData }
    /> }
      <div className='single-course'>
        <InnerNavComponent abc={CareerNameBan}/>
        {!isLoading && <CourseDetails pageDate={pageDate} />}
      </div>
      <RelatedCourse
        title={'Related Courses'}
        description={' lorem ipsum '}
        cardData={ cardData }
        url={'/courses'}
      />
    </>
  )
}

export default SingleCourse
