import React from 'react'
import Heading from '../../../Components/Heading'
import { useSelector,useDispatch } from 'react-redux'
//import { share } from '../../../assets/icons/icon'
import './style.scss'
import SeminarCard from '../../../Components/SeminarCard'
//import CommonBannerNavPrimary from '../../../Components/CommonBannerNavPrimary'
import { Link, useLocation } from 'react-router-dom'
import InnerNavComponent from '../../../Components/InnerNavComponent'
import { useEffect } from 'react'
import { fetchBlogsData } from '../Blogs.action'
import { useState } from 'react'
//import { blog } from '../../../assets/icons/icon'
import Pagination from 'react-js-pagination'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../../Constants/metaData.json'
import './BlogPageNew.css'

const BlogPageNew = () => {

  const [ pagination,setPagination ] = useState({ page:1,limit:10 })
  //const [ pageRange,setPageRange] = useState(5)

  const { blogs, count, blog }=useSelector(state=>state.blogs)
  const location = useLocation()

  const dispatch = useDispatch()

  
  useEffect(() => {
    dispatch(fetchBlogsData( pagination ))
    scrollTo(0, 0)
  }, [ pagination ])

  // useEffect(()=>{
  //   window.innerWidth<900 ? setPageRange(1):setPageRange(5)
  // },[ window.innerWidth ])

  const viewBlog = {
    title: 'Blogs',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }

  const handlePageChange = (pageNumber) => {
    pageNumber!==1 ? setPagination({ ...pagination,page:pageNumber, limit:9 }):setPagination({ ...pagination,page:pageNumber, limit:10 })
  }
  
  // Helper to format date
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  // Split blogs for sections (mock logic, adjust as needed)
  const featuredStories = blogs?.slice(0, 5) || [];
  const popularArticles = blogs?.slice(5, 8) || [];
  const recentArticles = blogs || [];

  return (
    <>
      {metaDataObj[location.pathname] && (
        <Helmet title={metaDataObj[location.pathname || '']?.title || ''} />
      )}
      <InnerNavComponent abc={viewBlog}/>
      <div className="blog-hero-section">
        <div className="blog-hero-overlay">
          <h1 className="blog-hero-title">Yoga Resources and insights</h1>
          <div className="blog-hero-desc">
            <p>Explore insightful articles, timeless practices, and wellness wisdom to elevate your daily life.</p>
          </div>
        </div>
      </div>
      <div className="blog-page-new">
      
        <div className="blog-featured-section">
          <h2 className="blog-section-title">Featured stories</h2>
          <div className="blog-featured-grid">
            {/* Main large card */}
            {featuredStories[0] && (
              <div className="blog-featured-main-card">
                <img className="blog-featured-main-img" src={featuredStories[0].coverImage} alt={featuredStories[0].title} />
                <div className="blog-featured-main-content">
                  <h3 className="blog-featured-main-title">{featuredStories[0].title}</h3>
                  <p className="blog-featured-main-excerpt">{featuredStories[0].excerpt}</p>
                  <div className="blog-featured-main-meta">
                    <span>{formatDate(featuredStories[0].createdAt)}</span>
                    {featuredStories[0].timeDuration && <span>• {featuredStories[0].timeDuration} mins</span>}
                  </div>
                </div>
              </div>
            )}
            {/* Vertical list of small cards */}
            <div className="blog-featured-side-list">
              {featuredStories.slice(1, 5).map((item, idx) => (
                <div className="blog-featured-side-card" key={item._id || idx}>
                  <img className="blog-featured-side-img" src={item.coverImage} alt={item.title} />
                  <div className="blog-featured-side-content">
                    <h4 className="blog-featured-side-title">{item.title}</h4>
                    <div className="blog-featured-side-meta">
                      <span>{formatDate(item.createdAt)}</span>
                      {item.timeDuration && <span>• {item.timeDuration} mins</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="blog-popular-section">
          <h2 className="blog-section-title">Popular articles</h2>
          <div className="blog-popular-list">
            {popularArticles.map((item, idx) => (
              <div className="blog-card blog-popular-card" key={item._id || idx}>
                <img className="blog-card-img" src={item.coverImage} alt={item.title} />
                <div className="blog-card-content">
                  <h3 className="blog-card-title">{item.title}</h3>
                  <p className="blog-card-excerpt">{item.excerpt}</p>
                  <div className="blog-card-meta">
                    <span>{formatDate(item.createdAt)}</span>
                    {item.timeDuration && <span>• {item.timeDuration} min</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="blog-recent-section">
          <h2 className="blog-section-title">Recent Articles</h2>
          {/* Tag filters (static for now) */}
          <div className="blog-tags">
            <span className="blog-tag">All</span>
            <span className="blog-tag">Philosophy</span>
            <span className="blog-tag">Yoga Techniques</span>
            <span className="blog-tag">Yoga Therapy</span>
            <span className="blog-tag">Diet & Nutrition</span>
            <span className="blog-tag">Mental Wellness</span>
            <span className="blog-tag">Latest Researches</span>
          </div>
          <div className="blog-recent-list">
            {recentArticles.map((item, idx) => (
              <div className="blog-card blog-recent-card" key={item._id || idx}>
                <img className="blog-card-img" src={item.coverImage} alt={item.title} />
                <div className="blog-card-content">
                  <h3 className="blog-card-title">{item.title}</h3>
                  <p className="blog-card-excerpt">{item.excerpt}</p>
                  <div className="blog-card-meta">
                    <span>{formatDate(item.createdAt)}</span>
                    {item.timeDuration && <span>• {item.timeDuration} min</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination */}
          <div className="blog-pagination">
            <Pagination
              activePage={pagination.page}
              itemsCountPerPage={pagination.limit}
              totalItemsCount={count || 0}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
              innerClass="pagination-list"
              itemClass="pagination-item"
              linkClass="pagination-link"
            />
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="blog-newsletter-section">
          <div className="newsletter-box">
            <h3>Join Our Yoga Community</h3>
            <p>Subscribe to our newsletter and get the latest updates on yoga practices, wellness tips, and exclusive content delivered to your inbox.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" className="newsletter-input" />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPageNew

