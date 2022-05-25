import React, { useEffect } from 'react'
import CommonBanner from '../../Components/Common-banner'
import './style.scss'
import SectionComponent from '../../Components/SectionComponent/index'
//import baseDomain,{ giftingAssets } from '../../assets/images/imageAsset'
//import GiftingImg from '../../assets/images/gifting2a-02.png'
import baseDomain, {
  background,
  giftingAssets,
} from '../../assets/images/imageAsset'

const Gifting = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  // const [payment, setPayment] = useState()
  // const [details, setDetails] = useState()

  // const confirmPayment = () => {
  //   if (payment > 0) {
  //     setDetails(true)
  //   } else {
  //     setDetails(false)
  //   }
  // }

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
          //bannerImg={GiftingImg}

          bannerImg={`${baseDomain}${background.gifting}`}
          overlay="#FF0000"
        />
        <SectionComponent
          page="Gifting"
          image={baseDomain + giftingAssets.careerAssets}
          title="Gift Career"
          description={
            'Gift a Career is a special and brilliant way to assist someone to become self-reliant. Gifting your loved ones or someone in need of a direction, any of the Institute    transformational teacher training courses will provide them with a guiding light toward a successful and sufficient earning career path. Explore the extensive range of basic, intermediate, and advanced courses available to assist someone in becoming a certified yoga instructor. '
          }
        />
        <SectionComponent
          page="Gifting"
          image={baseDomain + giftingAssets.healthAssets}
          title="Gift health & wellness"
          description={
            'The best gift we can ever give is the gift of health. Health is not simply the absence of disease; it is more profoundly the presence of well-being, balance, and contentment. The Institutes signature 7-Day Health Camp or 21-Day Better Living Course is a wonderful gift to nurture the health and wellness of our loved ones. Sign up your parents, grandparents, friends, relatives, or coworkers to assist them in overcoming any physical discomforts, mental stress, or emotional tension and enjoy a Healthy & Happy Life.'
          }
        />
        <SectionComponent
          page="Gifting"
          image={baseDomain + giftingAssets.widsomassets}
          title="Gift wisdom"
          description={
            'They say you can’t buy wisdom. They’re right! But you can surely give the gift of wisdom. Browse through our extensive collection of books. Some of our titles are Yoga Sutras of Patanjali, Recipes of Happiness, Sattvik Cooking, Yoga for Back and Joint Disorders, and many more. Our publications offer exhaustive options that range from vedic philosophy, principles of yoga to modern fusion recipes with a healthy twist. Choose now!'
          }
        />
        <SectionComponent
          page="Gifting"
          image={baseDomain + giftingAssets.nispandAssets}
          title="Gift Nispand"
          description={
            'Give someone you love the gift of peace, calm and utter bliss with Nispand. Nispand has the worlds largest collection of more than 1000 guided meditation sessions. These help you with stress management, insomnia, relationships, emotions, work-productivity, lifestyle diseases and a host of modern lifestyle challenges. Gift Nispand subscription and grant your family member, friend or colleague to experience precious moments of mental peace amidst their hectic lives.'
          }
        />
      </div>
    </>
  )
}

export default Gifting
