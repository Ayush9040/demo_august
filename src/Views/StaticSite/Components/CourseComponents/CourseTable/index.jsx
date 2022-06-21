import React from 'react'
import '../../../Components/CourseComponents/style.scss'

const CourseTable = ({ content }) => {

  return (
    <div className='course_table' >
      <h2>
        <b><u>{content.title}</u></b>
      </h2>
      <table  >
        <thead >
          <tr  >
            {content.tableHeading.map((item, i) => {
              return <th key={i}>{item}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {content.tableData.map((item, i) => {
            return (
              <tr  key={i}>
                {item.map((point, idx) => {
                  return <td key={idx}>{point}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default CourseTable
