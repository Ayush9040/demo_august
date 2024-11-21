import React, { useState } from 'react'
import './style.scss'
import { homeAssets } from '../../../assets/images/imageAsset'
import baseDomain from '../../../assets/images/imageAsset'
import { useEffect } from 'react'
import InnerNavComponent from '../../../Components/InnerNavComponent'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../../Constants/metaData.json'
import CommonBtn from '../../../Components/commonbtn'
import HomeTutions from '../Form'
import axios from 'axios'
import { AllCourses } from '../../Courses/Constants/courses'
import { cmsBaseDomain } from '../../../../../Constants/appSettings'
import RelatedBlogs from '../../Courses/Views/RelatedBlogs'
import RelatedCourse from '../../Courses/Views/Component'
import SelectDropDown from '../../../Components/Select Dropdown'
import ReactGA from 'react-ga4';

const OnlineTution = () => {
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
  const [openForm, setOpenForm] = useState(false)
  const [blogData, setBlogData] = useState([])
  const [cardData, setCardData] = useState([])
  const [metaData, setMetaData] = useState([])
  const [err, setErr] = useState(false)
  const [plan, setPlan] = useState('')

  const getBlogsData = async (posts) => {
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
    marginRight: '3rem'
  }


  const parsingAlgo = async () => {
    try {
      const res = await axios.get(
        `${cmsBaseDomain}/seometatags/?pagePath=${'home-tuitions'}`
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
          if (headers) {
            headers.title = el.replace('<title>', '').replace('</title>', '')
          }
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
  const [isPageReady, setIsPageReady] = useState(false);


  useEffect(() => {
    if (isPageReady) {
      ReactGA.event('view_item', {
        currency: 'INR',
        value: 0,
        items: [{
          item_name: 'Online Home Tuition (Yoga Tuition)',
          item_id: 'Online Home Tuition (Yoga Tuition)',
          price: 0,
          quantity: 1
        }]
      });
      console.log({
        currency: 'INR',
        value: 0,
        items: [{
          item_name: 'Online Home Tuition (Yoga Tuition)',
          item_id: 'Online Home Tuition (Yoga Tuition)',
          price: 0,
          quantity: 1
        }]
      })
    }
  }, [isPageReady]);

  useEffect(() => {
    parsingAlgo()
    scrollTo(0, 0)
    setIsPageReady(true);

  }, [])
  console.log(metaData) //eslint-disable-line

  const options = ['Home Yoga Tuitions', 'Yoga Therapy Sessions']

  const updateGA4 = (program) => {
    ReactGA.event('add_to_cart', {
      currency: 'INR',
      value: 0,
      items: [{
        item_name: 'Online Home Tuition (Yoga Tuition)',
        item_id: program,
        price: 0,
        quantity: 1
      }]
    });
    console.log('add_to_cart', {
      currency: 'INR',
      value: 0,
      items: [{
        item_name: 'Online Home Tuition (Yoga Tuition)',
        item_id: program,
        price: 0,
        quantity: 1
      }]
    });
    
  }
  return (
    <>
      {metaDataObj[location.pathname] && (
        <Helmet title={metaDataObj[location.pathname]?.title || ''} />
      )}
      <div className="highlight-sections">
        <InnerNavComponent abc={highlight} />
        <div className="main-container">
          <div className="highlight-info">
            <h1>Online Home Tuition (Yoga Tuition)</h1>
            <div
              id="date-select-mobile"
              style={{ display: 'flex' }}
            >
              <SelectDropDown
                currentValue={plan}
                changeCurrentValue={setPlan}
                text={'Select Plan'}
                isStyles={selectStyles1}
                dates={options}
              />{' '}
            </div>
            {err && <small style={{ marginLeft: '2rem', fontSize: '8px' }}> Please select Plan* </small>}
            <CommonBtn text={'Enroll Now'} buttonAction={() => {
              if (plan === '') {
                return setErr(true)
              }
              updateGA4(plan)
              setOpenForm(true)
            }
            } />
          </div>



          <div className="highlight-cover">
            <img
              src={`${baseDomain}${homeAssets.homeAsset15}`}
              alt="Online Yoga Tuition the yoga institute"
              loading='lazy'
            />
          </div>
        </div>
        <div className="about-section">
          <p>
            Research has shown that doing a 150-minutes of moderate intensity activity every week is required for maintaining optimum health. There is nothing better to fill those minutes with than yoga and meditation. Yoga makes your body more flexible, while boosting your overall immunity. Yoga Asanas and breathing techniques help remove accumulated toxins from the body and boost the nervous system.

          </p>
          <p>
            Practicing meditation can help overcome negative emotions, destress, focus, and will equip you to deal with your day-to-day problems in a much more efficient manner.
          </p>
          <p>
            The Yoga Institute’s online home tuition is designed to give you all these benefits from the comfort of your home at your convenient time. These yoga tuition cover:
          </p>
          <div className="online_table">
            <p>
              <ul>
                <li>Yoga Asanas</li>
                <li>Pranayamas</li>
                <li>Kriyas</li>
                <li>Yogic Diet recommendation</li>
                <li>Introduction to yogic lifestyle</li>
              </ul>
            </p>

            <p>Fees:</p>
            <p>The fee structure is as follows:</p>
            <h2>Home Yoga Tuitions</h2>
            <table>
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Participants</th>
                  <th>Sessions (3 sessions per week)</th>
                  <th>Fees</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1a</td>
                  <td>1</td>
                  <td>12</td>
                  <td>Rs 7,500</td>
                </tr>
                <tr>
                  <td>1b</td>
                  <td>1</td>
                  <td>24</td>
                  <td>Rs. 13,500</td>
                </tr>
                <tr>
                  <td>1c</td>
                  <td>1</td>
                  <td>48</td>
                  <td>Rs. 24,000</td>
                </tr>
                <tr>
                  <td>2a</td>
                  <td>2</td>
                  <td>12</td>
                  <td>Rs. 10,500</td>
                </tr>
                <tr>
                  <td>2b</td>
                  <td>2</td>
                  <td>24</td>
                  <td>Rs. 19,000</td>
                </tr>
                <tr>
                  <td>2c</td>
                  <td>2</td>
                  <td>48</td>
                  <td>Rs. 33,500</td>
                </tr>
                <tr>
                  <td>3a</td>
                  <td>3 or 4</td>
                  <td>12</td>
                  <td>Rs. 13,500</td>
                </tr>
                <tr>
                  <td>3b</td>
                  <td>3 or 4</td>
                  <td>24</td>
                  <td>Rs. 24,300</td>
                </tr>
                <tr>
                  <td>3c</td>
                  <td>3 or 4</td>
                  <td>48</td>
                  <td>Rs. 43,000</td>
                </tr>
              </tbody>
            </table>
            <h2>Yoga Therapy Sessions</h2>
            <table>
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Participants</th>
                  <th>Sessions (3 sessions per week)</th>
                  <th>Fees</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1a</td>
                  <td>1</td>
                  <td>12</td>
                  <td>Rs 12,000</td>
                </tr>
                <tr>
                  <td>1b</td>
                  <td>1</td>
                  <td>24</td>
                  <td>Rs 21,500</td>
                </tr>
                <tr>
                  <td>2a</td>
                  <td>2</td>
                  <td>12</td>
                  <td>Rs 17,000</td>
                </tr>
                <tr>
                  <td>2b</td>
                  <td>2</td>
                  <td>24</td>
                  <td>Rs 30,500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <b>Please note:</b>
            <span>
              For a hassle-free admission, kindly specify the following details while making the payment:
            </span>
          </p>
          <p>
            Name of the Student (In case a third party transfers the funds)
          </p>
          <p>– Bank Transaction UTR number</p>
          <p>– Name of the Transferee</p>
          <p>Kindly make the payment to the following Bank Account:</p>
          <p>Name of Account: International Board of Yoga</p>
          <p>Name of Bank: Kotak Mahindra Bank</p>
          <p>IFSC Code: KKBK0000674</p>
          <p>Account number: 0512124263</p>
          <div className="online_table">
            <p>
              <b>Please note:</b>
            </p>
            <ul>
              <li>
                Full fees must be paid in advance, at the time of booking. You can make account payee cheque drawn in favour of ‘International Board of Yoga’. Payment by cash will not be accepted.
              </li>
              <li>The fees is non-refundable.</li>
              <li>
                The fees quoted are for the course duration of 4 weeks (12 sessions) or 8 weeks (24 sessions). A maximum extension of 2 weeks can be considered in very special cases.

              </li>
            </ul>
          </div>
          <p>
            For enquiries on online home tuitions, you may SMS us (or drop a message on WhatsApp) at +91-22-26122185, +91-22-26110506 or email us at info@theyogainstitute.org.
          </p>
          <p>
            Corporate enquiries can be addressed to corporate.training@theyogainstitute.org
          </p>
        </div>
      </div>
      {openForm && <HomeTutions courseMode={plan} />}
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
    </>
  )
}
export default OnlineTution
