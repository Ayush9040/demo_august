// import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import InnerNavComponent from "../../../Components/InnerNavComponent";
// import './Nutridiet.scss';
// import nutridiet_img from './images/nutridiet_img.svg'
// import follower from './images/follower.svg'
// import saladPlateImage from './images/saladPlateImage.svg'
// import icon_TYI from "./images/icon_TYI.svg"
// import timeline from './images/timeline.svg';

// const NutriDietHero = () => {
//    const navigate = useNavigate();

//   const Locate = {
//     title: 'Contact us',
//     color: 'white',
//     menuColor: 'white',
//     menuItems: [],
//   }

//   const ClientReviews = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);

//     const reviews = [
//       {
//         id: 1,
//         text: "A 24 year old client presented with high bilirubin, liver fat, and alcohol BP issues with a goal of fat loss and restored health.",
//         details: "I work (place)exercise, nutrition and stress management top into our recommendations and this is allowing her to control their lifestyle habits. The program was designed for her individual needs with diet and nutrition."
//       },
//       {
//         id: 2,
//         text: "A 45 year old client presented with severe fatigue, severe with a goal of increasing energy.",
//         details: "By working on inflammation, food allergies, and nutrient absorption, we were able to increase energy levels. A custom diet plan focusing on gut health and inflammation reduction proved very effective."
//       },
//       {
//         id: 3,
//         text: "A 35 year old client wanted to improve athletic performance and recovery times.",
//         details: "Through targeted nutrition planning and supplement protocols, we helped reduce recovery time by 40% and improve overall performance metrics within 8 weeks."
//       }
//     ];

//     const nextSlide = () => {
//       setCurrentSlide((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
//     };

//     const prevSlide = () => {
//       setCurrentSlide((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
//     };

//     const goToSlide = (index) => {
//       setCurrentSlide(index);
//     };


//   return (
//     <div className="nutri-diet-container">
//       <nav className="navbar">
//         <button className="menu-toggle">
//           <span className="menu-icon"></span>
//         </button>
//         <div className="logo-container">
//         <InnerNavComponent abc={Locate} />
//           {/* <img src="/images/lotus-logo.png" alt="Lotus Logo" className="lotus-logo" /> */}
//           <div className="logo-divider"></div>
//           {/* <img src="/images/nutri-diet-logo.png" alt="Nutri Diet Clinic Logo" className="nutri-logo" /> */}
//         </div>
//         <button className="account-button">
//           {/* <img src="/images/user-icon.png" alt="User Account" /> */}
//         </button>
//       </nav>

//       <div className="hero-section">
//         <div className="hero-content">
//           <h1 className="hero-title">
//             Transform Your Health
//             <br />
//             with Personalized Nutrition <span className="heart-icon">❤️</span>
//           </h1>
//           <p className="hero-subtitle">
//             {`Balance your diet effortlessly with TYI's Nutri Diet Clinic`}
//             <br />
//             where yogic wisdom meets modern nutrition for a healthier you.
//           </p>

//           <div className="customers-badge">
//             <div className="customer-avatars">
//                  <img src={follower} alt="Community" />
//               {/* <img src="/images/customer-1.png" alt="Happy Customer" />
//               <img src="/images/customer-2.png" alt="Happy Customer" />
//               <img src="/images/customer-3.png" alt="Happy Customer" /> */}
//             </div>
//             <span className="customer-count">430+ Happy Customers</span>
//           </div>

//           <button className="pricing-button">
//             See our pricing plan
//             {/* <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg> */}
//           </button>
//         </div>

//         <div className="hero-image-container">

//           <div className="food-plate">
//             <img src={nutridiet_img} alt="Healthy Food Plate" className='nutridiet_img'/> 
//           </div>

//         </div>
//       </div>

//       <h2 className="title">
//         Why Choose the <span className="highlight">Nutri - Diet Clinic</span>
//       </h2>

//       <div className="benefits-grid">
//         <div className="benefit-card">
//           <div className="icon-container">
//             <div className="icon"></div>
//           </div>
//           <h3>Holistic Approach:</h3>
//           <p>
//             This 100-year legacy of holistic health meets contemporary nutrition practices,
//             focusing on the well-being of your body, mind, and spirit.
//           </p>
//         </div>

//         <div className="benefit-card">
//           <div className="icon-container">
//             <div className="icon"></div>
//           </div>
//           <h3>Personalized Plans:</h3>
//           <p>
//             Our experts craft customized nutrition strategies tailored to your unique health
//             goals and lifestyle.
//           </p>
//         </div>

//         <div className="benefit-card">
//           <div className="icon-container">
//             <div className="icon"></div>
//           </div>
//           <h3>Sustainable Habits:</h3>
//           <p>
//             We go beyond temporary diets, emphasizing lasting, practical eating habits
//             that can easily become part of your daily life.
//           </p>
//         </div>

//         <div className="benefit-card">
//           <div className="icon-container">
//             <div className="icon"></div>
//           </div>
//           <h3>Affordable for All:</h3>
//           <p>
//            {` Good health shouldn't be a luxury. Our budget-friendly plans ensure wellness is
//             accessible to everyone. `}
//           </p>
//         </div>

//         <div className="benefit-card centered-card">
//           <div className="icon-container">
//             <div className="icon"></div>
//           </div>
//           <h3>Balanced and Practical Solutions:</h3>
//           <p>
//             Seamlessly blending traditional recipes with simple, homemade solutions, our
//             approach fits even the busiest schedule, making healthy choices both realistic
//             and achievable.
//           </p>
//         </div>
//       </div>

//       <div className="highlights-container">
//       <h2 className="highlights-title">
//         Highlight of <span className="highlights-clinic-name">Nutri - Diet Clinic</span>
//       </h2>

//       <div className="highlights-grid">
//         <div className="highlight-card">
//           <div className="highlight-image-container">
//             <img src={saladPlateImage} alt="Healthy salad plate" className="saladPlateImage" />
//           </div>
//           <div className="highlight-content">
//             <h3 className="highlight-heading">Ahar (Diet & Nutrition)</h3>
//             <p className="highlight-tagline">{`"Fuel for the Soul"`}</p>
//             <p className="highlight-description">
//               (Emphasizing food as nourishment beyond just the body)
//             </p>
//           </div>
//         </div>

//         <div className="highlight-card">
//           <div className="highlight-image-container">
//             <img src={saladPlateImage} alt="Healthy salad plate" className="saladPlateImage" />
//           </div>
//           <div className="highlight-content">
//             <h3 className="highlight-heading">Vihar (Lifestyle & Routine)</h3>
//             <p className="highlight-tagline">{`"Flow of Life"`}</p>
//             <p className="highlight-description">
//               (Capturing the essence of movement, relaxation, and daily habits)
//             </p>
//           </div>
//         </div>

//         <div className="highlight-card">
//           <div className="highlight-image-container">
//             <img src={saladPlateImage} alt="Healthy salad plate" className="saladPlateImage" />
//           </div>
//           <div className="highlight-content">
//             <h3 className="highlight-heading">Achar (Discipline & Conduct)</h3>
//             <p className="highlight-tagline">{`"Rhythm of Actions"`}</p>
//             <p className="highlight-description">
//               (Highlighting the impact of daily behavior and ethics)
//             </p>
//           </div>
//         </div>

