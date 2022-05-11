import React from 'react'
import CommonBanner from '../../Components/Common-banner'
// import values from '../../assets/images/values.png'
import './styles.scss'
import baseDomain,{ volunteerAssets } from '../../assets/images/imageAsset'

const Values = () => {
  return (
    <>
      <div className="Benefits-container">
        <CommonBanner
          isLeftContent={false}
          Logo={false}
          Navigation={true}
          PageType="Values"
          // BgImage={values}
          Heading="Values"
          isOnlyBanner={false}
          innerNav={true}
        />
      </div>
      <div className="content-container pd-career">
        <div className="text-content">
          <div className="banner-heading">
            <h1>Title</h1>
            <div className="bottom-line"></div>
          </div>
          <p>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.`}
          </p>
        </div>
        <div className="image-content">
          <img src={baseDomain+volunteerAssets.valuesAssets} />
        </div>
      </div>
    </>
  )
}

export default Values
