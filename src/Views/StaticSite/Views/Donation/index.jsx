import React from 'react'
import CommonBanner from '../../Components/Common-banner'
import './style.scss'
import './style.scss'
import SectionComponent from '../../Components/SectionComponent'
import baseDomain,{ donationAssets } from '../../assets/images/imageAsset'
const AnnamBramha = () => {
  const pageData = [
    {
      name: 'Anna Bhramam',
      description:
        'Annam Brahma, since 2018, has served more than 25, 00,000 meals, working 365 days a year.  We serve pure, satvik, hygienic meals twice a day. Many of those who share the joy of food with us do not have access to healthy food even once a day.  Annam Brahma strives to serve with the gift of healthy, nutritious meals all through the year and our aim is to serve ____________ meals a year, all across the city by ____________.',
    },
    {
      name: 'Truck Asan',
      description:
        'The transport and logistics industry is the backbone of any country and economy. Trucks get us everything we need; from food to fuel. However, the spinal and physical health of the truck-drivers is adversely affected by the very nature of their work. So we decided to bring wellness and the ease of Yoga to our truck-drivers who spend their lives on the road, serving us.  Truckasan is a Yoga Institute exclusive initiative that formulates Yoga solutions for the peculiar problems of the community. We have held _______sessions across the country and trained_________ drivers through this initiative.',
    },
    {
      name: 'Yoga for the Underprivileged',
      description:
        'Being exposed to harsh realities of life can be detrimental to the mental and physical health; with effects ranging from reduced life-spans to limited productivity and reduced earning capacity. The Yoga Institute has special outreach initiatives for the underprivileged to help them address the challenges unique to their situation.  We have conducted ________ sessions/ workshops for this objective. With a combined focus on physical and mental well-being we try to improve the lives of those on the margins, those who are often invisible.',
    },
    {
      name: 'Yoga for Transgender Community',
      description:
        'Inclusion is fundamental to Yoga and with this belief we take pride in introducing Yoga to the transgender community in Mumbai.  Our outreach programme for the transgender community applies the fundamentals of Yoga to address not only the physical challenges but also the mental challenges of anxiety disorders, mood-disorders, gender-identity anxiety etc among the transgender community. We have organized _________ sessions for members of the transgender community and continue to increase our efforts towards them.',
    },
    {
      name: 'Yoga for Children with special needs',
      description:
        'Children are the heart of The Yoga Institute. We believe that every child contains the seed of a vibrant future within him and it has been our constant effort to nurture this. We are even more committed to the growth and well-being of children with special needs. We dedicate our patient and persistent efforts to assist them with their health and well-being needs through our customized and curated courses for them.  We also conduct special sessions, workshops and programmes for parents, to help them better understand and fulfill their parenting roles. We have organized _____ sessions for special children and ____workshops for parents.Help us grow our specialized and custom-made Yoga programs for Children with Special Needs. They are our collective future!.',
    },
    {
      name: 'Underprivileged Children in BMC schools',
      description:
        'The Yoga Institute’s Scholarship Programs is aimed at transforming children’s lives by ensuring quality education and training them in the ways of yogic life. In association with BMC, The Yoga Institute educated 10000 students in 60 schools. And by 2025, the Institute aspires to adopt 500 schools, educating over 200000 lakh students. This initiative helps students focus on their studies better and achieve an overall balance in life.',
    },
    {
      name: 'Police',
      description:
        'The Mumbai Police Force is on its toes 24X7, 365 days a year protecting us all and serving the city selflessly. The high stress levels of their jobs expose them to various severe health concerns such as cardiac and coronary diseases, stress induced obesity, diabetes, blood-pressure etc.  The Yoga Institute has teamed up with Mumbai Police to train more than 13,000 men and women of the force in yoga techniques. This has helped them fight their daily stress-induced challenges, improve their overall physical health and become more focused and mindful.',
    },
  ]

  return (
    <>
      <div className='brahma-container'>
        <CommonBanner
          isLeftContent={false}
          Logo={false}
          Navigation={true}
          PageType='gifting'
          Heading='Donation'
          isOnlyBanner={false}
          innerNav={false}
        />
        <SectionComponent
          url='/donation/annam-brahma'
          image={baseDomain + donationAssets.annamAssets}
          title='Annam Brahma'
          description='Annam Brahma, since 2018, has served more than 25, 00,000 meals, working 365 days a year.  We serve pure, satvik, hygienic meals twice a day. Many of those who share the joy of food with us do not have access to healthy food even once a day.  Annam Brahma strives to serve with the gift of healthy, nutritious meals all through the year and our aim is to serve ____________ meals a year, all across the city by ____________.'
        />

        <SectionComponent
          url='/donation/truckasana'
          image={baseDomain + donationAssets.truckasanaAssets}
          title='Truckasana'
          description='The transport and logistics industry is the backbone of any country and economy. Trucks get us everything we need; from food to fuel. However, the spinal and physical health of the truck-drivers is adversely affected by the very nature of their work. So we decided to bring wellness and the ease of Yoga to our truck-drivers who spend their lives on the road, serving us.  Truckasan is a Yoga Institute exclusive initiative that formulates Yoga solutions for the peculiar problems of the community. We have held _______sessions across the country and trained_________ drivers through this initiative.'
        />

        <SectionComponent
          url='/donation/underprivileged'
          image={baseDomain + donationAssets.underprivilegedAssets}
          title='Yoga for the Underprivileged'
          description='Being exposed to harsh realities of life can be detrimental to the mental and physical health; with effects ranging from reduced life-spans to limited productivity and reduced earning capacity. The Yoga Institute has special outreach initiatives for the underprivileged to help them address the challenges unique to their situation.  We have conducted ________ sessions/ workshops for this objective. With a combined focus on physical and mental well-being we try to improve the lives of those on the margins, those who are often invisible.'
        />

        <SectionComponent
          url='/donation/community'
          image={baseDomain + donationAssets.communityAssets}
          title='Yoga for Transgender Community'
          description='Inclusion is fundamental to Yoga and with this belief we take pride in introducing Yoga to the transgender community in Mumbai.  Our outreach programme for the transgender community applies the fundamentals of Yoga to address not only the physical challenges but also the mental challenges of anxiety disorders, mood-disorders, gender-identity anxiety etc among the transgender community. We have organized _________ sessions for members of the transgender community and continue to increase our efforts towards them.'
        />

        <SectionComponent
          url='/donation/children'
          image={baseDomain + donationAssets.childrenAssets}
          title='Yoga for Children with special needs'
          description='Children are the heart of The Yoga Institute. We believe that every child contains the seed of a vibrant future within him and it has been our constant effort to nurture this. We are even more committed to the growth and well-being of children with special needs. We dedicate our patient and persistent efforts to assist them with their health and well-being needs through our customized and curated courses for them.  We also conduct special sessions, workshops and programmes for parents, to help them better understand and fulfill their parenting roles. We have organized _____ sessions for special children and ____workshops for parents.Help us grow our specialized and custom-made Yoga programs for Children with Special Needs. 
        They are our collective future!
        '
        />

        <SectionComponent
          url='/donation/bmcschools'
          image={baseDomain + donationAssets.bmcAssets}
          title='Underprivileged Children in BMC schools'
          description='The Yoga Institute’s Scholarship Programs is aimed at transforming children’s lives by ensuring quality education and training them in the ways of yogic life. In association with BMC, The Yoga Institute educated 10000 students in 60 schools. And by 2025, the Institute aspires to adopt 500 schools, educating over 200000 lakh students. This initiative helps students focus on their studies better and achieve an overall balance in life.'
        />

        <SectionComponent
          url='donation/police'
          image={baseDomain + donationAssets.policeAssets}
          title='Police'
          description='The Mumbai Police Force is on its toes 24X7, 365 days a year protecting us all and serving the city selflessly. The high stress levels of their jobs expose them to various severe health concerns such as cardiac and coronary diseases, stress induced obesity, diabetes, blood-pressure etc.  The Yoga Institute has teamed up with Mumbai Police to train more than 13,000 men and women of the force in yoga techniques. This has helped them fight their daily stress-induced challenges, improve their overall physical health and become more focused and mindful. '
        />
      </div>
    </>
  )
}

export default AnnamBramha
