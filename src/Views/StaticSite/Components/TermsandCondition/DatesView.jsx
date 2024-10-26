import React,{ useEffect, useState } from 'react'
//import baseDomain, { background } from '../../assets/images/imageAsset'
import data from './data'
import './style.scss'
//import CommonBanner from '../Common-banner'
//import baseDomain, { background } from '../../assets/images/imageAsset'
import InnerNavComponent from '../InnerNavComponent'
import '../EnrollmentForm/formstyles.scss';
import { useNavigate  } from 'react-router-dom'; 
import { useSelector } from 'react-redux';

const DatesView = ({ pageDate }) => {

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
    setSelectedDate(date);
  };

  
   // Handle enrollment button click
   const handleEnrollClick = () => {
    const dateToPass = selectedDate ? selectedDate : 'null';
    isLoggedIn ? navigate(`/enrollment/${pageDate.key}/?date=${encodeURIComponent(dateToPass)}`) : navigate(`/user/sign-in/?location=${pageDate.key}/?date=${encodeURIComponent(dateToPass)}`);
  };



  // let termsAndCondition =
  //   'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only ve centuries, but also the leap into elec- tronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  return (
    <>
      <div className='terms-container'>
        {/* <InnerNavComponent abc={tnc} /> */}
        <div className='banner-heading' style={{ textAlign: 'left', margin: '0px' }}>
            Upcoming Dates
          {/* <div className='bottom-line'></div> */}
        </div>
      </div>
      <form className="residential-form check_course check_date" style={{ width: '100%'}}>
            <div className="last_radio_button " style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>

                {
                    pageDate?.dates.map((item, index) => {
                        return (
                            <div key={index} style={{ width: '48%' }}>
                                <div className='wrapper_center'>
                                <label class="item-label item_date" style={{ width: '100%', height: '100%', borderRadius: '12px' }}>
                            <input class="item-input"
                              type="radio" name="mode"
                              value={item}
                              aria-labelledby="delivery-0-name"
                              aria-describedby="delivery-0-shipping delivery-0-price"
                              onChange={() => handleDateSelect(item)}
                        
                              />
                            <span class="item-info item_desc">
                              <span id="delivery-0-name" class="item-name date_info"><img src='/images/dates.svg' /><span className='style_dates'>{item}</span></span>
                              <br />    
                              {/* <small id="delivery-0-shipping" class="item-shipping">5–10 business days</small> */}
                            </span>
                            <span class="item-info item_desc item_padding">
                              <span id="delivery-0-name" class="item-name date_info"><img src='/images/courseMode.svg' /><span className='style_dates'>{courseMode}</span></span>
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

          <div className='date_enroll_btn'>
            <button className={!selectedDate ? 'date_enroll_btn_txt before_date_select' : 'date_enroll_btn_txt after_date_select'} onClick={handleEnrollClick} disabled={!selectedDate}>Enroll Course <img style={{marginLeft: '8px'}} src='/images/enroll_btn_icon.svg' /></button>
          </div>
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

export default DatesView
