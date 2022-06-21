import React, { useEffect, useState } from 'react'
import CommonBannerNavPrimary from '../CommonBannerNavPrimary'
import GridComponent from '../GridComponent'
import { useParams } from 'react-router-dom'
import { data } from '../../Views/About/Constants/data'
import './style.scss'

const OurLegacyModal = (  ) => {

  const { name } = useParams()



  const [ pageData,setPageData] = useState({})


  useEffect(()=>{
    setPageData(data.find(point=>(name === point.route)))
    console.log(data.find(point=>(name === point.route)),'member')
  },[])


  return (
    <>
      <CommonBannerNavPrimary />
      <div className="our-legacy-modal">
        <div className="about-details-container">
          <div className="detail-main-image">
            <img src={pageData.leftImg} alt="" />
          </div>
          <div className="detail-text">
            <div className="detail-top-text">
              <div className="detail-container-top">
                <div className="name-left">
                  {pageData.name}
                  <div className="bottom-line"></div>
                </div>
                <div className="position-right">
                  <p>{pageData.founder}</p>
                  <span className="position-year">{pageData.year}</span>
                  
                </div>
              </div>
              <p>{pageData?.desc && pageData?.desc[0]}</p>
              <p>{pageData?.desc && pageData?.desc[1]}</p>
            </div>
          </div>
        </div>

        <div className="about-details-container2">
          <div className="detail-text">
            <div className="detail-top-text">
              <p>{pageData?.desc && pageData?.desc[2]}</p>
              <p>{pageData?.desc && pageData?.desc[3]}</p>
            </div>
          </div>
          <div className="detail-main-image">
            <img src={pageData.rightImg} alt="" />
          </div>
        </div>
        <GridComponent imgs={pageData.gallery} />
      </div>
    </>
  )
}

export default OurLegacyModal
