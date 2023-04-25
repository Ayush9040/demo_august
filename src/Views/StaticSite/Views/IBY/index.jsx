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

const IBYcourse = () => {

  useEffect(()=>{
    scrollTo(0,0)
  },[])

  const [ openForm,setOpenForm ] = useState(false)
  const [blogData, setBlogData] = useState([])
  const [cardData, setCardData] = useState([])
  const [metaData, setMetaData] = useState([])

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
  const options = ['1 month', '3 months', '6 months', 'Single Visit']

  const highlight = {
    title: 'Career',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }


  return (
    <div>
      { metaDataObj[location.pathname] && <Helmet  title={metaDataObj[location.pathname]?.title || ''}/> }
      <div className="IBY-sections">
        <InnerNavComponent abc={highlight}/>
        <div className="main-container">
          <div className="highlight-info">
            <h1>IBY Class (Only for TYI Yoga TTC Teachers) - Online & On Campus</h1>
            <p>One of the most-awaited and popular classes of The Yoga Institute, IBY Class is back. The classes has been running for more than two decades. </p>
            <CommonBtn text='Enroll Now' buttonAction={ ()=>setOpenForm(true) }   />
          </div>
          <div className="highlight-cover">
            <img src={`${baseDomain}${iybCourse.mainImage}`} alt="IYB-image" />
          </div>
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
              <li><span className='nutri-page-semi-bold' > Date: </span>Starting from 10th March, 2023</li>
              <li><span className='nutri-page-semi-bold' > Time: </span> Every Friday, 3:30 pm to 5:00 pm (IST)</li>
              <li><span className='nutri-page-semi-bold' > Annual Fees:: </span>Rs. 2,000/-</li>
            </ul>
            <p className='nutri-page-bold'>Open to all the teachers who have completed Basic Yoga TTC, Intermediate Yoga TTC and Advanced Yoga TTC from the institute</p>
          </div>
        </div>
        
       
        {openForm && <IBYform  setOpenForm={setOpenForm} />}
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