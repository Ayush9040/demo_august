import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InnerNavComponent from "../../../Components/InnerNavComponent";
import "./TwohundredLandingPage.scss";
import follower_m from './images/follower_m.webp'
import tC_icon from './images/tc_icons_2.svg'
import lotus_200_card from './images/lotus_200_card.webp'
import Post_1 from "./images/Post_1.webp"
import Post_2 from "./images/Post_2.webp"
import Post_3 from "./images/Post_3.webp"
import Post_4 from "./images/Post_4.webp"
import icon_TYI from "./images/icon_TYI.svg"
import certificate_1 from "./images/certificate_1.webp"
import certificate_2 from "./images/certificate_2.webp"
import certificate_3 from "./images/certificate_3.webp"
import close from "./images/close.svg"
import enrollicon from "./images/enrollicon.svg"
import Footer from "../../../Components/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slider_1 from './images/slider_1.webp'
import { AllCourses } from '../Constants/courses'
import { c200hr } from '../Constants/courses'

const TwoHundredLandingPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeButton, setActiveButton] = useState("benefits"); // Default active button
  const [currentBatchDates, setCurrentBatchDates] = useState([]);
  const [showFloatingEnroll, setShowFloatingEnroll] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedBatchId, setSelectedBatchId] = useState(null);

  // // Dynamic dates array
  const dynamicDates = [
    { date: "1st Mar to 31st Mar 2025", mode: "Online & On Campus", enrollLink: '/enrollment/one-month-ttc' },
     { date: "1st Apr to 30th Apr 2025", mode: "Online & On Campus", enrollLink: '/enrollment/200-hrs-part-time-ttc-on-campus-english' },
    { date: "1st May to 31st May 2025", mode: "Online & On Campus", enrollLink: '/enrollment/200-hrs-part-time-ttc-on-campus-english' },
    { date: "2nd Jun to 30th Jun 2025", mode: "Online & On Campus", enrollLink: '/enrollment/200-hrs-part-time-ttc-online' },
    { date:"1st Jul to 31st Jul 2025", mode: "Online & On Campus", },
    { date:"1st Aug to 30th Aug 2025", mode: "Online & On Campus", },
    { date:"1st Sep to 30th Sep 2025", mode: "Online & On Campus", },
    { date:"1st Oct to 31st Oct 2025", mode: "Online & On Campus", },
    { date:"1st Nov to 29th Nov 2025", mode: "Online & On Campus", },
    { date:"1st Dec to 31st Dec 2025", mode: "Online & On Campus", },
  ];

  
