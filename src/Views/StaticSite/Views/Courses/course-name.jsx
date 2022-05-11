import React from 'react'
import CommonBannerNavPrimary from '../../Components/CommonBannerNavPrimary'
import CourseDetails from '../../Components/CourseDetails'

const SingleCourse = () => {
  return (
    <div>
      <CommonBannerNavPrimary innerNav={false} />
      <br />
      <br />
      <CourseDetails />
    </div>
  )
}

export default SingleCourse
