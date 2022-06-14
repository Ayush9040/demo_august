import React from 'react'

const CourseQuote = ({ content }) => {
  return (
    <div className="CourseQuote">
      <p>
        <b>
          <u>{content.title}</u>
        </b>
      </p>
      <q>{content.text}</q>
    </div>
  )
}

export default CourseQuote
