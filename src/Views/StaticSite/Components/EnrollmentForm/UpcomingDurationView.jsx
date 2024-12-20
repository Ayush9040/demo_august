import React,{ useEffect, useState } from 'react'
//import baseDomain, { background } from '../../assets/images/imageAsset'
import './popup.scss'
//import CommonBanner from '../Common-banner'
//import baseDomain, { background } from '../../assets/images/imageAsset'
import InnerNavComponent from '../InnerNavComponent'
import '../EnrollmentForm/formstyles.scss';
import './formstyles.scss'
import { useNavigate  } from 'react-router-dom'; 
import { useSelector } from 'react-redux';

const UpcomingDurationView = ({ pageDate, setCourseDuration, setCourseDurationSelected, closeModal, setShowDefaultDuration, setNotShowDuration, formData, setFormData, durationList, createEndDate,  setCaptureEndDate, values,courseDuration}) => {

    const [selectedDate, setSelectedDate] = useState(null);
    const { isLoggedIn } = useSelector((state) => state.auth)
    const [courseMode, setCourseMode] = useState('');
    const navigate = useNavigate();

  let tnc = {
    title: 'alumni-gallery',
    color: 'orange',
    menuColor: 'black',
    menuItems:[]
  }


  useEffect(()=>{
    scrollTo(0,0)
  },[])

  useEffect(() => {
    // Check the conditions for online and onCampus
    if (pageDate?.online && pageDate?.onCampus) {
      setCourseMode('Online & OnCampus');
    } else if (pageDate?.online) {
      setCourseMode('Online');
    } else if (pageDate?.onCampus) {
      setCourseMode('OnCampus');
    } else {
    //   setCourseMode('Unknown Mode');  // Default if none are true
    }
  }, [pageDate]);

   // Function to remove ordinal suffixes and format the date
   const formatDate = (date) => {
    return date.replace(/\b(\d+)(th|nd|rd|st)\b/, '$1'); // Removes 'th', 'nd', 'rd', 'st'
  };

  // Handle the date selection
  const handleDateSelect = (date) => {
    console.log('date Nowwwwwww', date)
    setSelectedDate(date);
    // setCourseDateInfo(date);
    
  };

  
   // Handle enrollment button click
   const handleEnrollClick = () => {
    const dateToPass = selectedDate ? selectedDate : 'null';
    isLoggedIn ? navigate(`/enrollment/${pageDate.key}/?date=${encodeURIComponent(dateToPass)}`) : navigate(`/user/sign-in?location=${pageDate.key}/?date=${encodeURIComponent(dateToPass)}`);
  };



  // let termsAndCondition =
  //   'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only ve centuries, but also the leap into elec- tronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  return (
    <>
      <div className='terms-container'>
        {/* <InnerNavComponent abc={tnc} /> */}
        {/* <div className='banner-heading' style={{ textAlign: 'left', margin: '0px' }}>
            Upcoming Dates
     
        </div> */}
      </div>
      <form className="residential-form check_course check_date popup_enroll_date" style={{ width: '100%'}}>
            <div className="last_radio_button " style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>

                {
                    durationList?.map((item, index) => {
                        return (
                            <div key={index} className='date_btn'>
                                <div className='wrapper_center'>
                                <label class="item-label item_date" style={{ width: '100%', height: '100%', borderRadius: '50px' }}>
                            <input class="item-input"
                              type="radio" name="mode"
                              value={item?.value}
                              aria-labelledby="delivery-0-name"
                              aria-describedby="delivery-0-shipping delivery-0-price"
                              onChange={(e) => {
                                console.log('date Nowwwwwww', e.target.value)
                                setCourseDuration(item.label)
                                setCourseDurationSelected(true)
                                console.log('date Nowwwwwww', item.label)
                                if (e.target.checked) {
                                  setCaptureEndDate(item?.value)
                                  createEndDate(values.startDate, item?.value)
                                  // setFormData({
                                  //   ...formData,
                                  //   sdate: item.label
                                  // })
                                }
                                setShowDefaultDuration(false)
                                setNotShowDuration(false)
                                handleDateSelect(item)
                                closeModal()
                              }}
                              checked={courseDuration==item.label}
                        
                              />
                            <span class="item-info item_desc">
                              <span id="delivery-0-name" class="item-name date_info"><span className='style_dates'>{item.label}</span></span>
                              <br />    
                              {/* <small id="delivery-0-shipping" class="item-shipping">5–10 business days</small> */}
                            </span>
                            
                            <strong id="delivery-0-price" class="item-price"></strong>
                          </label>
                                </div>
                            </div>
                        )
                    })
                }
              
                
                 

              
            </div>

            

          </form>

          {/* <div className='date_enroll_btn'>
            <button className={!selectedDate ? 'date_enroll_btn_txt before_date_select' : 'date_enroll_btn_txt after_date_select'} onClick={handleEnrollClick} disabled={!selectedDate}>Enroll Course <img style={{marginLeft: '8px'}} src='/images/enroll_btn_icon.svg' /></button>
          </div> */}
      {/* <div className='terms-and-conditions'>
        {data.map((value) => {
          return (
            <div key={value.heading}>
              <h2>{value.heading}</h2>
              <p>{value.points}</p>
            </div>
          )
        })}
       
      </div> */}
    </>
  )
}

export default UpcomingDurationView
