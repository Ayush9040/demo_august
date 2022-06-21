import React from 'react'
import '../../../Components/CourseComponents/style.scss'

const CourseUList = ({ content }) => {

  console.log(content,'content')

  return (
    <div className="course_list">
      <h2>
        <b>
          <u>{content.title}</u>
        </b>
      </h2>
      <ul type="disc">
        {content?.points?.map((item, i) => {
          return (
            <li key={i}>
              {item.listItem}
              <ul type="circle">
                {item.subItems.map((item, i) => {
                  return <li key={i}>{item}</li>
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CourseUList
