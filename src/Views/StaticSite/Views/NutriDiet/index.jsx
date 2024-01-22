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
import RelatedBlogs from '../Courses/Views/RelatedBlogs'
import RelatedCourse from '../Courses/Views/Component'
import axios from 'axios'
import { cmsBaseDomain } from '../../../../Constants/appSettings'
import { AllCourses } from '../Courses/Constants/courses'


const NutriDiet = () => {
  useEffect(() => {
    scrollTo(0, 0)
  }, [])

  const location = useLocation()
  const [ plan,setPlan ] = useState('')
  const [ price,setPrice ] = useState()
  const [ err,setErr ] = useState(false)
  const [ openForm,setOpenForm ] = useState(false)
  const [ cardData,setCardData ] = useState([])
  const [ blogData,setBlogData ] = useState([])
  const [ metaData,setMetaData ] = useState([])  //eslint-disable-line

  const highlight = {
    title: 'Career',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }

  // const selectStyles = {
  //   cursor: 'pointer',
  //   background: 'white',
  //   borderColor: 'black',
  //   color: 'black',
  //   fontSize: '1.5rem',
  //   fontWeight: '900',
  //   borderWidth: '0.1rem',
  //   borderRadius: '20px',
  //   borderStyle: 'solid',
  //   maxWidth: 'fit-content',
  //   marginTop: '2rem',
  // }

  const selectStyles1 = {
    cursor: 'pointer',
    background: '#E18C71',
    borderColor: 'white',
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: '900',
    borderWidth: '0.25rem',
    borderRadius: '24px',
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
        setPrice(3999);setErr(false);setOpenForm(true) 
        break
      case '3 months':
        setPrice(8999);setErr(false);setOpenForm(true)
        break
      case '6 months':
        setPrice(13999);setErr(false);setOpenForm(true)
        break
      case 'Single Visit':
        setPrice(1000);setErr(false);setOpenForm(true)
        break
          
      default: 
        break
      }
    }
  }

  const getBlogsData = async(posts)=>{
    const arr=[]
    for await (let item of posts){
      try{
        const { data } = await axios.get(`${ cmsBaseDomain }/misc/slug/${ item }`)
        arr.push(data.data)
      }catch(err){
        console.log(err)
      }
    }
    return arr
  }

  const parsingAlgo = async()=>{
    try {
      const res = await axios.get(
        `${ cmsBaseDomain }/seometatags/?pagePath=${'nutri-diet'}`
      )
      let data = res.data.data.meta
      console.log(data,'data')
      setCardData( res.data.data.relatedCourses.map( item=>{
        return AllCourses.find(el=>el.key===item)
      } ) )

      setBlogData(await getBlogsData(res.data.data.relatedPosts))

      let headers = {
        title: '',
        links: [],
        metaData: [],
        script: '',
      }
      data = data.replace(/\\n/g, '')
      data = data.split('\n')
      data.forEach((el) => {
        if (el.includes('<meta') || el.includes('<link')) {
          let obj = {}
          let regExp = /(\S+)="[^"]*/g
          let regexMatches = el.match(regExp)

          regexMatches.map((el) => {
            let partition = el.split('="')
            obj[partition[0]] = partition[1].replace(/"/g, '')
          })

          if (el.includes('<meta')) headers.metaData.push(obj)
          if (el.includes('<link')) headers.links.push(obj)
        } else if (el.includes('<title'))
          headers.title = el.replace('<title>', '').replace('</title>', '')
        else if (el.includes('<script')) headers.script = el
      })

      // setTitleTag(headers.title.trim())
      setMetaData(headers.metaData)
    } catch (err) {
      setBlogData([])
      setCardData([])
      console.log(err)
    }
    console.log(cardData,'card')
    console.log(blogData,'blog')
    console.log(AllCourses,'all')
  }

  useEffect(()=>{
    parsingAlgo()
    scrollTo(0,0)
  },[])
  const options = ['1 month','3 months','6 months','Single Visit']

  return (
    <>
      { metaDataObj[location.pathname] && <Helmet  title={metaDataObj[location.pathname]?.title || ''}/> }
      <div className="highlight-sections">
        <InnerNavComponent abc={highlight} />
        <div className="main-container">
          <div className="highlight-info">
            <h1>Nutri Diet Clinic – Get Your Custom Diet Plans.</h1>
            <p>Take a step for your well-being and enroll in our custom diet plans to get a holistic change in your lifestyle.</p>
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
          {/* <div
            id="date-select"
          >
            <SelectDropDown
              currentValue={plan}
              changeCurrentValue={setPlan}
              text={'Select Package'}
              isStyles={selectStyles}
              dates={options}
            />
          </div> */}
          <p>
          Food is an integral part of our life. It does give us energy but also affects our moods and the way we think. In other words, “we are what we eat”.
          </p>
          <p>
          To lead a healthy life, we need to be aware of our body. And for that we need to keep our mind even and balanced.
          </p>
          <p>
          The Yoga Institute introduces Nutri Diet Clinic, a first-of-its-kind health clinic that offers individual dietary solutions not just for the body but also for the mind.
          </p>
          <p>
          When a person comes to us for a treatment, we “LISTEN” to things that are being spoken and more importantly to things that are unsaid. We look at the root cause and analyze it with positive attitude. With consideration, watchfulness, and patience, we understand the problem before offering any guidance.

          </p>
          <p>
          We do not impose our decisions of “what to eat” and “what not to” on clients. We simply nudge them towards the goal, so they have faith in themselves to undergo the change and transformation.
          </p>
          <p>
          We provide professionally supervised nutritious custom diet plans as per their lifestyle. Our nutritional plans consist of well-balanced diet, homemade simple recipes and a detailed workout plan.
          </p>
          <p>
          Our ancient scriptures lay strong emphasis on Sattvik Diet which is pure, natural, energy-containing, fresh food. The custom diet plans are based on these same foundations which we recommend to every individual.
          </p>
          <div className="sattvik-section">
            <p className='nutri-page-bold' >
              Our Programs:
            </p>
            <ul>
              <li><span className='nutri-page-semi-bold' >Shape up program </span> (Diet plan for weight loss/ weight gain/ muscle gain)</li>
              <li><span className='nutri-page-semi-bold' >Hormonal imbalance diet program </span> (PCOS diet plan / Thyroid diet plan)</li>
              <li><span className='nutri-page-semi-bold' >Gut Health program </span> ( acidity/digestion issues/ constipation diet plan)</li>
              <li><span className='nutri-page-semi-bold' >Metabolic disorder program </span> (diabetes mellitus// cholesterol/ hypertension diet plan)</li>
              <li><span className='nutri-page-semi-bold' >Pregnancy/ lactation program </span></li>
              <li><span className='nutri-page-semi-bold' >Therapeutic plans </span> (respiratory/ gastroesophageal/ liver/ kidney)</li>
              <li><span className='nutri-page-semi-bold' >Other types of diet </span> (vegan diet/ keto diet / intermittent fasting/lactose intolerant/ gluten free diet)</li>
              <li><span className='nutri-page-semi-bold' >Nutrition for kids ( Kids diet plan)</span></li>
            </ul>
            <p className='nutri-page-bold' >
            Stepwise Process:
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
            <p className='nutri-page-bold' >
            Our Services:
            </p>
            <ul>
              <li>Easy homemade recipes according to their culture.</li>
              <li>Daily WhatsApp support (daily diet recall & instant problem solving & affirmations).</li>
              <li>Detailed workout regimen according to duration of selected program.</li>
              <li>Dietary therapeutic guidelines along with food avoid list.</li>
              <li>Nutritional counseling</li>
              <li>Maintenance plan</li>
              <li>Daily progress tracker</li>
            </ul>
            <p>
            Achieve long-term wellness through simple, cultural and holistic changes in your nutrition, eating habits and cognitive thinking.
            </p>
            <p><b>Call on <a style={{ color:'blue' }} href='tel:+919967429596' >+91-9967429596</a> for appointments.</b></p>
          </div>
        </div>
      </div>
      { openForm && <SubcriptionForm packageName={ plan } packagePrice={ price }  closeForm={ setOpenForm } />}

      { cardData && cardData.length>0 && <RelatedCourse
        title={'Related Courses'}
        description={' lorem ipsum '}
        cardData={ cardData }
        url={'/courses'}
      />}

      { blogData && blogData.length>0 && <RelatedBlogs
        title={'Related Blogs'}
        description={' lorem ipsum '}
        cardData={ blogData }
        url={'/blogs'}
      />}
    </>
  )
}

export default NutriDiet
