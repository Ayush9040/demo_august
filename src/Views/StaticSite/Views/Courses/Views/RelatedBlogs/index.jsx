import React from 'react'
import BlogCard from '../../../../Components/BlogSection/BlogCard'
import CommonBtn from '../../../../Components/commonbtn'
import { Link } from 'react-router-dom'
import './styles.scss'

const RelatedBlogs = ({ cardData, title, url }) => {
  return (
    <div>
      <div className="related_blogs_div">
        <div className="content-container pd-career">
          <div className="text-content-right right-container">
            <div className="text-part">
              <div className="banner-heading">
                <h1>
                  {title}
                  <div className="bottom-line"></div>
                </h1>
              </div>
            </div>
            <Link to={url ? url:'/'}>
              <CommonBtn text={'View All'}/>
            </Link>
          </div>
          <div className="course-cards">
            { cardData?.map((item, i) => {
              if (i < 3) {
                return (
                  <div>
                    <BlogCard  blogs={item} />
                  </div>
                )
              }
              return
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RelatedBlogs
