import React,{ useState,useEffect } from 'react'
import Donation from '../../Components/Donation'
import SectionComponent from '../../Components/SectionComponent'
//import baseDomain,{ donationAssets } from '../../assets/images/imageAsset'
import './style.scss'
import { data } from '/home/nex-g/Desktop/tyi-user-webapp/src/Views/StaticSite/Views/Donation/data.js'
import InnerNavComponent from '../InnerNavComponent'
import { useParams } from 'react-router-dom'
const SingleDonation = () => {
  const [page,setPage]=useState({})
  const { donationId } = useParams()
  useEffect(() => {
    scrollTo(0, 0)
    setPage(data.find(point=>(donationId===point.key)))
  }, [])
  console.log(page,'xyz')

  const SingleDonationBar = {
    title: 'Single Donation',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }



  return (
    <div className="singleDonation-page">
      <InnerNavComponent abc={SingleDonationBar}/>
      <SectionComponent 
        image={page.image}
        title={page.title}
        description={page.description}
      />
      <Donation />
    </div>
  )
}

export default SingleDonation
