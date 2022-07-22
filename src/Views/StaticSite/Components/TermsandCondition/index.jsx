import React,{ useEffect } from 'react'
//import baseDomain, { background } from '../../assets/images/imageAsset'
import data from './data'
import './style.scss'
//import CommonBanner from '../Common-banner'
//import baseDomain, { background } from '../../assets/images/imageAsset'
import InnerNavComponent from '../InnerNavComponent'

const TermsCondition = () => {

  let tnc = {
    title: 'alumni-gallery',
    color: 'orange',
    menuColor: 'black',
    menuItems:[]
  }


  useEffect(()=>{
    scrollTo(0,0)
  },[])



  // let termsAndCondition =
  //   'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only ve centuries, but also the leap into elec- tronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  return (
    <>
      <div className='terms-container'>
        <InnerNavComponent abc={tnc} />
        <div className='banner-heading'>
                Terms & Conditions
          <div className='bottom-line'></div>
        </div>
      </div>
      <div className='terms-and-conditions'>
        {data.map((value) => {
          return (
            <div key={value.heading}>
              <h2>{value.heading}</h2>
              <p>{value.points}</p>
            </div>
          )
        })}
        <p className='t-c-notes' >
          Students found violating these instructions wilfully or whose presence
          is considered undesirable, for any reason, will be asked to leave
          immediately by the Course Coordinator without giving any reason or
          prior notice. It goes without saying that fees will not be refunded.
        </p>
      </div>
    </>
  )
}

export default TermsCondition
