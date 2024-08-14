import React, { useState } from 'react'
import baseDomain, { homeAssets } from '../../assets/images/imageAsset'
import InnerNavComponent from '../InnerNavComponent'
import './style.scss'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../Constants/metaData.json'
import RelatedBlogs from '../../Views/Courses/Views/RelatedBlogs'
import RelatedCourse from '../../Views/Courses/Views/Component'
import axios from 'axios'
import { cmsBaseDomain } from '../../../../Constants/appSettings'
import { AllCourses } from '../../Views/Courses/Constants/courses'

const CorporateWorkshop = () => {
  useEffect(() => {
    scrollTo(0, 0)
  }, [])
  const location = useLocation()
  const [blogData, setBlogData] = useState([])
  const [cardData, setCardData] = useState([])
  const [metaData, setMetaData] = useState([])

  const highlight = {
    title: 'Career',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }

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
        `${cmsBaseDomain}/seometatags/?pagePath=${'corporate-workshops'}`
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
          headers?.title = el.replace('<title>', '').replace('</title>', '')
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


  return (
    <>
      {metaDataObj[location.pathname] && <Helmet title={metaDataObj[location.pathname]?.title || ''} />}
      <div className='highlight-sections'>
        <InnerNavComponent abc={highlight} />
        <div className='main-container'>
          <div className='highlight-info'>
            <h1>Corporate Yoga Workshops</h1>
          </div>
          <div className='highlight-cover'>
            <img
              src={`${baseDomain}${homeAssets.homeAsset17}`}
              alt='Corporate yoga workshop'
            />
          </div>
        </div>
        <div className='about-section'>
          <p>
          Our corporate workshops on Yoga are carefully designed to boost morale, productivity, and happiness in the workplace. They also help employees achieve better work-life balance and greatly reduce stress, and fatigue (physical and mental). Adhering to yogic way of life enhances memory, focus, and vitality. What’s more is that The Yoga Institute customises the program to suit your organisation’s culture and values.
          </p>
          <p>
          A brilliantly thought-out plan to execute a campaign or manage a product launch can take a toll on your physical and mental wellness. Rushing to meet the deadlines can lead to stress and anxiety and reduces efficiency. Doing some yoga poses or breathing exercises before the start of your working day or during one can drastically impact your focus and productivity. Opt for The Yoga Institute’s thoughtfully designed corporate yoga workshops on Stress Management and see the difference.
          </p>
          <p>
          Yoga and meditation can effectively help your employees deal with daily stressors while adding to their professional life and organisation’s success overall.
          </p>
          <div className='details'>Details:</div>
          <p>
          The corporate yoga workshops are of 6 hours duration and have particularly useful contents. The broad contents are as under:
          </p>
          <ul>
            <li>Related Yoga Asanas</li>
            <li>Various techniques of Pranayama</li>
            <li>Conscious Relaxation Techniques</li>
            <li>
            Kriyas – cleaning and strengthening of eyes, nose, and throat.
            </li>
            <li>
            ‘Sattvic’ diet food at appropriate intervals that helps beat stress.
            </li>
            <li> Interactive games based on yogic concepts.</li>
          </ul>
          <p>
          These yoga workshops are unique, refreshing, and enjoyable for the participants.
          </p>
          <p>
          We conduct these workshops at our Institute. Alternatively, we can conduct them at your office as well. The workshops can be tailor-made to suit your or the organization’s specific requirements.
          </p>
          <div className='contact-info'>
            <div className='contact'>Contact:</div>
            <ul>
              <li>
              Please contact our Institute and ask for “Corporate Yoga Workshops” division.
              </li>
              <li>Email-address: corporate.training@theyogainstitute.org</li>
              <li>Our telephone Nos.: 022 – 26110506 / 022 – 26122185</li>
              <li>Or contact (1) Ms. Meena Nalla – 9136666602</li>
              <li>Or (2) Ms. Pranee Yogendra – 8879955000</li>
            </ul>
          </div>
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
    </>
  )
}
export default CorporateWorkshop
