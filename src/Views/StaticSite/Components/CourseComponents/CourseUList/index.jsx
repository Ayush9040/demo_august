import React from 'react'
import '../../../Components/CourseComponents/style.scss'

const CourseUList = ({ content }) => {



  return (
    <div className="course_list">
      {content?.title && <h2 className='sub_heading' >
        {content.title}
      </h2>}
      <ul type="disc">
        {content?.points?.map((item, i) => {
          return (
            <li key={i}>
              {item.listItem}
              <ul type="circle">
                {item?.subItems?.map((item, i) => {
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
