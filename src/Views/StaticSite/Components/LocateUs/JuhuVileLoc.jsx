import React from 'react'
import JuhuVile from './JuhuVile'
import InnerNavComponent from '../InnerNavComponent'
import './location.scss'
const JuhuVileLoc = () => {
  const viewBlog = {
    title: 'Blogs',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }
  return (
    <>
      <InnerNavComponent abc={viewBlog} />
      <div className='heading-main'>
        <h1 className='heading-1'>JUHU-VILE PARLE-SANTACRUZ-LOKHANDWALA (WEST)</h1>
        <h1 className='heading-2'>Mumbai, India</h1>
      </div>
      <div className='carosoul-main'>
        <JuhuVile />
      </div>
    </>
  )
}
export default JuhuVileLoc