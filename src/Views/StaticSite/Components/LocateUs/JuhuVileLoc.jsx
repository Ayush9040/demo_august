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
      <div className='carosoul-main'>
        <JuhuVile />
      </div>
    </>
  )
}
export default JuhuVileLoc