import React from 'react'

const CoursePara = ({ content }) => {

  return (
    <div className="CoursePara">
      <h2>
        <u>
        <b>{content.title}</b>
        </u>
      </h2>
      {content.text.map((point, i) => {
        return <p key={i} >{point}</p>
      })}
    </div>
  )
}

export default CoursePara
