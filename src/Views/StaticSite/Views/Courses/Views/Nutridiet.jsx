

import React, { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Nutridiet.scss';
import nutridiet_img from './images/home_banner_new.png'
import headericon from './images/headericon.svg'
import follower from './images/follower.webp'
import saladPlateImage from './images/saladPlateImage.svg'
import benefitcard from './images/benefitcard.webp'
import Nutritionist from './images/Nutritionist.svg'
import Dietician from './images/Dietician.svg'
import insta from './images/insta.svg'
import fb from './images/fb.svg'
import footericon from './images/footericon.webp'
import phoneicon from './images/phone.svg'
import vector from './images/vector.svg'
import greenbackground from './images/greenbackground.svg'
import InnerNavComponent from "../../../Components/InnerNavComponent";
import nutri_diet_logo from './images/nutri_diet_logo.svg'
import nutri_diet_hero_wrapper from './images/nutri_diet_hero_wrapper.svg'
import right_fruit_1 from './images/right_fruit_1.webp'
import left_fruit_2 from './images/left_fruit_2.webp'
import left_image_3 from './images/left_image_3.webp'
import right_top_1 from './images/right_top_1.webp'
import right_2 from './images/right_2.webp'
import right_5 from './images/right_5.webp'
import frame_timeline_new from './images/frame_timeline_new.webp'
import timeline from './images/timeline.png'
import right_fruit_new_3 from './images/right_fruit_new_3.webp'
import SelectDropDown from '../../../Components/Select Dropdown';
import CommonBtn from '../../../Components/commonbtn';
import ReactGA from 'react-ga4';
import SubcriptionForm from '../../NutriDiet/Subscription';
import { Pagination, Scrollbar, A11y } from "swiper/modules";
import Vihar from './images/new_vihar.png'
import VICHAR from './images/new_vichaar.png'
import Ahar from './images/new_ahar.png'
import ACHAAR from './images/new_achaar.png'
import Vinita from './images/Vinita_new.jpg'
import Kreena from './images/Kreena_new.jpg'
import TYI_Mobile_v2 from './images/TYI_Mobile_v2.webp'
import frame_left_client from './images/frame_left_client.png'
import copy from './images/copy.svg'
import nutri_diet_mobile_footer_arrow from './images/nutri_diet_mobile_footer_arrow.svg'
import MessageReview from './MessageReview';



const NutriDietHero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);
  const [price, setPrice] = useState()
  const [openForm1, setOpenForm1] = useState(false)
  const [openForm2, setOpenForm2] = useState(false)
  const [err, setErr] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0);
  const [plan, setPlan] = useState('')
  const [program, setProgram] = useState('')
  
  const [prevActiveIndex, setPrevActiveIndex] = useState(null);
  const [direction, setDirection] = useState("next");

  const [showModal, setShowModal] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  const openModal = (review) => {
    setSelectedReview(review);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedReview(null);
  };


  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    setPrevActiveIndex(activeIndex);
  };

  const Locate = {
    title: 'Contact us',
    color: 'white',
    menuColor: 'white',
    menuItems: [],
  }


  const highlightsData = [
    {
      category: 'Ahar',
      img: Ahar,
      subcategory: '(Diet & Nutrition)',
      title: '"Fuel for the Soul"',
      description: 'Emphasizing food as nourishment beyond just the body'
    },
    {
      category: 'Vihar',
      img: Vihar,
      subcategory: '(Lifestyle & Routine)',
      title: '"Flow of Life"',
      description: 'Capturing the essence of movement, relaxation, and daily habits'
    },
    {
      category: 'Aachar',
      img: ACHAAR,
      subcategory: '(Discipline & Conduct)',
      title: '"Rhythm of Actions"',
      description: 'Highlighting the impact of daily behavior and ethics'
    },
    {
      category: 'Vichar',
      img: VICHAR,
      subcategory: '(Thoughts & Mindset)',
      title: '"Echoes of the Mind"',
      description: 'Reflecting on how thoughts shape our reality'
    }
  ];

  const reviews = [
    {
      id: 1,
      text: "A 24 year old client, presented with high bilirubin, Hair fall, and dandruff, came with a goal of fat loss and muscle gain",
      details: "\"It was great! Inclusion of fiber based foods and changing my meal times played a big role and now my weight has gone down from 83.3 to 79.6 and is still dropping! I've not lost any muscle in the process so that's great as well\""
    },
    {
      id: 2,
      text: "A 59 year old man with a history of Type 2 diabetes went through Angioplasty, experienced low energy levels, muscle wasting and deranged lipid levels, came with a goal of improving lipid profile, energy level and diabetes management. ",
      details: "Our three month long association with NutriDiet Clinic by The Yoga Institute has been  a wonderful experience. I want to take this opportunity to express our sincere gratitude for all the nutritional and dietary advice you have provided .Your personalised approach and encouragement have helped in adopting healthy eating  habits and making positive changes in our daily life Have noticed improvements in energy levels and overall well-being ,medication has been reduced after following this diet plan for the last 2 months.We truly appreciate the time you took to address our specific needs .Our entire family has adopted this nutrient rich diet to have a healthy and balanced life.Your expert guidance to my husband and son have helped them to achieve their health goals.Thank you once again for your support."
    },
    {
      id: 3,
      text: "A 35 year old client wanted to improve athletic performance and recovery times.",
      details: "Through targeted nutrition planning and supplement protocols, we helped reduce recovery time by 40% and improve overall performance metrics within 8 weeks."
    },
    {
      id: 4,
      text: "A 24 year old client, presented with high bilirubin, Hair fall, and dandruff, came with a goal of fat loss and muscle gain",
      details: "\"It was great! Inclusion of fiber based foods and changing my meal times played a big role and now my weight has gone down from 83.3 to 79.6 and is still dropping! I've not lost any muscle in the process so that's great as well\""
    },

  ];


  const healthPrograms = [
    {
      program: "Shape up program",
      conditions: "Weight loss\nWeight gain, Muscle gain",
      oneMonth: "Rs 3999/-",
      threeMonth: "Rs 8999/-",
      sixMonth: "Rs 13999/-"
    },
    {
      program: "Hormonal imbalance program",
      conditions: "PCOS / PCOD\nInfertility, Thyroid",
      
    },
    {
      program: "Gut Health program",
      conditions: "GERD, Heartburn, Acidity\nDigestion issues / Constipation\nBloating, Gas & Flatulence",
      
    },
    {
      program: "Metabolic disorder program",
      conditions: "Type 2 Diabetes Mellitus\nCholesterol, Hypertension",
      
    },
    {
      program: "Maternal Program",
      conditions: "Pregnancy, Lactation\nPregnancy-induced diabetes",
     
    },
    {
      program: "Client specific diet",
      conditions: "Vegan diet, Ketogenic diet\nLactose intolerant / Gluten free",
     
    },
    {
      program: "Neurological Disorders",
      conditions: "Alzheimer's / Parkinson's",
    
    },
    {
      program: "Clinical Plans",
      conditions: "Diabetes on Insulin / BS\nIBD (Crohn's & Ulcerative Colitis)\nPeptic & Duodenal Ulcers\nBile reflux\nMalabsorption, Pancreatitis\nCancer, COPD, Kidney disorders\nLiver disorders\nEpilepsy",
      oneMonth: "Rs 4999/-",
      threeMonth: "Rs 9999/-",
      sixMonth: "Rs 14999/-"
    },
    {
      program: "Auto-Immune Disorders",
      conditions: "Rheumatoid Arthritis\nAnkylosing Spondylitis\nPsoriasis, Lupus\nSjogren's syndrome\nMultiple Sclerosis (MS)",
     
    }
  ];



  const options = ['1 week','1 month', '3 months', '6 months']
  const options1 = ['Shape up program', 'Hormonal imbalance program', 'Gut health program', 'Metabolic disorder program', 'Maternal program', 'Client specific diet', 'Neurological Disorders', 'Clinical Plans', 'Auto-Immune Disorders']
  const options2 = ['Shape up program', 'Hormonal imbalance program', 'Gut health program', 'Metabolic disorder program', 'Maternal program', 'Client specific diet', 'Neurological Disorders'];

  const [programOptions, setProgramOptions] = useState(options1);

  useEffect(() => {
    if (plan === '1 week') {
      setProgramOptions(options2);
    } else {
      setProgramOptions(options1);
    }
    // Reset selected program when plan changes
    setProgram('');
  }, [plan]);

  const selectStyles1 = {
    cursor: 'pointer',
    borderColor: 'rgba(50, 104, 86, 1)',
    color: 'rgba(255, 255, 255, 1)',
    fontSize: '16px',
    fontWeight: '500',
    fontFamily: 'Urbanist',
    borderWidth: '0.25rem',
    borderRadius: '6px',
    borderStyle: 'solid',
    maxWidth: 'fit-content',
    marginRight: '10px',
    height: '100%'
  }

  useEffect(() => {
    if (openForm1) {
      document.body.style.overflow = 'hidden'
    } else {

      document.body.style.overflow = 'auto'
    }
  }, [openForm1])

  useEffect(() => {
    if (openForm2) {
      document.body.style.overflow = 'hidden'
    } else {

      document.body.style.overflow = 'auto'
    }
  }, [openForm2])

  const enrollForm2 = () => {
    if (plan === '' || program === '') {
      setErr(true)
    } else {
      switch (plan) {
        case '1 month':
          setPrice(4999); setErr(false); setOpenForm1(true)
          break
        case '3 months':
          setPrice(9999); setErr(false); setOpenForm1(true)
          break
        case '6 months':
          setPrice(14999); setErr(false); setOpenForm1(true)
          break
        default:
          break
      }
    }
  }

  const belowenrollForm2 = () => {
    if (plan === '' || program === '') {
      setErr(true)
    } else {
      switch (plan) {
        case '1 month':
          setPrice(4999); setErr(false);
          setOpenForm2(true)
          break
        case '3 months':
          setPrice(9999); setErr(false);
          setOpenForm2(true)
          break
        case '6 months':
          setPrice(14999); setErr(false);
          setOpenForm2(true)
          break
        default:
          break
      }
    }
  }
  const updateGA4 = (amnt, program) => {
    ReactGA.event('add_to_cart', {
      currency: 'INR',
      value: amnt,
      items: [{
        item_name: 'Nutri Diet Clinic',
        item_id: program,
        price: amnt,
        quantity: 1
      }]
    });
    console.log('add_to_cart', {
      currency: 'INR',
      value: amnt,
      items: [{
        item_name: 'Nutri Diet Clinic',
        item_id: program,
        price: amnt,
        quantity: 1
      }]
    });
    if (window?.clevertap) {
      window.clevertap.event.push("Course_Enroll_Click", {
        "Course_name": 'Nutri Diet Clinic',
        "Page_name": 'nutri-diet',
        "Page_Url": window.location.href,
        "Tenure": plan,
        "date_time_timestamp": new Date().toISOString()
      });

      console.log("Course_Clicked event tracked", window.clevertap);
    } else {
      console.error("CleverTap is not initialized.");
    }


  }
  const enrollFrom = () => {
    
    if (plan === '' || program === '') {
      setErr(true)
    } else {
      switch (plan) {
        case '1 week':
          setPrice(1000); setErr(false); setOpenForm1(true)
          updateGA4(1000, program)
          // console.log('programs ', program)
          break
        case '1 month':
          setPrice(3999); setErr(false); setOpenForm1(true)
          updateGA4(3999, program)
          break
        case '3 months':
          setPrice(8999); setErr(false); setOpenForm1(true)
          updateGA4(8999, program)
          break
        case '6 months':
          setPrice(13999); setErr(false); setOpenForm1(true)
          updateGA4(13999, program)
          break
        default:
          break
      }
      if (program === 'Clinical Plans') {
        enrollForm2()
      }

    }
  }



  const belowEnrollFrom = () => {
    if (plan === '' || program === '') {
      setErr(true)
    } else {
      switch (plan) {
        case '1 week':
          setPrice(1000); setErr(false); setOpenForm2(true)
          updateGA4(1000, program)
          break
        case '1 month':
          setPrice(3999); setErr(false); setOpenForm2(true)
          updateGA4(3999, program)
          break
        case '3 months':
          setPrice(8999); setErr(false); setOpenForm2(true)
          updateGA4(8999, program)
          break
        case '6 months':
          setPrice(13999); setErr(false); setOpenForm2(true)
          updateGA4(13999, program)
          break
        default:
          break
      }
      if (program === 'Clinical Plans') {
        belowenrollForm2()
      }

    }
  }


  const scrollToPricing = () => {
    // Find the available batches section by ID
    const availableBatchesSection = document.getElementById('available-batches');

    // If the section exists, scroll to it
    if (availableBatchesSection) {
      availableBatchesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const [isFloating, setIsFloating] = useState(false);
  const benefitsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (benefitsRef.current) {
        const rect = benefitsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.3) {
          setIsFloating(true);
        } else {
          setIsFloating(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };


    //CONTACT US
  const phoneNumber = '+91-9967429596';
  const email = 'nutridiet@theyogainstitute.in';

  const handleCopy = (text, label) => {

    // Dismiss any existing toasts first
  toast.dismiss();
  
    navigator.clipboard.writeText(text)
      .then(() => {
        // toast.success(`${label} copied!`);
        toast.success('Copied Successfully!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: 'light',
        })
      
      })
      .catch(err => {
        console.error(`Failed to copy ${label}: `, err);
        toast.error(`Failed to copy ${label}`);
      });
  };

  const handleClose = () => {
    setShowModal(false);
  setSelectedReview(null);
  }

  return (
    <div className="diet_whole_wrapper">
      <div className="nutri-diet-wrapper">
        <InnerNavComponent abc={Locate} />


        <div className="nutri-diet-container">
          <div className="hero-section">
            <div className="hero-content">
              <h1 className="hero-title">
                Transform Your Health
                <br />
                with Personalized Nutrition❤️
              </h1>
              <div className="highlight-underline_top"></div>
              <p className="hero-subtitle">
                {`Balance your diet effortlessly with TYI's Nutri Diet Clinic`}
                <div className='no_mobile'><br /></div>
                where yogic wisdom meets modern nutrition for a healthier you.
              </p>

              <div className="customers-section">
                <div className="avatars">
                  <img src={follower} alt="Community" />
                </div>
                <span className="customer-count">1000+ Happy Customers</span>

              </div>

              <button className="pricing-btn" onClick={scrollToPricing}>
                See our pricing plan
                <div style={{ display: 'flex' }}>
                  <img src={nutri_diet_hero_wrapper} alt="" />
                </div>
              </button>
            </div>

            <div className="hero-image-container">
              <div className="food-plate">
                <img src={nutridiet_img} alt="Healthy Food Plate" className='nutridiet_img' />
              </div>
            </div>
          </div>


          <div ref={benefitsRef} className="nutri-diet-benefit">


            <h2 style={{ textAlign: 'center' }}>
              <span className="title">Why Choose the</span> <span className="highlight">Nutri - Diet Clinic</span>
            </h2>

            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="icon-container">
                  <div className="benefitcard">
                    <img src={benefitcard} alt="" />
                  </div>
                </div>
                <h3 className='benefit-card_spacing'>Holistic Approach:</h3>

                <span className='benefitp'>
                TYI’s 105-year legacy of holistic health meets contemporary nutrition practices, focusing on the well-being of your body, mind, and spirit.

                </span>
              </div>

              <div className="benefit-card">
                <div className="icon-container">
                  <div className="benefitcard">
                    <img src={benefitcard} alt="" />
                  </div>
                </div>
                <h3 className='benefit-card_spacing'>Personalized Plans:</h3>
                <span className='benefitp'>
                Our experts craft customized nutrition strategies tailored to your unique health goals and lifestyle.
                </span>
              </div>

              <div className="benefit-card">
                <div className="icon-container">
                  <div className="benefitcard">
                    <img src={benefitcard} alt="" />
                  </div>
                </div>
                <h3 className='benefit-card_spacing'>Sustainable Habits:</h3>
                <span className='benefitp'>
                We go beyond temporary diets, emphasizing lasting, practical eating habits that can easily become part of your daily life.
                </span>
              </div>

              <div className="benefit-card">
                <div className="icon-container">
                  <div className="benefitcard">
                    <img src={benefitcard} alt="" />
                  </div>
                </div>
                <h3 className='benefit-card_spacing'>Affordable for All:</h3>
                <span className='benefitp'>
                  {` Good health shouldn’t be a luxury. Our budget-friendly plans ensure wellness is accessible to everyone. `}
                </span>
              </div>

              <div className="benefit-card centered-card">
                <div className="icon-container">
                  <div className="benefitcard">
                    <img src={benefitcard} alt="" />
                  </div>
                </div>
                <h3 className='benefit-card_spacing'>Balanced and Practical Solutions:</h3>
                <span className='benefitp'>
                Seamlessly blending traditional recipes with simple, homemade solutions, our approach fits even the busiest schedules, making healthy choices both realistic and achievable.
                </span>
              </div>
            </div>
          </div>


          <div style={{ position: 'relative' }}>
            <div className="highlights-container">
              <h2 style={{ textAlign: 'center' }}>
                <span className="title_2">Highlight of  </span> <span className="highlight_2">Nutri - Diet Clinic </span>
              </h2>
              <div className="highlights-grid">
                {highlightsData.map((item, index) => (
                  <div key={index} className="highlight-card">
                    <div className="highlight-image-container">
                      <img src={item.img} alt="Healthy salad plate" className="saladPlateImage" />
                    </div>
                    <div className="highlight-content">
                      <div className="highlight-category">
                        {item.category} {item.subcategory}
                      </div>
                      <h3 className="highlight-title">{item.title}</h3>
                      <p className="highlight-description">({item.description})</p>
                      <div className="highlight-underline"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="highlights-wave">
              <img src={greenbackground} alt="Wave background" />
            </div>
          </div>


          <section className="transform_wrapper">

            <div className="left_fruit_container">
              <img src={right_fruit_1} alt="" className='fruit_1' />
              <img src={left_fruit_2} alt="" className='fruit_2' />
              <img src={left_image_3} alt="" className='fruit_3' />
              <img src={left_image_3} alt="" className='fruit_4' />
            </div>

            <main className="center_transform">

              <h2 style={{ textAlign: 'center' }}>
                <span className="title">Your Structured Health</span> <span className="highlight">Transformation journey</span>
              </h2>

              <div className="journey_main_wrapper">
                <div className="timeline-img-container">
                  <img src={frame_timeline_new} alt="Journey Timeline" className="timeline-svg" />
                  <img src={timeline} alt="Journey Timeline" className='timeline-mobile' />
                </div>

                <div className="journey_first_content_wrapper">
                  <div className="journey_card-content">
                    <h3>Enrollment</h3>
                    <p>Enrollment and Appointment Scheduling</p>
                  </div>
                </div>

                <div className="journey_second_content_wrapper">
                  <div className="journey_card-content">
                    <h3>Consultation Call</h3>
                    <p>Detailed 1 hour long comprehensive consultation call to understand your Physical, Mental and Emotional aspect for holistic health</p>
                    <span className='card_p'><strong>(Mode: Offline | Online)</strong></span>
                  </div>
                </div>

                <div className="journey_third_content_wrapper">
                  <div className="journey_card-content">
                    <h3>Body Analysis</h3>
                    <span className='card_p'><p><strong>For offline consultations:</strong></p></span>
                    <div style={{marginLeft: '15px', fontSize: '16px', fontWeight:'500', marginBottom: '20px'}}>
                    <p><li>Body composition analysis to understand the Weight, Muscle mass %, Fat mass %, Visceral fat, Body age and more</li></p>
                    </div>
                    <span className='card_p'><p><strong>For online clients:</strong></p></span>
                    <div style={{marginLeft: '15px', fontSize: '16px', fontWeight:'500'}}>
                    <p><li>Body measurements- height, weight, waist, and hip circumference, BMI</li></p>
                    </div>
                  </div>
                </div>

                <div className="journey_fourth_content_wrapper">
                  <div className="journey_card-content">
                    <h3>Biomedical Insights</h3>
                    <p>Review medical reports, including CBC, Lipid Profile, Kidney Function, Thyroid Profile, Liver Function Tests, Vitamin D, and Vitamin B12 levels.
                    </p>
                    <p>If necessary, recommend additional tests for a clearer health picture (reports should ideally be recent, within three to six months).</p>
                    <p>(Disclaimer: Pathological tests are not included in our services and must be conducted independently by clients.)
                    </p>
                  </div>
                </div>

                <div className="journey_fifth_content_wrapper">
                  <div className="journey_card-content">
                    <h3>Detailed Client History</h3>
                    <p>Health Background, Medical history (e.g., past illnesses, surgeries, or chronic conditions), Present issues, Family history & Nutrient Deficiencies 
                    </p>
                  </div>
                </div>

                <div className="journey_sixth_content_wrapper">
                  <div className="journey_card-content">
                    <h3>Holistic Health Assessment</h3>
                    <p>Lifestyle Factors: Sleep patterns, Stress levels, Mindset, Emotions, Hydration, Eating habits and food preferences.
                    </p>
                  </div>
                </div>

                <div className="journey_seventh_content_wrapper">
                  <div className="journey_card-content">
                    <h3>Dietary Habits Analysis</h3>
                    <p>Detailed recall of dietary intake and assessing meal timing, portion sizes, and frequency of nutrient-dense versus processed foods to identify gaps and areas for improvement.</p>
                  </div>
                </div>

                <div className="journey_eigth_content_wrapper">
                  <div className="journey_card-content">
                    <h3>Personalized Dietary Recommendations & Tailored Meal Plan</h3>
                    <div style={{marginLeft: '15px', fontSize: '16px', fontWeight:'500', color: '#333333'}}>
                    <p><li>Customized diet plan based on your nutritional needs, health goals, and food preferences.</li></p> <br/>
                    <p><li>Focusing on balanced meals, using sustainable and locally available food options in such a way that it fits seamlessly into your cultural, professional, and personal lifestyle requirements.</li></p>
                  </div>
                  </div>
                </div>

                <div className="journey_nine_content_wrapper">
                  <div className="journey_card-content">
                    <h3>Restaurant and Travel Guide</h3>
                    <p> We will provide a curated guide to healthy dining options across all cuisines, along with practical travel tips and flight-friendly recommendations to help you stay on track wherever you go.</p>
                  </div>
                </div>

                <div className="journey_ten_content_wrapper">
                  <div className="journey_card-content">
                    <h3>Exercise Recommendations</h3>
                    <p> Resources of exercises suited to  your fitness level and health objectives will be shared.  </p>
                  </div>
                </div>

                <div className="journey_eleven_content_wrapper">
                  <div className="journey_card-content">
                    <h3>Daily WhatsApp Support & Real-Time Guidance</h3>
                    <p> Daily support for addressing queries, providing feedback and ongoing motivation ensuring you stay on track to achieve your goals. </p>
                  </div>
                </div>

                <div className="journey_twelve_content_wrapper">
                  <div className="journey_card-content">
                    <h3>Follow-ups & Progress Monitoring</h3>
                    <p> Every 15 days and at the end of your plan, we conduct a thorough review of your body composition, measurements, and weight, alongside tracking improvements in your symptoms, energy levels, and overall well-being. 


                    </p>
                    <p>These insights empower us to fine-tune your diet and exercise plan, ensuring you overcome challenges, stay motivated, and achieve lasting results!</p>
                  </div>
                </div>
              </div>
            </main>

            <div className="right_fruit_container">
              <img src={right_top_1} alt="" className='right_fruit_1' />
              <img src={right_2} alt="" className='right_fruit_2' />
              <img src={right_fruit_new_3} alt="" className='right_fruit_3' />
              <img src={right_fruit_new_3} alt="" className='right_fruit_4' />
              <img src={right_5} alt="" className='right_fruit_5' />
            </div>
          </section>

          <section className="journey_wrapper">
            <main className="center_journey">

              <h2 style={{ textAlign: 'center' }}>
                <span className="title">Your Structured Health</span><br /> <span className="highlight">Transformation journey</span>
              </h2>

              <div className="health-journey-container1">
                {/* <img src={TYI_Mobile_v2} alt="Journey TImeline" /> */}

                <div className="health-timeline-cards">
                  <div className="timeline-card step-1">
                    <div className="card-content">
                      <h3>Enrollment</h3>
                      <p>Enrollment and Appointment Scheduling </p>
                    </div>
                  </div>

                  <div className="timeline-card step-2">
                    <div className="card-content">
                      <h3>Consultation Call</h3>
                      <p>Detailed 1 hour long comprehensive consultation call to understand your Physical, Mental and Emotional aspect for holistic health 
                      <br /> <span className='cardmobile'>(Mode: Offline / Online)</span></p>
                    </div>
                  </div>

                  <div className="timeline-card step-3">
                    <div className="card-content">
                      <h3>Body Analysis</h3>
                      <span className='card_p'><p><strong>For offline consultations:</strong> </p></span>
                      <p><li>Body composition analysis to understand the Weight, Muscle mass %, Fat mass %, Visceral fat, Body age and more</li></p> <br />
                      <span className='card_p'><p><strong>For online consultations:</strong></p></span>
                      <p><li>Body measurements- height, weight, waist, and hip circumference, BMI           </li> </p>
                    </div>
                  </div>



                  <div className="timeline-card step-4">
                    <div className="card-content">
                      <h3>Biomedical Insights</h3>
                      <p>Review medical reports, including CBC, Lipid Profile, Kidney Function, Thyroid Profile, Liver Function Tests, Vitamin D, and Vitamin B12 levels.</p> <br />
                      <p>If necessary, recommend additional tests for a clearer health picture (reports should ideally be recent, within three to six months).</p> <br />
                      <p>(Disclaimer: Pathological tests are not included in our services and must be conducted independently by clients.)
                      </p>
                    </div>
                  </div>



                  <div className="timeline-card step-5">
                    <div className="card-content">
                      <h3>Detailed Client History</h3>
                      <p>Health Background, Medical history (e.g., past illnesses, surgeries, or chronic conditions), Present issues, Family history & Nutrient Deficiencies</p>
                    </div>
                  </div>

                  <div className="timeline-card step-6">
                    <div className="card-content">
                      <h3>Holistic Health Assessment</h3>
                      <p>Lifestyle Factors: Sleep patterns, Stress levels, Mindset, Emotions, Hydration, Eating habits and food preferences.</p>
                    </div>
                  </div>

                  <div className="timeline-card step-7">
                    <div className="card-content">
                      <h3>Dietary Habits Analysis</h3>
                      <p>Detailed recall of dietary intake and assessing meal timing, portion sizes, and frequency of nutrient-dense versus processed foods to identify gaps and areas for improvement.</p>
                    </div>
                  </div>


                  <div className="timeline-card step-8">
                    <div className="card-content">
                      <h3>Personalized Dietary Recommendations & Tailored Meal Plan</h3>
                      <p><li>Customized diet plan based on your nutritional needs, health goals, and food preferences.</li></p>  <br />
                      <p><li>Focusing on balanced meals, using sustainable and locally available food options in such a way that it fits seamlessly into your cultural, professional, and personal lifestyle requirements.</li></p>
                    </div>
                  </div>

                  <div className="timeline-card step-9">
                    <div className="card-content">
                      <h3>Restaurant and Travel Guide</h3>
                      <p>We will provide a curated guide to healthy dining options across all cuisines, along with practical travel tips and flight-friendly recommendations to help you stay on track wherever you go.</p>
                    </div>
                  </div>

                  <div className="timeline-card step-10">
                    <div className="card-content">
                      <h3>Exercise Recommendations</h3>
                      <p>Resources of exercises suited to  your fitness level and health objectives will be shared.</p>
                    </div>
                  </div>


                  <div className="timeline-card step-11">
                    <div className="card-content">
                      <h3>Daily WhatsApp Support & Real-Time Guidance</h3>
                      <p>Daily support for addressing queries, providing feedback and ongoing motivation ensuring you stay on track to achieve your goals.</p>
                    </div>
                  </div>


                  <div className="timeline-card step-12">
                    <div className="card-content">
                      <h3>Follow-ups & Progress Monitoring</h3>
                      <p>Every 15 days and at the end of your plan, we conduct a thorough review of your body composition, measurements, and weight, alongside tracking improvements in your symptoms, energy levels, and overall well-being. </p> <br />
                      <p> These insights empower us to fine-tune your diet and exercise plan, ensuring you overcome challenges, stay motivated, and achieve lasting results!</p>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </section>


          <ToastContainer />
          <div className="contact-wrapper">

            <div className="contact-container">
              <div className="page-header">
                <p>By following this structured, holistic process, we offer a comprehensive and client-focused approach to achieving <span className="highlight-contact">optimal health</span> and <span className="highlight-contact"> wellness.</span></p>
              </div>
              <div className="highlight-underline_top_contact"></div>
              <div className="contact-box">
                <button className="contact-button">Contact US</button>
                <div className="contact-details">
                  <div className="contact-item" style={{ justifyContent: 'start'}}>
                    <div className='contact_social_wrapper'>
                      <span className="contact-icon">
                        <img src={phoneicon} alt="" />
                      </span>
                      <span>For Appointments: </span>
                    </div>

                    <div className='contact-name' style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                      <span>{phoneNumber}</span>
                      <img
                        src={copy}
                        alt="Copy Phone"
                        onClick={() => handleCopy(phoneNumber, 'Phone number')}
                        style={{ cursor: 'pointer', marginLeft: '8px', width: '16px', height: '16px' }}
                        title="Copy phone number"
                      />
                    </div>
                  
                  </div>

                  <div className="contact-item">
                    <div className='contact_social_wrapper'>
                      <span className="contact-icon">
                        <img src={phoneicon} alt="" />
                      </span>
                      <span>Email ID : </span>
                    </div>

                    <div className='contact-name' style={{ display: 'flex', alignItems: 'center' }}>
                      <a
                        href={`mailto:${email}`}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                        title="Send an email"
                      >
                        {email}
                      </a>
                      <img
                        src={copy}
                        alt="Copy Email"
                        onClick={() => handleCopy(email, 'Email')}
                        style={{ cursor: 'pointer', marginLeft: '8px', width: '16px', height: '16px' }}
                        title="Copy email"
                      />
                    </div>
                    {/* <ToastContainer /> */}
                  </div>

                  <div className="contact-item wd" style={{ justifyContent: 'start'}}>
                    <div className='contact_social_wrapper'>
                      <span className="contact-icon">
                        <img src={phoneicon} alt="" />
                      </span>
                      <span>Working Days : </span>
                    </div>
                    <div className='contact-name' style={{ display: 'flex' }}>
                      <span>Monday to Saturday <br /> (Sunday is closed) </span>
                    </div>
                  </div>

                  <div className="contact-item wt" style={{ justifyContent: 'start'}}>
                    <div className='contact_social_wrapper'>
                      <span className="contact-icon">
                        <img src={phoneicon} alt="" />
                      </span>
                      <span>Working Timings : </span>
                    </div>
                    <div className='contact-name' style={{ display: 'flex' }}>
                      <span>10 am to 6 pm IST </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="terms-container" type="a">
              <h3>→ Terms and conditions:</h3>
              <ol type="a">
                <li>
                We kindly request our overseas clients to schedule consultation calls in alignment with Indian business hours for seamless communication and support. Thank you for your understanding and cooperation.
                </li>
                <li>
                Please note that all fees are non-refundable and non-transferable under any circumstances.
                </li>
                <li>
                The results may vary according to the age, genetics, medical conditions, physical activity and gender and diet compliance.
                </li>
                <li>
                For the seamless execution of the program, we kindly request timely adherence, as we may not be able to accommodate any gaps/ inconsistencies due to non-compliance.
                </li>
              </ol>
            </div>
          </div>





{/* <div className="health-plan-container" id='available-batches'>
  <div className="health-plan-header">
    <h2 className="health-plan-title"><span className='meet-our'>check our</span><span className='plantitle'>Health plan Investments </span></h2>
  </div>
  <div className="health-plan-table-container">
    <table className="health-plan-table">
      <thead>
        <tr>
          <th className="program-column">Programs</th>
          <th className="conditions-column">Health Conditions</th>
          <th className="plan-column">1 Month plan</th>
          <th className="plan-column">3 Month plan</th>
          <th className="plan-column">6 Month plan</th>
        </tr>
      </thead>
      <tbody>
        {healthPrograms.map((program, index) => (
          <tr key={index}>
            <td>{program.program}</td>
            <td>
              {program.conditions.split('\n').map((condition, condIndex) => (
                <div key={condIndex} className="condition-line">{condition}</div>
              ))}
            </td>
            <td>{program.oneMonth}</td>
            <td>{program.threeMonth}</td>
            <td>{program.sixMonth}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div> */}



           


<div className="health-plan-container" id='available-batches'>
  <div className="health-plan-header">
    <h2 className="health-plan-title"><span className='meet-our'>check our</span><span className='plantitle'>Health plan Investments </span></h2>
  </div>
  <div className="health-plan-table-container">
    <table className="health-plan-table">
      <thead>
        <tr>
          <th className="program-column">Programs</th>
          <th className="conditions-column">Health Conditions</th>
          <th className="plan-column">1 Week plan</th>
          <th className="plan-column">1 Month plan</th>
          <th className="plan-column">3 Month plan</th>
          <th className="plan-column">6 Month plan</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{marginBottom: '60px'}}>
          <td>Shape up program</td>
          <td>
            <div className="condition-line">{`Weight loss`}</div>
            <div className="condition-line">{`Weight gain/ Muscle gain
`}</div>
          </td>
          <td>Rs 1000/-</td>
          <td>Rs 3999/-</td>
          <td>Rs 8999/-</td>
          <td>Rs 13999/-</td>
        </tr>
        
        <tr style={{marginBottom: '60px'}}>
          <td>Hormonal imbalance program</td>
          <td>
            <div className="condition-line">{`PCOS / PCOD`}</div>
            <div className="condition-line">{`Infertility, Thyroid`}</div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        
        <tr style={{marginBottom: '60px'}}>
          <td>Gut Health program</td>
          <td>
            <div className="condition-line">{`GERD, Heartburn, Acidity,`}</div>
            <div className="condition-line">{`Digestion issues , Constipation`}</div>
            <div className="condition-line">{`Bloating, Gas & Flatulence`}</div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        
        <tr style={{marginBottom: '60px'}}>
          <td>Metabolic disorder program</td>
          <td>
            <div className="condition-line">Type 2 Diabetes Mellitus</div>
            <div className="condition-line">{`Cholesterol, Hypertension`}</div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        
        <tr style={{marginBottom: '60px'}}>
          <td>Maternal Program</td>
          <td>
            <div className="condition-line">{`Pregnancy, Lactation,`}</div>
            <div className="condition-line">{`Pregnancy induced diabetes`}</div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        
        <tr style={{marginBottom: '60px'}}>
          <td>Client specific diet</td>
          <td>
            <div className="condition-line">{`Vegan diet, Ketogenic diet,`}</div>
            <div className="condition-line">{`Lactose intolerant,  Gluten free`}</div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        
        <tr style={{marginBottom: '60px'}}>
          <td>Neurological Disorders</td>
          <td>
            <div className="condition-line">{`Alzheimer's, Parkinson`}</div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        
        <tr style={{marginBottom: '60px'}}>
          <td>Clinical Plans</td>
          <td>
            <div className="condition-line">{`Diabetes on insulin IBS,`}</div>
            <div className="condition-line">{`IBD (Crohn's & Ulcerative Colitis),`}</div>
            <div className="condition-line">{`Peptic & Duodenal Ulcers,`}</div>
            <div className="condition-line">Piles, Gall bladderstones, </div>
            <div className="condition-line">{`Pancreatitis, Cancer,`}</div>
            <div className="condition-line">{`COPD, Kidney disorders,`}</div>
            <div className="condition-line">Liver disorders,</div>
            <div className="condition-line">Epilepsy</div>
          </td>
          <td>-</td>
          <td>Rs 4999/-</td>
          <td>Rs 9999/-</td>
          <td>Rs 14999/-</td>
        </tr>
        
        <tr style={{marginBottom: '60px'}}>
          <td>Auto-Immune Disorders</td>
          <td>
            <div className="condition-line">Rheumatoid Arthritis,</div>
            <div className="condition-line">Ankylosing Spondylitis,</div>
            <div className="condition-line">{`Psoriasis, Lupus`}</div>
            <div className="condition-line">{`Sjogren's syndrome,`}</div>
            <div className="condition-line">{`Multiple Sclerosis (MS)`}</div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>

 <div className='health_wrapper_bottom'>

              <div>
                <p className='desc_health_first'>🎯 Start Your Personalized Health Journey!</p>
                <p className='des_health_second'>Select your program & package to begin your transformation.</p>
              </div>

              <div
                id="date-select-mobile"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <SelectDropDown
                  currentValue={plan}
                  changeCurrentValue={setPlan}
                  text={'Select Package'}
                  isStyles={selectStyles1}
                  dates={options}
                />{' '}
                <SelectDropDown
                  currentValue={program}
                  changeCurrentValue={setProgram}
                  text={'Select Program'}
                  isStyles={selectStyles1}
                  dates={programOptions}
                />
                <CommonBtn text='Enroll Now' buttonAction={enrollFrom} />
                <div style={{ color: '#FF3B30', fontSize: '14px', fontWeight:'600', margin:'10px'}}>
                {err && <small> Please select package/program* </small>}
                </div>
                {openForm1 && <SubcriptionForm packageName={plan} packagePrice={price} closeForm={setOpenForm1} />}
              </div>
            </div>
          </div> 

          <div className='diet-container'>
            <div className="nutritionist-container">
              <div className="header">
                <h1 className="main-title">
                  <span className="meet-our">meet our</span><span className='diettitle'>Nutritionist and Dietician</span>
                </h1>
              </div>

              <div className="cards-container">
                <div className="profile-card">
                  <div className='nurtition'>
                    <img src={Vinita} alt='' />
                  </div>
                  <div className="profile-details">
                    <h2 className="profile-name">Vinita Ashok Sakpal (Sr. Nutritionist) </h2>
                    <div className="profile-list">
                      <h3 className="profile-title">Qualifications</h3>
                      <ul className="qualifications-list">
                        <li>MSc. Food Science and Nutrition</li>
                        <li>Bsc. Food Nutrition and Dietetics</li>
                        <li>Diabetes Educator </li>
                        <li>900 hrs Advance teacher training yoga course </li>
                        <li>YCB Level 3 Yoga Instructor and Evaluator </li>
                        <li>Experience: 5+ years </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="profile-card">
                  <div className='dietician'>
                    <img src={Kreena} alt='' />
                  </div>
                  <div className="profile-details">
                    <h2 className="profile-name">Kreena Sanjay Nagda <br /> (Clinical Dietician)</h2>
                    <div className="profile-list">
                      <h3 className="profile-title">Qualifications</h3>
                      <ul className="qualifications-list">
                        <li>MSc Clinical Nutrition and Dietetics</li>
                        <li>Functional Nutritionist</li>
                        <li>Certified Diabetes Educator</li>
                        <li>Holistic Nutrition Coach</li>
                        <li>Experience: 2+ years </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="client-reviews-container">
            <h2 className="reviews-title">our <span className="highlightreview">Client Reviews</span></h2>

            <div className="slider-container">


              <div className="slider-wrapper">
                <div className="slider-track">
                  {reviews.map((review, index) => {
                    // Calculate the position relative to current
                    let position = index - currentIndex;

                    // Handle wrapping for the carousel effect
                    if (position < -1) position = reviews.length - Math.abs(position);
                    if (position > 1) position = position - reviews.length;

                    const isLongText = review.details.length > 150;
                    const isLongTitle = review.text.length > 150;

                    return (
                      
                      <div
                        key={index}
                        className={`slide ${position === 0 ? 'active' : position === -1 ? 'prev' : position === 1 ? 'next' : ''}`}
                      >
                        
                        <div className="card">
                          <h3>{isLongTitle ? (
                            <>
                             {review.text.slice(0, 150)}...
                             <span className="read-more" onClick={() => openModal(review)}> Read More</span>
                            </>
                          ) : (
                            review.text
                          )}</h3>
                          <p>
                          {isLongText ? (
                              <>
                                {review.details.slice(0, 150)}...
                                <span className="read-more" onClick={() => openModal(review)}> Read More</span>
                              </>
                            ) : (
                              review.details
                          )}
                         
                          </p>
                        </div>
                       
                      </div>
                    );

                   
                  })}
                </div>
              </div>

              {showModal && selectedReview && (
        <MessageReview
          type={selectedReview.text}
          message={selectedReview.details}
          closePopup={closeModal}
          button="Close"
          buttonAction={closeModal}
        />
      )}

              

              {
                reviews.length > 1 && 
                  <div className="navigation">
                <button className="nav-btn prev-btn" onClick={prevSlide}>&#10094;</button>
                <div className="pagination">
                  {reviews.map((_, index) => (
                    <div
                      key={index}
                      className={`pagination-dot ${index === currentIndex ? 'active' : ''}`}
                      onClick={() => goToSlide(index)}
                    />
                  ))}
                </div>
                <button className="nav-btn next-btn" onClick={nextSlide}>&#10095;</button>
                </div>
              
              }
              

            </div>

          </div>

          <div className='bg_wrapper_client'>
            <div className="client-wave">
              <img src={greenbackground} alt="Wave background" />
            </div>
          </div>



          <div className="social-proof-container">
            <h2 className="social-proof-title">our <span className="highlight">Social Proof</span></h2>



            <div className="social-proof-card">
              <img src={footericon} alt="" className='footericon' />
              <div className="social-proof-content">

                <h3 className="social-proof-heading">Fuel Your Body, Transform Your Life</h3>
                <p className="social-proof-text">Science-backed nutrition tailored to your lifestyle. Start your journey today.</p>
                <div className="social-icons">
                  <a href="https://www.facebook.com/share/18ew37fDqZ/ " className="social-icon facebook">

                    <img src={fb} alt="" />

                  </a>
                  <a href=" https://www.instagram.com/nutridietclinicofficial/ " className="social-icon instagram">

                    <img src={insta} alt="" />

                  </a>
                </div>
              </div>
              <div className="badges">
                <div className="badge">
                </div>
              </div>
            </div>
          </div>

          {/* Floating Health Journey Section */}
          {/* <div className={`health-journey-container ${isFloating ? 'floating' : ''}`}>
            <h2 className="journey-title">Start Your Personalized Health Journey!</h2>

            <div
              id="date-select-mobile"
              style={{ display: 'flex', alignItems: 'center' }}
              className='select_wrapper'
            >
              <div className='fixes_mobile'>
                <SelectDropDown
                  currentValue={plan}
                  changeCurrentValue={setPlan}
                  text={'Select Package'}
                  isStyles={selectStyles1}
                  dates={options}
                />{' '}
                <SelectDropDown
                  currentValue={program}
                  changeCurrentValue={setProgram}
                  text={'Select Program'}
                  isStyles={selectStyles1}
                  dates={options1}
                />
              </div>
              <div className="btn_enroll">
                <CommonBtn text='Enroll Now' buttonAction={belowEnrollFrom} />
              </div>
              <div style={{ justifyContent: 'end', display: 'flex', margin: '10px', color: '#FF3B30', fontSize:'14px', fontWeight:'600', }}>
                {err && <small> Please select package/program* </small>}
              </div>

            </div>
          </div> */}

<div class={`card1 ${isFloating ? 'floating' : ''}`}>
<h2 >Start Your Personalized Health Journey!</h2>
    
        <div
              id="date-select-mobile"
              style={{ display: 'flex' }}
              className='select_wrapper'
            >
              <div className='fixes_mobile'>
                <SelectDropDown
                  currentValue={plan}
                  changeCurrentValue={setPlan}
                  text={'Select Package'}
                  isStyles={selectStyles1}
                  dates={options}
                />{' '}
                <SelectDropDown
                  currentValue={program}
                  changeCurrentValue={setProgram}
                  text={'Select Program'}
                  isStyles={selectStyles1}
                  dates={programOptions}
                />
              </div>
                <div className="btn_enroll">
                  <CommonBtn text='Enroll Now' buttonAction={belowEnrollFrom} />
                  {/* <img src={nutri_diet_mobile_footer_arrow} alt="" /> */}
                </div>
              <div style={{ justifyContent: 'end', display: 'flex', margin: '0px', color: '#FF3B30', fontSize:'14px', fontWeight:'600', }}>
                {err && <small> Please select package/program* </small>}
              </div>
              </div>

            </div>

          {openForm2 && <SubcriptionForm packageName={plan} packagePrice={price} closeForm={setOpenForm2} />}

        </div>
      </div>
    </div>
  );
};

export default NutriDietHero;