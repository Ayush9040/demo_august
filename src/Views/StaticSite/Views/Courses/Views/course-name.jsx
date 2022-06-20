import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' 
import CourseDetails from '../../../Components/CourseDetails'
import InnerNavComponent from '../../../Components/InnerNavComponent'
import { c200h } from '../../../Constants/courses/c200hr'

const SingleCourse = () => {
  const { courseId } = useParams()
  const [pageDate, setPageData] = useState({})
  const [isLoading, setIsLoadding] = useState(false)
  
  
  useEffect(() =>{
    setIsLoadding(true)
    setPageData(c200h[courseId])
    setIsLoadding(false)
  }, [])
  const CareerNameBan = {
    title: 'Career',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }
  return (
    <div className='single-course'>
      <InnerNavComponent abc={CareerNameBan}/>
      {!isLoading && <CourseDetails pageDate={pageDate} />}
    </div>
  )
}

export default SingleCourse
