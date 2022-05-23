import React from 'react'
import CommonBanner from '../Common-banner'
import './style.scss'
import './data'
//import SocialInitiatives from '/home/nex-g/Desktop/tyi-user-webapp/src/Views/StaticSite/Components/SocialInitiatives/index.jsx'
import Programs from './Programs'

const wellness = () => {
  return (
    <div className=''>
      <CommonBanner
        isLeftContent={false}
        Logo={false}
        Navigation={true}
        PageType='gifting'
        Heading='Yoga for corporate wellness'
        isOnlyBanner={false}
        innerNav={false}
        description='Employees are the foundation of any business and the driving force behind its success.The Yoga Institute Corporate Wellness Programs are aimed to enhance and encourage a compre-
        hensive approach to employee well-being by fostering a healthy and happy workplace culture. We provide wellness solutions that go beyond traditional wellness programs to improve physical,
        mental, and emotional health, work/life balance, the ability to handle stress and challenges, team cooperation, focus, and productivity, and optimize human resource investments while boosting employee morale and engagement.Yoga practices, which include routine and discipline, help you to cultivate a conscious relationship

        with your inner self while also keeping your mind on track. The ability to persevere is what distin-
        guishes successful leaders and managers from the others.'
      />
      <Programs />

      <p className='offering-heading'>
        Our offerings
        <div className='bottom-line line'></div>
      </p>
      <div className='offering-para1'>
        <p className='para1'>
          We offer both regular yoga classes and customized programs that are
          specifically tailored to your requirements. Please get in touch with
          us to discuss the best solution for your employees and team members.
          We offer counselling on diet and nutrition, personal counselling,
          trainings on asana and pranayama, lessons on work-life balance and
          over all philoso- phy of yoga. With these offerings, your organization
          will see a marked improvement in the way it functions. Employee morale
          will shoot up, at- trition rates will go down, team members will be
          more mindful in their tasks and responsibilities and interpersonal
          relationships will improve.
        </p>
        <img
          className='para1-img'
          src='https://img4.nbstatic.in/tr:w-500/6049a3ce79600c000c8c19f1.jpg'
          alt=''
        />
      </div>
      <div className='offering-para2'>
        <img
          className='para2-img'
          src='https://www.betterup.com/hs-fs/hubfs/Imported_Blog_Media/employee%20wellness%20-%20wheel%20showing%20the%20components%20of%20wellness-1.png?width=1999&height=1143&name=employee%20wellness%20-%20wheel%20showing%20the%20components%20of%20wellness-1.png'
          alt=''
        />
        <p className='para2'>
          Encourage your staff to keep healthy and productive even if they work
          from home. When working remotely, many people find it difficult to
          strike a balance between work and personal life. Yoga is a great way
          to relieve physical strain and emotional stress, making your employees
          happier, healthier, and more productive.
        </p>
      </div>
    </div>
  )
}

export default wellness