//         <div className="highlight-card">
//           <div className="highlight-image-container">
//             <img src={saladPlateImage} alt="Healthy salad plate" className="saladPlateImage" />
//           </div>
//           <div className="highlight-content">
//             <h3 className="highlight-heading">Vichar (Thoughts & Mindset)</h3>
//             <p className="highlight-tagline">{`"Echoes of the Mind"`}</p>
//             <p className="highlight-description">
//               (Reflecting on how thoughts shape our reality)
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="highlights-wave"></div>
//     </div>

//      <div className="transformation-container">
//       <div className="journey-header">
//         <h2>Your Structured Health <span className="highlight-text">Transformation journey</span></h2>
//         <img src={timeline} alt="Journey illustration" className="timelime.svg" />
//       </div>

//       <div className="journey-timeline">
//         {/* Card 1 */}
//         <div className="journey-step left">
//           <div className="step-content">
//             <h3>Enrollment</h3>
//             <p>Enrollment and Appointment Scheduling</p>
//           </div>
//           <div className="step-number">1</div>
//         </div>

//         {/* Card 2 */}
//         <div className="journey-step right">
//           <div className="step-number">2</div>
//           <div className="step-content">
//             <h3>Consultation Call</h3>
//             <p>Detailed 1 hour long comprehensive consultation call to understand your Physical, Mental and Emotional needs for holistic health.</p>
//             <p>(Mode: Offline | Online)</p>
//           </div>
//         </div>

//         {/* Card 3 */}
//         <div className="journey-step left">
//           <div className="step-content">
//             <h3>Body Analysis</h3>
//             <p><strong>For offline consultations:</strong></p>
//             <p>Body composition analysis to understand the weight, muscle mass & fat mass %, visceral fat, body age and more.</p>
//             <p><strong>For online clients:</strong></p>
//             <p>Body measurements: height, weight, waist, and hip circumference, BMI</p>
//           </div>
//           <div className="step-number">3</div>
//         </div>

//         {/* Card 4 */}
//         <div className="journey-step right">
//           <div className="step-number">4</div>
//           <div className="step-content">
//             <h3>Biomedical Insights</h3>
//             <p>Review medical reports including CBC, Lipid Profile, Liver Function Tests, Iron Function Tests, Vitamin D, and Vitamin B12 levels.</p>
//             <p>If recent medical examinations have not been taken, health plan options should ideally be couple within three to six months.</p>
//             <p><em>Disclaimer: Pathological tests are not included in our service and must be conducted independently by client.</em></p>
//           </div>
//         </div>

//         {/* Card 5 */}
//         <div className="journey-step left">
//           <div className="step-content">
//             <h3>Detailed Client History</h3>
//             <p>Health background, Medical history (e.g. past illness), allergies, or chronic conditions, Dietary preferences, and Current medication use.</p>
//           </div>
//           <div className="step-number">5</div>
//         </div>

//         {/* Card 6 */}
//         <div className="journey-step right">
//           <div className="step-number">6</div>
//           <div className="step-content">
//             <h3>Holistic Health Assessment</h3>
//             <p>Lifestyle factors, Sleep patterns, Stress levels, Physical Activities, Hydration, Eating habits and food preferences.</p>
//           </div>
//         </div>

//         {/* Card 7 */}
//         <div className="journey-step left">
//           <div className="step-content">
//             <h3>Dietary Habits Analysis</h3>
//             <p>Detailed record of dietary choices and processing meal timing, portion sizes, and frequency of nutrient-dense versus processed foods to identify gaps and areas for improvement.</p>
//           </div>
//           <div className="step-number">7</div>
//         </div>

//         {/* Card 8 */}
//         <div className="journey-step right">
//           <div className="step-number">8</div>
//           <div className="step-content">
//             <h3>Personalized Dietary Recommendations & Tailored Meal Plan</h3>
//             <p>Custom nutrition guidance based on your health goals, preferences, and specific dietary requirements to optimize your wellbeing.</p>
//           </div>
//         </div>

//         {/* Card 9 */}
//         <div className="journey-step left">
//           <div className="step-content">
//             <h3>Supplement Review & Recommendations</h3>
//             <p>Evaluation of current supplements and recommendations for additional supplements based on nutritional needs and health goals.</p>
//           </div>
//           <div className="step-number">9</div>
//         </div>

//         {/* Card 10 */}
//         <div className="journey-step right">
//           <div className="step-number">10</div>
//           <div className="step-content">
//             <h3>Lifestyle Modification Strategies</h3>
//             <p>Personalized recommendations for sleep improvement, stress management techniques, physical activity guidelines, and mindfulness practices.</p>
//           </div>
//         </div>

//         {/* Card 11 */}
//         <div className="journey-step left">
//           <div className="step-content">
//             <h3>Progress Tracking & Follow-up Sessions</h3>
//             <p>Regular check-ins to monitor progress, address challenges, celebrate successes, and adjust recommendations as needed to ensure continued progress.</p>
//           </div>
//           <div className="step-number">11</div>
//         </div>

//         {/* Card 12 */}
//         <div className="journey-step right">
//           <div className="step-number">12</div>
//           <div className="step-content">
//             <h3>Long-term Maintenance Plan</h3>
//             <p>Development of sustainable strategies and habits to maintain results after the initial program ends, including ongoing support options and resources.</p>
//           </div>
//         </div>
//       </div>
//     </div> 

//     <div className="health-plan-container">
//       <div className="health-plan-header">
//         <div className="logo-container">
//           <div className="logo-circle t">T</div>
//           <div className="logo-circle s">S</div>
//         </div>
//         <h2 className="health-plan-title">Health plan Investments</h2>
//       </div>

