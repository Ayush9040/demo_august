import React, { useState } from 'react'

import CommonBanner from '../../Components/Common-banner'
import './style.scss'
import SectionComponent from '../../Components/SectionComponent/index'
import baseDomain,{ giftingAssets } from '../../assets/images/imageAsset'

const Gifting = () => {
  const [payment, setPayment] = useState()
  const [details, setDetails] = useState()

  const confirmPayment = () => {
    if (payment > 0) {
      setDetails(true)
    } else {
      setDetails(false)
    }
  }

  return (
    <>
      <div className="gifting-main-container">
        <CommonBanner
          isLeftContent={false}
          Logo={false}
          Navigation={true}
          PageType="gifting"
          Heading="Gifting"
          isOnlyBanner={false}
          innerNav={false}
        />
        <SectionComponent
          page="Gifting"
          image={baseDomain + giftingAssets.careerAssets}
          title="Gift Career"
          description={`Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the 1500s, when an
unknown printer took a galley of type and scrambled it to
make a type specimen book. It has survived not only five
centuries, but also the leap into electronic typesetting,
remaining essentially unchanged. It was popularised in the
1960s with the release of Letraset sheets containing Lorem

Ipsum passages, and more recently with desktop publish-
ing software like Aldus PageMaker including versions of

Lorem Ipsum.`}
        />
        <SectionComponent
          page="Gifting"
          image={baseDomain + giftingAssets.careerAssets}
          title="Gift health & wellness"
          description={`Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the 1500s, when an
unknown printer took a galley of type and scrambled it to
make a type specimen book. It has survived not only five
centuries, but also the leap into electronic typesetting,
remaining essentially unchanged. It was popularised in the
1960s with the release of Letraset sheets containing Lorem

Ipsum passages, and more recently with desktop publish-
ing software like Aldus PageMaker including versions of

Lorem Ipsum.`}
        />
        <SectionComponent
          page="Gifting"
          image={baseDomain + giftingAssets.widsomassets}
          title="Gift wisdom"
          description={`Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the 1500s, when an
unknown printer took a galley of type and scrambled it to
make a type specimen book. It has survived not only five
centuries, but also the leap into electronic typesetting,
remaining essentially unchanged. It was popularised in the
1960s with the release of Letraset sheets containing Lorem

Ipsum passages, and more recently with desktop publish-
ing software like Aldus PageMaker including versions of

Lorem Ipsum.`}
        />
        <SectionComponent
          page="Gifting"
          image={baseDomain + giftingAssets.nispandAssets}
          title="Gift Nispand"
          description={`Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the 1500s, when an
unknown printer took a galley of type and scrambled it to
make a type specimen book. It has survived not only five
centuries, but also the leap into electronic typesetting,
remaining essentially unchanged. It was popularised in the
1960s with the release of Letraset sheets containing Lorem

Ipsum passages, and more recently with desktop publish-
ing software like Aldus PageMaker including versions of

Lorem Ipsum.`}
        />
      </div>
    </>
  )
}

export default Gifting
