import React from 'react'
import CommonBanner from '../Common-banner'
import './style.scss'

const PrivacyPolicy = () => {
  let description =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat quisquam maxime id laboriosam cupiditate! Quibusdam quisquam ratione quam repellat perferendis nostrum quod ea veritatis pariatur. Accusamus quae, itaque cumque quis rem qui tempora. Non, repudiandae. Fugiat eum sequi et rationeLorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat quisquam maxime id laboriosam cupiditate! Quibusdam quisquam ratione quam repellat perferendis nostrum quod ea veritatis pariatur. Accusamus quae, itaque cumque quis rem qui tempora. Non, repudiandae. Fugiat eum sequi et ratione.'
  let Privacy =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only ve centuries, but also the leap into elec- tronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  return (
    <>
      <div className="privacy-container">
        <CommonBanner
          isLeftContent={false}
          Logo={false}
          Navigation={true}
          PageType="privacy"
          Heading="Privacy Policy"
          description={description}
        />
      </div>
      <div className="terms-and-conditions">
        <h2>1. Privacy Policy</h2>
        <p>{Privacy}
        </p>
        <h2>2. Privacy Policy</h2>
        <p>{Privacy}
        </p>
        <h2>3. Privacy Policy</h2>
        <p>{Privacy}
        </p>
        <h2>4. Privacy Policy</h2>
        <p>{Privacy}
        </p>
        <h2>5. Privacy Policy</h2>
        <p>{Privacy}
        </p>
        <h2>6. Privacy Policy</h2>
        <p>{Privacy}
        </p>
        <h2>7. Privacy Policy</h2>
        <p>{Privacy}
        </p>
      </div>
    </>
  )
}

export default PrivacyPolicy
