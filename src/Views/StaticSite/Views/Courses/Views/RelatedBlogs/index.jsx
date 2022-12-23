import React from 'react'
import BlogCard from '../../../../Components/BlogSection/BlogCard'

const RelatedBlogs = ({ cardData }) => {
  return (
    <div>
      <div className="related_courses_div">
        <div className="course-cards">
          {cardData?.map((item, i) => {
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

        {/* <div className="text-content-right right-container">
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
        </div> */}
      </div>
    </div>
  )
}

export default RelatedBlogs
