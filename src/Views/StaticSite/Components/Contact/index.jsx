import React, { useState, useEffect } from 'react'
import CommonBanner from '../Common-banner'
import './style.scss'
import { Link } from 'react-router-dom'
import InputComponent from '../../Components/InputComponent'
import PhoneInput from 'react-phone-number-input'
import { validateEmail } from '../../../../helpers'
import InnerNavComponent from '../InnerNavComponent'
import CommonBtn from '../../Components/commonbtn'
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { parsePhoneNumber, isValidPhoneNumber } from 'libphonenumber-js';
import { cmsBaseDomain } from '../../../../Constants/appSettings'
import { useSelector } from 'react-redux'
import MessageModal from '../MessageModal'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import baseDomain, {
    certificates,
    background,
  } from '../../assets/images/imageAsset'
import { mobile } from '../../assets/icons/icon'


const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        city: '',
        country: '',
        dob: '',
        gender: '',
        contact: '',
        email: '',
        getMessage: '',
        preferedLanguage: '',
        noOfSessionsRequired: '',
        noOfPersons: '',
        PreferedDayAndTime: '',
        anyOtherComments: '',
        days: [],
        // course: courseMode,
        mode: '',
      })
      const [values, setValues] = useState([])
      const [selectedDays, setSelectedDays] = useState([]);
      const [selectedTime, setSelectedTime] = useState(''); 
      const [empty, setEmpty] = useState(0)
      const [countryFlag, setCountryFlag] = useState('IN');
      // const [dialCode, setDialCode] = useState('');
      const [ modal,setModal ]=useState(false)
      const [phoneNumber, setPhoneNumber] = useState({ dialCode: '', mobile: '' })
  
  
  //     const handlePhoneChange = (value) => {
  //   // setPhoneValue(value);
  //   if (value) {
  //     const phoneNumber = parsePhoneNumber(value);
  //     setPhoneNumber({ dialCode: phoneNumber?.countryCallingCode, mobile: phoneNumber?.nationalNumber })

  //   }
  // };


  const handlePhoneChange = (value) => {
    if (value) {
      try {
        // Validate the phone number before parsing
        if (isValidPhoneNumber(value)) {
          const phoneNumber = parsePhoneNumber(value);
          setPhoneNumber({ dialCode: phoneNumber?.countryCallingCode, mobile: phoneNumber?.nationalNumber });
        } else {
          console.error("Invalid phone number format");
          setPhoneNumber({ dialCode: '', mobile: '' });
        }
      } catch (error) {
        if (error.message === 'TOO_SHORT') {
          console.error("Phone number is too short");
        } else {
          console.error("Error parsing phone number: ", error);
        }
        setPhoneNumber({ dialCode: '', mobile: '' });
      }
    } else {
      setPhoneNumber({ dialCode: '', mobile: '' });  // Reset if value is empty
    }
  };


    const Locate = {
        title: 'Contact us',
        color: 'white',
        menuColor: 'white',
        menuItems: [],
      }

      const nameFromRedux = useSelector((state) => state.auth.user.data?.firstName);
  const phoneNumberFromRedux = useSelector((state) => state.auth.user.data?.phoneNumber);
  const emailFromRedux = useSelector((state) => state.auth.user.data?.email);
  const dailCodes = useSelector((state) => state.auth.user.data?.dialCode);

      
  useEffect(() => {
    if (nameFromRedux) {
      setFormData((prev) => ({ ...prev, name: nameFromRedux }));
    }
    if (phoneNumberFromRedux) {
      setPhoneNumber({ dialCode: dailCodes, mobile: phoneNumberFromRedux });
      setFormData((prev) => ({ ...prev, contact: `+${dailCodes}${phoneNumberFromRedux}` }));
    }
    if (emailFromRedux) {
      setFormData((prev) => ({ ...prev, email: emailFromRedux }));
    }
    
    
  
  }, [nameFromRedux, phoneNumberFromRedux, emailFromRedux, setFormData]);


      const {
        name,
        address,
        dob,
        contact,
        email,
        noOfSessionsRequired,
        preferedLanguage,
        days,
        noOfPersons,
        PreferedDayAndTime,
        constraints,
      } = formData

    

      const handleEmpty = () => {
        let hasError = false;
        
        if (
          formData.name === '' ||
          formData.name === undefined ||
          formData.name === null
        ) {
           setEmpty(1)
           hasError = true;
        } else if (!validateEmail(formData.email)) {
           setEmpty(2)
           hasError = true;
        } else if (
          phoneNumber.mobile === '' ||
          phoneNumber.mobile.length < 6 ||
          phoneNumber.mobile.length > 15
        ) {
          console.log("phone number td ", phoneNumber.mobile);
           setEmpty(3)
           hasError = true;
        } else if (formData.getMessage === '') {
           setEmpty(8)
           hasError = true;
        } else {
          setEmpty(0)
          setFormData((prevFormData) => ({
            ...prevFormData,
            days: selectedDays.map((day) => day.value),
          }));
          handleSubmit()
        }
    
       
    
         // If no errors, submit the form data
         
    
          // console.log("Form Data:", formData);
      }
    
    
       const nagivate = useNavigate()
      const handleSubmit = async() => {
        // await handleEmpty()
        console.log('empty ', empty)
        if (empty !== 0) return
        try {
         
        //   await createHomeTution(formData)
          await axios.post(`${cmsBaseDomain}/contactUs`, {
            fullName: formData.name,
            comment: formData.getMessage,
            email: formData.email,
            dialCode: phoneNumber.dialCode,
            contactNo: phoneNumber.mobile
          })
          setModal('success')
        //   nagivate(`/enrollment_thankyou/${'Home Tuition course'}`)
        } catch {
          console.log('error')
        }
      }


      const handleClose = () => {
        nagivate('/');
      }


  
 
  return (
    <div className="contact_us_wrapper">
        <div className='contact_header'>
            
          <InnerNavComponent abc={Locate} />

          <div className='why-text banner-text_contact'>
              <div className='banner-heading'>
                Contact Us
                {/* <div className='bottom-line'></div> */}
              </div>
              <p className='banner_desc'>Our team is happy to answer any questions you have.
                <p className='contact_line_fixed'>Fill out the form below, and we’ll be in touch as soon as possible.</p></p>

              
            </div>
        
        </div>
     
        {/* contact div container */}

        <div className="contact_container">
            <div className="left_contact_container">
            <div className="form-field">
            <InputComponent
              type="text"
              placeholder="Full Name"
              value={name}
              form={formData}
              setField={setFormData}
              keyName="name"
              errorCheck={setEmpty}
            />
            {empty === 1 && <small style={{ color: 'red', float: 'right'}}> Please enter your name</small>}
          </div>
          <div className="form-field">
            <InputComponent
              type="email"
              placeholder="Email id"
              value={email}
              form={formData}
              setField={setFormData}
              keyName="email"
              errorCheck={setEmpty}
            />
            {empty === 2 && <small style={{ marginBottom: '0rem', float: 'right', color: 'red'}}> Please enter an valid E-mail</small>}
          </div>
          <div className="form-field phone_contact_input">
            <PhoneInput
              // type="number"
              placeholder="Mobile Number"
              value={phoneNumber.mobile}
              form={formData}
              setField={setFormData}
              keyName="contact"
              errorCheck={setEmpty} 
              defaultCountry={countryFlag?countryFlag:'IN'}
              onChange={(e) => {
                setFormData({ ...formData, mobile: e })
                handlePhoneChange(e)
              }}
              // onChange={(e) => {
              //   console.log('Phone input value: ', e);
                
              //   setFormData({ ...formData, contact: e })

                
              //   if (typeof e === 'string' && e.trim() !== '') {
              //       const phoneNumber = parsePhoneNumberFromString(e);
              //       if (phoneNumber) {
              //           console.log('Dial code: ', phoneNumber.countryCallingCode); // Extract dial code

              //           // setDialCode(phoneNumber.countryCallingCode); 
                        
              //       } 
              //   }
              // }}
             
            />
            
          </div>
          {empty === 3 && <div style={{ margin: '-0.75rem 0 0rem 0', textAlign: 'right', color: 'red', width: '100%'}}> Please enter your phone number</div>}
          <div className="text_area contact_text_box2">
        <textarea
          className="contact_text_box"
          placeholder="Tell us more about how can we help you...."
          type="text"
          rows="12"
          cols="49"
          onChange={(e) => {
            setFormData({
              ...formData,
              getMessage: e.target.value,
            })
          }}
        />
      </div>
      {empty === 8 && (
        <div style={{ width: '100%', margin: '-1rem', textAlign: 'end', color: 'red'}}> Please enter your Message</div>
      )}
          
          <div className="tutions_btn">
        <CommonBtn
          text={'Send Message'}
          buttonAction={handleEmpty}
          isColor={'#CF5335'}
        />
      </div>
      <div className="contact_us_popup">
      { modal!==false && (modal === 'success' ? <MessageModal type='Thank you for your submission!'  message='Our team will review your submission and get back to you within the next 24-48 hours. If you have any urgent queries, please feel free to contact us via mobile number or email' closePopup={ false } button={'Close'} buttonAction={handleClose} /> : <MessageModal type='ERROR' message='Sorry! Please contact info@theyogaintitute.org' closePopup={ setModal }/>) }
      </div>
            </div>
            <div className="right_contact_container">

                <div className="logo_container">
                    <img src="/images/lotus_logo_svg.svg" alt="" />
                </div>

                <div className="contact_right_desc">
                    <img src="/images/quotes_svg.svg" alt="" />
                    <div className=''>Established in 1918 by Shri Yogendraji, The Yoga Institute is the world&apos;s oldest government recognised Yoga Centre. The founder&apos;s vision and mission was to make Yoga accessible to each and everyone across the globe.</div>
                </div>

                <div className="contact_details">
                    <h3>Contact Information</h3>
                    <div className="email_container">
                        <div className="email_contact_img">
                            <img src="/images/mail_svg.svg" alt="" />
                        </div>
                        <div className="email_info">
                         info@theyogainstitute.org
                        </div>
                    </div>

                    <div className="email_container">
                        <div className="email_contact_img">
                            <img src="/images/phone_svg.svg" alt="" />
                        </div>
                        <div className="email_info">
                        +91-7738155500, +91-22-26110506, <br />+91-22-26103568
                        </div>
                    </div>

                    <div className="email_container">
                        <div className="email_contact_img">
                            <img src="/images/location_svg.svg" alt="" />
                        </div>
                        <div className="email_info">
                        Shri Yogendra Marg, Prabhat Colony, <br />
                        Santacruz East, Mumbai - 400055 India
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
