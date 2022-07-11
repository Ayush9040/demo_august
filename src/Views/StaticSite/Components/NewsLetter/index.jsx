import React, { useState } from 'react'
import Heading from '../Heading'
import { newsletter } from '../../assets/icons/icon'
import CommonBtn from '../commonbtn'
import './style.scss'
import { Link } from 'react-router-dom'
import { validateEmail } from '../../../../helpers'
import baseDomain, { homeAssets } from '../../assets/images/imageAsset'
import axios from 'axios'

const NewsLetter = () => {

  const [mail,setMail] = useState('')
  const [err,setErr]=useState(false)
  const [sucess,setSuccess]=useState(false)



  const checkMail = async()=>{
    if(!validateEmail(mail)){
      setErr(true)
    }else{
      const response = await axios.post('https://www.authserver-staging-be.theyogainstituteonline.org/v1/ali/newslettermail',{ email:mail })
      if(response.data.success===true){
        setSuccess(true)
      }
    }
  }

  return (
    <div className="newsletter-container global-padding">
      <div className="magezines">
        <div className="images">
          <div className="image">
            <Link to="/yogasattva">
              <img src={`${baseDomain}${homeAssets.homeAsset67}`} alt='Yogasattva-jan' />
            </Link>

            <p>January 2022</p>
          </div>
          <div className="image">
            <Link to="/yogasattva">
              <img src={`${baseDomain}${homeAssets.homeAsset68}`} alt='Yogasattva-feb'/>
            </Link>

            <p>Feburary 2022</p>
          </div>
          <div className="image">
            <Link to="/yogasattva">
              <img src={`${baseDomain}${homeAssets.homeAsset69}`} alt='Yogasattva-march'/>
            </Link>

            <p>March 2022</p>
          </div>
        </div>
        <div className="description">
          <p>
            Yoga Sattva is The Yoga Institute’s FREE official newsletter aimed
            at spreading yoga philosophy to mankind. It has scholarly articles
            by Dr Jayadeva and Smt. Hansaji.
          </p>
          <Link to="/yogasattva">
            <CommonBtn text={'Explore More'} />
          </Link>
        </div>
      </div>
      <div className="subscription">
        <Heading
          logo={newsletter}
          smallText={'Subscribe To Our'}
          largeText={'Newsletter'}
        />
        <div className="subscription-form">
          {sucess===false ? <input type={'email'} onChange={(e)=>{setMail(e.target.value);setErr(false)}} placeholder="Enter Your Email Id" />:<p>Thank You for subscribing</p>}
          {err && <small>Please Enter Valid Email</small>}
        </div>
        {sucess===false && <div onClick={checkMail} >
          <CommonBtn text={'Subscribe Now'} />
        </div>}
      </div>
    </div>
  )
}

export default NewsLetter
