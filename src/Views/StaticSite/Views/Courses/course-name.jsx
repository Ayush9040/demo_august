import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' 
import CommonBannerNavPrimary from '../../Components/CommonBannerNavPrimary'
import CourseDetails from '../../Components/CourseDetails'
import { c200h } from '../../Constants/courses/c200hr'

const SingleCourse = () => {
  const { courseId } = useParams()
  const [pageDate, setPageData] = useState({})
  const [isLoading, setIsLoadding] = useState(false)
  
  
  useEffect(() =>{
    setIsLoadding(true)
    setPageData(c200h[courseId])
    setIsLoadding(false)
  }, [])

  return (
    <div className='single-course'>
      <CommonBannerNavPrimary innerNav={false} />
      {!isLoading && <CourseDetails pageDate={pageDate} />}
    </div>
  )
}

export default SingleCourse