//       <div className="health-plan-table-container">
//         <table className="health-plan-table">
//           <thead>
//             <tr>
//               <th className="program-column">Programs</th>
//               <th className="conditions-column">Health Conditions</th>
//               <th className="plan-column">1 Month plan</th>
//               <th className="plan-column">3 Month plan</th>
//               <th className="plan-column">6 Month plan</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Shape up program</td>
//               <td>
//                 <p>Weight loss</p>
//                 <p>Weight gain / Muscle gain</p>
//               </td>
//               <td>Rs 3999/-</td>
//               <td>Rs 8999/-</td>
//               <td>Rs 12999/-</td>
//             </tr>
//             <tr>
//               <td>Hormonal imbalance program</td>
//               <td>
//                 <p>PCOS/ PCOD</p>
//                 <p>Infertility/ Thyroid</p>
//               </td>
//               <td>Rs 3999/-</td>
//               <td>Rs 8999/-</td>
//               <td>Rs 12999/-</td>
//             </tr>
//             <tr>
//               <td>Gut Health program</td>
//               <td>
//                 <p>GERD, Heartburn, Acidity</p>
//                 <p>Digestion issues/ Constipation</p>
//                 <p>Bloating Gas & Flatulence</p>
//               </td>
//               <td>Rs 3999/-</td>
//               <td>Rs 8999/-</td>
//               <td>Rs 12999/-</td>
//             </tr>
//             <tr>
//               <td>Metabolic disorder program</td>
//               <td>
//                 <p>Type 2 Diabetes, Mellitus</p>
//                 <p>Cholesterol, Hypertension</p>
//               </td>
//               <td>Rs 3999/-</td>
//               <td>Rs 8999/-</td>
//               <td>Rs 12999/-</td>
//             </tr>
//             <tr>
//               <td>Maternal Program</td>
//               <td>
//                 <p>Pregnancy, Lactation,</p>
//                 <p>Pregnancy induced diabetes</p>
//               </td>
//               <td>Rs 3999/-</td>
//               <td>Rs 8999/-</td>
//               <td>Rs 12999/-</td>
//             </tr>
//             <tr>
//               <td>Client specific diet</td>
//               <td>
//                 <p>Vegan diet, Ketogenic diet,</p>
//                 <p>Lactose intolerant/ Gluten free</p>
//               </td>
//               <td>Rs 3999/-</td>
//               <td>Rs 8999/-</td>
//               <td>Rs 12999/-</td>
//             </tr>
//             <tr>
//               <td>Neurological Disorders</td>
//               <td>
//                 <p>{`Alzheimer's/ Parkinson`}</p>
//               </td>
//               <td>Rs 3999/-</td>
//               <td>Rs 8999/-</td>
//               <td>Rs 12999/-</td>
//             </tr>
//             <tr>
//               <td>Clinical Plans</td>
//               <td>
//                 <p>Diabetes on Insulin/ BS,</p>
//                 <p>{`IBD (Crohn's & Ulcerative`}</p>
//                 <p>Colitis), Peptic & Duodenal</p>
//                 <p>Ulcers, Bile reflux,</p>
//                 <p>Malabsorption, Pancreatitis,</p>
//                 <p>Cancer, COPD, Kidney</p>
//                 <p>disorders, Liver disorders,</p>
//                 <p>Epilepsy</p>
//               </td>
//               <td>Rs 4999/-</td>
//               <td>Rs 9999/-</td>
//               <td>Rs 14999/-</td>
//             </tr>
//             <tr>
//               <td>Auto-Immune Disorders</td>
//               <td>
//                 <p>Rheumatoid Arthritis,</p>
//                 <p>Ankylosing Spondylitis,</p>
//                 <p>Psoriasis, Lupus</p>
//                 <p>{`Sjogren's syndrome,`}</p>
//                 <p>Multiple Sclerosis (MS)</p>
//               </td>
//               <td>Rs 4999/-</td>
//               <td>Rs 9999/-</td>
//               <td>Rs 14999/-</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       <div className="health-plan-footer">
//         <div className="footer-cta">
//           <span className="heart-icon">❤️</span>
//           <p>Start Your Personalized Health Journey!</p>
//         </div>
//         <div className="footer-buttons">
//           <button className="btn btn-select">Choose Your Package<span className="arrow-down">▼</span></button>
//           <button className="btn btn-select">Choose Your Program<span className="arrow-down">▼</span></button>
//           <button className="btn btn-enroll">Enroll Now</button>
//         </div>
//       </div>
//     </div>

//     <div className="client-reviews-container">
//       <h2 className="reviews-title">our <span className="highlight">Client Reviews</span></h2>

//       <div className="reviews-slider-container">
//         <div className="reviews-slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
//           {reviews.map((review) => (
//             <div className="review-card" key={review.id}>
//               <div className="review-content">
//                 <p className="review-text">{review.text}</p>
//                 <p className="review-details">{review.details}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="slider-controls">
//         <button className="slider-arrow prev" onClick={prevSlide}>
//           &#10094;
//         </button>
//         <div className="slider-dots">
//           {reviews.map((_, index) => (
//             <span 
//               key={index} 
//               className={`slider-dot ${index === currentSlide ? "active" : ""}`}
//               onClick={() => goToSlide(index)}
//             >
//               {index === currentSlide ? "•••••" : "•"}
//             </span>
//           ))}
//         </div>
//         <button className="slider-arrow next" onClick={nextSlide}>
//           &#10095;
//         </button>
//       </div>
//     </div>

//     <div className="nutritionist-container">
//       <div className="header">
//         <div className="logo-container">
//           <div className="logo">
//             <span className="logo-letter t">T</span>
//             <span className="logo-letter s">S</span>
//           </div>
//         </div>
//         <h1 className="main-title">
//           <span className="meet-our">meet our</span> Nutritionist and Dietician
//         </h1>
//       </div>

//       <div className="cards-container">
//         <div className="profile-card">
//           {/* <img 
//             src="/api/placeholder/400/300" 
//             alt="Nutritionist drinking water"
//             className="profile-image" 
//           /> */}
//           <div className="profile-details">
//             <h2 className="profile-name">Vinita Ashok Salunke (Sr. Nutritionist)</h2>
//             <h3 className="profile-title">Qualifications</h3>
//             <ul className="qualifications-list">
//               <li>MSc. Food Science and Nutrition</li>
//               <li>PG Diploma in Sports and Dietetics</li>
//               <li>Certified Diabetes Educator</li>
//               <li>NESTA Advance Nutrition Training program course</li>
//               <li>VLCC Level 2 Weight Management and Wellness</li>
//               <li>Experience: 5+ years</li>
//             </ul>
//           </div>
//         </div>

//         <div className="profile-card"> 
//           {/* <img 
//             src="/api/placeholder/400/300" 
//             alt="Dietician cooking in kitchen"
//             className="profile-image" 
//           /> */}
//            <div className="profile-details">
//             <h2 className="profile-name">Samma Sanjay Nagda (Clinical Dietician)</h2>
//             <h3 className="profile-title">Qualifications</h3>
//             <ul className="qualifications-list">
//               <li>BHMS, Certified Nutrition and Dietetics</li>
//               <li>Psychonutrition Practitioner</li>
//               <li>Certified Diabetes Educator</li>
//               <li>ICMR, NESA Diet Coach</li>
//               <li>Experience: 3+ years</li>
//             </ul>
//           </div> 
//         </div>
//       </div>
//     </div> 

//     <div className="social-proof-container">
//       <h2 className="social-proof-title">our <span className="highlight">Social Proof</span></h2>

//       <div className="social-proof-card">
//         <div className="social-proof-content">
//           <h3 className="social-proof-heading">Fuel Your Body. Transform Your Life.</h3>
//           <p className="social-proof-text">Join the thousands of people who have found better health and a new lease on life today.</p>
//           <div className="social-icons">
//             <a href="#" className="social-icon facebook">
//               <i className="fab fa-facebook-f"></i>
//             </a>
//             <a href="#" className="social-icon instagram">
//               <i className="fab fa-instagram"></i>
//             </a>
//           </div>
//         </div>
//         <div className="badges">
//           <div className="badge">
//             {/* <img src="/api/placeholder/60/60" alt="Certification Badge" className="badge-image" /> */}
//           {/* </div>
//           <div className="badge"> */}
//             {/* <img src="/api/placeholder/60/60" alt="Certification Badge" className="badge-image" /> */}
//           </div>
//         </div>
//       </div>
//     </div> 

//    <div className="health-journey-container">
//       <h2 className="journey-title">Start Your Personalized Health Journey!</h2>

//       <div className="journey-buttons">
//         <button className="journey-button outline">
//           Choose Your Package
//         </button>
//         <button className="journey-button filled">
//           Choose Your Program
//         </button>
//         <button className="journey-button accent">
//           Email Now
//         </button>
//       </div>
//     </div> 
//     </div>

//   );
// }
// };


// export default NutriDietHero;

