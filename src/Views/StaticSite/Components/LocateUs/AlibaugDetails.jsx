

import React, { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './YagaretreatNew.scss';
import InnerNavComponent from '../InnerNavComponent';
import ForestYogaRetreat from './images/ForestYogaRetreat.svg'



const AlibaugDetails = () => {

   const Locate = {
    title: 'Yoga Retreat',
    color: 'white',
    menuColor: 'white',
    menuItems: [],
  }
  

  return (
    <div className="retreat_whole_wrapper">
      <div className="retreat-inner-wrapper">
        <InnerNavComponent abc={Locate} />

          <div className='herosection_content_wrapper'>

            <h1 className='heroSection_heading'>Find Your Inner Peace</h1>

            <p className='heroSection_content_desc'>Discover tranquility in nature at our serene yoga retreat center in Alibaug. Reconnect with yourself through mindful practices in a peaceful paradise.</p>

          </div>

          <div className='retreat_second_section'>

            <div className='second_section_heading_wrapper'>
              <h2 className='heading_second'>Our Rejuvenating Retreats</h2>
              <p className='content_second'>Choose from our thoughtfully curated retreat programs, each designed to nurture your mind, body, and spirit.</p>
            </div>

            <div className='second_section_retreat_first'>
                <div className='retreat_first_img_wrapper'>
                  <img src={ForestYogaRetreat} alt="" />
                </div>

                <div className='retreat_first_content_wrapper'>

                  <div className='retreat_first_forest_yoga_content spacing_bottom_content'>
                      <h3 className='retreat_forest_heading'>Forest Yoga Retreat</h3>
                      <p className='retreat_first_content_desc'>Reconnect with nature and find inner peace by practicing asanas, meditation, and refreshing walks in the forest. Participate in beachside classes, take a break from technology, learn deep relaxation methods, and attend workshops on emotional well-being. Evening activities inspired by nature will help improve balance, while providing a refreshing break from daily stress.</p>
                  </div>

                  <div className='retreat_first_forest_yoga_content spacing_bottom_content'>
                      <h3 className='retreat_forest_heading sizing_available'>Available Dates:</h3>
                      <p className='retreat_first_content_desc'>Reconnect with nature and find inner peace by practicing asanas, meditation, and refreshing walks in the forest. Participate in beachside classes, take a break from technology, learn deep relaxation methods, and attend workshops on emotional well-being. Evening activities inspired by nature will help improve balance, while providing a refreshing break from daily stress.</p>
                  </div>

                  <div className='retreat_first_forest_yoga_content'>
                      <h3 className='retreat_forest_heading'>Forest Yoga Retreat</h3>
                      <p className='retreat_first_content_desc'>Reconnect with nature and find inner peace by practicing asanas, meditation, and refreshing walks in the forest. Participate in beachside classes, take a break from technology, learn deep relaxation methods, and attend workshops on emotional well-being. Evening activities inspired by nature will help improve balance, while providing a refreshing break from daily stress.</p>
                  </div>

                </div>
            </div>

          </div>
        
      </div>
    </div>
  );
};

export default AlibaugDetails;