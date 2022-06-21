import React from 'react'

const CourseULIst = ({ content }) => {


  return (
    <div className="CourseUList">
      <h2>
        <b>
          <u>{content.title}</u></b>
      </h2>
      <ul style={{ paddingLeft: '50px' }} type="disc">
        {content.points.map((item, i) => {
          return (
            <li key={i}>
              {item.listItem}
              <ul style={{ paddingLeft: '80px' }} type="circle">
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

export default CourseULIst
