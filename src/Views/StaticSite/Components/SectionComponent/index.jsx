import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import { useLocation, useNavigate } from "react-router-dom";

const SectionComponent = ({
  page,
  image,
  title,
  description,
  url,
  sectionId,
}) => {


  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/donation-form");
  };

  return (
    <div id={`${sectionId}`}>
      <div className="content-container pd-career">
        <div className="image-content">
          <img src={image} alt={title} />
        </div>
        <div className="text-content-right right-container">
          <div className="text-part">
            <div className="banner-heading">
              <div className='donate_fixes'>
              <div>
              <h1>
                {url ? <Link to={url}>{title}</Link> : <>{title}</>}
                

                {/* {title} */}
                
              </h1>
              <div className="bottom-line"></div>
            </div>
            {location.pathname === "/social-initiatives" && (
                  <button
                    onClick={handleClick}
                    className='donate_btn'
                    style={{
                      backgroundColor: '#CA4625',
                      color: '#FFFFFF',
                      padding: '0.5rem 1.25rem',
                      fontSize: '1.8rem',
                      marginLeft: '1rem',
                      borderRadius: '5rem',
                      fontWeight: 'bold',
                      borderColor: '#CA4625',
                      border: 'none'

                    }}
                  >
                    Donate
                  </button>
                )}
              </div>
              </div>
            <p>{description}</p>
          </div>
          {page === 'donation' ? (
            <Link to={url ? url : ''}>
              <button className="donate-button-new">Donate</button>
            </Link>
          ) : (
            <button className="donate-button-new">Gift Now</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default SectionComponent
