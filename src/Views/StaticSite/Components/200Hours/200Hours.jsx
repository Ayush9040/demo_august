import React, { useEffect, useRef, useState } from 'react'
import './200Hours.scss'
import Facilities from './subCOmponents/Facilities'
import CourseCurriculum from './subCOmponents/CourseCurriculum'
import Benefits from './subCOmponents/Benefits'
import Certifications from './subCOmponents/Certifications'
import YogaTeacher from './subCOmponents/YogaTeacher'
import Interaction from './subCOmponents/Interaction'
import RegisterForm from './subCOmponents/RegisterForm'
import Legacy from './subCOmponents/Legacy'
import Faq from './subCOmponents/Faq'
import Reviews from './subCOmponents/Reviews'
import CoveredTopics from './subCOmponents/CoveredTopics'
import ModalRight from './subCOmponents/ModalRight'
import CourseCaters from './subCOmponents/courseCaters'

// import { collection, getDocs, query, where } from 'firebase/firestore';
// import { db } from '../../../firebaseConfig';


const Hours200 = () => {

    const [isBatchComparison, setIsBatchComparison] = useState(true);
    const [isView, setIsView] = useState(true);
    const registerFormRef = useRef(null);
    const phaseOneRef = useRef(null);
    const [courseFee, setCourseFee] = useState(0)
    const [joinedCount, setJoinedCount] = useState(0)

    const benefitsRef = useRef();
    const curriculumRef = useRef();
    const legacyRef = useRef();
    const faqRef = useRef();
    const [isLoaded, setIsloaded] = useState(true);
    const [isOdd, setIsOdd] = useState(false); // remove after fixing functionality
    const isMobile = window.innerWidth > 500
    const [width, setWidth] = useState(window.innerWidth);
    const containerRef = useRef(null);
    const [batchHover, setBatchHover] = useState(null);

    const [courses, setCourses] = useState([
        {
            batchType: "7 Months Advanced Teacher Training Course",
            duration: "07 Months",
            mode: "Online & On Campus",
            language: "English",
            startDate: "14th Oct 2024",
            timing: "Evening: 5:00pm - 8:00pm",
            days: "Monday - Saturday"
        },
        {
            batchType: "1 Year Advanced Teacher Training Course",
            duration: "12 Months",
            mode: "Online",
            language: "English",
            startDate: "14th Oct 2024",
            timing: "Afternoon: 1.30pm - 4pm",
            days: "Monday - Friday"
        },
        {
            batchType: "2 Year Advanced Teacher Training Course",
            duration: "24 Months",
            mode: "On Campus",
            language: "English",
            startDate: "14th Oct 2024",
            timing: "Morning: 7am - 9am & Evening: 4.30pm - 8.00 pm",
            days: "Saturday - Sunday"
        },
        {
            batchType: "4 Month Advanced Teacher Training Course",
            duration: "04 Months",
            mode: "Online & On Campus",
            language: "English",
            startDate: "14th Oct 2024",
            timing: "Weekends: Sat: 4.30pm -7.30pm Sun : 9:30 am - 1.30 pm",
            days: "Monday - Saturday"
        },
        {
            batchType: "3 Month Advanced Teacher Training Course",
            duration: "07 Months",
            mode: "Online & On Campus",
            language: "English",
            startDate: "14th Oct 2024",
            timing: "Afternoon: 1.30pm - 4pm",
            days: "Saturday - Sunday"
        },
        {
            batchType: "2 Month Advanced Teacher Training Course ",
            duration: "07 Months",
            mode: "Online & On Campus",
            language: "English",
            startDate: "14th Oct 2024",
            timing: "Afternoon: 1.30pm - 4pm",
            days: "Monday - Saturday"
        },
    ])

    const [commonStates, setCommonStates] = useState({
        formIndex: 1,
        selectedCourseId: null,
        selectedCourseIndex: null,
        selectedTimingIndex: null,
        selectedCourse: null,
        selectedTiming: null,
        selectedCourseMode: null,
        tc: false,
        name: '',
        contact: '',
        email: '',
        city: '',
        customerId: null,
        dialCode: 91,
        courseSubscriptionId: null,
        orderId: null,
        currency: 'INR',
        amount: 0
    })//used for all common states

    const [timeDiff, setTimeDiff] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });


    useEffect(() => {

        getRandomNumber();

        const target = registerFormRef.current;
        const targetPhaseOne = phaseOneRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsView(false);
                    }
                    else {
                        setIsView(true);
                    }
                });
            },
            { threshold: 0 } // Adjust this threshold as needed
        );

        if (target) {
            observer.observe(target);
        }

        if (targetPhaseOne) {
            observer.observe(targetPhaseOne);
        }


        // Cleanup the observer on component unmount
        return () => {
            if (target || targetPhaseOne) {
                observer.unobserve(target);
            }
        };

    }, [width]);


    const navigateRegister = () => {
        const section = document.getElementById('registerLink');
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    const getRandomNumber = () => {
        setJoinedCount(Math.floor(Math.random() * (100 - 20 + 1)) + 20)
    }

    const openLink = (url) => {

        window.open(url, '_blank', 'noopener,noreferrer');

    }


    return (
        <div className='layout-view Hours-200' ref={containerRef}>

            <div className='phase-1'>

                <div className="nav-mobile">
                    <img src="/icons/200-hours/mobile-title.svg" alt="" />
                </div>

                <div className='registration-header'>

                    <div className='p1-content-wrap'>
                        <div className='certification-heading'>Became an International <span className='text-gradient days'>Certified</span> Yoga Teacher </div>
                        <div className='header-label'>From the world’s oldest organized yoga centre!</div>
                    </div>

                    <div className='p1-video-wrap'>
                        <img className='p1r-img'
                            src='https://oss-lms-prod.s3.ap-south-1.amazonaws.com/200ttc-master/herosection.jpeg'
                            alt=""
                        />
                    </div>

                </div>

            </div>

            {
                !isBatchComparison &&
                <div className="phase-2">

                    <div className="p2-wrap">

                        <div className="p2-header-wrap">
                            <div className="p2-heading text-gradient">Batch Comparison</div>

                            <div className="compare-btn text-gradient" onClick={() => setIsBatchComparison(true)}>
                                <img src="/icons/200-hours/astangaBtn.svg" />  Available Batches
                            </div>
                        </div>

                        <div className="p2-description">
                            Our Teacher Training course is designed to fit your schedule.
                            Choose from our flexible batch options.
                        </div>

                        <div className="compare-btn-mob text-gradient" onClick={() => setIsBatchComparison(true)}>
                            <img src="/icons/200-hours/astangaBtn.svg" />  Available Batches
                        </div>

                        <div className='table-layout-wrap'>

                            <div className="table-layout">

                                <div className="t-row-1">
                                    <div className="batch batch-cmn1">
                                        {""}
                                    </div>

                                    {
                                        courses.map((batch, index) => (

                                            <div className="batch" key={index}>
                                                <span className='batch-item'>Batch - {index + 1}</span>
                                            </div>

                                        ))
                                    }

                                </div>

                                <div className="t-row-2">

                                    <div className="empty-row-1">
                                        <div className='asatanga-cell'>
                                            <img className='asatanga-img-lg' src="/icons/200-hours/astangaBtn.svg" alt="" />
                                        </div>

                                        <div className="tr-sec tr-sec1-2 sec-grey">Duration</div>
                                        <div className="tr-sec">Mode</div>
                                        <div className="tr-sec sec-grey">Language</div>
                                        <div className="tr-sec">Start Date</div>
                                        <div className="tr-sec sec-grey">Timing</div>
                                        <div className="tr-sec tr-sec6-1">Days</div>
                                    </div>

                                    {/* <div className="shadow-space-wrap shadow-mob">
                                        <div className="sw-title-shadow"></div>
                                        <div className="with-shadow"></div>
                                        <div className="with-out-shadow"></div>
                                        <div className="with-shadow"></div>
                                        <div className="with-out-shadow"></div>
                                        <div className="with-shadow"></div>
                                        <div className="with-out-shadow"></div>
                                    </div> */}

                                    {
                                        courses.map((batch, index) => (
                                            <>

                                                <div className="empty-row-2" key={index}>
                                                    <div className='tr-sec title bgImg-r2'>
                                                        <div className='batch-lang'>{batch?.batchType}</div>
                                                        {/* <div className='batch-price'>₹{batch?.onlinePrice}</div> */}
                                                    </div>
                                                    <div className="tr-sec2 sec-grey-tr2 months ">{batch?.duration}</div>
                                                    <div className="tr-sec2 batch-mode">{batch?.mode}</div>
                                                    <div className="tr-sec2 sec-grey-tr2 language">{batch?.language}</div>
                                                    <div className="tr-sec2 start-date">{batch?.startDate}</div>
                                                    <div className="tr-sec2 sec-grey-tr2 timings">{batch?.timing}</div>
                                                    <div className="tr-sec2 days">{batch?.days}</div>
                                                </div>

                                                <div className="shadow-space-wrap">
                                                    <div className="sw-title-shadow"></div>
                                                    <div className="with-shadow"></div>
                                                    <div className="with-out-shadow"></div>
                                                    <div className="with-shadow"></div>
                                                    <div className="with-out-shadow"></div>
                                                    <div className="with-shadow"></div>
                                                    <div className="with-out-shadow"></div>
                                                </div>
                                            </>
                                        ))
                                    }

                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            }

            <div className="phases-wrap">

                <div className="left-phase">

                    <div className="phase-3">

                        {
                            isBatchComparison &&
                            //    Available Batches 
                            <div className='l1-wrap'>

                                <div className="p3-top-bar">
                                    <div className="p3-title text-gradient">Available Batches</div>

                                    <div className="compare-btn text-gradient" onClick={() => setIsBatchComparison(false)}>
                                        <img src="/icons/200-hours/astangaBtn.svg" /> Compare Batches
                                    </div>

                                </div>

                                <div className="p3-description">
                                    Our 200-hour course is designed to fit your <br />
                                    schedule. Choose from our flexible batch options
                                </div>

                                <div className="compare-btn-mob text-gradient" onClick={() => setIsBatchComparison(false)}>
                                    <img src="/icons/200-hours/astangaBtn.svg" /> Compare Batches
                                </div>

                                <div className="batch-list-wrap">
                                    {
                                        courses.map((batch, index) => (
                                            <div
                                                onMouseEnter={() => setBatchHover(index)}
                                                // className={` ${(courses?.length - 1 == index && courses?.length % 2 != 0) === courses.length - 1 ? 'odd-last' : 'batch'}`}
                                                className={` ${!isMobile && courses?.length - 1 === index && courses?.length % 2 !== 0 ? 'odd-last' : 'even-batch'}`}
                                                key={index}
                                            >
                                                <div className='batch-top-wrap'>
                                                    <div className="batch-num-btn">Batch - {index + 1}</div>
                                                    <div className="online-batch-price">₹00 </div>
                                                </div>

                                                <div className="batch-name">{batch?.batchType}</div>

                                                <div className='batch-infos-wrap'>

                                                    <div className='batch-info-top'>

                                                        <div className="batch-info Duration">
                                                            <img className='asatanga-img' src="/icons/200-hours/batchIndexIcon.svg" alt="" />
                                                            <p className='batch-info-label'>
                                                                Duration:
                                                                <span className='batch-info-label-span'>{batch?.duration}</span>
                                                            </p>
                                                        </div>

                                                        <div className="batch-info Mode">
                                                            <img className='asatanga-img' src="/icons/200-hours/batchIndexIcon.svg" alt="" />
                                                            <p className='batch-info-label'>
                                                                Mode:
                                                                <span className='batch-info-label-span'>{batch?.mode}</span>
                                                            </p>
                                                        </div>

                                                        <div className="batch-info Language">
                                                            <img className='asatanga-img' src="/icons/200-hours/batchIndexIcon.svg" alt="" />
                                                            <p className='batch-info-label'>
                                                                Language:
                                                                <span className='batch-info-label-span'>{batch?.language}</span>
                                                            </p>
                                                        </div>

                                                    </div>

                                                    <div className='batch-info-mid'>
                                                        <div className="batch-info Start">
                                                            <img className='asatanga-img' src="/icons/200-hours/batchIndexIcon.svg" alt="" />
                                                            <p className='batch-info-label'>
                                                                Start Date:
                                                                <span className='batch-info-label-span'>{batch?.startDate}</span>
                                                            </p>
                                                        </div>

                                                        <div className="batch-info">
                                                            <img className='asatanga-img' src="/icons/200-hours/batchIndexIcon.svg" alt="" />
                                                            <p className='batch-info-label'>
                                                                Timings:
                                                                <span className='batch-info-label-span'>{batch?.timing}</span>
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="batch-info">
                                                        <img className='asatanga-img' src="/icons/200-hours/batchIndexIcon.svg" alt="" />
                                                        <p className='batch-info-label'>
                                                            Days:
                                                            <span className='batch-info-label-span'>{batch?.days}</span>
                                                        </p>
                                                    </div>

                                                    <div className="batch-reg-now-btn">
                                                        Register Now
                                                    </div>

                                                </div>

                                                {
                                                    batchHover == index &&
                                                    <div className="batch-over" onMouseLeave={() => setBatchHover(null)}>
                                                        <div className='batch-over-content'>
                                                            <div className="batch-indication">Batch -{index + 1}  </div>

                                                            <div className="batch-over-top">
                                                                <div className="batch-over-title">{batch?.batchType}</div>
                                                                <div className='batch-over-price'>₹{batch?.onlinePrice ? batch?.onlinePrice : "00"}</div>
                                                            </div>

                                                            <div className="batch-over-last-option">
                                                                <img className='asatanga-img' src="/icons/200-hours/batchIndexIcon.svg" alt="" />
                                                                <p className='batch-info-label'>
                                                                    Days:
                                                                    <span className='batch-info-label-span'>{batch?.days}</span>
                                                                </p>
                                                            </div>

                                                            <div
                                                                className="batch-over-reg-btn"
                                                                onClick={() => {
                                                                    console.log('course data', batch);
                                                                    setCommonStates(prevData => ({
                                                                        ...prevData,
                                                                        selectedCourseId: batch?.id,
                                                                        selectedCourseIndex: index,
                                                                        selectedCourse: batch,
                                                                        selectedTiming: batch?.['date-lang'],
                                                                        selectedTimingIndex: batch,
                                                                        selectedCourseMode: null
                                                                    }));
                                                                    navigateRegister()
                                                                }
                                                                }>View Details</div>

                                                        </div>
                                                    </div>
                                                }

                                            </div>
                                        ))

                                    }
                                </div>

                            </div>
                        }

                        {/* Topics Covered */}
                        <CoveredTopics />

                    </div>

                    {/* Facilities of the Institute */}
                    <Facilities />

                    {/* course caters */}
                    <div className='phase-16'>
                        <div className='p16-heading' id='curriculumLink'>This course caters to</div>
                        <CourseCaters />
                    </div>

                    {/* Course Curriculum */}
                    <div ref={curriculumRef}>
                        <CourseCurriculum />
                    </div>

                    {/* Benefits From the Course */}
                    <div ref={benefitsRef}>
                        <Benefits />
                    </div>

                    {/* Certifications */}
                    <Certifications />

                    {/* Life of a Yoga Teacher */}
                    <YogaTeacher />

                    {/* Special Interaction */}
                    <Interaction />

                    {/*REGISTER FORM */}
                    {/* <div ref={registerFormRef}>
                        <RegisterForm courseFee={courseFee} formStates={{ ...commonStates }} />
                    </div> */}

                    {/* Our Legacy */}
                    <div ref={legacyRef}>
                        <Legacy />
                    </div>

                    {/* FAQ(frequently asked question) */}
                    <div ref={faqRef}>
                        <Faq />
                    </div>

                    {/* Reviews */}
                    <Reviews />

                </div>

                <div className="right-phase">
                    <ModalRight joinedCount={joinedCount} />
                </div>


                <div className='footer-200'>
                    <img src="/icons/200-hours/social1.svg" alt="" className='brn-logo' />
                    <div className='privacy-policy'> &copy; 2024 The Yoga Institute | <a target="_blank" rel="noreferrer" href='https://www.theyogainstitute.org/privacy-policy'>Privacy Policy</a>  </div>
                    <div className="icons">
                        <img onClick={() => openLink('https://www.facebook.com/share/feyc4ub1tcBAFZsc/?mibextid=LQQJ4d')} src="/icons/200-hours/social5.svg" alt="fb" />
                        <img onClick={() => openLink('https://www.instagram.com/theyogainstituteofficial?igsh=b3Nsb3F4ODZkNjJj&utm_source=qr')} src="/icons/200-hours/social4.svg" alt="insta" />
                        <img onClick={() => openLink('https://x.com/tyi_official?s=21&t=T2LMGtqIP3HmAomXLos8YA')} src="/icons/200-hours/social3.svg" alt="x" />
                        <img onClick={() => openLink('https://www.linkedin.com/company/theyogainstituteofficial/')} src="/icons/200-hours/social2.svg" alt="linkedIn" />
                    </div>
                </div>

            </div>

            {/* {
                isView &&
                <div className='mobile-register-block'>

                    <div className='container'>

                        <div className='space-between'>
                            <div className='challenge'>200 Hour Basic Teacher Training Course</div>
                            <div className='page-base-reg-btm' onClick={navigateRegister}>Register Now</div>
                        </div>

                        <img className='brand-logo' src="/icons/200-hours/brand-logo.svg" alt="" />

                        <div className='space-between ftr'>
                            <div><img src="/icons/200-hours/attended-mob.svg" alt="contribution" />Contribution: ₹999</div>
                            <div><img src="/icons/200-hours/attended-mob.svg" alt="contribution" />Attended: 200,000+</div>
                        </div>
                    </div>

                </div>

            } */}



        </div >
    )
}

export default Hours200
