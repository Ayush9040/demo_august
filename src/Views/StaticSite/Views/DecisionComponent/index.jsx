import axios from 'axios'
import React,{ lazy } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { cmsBaseDomain } from '../../../../Constants/appSettings'
import { AllCourses } from '../Courses/Constants/courses'
import Home from '../Home'
const BlogAnother = lazy(()=>import('../../Views/Blogs/Views/Blog'))
const SingleCourse = lazy(()=>import('../../Views/Courses/Views/course-name'))

const DescisionComp = () => {

  const [ isLoading,setIsLoading ] = useState(null)
  const { contentId } = useParams()

  useEffect(()=>{
    (async()=>{
      const { data } = await axios.get(`${ cmsBaseDomain }/misc/slug/${contentId}`)
      console.log(data?.type ,'ress')
      setIsLoading(data?.type)
    })()
  },[])

  const getComponent = (_contentId) => {

    switch (_contentId) {
    case 'BLOG': 
      return <BlogAnother/>
    case 'COURSE': 
      return AllCourses.filter((item)=>item.key===contentId).length!==0 ? <SingleCourse/>: <Home/>
    }
  }

  return (
    <>
      { isLoading ? getComponent(isLoading) : <div className='global-loader' >Loading...</div> }
    </>
  )
}

export default DescisionComp