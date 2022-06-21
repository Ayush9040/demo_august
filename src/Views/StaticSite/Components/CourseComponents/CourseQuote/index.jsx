import React from 'react'
import '../../../Components/CourseComponents/style.scss'

const CourseQuote = () => {
  const quote = {
    title: '',
    text: [
      'This is an exclusive experience, and the wisdom you gain here will guide you all your life!',
    ],
  }

  return (
    <div className="course_quote">
      <p>
        <b>
          <u>{quote.title}</u>
        </b>
      </p>
      <q>{quote.text}</q>
    </div>
  )
}

export default CourseQuote
