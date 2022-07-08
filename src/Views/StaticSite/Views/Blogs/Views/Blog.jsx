import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
//import CommonBannerNav from '../../../Components/CommonBannerNav'
import './style.scss'
import Heading from '../../../Components/Heading'
import BlogGallery from '../../../Components/BlogComponents/BlogGallery'
import { allBlogData } from '../../../utils/blogData'
import BlogParagraph from '../../../Components/BlogComponents/BlogParagraph'
import BlogPoints from '../../../Components/BlogComponents/BlogPoints'
import BlogBullets from '../../../Components/BlogComponents/BlogBullets'
import BlogSubHeaing from '../../../Components/BlogComponents/BlogSubHeading'
import BlogVideo from '../../../Components/BlogComponents/BlogVideo'
import BlogLink from '../../../Components/BlogComponents/BlogLink'
import InnerNavComponent from '../../../Components/InnerNavComponent'

const BlogAnother = () => {
  const { blogId } = useParams()
  const [pageData, setPageData] = useState({})
  useEffect(() => {
    window.scrollTo(0,0)
    setPageData(allBlogData.find((item) => blogId === item.id))
  }, [])

  const getComponents = (componentObj) => {
    switch (componentObj.component) {
    case 'blogParagraph':
      return <BlogParagraph pText={componentObj.pText} />
    case 'points':
      return <BlogPoints points={componentObj.points} />
    case 'bullets':
      return (
        <BlogBullets
          title={componentObj.listTitle}
          bullets={componentObj.bulletPoints}
        />
      )
    case 'subHeading':
      return <BlogSubHeaing boldText={componentObj.boldText} />
    case 'blogVideo':
      return (
        <BlogVideo
          width={componentObj.width}
          height={componentObj.height}
          url={componentObj.url}
        />
      )
    case 'blogLink':
      return <BlogLink url={componentObj.url} text={componentObj.text} />
    default:
      return null
    }
  }
  const viewBlog = {
    title: 'Blogs',
    color: 'white',
    menuColor: 'white',
    menuItems: [],
  }

  return (
    <>
      <div className='blog-page-container'>
        
        <InnerNavComponent abc={viewBlog}/>
        <Heading largeText={'Blog'} />
        <div className='blog-series'>
          <div className='alumni-content' id='seminar'>
            <div className='newsletter-content'>
              <h2>
                <span className='newsletter-title'>{pageData?.title}</span>
                <span className='newsletter-date'>{pageData?.date}</span>
              </h2>
              <p>{pageData?.metaDescription}</p>
            </div>
            <div className='newsletter-image'>
              <img
                className='blog-iamge'
                alt='Upcoming Seminar'
                src={pageData?.image}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='blog-container'>
        <div className='blog-grid'>
          {/* <div className='blog-image'>
            <img src={baseDomain + alumniAssets.eventsAssetsTitle} alt='' />
          </div> */}
          <div className='blog-text'>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec ante id nunc vehicula pharetra nec vitae est. Sed diam dui,
              luctus sed velit quis, placerat consequat felis. Vivamus cursus in
              mauris at dignissim. Etiam venenatis semper pharetra. Duis ut diam
              eros. In hac habitasse platea dictumst. Nam tincidunt nisi metus,
              et dignissim ligula cursus ut.
            </p>{' '}
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec ante id nunc vehicula pharetra nec vitae est. Sed diam dui,
              luctus sed velit quis, placerat consequat felis. Vivamus cursus in
              mauris at dignissim. Etiam venenatis semper pharetra. Duis ut diam
              eros. In hac habitasse platea dictumst. Nam tincidunt nisi metus,
              et dignissim ligula cursus ut.
            </p> */}
            {pageData?.body?.map((comp) => {
              return getComponents(comp)
            })}
          </div>
        </div>
      </div>
      <BlogGallery />
    </>
  )
}

export default BlogAnother
