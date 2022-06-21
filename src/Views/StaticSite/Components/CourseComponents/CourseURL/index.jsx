import React from 'react'
import '../../../Components/CourseComponents/style.scss'

const CourseURL = () => {
  const URL = {
    text: 'Access the detailed curriculum here:',
    url: 'https://theyogainstitute.org/wp-content/uploads/2018/04/1mttc-1.pdf',
  }
  return (
    <div className="course_url">
      <p>
        {URL.text}
        <a href={URL.url}>{URL.url}</a>
      </p>
    </div>
  )
}

export default CourseURL
