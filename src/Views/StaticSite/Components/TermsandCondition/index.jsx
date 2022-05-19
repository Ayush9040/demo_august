import React from 'react'
import CommonBanner from '../Common-banner'
import data from './data'
import './style.scss'

const TermsCondition = () => {
  let description =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat quisquam maxime id laboriosam cupiditate! Quibusdam quisquam ratione quam repellat perferendis nostrum quod ea veritatis pariatur. Accusamus quae, itaque cumque quis rem qui tempora. Non, repudiandae. Fugiat eum sequi et rationeLorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat quisquam maxime id laboriosam cupiditate! Quibusdam quisquam ratione quam repellat perferendis nostrum quod ea veritatis pariatur. Accusamus quae, itaque cumque quis rem qui tempora. Non, repudiandae. Fugiat eum sequi et ratione.'

  // let termsAndCondition =
  //   'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only ve centuries, but also the leap into elec- tronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  return (
    <>
      <div className='terms-container'>
        <CommonBanner
          isLeftContent={false}
          Logo={false}
          Navigation={true}
          PageType='terms'
          Heading='Terms and conditions'
          description={description}
        />
      </div>
      <div className='terms-and-conditions'>
        {data.map((value) => {
          return (
            <div key={value.heading}>
              <h2>{value.heading}</h2>
              <p>{value.points}</p>
            </div>
          )
        })}
      </div>
      <p>
        Students found violating these instructions wilfully or whose presence
        is considered undesirable, for any reason, will be asked to leave
        immediately by the Course Coordinator without giving any reason or prior
        notice. It goes without saying that fees will not be refunded.
      </p>
    </>
  )
}

export default TermsCondition
