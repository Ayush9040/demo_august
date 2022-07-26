import React from 'react'
import Heading from '../../../Components/Heading'
import { useSelector,useDispatch } from 'react-redux'
//import { share } from '../../../assets/icons/icon'
import './style.scss'
import SeminarCard from '../../../Components/SeminarCard'
//import CommonBannerNavPrimary from '../../../Components/CommonBannerNavPrimary'
import { Link } from 'react-router-dom'
import InnerNavComponent from '../../../Components/InnerNavComponent'
import { useEffect } from 'react'
import { fetchBlogsData } from '../Blogs.action'
import { useState } from 'react'
//import { blog } from '../../../assets/icons/icon'
import Pagination from 'react-js-pagination'

const BlogPage = () => {

  const [ pagination,setPagination ] = useState({ page:1,limit:10 })

  const { blogs, count, blog }=useSelector(state=>state.blogs)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBlogsData( pagination ))
    scrollTo(0, 0)
  }, [ pagination ])

  

  const viewBlog = {
    title: 'Blogs',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }

  const handlePageChange = (pageNumber) => {
    console.log(pageNumber,'asd')
    setPagination({ ...pagination,page:pageNumber })
  }
  
  let formatDate = new Date( blog.createdAt )

  let blogDate = formatDate.getDate() + '/'+ formatDate.getMonth()+'/'+formatDate.getFullYear() 
  




 
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
              <span className="newsletter-title" dangerouslySetInnerHTML={{ __html:`${blog.title}` }} ></span>
              <span className="newsletter-date">{blogDate}</span>
            </h2>
            <p dangerouslySetInnerHTML={{ __html:`${blog.excerpt}` }} ></p>
            <div className="options">
              <Link to={`/blogs/blog/${blog.slug}`}>
                <button>Read Story</button>
              </Link>
              {/* <div className="share-icon">{share}</div> */}
            </div>
          </div>
          <div className="newsletter-image">
            <img
              className="blog-image"
              alt="Upcoming Seminar"
              src={blog.coverImage}
            />
          </div>
        </div>

        <div className="upcoming-blogs">
          <h3>Other Blogs</h3>
          <div className="blog-card-container">
            {/* {allBlogData.map((item, i) => {
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
            })} */}

            {
              blogs.map((item,idx)=>{
                if(item.slug!== blog.slug) return <SeminarCard key={idx} date={item.createdAt} bgImage={item.coverImage} title={item.title} desc={item.excerpt} url={`/blogs/blog/${item.slug}`} />
              })
            }
          </div>
          <div className='pagination-container' >
            <Pagination
              activePage={pagination.page}
              itemsCountPerPage={pagination.limit}
              totalItemsCount={count}
              pageRangeDisplayed={10}
              onChange={ (e)=>handlePageChange(e) }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPage

