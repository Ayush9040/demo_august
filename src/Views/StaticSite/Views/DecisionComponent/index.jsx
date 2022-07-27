import React,{ lazy } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
const BlogAnother = lazy(()=>import('../../Views/Blogs/Views/Blog'))
const SingleCourse = lazy(()=>import('../../Views/Courses/Views/course-name'))

const DescisionComp = () => {

  const [ isLoading,setIsLoadding ] = useState(false)
  const { contentId } = useParams()

  const getComponent = () => {

    switch (contentId) {
      case 'BLOG': 
       return BlogAnother
      case 'Course': 
       return SingleCourse
    }
  }
  return (
    <div>

    </div>
  )
}

export default DescisionComp