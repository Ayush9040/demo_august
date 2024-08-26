import React, { useRef } from 'react'
import NextButton from '../../../common/buttons/200daya/next';
import { useCallback, useState, useEffect } from 'react';
// import useRazorpay from "react-razorpay";
// import { collection, query, where, getDocs } from 'firebase/firestore';
// import { db } from "../../../../firebaseConfig";
// import { postRequest, putRequest } from "../../../../services/crud";
// import { courseSubscription, createPayment, paymentSuccess, checkRoomsAvailability, saveCustomer } from "../../../../services/endPoints";
import { useNavigate } from 'react-router-dom';
// import PaymentSuccessPopup from '../../../common/dialogs/200Hours/paymentSuccess';

const RegisterForm = ({ courseFee, formStates }) => {

    const [commonStates, setCommonStates] = useState({
        formIndex: 1,
        selectedCourse: formStates?.selectedCourse,
        selectedCourseId: formStates?.selectedCourseId,
        selectedCourseIndex: formStates?.selectedCourseIndex,
        selectedTimingIndex: formStates?.selectedTimingIndex,
        selectedTiming: formStates?.selectedTiming,
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
        amount: 0,
        totalAmount: 0,
    })//used for all common states

    const [courses, setCourses] = useState([])
    const [isLoad, setIsLoad] = useState(false);
    // const [isPopup, SetPopup] = useState(false);

    const targetRef = useRef();
    const courseRef = useRef();
    const residentialRef = useRef(null)
    const [residentialState, setResidentialState] = useState(null);
    const [courseModeState, setCourseModeState] = useState(null);
    const [roomsAvailability, setRoomsAvailability] = useState(null);
    const [roomPrice, setRoomPrice] = useState(null);
    const [selectedRoomTypePrice, setSelectedRoomTypePrice] = useState(null);
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {

        // Function to fetch data from Firestore
        // fetchCourses()
    }, [commonStates]);

    const clearForm = () => {
        setCommonStates({
            formIndex: 1, selectedCourseIndex: null, selectedTimingIndex: null,
            selectedCourse: null, selectedTiming: null, selectedCourseMode: null, tc: false,
            name: '', contact: '', email: '', city: '', customerId: null, dialCode: 91,
            courseSubscriptionId: null, orderId: null, currency: 'INR', amount: 0
        })
    }


    return (

        <div className="phase-10">
            <div className='form' id="registerLink" ref={targetRef}>
                <>
                    {/* {isPopup && <PaymentSuccessPopup onSendValue={handleValueFromChild} />} */}

                    <div className="form-head">REGISTER FORM</div>

                    <div className="steps">

                        <div className='info active'>
                            <span className='num'>1</span>
                            <span className='text text-gradient'>Personal Information</span>
                        </div>

                        <div className='separator'></div>

                        <div className={commonStates?.formIndex == 2 ? 'info active' : 'info in-active'}>
                            <span className='num'>2</span>
                            <span className='text'>Batch Selection</span>
                        </div>
                        <div className='separator'></div>
                        <div id="reg-step2" className='info in-active'>
                            <span className='num'>3</span>
                            <span className='text'>Payment</span>
                        </div>
                    </div>

                    <div className="hr-line"></div>

                    {
                        commonStates?.formIndex == 1 ?
                            <div className='personal-info'>

                                <div className="input-grid">

                                    <div className="input-block">
                                        <div className="label">Name<span className='required'>*</span></div>
                                        <div className="input">
                                            <input type="text" placeholder='Enter your name' value={commonStates?.name || ''} />
                                        </div>

                                    </div>

                                    <div className="input-block">
                                        <div className="label">Mobile Number<span className='required'>*</span></div>
                                        <div className="mobile-input">
                                            <select id="country-code" disabled>
                                                <option value="91" id='option'>91</option>
                                            </select>
                                            <input type="number" id="mobile-number" placeholder="Enter your mobile number" value={commonStates?.contact || ''} />
                                        </div>
                                    </div>

                                    <div className="input-block">
                                        <div className="label">Email<span className='required'>*</span></div>
                                        <div className="input"><input type="text" placeholder='Enter your email' value={commonStates?.email || ''} /></div>
                                    </div>

                                    <div className="input-block">
                                        <div className="label">City<span className='required'>*</span></div>
                                        <div className="input"><input type="text" placeholder='Enter your city name' value={commonStates?.city || ''} /></div>
                                    </div>

                                </div>

                                <div className='form-next-btn'>
                                    <NextButton
                                        text="Next"
                                        isLoad={isLoad} />
                                </div>

                            </div>
                            :

                            // Course selection
                            <div className='personal-info'>
                                <div className="input-course">
                                    <div className="input-block">

                                        <div className="label">Select Course Date<span className='required'>*</span></div>
                                        <div className="options-container">
                                            {
                                                courses.map((item, index) => (
                                                    <div key={index} className={index == commonStates.selectedCourseIndex ? 'course-option course-active' : 'course-option'}>
                                                        <span></span>
                                                        {item?.['date-lang']}
                                                    </div>
                                                    // }
                                                ))
                                            }
                                        </div>
                                        {
                                            commonStates?.selectedCourse &&
                                            <>
                                                <div className="sub-separator"></div>
                                                <div className="label">Select Course Mode<span className='required'>*</span></div>
                                                <div className="options-container">

                                                    {
                                                        (commonStates?.selectedCourse?.nonResidential || commonStates?.selectedCourse?.residential) &&
                                                        <div className={courseModeState == "On-campus" ? 'course-option course-active' : 'course-option'}
                                                        >
                                                            On-campus
                                                        </div>
                                                    }

                                                    {
                                                        commonStates?.selectedCourse?.online &&
                                                        <div className={courseModeState == "Online" ? 'course-option course-active' : 'course-option'}>Online</div>
                                                    }


                                                </div>
                                            </>
                                        }

                                        {
                                            courseModeState == "On-campus" &&
                                            <>
                                                <div className="sub-separator"></div>
                                                <div className="label">Select Residence Type<span className='required'>*</span></div>
                                                <div className="options-container">

                                                    {
                                                        (commonStates?.selectedCourse?.nonResidential || commonStates?.selectedCourse?.residential) &&
                                                        <div className={residentialState == "Non-Residential" ? 'course-option course-active' : 'course-option'}>Non-Residential</div>
                                                    }

                                                    {
                                                        commonStates?.selectedCourse?.online &&
                                                        <div className={residentialState == "Residential" ? 'course-option course-active' : 'course-option'} >
                                                            Residential
                                                        </div>
                                                    }


                                                </div>
                                            </>
                                        }

                                        {
                                            (!roomsAvailability?.triple && (residentialState == 'Residential')) &&
                                            <p className="no-room">*No rooms available at this time.</p>
                                        }

                                        {
                                            (roomsAvailability?.triple && (residentialState == 'Residential')) &&
                                            <>
                                                <div className="sub-separator"></div>
                                                <div className="label">Select Room Type <span className='required'>*</span>
                                                </div>

                                                <div className="options-container">

                                                    {
                                                        roomsAvailability?.triple &&
                                                        <div className={selectedRoomTypePrice?.sharingType == 3 ? 'course-option course-active' : 'course-option'} >
                                                            <span>Triple Sharing</span>
                                                        </div>
                                                    }

                                                </div>

                                            </>
                                        }

                                        {
                                            courseModeState == 'Online' &&
                                            <div className='total-Price'>
                                                <img src="/icons/200-hours/moneys.svg" alt="" />
                                                Total Price :<span>₹{commonStates?.selectedCourse?.onlinePrice}</span>
                                            </div>
                                        }

                                        {
                                            residentialState == 'Non-Residential' &&
                                            <div className='total-Price'>
                                                <img src="/icons/200-hours/moneys.svg" alt="" />
                                                Total Price :<span>₹{commonStates?.selectedCourse?.nonResidentialPrice}</span>
                                            </div>
                                        }

                                        {
                                            selectedRoomTypePrice?.amount && residentialState == 'Residential' &&
                                            <div className='total-Price'>
                                                <img src="/icons/200-hours/moneys.svg" alt="" />
                                                Total Price :
                                                <span>₹{commonStates?.selectedCourse?.residentialPrice}</span>
                                            </div>
                                            // : undefined
                                        }

                                        <div className="tc">
                                            <span>
                                                <input
                                                    value={commonStates?.tc}
                                                    type="checkbox"
                                                    className="pointer"
                                                    checked={commonStates?.tc}
                                                    onChange={(e) => {
                                                        setCommonStates(prevData => ({
                                                            ...prevData,
                                                            tc: e.target.checked
                                                        }));
                                                    }}
                                                />
                                            </span>
                                            <span> I agree and accept the <b>terms and conditions</b></span>
                                        </div>

                                    </div>
                                </div>

                                <div className='footer-btns'>
                                    <div className="back-btn200" >Back </div>

                                    {/* value='' */}
                                    <NextButton
                                        isLoad={isLoad}
                                        text="Proceed to payment"
                                        value={
                                            courseModeState == 'Online' &&
                                                (commonStates?.selectedCourse && commonStates?.selectedTiming && commonStates.selectedCourseMode && commonStates.tc) ? 'valid'
                                                :
                                                residentialState == 'Non-Residential' &&
                                                    (commonStates?.selectedCourse && commonStates?.selectedTiming && commonStates.selectedCourseMode && commonStates.tc) ? 'valid'
                                                    :
                                                    (residentialState == 'Residential' &&
                                                        selectedRoomTypePrice &&
                                                        (commonStates?.selectedCourse && commonStates?.selectedTiming && commonStates.selectedCourseMode && commonStates.tc)) ? 'valid'
                                                        : ''
                                        }
                                    />

                                </div>

                            </div>
                    }

                </>
            </div>
        </div >

    )
}

export default RegisterForm
