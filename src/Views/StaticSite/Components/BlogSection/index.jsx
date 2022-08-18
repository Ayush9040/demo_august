import React, { useRef, useEffect } from 'react'
import Heading from '../Heading'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { blog } from '../../assets/icons/icon'
import CommonBtn from '../commonbtn'
import BlogCard from './BlogCard'
import './style.scss'
import { Link } from 'react-router-dom'
// import { blogData } from './blogData'
import { fetchBlogsData } from '../../Views/Blogs/Blogs.action'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import useOnScreen from '../../../../helpers/InterSection'

const Blog = () => {
  const blogRef = useRef(null)
  const sliderRef = useRef(null)
  const isInteracting = useOnScreen(blogRef, { threshold: 0.75 })

  useEffect(() => {
    if (!sliderRef.current) return
    if (isInteracting) sliderRef.current.slickPlay()
    else {
      sliderRef.current.slickPause()
      sliderRef.current.slickGoTo(0)
    }
  }, [isInteracting])

  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoPlaySpeed: 5000,
    //centerMode: true,
    centerPadding: '20%',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  const { blogs } = useSelector((state) => state.blogs)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBlogsData({ page: 1, limit: 10 }))
  }, [])

  return (
    <div className="blog-container global-padding">
      <div className="blog-content">
        <div className="blog-header">
          <Heading logo={blog} smallText={'Latest'} largeText={'Blog'} />
          <div className="blog-description">
            <p>
              Upgrade your yoga and wellness knowledge by reading our most
              recent blogs, which cover a wide range of holistic health and
              wellness topics , nutrition, routines, lifestyle, yoga
              philosophies, and even life choices
            </p>
          </div>
          <div className="blog_view_button">
            <Link to="/blogs">
              <CommonBtn text={'View All'} />
            </Link>
          </div>
        </div>
        <div className="blog-carousel" ref={blogRef}>
          <Slider
            {...settings}
            ref={(slider) => {
              sliderRef.current = slider
            }}
          >
            {blogs.map((item, index) => {
              if (index < 5) {
                return (
                  <div key={item.title}>
                    <BlogCard blogs={item} />
                  </div>
                )
              }
              return
            })}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Blog
