import React, { useState, useEffect } from 'react'
import './style.scss'
//import baseDomain, { homeAssets } from '../../../assets/images/imageAsset'
import CsrModal from '../CsrModal'
import CsrBlock from '../data'
import { useParams } from 'react-router-dom'
//import { data } from '../../AluminiCarousel/data'
import InnerNavComponent from '../../InnerNavComponent'

const SingleCsr = () => {

  const csr={
    title:'single-csr',
    color:'orange',
    menuColor:'orange',
    menuItems:[]
  }
  const { csrId } = useParams()
  const [pageData, setPageData] = useState({})

  useEffect(() => {
    setPageData(CsrBlock.find((item) => item.id === csrId))
  }, [])



  const [showModal, setShowModal] = useState(false)
  return (
    <div className="csr-main-container">
      <InnerNavComponent abc={csr} />
      <div className="csr-heading">
        <h1>{pageData.title}</h1>
        <div className="csr-bottom-line"></div>
      </div>
      <div className="sub-div">
        <div className="sub-div-img">
          <img src={pageData.image} alt={pageData.title} />
        </div>
      </div>
      <div className="last-div">
        {pageData?.description?.map((item) => {
          return (
            <>
              <p>{item}</p>
            </>
          )
        })}
      </div>
      <div className="csr-single-btn">
        <button onClick={() => setShowModal(true)}> Support Us</button>
      </div>
      <CsrModal setShowModal={setShowModal} showModal={showModal} />
    </div>
  )
}

export default SingleCsr
