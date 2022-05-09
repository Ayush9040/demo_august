import React,{ useState } from 'react'
import Heading from '../Heading'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { responsibility } from '../../assets/icons/icon'
import { socialData } from '../../utils/socialData'
import CommonBtn from '../commonbtn'

import './style.scss'

const SocialInitiatives = ({ alumni,setImageChanger,imageChanger }) => {

  const AnnamBrahma = 'http://ecom-static-site.oss-ap-south-1.aliyuncs.com/Home/Social%20Initiatives/SocialAnnamBhrama.jpg'
  const Police = 'http://ecom-static-site.oss-ap-south-1.aliyuncs.com/Home/Social%20Initiatives/SocialPolice.jpg'
  const BMC = 'http://ecom-static-site.oss-ap-south-1.aliyuncs.com/Home/Social%20Initiatives/SocialBMCSchools.jpg'
  let images = [AnnamBrahma,Police,BMC]

  const [image,setImage]=useState(AnnamBrahma)

  let settings ={
    dots: true,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    beforeChange: (oldIndex, index) => {setImage(images[index])
      setImageChanger && setImageChanger(index)
  
    },
  }

  console.log(imageChanger,'hello')
 
 
  return (
    <div className='social-initiative-container global-padding' >
      <div className='social-initiative-image' >
        <img src={image} />
      </div>
      <div className='social-initiative-content' >
        <Heading logo={responsibility} smallText={'Social'} largeText={alumni ?'Responsibility': 'Initiatives'} />
        <div className='social-initiative-carousel' >
          <Slider {...settings} >
            {socialData.map((item,i)=> {
              //  setIndex(i);
          
      
         
              return <div key={i} className='social-initiative-wrap' >
                <h1>{item.title}</h1>
                <br/>
                <p>{item.description}</p>
                {item.url}
               
              </div> 
            }
            )}  
        
         
          </Slider>

        </div>
        <br/><br/><br/>
        <CommonBtn text={'Explore More'} />
      </div>
    </div>
  )
}

export default SocialInitiatives