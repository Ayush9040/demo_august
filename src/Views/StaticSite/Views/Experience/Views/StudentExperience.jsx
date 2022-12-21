import React from 'react'
import InnerNavComponent from '../../../Components/InnerNavComponent'
import { listData2 } from '../Constants/data'
import AlumniCarousel from '../../../Components/AluminiCarousel'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../../Constants/metaData.json'
import { useLocation } from 'react-router-dom'
import './style.scss'


const StudentExperience = () => {

  const location = useLocation()

  const StudentExp = {
    title:'student-experience',
    color:'orange',
    menuColor:'orange',
    menuItems:[]
  }
  return (
    <>
      { metaDataObj[location.pathname] && 
        <Helmet
          title={metaDataObj[location.pathname || '']?.title || ''}
        /> }
      <div>
        <InnerNavComponent abc={ StudentExp } />
        <div className="banner-container">
          <div className="experience-banner-heading">
          The Yoga Institute Students Experience
            <div className="experience-bottom-line"></div>
          </div>
        </div>
        <div className="centered">
          <section className="cards">
            {listData2.map((data) => (
              <div className="carding" key={data.name}>
                <div className="left">
                  {' '}
                  <img className='student-img' src={data.image} alt={data.name} />
                </div>
                <div className="right">
                  <p className="heading">{data.name}</p>
                  <span>{data.designation}</span>
                  <p className="content">{data.message}</p>
                </div>
              </div>
            ))}
          </section>
          <AlumniCarousel />
        </div>
      </div>
    </>
  )
}

export default StudentExperience