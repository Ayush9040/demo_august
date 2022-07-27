import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
//import CommonBannerNav from '../../../Components/CommonBannerNav'
import './style.scss'
import Heading from '../../../Components/Heading'
//import BlogGallery from '../../../Components/BlogComponents/BlogGallery'
//import { allBlogData } from '../../../utils/blogData'
// import BlogParagraph from '../../../Components/BlogComponents/BlogParagraph'
// import BlogPoints from '../../../Components/BlogComponents/BlogPoints'
// import BlogBullets from '../../../Components/BlogComponents/BlogBullets'
// import BlogSubHeaing from '../../../Components/BlogComponents/BlogSubHeading'
// import BlogVideo from '../../../Components/BlogComponents/BlogVideo'
// import BlogLink from '../../../Components/BlogComponents/BlogLink'
import InnerNavComponent from '../../../Components/InnerNavComponent'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBlogData } from '../Blogs.action'

const BlogAnother = () => {

  const dispatch = useDispatch()

  const { contentId } = useParams()
  //const [pageData, setPageData] = useState({})
  const { blog } = useSelector(state=>state.blogs)

  useEffect(() => {
    dispatch(fetchBlogData(contentId))
    window.scrollTo(0,0)
  },[ ])

  // useEffect(()=>{
  //   setPageData(blogs.find((item) => blogId === item.slug))
  // },[blogs])
 
  




  // const getComponents = (componentObj) => {
  //   switch (componentObj.component) {
  //   case 'blogParagraph':
  //     return <BlogParagraph pText={componentObj.pText} />
  //   case 'points':
  //     return <BlogPoints points={componentObj.points} />
  //   case 'bullets':
  //     return (
  //       <BlogBullets
  //         title={componentObj.listTitle}
  //         bullets={componentObj.bulletPoints}
  //       />
  //     )
  //   case 'subHeading':
  //     return <BlogSubHeaing boldText={componentObj.boldText} />
  //   case 'blogVideo':
  //     return (
  //       <BlogVideo
  //         width={componentObj.width}
  //         height={componentObj.height}
  //         url={componentObj.url}
  //       />
  //     )
  //   case 'blogLink':
  //     return <BlogLink url={componentObj.url} text={componentObj.text} />
  //   default:
  //     return null
  //   }
  // }
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
        {/* <div className='blog-series'>
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
                alt={pageData.title}
                src={pageData?.image}
              />
            </div>
          </div>
        </div> */}
      </div>
      
      
    
      <div className='blog-container' id='blog-container' >
        <h2 dangerouslySetInnerHTML={{ __html:`${blog?.title}` }} ></h2>
        <div className='blog-grid' dangerouslySetInnerHTML={{ __html:`${blog?.content}` }} >
          {/* <div className='blog-text'>
            {pageData?.body?.map((comp) => {
              return getComponents(comp)
            })}
          </div> */}
        </div>
      </div> 
    </>
  )
}

export default BlogAnother
