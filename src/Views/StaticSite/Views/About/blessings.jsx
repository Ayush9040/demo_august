import React from 'react'
import CommonBannerAboutUs from '../../Components/CommonBannerAboutUs'
import { graphql } from 'gatsby'
import Tyi from '../../assets/images/why_tyi.png'

const Blessings = ({ location }) => {
  console.log('tyi', Tyi)
  return (
    <>
      <div className="blessings-container">
        <CommonBannerAboutUs
          location={location}
          Logo={false}
          Navigation={true}
          PageType="blessings"
          BgImage={Tyi}
          Heading="Dr Hansaji’s Blessings"
          isOnlyBanner={false}
          innerNav={true}
          isBlessing={true}
        />
      </div>
    </>
  )
}

export default Blessings

export const career = graphql`
  fragment career on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    whttyi: file(relativePath: { eq: "why_tyi.png" }) {
      ...career
    }
  }
`
