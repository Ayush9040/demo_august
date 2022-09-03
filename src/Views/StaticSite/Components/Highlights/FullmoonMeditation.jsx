import React from 'react'
import baseDomain, { homeAssets } from '../../assets/images/imageAsset'
import InnerNavComponent from '../InnerNavComponent'
import './style.scss'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../Constants/metaData.json'

const FullmoonMeditation = () => {
  useEffect(() => {
    scrollTo(0, 0)
  }, [])

  const location = useLocation()

  const highlight = {
    title: 'Career',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }
  return (
    <>
      { metaDataObj[location.pathname] && <Helmet  title={metaDataObj[location.pathname]?.title || ''}/> }
      <div className="highlight-sections">
        <InnerNavComponent abc={highlight} />
        <div className="main-container">
          <div className="highlight-info">
            <h1>Full moon meditation</h1>
          </div>
          <div className="highlight-cover">
            <img src={`${baseDomain}${homeAssets.homeAsset14}`} alt="fullmoon" />
          </div>
        </div>
        <div className="about-section">
          <p>
          Looking to reign in your rampant thoughts and mood swings and train
          your mental faculties to be more efficient and peaceful? Then, join us
          every full moon day to sit under the celestial glow and do meditation.
          </p>
          <p>
          Since the beginning of civilization humans have been fascinated with
          our nearest celestial neighbour – Moon. It has found its place in
          children’s stories, lovers’ stories, mystical arts, and much more. And
          it is not without reason. Moon has the power to influence our thoughts
          and our rhythms. Under its soothing and calming light ancient gurus
          sat down to meditate and mull over the intricacies of life and gave us
          philosophies that we follow even to this day.
          </p>
          <p>
          However, in the hustle-bustle of today’s life and because of rising
          city skylines, we seldom get exposed to this enriching source of
          energy. On every full moon day, we at the Yoga Institute sit under
          this divine light to meditate and find balance and alignment under the
          heaven’s celestial glow! Unburden yourself by joining us for
          practicing meditation on full moon nights and feel your stress and
          worries melting away under the soft cool night breeze. Let the moon
          help you relax and rejuvenate your mind and body.
          </p>
          <p>
          Note: At present, considering the covid situation, you can join this
          meditation online from the comfort of your home.
          </p>
        </div>
      </div>
    </>
  )
}
export default FullmoonMeditation
