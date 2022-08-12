import React, { useEffect, useState } from 'react'
import InnerNavComponent from '../InnerNavComponent'
import GridComponent from '../GridComponent'
import { useParams } from 'react-router-dom'
import { data } from '../../Views/About/Constants/data'
import './style.scss'

const OurLegacyModal = (  ) => {

  const { name } = useParams()

  const ourLegacyModal = {
    title:'our-legacy-modal',
    color:'orange',
    menuColor:'orange',
    menuItems:[]

  }



  const [ pageData,setPageData] = useState({})


  useEffect(()=>{
    setPageData(data.find(point=>(name === point.route)))
  },[])


  return (
    <>
      <InnerNavComponent abc={ ourLegacyModal } />
      <div className="our-legacy-modal">
        <div className="about-details-container">
          <div className="detail-main-image">
            <img src={pageData.leftImg} alt={pageData.name} />
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
            <img src={pageData.rightImg} alt={pageData.name}  />
          </div>
        </div>
        <GridComponent altName={pageData?.name} imgs={pageData.gallery} />
      </div>
    </>
  )
}

export default OurLegacyModal
