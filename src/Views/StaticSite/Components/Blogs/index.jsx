import React from 'react'
import Heading from '../Heading'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { blog } from '../../assets/icons/icon'
import CommonBtn from '../commonbtn'
import BlogCard from './BlogCard'
import './style.scss'
import { Link } from 'react-router-dom'
import { blogData } from './blogData'
import { allBlogData } from '../../utils/blogData'

const Blog = () => {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
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
          <Link to="/blogs">
            <CommonBtn text={'View All'} />
          </Link>
        </div>
        <div className="blog-carousel">
          <Slider {...settings}>
            {allBlogData.map((blogs) => (
              <div key={blog.title}>
                <BlogCard blogs={blogs} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Blog
