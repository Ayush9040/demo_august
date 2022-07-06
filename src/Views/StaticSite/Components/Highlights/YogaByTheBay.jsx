import React from 'react'
import baseDomain, { homeAssets } from '../../assets/images/imageAsset'
import InnerNavComponent from '../InnerNavComponent'
import './style.scss'

const YogaByTheBay = () => {
  const highlight = {
    title: 'Career',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }
  return (
    <div className="highlight-sections">
      <InnerNavComponent abc={highlight} />
      <div className="main-container">
        <div className="highlight-info">
          <h1>Yoga By The Bay</h1>
        </div>
        <div className="highlight-cover">
          <img src={`${baseDomain}${homeAssets.homeAsset12}`} alt="" />
        </div>
      </div>
      <div className="about-section">
        <p>
          Meditating alone is beneficial but meditating and practicing yoga as
          part of a group can impress upon the psyche in ways unimaginable. Join
          us to be part of this profound experience called Yoga by the Bay.
        </p>
        <p>
          Yoga and the sea are two things that bring immense joy, calm, and
          relaxation to the human body. Imagine the effect and the impact two of
          them will have when they come together. Yoga by the Bay is one such
          initiative where we practice the yogic way of life immersed in the
          mesmerising symphony of the crashing sea waves, chirping birds, and
          whistling winds.
        </p>
        <p>
          Come out with us and give your practice a new dimension. Let your
          being become one with the vastness of the divine. Experience true
          peace in the throbbing heart of Mumbai along with hundreds of seekers.
        </p>
        <p>
          Meet us opposite the ‘Pizza by the Bay – Marine Lines’ restaurant and
          be part of this profound experience.
        </p>
      </div>
    </div>
  )
}

export default YogaByTheBay
