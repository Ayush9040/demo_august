import React from 'react'
import '../../../Components/CourseComponents/style.scss'

const CourseOList = ({ content }) => {



  return (
    <div className="course_olist">
      {content?.title && <h2 className='sub_heading' >
        {content.title}
      </h2>}
      <ol type="disc">
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
      </ol>
    </div>
  )
}

export default CourseOList
