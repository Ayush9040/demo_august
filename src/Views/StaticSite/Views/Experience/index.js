import CommonBannerNavPrimary from '../../Components/CommonBannerNavPrimary'
import { listData } from './data'
import './style.scss'

const AllExperience = () => {
  return (
    <div>
      <CommonBannerNavPrimary />
      <div className="banner-container">
        <div className="experience-banner-heading">
          Experience
          <div className="experience-bottom-line"></div>
        </div>
      </div>
      <div className="centered">
        <section className="cards">
          {listData.map((data) => (
            <div className="carding" key={data.name}>
              <div className="left">
                {' '}
                <img src={data.image} alt="img " />
              </div>
              <div className="right">
                <p className="heading">
                  {data.name} <br /> <span>{data.designation}</span>
                </p>
                <p className="content">{data.message}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default AllExperience
