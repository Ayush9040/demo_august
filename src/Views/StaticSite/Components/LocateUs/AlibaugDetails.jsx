

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
import AvailableDatesSection from './AvailableDatesSection';



const AlibaugDetails = () => {

  const [seatsAvailable, setSeatsAvailable] = useState(7);
  const [isBooked, setIsBooked] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);

   const Locate = {
    title: 'Yoga Retreat',
    color: 'white',
    menuColor: 'white',
    menuItems: [],
  }

   const activities = [
    { id: 1, name: 'Daily Yoga' },
    { id: 2, name: 'Forest Walks' },
    { id: 3, name: 'Mindfulness Workshops' }
  ];

  

  const handleBooking = () => {
    if (seatsAvailable > 0 && !isBooked) {
      setSeatsAvailable(seatsAvailable - 1);
      setIsBooked(true);
      alert('Booking confirmed! You have successfully reserved your spot.');
    } else if (isBooked) {
      alert('You have already booked a seat for this retreat.');
    } else {
      alert('Sorry, no seats available!');
    }
  };

  const toggleSchedule = () => {
    setShowSchedule(!showSchedule);
  };

  // Sample schedule data
  const scheduleData = [
    { time: 'Day 1 - 8:00 AM', activity: 'Arrival & Welcome Refreshments' },
    { time: 'Day 1 - 9:30 AM', activity: 'Morning Yoga Session' },
    { time: 'Day 1 - 12:00 PM', activity: 'Guided Forest Walk' },
    { time: 'Day 1 - 1:30 PM', activity: 'Lunch (Organic Meal)' },
    { time: 'Day 1 - 3:30 PM', activity: 'Mindfulness Workshop' },
    { time: 'Day 1 - 7:00 PM', activity: 'Dinner & Free Time' },
    { time: 'Day 2 - 7:00 AM', activity: 'Sunrise Meditation' },
    { time: 'Day 2 - 9:00 AM', activity: 'Advanced Yoga Practice' },
    { time: 'Day 2 - 12:30 PM', activity: 'Nature Connection Activity' },
    { time: 'Day 2 - 1:30 PM', activity: 'Lunch' },
    { time: 'Day 2 - 4:00 PM', activity: 'Closing Ceremony' },
    { time: 'Day 2 - 7:00 PM', activity: 'Departure' },
  ];
  

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
                      <AvailableDatesSection />
                  </div>

                  <div className='retreat_first_forest_yoga_content'>
                      <h3 className='available-dates-title'>Activities:</h3>
                       <ul className="activities-list">
                        {activities.map(activity => (
                          <li key={activity.id} className="activity-item">
                            {activity.name}
                          </li>
                        ))}
                      </ul>

                      <div className="wellness-retreat">
      <h1 className="cost-heading">Cost: ₹10,000 Per Person - Inclusive of 8 Meals</h1>
      
      <div className="details">
        <div className="detail-item">
          <span className="detail-label">Time:</span> 8:00 AM (Day 1) to 7:00 PM (Day 2)
        </div>
        <div className="detail-item">
          <span className="detail-label">Location:</span> Alibaug Forest Sanctuary
        </div>
      </div>
      
      
      
      
      
      {/* <div className="footer-note">
        <p>All activities are guided by certified instructors. Dietary preferences can be accommodated with prior notice.</p>
      </div> */}
    </div>

     <div className="actions">
        <button 
          className={`book-button ${isBooked ? 'booked' : ''}`}
          onClick={handleBooking}
          disabled={seatsAvailable === 0 && !isBooked}
        >
          {isBooked ? 'Booked Successfully' : 'Book Now'} 
          <span className="seats-left">{seatsAvailable}</span>
        </button>
        
        <button className="schedule-button" onClick={toggleSchedule}>
          {showSchedule ? 'Hide Schedule' : 'View Schedule'}
        </button>
      </div>

      {showSchedule && (
        <div className="schedule-modal">
          <div className="schedule-content">
            <h3>Retreat Schedule</h3>
            <div className="schedule-list">
              {scheduleData.map((item, index) => (
                <div key={index} className="schedule-item">
                  <span className="schedule-time">{item.time}</span>
                  <span className="schedule-activity">{item.activity}</span>
                </div>
              ))}
            </div>
            <button className="close-schedule" onClick={toggleSchedule}>
              Close
            </button>
          </div>
        </div>
      )}
                  </div>

                </div>

               
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
                      <AvailableDatesSection />
                  </div>

                  <div className='retreat_first_forest_yoga_content'>
                      <h3 className='available-dates-title'>Activities:</h3>
                       <ul className="activities-list">
                        {activities.map(activity => (
                          <li key={activity.id} className="activity-item">
                            {activity.name}
                          </li>
                        ))}
                      </ul>

                      <div className="wellness-retreat">
      <h1 className="cost-heading">Cost: ₹10,000 Per Person - Inclusive of 8 Meals</h1>
      
      <div className="details">
        <div className="detail-item">
          <span className="detail-label">Time:</span> 8:00 AM (Day 1) to 7:00 PM (Day 2)
        </div>
        <div className="detail-item">
          <span className="detail-label">Location:</span> Alibaug Forest Sanctuary
        </div>
      </div>
      
      
      
      
      
      {/* <div className="footer-note">
        <p>All activities are guided by certified instructors. Dietary preferences can be accommodated with prior notice.</p>
      </div> */}
    </div>

     <div className="actions">
        <button 
          className={`book-button ${isBooked ? 'booked' : ''}`}
          onClick={handleBooking}
          disabled={seatsAvailable === 0 && !isBooked}
        >
          {isBooked ? 'Booked Successfully' : 'Book Now'} 
          <span className="seats-left">{seatsAvailable}</span>
        </button>
        
        <button className="schedule-button" onClick={toggleSchedule}>
          {showSchedule ? 'Hide Schedule' : 'View Schedule'}
        </button>
      </div>

      {showSchedule && (
        <div className="schedule-modal">
          <div className="schedule-content">
            <h3>Retreat Schedule</h3>
            <div className="schedule-list">
              {scheduleData.map((item, index) => (
                <div key={index} className="schedule-item">
                  <span className="schedule-time">{item.time}</span>
                  <span className="schedule-activity">{item.activity}</span>
                </div>
              ))}
            </div>
            <button className="close-schedule" onClick={toggleSchedule}>
              Close
            </button>
          </div>
        </div>
      )}
                  </div>

                </div>

               
            </div>

          </div>
        
      </div>
    </div>
  );
};

export default AlibaugDetails;