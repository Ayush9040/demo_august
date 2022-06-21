import React from 'react'
import '../../../Components/CourseComponents/style.scss'

const CourseTable = () => {
  const table = {
    title: '',
    tableHeading: ['Mode of Learning', 'Online', 'On Campus'],
    tableData: [
      [
        'Details',
        'All classes will be online except the last 15 days which are to be done mandatorily on-campus at the end of the course',
        'All classes to be attended on campus',
      ],
    ],
  }
  return (
    <div className='course_table' >
      <h1>
        <b>{table.title}</b>
      </h1>
      <table  >
        <thead >
          <tr  >
            {table.tableHeading.map((item, i) => {
              return <th key={i}>{item}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {table.tableData.map((item, i) => {
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
