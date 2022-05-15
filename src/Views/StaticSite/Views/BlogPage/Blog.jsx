import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CommonBannerNav from '../../Components/CommonBannerNav'
// import baseDomain, { alumniAssets } from '../../assets/images/imageAsset'
import './style.scss'
import Heading from '../../Components/Heading'
import BlogGallery from '../../Components/BlogGallery'
import { allBlogData } from '../../utils/blogData'
import BlogParagraph from '../../Components/BlogParagraph'
import BlogPoints from '../../Components/BlogPoints'
import BlogBullets from '../../Components/BlogBullets'
import BlogSubHeaing from '../../Components/BlogSubHeading'
import BlogVideo from '../../Components/BlogVideo'
import BlogLink from '../../Components/BlogLink'

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

  return (
    <>
      <div className='blog-page-container'>
        <br />
        <CommonBannerNav />
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
            <br />
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
