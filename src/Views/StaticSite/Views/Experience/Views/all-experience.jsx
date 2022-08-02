import { useEffect } from 'react'
import CommonBannerNavPrimary from '../../../Components/CommonBannerNavPrimary'
import { listData, listData1 } from '../Constants/data'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../../Constants/metaData.json'
import './style.scss'
import { useLocation } from 'react-router-dom'

const AllExperience = () => {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      { metaDataObj[location.pathname] && 
    <Helmet
      title={metaDataObj[location.pathname || '']?.title || ''}
    /> }

      <div>
        <CommonBannerNavPrimary />
        <div className="banner-container">
          <div className="experience-banner-heading">
          The Yoga Institute Experience
            <div className="experience-bottom-line"></div>
          </div>
        </div>
        <div className="centered">
          <section className="cards">
            {listData.map((data) => (
              <div className="carding" key={data.name}>
                <div className="left">
                  {' '}
                  <img src={data.image} alt={data.name}/>
                </div>
                <div className="right">
                  <p className="heading">{data.name}</p>
                  <span>{data.designation}</span>
                  <p className="content">{data.message}</p>
                </div>
              </div>
            ))}
          </section>
          <section className="cards">
            {listData1.map((data) => (
              <div className="carding" key={data.name}>
                <div className="left">
                  {' '}
                  <img src={data.image} alt={data.name} />
                </div>
                <div className="right">
                  <p className="heading">{data.name}</p>
                  <span>{data.designation}</span>
                  <p className="content">{data.message}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  )
}

export default AllExperience
