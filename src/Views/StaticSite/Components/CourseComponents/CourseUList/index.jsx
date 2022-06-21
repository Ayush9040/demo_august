import React from 'react'
import '../../../Components/CourseComponents/style.scss'

const CourseUList = () => {
  const list = {
    type: 'u-list',
    content: {
      title: 'B-SKILL',
      points: [
        {
          listItem: 'Sahajbhava Asanas',
          subItems: [],
        },
        {
          listItem: 'Shat Karmas',
          subItems: [],
        },
        {
          listItem: 'Surya Namaskar (Sun Salutation)',
          subItems: [],
        },
        {
          listItem: 'Asanas',
          subItems: [
            'Knowledge of selected postures and demonstrated ability to perform these postures – meditative and cultural (dynamic and static versions).',
            'Selected psychophysical and conceptual techniques pioneered by The Yoga Institute.',
          ],
        },
        {
          listItem: 'Pranayamas',
          subItems: [
            'Knowledge, teaching, and demonstrated ability to select Pranayamas.',
          ],
        },
        {
          listItem: 'Practices leading to Meditation',
          subItems: [],
        },
        {
          listItem: 'Communication and Teaching Practice',
          subItems: [
            'Understanding and practice of basic skills of public speaking.',
            'Familiarity and demonstration ability to apply teaching methods.',
            'Adapt the above to unique styles of learning.',
            'Provide supportive and effective feedback.',
            'Acknowledge the aspirant’s progress and ability to cope with difficulties.',
          ],
        },
        {
          listItem: 'Principles and skills for working with groups.',
          subItems: [],
        },
      ],
    },
  }

  return (
    <div className="course_list">
      <h2>
        <b>
          <u>{list.content.title}</u>
        </b>
      </h2>
      <ul style={{ paddingLeft: '50px' }} type="ring">
        {list.content.points.map((item, i) => {
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

export default CourseUList
