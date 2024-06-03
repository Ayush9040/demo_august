import React from 'react'
import { useState } from 'react'
import InnerNavComponent from '../../Components/InnerNavComponent'
import IBYform from './IBYform'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../Constants/metaData.json'
import CommonBtn from '../../Components/commonbtn'
import './style.scss'
import baseDomain from '../../assets/images/imageAsset'
import { iybCourse } from '../../assets/images/imageAsset'
import { useEffect } from 'react'
import axios from 'axios'
import { cmsBaseDomain } from '../../../../Constants/appSettings'
import RelatedBlogs from '../Courses/Views/RelatedBlogs'
import RelatedCourse from '../Courses/Views/Component'
import { AllCourses } from '../Courses/Constants/courses'
import SelectDropDown from '../../Components/Select Dropdown'

const IBYcourse = () => {

  useEffect(()=>{
    scrollTo(0,0)
  },[])

  const [ openForm,setOpenForm ] = useState(false)
  const [blogData, setBlogData] = useState([])
  const [cardData, setCardData] = useState([])
  const [metaData, setMetaData] = useState([])
  const [selectBatch, setSelectBatch] = useState('')
  const [ price, setPrice] = useState('')
  const [error, setError] =  useState(false)

  const getBlogsData = async(posts) => {
    const arr = []
    for await (let item of posts) {
      try {
        const { data } = await axios.get(`${cmsBaseDomain}/misc/slug/${item}`)
        arr.push(data.data)
      } catch (err) {
        console.log(err)
      }
    }
    return arr
  }


  const parsingAlgo = async() => {
    try {
      const res = await axios.get(
        `${cmsBaseDomain}/seometatags/?pagePath=${'IBY-course'}`
      )
      let data = res.data.data.meta
      console.log(data, 'data')
      setCardData(res.data.data.relatedCourses.map(item => {
        return AllCourses.find(el => el.key === item)
      }))

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
    console.log(cardData, 'card')
    console.log(blogData, 'blog')
    console.log(AllCourses, 'all')
  }

  useEffect(() => {
    parsingAlgo()
    scrollTo(0, 0)
  }, [])
  console.log(metaData) //eslint-disable-line

  const highlight = {
    title: 'Career',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }


  const selectStyles1 = {
    cursor: 'pointer',
    background: 'white',
    borderColor: 'black',
    color: 'black',
    fontSize: '1.5rem',
    fontWeight: '900',
    borderWidth: '0.25rem',
    borderRadius: '24px',
    borderStyle: 'solid',
    maxWidth: 'fit-content',
    marginTop: '2rem',
    marginLeft:'14.5rem'
  }


  const date = () => {
    if (selectBatch === '') {
      setError(true); setOpenForm(false)
    } else {
      switch (selectBatch) {
      case 'MAR - MAY 2024':
        setPrice(2500); setError(false)
        break
      case 'JUN - AUG 2024':
        setPrice(1875); setError(false)
        break
      case 'SEP - NOV 2024':
        setPrice(1250); setError(false)
        break
      case 'DEC 2024 - FEB 2025':
        setPrice(625); setError(false)
        break
      case 'MAR 2024 - FEB 2025':
        setPrice(2500); setError(false)
        break
      default:
        break
      }
    }
  }

  const batchOptions = ['JUN - AUG 2024','SEP - NOV 2024','DEC 2024 - FEB 2025', 'MAR 2024 - FEB 2025']


  return (
    <div>
      { metaDataObj[location.pathname] && <Helmet  title={metaDataObj[location.pathname]?.title || ''}/> }
      <div className="IBY-sections">
        <InnerNavComponent abc={highlight}/>
        <div className="main-container">
          <div className="highlight-info">
            <h1>IBY Class (Only for TYI Yoga TTC Teachers) - Online & On Campus</h1>
            <p>One of the most-awaited and popular classes of The Yoga Institute, IBY Class is back. The classes has been running for more than two decades. </p>
            <CommonBtn text='Enroll Now' buttonAction={ ()=>(setOpenForm(true), date() )}   />
            {error && <small> Please select batch* </small>}
          </div>
          <div className="highlight-cover">
            <img src={`${baseDomain}${iybCourse.mainImage}`} alt="IYB-image" />
          </div>
        </div>
        <div>
          <SelectDropDown
            currentValue={selectBatch}
            changeCurrentValue={setSelectBatch}
            text={'Select Batch'}
            isStyles={selectStyles1}
            dates={batchOptions}
          /> 
        </div>
        <div className="about-section">
          <p style={{ fontWeight: '700' }}>One of the most-awaited and popular classes of The Yoga Institute, IBY Class is back. The classes has been running for more than two decades.</p>
          <p> Come and immerse yourself in the in-depth knowledge of asanas, pranayamas, kriyas and meditation. This class will help you in mastering the techniques, acquiring a deeper understanding of the self, others and the universe. </p>
          <div className="sattvik-section">
            <p className='nutri-page-bold'>USP of the IBY Class:</p>
            <ul>
              <li>This class will be held by our senior teacher Ramendra Sir.</li>
              <li>The teachers can imbibe wisdom from Dr. Hansaji’s rich experiences and teachings.</li>
              <li>This interactive session will give participants the opportunity to get their queries resolved and get insights from Hansa Maa on various subjects.</li>
            </ul>

            <p className='nutri-page-bold'> Timings & Fees (Online & On campus) </p>
            <ul>
              <li><span className='nutri-page-semi-bold' > Day and Time:- </span>Every Friday, 3:30 pm to 5:00 pm (IST)</li>
              {/* <li><span className='nutri-page-semi-bold' > Time: </span> Every Friday, 3:30 pm to 5:00 pm (IST)</li> */}
              <li><span className='nutri-page-semi-bold' > Fees: </span>
                <ul>
                  <li><span  > Q1 (Quarter1: March-April-May 2024) - </span> Rs. 2,500/-</li>
                  <li><span  > Q2 (Quarter2: June- July- August 2024) - </span> Rs. 1875/-</li>
                  <li><span  > Q3 (Quarter3: September- October- November 2024) - </span> Rs. 1250/-</li>
                  <li><span> Q4 (Quarter4: December-January-February 2025) - </span> Rs. 625/-</li>
                  <li><span> Annually- Rs 2500/- (March 2024 - February 2025) </span></li>
                  
                </ul>
              </li>
              

            </ul>
            <p className='nutri-page-bold'>Open to all the teachers who have completed Basic Yoga TTC, Intermediate Yoga TTC and Advanced Yoga TTC from the institute</p>
          </div>
        </div>
        
       
        {openForm && <IBYform  setOpenForm={setOpenForm} price={price} selectBatch={selectBatch} />}
      </div>
      {cardData && cardData.length > 0 && <RelatedCourse
        title={'Related Courses'}
        description={' lorem ipsum '}
        cardData={cardData}
        url={'/courses'}
      />}

      {blogData && blogData.length > 0 && <RelatedBlogs
        title={'Related Blogs'}
        description={' lorem ipsum '}
        cardData={blogData}
        url={'/blogs'}
      />}
       
    </div>
  )
}

export default IBYcourse