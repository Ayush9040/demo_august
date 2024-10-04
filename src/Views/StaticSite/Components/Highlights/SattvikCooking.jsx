import React from 'react'
import baseDomain, { homeAssets } from '../../assets/images/imageAsset'
import InnerNavComponent from '../InnerNavComponent'
import { useEffect } from 'react'
import './style.scss'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../Constants/metaData.json'

const SattvikCooking = () => {
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
            <h1>Sattvik Cooking</h1>
          </div>
          <div className="highlight-cover">
            <img src={`${baseDomain}${homeAssets.homeAsset18}`} alt="sattvik-cooking" loading='lazy' />
          </div>
        </div>
        <div className="about-section">
          <p>
          Keeping in mind people’s erratic lifestyles today, and the temptation
          towards tasty but unhealthy foods, Dr. Hansaji has created her new
          book, Sattvik Cooking – Modern Avatars of Vedic Foods to help us enjoy
          our food mindfully and without guilt. The recipes, carefully designed
          to ensure nutrition and balance in the body, can be made with easily
          sourced Sattvik ingredients and will be enjoyed by everyone in the
          family. With her strong belief that Sattvik cooking has the potential
          to revolutionize our relationship with our foods, Dr. Hansaji has
          written this book with a strong perspective to yoga and Ayurveda.
          </p>
          <p>
          What is great about this book is that the recipes, while being simple
          and delicious, also provide details about the calorie count and
          nutritional value of the ingredients. Sattvik Cooking details recipes
          that will help you derive the benefits of a Sattvik which is also
          delicious and appetizing. All your favorite items like burgers, chaat,
          pancakes, wraps, dumplings, crackers, fritters, tikkis can be made in
          a totally healthy and nutritious way. You will find a lot more of
          these recipes in the book.
          </p>
          <div className="sattvik-section">
            <p>
              <u>
                <i>
                Sattvik Cooking – Modern Avatars of Vedic Foods is available at:
                </i>
              </u>
            </p>
            <ul>
              <li>Amazon</li>
              <li>The Yoga Institute Book Store</li>
            </ul>
            <p>
              <u>For more information:</u>
            </p>
            <p>Meena Madam: 9821794550 </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SattvikCooking
