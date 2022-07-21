import React,{ useState } from 'react'
import CommanModal from '../../../../Components/CommanModal'
import InnerNavComponent from '../../../../Components/InnerNavComponent'
import './style.scss'

const PrintMedia = () => {

 
  const [ openModal,setOpenModal ]=useState(false)
  const [imageUrl,setImageUrl]=useState('')

  const MediaNews = {
    title: 'news',
    color: 'black',
    menuColor: 'black',
    menuItems: [
      // {
      //   innerTitle: 'gallery',
      //   url: '/media/media-gallery',
      //   name: 'Gallery',
      // },
      // {
      //   innerTitle: 'news',
      //   url: '/media/news',
      //   name: 'News',
      // },
      // {
      //   innerTitle: 'events',
      //   url: '/media/events',
      //   name: 'Events',
      // },
    ],
  }

  return (
    <>
      <div className="news-container">
        {/* <MediaNav title={'News'} /> */}
        <InnerNavComponent abc={MediaNews} />
        {/* <MediaSection
      description={description}
      title={'News'}
      subHeading={'Highligths'}
      sectionColor={'#D58173'}
    /> */}
        <div className='news-card-container' >
          <div className='news-card' onClick={()=>{setOpenModal(true);setImageUrl('https://www.w3schools.com/w3css/img_lights.jpg')}} >
            <img src='https://www.w3schools.com/w3css/img_lights.jpg' />
            <div className='news-details' >
              <p>Title</p>
              <h3>Date</h3>
            </div>
          </div>
          <div className='news-card' >
            <img src='https://www.w3schools.com/w3css/img_lights.jpg' />
            <div className='news-details' >
              <p>Title</p>
              <h3>Date</h3>
            </div>
          </div>        <div className='news-card' >
            <img src='https://www.w3schools.com/w3css/img_lights.jpg' />
            <div className='news-details' >
              <p>Title</p>
              <h3>Date</h3>
            </div>
          </div>        <div className='news-card' >
            <img src='https://www.w3schools.com/w3css/img_lights.jpg' />
            <div className='news-details' >
              <p>Title</p>
              <h3>Date</h3>
            </div>
          </div>        <div className='news-card' >
            <img src='https://www.w3schools.com/w3css/img_lights.jpg' />
            <div className='news-details' >
              <p>Title</p>
              <h3>Date</h3>
            </div>
          </div>
        </div>
      </div>
      {openModal && <CommanModal image={imageUrl} closeModal={setOpenModal} />}
    </>
  )
}

export default PrintMedia