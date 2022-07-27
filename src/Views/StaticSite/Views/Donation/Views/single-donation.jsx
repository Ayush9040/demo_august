import React,{ useState,useEffect } from 'react'
import Donation from '../../../Components/Donation'
import SectionComponent from '../../../Components/SectionComponent'
import './style.scss'
// import { data } from '../Constants/data'
import { useDispatch, useSelector } from 'react-redux'
import InnerNavComponent from '../../../Components/InnerNavComponent'
import { useParams } from 'react-router-dom'
import { fetchDonationsData } from '../Donation.action'
const SingleDonation = () => {
  const [page,setPage]=useState({})
  const { donationId } = useParams()
  const dispatch = useDispatch()
  const { donationPrograms } = useSelector(state => state.donation)
  useEffect(() => {
    scrollTo(0, 0)
    dispatch(fetchDonationsData())
    setPage(donationPrograms.find(point=>(donationId===point._id)))
  }, [])


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