import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import InnerNavComponent from "../../../Components/InnerNavComponent";
import './Nutridiet.scss';
import nutridiet_img from './images/nutridiet_img.svg'
import headericon from './images/headericon.svg'
import follower from './images/follower.svg'
import saladPlateImage from './images/saladPlateImage.svg'
import icon_TYI from "./images/icon_TYI.svg"
import timeline from './images/timeline.svg';
import benefitcard from './images/benefitcard.svg'
import Nutritionist from './images/Nutritionist.svg'
import Dietician from './images/Dietician.svg'
import insta from './images/insta.svg'
import fb from './images/fb.svg'
import footericon from './images/footericon.svg'
import phoneicon from './images/phone.svg'
import highlightunderline from './images/highlightunderline.svg'
import vector from './images/vector.svg'
import greenbackground from './images/greenbackground.svg'

const NutriDietHero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
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
      subcategory: '(Diet & Nutrition)',
      title: 'Fuel for the Soul',
      description: 'Emphasizing food as nourishment beyond just the body'
    },
    {
      category: 'Vihar',
      subcategory: '(Lifestyle & Routine)',
      title: 'Flow of Life',
      description: 'Capturing the essence of movement, relaxation and daily habits'
    },
    {
      category: 'Achar',
      subcategory: '(Discipline & Conduct)',
      title: 'Rhythm of Actions',
      description: 'Highlighting the impact of daily behavior and ethics'
    },
    {
      category: 'Vihar',
      subcategory: '(Thoughts & Mindset)',
      title: 'Echoes of the Mind',
      description: 'Reflecting on how thoughts shape our reality'
    }
  ];

  // const highlightsData = [
  //   {
  //     title: "Ahar (Diet & Nutrition)",
  //     tagline: "Fuel for the Soul",
  //     description: "Emphasizing food as nourishment beyond just the body",
  //   },
  //   {
  //     title: "Vihar (Lifestyle & Routine)",
  //     tagline: "Flow of Life",
  //     description: "Capturing the essence of movement, relaxation, and daily habits",
  //   },
  //   {
  //     title: "Achar (Discipline & Conduct)",
  //     tagline: "Rhythm of Actions",
  //     description: "Highlighting the impact of daily behavior and ethics",
  //   },
  //   {
  //     title: "Vichar (Thoughts & Mindset)",
  //     tagline: "Echoes of the Mind",
  //     description: "Reflecting on how thoughts shape our reality",
  //   },
  // ];

  // const journeySteps = [
  //   {
  //     id: 1,
  //     title: "Enrollment",
  //     content: "Enrollment and Appointment Scheduling"
  //   },
  //   {
  //     id: 2,
  //     title: "Consultation Call",
  //     content: "Detailed 1 hour long comprehensive consultation call to understand your Physical, Mental and Emotional needs for holistic health.\n(Mode: Offline | Online)"
  //   },
  //   {
  //     id: 3,
  //     title: "Body Analysis",
  //     content: "For offline consultations:\nBody composition analysis to understand the weight, muscle mass & fat mass %, visceral fat, body age and more.\n\nFor online clients:\nBody measurements: height, weight, waist, and hip circumference, BMI"
  //   },
  //   {
  //     id: 4,
  //     title: "Biomedical Insights",
  //     content: "Review medical reports including CBC, Lipid Profile, Liver Function Tests, Iron Function Tests, Vitamin D, and Vitamin B12 levels.\n\nIf recent medical examinations have not been taken, health plan options should ideally be couple within three to six months.\n\nDisclaimer: Pathological tests are not included in our service and must be conducted independently by client."
  //   },
  //   {
  //     id: 5,
  //     title: "Detailed Client History",
  //     content: "Health background, Medical history (e.g. past illness), allergies, or chronic conditions, Dietary preferences, and Current medication use."
  //   },
  //   {
  //     id: 6,
  //     title: "Holistic Health Assessment",
  //     content: "Lifestyle factors, Sleep patterns, Stress levels, Physical Activities, Hydration, Eating habits and food preferences."
  //   },
  //   {
  //     id: 7,
  //     title: "Dietary Habits Analysis",
  //     content: "Detailed record of dietary choices and processing meal timing, portion sizes, and frequency of nutrient-dense versus processed foods to identify gaps and areas for improvement."
  //   },
  //   {
  //     id: 8,
  //     title: "Personalized Dietary Recommendations & Tailored Meal Plan",
  //     content: "Custom nutrition guidance based on your health goals, preferences, and specific dietary requirements to optimize your wellbeing."
  //   },
  //   {
  //     id: 9,
  //     title: "Supplement Review & Recommendations",
  //     content: "Evaluation of current supplements and recommendations for additional supplements based on nutritional needs and health goals."
  //   },
  //   {
  //     id: 10,
  //     title: "Lifestyle Modification Strategies",
  //     content: "Personalized recommendations for sleep improvement, stress management techniques, physical activity guidelines, and mindfulness practices."
  //   },
  //   {
  //     id: 11,
  //     title: "Progress Tracking & Follow-up Sessions",
  //     content: "Regular check-ins to monitor progress, address challenges, celebrate successes, and adjust recommendations as needed to ensure continued progress."
  //   },
  //   {
  //     id: 12,
  //     title: "Long-term Maintenance Plan",
  //     content: "Development of sustainable strategies and habits to maintain results after the initial program ends, including ongoing support options and resources."
  //   }
  // ];


  const reviews = [
    {
      id: 1,
      text: "A 24 year old client presented with high bilirubin, liver fat, and alcohol BP issues with a goal of fat loss and restored health.",
      details: "I work (place)exercise, nutrition and stress management top into our recommendations and this is allowing her to control their lifestyle habits. The program was designed for her individual needs with diet and nutrition."
    },
    {
      id: 2,
      text: "A 45 year old client presented with severe fatigue, severe with a goal of increasing energy.",
      details: "By working on inflammation, food allergies, and nutrient absorption, we were able to increase energy levels. A custom diet plan focusing on gut health and inflammation reduction proved very effective."
    },
    {
      id: 3,
      text: "A 35 year old client wanted to improve athletic performance and recovery times.",
      details: "Through targeted nutrition planning and supplement protocols, we helped reduce recovery time by 40% and improve overall performance metrics within 8 weeks."
    }
  ];


  const healthPrograms = [
    {
      program: "Shape up program",
      conditions: ["Weight loss", "Weight gain / Muscle gain"],
      oneMonth: "Rs 3999/-",
      threeMonth: "Rs 8999/-",
      sixMonth: "Rs 12999/-"
    },
    {
      program: "Hormonal imbalance program",
      conditions: ["PCOS/ PCOD", "Infertility/ Thyroid"],
      // oneMonth: "Rs 3999/-",
      // threeMonth: "Rs 8999/-",
      // sixMonth: "Rs 12999/-"
    },
    {
      program: "Gut Health program",
      conditions: ["GERD, Heartburn, Acidity", "Digestion issues/ Constipation", "Bloating Gas & Flatulence"],
      // oneMonth: "Rs 3999/-",
      // threeMonth: "Rs 8999/-",
      // sixMonth: "Rs 12999/-"
    },
    {
      program: "Metabolic disorder program",
      conditions: ["Type 2 Diabetes, Mellitus", "Cholesterol, Hypertension"],
      // oneMonth: "Rs 3999/-",
      // threeMonth: "Rs 8999/-",
      // sixMonth: "Rs 12999/-"
    },
    {
      program: "Maternal Program",
      conditions: ["Pregnancy, Lactation,", "Pregnancy induced diabetes"],
      // oneMonth: "Rs 3999/-",
      // threeMonth: "Rs 8999/-",
      // sixMonth: "Rs 12999/-"
    },
    {
      program: "Client specific diet",
      conditions: ["Vegan diet, Ketogenic diet,", "Lactose intolerant/ Gluten free"],
      // oneMonth: "Rs 3999/-",
      // threeMonth: "Rs 8999/-",
      // sixMonth: "Rs 12999/-"
    },
    {
      program: "Neurological Disorders",
      conditions: ["Alzheimer's/ Parkinson"],
      // oneMonth: "Rs 3999/-",
      // threeMonth: "Rs 8999/-",
      // sixMonth: "Rs 12999/-"
    },
    {
      program: "Clinical Plans",
      conditions: [
        "Diabetes on Insulin/ BS,",
        "IBD (Crohn's & Ulcerative",
        "Colitis), Peptic & Duodenal",
        "Ulcers, Bile reflux,",
        "Malabsorption, Pancreatitis,",
        "Cancer, COPD, Kidney",
        "disorders, Liver disorders,",
        "Epilepsy"
      ],
      oneMonth: "Rs 4999/-",
      threeMonth: "Rs 9999/-",
      sixMonth: "Rs 14999/-"
    },
    {
      program: "Auto-Immune Disorders",
      conditions: [
        "Rheumatoid Arthritis,",
        "Ankylosing Spondylitis,",
        "Psoriasis, Lupus",
        "Sjogren's syndrome,",
        "Multiple Sclerosis (MS)"
      ],
      // oneMonth: "Rs 4999/-",
      // threeMonth: "Rs 9999/-",
      // sixMonth: "Rs 14999/-"
    }
  ];






  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="nutri-diet-container">
      <nav className="navbar">
        <button className="menu-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <div className="logo-container">
          <div className="lotus-logo">
            {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C14.5 5 15 8 15 12C15 16 13.5 19 12 22C10.5 19 9 16 9 12C9 8 9.5 5 12 2Z" fill="white"/>
              <path d="M2 12C5 9.5 8 9 12 9C16 9 19 10.5 22 12C19 13.5 16 15 12 15C8 15 5 14.5 2 12Z" fill="white"/>
              <path d="M4.93 4.93C8.46 4.93 10.5 7.5 12 12C13.5 16.5 12.79 19.07 16.32 19.07C12.79 19.07 10.5 16.5 9 12C7.5 7.5 8.46 4.93 4.93 4.93Z" fill="white"/>
              <path d="M19.07 4.93C15.54 4.93 13.5 7.5 12 12C10.5 16.5 11.21 19.07 7.68 19.07C11.21 19.07 13.5 16.5 15 12C16.5 7.5 15.54 4.93 19.07 4.93Z" fill="white"/>
            </svg> */}
          </div>

          <div className="nutri-logo">
            <img src={headericon} alt="Nutri Diet Clinic Logo" />
          </div>
        </div>

        <button className="profile-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </button>

        {/* <button className="menu-toggle">
          <span className="menu-icon"></span>
        </button>
        <div className="logo-container">
          <InnerNavComponent abc={Locate} />
          <div className="logo-divider"></div>
        </div>
        <button className="account-button">
        </button> */}
      </nav>

      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Transform Your Health
            <br />
            with Personalized Nutrition❤️
          </h1>
          <p className="hero-subtitle">
            {`Balance your diet effortlessly with TYI's Nutri Diet Clinic`}
            <br />
            where yogic wisdom meets modern nutrition for a healthier you.
          </p>

          <div className="customers-section">
            <div className="avatars">
              <img src={follower} alt="Community" />
            </div>
            <span className="customer-count">430+ Happy Customers</span>

          </div>

          <button className="pricing-btn">
            See our pricing plan
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>

        <div className="hero-image-container">
          <div className="food-plate">
            <img src={nutridiet_img} alt="Healthy Food Plate" className='nutridiet_img' />
          </div>
        </div>
      </div>


      <div className="nutri-diet-benefit">

        <h2 className="title">
          Why Choose the <span className="highlight">Nutri - Diet Clinic</span>
        </h2>

        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="icon-container">
              <div className="benefitcard">
                <img src={benefitcard} alt="" />
              </div>
            </div>
            <h3>Holistic Approach:</h3>

            <span className='benefitp'>
              This 100-year legacy of holistic health meets contemporary nutrition practices,
              focusing on the well-being of your body, mind, and spirit.
            </span>
          </div>

          <div className="benefit-card">
            <div className="icon-container">
              <div className="benefitcard">
                <img src={benefitcard} alt="" />
              </div>
            </div>
            <h3>Personalized Plans:</h3>
            <span className='benefitp'>
              Our experts craft customized nutrition strategies tailored to your unique health
              goals and lifestyle.
            </span>
          </div>

          <div className="benefit-card">
            <div className="icon-container">
              <div className="benefitcard">
                <img src={benefitcard} alt="" />
              </div>
            </div>
            <h3>Sustainable Habits:</h3>
            <span className='benefitp'>
              We go beyond temporary diets, emphasizing lasting, practical eating habits
              that can easily become part of your daily life.
            </span>
          </div>

          <div className="benefit-card">
            <div className="icon-container">
              <div className="benefitcard">
                <img src={benefitcard} alt="" />
              </div>
            </div>
            <h3>Affordable for All:</h3>
            <span className='benefitp'>
              {` Good health shouldn't be a luxury. Our budget-friendly plans ensure wellness is
            accessible to everyone. `}
            </span>
          </div>

          <div className="benefit-card centered-card">
            <div className="icon-container">
              <div className="benefitcard">
                <img src={benefitcard} alt="" />
              </div>
            </div>
            <h3>Balanced and Practical Solutions:</h3>
            <span className='benefitp'>
              Seamlessly blending traditional recipes with simple, homemade solutions, our
              approach fits even the busiest schedule, making healthy choices both realistic
              and achievable.
            </span>
          </div>
        </div>
      </div>

      {/* <div className="highlights-container">
        <h2 className="highlights-title">
          Highlight of <span className="highlights-clinic-name">Nutri - Diet Clinic</span>
        </h2>
        
        <div className="highlights-grid">
          <div className="highlight-card">
            <div className="highlight-image-container">
              <img src={saladPlateImage} alt="Healthy salad plate" className="saladPlateImage" />
            </div>
            <div className="highlight-content">
              <h3 className="highlight-heading">Ahar (Diet & Nutrition)</h3>
              <p className="highlight-tagline">{`"Fuel for the Soul"`}</p>
              <p className="highlight-description">
                (Emphasizing food as nourishment beyond just the body)
              </p>
            </div>
          </div>
          
          <div className="highlight-card">
            <div className="highlight-image-container">
              <img src={saladPlateImage} alt="Healthy salad plate" className="saladPlateImage" />
            </div>
            <div className="highlight-content">
              <h3 className="highlight-heading">Vihar (Lifestyle & Routine)</h3>
              <p className="highlight-tagline">{`"Flow of Life"`}</p>
              <p className="highlight-description">
                (Capturing the essence of movement, relaxation, and daily habits)
              </p>
            </div>
          </div>
          
          <div className="highlight-card">
            <div className="highlight-image-container">
              <img src={saladPlateImage} alt="Healthy salad plate" className="saladPlateImage" />
            </div>
            <div className="highlight-content">
              <h3 className="highlight-heading">Achar (Discipline & Conduct)</h3>
              <p className="highlight-tagline">{`"Rhythm of Actions"`}</p>
              <p className="highlight-description">
                (Highlighting the impact of daily behavior and ethics)
              </p>
            </div>
          </div>
          
          <div className="highlight-card">
            <div className="highlight-image-container">
              <img src={saladPlateImage} alt="Healthy salad plate" className="saladPlateImage" />
            </div>
            <div className="highlight-content">
              <h3 className="highlight-heading">Vichar (Thoughts & Mindset)</h3>
              <p className="highlight-tagline">{`"Echoes of the Mind"`}</p>
              <p className="highlight-description">
                (Reflecting on how thoughts shape our reality)
              </p>
            </div>
          </div>
        </div>
        
        <div className="highlights-wave"></div>
      </div> */}

      {/* <div className="highlights-container">
        <h2 className="highlights-title">
          Highlight of  <span className="highlights-clinic-name"> Nutri - Diet Clinic</span>
        </h2>
        <div className="highlights-grid">
          {highlightsData.map((item, index) => (
            <div key={index} className="highlight-card">
              <div className="highlight-image-container">
                <img src={saladPlateImage} alt="Healthy salad plate" className="saladPlateImage" />
              </div>
              <div className="highlight-content">
                <h3 className="highlight-heading">{item.title}</h3>
                <p className="highlight-tagline">{`"${item.tagline}"`}</p>
                <p className="highlight-description">({item.description})</p>
                {/* <img src={highlightunderline} alt="Underline" className="highlight-underline" /> */}
      {/* <img src={highlightunderline} alt="" classname="highlightunderline"/>   */}
      {/* </div>
              <div className='highlights-line'></div>
           
            </div> */}
      <div className="highlights-container">
        <h2 className="highlights-title">
          Highlight of <span className="highlights-clinic-name">Nutri - Diet Clinic</span>
        </h2>
        <div className="highlights-grid">
          {highlightsData.map((item, index) => (
            <div key={index} className="highlight-card">
              <div className="highlight-image-container">
                <img src={saladPlateImage} alt="Healthy salad plate" className="saladPlateImage" />
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
        {/* Wave background at the bottom */}

      </div>

      <div className="highlights-wave">
        <img src={greenbackground} alt="Wave background" />
      </div>

      <div className="transformation-container">
        <div className="journey-header">
          <h2>Your Structured Health <span className="highlight-text">Transformation journey</span></h2>
        </div>

        <div className="journey-content">
          {/* The central timeline SVG */}
          <div className="timeline-svg-container">
            <img src={timeline} alt="Journey Timeline" className="timeline-svg" />
          </div>

          {/* All journey cards positioned around the timeline */}
          <div className="journey-cards-container">
            {/* Card 1 */}
            <div className="journey-card left-card" id="card-1">
              {/* <div className="card-number">1</div> */}
              <div className="card-content">
                <h3>Enrollment</h3>
                <p>Enrollment and Appointment Scheduling</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="journey-card right-card" id="card-2">
              {/* <div className="card-number">2</div> */}
              <div className="card-content">
                <h3>Consultation Call</h3>
                <p>Detailed 1 hour long comprehensive consultation call to understand your Physical, Mental and Emotional needs for holistic health.</p>
                <p>(Mode: Offline | Online)</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="journey-card left-card" id="card-3">
              {/* <div className="card-number">3</div> */}
              <div className="card-content">
                <h3>Body Analysis</h3>
                <p><strong>For offline consultations:</strong></p>
                <p>Body composition analysis to understand the weight, muscle mass & fat mass %, visceral fat, body age and more.</p>
                <p><strong>For online clients:</strong></p>
                <p>Body measurements: height, weight, waist, and hip circumference, BMI</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="journey-card right-card" id="card-4">
              {/* <div className="card-number">4</div> */}
              <div className="card-content">
                <h3>Biomedical Insights</h3>
                <p>Review medical reports including CBC, Lipid Profile, Liver Function Tests, Iron Function Tests, Vitamin D, and Vitamin B12 levels.</p>
                <p>If recent medical examinations have not been taken, health plan options should ideally be couple within three to six months.</p>
                <p><em>Disclaimer: Pathological tests are not included in our service and must be conducted independently by client.</em></p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="journey-card left-card" id="card-5">
              {/* <div className="card-number">5</div> */}
              <div className="card-content">
                <h3>Detailed Client History</h3>
                <p>Health background, Medical history (e.g. past illness), allergies, or chronic conditions, Dietary preferences, and Current medication use.</p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="journey-card right-card" id="card-6">
              {/* <div className="card-number">6</div> */}
              <div className="card-content">
                <h3>Holistic Health Assessment</h3>
                <p>Lifestyle factors, Sleep patterns, Stress levels, Physical Activities, Hydration, Eating habits and food preferences.</p>
              </div>
            </div>

            {/* Card 7 */}
            <div className="journey-card left-card" id="card-7">
              {/* <div className="card-number">7</div> */}
              <div className="card-content">
                <h3>Dietary Habits Analysis</h3>
                <p>Detailed record of dietary choices and processing meal timing, portion sizes, and frequency of nutrient-dense versus processed foods to identify gaps and areas for improvement.</p>
              </div>
            </div>

            {/* Card 8 */}
            <div className="journey-card right-card" id="card-8">
              {/* <div className="card-number">8</div> */}
              <div className="card-content">
                <h3>Personalized Dietary Recommendations & Tailored Meal Plan</h3>
                <p>Custom nutrition guidance based on your health goals, preferences, and specific dietary requirements to optimize your wellbeing.</p>
              </div>
            </div>

            {/* Card 9 */}
            <div className="journey-card left-card" id="card-9">
              {/* <div className="card-number">9</div> */}
              <div className="card-content">
                <h3>Supplement Review & Recommendations</h3>
                <p>Evaluation of current supplements and recommendations for additional supplements based on nutritional needs and health goals.</p>
              </div>
            </div>

            {/* Card 10 */}
            <div className="journey-card right-card" id="card-10">
              {/* <div className="card-number">10</div> */}
              <div className="card-content">
                <h3>Lifestyle Modification Strategies</h3>
                <p>Personalized recommendations for sleep improvement, stress management techniques, physical activity guidelines, and mindfulness practices.</p>
              </div>
            </div>

            {/* Card 11 */}
            <div className="journey-card left-card" id="card-11">
              {/* <div className="card-number">11</div> */}
              <div className="card-content">
                <h3>Progress Tracking & Follow-up Sessions</h3>
                <p>Regular check-ins to monitor progress, address challenges, celebrate successes, and adjust recommendations as needed to ensure continued progress.</p>
              </div>
            </div>

            {/* Card 12 */}
            <div className="journey-card right-card" id="card-12">
              {/* <div className="card-number">12</div> */}
              <div className="card-content">
                <h3>Long-term Maintenance Plan</h3>
                <p>Development of sustainable strategies and habits to maintain results after the initial program ends, including ongoing support options and resources.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="transformation-footer">
          <div className="footer-intro">
            <p className="intro-text">
              By following this structured, holistic process, we offer a comprehensive and
              client-focused approach to achieving <span className="highlightintro">optimal health and wellness</span>.
            </p>
          </div>


          <button className="contact-button">Contact US</button>



          {/* <div className="contact-details">
          <div className="contact-item">
            <div className="icon-wrapper">
              <i className="contact-icon phone-icon">📞</i>
            </div>
            <div className="contact-text">
              <span className="contact-label">For Appointments:</span>
              <span className="contact-value">+91-9967429896</span>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="icon-wrapper">
              <i className="contact-icon email-icon">✉️</i>
            </div>
            <div className="contact-text">
              <span className="contact-label">Email ID:</span>
              <span className="contact-value">nutrition@myprogrowth.in</span>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="icon-wrapper">
              <i className="contact-icon calendar-icon">📅</i>
            </div>
            <div className="contact-text">
              <span className="contact-label">Working Days:</span>
              <span className="contact-value">Monday to Saturday<br />(Sunday is closed)</span>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="icon-wrapper">
              <i className="contact-icon clock-icon">🕒</i>
            </div>
            <div className="contact-text">
              <span className="contact-label">Working Timings:</span>
              <span className="contact-value">10 am to 6 pm IST</span>
            </div>
          </div>
        </div> */}
          <div className="contact-container">
            <div className="contact-item">
              <span className="icon"><img src={phoneicon} alt="" /></span>
              <span className="label">For Appointments :</span>
              <span className="value">+91-9967429596</span>
            </div>

            <div className="contact-item">
              <span className="icon"><img src={phoneicon} alt="" /></span>
              <span className="label">Email ID :</span>
              <a href="mailto:nutridiet@theyogainstitute.in" className="value">
                nutridiet@theyogainstitute.in
              </a>
            </div>

            <div className="contact-item">
              <span className="icon"><img src={phoneicon} alt="" /></span>
              <span className="label">Working Days :</span>
              <span className="value">Monday to Saturday <br /> (Sunday is closed) </span>

              {/* <span className="note">(Sunday is closed)</span> */}
            </div>

            <div className="contact-item">
              <span className="icon"><img src={phoneicon} alt="" /></span>
              <span className="label">Working Timings :</span>
              <span className="value">10 am to 6 pm IST</span>
            </div>
          </div>

        </div>

        <div className="footer-terms">
          <h3 className="terms-heading">→ Terms and conditions:</h3>

          <ol className="terms-list" type="a">
            <li>We kindly request our overseas clients to schedule consultation calls in alignment with Indian business hours for seamless communication and support. Thank you for your understanding and cooperation.</li>
            <li>Please note that all fees are non-refundable and non-transferable under any circumstances.</li>
            <li>The results may vary according to the age, genetics, medical conditions, physical activity and gender, and diet compliance.</li>
            <li>For the successful execution of the program, we kindly advocate to timely adherence, as we may not be able to accommodate any gaps/inconveniences due to non-compliance.</li>
          </ol>
        </div>
      </div>


      {/* <div className="transformation-container">
      <div className="journey-header">
        <h2>Your Structured Health <span className="highlight-text">Transformation journey</span></h2>
      </div> */}

      {/* Import and use the timeline SVG as the main visual */}
      {/* <div className="timeline-container">
        <img src={timeline} alt="Transformation Journey Timeline" className="timeline-svg" />
      </div> */}

      {/* Display all 12 cards in a grid layout */}
      {/* <div className="journey-cards">
        {journeySteps.map((step) => (
          <div key={step.id} className="journey-card">
            <div className="card-number">{step.id}</div>
            <div className="card-content">
              <h3>{step.title}</h3>
              {step.content.split('\n').map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div> */}

      {/* <div className="health-plan-container">
        <div className="health-plan-header">
          <div className="logo-container">
            {/* <div className="logo-circle t">T</div>
            <div className="logo-circle s">S</div> */}
      {/* </div>
          <h2 className="health-plan-title">Health plan Investments</h2>
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
              <tr>
                <td>Shape up program</td>
                <td>
                  <p>Weight loss</p>
                  <p>Weight gain / Muscle gain</p>
                </td>
                <td>Rs 3999/-</td>
                <td>Rs 8999/-</td>
                <td>Rs 12999/-</td>
              </tr>
              <tr>
                <td>Hormonal imbalance program</td>
                <td>
                  <p>PCOS/ PCOD</p>
                  <p>Infertility/ Thyroid</p>
                </td>
                <td>Rs 3999/-</td>
                <td>Rs 8999/-</td>
                <td>Rs 12999/-</td>
              </tr>
              <tr>
                <td>Gut Health program</td>
                <td>
                  <p>GERD, Heartburn, Acidity</p>
                  <p>Digestion issues/ Constipation</p>
                  <p>Bloating Gas & Flatulence</p>
                </td>
                <td>Rs 3999/-</td>
                <td>Rs 8999/-</td>
                <td>Rs 12999/-</td>
              </tr>
              <tr>
                <td>Metabolic disorder program</td>
                <td>
                  <p>Type 2 Diabetes, Mellitus</p>
                  <p>Cholesterol, Hypertension</p>
                </td>
                <td>Rs 3999/-</td>
                <td>Rs 8999/-</td>
                <td>Rs 12999/-</td>
              </tr>
              <tr>
                <td>Maternal Program</td>
                <td>
                  <p>Pregnancy, Lactation,</p>
                  <p>Pregnancy induced diabetes</p>
                </td>
                <td>Rs 3999/-</td>
                <td>Rs 8999/-</td>
                <td>Rs 12999/-</td>
              </tr>
              <tr>
                <td>Client specific diet</td>
                <td>
                  <p>Vegan diet, Ketogenic diet,</p>
                  <p>Lactose intolerant/ Gluten free</p>
                </td>
                <td>Rs 3999/-</td>
                <td>Rs 8999/-</td>
                <td>Rs 12999/-</td>
              </tr>
              <tr>
                <td>Neurological Disorders</td>
                <td>
                  <p>{`Alzheimer's/ Parkinson`}</p>
                </td>
                <td>Rs 3999/-</td>
                <td>Rs 8999/-</td>
                <td>Rs 12999/-</td>
              </tr>
              <tr>
                <td>Clinical Plans</td>
                <td>
                  <p>Diabetes on Insulin/ BS,</p>
                  <p>{`IBD (Crohn's & Ulcerative`}</p>
                  <p>Colitis), Peptic & Duodenal</p>
                  <p>Ulcers, Bile reflux,</p>
                  <p>Malabsorption, Pancreatitis,</p>
                  <p>Cancer, COPD, Kidney</p>
                  <p>disorders, Liver disorders,</p>
                  <p>Epilepsy</p>
                </td>
                <td>Rs 4999/-</td>
                <td>Rs 9999/-</td>
                <td>Rs 14999/-</td>
              </tr>
              <tr>
                <td>Auto-Immune Disorders</td>
                <td>
                  <p>Rheumatoid Arthritis,</p>
                  <p>Ankylosing Spondylitis,</p>
                  <p>Psoriasis, Lupus</p>
                  <p>{`Sjogren's syndrome,`}</p>
                  <p>Multiple Sclerosis (MS)</p>
                </td>
                <td>Rs 4999/-</td>
                <td>Rs 9999/-</td>
                <td>Rs 14999/-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="health-plan-footer">
          <div className="footer-cta">
            <span className="heart-icon">❤️</span>
            <p>Start Your Personalized Health Journey!</p>
          </div>
          <div className="footer-buttons">
            <button className="btn btn-select">Choose Your Package<span className="arrow-down">▼</span></button>
            <button className="btn btn-select">Choose Your Program<span className="arrow-down">▼</span></button>
            <button className="btn btn-enroll">Enroll Now</button>
          </div>
        </div>
      </div> */}


      <div className="health-plan-container">
        <div className="health-plan-header">

          <h2 className="health-plan-title">check our<span className='plantitle'>Health plan Investments </span></h2>
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
                    {typeof program.conditions === 'string' ?
                      program.conditions.split('\n').map((condition, condIndex) => (
                        <div key={condIndex} className="condition-line">{condition}</div>
                      ))
                      :
                      // Fallback if conditions is not a string
                      <div className="condition-line">{String(program.conditions)}</div>
                    }
                  </td>
                  <td>{program.oneMonth}</td>
                  <td>{program.threeMonth}</td>
                  <td>{program.sixMonth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>



        <div className="health-plan-footer">
          <div className="footer-cta">
            <span className="heart-icon">❤️</span>
            <p>Start Your Personalized Health Journey!</p> <br />
            <span>Select your program & package to begin your transformation.</span>
          </div>
          <div className="footer-buttons">
            <button className="btn btn-select">Choose Your Package<span className="arrow-down">▼</span></button>
            <button className="btn btn-select">Choose Your Program<span className="arrow-down">▼</span></button>
            <button className="btn btn-enroll">Enroll Now</button>
          </div>
        </div>
      </div>



      <div className='diet-container'>
        <div className="nutritionist-container">
          <div className="header">
            <div className="logo-container">
              <div className="logo">
                {/* <span className="logo-letter t">T</span>
              <span className="logo-letter s">S</span> */}
              </div>
            </div>
            <h1 className="main-title">
              <span className="meet-our">meet our</span><span className='diettitle'>Nutritionist and Dietician</span>
            </h1>
          </div>

          <div className="cards-container">
            <div className="profile-card">
              <div className='nurtition'>
                <img src={Nutritionist} alt='' />
              </div>
              <div className="profile-details">
                <h2 className="profile-name">Vinita Ashok Salunke (Sr. Nutritionist)</h2>
                <h3 className="profile-title">Qualifications</h3>
                <ul className="qualifications-list">
                  <li>MSc. Food Science and Nutrition</li>
                  <li>PG Diploma in Sports and Dietetics</li>
                  <li>Certified Diabetes Educator</li>
                  <li>NESTA Advance Nutrition Training program course</li>
                  <li>VLCC Level 2 Weight Management and Wellness</li>
                  <li>Experience: 5+ years</li>
                </ul>
              </div>
            </div>

            <div className="profile-card">
              <div className='dietician'>
                <img src={Dietician} alt='' />
              </div>
              <div className="profile-details">
                <h2 className="profile-name">Samma Sanjay Nagda <br /> (Clinical Dietician)</h2>
                <h3 className="profile-title">Qualifications</h3>
                <ul className="qualifications-list">
                  <li>BHMS, Certified Nutrition and Dietetics</li>
                  <li>Psychonutrition Practitioner</li>
                  <li>Certified Diabetes Educator</li>
                  <li>ICMR, NESA Diet Coach</li>
                  <li>Experience: 3+ years</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="client-reviews-container">
        <h2 className="reviews-title">our <span className="highlightreview">Client Reviews</span></h2>

        <div className="reviews-slider-container">
          {/* <Swiper
            spaceBetween={10}
            slidesPerView={3} // Adjust slidesPerView for better readability
            loop={true}
            onSlideChange={handleSlideChange}
            
          >
            {reviews.map((review, index) => (
        <SwiperSlide
          key={review.id}
          className={`swiper-slide ${
            activeIndex === index
              ? 'fade'
              : activeIndex === (index - 1 )  ||
                activeIndex === (index + 1) 
              ? 'active'
              : 'fade-right'
          }`}
        >
          <div className="review-card">
            <p className="review-text">{review.text}</p>
            <p className="review-details">{review.details}</p>
          </div>
        </SwiperSlide>
            ))}
          </Swiper> */}
            <Swiper
        ref={swiperRef}
        spaceBetween={10}
        slidesPerView={3}
        loop={true}
        onSlideChange={handleSlideChange}
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={review.id}
            className={`swiper-slide ${
              activeIndex === index
                ? "fade"
                : activeIndex === index - 1 || activeIndex === index + 1
                ? "active"
                : "fade-right"
            }`}
          >
            <div className="review-card">
              <p className="review-text">{review.text}</p>
              <p className="review-details">{review.details}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
          {/* <div className="reviews-slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {reviews.map((review) => (
              <div className="review-card" key={review.id}>
                <div className="review-content">
                  <p className="review-text">{review.text}</p>
                  <p className="review-details">{review.details}</p>
                </div>
              </div>
            ))}
          </div> */}
        </div>

        {/* <div className="slider-controls">
          <button className="slider-arrow prev" onClick={prevSlide}>
            &#10094;
          </button>
          <div className="slider-dots">
            {reviews.map((_, index) => (
              <span
                key={index}
                className={`slider-dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              >
                {index === currentSlide ? "•••••" : "•"}
              </span>
            ))}
          </div>
          <button className="slider-arrow next" onClick={nextSlide}>
            &#10095;
          </button>
        </div> */}
        <div className="slider-controls">
        <button className="slider-arrow prev" onClick={() => swiperRef.current.swiper.slidePrev()}>
          &#10094;
        </button>
        <div className="slider-dots">
          {reviews.map((_, index) => (
            <span
              key={index}
              className={`slider-dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => swiperRef.current.swiper.slideTo(index)}
            >
              {index === activeIndex ? "•••••" : "•"}
            </span>
          ))}
        </div>
        <button className="slider-arrow next" onClick={() => swiperRef.current.swiper.slideNext()}>
          &#10095;
        </button>
      </div>
    
      </div>

      <div className="client-wave">
        <img src={greenbackground} alt="Wave background" />
      </div>

      <div className="social-proof-container">
        <h2 className="social-proof-title">our <span className="highlight">Social Proof</span></h2>



        <div className="social-proof-card">
          <img src={footericon} alt="" className='footericon' />
          <div className="social-proof-content">

            <h3 className="social-proof-heading">Fuel Your Body. Transform Your Life.</h3>
            <p className="social-proof-text">Join the thousands of people who have found better health and a new lease on life today.</p>
            <div className="social-icons">
              <a href="#" className="social-icon facebook">

                <img src={fb} alt="" />

              </a>
              <a href="#" className="social-icon instagram">

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

      <div className="health-journey-container">
        <h2 className="journey-title">Start Your Personalized Health Journey!</h2>

        <div className="journey-buttons">
          <button className="journey-button outline">
            Choose Your Package
          </button>
          <button className="journey-button filled">
            Choose Your Program
          </button>
          <button className="journey-button accent">
            Email Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NutriDietHero;