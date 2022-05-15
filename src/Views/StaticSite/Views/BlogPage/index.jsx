import React from 'react'
import Heading from '../../Components/Heading'
import { share } from '../../assets/icons/icon'
import './style.scss'
import SeminarCard from '../../Components/SeminarCard'
import baseDomain, { homeAssets } from '../../assets/images/imageAsset'
import CommonBannerNavPrimary from '../../Components/CommonBannerNavPrimary'
import { Link } from 'react-router-dom'
import { allBlogData } from '../../utils/blogData'
const BlogPage = () => {
  return (
    <div className='main-blog'>
      <CommonBannerNavPrimary innerNav={false} /> <br /> <br />
      <Heading largeText={'Blog'} />
      <div className='blog-series'>
        <div className='alumni-content' id='seminar'>
          <div className='newsletter-content'>
            <h2>
              <span className='newsletter-title'>
                7 home remedies for anaemia
              </span>
              <span className='newsletter-date'>01/01/2022</span>
            </h2>
            <p>
              If you want to get your anaemia under control, do give these
              amazing and effective home remedies a try! If you want to get your
              anaemia under control, do give these amazing and effective home
              remedies a try! If you want to get your anaemia under control, do
              give these amazing and effective home remedies a try!
            </p>
            <div className='options'>
              <Link to={`/blogs/${allBlogData[0].id}`}>
                <button>Read Story</button>
              </Link>
              <div className='share-icon'>{share}</div>
            </div>
          </div>
          <div className='newsletter-image'>
            <img
              className='blog-image'
              alt='Upcoming Seminar'
              src={baseDomain + homeAssets.homeAsset60}
            />
          </div>
        </div>

        <div className='upcoming-blogs'>
          <h3>Other Blogs</h3>
          <div className='blog-card-container'>
            { allBlogData.map((item,i)=>{
              if(item.id!=='blog_1')
              { return <SeminarCard key={i} title={item.title} bgImage={item.image} desc={item.metaDescription} url={`/blogs/${item.id}`} /> }
              return
            }) }
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPage
