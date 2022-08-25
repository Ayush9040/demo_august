import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom' 
import CourseDetails from '../../../Components/CourseDetails'
import InnerNavComponent from '../../../Components/InnerNavComponent'
//import { c200h } from '../../../Constants/courses/c200hr'
import { AllCourses } from '../Constants/courses'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../../Constants/metaData.json'

const SingleCourse = () => {

  const location = useLocation()

  const { contentId } = useParams()
  const [pageDate, setPageData] = useState({})
  const [isLoading, setIsLoadding] = useState(false)
  
  
  useEffect(() =>{
    setIsLoadding(true)
    setPageData(AllCourses.find(item=>item.key === contentId))
    setIsLoadding(false)
    document.title=`${metaDataObj[`/${pageDate.key}`]?.title}`
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
      title={metaDataObj[`/${pageDate.key}`]?.title || ''}
    /> }
      <div className='single-course'>
        <InnerNavComponent abc={CareerNameBan}/>
        {!isLoading && <CourseDetails pageDate={pageDate} />}
      </div>
    </>
  )
}

export default SingleCourse
