import React from 'react'
import Heading from '../../../Components/Heading'
//import { share } from '../../../assets/icons/icon'
import './style.scss'
import SeminarCard from '../../../Components/SeminarCard'
import baseDomain, { homeAssets } from '../../../assets/images/imageAsset'
//import CommonBannerNavPrimary from '../../../Components/CommonBannerNavPrimary'
import { Link } from 'react-router-dom'
import { allBlogData } from '../../../utils/blogData'
import InnerNavComponent from '../../../Components/InnerNavComponent'
import { useEffect } from 'react'
const BlogPage = () => {
  useEffect(() => {
    scrollTo(0, 0)
  }, [])
  const viewBlog = {
    title: 'Blogs',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }
  return (
    <div className="main-blog">
      {/* <CommonBannerNavPrimary innerNav={false} /> */}
      <InnerNavComponent abc={viewBlog}/>
      <div className="blog-heading">
        
        <Heading largeText={'Blog'} />
      </div>

      <div className="blog-series">
        <div className="alumni-content" id="seminar">
          <div className="newsletter-content">
            <h2>
              <span className="newsletter-title">{allBlogData[0].title}</span>
              <span className="newsletter-date">{allBlogData[0].date}</span>
            </h2>
            <p>{allBlogData[0].metaDescription}</p>
            <div className="options">
              <Link to={`/blogs/blog/${allBlogData[0].id}`}>
                <button>Read Story</button>
              </Link>
              {/* <div className="share-icon">{share}</div> */}
            </div>
          </div>
          <div className="newsletter-image">
            <img
              className="blog-image"
              alt="Upcoming Seminar"
              src={`${baseDomain}${homeAssets.homeAsset60}`}
            />
          </div>
        </div>

        <div className="upcoming-blogs">
          <h3>Other Blogs</h3>
          <div className="blog-card-container">
            {allBlogData.map((item, i) => {
              if (item.id !== 'blog_1') {
                return (
                  <SeminarCard
                    key={i}
                    title={item.title}
                    bgImage={item.image}
                    desc={item.metaDescription}
                    url={`/blogs/blog/${item.id}`}
                  />
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

export default BlogPage

{
  /* <div>
      fake api call
      {call.map((data) => {
        return(
          <div key={data.id}> 
          <table className="table">
            
            <tr > 
              <td className="td">{data.id}</td>
              <td className="td">{data.title}</td>
              <td className="td"> {data.description}</td>
              <td className="td"> {data.category}</td>
            </tr>
          </table> 
          </div>  
        ) */
}