// Handle date selection
const handleDateSelect = (index) => {
  setActiveIndex(index);
  // You can also store the selected date information if needed
  const selectedDate = dynamicDates[index];
  console.log('Selected date:', selectedDate.date, 'Mode:', selectedDate.mode);
};


  // Add this useEffect to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      
      // Get the hero section height
      const heroSection = document.querySelector('.hero');
      const heroHeight = heroSection ? heroSection.offsetHeight : 0;
      
      // Get the footer position
      const footer = document.querySelector('footer');
      const footerPosition = footer ? footer.offsetTop : 9999;
      
      // Set a buffer value to hide the floating section before reaching the footer
      const buffer = 300;
      
      // Show the floating section after scrolling past hero but before reaching footer
      if (scrollPosition > heroHeight && scrollPosition < footerPosition - buffer) {
        setShowFloatingEnroll(true);
      } else {
        setShowFloatingEnroll(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check when component mounts
    handleScroll();
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  // Open modal with batch id
  const openBatchModal = (batchId) => {
    setSelectedBatchId(batchId);
    setShowModal(true);
    setActiveIndex(null); // Reset active index when opening modal
  };

  const scrollToAvailableBatches = () => {
    // Find the available batches section by ID
    const availableBatchesSection = document.getElementById('available-batches');
    
    // If the section exists, scroll to it
    if (availableBatchesSection) {
      availableBatchesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClick = (id) => {
    setActiveButton(id);
    console.log('activeButton',activeButton);
    
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const Locate = {
    title: 'Contact us',
    color: 'white',
    menuColor: 'white',
    menuItems: [],
  }

  const batches = [
    {
      id: 1,
      heading: "Batch-1",
      title: "7 Months Advanced TTC",
      duration: "07 Months",
      mode: "Online & On Campus",
      language: "English",
      startDate: "03 Mar 2025",
      timing: "Evening: 5pm - 8pm",
      days: "Monday - Saturday",
      bgcolor: '#F6D0C6',
      viewDetailsLink: "/one-month-ttc",
      enrollLink: '/enrollment/one-month-ttc'
    },
    {
      id: 2,
      heading: "Batch-2",
      title: "1 Year Advanced TTC",
      duration: "12 Months",
      mode: "Online & On Campus",
      language: "Hindi",
      startDate: "13 Mar 2025",
      timing: "Afternoon: 1:30pm - 4pm",
      days: "Monday - Friday",
      bgcolor: '#F6B4A4',
      viewDetailsLink: "/200-hrs-part-time-ttc-on-campus-english",
      enrollLink: '/enrollment/200-hrs-part-time-ttc-on-campus-english'
    },
    {
      id: 3,
      heading: "Batch-3",
      title: "2 Year Advanced TTC",
      duration: "24 Months",
      mode: "Online & On Campus",
      language: "English",
      startDate: "23 Mar 2025",
      timing: "Sat: 5pm - 8pm, Sun: 4pm - 8pm",
      days: "Saturday - Sunday",
      bgcolor: '#F0A18D',
      viewDetailsLink: "/200-hrs-part-time-ttc-online-english",
      enrollLink: '/enrollment/200-hrs-part-time-ttc-on-campus-english'
    },
    {
      id: 4,
      heading: "Batch-4",
      title: "4 Months Advanced TTC",
      duration: "04 Months",
      mode: "Online",
      language: "English",
      startDate: "03 Apr 2025",
      timing: "Morn: 7am - 9am & Even: 4:30pm - 8pm",
      days: "Monday - Friday",
      bgcolor: '#E89A87',
      viewDetailsLink: "/200-hrs-part-time-ttc-online",
      enrollLink: '/enrollment/200-hrs-part-time-ttc-online'
    },
    {
      id: 5,
      heading: "Batch-5",
      title: "3 Months Advanced TTC",
      duration: "03 Months",
      mode: "On Campus",
      language: "English",
      startDate: "03 May 2025",
      timing: "6:30am - 8:00pm",
      days: "Monday - Saturday",
      bgcolor: '#F68E73',
      viewDetailsLink: "/weekend-teacher-training-course",
      enrollLink: '/enrollment/weekend-teacher-training-course'
    },
  ];

  const offeringsData = [
    {
      id: 1,
      description: "Receive direct guidance and attend to your queries with spiritual Guru Dr. Hansaji Yogendra, who will be available to offer.",
      image: slider_1
    },
    {
      id: 2,
      description: "Receive direct guidance and attend to your queries with spiritual Guru Dr. Hansaji Yogendra, who will be available to offer.",
      image: slider_1
    },
    {
      id: 3,
      description: "Receive direct guidance and attend to your queries with spiritual Guru Dr. Hansaji Yogendra, who will be available to offer.",
      image: slider_1
    },
    {
      id: 4,
      description: "Receive direct guidance and attend to your queries with spiritual Guru Dr. Hansaji Yogendra, who will be available to offer.",
      image: slider_1
    },
    {
      id: 5,
      description: "Receive direct guidance and attend to your queries with spiritual Guru Dr. Hansaji Yogendra, who will be available to offer.",
      image: slider_1
    }
  ];

  const faqData = [
    {
      question: "Lorem ipsum dolor sit amet consectetur. Nullam amet parturient.",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Laoreet venenatis sed et facilisis enim eu viverra mattis venenatis. Pretium wenerra hendrerit egestas dui tortor pharetra ut nulla odio. Varius.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Sed libero.",
      answer: "",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Nibh in mauris odio morbi netus.",
      answer: "",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Ultricies.",
      answer: "",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Id proin faucibus volutpat.",
      answer: "",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Get batch enrollment link by id
  const getBatchEnrollLink = (batchId) => {
    const batch = batches.find(b => b.id === batchId);
    return batch ? batch.enrollLink : '#';
  };

  return (
    <div className="landing-page">
      
      {/* Hero Section */}
     <section className="hero">
     
  <div className="hero-overlay">
  <InnerNavComponent abc={Locate} />
    <div className="hero-content">
      <h1>
        Become a Certified Yoga<br /> Teacher in <span className="hero_content-span">200 Hours</span>
      </h1>
      <p className="hero_content-para">
        Join our immersive teacher training program.<br /> Learn, practice, and teach with confidence.
      </p>

      <div className="hero-info">
        <div className="info-item_community ">
          <img src={follower_m} alt="Community" />
          <span className="follower_desc">100K + Yoga <br /> Member Community</span>
        </div>
       
      </div>


<button 
      className="cta-button" 
      onClick={scrollToAvailableBatches}
    >
      See Available Batches
      <img src={icon_TYI} alt="Icon" className="TYIicon" />
    </button>
    </div>
  </div>
</section>




{/* Button Section */}

<section className="btn-wrapper">

<div className="btn_wrapper-container">

  <button className={`btn_links ${activeButton === "benefits" ? "btn_link_active" : "btn_link_notactive"}`}
        onClick={() => handleClick("benefits")}
 
  >Student Benefits</button>
  <button 
  className={`btn_links ${activeButton === "available-batches" ? "btn_link_active" : "btn_link_notactive"}`}
  onClick={() => handleClick("available-batches")}
  
  >Available batches</button>
  <button 
  className={`btn_links ${activeButton === "teach" ? "btn_link_active" : "btn_link_notactive"}`}
  onClick={() => handleClick("teach")}
  
  >Teaching & Certification</button>
  <button 
className={`btn_links ${activeButton === "offerings" ? "btn_link_active" : "btn_link_notactive"}`}
onClick={() => handleClick("offerings")}
 
  >Our Unique Offerings</button>
  <button 
  className={`btn_links ${activeButton === "faq" ? "btn_link_active" : "btn_link_notactive"}`}
  onClick={() => handleClick("faq")}
 
  >FAQ</button>

</div>

</section>

{/* end button section */}


      {/* Benefits Section */}
      <section className="benefits" id="benefits">
        <h2 className="section-title">
          <span className="highlight">Student Benefits</span>
          <br />
          <span className="title2">What will you get from this Training?</span>
        </h2>
        <p className="section-description">
        {`Our Yoga Teacher Training Program is designed to empower you with the knowledge,<br />
          skills, and confidence to teach yoga effectively. Here's what you'll get:`}
        </p>
        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="icon">
              <img src="/images/benefits.webp" alt="Benefits Icon" />
            </span>
            <img src="/images/yogabenefit.webp" alt="Benefits Icon" className="icon1" />
            <h3>Hands-on Asana Sessions</h3>
            <p>Practice and learn under expert supervision.</p>
          </div>
          <div className="benefit-item">
          <span className="icon">
              <img src="/images/benefits.webp" alt="Benefits Icon" />
            </span>
            <img src="/images/yogabenefit.webp" alt="Benefits Icon" className="icon1" />
            <h3>Personalized Mentorship</h3>
            <p>Practice and learn under expert supervision.</p>
          </div>
          <div className="benefit-item">
          <span className="icon">
              <img src="/images/benefits.webp" alt="Benefits Icon" />
            </span>
            <img src="/images/yogabenefit.webp" alt="Benefits Icon" className="icon1" />
            <h3>Certification</h3>
            <p>Practice and learn under expert supervision.</p>
          </div>
          <div className="benefit-item">
          <span className="icon">
              <img src="/images/benefits.webp" alt="Benefits Icon" />
            </span>
            <img src="/images/yogabenefit.webp" alt="Benefits Icon" className="icon1" />
            <h3>Downloadable Material</h3>
            <p>Practice and learn under expert supervision.</p>
          </div>
          <div className="benefit-item">
          <span className="icon">
              <img src="/images/benefits.webp" alt="Benefits Icon" />
            </span>
            <img src="/images/yogabenefit.webp" alt="Benefits Icon" className="icon1" />
            <h3>Expert Faculty</h3>
            <p>Practice and learn under expert supervision.</p>
          </div>
          <div className="benefit-item">
          <span className="icon">
              <img src="/images/benefits.webp" alt="Benefits Icon" />
            </span>
            <img src="/images/yogabenefit.webp" alt="Benefits Icon" className="icon1" />
            <h3>Hands-on Asana Sessions</h3>
            <p>Practice and learn under expert supervision.</p>
          </div>
        </div>
      </section>

      {/* Whom Can You Teach Section */}
      <section className="teach" id="teach">
        <h2 className="section-title1">
          <span className="highlight">Student Benefits</span>
          <br />
          <span className="title2">Whom can you teach</span>
        </h2>
        <p className="section-description">
          {`Our Yoga Teacher Training Program is designed to empower you with the knowledge,<br />
          skills, and confidence to teach yoga effectively. Here's what you'll get:`}
        </p>
        <div className="teach-grid">
          <div className="teach-item">
          <span className="icon">
          <img src="/images/teach.webp" alt="Teach Icon" />
          </span>
          <img src={lotus_200_card} alt="Teach Icon" className="icon1" />
            <h3>Certification</h3>
            <p>Practice and learn under expert supervision.</p>
          </div>
          <div className="teach-item">
          <span className="icon">
          <img src="/images/teach.webp" alt="Teach Icon" />
          </span>
          <img src={lotus_200_card}  alt="Teach Icon" className="icon1" />
            <h3>Certification</h3>
            <p>Practice and learn under expert supervision.</p>
          </div>
          <div className="teach-item">
          <span className="icon">
          <img src="/images/teach.webp" alt="Teach Icon" />
          </span>
          <img src={lotus_200_card}  alt="Teach Icon" className="icon1" />
            <h3>Certification</h3>
            <p>Practice and learn under expert supervision.</p>
          </div>
          <div className="teach-item">
          <span className="icon">
          <img src="/images/teach.webp" alt="Teach Icon" />
          </span>
          <img src={lotus_200_card}  alt="Teach Icon" className="icon1" />
            <h3>Certification</h3>
            <p>Practice and learn under expert supervision.</p>
          </div>
          <div className="teach-item">
          <span className="icon">
          <img src="/images/teach.webp" alt="Teach Icon" />
          </span>
          <img src={lotus_200_card}  alt="Teach Icon" className="icon1" />
            <h3>Certification</h3>
            <p>Practice and learn under expert supervision.</p>
          </div>
          <div className="teach-item">
          <span className="icon">
          <img src="/images/teach.webp" alt="Teach Icon" />
          </span>
          <img src={lotus_200_card}  alt="Teach Icon" className="icon1" />
            <h3>Certification</h3>
            <p>Practice and learn under expert supervision.</p>
          </div>
        </div>
      </section>

  {/* Available Batches */}


<section id="available-batches">
  <div className="available-batches">
    <div className="batch-container">
      <div className="batch-header">
        <p className="available-text">Available Batches</p>
        <h2 className="choose-text">Choose Your Ideal Batch</h2>
        <p className="description-text">
          Our flexible course schedule allows you to find a batch that fits your availability.<br />
          Get started on your path to becoming a certified yoga instructor today.
        </p>
      </div>
  {/* Adding separate div with all batch headings */}
  <div className="all-batches-heading-container">
        <div className="batch-logo-placeholder"></div>
      
      </div>

      <div className="batch-grid">
        {/* Header Row with Batch Names */}
        <div className="batch-row header-row">
          <div className="batch-cell logo-cell">
            <div>
            <img src="/images/asatanga1.webp" alt="Yoga icon" className="yoga-icon" />
            </div>
          </div>

          {batches.map((batch) => {
            const titleParts = batch.title.split(" ");
            const firstPart = titleParts.slice(0, 2).join(" ");
            const secondPart = titleParts.slice(2).join(" ");

            return (
              <div key={batch.id} className="batch-cell header-cell">
                <div key={batch.id} className="batch-heading-label">
            <div className="batch-wrapper" style={{ backgroundColor: "#F0F0F0" }}>
            {batch.heading}
            </div>
          </div>
                <div className="batch_details_header" style={{ backgroundColor: batch.bgcolor }}>
                  <div className="batch-name">{firstPart}<br /> {secondPart}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Batch Details Rows */}
        <div className="batch-row">
          <div className="batch-cell label-cell">Duration</div>
          {batches.map((batch) => (
            <div key={batch.id} className="batch-cell data-cell">
              <div className="batch-cell_data" style={{ backgroundColor: batch.bgcolor }}>
                {batch.duration}
              </div>
            </div>
          ))}
        </div>

        <div className="batch-row">
          <div className="batch-cell label-cell">Batch Mode</div>
          {batches.map((batch) => (
            <div key={batch.id} className="batch-cell data-cell">
              {batch.mode}
            </div>
          ))}
        </div>

        <div className="batch-row">
          <div className="batch-cell label-cell">Language</div>
          {batches.map((batch) => (
            <div key={batch.id} className="batch-cell data-cell">
              <div className="batch-cell_data" style={{ backgroundColor: batch.bgcolor }}>
                {batch.language}
              </div>
            </div>
          ))}
        </div>
 
        <div className="batch-row">
          <div className="batch-cell label-cell">Starting Date</div>
          {batches.map((batch) => (
            <div key={batch.id} className="batch-cell data-cell">
              {batch.startDate}
              <span 
                className="view-batch-link" 
                onClick={() => {
                  setActiveTab(batch.id);
                  setShowModal(true);
                  setActiveIndex(null); // Reset active index when opening modal
                }}
              >
                View upcoming batch
              </span>
            </div>
          ))}
        </div> 

        <div className="batch-row">
          <div className="batch-cell label-cell">Timings</div>
          {batches.map((batch) => (
            <div key={batch.id} className="batch-cell data-cell">
              <div className="batch-cell_data" style={{ backgroundColor: batch.bgcolor }}>
                {batch.timing}
              </div>
            </div>
          ))}
        </div>

        <div className="batch-row">
          <div className="batch-cell label-cell">Days</div>
          {batches.map((batch) => (
            <div key={batch.id} className="batch-cell data-cell">
              {batch.days}
            </div>
          ))}
        </div>

        <div className="batch-row">
          <div className="batch-cell label-cell"></div>
          {batches.map((batch) => (
            <div key={batch.id} className="batch-cell button-cell">
              <button className="enroll-now-btn"><a href={batch.enrollLink}>Enroll Now →</a></button>
              <button 
                className="view-details-btn"  
                onClick={() => navigate(batch.viewDetailsLink)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Modal for All Available Dates */}
      {showModal && (
  <div className="modal-overlay">
    <div className="modal-box">
      <div className="modal-header">
        <h3>Available Course Dates</h3>
        <button 
          className="close-modal" 
          onClick={() => setShowModal(false)}
        >
          <img src={close} alt="Close" />
        </button>
      </div>
      <div className="modal-body">
        <div className="date-grid">
          {dynamicDates?.map((item, index) => (
            <div key={index} className="cards_new_popup_dates">
              <div className="wrapper_center">
                <label 
                  className="item-label item_date" 
                  style={{ width: '100%', height: '100%', borderRadius: '12px' }}
                >
                  <input 
                    className="item-input"
                    type="radio" 
                    name="mode"
                    value={item}
                    aria-labelledby={`delivery-${index}-name`}
                    aria-describedby={`delivery-${index}-shipping delivery-${index}-price`}
                    onChange={() => handleDateSelect(index)}
                  />
                  <span className="item-info item_desc">
                    <span id={`delivery-${index}-name`} className="item-name date_info">
                      <img src='/images/dates.svg' alt="Calendar Icon" />
                      <span className='style_dates'>{item.date}</span>
                    </span>
                  </span>
                  {item.mode && (
                    <span className="item-info item_desc item_padding">
                      <span id={`delivery-${index}-mode`} className="item-name date_info">
                        <img src='/images/courseMode.svg' alt="Course Mode Icon" />
                        <span className='style_dates'>{item.mode}</span>
                      </span>
                    </span>
                  )}
                </label>
              </div>
            </div>
          ))}
        </div>
        
        <div className="enrollcourse">
          <button
            className={`enroll-course-btn ${activeIndex !== null ? "active" : "before_date_select"}`}
            disabled={activeIndex === null}
            onClick={() => {
              if (activeIndex !== null && selectedBatchId) {
                // const selectedDate = pageDate.dates[activeIndex];
                // const enrollLink = selectedDate.enrollLink || getBatchEnrollLink(selectedBatchId);
                
                // if (enrollLink) {
                //   window.location.href = `${enrollLink}?date=${encodeURIComponent(selectedDate.date)}&mode=${encodeURIComponent(selectedDate.mode)}`;
                // }
              }
            }}
          >
            Enroll Course
            <span className="enrollimg">
              <img src="/images/enroll_btn_icon.svg" alt="Enroll Icon" />
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  </div>
</section>





      {/* Teaching & Certification */}
      <section className="certification">
      <h2 className="section-title">
        <span className="highlight">Available Batches</span>
        
      </h2>
      <div className="highlight_below">Teaching & Certification</div>
     

      <div className="certification-grid">
        {/* Course Attendance Criteria */}
        <div className="criteria">
          <h3>Course Attendance Criteria</h3>
          <ul>
            <li className="points"><img className="tc_icon" src={tC_icon} alt="" />A student is required to have a minimum <span className="bold_points">80% attendance</span></li>
            <li>
            <img className="tc_icon" src={tC_icon} alt="" />
            After qualifying the attendance criteria, students can appear for the exam 
            (100 marks). Details below:
            </li>
            <table>
            <thead>
              <tr>
                <th>Course Details</th>
                <th>Marks</th>
                <th>Minimum Score Req.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Theory Component</td>
                <td>50 marks</td>
                <td>50%</td>
              </tr>
            </tbody>
          </table>
          <li className="points"><img className="tc_icon" src={tC_icon} alt="" />On successfully passing the exam, students will be awarded a certificate – Basic Teacher Training Certificate (200 hours) by <span className="bold_points">The Yoga Institute</span></li>
          <li className="points"><img className="tc_icon" src={tC_icon} alt="" />This Certificate is recognized by <span className="bold_points">Yoga Certification Board (AYUSH Level-1) and 
          Yoga Alliance USA (RYT 200).</span></li>
          </ul>
          
        </div>

        {/* Post Qualification Opportunities */}
        <div className="opportunities">
          <h3>Post Qualification Opportunities</h3>
          <div className="images">
            <div className="top_image">
            <img src={Post_1} alt="Post Qualification" />
            </div>
            <div className="below_images">
            <img src={Post_2} alt="Post Qualification" />
            <img src={Post_3} alt="Post Qualification" />
            <img src={Post_4} alt="Post Qualification" />
            </div>
         
          </div>
        </div>

         {/* Exam Schedule */}
         <div className="exam-schedule">
          <h3>Exam Schedule</h3>
          <ul>
          <li className="points"><img className="tc_icon" src={tC_icon} alt="" />On-campus Final exams (both theory and practical’s) will be conducted on the last working day of each month, or as announced (in case of exigencies), between 10 am (IST) and 2 pm IST.</li>
          
          <li className="points"><img className="tc_icon" src={tC_icon} alt="" />Online Final exams will be conducted on the 1st Sat and the 3rd Sat of each month or as announced (in case of exigencies), subject to a minimum quorum of 8 students.
          <ul>
            
            <li style={{listStyle: 'circle', marginLeft: '70px'}}>Theory exams will be conducted online at 5pm (IST)</li>
            <li style={{listStyle: 'circle', marginLeft: '70px'}}>Practical exams will be conducted online at 3.30 pm (IST) / 6.30 pm (IST), subject to quorum.</li>
            
            </ul></li>
            <li className="points"><img className="tc_icon" src={tC_icon} alt="" />Students, after submission, can log out /leave only with the explicit permission of the examiner
          <ul>
            
            <li style={{listStyle: 'circle', marginLeft: '70px'}}>For practical’s - students will have to wait till the exams of all students are completed</li>
            <li style={{listStyle: 'circle', marginLeft: '70px'}}>The examiner may call out students at random and not necessarily in alphabetic order</li>
            
            </ul></li>
          
          <li className="points"><img className="tc_icon" src={tC_icon} alt="" />A Mock test will be held 7 -14 days prior to the course end date, to familiarise students with the exam process</li>
          
          </ul>
        </div>

      
    



        {/* Exam Schedule */}
        <div className="exam-schedule">
          <h3>Exam Schedule</h3>
          <ul>
          <li className="points"><img className="tc_icon" src={tC_icon} alt="" />On-campus Final exams (both theory and practical’s) will be conducted on the last working day of each month, or as announced (in case of exigencies), between 10 am (IST) and 2 pm IST.</li>
          
          <li className="points"><img className="tc_icon" src={tC_icon} alt="" />Online Final exams will be conducted on the 1st Sat and the 3rd Sat of each month or as announced (in case of exigencies), subject to a minimum quorum of 8 students.
          <ul>
            
            <li style={{listStyle: 'circle', marginLeft: '70px'}}>Theory exams will be conducted online at 5pm (IST)</li>
            <li style={{listStyle: 'circle', marginLeft: '70px'}}>Practical exams will be conducted online at 3.30 pm (IST) / 6.30 pm (IST), subject to quorum.</li>
            
            </ul></li>
            <li className="points"><img className="tc_icon" src={tC_icon} alt="" />Students, after submission, can log out /leave only with the explicit permission of the examiner
          <ul>
            
            <li style={{listStyle: 'circle', marginLeft: '70px'}}>For practical’s - students will have to wait till the exams of all students are completed</li>
            <li style={{listStyle: 'circle', marginLeft: '70px'}}>The examiner may call out students at random and not necessarily in alphabetic order</li>
            
            </ul></li>
          
          <li className="points"><img className="tc_icon" src={tC_icon} alt="" />A Mock test will be held 7 -14 days prior to the course end date, to familiarise students with the exam process</li>
          
          </ul>
        </div>

      
      </div>

        {/* Post Course Certification */}
        <div className="post-certification_wrapper">
          <span>What you will get on post course</span>
       
          <div className="img_certificates-wrapper">
              <div className="first_left_wrapper">
                <img style={{marginRight: '90px'}} src={certificate_1} alt="" />
                <img src={certificate_2} alt="" />
              </div>
              <div className="first_right_wrapper">
                <img src={certificate_3} alt="" />
              </div>
          </div>
        </div>
    </section>

      {/* Unique Offerings */}
     

<section className="offerings-container" id="offerings">
      <div className="section-header">
        <h2 className="section-title">
          <span className="highlight">Available Batches</span>
        </h2>
        <h3 className="section-main-title">Our Unique Offerings</h3>
      </div>
      
      <div className="carousel-container">
       

<Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper-container"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {offeringsData.map((offering, index) => (
          <SwiperSlide key={offering.id}>
            <div className={`slide-wrapper ${activeIndex === index ? 'active' : 'inactive'}`}>
              <div className="image-container">
                <img src={offering.image} alt={`Yoga offering ${index + 1}`} />
              </div>
              <div className={`slide-content ${activeIndex === index ? 'visible' : 'hidden'}`}>
                <h2>Special Interaction with <span className="slide-title">Dr. Hansaji Yogendra</span></h2>
                <p>{offering.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        
        <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
            <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        </div>
      </div>
    </section>

      {/* FAQ Section */}
 <section className="faq" id="faq">
      <h3 className="faq-heading">FAQ</h3>
      <h2 className="faq-title">Frequently Asked Question</h2>

      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {item.question}
              <span className="faq-icon">
  {openIndex === index ? (
    <img src="/images/arrowup.svg" alt="" />
  ) : (
    <img src="/images/arrowdown.svg" alt="" />
  )}
</span>

            </div>
            {openIndex === index && <p className="faq-answer">{item.answer}</p>}
          </div>
        ))}
      </div>

      <div className="refund-policy">
        
      <img src="/images/yogalogorefund.svg" alt="The Yoga Institute" className="logorefund" />
        <h3>Refund Policy</h3>
        <p>
          The Yoga Institute has a strict no-refund policy for all its programs. The only exception is if a program is canceled by the institute, in which case the student will be offered a credit for any other program or a refund of the event fee.
        </p>
      </div>
    </section>

    {/* Enroll Container */}

     {showFloatingEnroll && (
        <div className="enroll-wrapper floating">
          <div className="enroll-container">
            <span className="course-title">200-Hour Yoga Teacher Training Course</span>
            <button className="enroll-button" onClick={() => scrollToAvailableBatches()}>
              Enroll Now 
              <span className="arrow-icon">
                <img src={enrollicon} alt="icon" className="enrollicon"></img>
              </span>
            </button>
          </div>
        </div>
      )}
     
     
      
      <Footer />
    </div>
  );
};

export default TwoHundredLandingPage;





















