import React from 'react'
//import AlumniGrid from '../AlumniGrid'
import { data } from './data'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.scss'
import CommonBtn from '../commonbtn'
import { Link } from 'react-router-dom'

const AlumniCarousel = () => {
  //const [alumImgs, setAlumImgs] = useState(data[0].img)

  let settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoPlaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '70px',
    // beforeChange: (oldIndex, index) => {
    //   setAlumImgs(data.find((item) => item.id === index).img)
    // },
  }
  return (
    <div className="alumni-main-div">
      <div className="alumini-carousel-heading">Alumni</div>
      <Slider {...settings}>
        {data.map((item, idx) => {
          if (idx < 5) {
            return (
              <div key={item.id}>
                <div className="alumini-carousel-info">
                  <img src={item.alluminiImg} className="alluminiImg" alt={item.alt}/>
                  <div className="alumini-carousel-details">
                    <div className="alumini-carousel-title">
                      {item.name},{item.post}
                    </div>
                    <p>{item.info}</p>
                  </div>
                </div>
              </div>
            )
          }
        })}
      </Slider>
      {/* <AlumniGrid images={[]} notEvent={true} /> */}
      <Link to="/testimonials">
        {' '}
        <CommonBtn text={'Explore All'} />
      </Link>
    </div>
  )
}

export default AlumniCarousel
