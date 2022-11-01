import React,{ useEffect } from 'react'
import baseDomain,{  nutriDiet } from '../../assets/images/imageAsset'
import InnerNavComponent from '../../Components/InnerNavComponent'
import './style.scss'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../Constants/metaData.json'
import CommonBtn from '../../Components/commonbtn'
import SelectDropDown from '../../Components/Select Dropdown'
import { useState } from 'react'
import SubcriptionForm from './Subscription'

const NutriDiet = () => {
  useEffect(() => {
    scrollTo(0, 0)
  }, [])

  const location = useLocation()
  const [ plan,setPlan ] = useState('')
  const [ price,setPrice ] = useState()
  const [ err,setErr ] = useState(false)
  const [ openForm,setOpenForm ] = useState(false)

  const highlight = {
    title: 'Career',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }

  const selectStyles = {
    cursor: 'pointer',
    background: 'white',
    borderColor: 'black',
    color: 'black',
    fontSize: '1.5rem',
    fontWeight: '900',
    borderWidth: '0.1rem',
    borderRadius: '20px',
    borderStyle: 'solid',
    maxWidth: 'fit-content',
    marginTop: '2rem',
  }

  const selectStyles1 = {
    cursor: 'pointer',
    background: '#c9705f',
    borderColor: 'white',
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: '900',
    borderWidth: '0.1rem',
    borderRadius: '20px',
    borderStyle: 'solid',
    maxWidth: 'fit-content',
    marginTop: '2rem',
    //marginLeft:'10rem'
  }

  const enrollFrom = ()=>{
    if(plan==='' ){
      setErr(true)
    }else{
      switch (plan) {
      case '1 month':
        setPrice(3000);setErr(false);setOpenForm(true) 
        break
      case '3 months':
        setPrice(7500);setErr(false);setOpenForm(true)
        break
      case '6 months':
        setPrice(11000);setErr(false);setOpenForm(true)
        break
      case 'Single Visit':
        setPrice(1000);setErr(false);setOpenForm(true)
        break
          
      default: 
        break
      }
    }
  }


  const options = ['1 month','3 months','6 months','Single Visit']

  return (
    <>
      { metaDataObj[location.pathname] && <Helmet  title={metaDataObj[location.pathname]?.title || ''}/> }
      <div className="highlight-sections">
        <InnerNavComponent abc={highlight} />
        <div className="main-container">
          <div className="highlight-info">
            <h1>Nutri Diet Clinic</h1>
            <div
              id="date-select-mobile"
            >
              <SelectDropDown
                currentValue={plan}
                changeCurrentValue={setPlan}
                text={'Select Package'}
                isStyles={selectStyles1}
                dates={options}
              />{' '}
            </div>
            <CommonBtn text='Enroll Now' buttonAction={ enrollFrom }   />
            { err && <small> Please select package* </small>}
          </div>
          <div className="highlight-cover">
            <img src={`${baseDomain}${nutriDiet.nutriDietMain}`} alt="sattvik-cooking" />
          </div>
        </div>
        <div className="about-section">
          <div
            id="date-select"
          >
            <SelectDropDown
              currentValue={plan}
              changeCurrentValue={setPlan}
              text={'Select Package'}
              isStyles={selectStyles}
              dates={options}
            />
          </div>
          <p>
          Food is an integral part of our life. It does give us energy but also affects our moods and the way we think.     In other words, “we are what we eat”.
          </p>
          <p>
          To lead a healthy life, we need to be aware of our body. And for that we need to keep our mind even and balanced.
          </p>
          <p>
          The Yoga Institute introduces Nutri Diet Clinic, a first-of-its-kind health clinic that offers individual dietary solutions not just for the body but also for the mind.
          </p>
          <p>
          When a person comes to us for a treatment, we “LISTEN” to things that are being spoken and more importantly to things that are unsaid. We look at the root cause and analyze it with positive attitude.  With consideration, watchfulness, and patience, we understand the problem before offering any guidance.
          </p>
          <p>
          We do not impose our decisions of “what to eat” and “what not to” on clients. We simply nudge them towards the goal, so they have faith in themselves to undergo the change and transformation.
          </p>
          <p>
          We provide professionally supervised nutritious tailor-made diet plans as per their lifestyle. Our nutritional plans consist of well-balanced diet, homemade simple recipes and a detailed workout plan.
          </p>
          <p>
          Our ancient scriptures lay strong emphasis on Sattvik Diet which is pure, natural, energy-containing, fresh food. The diet plans are based on these same foundations which we recommend to every individual.
          </p>
          <div className="sattvik-section">
            <p>
              Our Programs:
            </p>
            <ul>
              <li>Shape up program (weight loss/ weight gain/ muscle gain)</li>
              <li>Hormonal imbalance program (PCOS/ Thyroid)</li>
              <li>Gut Health program (acidity/ constipation/digestion issues)</li>
              <li>Metabolic disorder program (diabetes mellitus/ hypertension/ cholesterol)</li>
              <li>Pregnancy/ lactation program</li>
              <li>Therapeutic plans (respiratory/ gastroesophageal/ liver/ kidney)</li>
              <li>Other types of diet (vegan diet/ keto diet / intermittent fasting/lactose intolerant/ gluten free diet)</li>
              <li>Kids Nutrition</li>
            </ul>
            <p>
            Stepwise process:
            </p>
            <ul>

              <li> Body analysis (body measurements/ BMI calculations)</li>
              <li> Detailed client history</li>
              <li> Biomedical reports (CBC, lipid profile, kidney profile, thyroid, liver function, vitamin D, and vitamin B12). Reports may be three to six months old or would be advised accordingly for better results. Disclaimer: Our services do not include pathological tests that clients should perform.</li>
              <li> Dietary recall</li>
              <li> Dietary recommendations </li>
              <li> Exercise recommendations</li>
              <li> Weekly follow-ups</li>
              <li> Daily WhatsApp support</li>
            </ul>
            <p>
            Our services:
            </p>
            <ul>
              <li>Easy homemade recipes according to their culture.</li>
              <li>Daily WhatsApp support (daily diet recall & instant problem solving).</li>
              <li>Detailed workout regimen according to duration of selected program.</li>
              <li>Dietary therapeutic guidelines along with food avoid list.</li>
              <li>Nutritional counseling</li>
            </ul>
            <p>
            Achieve long-term wellness through simple, cultural and holistic changes in your nutrition, eating habits and cognitive thinking.
            </p>
            <p>Call on <a style={{ color:'blue' }} href='tel:+919967429596' >9967429596</a> for prior consultations.</p>
          </div>
        </div>
      </div>
      { openForm && <SubcriptionForm packageName={ plan } packagePrice={ price }  closeForm={ setOpenForm } />}
    </>
  )
}

export default NutriDiet
