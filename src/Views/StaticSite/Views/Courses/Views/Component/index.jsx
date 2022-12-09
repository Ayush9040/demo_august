import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import CourseCard from '../../../../Components/CourseCard'
import CommonBtn from '../../../../Components/commonbtn'
const RelatedCourse = ({
  title,
  description,
  url,
  cardData,
}) => {


  console.log(cardData,'sdsd')

  return (
    <div className='related_courses_div'>
      <div className="content-container pd-career">
        {cardData && cardData.length > 0 ? (
          <div className="course-cards">
            {cardData.map((item, i) => {
              if (i < 3) {
                return (
                  <CourseCard
                    key={i}
                    color={item.colorCode}
                    index={i}
                    courseTitle={item.title}
                    description={item.metaDescription}
                    path={item.key}
                    img={item.cardImage}
                    rating={item.rating}
                    dates={item.dates}
                  />
                )
              }
              return
            })}
          </div>
        ) : null}
        <div className="text-content-right right-container">
          <div className="text-part">
            <div className="banner-heading">
              <h1>
                {title}
                <div className="bottom-line"></div>
              </h1>
            </div>
            <p>{description}</p>
          </div>
          <Link to={url ? url:'/'}>
            <CommonBtn text={'View All'}/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RelatedCourse
