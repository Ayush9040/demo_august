import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' 
import CommonBannerNavPrimary from '../../Components/CommonBannerNavPrimary'
import CourseDetails from '../../Components/CourseDetails'

const SingleCourse = () => {
  const { courseId } = useParams()
  // const [pageDate, setPageData] = useState({})
  
  useEffect(() =>{
    console.log(courseId)
  }, [])

  return (
    <div>
      {courseId}
      <CommonBannerNavPrimary innerNav={false} />
      <br />
      <br />
      <CourseDetails />
    </div>
  )
}

export default SingleCourse
